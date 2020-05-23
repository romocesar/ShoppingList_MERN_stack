import React, {Component} from 'react';
import AppNavBar from './components/AppNavBar.js';
import ShoppingList from './components/ShoppingList.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
        <ShoppingList />
      </div>
    );
  }  
}

export default App;
