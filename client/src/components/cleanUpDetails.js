import React, { Component} from 'react';
import axios from 'axios';

export default class CleanUpDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            cleanUp:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/cleanUp/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    cleanUp:res.data.cleanUp

                });

                console.log(this.state.cleanUp);
            }
        });

    }

    render() {

        const {name,contactNo,address,province,image} = this.state.cleanUp;

        return (
            
           <div style={{marginTop:'40px'}}>
               <h2>--- Details of the cleanUp---</h2>
               &nbsp;
           <h3>{name}</h3>
           <hr/>


           <dl className="row">
               <dt className="col-sm-3">Contact No</dt>
               <dd className="col-sm-9">{contactNo}</dd>

               <dt className="col-sm-3">Address</dt>
               <dd className="col-sm-9">{address}</dd>

               <dt className="col-sm-3">province</dt>
               <dd className="col-sm-9">{province}</dd>

               <dt className="col-sm-3">image</dt>
               <dd className="col-sm-9">{image}</dd>


               




           </dl>
               
            
            
           </div>
        )
    }
}