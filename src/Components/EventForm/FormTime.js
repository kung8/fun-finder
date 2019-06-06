import React , {Component} from 'react'

export default class FormTime extends Component {
    render(){
        return(
            <div>
                START TIME:
                    <div style={{display:'flex'}}>
                        <select name="startTime" id="" onChange={(e)=>this.props.handleTime('startTimeHr',e.target.value)}>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        :
                        <select name="" id="" onChange={(e)=>this.props.handleTime('startTimeMin',e.target.value)}>
                            <option value="00">00</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                        </select>
                        <select name="" id="" onChange={(e)=>this.props.handleTime('startTimeAP',e.target.value)}>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>

                    <br/>

                    END TIME:
                    <div style={{display:'flex'}}>
                        <select name="endTime" id="" onChange={(e)=>this.props.handleTime('endTimeHr',e.target.value)}>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        :
                        <select name="" id=""  onChange={(e)=>this.props.handleTime('endTimeMin',e.target.value)}>
                            <option value="00">00</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                        </select>
                        <select name="" id="" onChange={(e)=>this.props.handleTime('endTimeAP',e.target.value)}>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                    </div>
            </div>
        )
    }
}