import { Component } from "react";
import Form from "./components/Form";

export default class App extends Component {
  constructor() {
    super();

    this.state = {Education: [0], Work: [0]};


    this.addForm = this.addForm.bind(this);
    this.delForm = this.delForm.bind(this);
  }

  addForm(type, index) {
    const temp = [...this.state[type]];
    temp.push(index + 1);
    this.setState({[type]: temp});
  }

  delForm(type, index) {
    const temp = [...this.state[type]];
    temp.splice(index, 1);
    this.setState({[type]: temp});
  }

  render() {
    return (
      <div className="App">
        <Form key='personal' formtype='Personal'/>
        {Object.keys(this.state.Education).map((key, index) => <Form index={index} formtype='Education' add={this.addForm} del={this.delForm}/>)}
        {Object.keys(this.state.Work).map((key, index) => <Form index={index} formtype='Work' add={this.addForm} del={this.delForm}/>)}
      </div>
    );
  }
}
