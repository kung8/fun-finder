import React, { Component } from 'react';
import axios from 'axios';

class Category extends Component {
    constructor() {
        super()
        this.state = {
            events: [],
            order:'Order by Date',
            category:'Any Category',
            group:'Any Group Size',
            day:'Any Day',
            time:'Any Time',
            search:''
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

    handleClick=async()=>{
        const {order,category,group,day,time,search} = this.state
        console.log(order,category,group,day,time,search)
        let events = await axios.get(`/api/getEvents?order=${order}&category=${category}&group=${group}&day=${day}&time=${time}&search=${search}`)
        console.log(events.data)
        this.setState({
            events:events.data
        })
    }

    render() {
        console.log(this.state)
        const { events } = this.state
        const mappedEvents = events.map(event => {

            return (
                <div key={event.event_id} style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', border: 'solid black 2px', width: '300px', height: '450px', background: 'black', margin: '10px', fontSize: 18, color: 'white', borderRadius: '16px' }}>
                    <img src={event.image} alt="event image" style={{ maxHeight: 200, minHeight: 200, borderRadius: '16px 16px 0 0' }} width='100%' />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 }}>
                        <h1 style={{ fontSize: 30 }}>{event.event_name}</h1>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 5 }}>
                            <p>{event.address}</p>
                            <p>{event.city}, {event.state} {event.zipcode}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 5 }}>
                            <p>{event.day} {event.date} {event.month} {event.year}</p>
                            <p>{event.start_time} to {event.end_time}</p>
                        </div>
                        <div style={{ width: '95%', textAlign: 'center', marginTop: 10, overflowY: 'scroll', height: 80 }}>
                            <p>{event.details}</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', marginTop: 5 }}>
                            <button style={{ background: 'forestgreen', color: 'white', height: '25px', borderRadius: '10px' }}>
                                <i className="fas fa-star" /> Interested
                            </button>
                            <button style={{ background: 'forestgreen', color: 'white', height: '25px', borderRadius: '10px' }}>
                                <i className="fas fa-pencil-alt" /> Edit
                            </button>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' ,flexWrap:'wrap'}}>
                    <select value={this.state.order} onChange={e=>this.setState({order:e.target.value})}>
                        <option selected value='date'>Order by Date</option>
                        {/* <option value='popular'>Order by Relevancy</option> */}
                        <option value='distance'>Order by Distance</option>
                        {/* <option value='popular'>Order by Popular</option> */}
                        {/* <option value=''></option>
                    <option value=''></option> */}
                    </select>
                    <select value={this.state.category} onChange={(e)=>this.setState({category:e.target.value})}>
                        <option value='Any Category'>Any Category</option>
                        <option value='music'>Music/Concerts</option>
                        <option value='sports'>Sports</option>
                        <option value='foodie'>Foodie</option>
                        <option value='indoor'>Indoor</option>
                        <option value='outdoor'>Outdoor</option>
                        <option value='museum'>Museum</option>
                        <option value='art'>Arts/Crafts</option>
                        <option value='book'>Book/Educational</option>
                        <option value='lecture'>Lecture</option>
                        <option value='dance'>Dance</option>
                        <option value='theatre'>Theatre/Film</option>
                        <option value='comedy'>Improv/Comedy Shows</option>
                        <option value='video'>Video Games</option>
                        <option value='board'>Board Games</option>
                        <option value='service'>Service</option>
                    </select>
                    <select value={this.state.group} onChange={(e)=>this.setState({group:e.target.value})}>
                        <option value='Any Group Size'>Any Group Size</option>
                        <option value='date'>Date</option>
                        <option value='family'>Family</option>
                        <option value='friends'>Friends</option>
                        <option value='large'>Large Groups (+10)</option>
                    </select>
                    <select value={this.state.day} onChange={(e)=>this.setState({day:e.target.value})}>
                        <option value='Any Day'>Any Day</option>
                        <option value='weekday'>Weekday</option>
                        {/* <option value='weeknight'>Weeknight</option> */}
                        <option value='weekend'>Weekend</option>
                    </select>
                    <select value={this.state.time} onChange={(e)=>this.setState({time:e.target.value})}>
                        <option value='Any Time'>Any Time</option>
                        <option value='morning'>Morning (6am - 12pm)</option>
                        <option value='afternoon'>Afternoon (12pm - 5pm)</option>
                        <option value='evening'>Evening (5pm - 11pm)</option>
                        <option value='night'>Night (11pm - 6am)</option>
                    </select>
                    <input placeholder='Search' value={this.state.search} onChange={e=>this.setState({search:e.target.value})}/>
                    <button onClick={this.handleClick}>Search</button>
                    {/* <p>Different types of sorts:</p> */}

                    {/* <ul> */}
                    {/* <li>Display all the Activities in an area by relevancy. Need to add a sort to this so it could be based on types of activities.</li>
                    <li>upcoming events</li>
                    <li>relevancy of event/activity</li>
                    <li>organized by distance</li>
                    <li>most popular/viewed</li>
                    <li>based on weather</li>
                    <p>Sort by size of group</p>
                    <p>Type of group too (i.e. families, friends, children, teens, couples, seniors, people with special needs)</p>                     */}
                    {/* <li>suggested group/date activities</li> */}
                    {/* Need to be able to pull a weather API */}
                    {/* should people be able to recommend/Comment/review */}
                    {/* </ul> */}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    {mappedEvents.length===0?'No event matches!':mappedEvents}
                </div>
                {/* Need to add a loader */}
            </div>
        )
    }
}

export default Category