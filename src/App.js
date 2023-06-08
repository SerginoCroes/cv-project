import { Component } from "react";
import Form from "./components/Form";

export default class App extends Component {
  constructor() {
    super();

    const educationTemp = { Study: 'haha', School: '', Start: '', End: '' };
    const workTemp = { Work: '', Company: '', Start: '', End: '' };

    this.state = {
      personal: { Name: '', Email: '', Phone: '' },
      education: { 0: {...educationTemp} },
      work: { 0: {...workTemp} }
    };

    this.addForm = this.addForm.bind(this);
    this.delForm = this.delForm.bind(this);
  }

  addForm(type, index) {
    const temp = [...this.state[type]];
    temp.push(index + 1);
    this.setState({ [type]: temp });
  }

  delForm(type, index) {
    const temp = [...this.state[type]];
    temp.splice(index, 1);
    this.setState({ [type]: temp });
  }

  render() {

    const { personal, education, work } = this.state;

    return (
      <div className="App">
        <Form key='personal' formtype='Personal' attr={personal} />

        {Object.keys(education).map((key, index) => <Form index={index} formtype='Education' attr={education[key]} del={this.delForm} />)}

        <input type='button' value="Add" onClick={() => this.addForm('formtype')} />

        {Object.keys(work).map((key, index) => <Form index={index} formtype='Work' attr={work[key]} del={this.delForm} />)}

        <input type='button' value="Add" onClick={() => this.addForm('formtype')} />

      </div>
    );
  }
}
