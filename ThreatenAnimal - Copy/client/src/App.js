import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateThreatenAnimal from'./components/CreateThreatenAnimal';
import EditThreatenAnimal from'./components/EditThreatenAnimal';
import Home from'./components/Home';
import NavBar from'./components/NavBar';
import ThreatenAnimalDetails from'./components/ThreatenAnimalDetails';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
       <div className="container">
         <NavBar/>
         <Route path="/" exact component={Home}></Route>
         <Route path="/add" component={CreateThreatenAnimal}></Route>
         <Route path="/edit/:id" component={EditThreatenAnimal}></Route>
         <Route path="/threatenAnimal/:id" component={ThreatenAnimalDetails}></Route>

         </div>
         </div>
         </BrowserRouter>
    

    
    )
  }
}


