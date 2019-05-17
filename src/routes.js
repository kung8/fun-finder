import {Switch, Route} from 'react-router-dom';
import React from 'react';
import Dashboard from './Components/Dashboard';
import Calendar from './Components/Calendar';
import Category from './Components/Category';
import Deals from './Components/Deals';
import Group from './Components/Group';
import Dining from './Components/Dining'

export default (
        <Switch>  
            <Route path='/dining' component={Dining}/>
            <Route path='/calendar' component={Calendar}/>
            <Route path='/category' component={Category}/>
            <Route path='/deals' component={Deals}/>
            <Route path='/group' component={Group}/>
            <Route exact path='/' component={Dashboard}/>
        </Switch> 
)
