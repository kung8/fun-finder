import {Switch, Route} from 'react-router-dom';
import React from 'react';
// import Dashboard from './Components/Dashboard';
import Calendar from './Components/Calendar';
import Category from './Components/Category';
import Deals from './Components/Deals';
import Group from './Components/Group';
import Dining from './Components/Dining'
import Events from './Components/Events'

export default (
        <Switch>  
            <Route path='/dining' component={Dining}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/events' component={Events}/>
            <Route path='/deals' component={Deals}/>
            <Route path='/group' component={Group}/>
            <Route path='/' exact component={Category}/>
            {/* <Route exact path='/' component={Dashboard}/> */}
        </Switch> 
)
