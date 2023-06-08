import { Component } from "react";
import Field from "./Field";
import Buttons from "./Buttons";

export default class Form extends Component {
    constructor(props) {
        super(props);

        switch (this.props.formtype) {
            case 'Personal': 
                this.fields = ['Name', 'Email', 'Phone'];
                break;
            case 'Education': 
                this.fields = ['Study', 'School', 'Start', 'End'];
                break;
            case 'Work': 
                this.fields = ['Work', 'Company', 'Start', 'End'];
                break;
            default:
                this.fields = [];
        }
    }

    render() {

        const {formtype, index, add, del} = this.props;

        return (
            <>
                <div className="form">
                    <h3>{this.props.formtype}:</h3>
                    {this.fields.map((field, i) => <Field key={i} fieldName={field}/>)}
                </div>
                {this.props.formtype !== 'Personal' && <Buttons formtype={formtype} index={index} add={add} del={del}/>}
            </>
        )        
    }
}
