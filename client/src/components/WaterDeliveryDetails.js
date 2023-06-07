import React, { Component} from 'react';
import axios from 'axios';

export default class WaterDeliveryDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            waterDelivery:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/waterDelivery/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    waterDelivery:res.data.waterDelivery

                });

                console.log(this.state.waterDelivery);
            }
        });

    }

    render() {

        const {name,contactNo,city,district,address,category} = this.state.waterDelivery;

        return (
            
           <div style={{marginTop:'40px'}}>
               <h2>--- Details of the waterDelivery---</h2>
               &nbsp;
           <h3>{name}</h3>
           <hr/>


           <dl className="row">
               <dt className="col-sm-3">Contact No</dt>
               <dd className="col-sm-9">{contactNo}</dd>

               <dt className="col-sm-3">City</dt>
               <dd className="col-sm-9">{city}</dd>

               <dt className="col-sm-3">District</dt>
               <dd className="col-sm-9">{district}</dd>

               <dt className="col-sm-3">Address</dt>
               <dd className="col-sm-9">{address}</dd>

               <dt className="col-sm-3">Category</dt>
               <dd className="col-sm-9">{category}</dd>

               




           </dl>
               
            
            
           </div>
        )
    }
}