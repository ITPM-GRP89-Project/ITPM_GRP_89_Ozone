import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    threatenAnimals:[]
  };

}


componentDidMount(){
  this.retriveveThreatenAnimals();

}

retriveveThreatenAnimals(){
  axios.get("http://localhost:8000/threatenAnimals").then(res =>{
    if(res.data.success){
      this.setState({
        threatenAnimals:res.data.existingThreatenAnimals
      });

      console.log(this.state.threatenAnimals)
    }


  });
}

//report

genPDF =() => {

  const doc = new jsPDF()
  doc.setFontSize(20);
  doc.text("ThreatenAnimals Details List", 50,10);
  doc.autoTable({
  html: '#content'

})

doc.setFontSize(12);
doc.text("Auto Hub Service Station - ", 10,272);
doc.setFontSize(10);
doc.text(" ThreatenAnimals Details Report", 52,272);
doc.save('ThreatenAnimals Details.pdf')

}

//delete function

onDelete = (id) =>{

  axios.delete(`/threatenAnimal/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retriveveThreatenAnimals();
  })
}

//Search ThreatenAnimals

filterData(threatenAnimals,searchKey){

  const result = threatenAnimals.filter((threatenAnimal) =>
  threatenAnimal.name.toLowerCase().includes(searchKey)||
  threatenAnimal.reason.toLowerCase().includes(searchKey)
)

this.setState({threatenAnimals:result})
}


handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/threatenAnimals").then(res =>{
    if(res.data.success){
     
       this.filterData(res.data.existingThreatenAnimals,searchKey)
      
    }
  });

}
  render() {
    return (
     

      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h2>All ThreatenAnimals</h2>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="search"
            name="searchQuery"
            onChange={this.handleSearchArea}>

            </input>
          </div>
        </div>
       <table className="table table-hover" style={{marginTop:'40px'}} id="content">
         <thead>
           <tr>
           <th scope="col">No</th>
           <th scope="col">Name</th>
           <th scope="col">Province</th>
           <th scope="col">Species</th>
           <th scope="col">specific Name</th>
           <th scope="col">Picture</th>
           <th scope="col">Threat</th>
           </tr>
         </thead>
         <tbody>
           {this.state.threatenAnimals.map((threatenAnimals,index) =>(
             <tr key={index}>

               <th scope="row">{index+1}</th>
               <td>
                   <a href={`/threatenAnimal/${threatenAnimals._id}`} style={{textDecoration:'none'}}>
                   {threatenAnimals.name}
                   </a>
                   </td>

               <td>{threatenAnimals.province}</td>
               <td>{threatenAnimals.species}</td>
               <td>{threatenAnimals.specificName}</td>
               <td>{threatenAnimals.picture}</td>
               <td>{threatenAnimals.threat}</td>
               
               <td>
                 <a className="btn btn-warning" href={`/edit/${threatenAnimals._id}`}>
                   <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(threatenAnimals._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>

               </td>
              </tr>

           ))} 
           
         </tbody>

       </table>
       

       <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New ThreatenAnimals</a></button>
       &nbsp;

       
       <button type="button" className="btn btn-danger" style={{width:'250px',position:"absolute",

right:"150px"}}><a href="#" onClick={() =>this.genPDF()} style={{textDecoration:'none', color:'white'}}> GENERATE REPORT</a></button>
    

      </div>
      

    )
  }
}
