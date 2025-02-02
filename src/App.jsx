import { useState } from "react";
import "./App.css";
import "./Card.css"

import Education from "./Education.jsx";
import Info from "./Info.jsx";
import Experience from "./Experience.jsx";

function App() {
  const [info, setInfo] = useState({first: "John", last: 'Doe', email: "jdoe@email.com", phone: "(123)123-1234"});
  const [institution, setInstitution] = useState({name: "University of Baltimore", discipline: 'Bachelor of Science in Molecular Biology', end: '2016-04'})

  function handleChange(prop, state, obj){
    return function(e){
      state({
        ...obj,
        [prop]: e.target.value,
      })
    }
  }

  const handleChangeFirstName = handleChange('first', setInfo, info);
  const handleChangeLastName = handleChange('last', setInfo, info);
  const handleChangeEmail = handleChange('email', setInfo, info);
  const handleChangePhone = handleChange('phone', setInfo, info);

  const handleChangeDiscipline = handleChange('discipline', setInstitution, institution);
  const handleChangeInstitutionName = handleChange('name', setInstitution, institution);
  const handleChangeInstitutionEnd = handleChange('end', setInstitution, institution)
  
  return (
  <>
      <div className="input content">
        <Info 
          info = {info}
          onChangeFirstName={handleChangeFirstName}
          onChangeLastName={handleChangeLastName}
          onChangeEmail={handleChangeEmail}
          onChangePhone={handleChangePhone}
        />
        <Education 
          institution={institution}
          onChangeInstitution={handleChangeInstitutionName}
          onChangeDiscipline={handleChangeDiscipline}
          onChangeInstitutionEnd={handleChangeInstitutionEnd}
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
        <div>{institution.discipline}</div>
        <div><b>{institution.name}</b>: <i>{institution.end}</i></div>

      </div>
    </div>

  </>
  );
}

export default App;
