import React, {Component} from 'react';
import MainPage from './pages/MainPage';
import "../src/index.css"
import {BrowserRouter, Switch , Route} from "react-router-dom"
import AllNewProduct from '../src/pages/AllNewProduct';
import ForRegister from './pages/ForRegister';
//import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <Switch>
                    
                <Route exact path="/" >
                  <MainPage />
                </Route>
                <Route path="/Register" component={ForRegister} />           
                <Route exact path="/allNewProduct">
                  <AllNewProduct/>
                </Route>

              </Switch>
            </BrowserRouter>
        );
    }
}

export default App;