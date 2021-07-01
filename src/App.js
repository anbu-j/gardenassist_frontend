import React, { Component } from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Garden from './Garden';
import FlowerList from './FlowerList';
import FlowerEdit from './FlowerEdit';
import FruitList from './FruitList';
import FruitEdit from './FruitEdit';


//it calls our API to show the list of plants in flowergarden with their properties:
class App extends Component {
  

  render() {
   
    return (
        <div className="App">
          <header className="App-header">
           
            <div className="App-intro">
              
              <h2>Welcome To My Garden</h2>
              <Router>
                <Switch>
                  <Route path='/' exact={true} component={Garden}/> {/* Calls Home (Garden page) */}
                  <Route path='/flowerslist' exact={true} component={FlowerList}/> {/* Calls main page (Flowers list) */}
                  <Route path='/flowerslist/:plant_id' component={FlowerEdit}/> {/* Calls the page Add or Edit form data */}
                  <Route path='/fruitslist' exact={true} component={FruitList}/> {/* Calls main page (Flowers list) */}
                  <Route path='/fruitslist/:plant_id' component={FruitEdit}/> {/* Calls the page Add or Edit form data */}
                </Switch>
              </Router>
            </div>
    </header>
        </div>
    )
  }
}

export default App;


