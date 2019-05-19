import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div style={{display:'flex',justifyContent:'center',marginTop:'100px'}}>
                <select>
                    <option selected value='popular'>Order by Relevancy</option>
                    <option value='date'>Order by Date</option>
                    <option value='distance'>Order by Distance</option>
                    {/* <option value='popular'>Order by Popular</option> */}
                    {/* <option value=''></option>
                    <option value=''></option> */}
                </select>
                <select>
                    <option>Any Category</option>
                    <option>Music/Concerts</option>
                    <option>Sports</option>
                    <option>Foodie</option>
                    <option>Indoor</option>
                    <option>Outdoor</option>
                    <option>Museum</option>
                    <option>Arts/Crafts</option>
                    <option>Book/Educational</option>
                    <option>Lecture</option>
                    <option>Dance</option>
                    <option>Theatre/Film</option>
                    <option>Improv/Comedy Shows</option>
                    <option>Video Games</option>
                    <option>Board Games</option>
                    <option>Service</option>
                </select>
                <select>
                    <option>Type of Group</option>
                    <option>Date</option>
                    <option>Family</option>
                    <option>Friends</option>
                    <option>Large Groups (+10)</option>
                </select>
                <select>
                    <option>Any Day</option>
                    <option>Weekday</option>
                    <option>Weeknight</option>
                    <option>Weekend</option>
                </select>
                <select>
                    <option>Any Time</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                </select>
                <input placeholder='Search'/>
                <button>Search</button>
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
        )
    }
}

export default Category