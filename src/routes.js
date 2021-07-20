import React from 'react';
import {Router} from 'react-router'
import {BrowserRouter,Switch,Route} from 'react-router-dom';

import Home from './pages/Home';
import Autentication from './pages/Autentication';
import Register from './pages/Register';



function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/inicial" exact component={Home}/>
            <Route path="/login"  component={Autentication}/>
            <Route path="/cadastrar" component={Register}/>
        </Switch>
    </BrowserRouter>
    );
};


export default Routes;