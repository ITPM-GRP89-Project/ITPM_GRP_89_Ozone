import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateCleanUp from'./components/CreateCleanUp';
import EditCleanUp from'./components/EditCleanUp';
import Home from'./components/Home';
import NavBar from'./components/NavBar';
import cleanUpDetails from'./components/cleanUpDetails';
// import image5 from './image5.jpg'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
       <div className="container">
         <NavBar/>
         <Route path="/" exact component={Home}></Route>
         <Route path="/add" component={CreateCleanUp}></Route>
         <Route path="/edit/:id" component={EditCleanUp}></Route>
         <Route path="/store/:id" component={cleanUpDetails}></Route>

         </div>
         </div>
         </BrowserRouter>
    

    
    )
  }
}


