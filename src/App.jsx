import { useState } from "react";
import "./App.css";
import "./Card.css"

import Education from "./Education.jsx";
import Info from "./Info.jsx";
import Experience from "./Experience.jsx";

function App() {
  const [info, setInfo] = useState({
    first: "John", 
    last: 'Doe', 
    email: "jdoe@email.com", 
    phone: "(123)456-1234"
  });
  
  const defaultInstitution = {
    name: "University of Baltimore", 
    discipline: 'Bachelor of Science in Molecular Biology', 
    date: "2016-04", 
    id: null
  }
  
  function handleChange(state, obj, prop){
    return function(e){
      state({
        ...obj,
        [prop]: e.target.value,
      })
    }
  }

  const handleChangeFirstName = handleChange(setInfo, info, 'first');
  const handleChangeLastName = handleChange(setInfo, info, 'last');
  const handleChangeEmail = handleChange(setInfo, info, 'email' );
  const handleChangePhone = handleChange(setInfo, info, 'phone');
  
  const [institutions, setInstitutions] = useState([defaultInstitution]);
  const [institutionName, setInstitutionName] = useState('');
  const [institutionDate, setInstitutionDate] = useState('');
  const [institutionDiscipline, setInstitutionDiscipline] = useState('');

  function handleInstitutionName(e){
    setInstitutionName(e.target.value)
  }
  function handleInstitutionDiscipline(e){
    setInstitutionDiscipline(e.target.value)
  }
  function handleInstitutionDate(e){
    setInstitutionDate(e.target.value)
  }

  const educationItems = institutions.map(institution => 
    <li key={institution.id}>
      <div>{institution.discipline}</div>
      <div><b>{institution.name}</b>: <i>{institution.date}</i></div>
    </li>
  );
  return (
  <>
      <div className="input content">
        <Info 
          info={info}
          onChangeFirstName={handleChangeFirstName}
          onChangeLastName={handleChangeLastName}
          onChangeEmail={handleChangeEmail}
          onChangePhone={handleChangePhone}
        />
        <Education 
          name={institutionName}
          institutions={institutions}
          date={institutionDate}
          discipline={institutionDiscipline}
          onAddName={handleInstitutionName}
          onAddInstitution={setInstitutions}
          onAddDiscipline={handleInstitutionDiscipline}
          onAddDate={handleInstitutionDate}
        />
        <Experience />
      </div>
    <div  className="output content">
      <div className="personalInfo">
        <h2>{info.first} {info.last}</h2>
        <span>{info.email} {info.phone}</span>
      </div>
      <hr></hr>
      <div className="education">
        <h3><u>Education</u></h3>
        <ul>
          {educationItems}
        </ul>
      </div>
    </div>

  </>
  );
}

export default App;
