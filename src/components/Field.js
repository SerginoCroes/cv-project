import { Component } from "react";

export default class Field extends Component {
    render() {
        const {fieldName, value, changeText} = this.props;
        return (
            <div className="field">
                <label>{`${fieldName}: `}<input type={fieldName === 'Start' || fieldName === 'End' ? 'date' : 'text'} value={value} onChange={e => changeText(fieldName, e.target.value)}></input></label>
            </div>     
        )   
    }
}