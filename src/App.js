import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './CSS/Home.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Empform from './Components/Empform';
import Emplist from './Components/Emplist';
import ViewItem from './Components/ViewItem'
import CarouselCont from './Components/CarouselCont';

import Array from './Components/Array'

class App extends React.Component {

  render() {
  
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path={'/view/:emp_id'} component={() => <ViewItem/>} />
            <Route path={'/emp'} component={() => <Emplist/>}/>
          <Route path={'/form'} component={() => <Empform/>}/>
          <Route path={'/list'} component={() => <Array
          />}/>
            <Route path={'/'} component={() => <CarouselCont/>}/>
            

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;