import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateWaterDelivery from'./components/CreateWaterDelivery';
import EditWaterDelivery from'./components/EditWaterDelivery';
import Home from'./components/Home';
import NavBar from'./components/NavBar';
import WaterDeliveryDetails from'./components/WaterDeliveryDetails';
// import image5 from './image5.jpg'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
       <div className="container">
         <NavBar/>
         <Route path="/" exact component={Home}></Route>
         <Route path="/add" component={CreateWaterDelivery}></Route>
         <Route path="/edit/:id" component={EditWaterDelivery}></Route>
         <Route path="/store/:id" component={WaterDeliveryDetails}></Route>

         </div>
         </div>
         </BrowserRouter>
    

    
    )
  }
}


