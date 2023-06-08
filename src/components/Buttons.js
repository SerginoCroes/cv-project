import { Component } from "react";

export default class Buttons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {formtype, index, add, del} = this.props;

        return (
            <div className="buttons">
                <input type='button' value="Add" onClick={() => add(formtype, index)}/>                
                {(index !== 0) && <input type="button" value="Delete" onClick={() => del(formtype, index)}/>}
            </div>     
        )   
    }
}