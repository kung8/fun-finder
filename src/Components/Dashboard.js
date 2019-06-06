import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            events: []        
        }
    }

    componentDidMount() {
        //this is where I will be doing an axios call for all the events how to do the top 20 events at a time...
        //save this to state and then map through in the render
        //learn pagination
        // this.getAllEvents()
    }

    // getAllEvents = async () => {
    //     let events = await axios.get('/api/getAllEvents')
    //     console.log(events.data)
    //     this.setState({
    //         events: events.data
    //     })
    // }

    render() {
        // console.log(this.state.events)
        const { events } = this.state
        const mappedEvents = events.map(event => {

            return (
                <div key={event.event_id} style={{ alignItems:'center',display:'flex', flexDirection:'column',border: 'solid black 2px', width: '300px', height: '450px', background: 'black', margin: '10px',fontSize:18,color:'white',borderRadius:'16px'}}>
                    <img src={event.image} alt="event image" style={{maxHeight:200,minHeight:200,borderRadius:'16px 16px 0 0'}} width='100%' />
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:10}}>
                        <h1 style={{fontSize:30}}>{event.event_name}</h1>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:5}}>
                            <p>{event.address}</p>
                            <p>{event.city}, {event.state} {event.zipcode}</p>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:5}}>
                            <p>{event.day} {event.date} {event.month} {event.year}</p>
                            <p>{event.start_time} to {event.end_time}</p>
                        </div>
                        <div style={{width:'95%',textAlign:'center',marginTop:10,overflowY:'scroll',height:80}}>
                            <p>{event.details}</p>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-evenly',width:'100%',marginTop:5}}>
                            <button style={{background:'forestgreen',color:'white',height:'25px',borderRadius:'10px'}}>
                                <i className="fas fa-star"/> Interested
                            </button>
                            <button style={{background:'forestgreen',color:'white',height:'25px',borderRadius:'10px'}}>
                                <i className="fas fa-pencil-alt"/> Edit
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
        //This is where i will be mapping over all of the events organized by most recent

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                {/* <div style={{ background: 'yellow', width: '40%', display: 'flex', justifyContent: 'space-between' }}> */}
                    
                    {/* <button>See Your Events</button> */}
                    {/* it will just filter out your events when you click on that you like */}
                    {/* for your events you will be able to edit them */}
                    
                    <button>Add Event</button>
                {/* </div> */}
                {/* <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    {mappedEvents}
                </div> */}
            </div>

        )
    }
}

export default Dashboard