import { Component } from "react";

export default class Field extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {fieldName, value} = this.props;

        return (
            <div className="field">
                <p>{`${fieldName}: `}<input type='text' value={value}></input></p>
            </div>     
        )   
    }
}