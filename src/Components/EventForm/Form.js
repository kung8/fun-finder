import React, {Component} from 'react'
import FormCategory from './FormCategory'
import FormTime from './FormTime'
import DateRange from '@wojtekmaj/react-daterange-picker'
import FormGroup from './FormGroup'

class Form extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            event_date:[new Date(),new Date()],
            startTimeHr:'12',
            startTimeMin:'00',
            startTimeAP:'AM',
            endTimeHr:'12',
            endTimeMin:'00',
            endTimeAP:'AM',
            music:false,
            sports:false,
            foodie:false,
            outdoor:false,
            indoor:false,
            museum:false,
            art:false,
            book:false,
            lecture:false,
            dance:false, 
            theatre:false,
            comedy:false,
            board:false, 
            video:false, 
            service:false,
            date:false,
            family:false,
            friends:false,
            large:false
        }
    }

    handleBoolean=(prop)=>{
        this.setState({
            [prop]:!this.state[prop]
        })
    }

    handleTime=(prop,value)=>{
        this.setState({
            [prop]:value
        })
    }

    render(){
        console.log(this.state)
        return(
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                <input type="text" placeholder='Event Name' value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
                <DateRange onChange={date=>this.setState({event_date:date})} value={this.state.event_date}/>
                <FormTime handleTime={this.handleTime}/>
                <FormCategory handleBoolean={this.handleBoolean}/>
                <FormGroup  handleBoolean={this.handleBoolean}/>
                <button>Add Event</button>
            </div>
        )
    }
}

export default Form