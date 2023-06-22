import React, { useState } from "react";
import Form from "./components/Form";
import Cvform from "./components/Cvform";
import uniqid from "uniqid";

const App = () => {

  const educationFormTemp = { Study: '', School: '', Start: '', End: '' };
  const workFormTemp = { Work: '', Task: '', Company: '', Start: '', End: '' };

  const [forms, setForms] = useState({
    personal: { Name: '', Email: '', Phone: '' },
    education: { [uniqid()]: { ...educationFormTemp } },
    work: { [uniqid()]: { ...workFormTemp } }
  });

  const addForm = (type) => {
    const temp = { ...forms[type] };
    temp[uniqid()] = (type === 'education' ? { ...educationFormTemp } : { ...workFormTemp });
    setForms({ ...forms, [type]: temp });
  }

  const delForm = (type, index) => {
    const temp = { ...forms[type] };
    delete temp[index];
    setForms({ ...forms, [type]: temp });
  }

  const changeText = (type, index, attr, value) => {
    const temp = { ...forms[type] };
    type !== 'personal' ? temp[index][attr] = value : temp[attr] = value;
    setForms({ ...forms, [type]: temp });
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
        <hr/>
        <h3>CV:</h3>
        <div className="cv">
          <div className="cvfield">
            <h2>{personal.Name}</h2>
            <p>{personal.Email}</p>
            <p>{personal.Phone}</p>
          </div>
          <hr/>
          <h3>Education:</h3>
          {Object.keys(education).map((key) => <Cvform key={key} index={key} attr={education[key]}/>)}
          <hr/>
          <h3>Work:</h3>
          {Object.keys(work).map((key) => <Cvform key={key} index={key} attr={work[key]}/>)}
        </div>     
      </div>
    );
  }
}
