import React, {Component} from 'react'

export default class FormCategory extends Component {
    render(){
        return(
            <div>
                CATEGORIES: <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('music')}/> Music/Concert <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('sports')}/> Sports <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('foodie')}/> Foodie <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('outdoor')}/> Outdoor <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('indoor')}/> Indoor <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('museum')}/> Museum <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('art')}/> Art/Craft <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('book')}/> Book/Educational <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('lecture')}/> Lecture <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('dance')}/> Dance <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('theatre')}/> Theatre/Film <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('comedy')}/> Improv/Comedy <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('board')}/> Board Games <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('video')}/> Video Games <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('service')}/> Service <br/>
            </div>
        )
    }
}