import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Dash from './Components/Dashboard'
import Day from './Components/Calendar'
import Activities from './Components/Activities'
import Deals from './Components/Deals'
import Size from './Components/Size'

export default (
        <Switch>  
            <Route path='/calendar' component={Day} />
            <Route path='/activities' component={Activities}/>
            <Route path='/deals' component={Deals}/>
            <Route path='/group' component={Size}/>
            <Route exact path='/' component={Dash}/>
        </Switch> 
)
