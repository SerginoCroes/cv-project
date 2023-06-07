import { Component } from "react";
import Field from "./Field";

export default class Form extends Component {
    constructor(props) {
        super(props);

        switch (this.props.formtype) {
            case 'personal': 
                this.fields = ['name', 'email', 'phone'];
                break;

            case 'education': 
                this.fields = ['study', 'school', 'start', 'end'];
                break;

            case 'work': 
                this.fields = ['work', 'company', 'start', 'end'];
                break;
        }
    }

    render() {
        return (
            <>
                <div className="form">
                    <h3>{this.props.formtype}:</h3>
                    {this.fields.map((field, index) => <Field key={index} fieldName={field}/>)}
                    <input type="button" value="submit"/>
                </div>
                {this.props.formtype !== 'personal' && <input type='button' value="add"/>}
            </>
        )        
    }
}
