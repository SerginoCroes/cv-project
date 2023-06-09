import { Component } from "react";
import Form from "./components/Form";
import uniqid from "uniqid";

export default class App extends Component {
  constructor() {
    super();

    this.educationFormTemp = { Study: '', School: '', Start: '', End: '' };
    this.workFormTemp = { Work: '', Company: '', Start: '', End: '' };

    this.state = {
      personal: { Name: '', Email: '', Phone: '' },
      education: { [uniqid()]: {...this.educationFormTemp} },
      work: { [uniqid()]: {...this.workFormTemp} }
    };

    this.addForm = this.addForm.bind(this);
    this.delForm = this.delForm.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  addForm(type) {
    const temp = {...this.state[type]};
    temp[uniqid()] = (type === 'education' ? {...this.educationFormTemp} : {...this.workFormTemp});
    this.setState({[type]: temp});
  }

  delForm(type, index) {
    const temp = {...this.state[type]};
    delete temp[index];
    this.setState({[type]: temp});
  }

  changeText(type, index, attr, value) {
    const temp = {...this.state[type]};
    type !== 'personal' ? temp[index][attr] = value : temp[attr] = value;
    this.setState({[type]: temp});
  }

  render() {
    const { personal, education, work } = this.state;
    return (
      <div className="App">
        <h3>Personal:</h3>
        <Form key='personal' index={uniqid()} formtype='personal' attr={personal} changeText={this.changeText}/>
        <h3>Education:</h3>
        {Object.keys(education).map((key) => <Form key={key} index={key} formtype='education' attr={education[key]} del={this.delForm} changeText={this.changeText}/>)}
        <input type='button' value="Add education" onClick={() => this.addForm('education')} />
        <h3>Work:</h3>
        {Object.keys(work).map((key) => <Form key={key} index={key} formtype='work' attr={work[key]} del={this.delForm} changeText={this.changeText}/>)}
        <input type='button' value="Add work" onClick={() => this.addForm('work')} />
      </div>
    );
  }
}
