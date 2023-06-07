import { Component } from "react";
import Form from "./components/Form";

export default class App extends Component {
  constructor() {
    super();
    this.formTypes = ['personal', 'education', 'work', 'work'];
  }

  render() {
    return (
      <div className="App">
        {this.formTypes.map((formType, index) => <Form key={index} formtype={formType}/>)}        
      </div>
    );
  }
}
