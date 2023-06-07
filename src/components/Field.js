import { Component } from "react";

export default class Field extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {fieldName} = this.props;

        return (
            <div className="field">
                <p>{`${fieldName}: `}<input type='text'></input></p>
            </div>     
        )   
    }
}