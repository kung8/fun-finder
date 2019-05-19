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
        this.getAllEvents()
    }

    getAllEvents = async () => {
        let events = await axios.get('/api/getAllEvents')
        console.log(events.data)
        this.setState({
            events: events.data
        })
    }

    render() {
        console.log(this.state.events)
        const { events } = this.state
        const mappedEvents = events.map(event => {
            return (
                <div key={event.event_id} style={{ alignItems:'center',display:'flex', flexDirection:'column',border: 'solid black 2px', width: '300px', height: '300px', background: 'white', margin: '10px'}}>
                    <img src={event.image} alt="" height='200px' width='250px' />
                    <h1 style={{fontSize:20}}>{event.event_name}</h1>
                    <p>{event.address}</p>
                    <p>{event.city}, {event.state} {event.zipcode}</p>
                </div>
            )
        })
        //This is where i will be mapping over all of the events organized by most recent

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                <div style={{ background: 'yellow', width: '40%', display: 'flex', justifyContent: 'space-between' }}>
                    <button>See Your Events</button>
                    {/* it will just filter out your events when you click on that you like */}
                    {/* for your events you will be able to edit them */}
                    <button>Add Event</button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    {mappedEvents}
                </div>
            </div>

        )
    }
}

export default Dashboard