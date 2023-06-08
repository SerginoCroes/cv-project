import { Component } from "react";
import Field from "./Field";

export default class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {index, formtype, attr, del} = this.props;
        
        return (
            <>
                <div className="form">
                    <h3>{formtype}:</h3>
                    {Object.keys(attr).map((field, i) => <Field key={i} fieldName={field} value={attr[field]}/>)}
                </div>
                {(formtype !== 'Personal') && <input type="button" value="Delete" onClick={() => del(formtype, index)}/>}
            </>
        )        
    }
}
