import React, { Component} from 'react';
import axios from 'axios'

export default class CreateThreatenAnimal extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            province:"",
            species:"",
            specificName:"",
            picture:"",
            threat:"",
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

        const {name,province,species,specificName,picture,threat} = this.state;

        const data ={
            name:name,
            province:province,
            species:species,
            specificName:specificName,
            picture:picture,
            threat:threat
            
        }

        console.log(data)
        
        axios.post("http://localhost:8000/threatenAnimal/save",data).then((res) =>{
            alert("Added Successfully");
            if(res.data.success){
                this.setState({
                    name:"",
                    province:"",
                    species:"",
                    specificName:"",
                    picture:"",
                    threat:""
                })
                
            }
        })

        
    
    }
    

    

    render() {
        return (
           <div className="col-md-6 mt-4 mx-auto">
               <h1 className="h3 mb-3 font-weight-normal">Add New ThreatenAnimal</h1>
                  <form className="needs-validation" noValidate>
                      <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Name</label>
                          <input type="text"
                         className="form-control"
                         name="name" required
                         placeholder="Enter name"
                         value={this.state.name}
                         onChange={this.handleInputChange}/>
                          
   
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Province</label>
                        <input type="text"
                         className="form-control"
                         name="province" required
                         placeholder="Enter province"
                         value={this.state.province}
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
                          placeholder="upload picture"
                          pattern="[A-Za-z]"
                          value={this.state.picture}
                          onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                          <label style={{marginBottom:'5px'}}>Threat</label>
                          <input type="text"
                          className="form-control"
                          name="threat" required
                          placeholder="Enter threat"
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
