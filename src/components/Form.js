import { Component } from "react";
import Field from "./Field";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.changeText = this.changeText.bind(this);
    }

    changeText(field, value) {
        const {index, formtype, changeText} = this.props;
        changeText(formtype, index, field, value);
    }

    render() {
        const {index, formtype, attr, del} = this.props;        
        return (
            <>
                <div className="form">
                    {Object.keys(attr).map((field, i) => <Field key={i} fieldName={field} value={attr[field]} changeText={this.changeText}/>)}
                </div>
                {(formtype !== 'personal') && <input type="button" value="Delete" onClick={() => del(formtype, index)}/>}
            </>
        )        
    }
}
