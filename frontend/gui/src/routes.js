import React from 'react';
import {Route} from 'react-router-dom'
import Contact from './containers/Contact'
import TravelList from './containers/TravelListView';
import TravelDetail from './containers/DetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';


const BaseRouter = () => {
    return ( 
        <div>
            <Route exact path='/' component={TravelList} />
            <Route exact path='/travel/:travelID' component={TravelDetail} /> 
            <Route exact path='/contact/' component={Contact} />    
            <Route exact path='/login/' component={Login} /> 
            <Route exact path='/signup/' component={Signup} /> 
        </div>
    );
}
 
export default BaseRouter;