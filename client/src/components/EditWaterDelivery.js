import React, { Component } from 'react';
import axios from 'axios'

export default class EditWaterDelivery extends Component {


    constructor(props){
        super(props);
        this.state={
            name:"",
            contactNo:"",
            city:"",
            district:"",
            address:"",
            category:""
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


        const {name,contactNo,city,district,address,category} = this.state;

        const data ={
            name:name,
            contactNo:contactNo,
            city:city,
            district:district,
            address:address,
            category:category
            
        }

        console.log(data)
        
        axios.put(`http://localhost:8000/waterDelivery/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert(" Updated Successfully")
                this.setState({
                    name:"",
                    contactNo:"",
                    city:"",
                    district:"",
                    address:"",
                    category:""
                })
                
            }
        })

        
    
    }

   
retriveveWaterDeliverys(){

        axios.get("./waterDelivery").then(res =>{

          if (res.data.success){

            this.setState({

              waterDeliverys:res.data.existingWaterDelivery

            });

    

            console.log(this.state.waterDelivery)

          }

        });

      };


    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/waterDelivery/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                  name:res.data.waterDelivery.name,
                  contactNo:res.data.waterDelivery.contactNo,
                  city:res.data.waterDelivery.city,
                  district:res.data.waterDelivery.district,
                  address:res.data.waterDelivery.address,
                  category:res.data.waterDelivery.category,

                });

                console.log(this.state.waterDelivery);
                      this.retriveveWaterDeliverys();       
            }
        });

    }

    render() {
        return (
            <div className="col-md-6 mt-4 mx-auto">
               <h1 className="h3 mb-3 font-weight-normal">Update WaterDelivery</h1>
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
                          <label style={{marginBottom:'5px'}}>City</label>
                          <input type="text"
                          className="form-control"
                          name="city" required
                          placeholder="Enter City"
                          value={this.state.city}
                          onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>District</label>
                          <input type="text"
                          className="form-control"
                          name="district" required
                          placeholder="Enter District"
                          pattern="[A-Za-z]"
                          value={this.state.district}
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
                          <label style={{marginBottom:'5px'}}>Category</label>
                          <input type="text"
                          className="form-control"
                          name="category" required
                          placeholder="Enter Category"
                          value={this.state.category}
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
