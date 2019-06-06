import React, {Component} from 'react'
import Calendar from 'react-calendar'
// import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker'
import DateRange from '@wojtekmaj/react-daterange-picker'
import Form from './EventForm/Form'

class Events extends Component {
    constructor(){
        super()
        this.state={
            events:[],
            // name:'',
            // date:[new Date(),new Date()],
            // startTime:'',
            // endTime:'',
            // music:false,
            // sports:false,
            // foodie:false,
            // outdoor:false,
            // indoor:false,
            // museum:false,
            // art:false,
            // book:false,
            // lecture:false,
            // dance:false, 
            // theatre:false,
            // comedy:false,
            // board:false, 
            // video:false, 
            // service:false,
            // group:[]
        }
    }

    componentDidMount(){
        //get all the liked events by the specific user
    }

    render(){
        console.log(this.state.date,this.state)
        return(
            <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
                <div style={{width:350,background:'white',minHeight:500,marginTop:20, display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <Form/>
                    {/* this is where the saved/liked events will be...*/}
                </div>
                <div style={{display:'flex',width:800,background:'blue',marginTop:20,display:'flex'}}>
                    <h1>Interested Events:</h1>
                </div>

            </div>
        )
    }
}
export default Events