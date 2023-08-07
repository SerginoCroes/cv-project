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
  };

  const delForm = (type, index) => {
    const temp = { ...forms[type] };
    delete temp[index];
    setForms({ ...forms, [type]: temp });
  };

  const changeText = (type, index, attr, value) => {
    const temp = { ...forms[type] };
    type !== 'personal' ? temp[index][attr] = value : temp[attr] = value;
    setForms({ ...forms, [type]: temp });
  };

  return (
    <div className="App">
      <h3>Personal:</h3>
      <Form key='personal' index={uniqid()} formtype='personal' attr={forms.personal} changeText={changeText} />
      <h3>Education:</h3>
      {Object.keys(forms.education).map((key) => <Form key={key} index={key} formtype='education' attr={forms.education[key]} del={delForm} changeText={changeText} />)}
      <input type='button' value="Add education" onClick={() => addForm('education')} />
      <h3>Work:</h3>
      {Object.keys(forms.work).map((key) => <Form key={key} index={key} formtype='work' attr={forms.work[key]} del={delForm} changeText={changeText} />)}
      <input type='button' value="Add work" onClick={() => addForm('work')} />
      <hr />
      <h3>CV:</h3>
      <div className="cv">
        <div className="cvfield">
          <h2>{forms.personal.Name}</h2>
          <p>{forms.personal.Email}</p>
          <p>{forms.personal.Phone}</p>
        </div>
        <hr />
        <h3>Education:</h3>
        {Object.keys(forms.education).map((key) => <Cvform key={key} attr={forms.education[key]} />)}
        <hr />
        <h3>Work:</h3>
        {Object.keys(forms.work).map((key) => <Cvform key={key} attr={forms.work[key]} />)}
      </div>
    </div>
  )
};

export default App;
