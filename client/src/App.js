import React, {Component} from 'react';
import {Container} from 'reactstrap';
import AppNavBar from './components/AppNavBar.js';
import ShoppingList from './components/ShoppingList.js';
import ItemModal from './components/ItemModal.js';
import {Provider} from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Container>
          <ItemModal/>
          <ShoppingList />
        </Container>        
      </div>
      </Provider>      
    );
  }  
}

export default App;
