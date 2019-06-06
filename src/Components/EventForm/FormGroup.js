import React , {Component} from 'react'

export default class FormGroup extends Component {
    render(){
        return(
            <div>
                Appropriate Group Types: <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('date')}/> Date <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('family')}/> Family <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('friends')}/> Friends <br/>
                <input type="checkbox" onChange={e=>this.props.handleBoolean('large')}/> Large Group (10+) <br/>
            </div>
        )
    }
}