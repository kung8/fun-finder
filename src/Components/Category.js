import React, {Component} from 'react';

class Category extends Component {
    render(){
        return(
            <div>
                <p>
                    Display all the Activities in an area by relevancy. Need to add a sort to this so it could be based on types of activities.
                </p>

                <input placeholder='Search'/>
            
                <button>Search</button> 

                <p>Different types of sorts:</p>
                
                <ul>
                    <li>upcoming events</li>
                    <li>relevancy of event/activity</li>
                    <li>organized by distance</li>
                    <li>most popular/viewed</li>
                    <li>based on weather</li>
                    <p>Sort by size of group</p>
                    <p>Type of group too (i.e. families, friends, children, teens, couples, seniors, people with special needs)</p>                    {/* <li>suggested group/date activities</li> */}
                    {/* Need to be able to pull a weather API */}
                    {/* should people be able to recommend/Comment/review */}
                </ul>


            </div>
        )
    }
}

export default Category