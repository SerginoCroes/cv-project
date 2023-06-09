import { Component } from "react";

export default class Field extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {fieldName, value, changeText} = this.props;
        return (
            <div className="field">
                <p>{`${fieldName}: `}<input type='text' value={value} onChange={e => changeText(fieldName, e.target.value)}></input></p>
            </div>     
        )   
    }
}