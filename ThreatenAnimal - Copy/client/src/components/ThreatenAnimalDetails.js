import React, { Component} from 'react';
import axios from 'axios';

export default class ThreatenAnimalDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            threatenAnimal:{}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`/threatenAnimal/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    threatenAnimal:res.data.threatenAnimal

                });

                console.log(this.state.threatenAnimal);
            }
        });

    }

    render() {

        const {name,province,species,specificName,picture,threat} = this.state.threatenAnimal;

        return (
            
           <div style={{marginTop:'40px'}}>
               <h2>--- Details of the ThreatenAnimals---</h2>
               &nbsp;
           <h3>{name}</h3>
           <hr/>


           <dl className="row">
               <dt className="col-sm-3">Province</dt>
               <dd className="col-sm-9">{province}</dd>

               <dt className="col-sm-3">Species</dt>
               <dd className="col-sm-9">{species}</dd>

               <dt className="col-sm-3">Specific Name</dt>
               <dd className="col-sm-9">{specificName}</dd>

               <dt className="col-sm-3">Picture</dt>
               <dd className="col-sm-9">{picture}</dd>

               <dt className="col-sm-3">Threat</dt>
               <dd className="col-sm-9">{threat}</dd>

               




           </dl>
               
            
            
           </div>
        )
    }
}