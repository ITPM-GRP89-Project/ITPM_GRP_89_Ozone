import React, { Component } from 'react';
import axios from 'axios'

export default class EditCleanUp extends Component {


    constructor(props){
        super(props);
        this.state={
            name:"",
            contactNo:"",
            address:"",
            peovince:"",
            image:""
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
        const id = this.props.match.params.id;


        const {name,contactNo,address,province,image} = this.state;

        const data ={
            name:name,
            contactNo:contactNo,
            address:address,
           province:province,
            image:image
            
        }

        console.log(data)
        
        axios.put(`http://localhost:8000/cleanUp/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert(" Updated Successfully")
                this.setState({
                    name:"",
                    contactNo:"",
                    address:"",
                    province:"",
                    image:""
                    
                })
                
            }
        })

        
    
    }

   
retriveveCleanUp(){

        axios.get("./cleanUp").then(res =>{

          if (res.data.success){

            this.setState({

              cleanUp:res.data.existingCleanUp

            });

    

            console.log(this.state.cleanUp)

          }

        });

      };


    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/cleanUp/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                  name:res.data.cleanUp.name,
                  contactNo:res.data.cleanUp.contactNo,
                  address:res.data.cleanUp.address,
                  province:res.data.cleanUp.province,
                  image:res.data.cleanUp.image,

                });

                console.log(this.state.cleanUp);
                      this.retriveveCleanUp();       
            }
        });

    }

    render() {
        return (
            <div className="col-md-6 mt-4 mx-auto">
               <h1 className="h3 mb-3 font-weight-normal">Update CleanUp</h1>
                  <form className="needs-validation" noValidate>
                      <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Name</label>
                          <input type="text"
                         className="form-control"
                         name="name" required
                         placeholder="Enter Name"
                         value={this.state.name}
                         onChange={this.handleInputChange}/>
                          {/* <select id="name"
                          className="form-control"
                          name="name" required
                          placeholder="Enter Name"
                          value={this.state.name}
                          onChange={this.handleInputChange}>
                           <option selected>Choose.....</option>
                           <option>Dark Table Clothes</option>
                           <option>Ballons</option>
                           <option>Red color Table Clothes</option>
                           <option>Dark Lights</option>
                           <option>Green Color chair covers</option>
                           <option>Blue color chair covers</option>
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
                         placeholder="Enter Contact No"
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
                          placeholder="Enter image"
                          value={this.state.image}
                          onChange={this.handleInputChange}/>
                        </div>



                        

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
