import React, { Component } from 'react';
import axios from 'axios'

export default class EditThreatenAnimal extends Component {


    constructor(props){
        super(props);
        this.state={
            name:"",
            province:"",
            Species:"",
            specificName:"",
            picture:"",
            threat:""
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


        const {name,province,Species,specificName,picture,threat} = this.state;

        const data ={
            name:name,
            province:province,
            Species:Species,
            specificName:specificName,
            picture:picture,
            threat:threat
            
        }

        console.log(data)
        
        axios.put(`http://localhost:8000/threatenAnimal/update/${id}`,data).then((res) =>{
            if(res.data.success){
                alert(" Updated Successfully")
                this.setState({
                    name:"",
                    province:"",
                    Species:"",
                    specificName:"",
                    picture:"",
                    threat:""
                    
                })
                
            }
        })

        
    
    }

   
retriveveThreatenAnimals(){

        axios.get("./threatenAnimal").then(res =>{

          if (res.data.success){

            this.setState({

                threatenAnimals:res.data.existingThreatenAnimal

            });

    

            console.log(this.state.threatenAnimal)

          }

        });

      };


    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/threatenAnimal/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                  name:res.data.threatenAnimal.name,
                  province:res.data.threatenAnimal.province,
                  Species:res.data.threatenAnimal.Species,
                  specificName:res.data.threatenAnimal.specificName,
                  picture:res.data.threatenAnimal.picture,
                  threat:res.data.threatenAnimal.threat,

                });

                console.log(this.state.threatenAnimal);
                      this.retriveveThreatenAnimals();       
            }
        });

    }

    render() {
        return (
            <div className="col-md-6 mt-4 mx-auto">
               <h1 className="h3 mb-3 font-weight-normal">Update ThreatenAnimal</h1>
                  <form className="needs-validation" noValidate>
                      <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Name</label>
                          <input type="text"
                         className="form-control"
                         name="name" required
                         placeholder="Enter Name"
                         value={this.state.name}
                         onChange={this.handleInputChange}/>
                          
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Province</label>
                        <input type="text"
                         className="form-control"
                         name="province" required
                         placeholder="Enter Province"
                         value={this.state.Province}
                         onChange={this.handleInputChange}/>
                         </div>


                        

                      

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Species</label>
                          <input type="text"
                          className="form-control"
                          name="species" required
                          placeholder="Enter Species"
                          value={this.state.species}
                          onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Specific Name</label>
                          <input type="text"
                          className="form-control"
                          name="specificName" required
                          placeholder="Enter Specific Name"
                          pattern="[A-Za-z]"
                          value={this.state.specificName}
                          onChange={this.handleInputChange}/>
                        </div>
                        
                         <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Picture</label>
                          <input type="text"
                          className="form-control"
                          name="picture" required
                          placeholder="Enter Picture"
                          value={this.state.picture}
                          onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Threat</label>
                          <input type="text"
                          className="form-control"
                          name="threat" required
                          placeholder="Enter Threat"
                          value={this.state.threat}
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
