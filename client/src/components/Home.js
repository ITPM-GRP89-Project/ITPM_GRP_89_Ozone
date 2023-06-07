import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default class Home extends Component {
constructor(props){
  super(props);

  this.state={
    waterDeliverys:[]
  };

}


componentDidMount(){
  this.retriveveWaterDeliverys();

}

retriveveWaterDeliverys(){
  axios.get("http://localhost:8000/waterDeliverys").then(res =>{
    if(res.data.success){
      this.setState({
        waterDeliverys:res.data.existingWaterDeliverys
      });

      console.log(this.state.waterDeliverys)
    }


  });
}

//report

genPDF =() => {

  const doc = new jsPDF()
  doc.setFontSize(20);
  doc.text("waterDeliverys Details List", 50,10);
  doc.autoTable({
  html: '#content'

})

doc.setFontSize(12);
doc.text("Auto Hub Service Station - ", 10,272);
doc.setFontSize(10);
doc.text(" waterDeliverys Details Report", 52,272);
doc.save('waterDeliverys Details.pdf')

}

//delete function

onDelete = (id) =>{

  axios.delete(`/waterDelivery/delete/${id}`).then((res) =>{
    alert("Deleted Successfully");
    this.retriveveWaterDeliverys();
  })
}

//Search waterDeliverys

filterData(waterDeliverys,searchKey){

  const result = waterDeliverys.filter((waterDelivery) =>
  waterDelivery.name.toLowerCase().includes(searchKey)
)

this.setState({waterDeliverys:result})
}


handleSearchArea = (e) =>{

  const searchKey = e.currentTarget.value;

  axios.get("http://localhost:8000/waterDeliverys").then(res =>{
    if(res.data.success){
     
       this.filterData(res.data.existingWaterDeliverys,searchKey)
      
    }
  });

}
  render() {
    return (
     

      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h2>All waterDeliverys</h2>
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
           <th scope="col">City</th>
           <th scope="col">District</th>
           <th scope="col">Address</th>
           <th scope="col">Category</th>
           <th scope="col">Action</th>
           </tr>
         </thead>
         <tbody>
           {this.state.waterDeliverys.map((waterDeliverys,index) =>(
             <tr key={index}>

               <th scope="row">{index+1}</th>
               <td>
                   <a href={`/store/${waterDeliverys._id}`} style={{textDecoration:'none'}}>
                   {waterDeliverys.name}
                   </a>
                   </td>

               <td>{waterDeliverys.contactNo}</td>
               <td>{waterDeliverys.city}</td>
               <td>{waterDeliverys.district}</td>
               <td>{waterDeliverys.address}</td>
               <td>{waterDeliverys.category}</td>
               
               <td>
                 <a className="btn btn-warning" href={`/edit/${waterDeliverys._id}`}>
                   <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(waterDeliverys._id)}>
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>

               </td>
              </tr>

           ))} 
           
         </tbody>

       </table>
       

       <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New waterDeliverys</a></button>
       &nbsp;

       
       <button type="button" className="btn btn-danger" style={{width:'250px',position:"absolute",

right:"150px"}}><a href="#" onClick={() =>this.genPDF()} style={{textDecoration:'none', color:'white'}}> GENERATE REPORT</a></button>
    

      </div>
      

    )
  }
}
