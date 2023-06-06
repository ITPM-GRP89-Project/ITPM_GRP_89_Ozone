import React, { Component} from 'react';
import axios from 'axios'

export default class CreateCleanUp extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            contactNo:"",
            address:"",
            province:"",
            image:"",
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

        
    }

    onSubmit = (e) =>{

        e.preventDefault();

        const {name,contactNo,address,province,image} = this.state;

        const data ={
            name:name,
            contactNo:contactNo,
            address:address,
            province:province,
            image:image
            
        }

        console.log(data)
        
        axios.post("http://localhost:8000/cleanUp/save",data).then((res) =>{
            alert("Added Successfully");
            if(res.data.success){
                this.setState({
                    name:"",
                    contactNo:"",
                    address:"",
                    province:"",
                    image:"",
                })
                
            }
        })

        
    
    }
    

    

    render() {
        return (
           <div className="col-md-6 mt-4 mx-auto">
               <h1 className="h3 mb-3 font-weight-normal">Add New CleanUp</h1>
                  <form className="needs-validation" noValidate>
                      <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Name</label>
                          <input type="text"
                         className="form-control"
                         name="name" required
                         placeholder="Enter name"
                         value={this.state.name}
                         onChange={this.handleInputChange}/>
                          {/* <select id="name"
                          className="form-control"
                          name="name" required
                          placeholder="Enter Name"
                          value={this.state.name}
                          onChange={this.handleInputChange}>
                           <option selected>Choose.....</option>
                           <option>Battery</option>
                           <option>Break Oil</option>
                           <option>Greece</option>
                           <option>Head Light</option>
                           <option>Tyre</option>
                           <option>Tubes</option>
                           <option>Nut&Bolts</option>
                           <option>Side Mirros</option>
                           <option>Tools</option>
                           
                           
                           

                        </select> */}
   
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Contact No</label>
                        <input type="text"
                         className="form-control"
                         name="contactNo" required
                         placeholder="Enter Conatact No"
                         value={this.state.contactNo}
                         onChange={this.handleInputChange}/>
                         </div>


                        

                      

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Address</label>
                          <input type="text"
                          className="form-control"
                          name="address" required
                          placeholder="Enter Address"
                          value={this.state.address}
                          onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>province</label>
                          <input type="text"
                          className="form-control"
                          name="province" required
                          placeholder="Enter province"
                          pattern="[A-Za-z]"
                          value={this.state.province}
                          onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>image</label>
                          <input type="text"
                          className="form-control"
                          name="image" required
                          placeholder="Upload image"
                          value={this.state.image}
                          onChange={this.handleInputChange}/>
                        </div>

                        {/* <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Cv Code</label>
                          <input type="text"
                          className="form-control"
                          name="cvCode" required
                          placeholder="Enter Cv Code"
                          value={this.state.cvCode}
                          onChange={this.handleInputChange}/>
                        </div> */}

                        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Save
                            </button>

                    </form>        
                    &nbsp;
             
           </div>
        )
    }
}