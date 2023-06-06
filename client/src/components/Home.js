import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    cleanUp:[]
  };

}


componentDidMount(){
  this.retriveveCleanUp();

}

retriveveCleanUp(){
  axios.get("http://localhost:8000/cleanUp").then(res =>{
    if(res.data.success){
      this.setState({
        cleanUp:res.data.existingCleanUp
      });

      console.log(this.state.cleanUp)
    }


  });
}

//report

genPDF =() => {

  const doc = new jsPDF()
  doc.setFontSize(20);
  doc.text("cleanUp Details List", 50,10);
  doc.autoTable({
  html: '#content'

})

doc.setFontSize(12);
doc.text("Auto Hub Service Station - ", 10,272);
doc.setFontSize(10);
doc.text(" cleanUp Details Report", 52,272);
doc.save('cleanUp Details.pdf')

}

//delete function

onDelete = (id) =>{

  axios.delete(`/cleanUp/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retriveveCleanUp();
  })
}

//Search donations

filterData(cleanUp,searchKey){

  const result = cleanUp.filter((cleanUp) =>
  cleanUp.name.toLowerCase().includes(searchKey)
)

this.setState({cleanUp:result})
}


handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/cleanUp").then(res =>{
    if(res.data.success){
     
       this.filterData(res.data.existingCleanUp,searchKey)
      
    }
  });

}
  render() {
    return (
     

      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h2>All cleanUp</h2>
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
           <th scope="col">Contact No</th>
           <th scope="col">Address</th>
           <th scope="col">province</th>
           <th scope="col">image</th>
           </tr>
         </thead>
         <tbody>
           {this.state.cleanUp.map((cleanUp,index) =>(
             <tr key={index}>

               <th scope="row">{index+1}</th>
               <td>
                   <a href={`/store/${cleanUp._id}`} style={{textCleanUp:'none'}}>
                   {cleanUp.name}
                   </a>
                   </td>

               <td>{cleanUp.contactNo}</td>
               <td>{cleanUp.address}</td>
               <td>{cleanUp.province}</td>
               <td>{cleanUp.image}</td>
               
               
               <td>
                 <a className="btn btn-warning" href={`/edit/${cleanUp._id}`}>
                   <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(cleanUp._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>

               </td>
              </tr>

           ))} 
           
         </tbody>

       </table>
       

       <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New CleanUp Program</a></button>
       &nbsp;

       
       <button type="button" className="btn btn-danger" style={{width:'250px',position:"absolute",

right:"150px"}}><a href="#" onClick={() =>this.genPDF()} style={{textDecoration:'none', color:'white'}}> GENERATE REPORT</a></button>
    

      </div>
      

    )
  }
}
