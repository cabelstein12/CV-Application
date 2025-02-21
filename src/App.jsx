import { useState } from "react";
import "./App.css";
import "./Card.css"

import Education from "./Education.jsx";
import Info from "./Info.jsx";
import Experience from "./Experience.jsx";

function App() {
  let visible = false
  function toggleButtons(){
    
    if(!visible){
      document.querySelectorAll('.edit-button').forEach(e => e.style.display = '');
      visible = true;
    }else{
      document.querySelectorAll('.edit-button').forEach(e => e.style.display = 'none');
      visible = false;
    }
  }
  const defaultPerson = {
    first: "John", 
    last: 'Doe', 
    email: "jdoe@email.com", 
    phone: "(123)456-1234"
  }
  
  const defaultInstitution = {
    name: "University of Baltimore", 
    discipline: 'Bachelor of Science in Molecular Biology', 
    date: "2016-04", 
    id: 'default'
  }
  
  const defaultXP = {
    companyName: "Subway",
    jobTitle: "Sandwich Artist",
    from: "2002-02",
    to: "2006-08",
    responsibilities: "Masterfully craft foot-long sandwiches to customer specification. Ensured highest customer service.",
    id: 'default'
  }
  
  function handleChange(state, obj, prop){
    if(obj && prop){
      return function(e){
        state({
          ...obj,
          [prop]: e.target.value,
        })
      }
    }
    else {
      return function(e){
        state(e.target.value)
      }
    }
  }
  
  const [info, setInfo] = useState(defaultPerson);

  const handleChangeFirstName = handleChange(setInfo, info, 'first');
  const handleChangeLastName = handleChange(setInfo, info, 'last');
  const handleChangeEmail = handleChange(setInfo, info, 'email' );
  const handleChangePhone = handleChange(setInfo, info, 'phone');
  
  const [institutions, setInstitutions] = useState([defaultInstitution]);
  const [institutionName, setInstitutionName] = useState('');
  const [institutionDate, setInstitutionDate] = useState('');
  const [institutionDiscipline, setInstitutionDiscipline] = useState('');

  const handleInstitutionName = handleChange(setInstitutionName);
  const handleInstitutionDiscipline = handleChange(setInstitutionDiscipline);
  const handleInstitutionDate = handleChange(setInstitutionDate);

  const [experiences, setExperiences] = useState([defaultXP]);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const period = [startDate, endDate]

  const handleJobTitle = handleChange(setJobTitle);
  const handleCompanyName = handleChange(setCompanyName);
  const handleResponsibilities = handleChange(setResponsibilities);
  const handleDates = [handleChange(setStartDate), handleChange(setEndDate)]

  const educationItems = institutions.map(institution => 
    <li key={institution.id}>
      <span className="delete-span">
        <button 
          className="edit-button delete-button" 
          id="delete-institution-button" 
          onClick={() => setInstitutions(
          institutions.filter(i => i.id !== institution.id)
          )}
        ></button>
        <button
          className="edit-button modify-button"
          id="edit-institution-button"
          onClick={()=>{}}
        ></button>
      </span>
      <span id="institution-info">
        <b>{institution.name}</b> - <i>{institution.date}</i>
      </span>
      <div id="discipline-name">{institution.discipline}</div>
    </li>
  );
  const experienceItems = experiences.map(experience => 
    <li key={experience.id}>
      <span className="delete-span">
        <button 
          className="edit-button delete-button" 
          id="delete-xp-button" 
          onClick={() => setExperiences(
            experiences.filter(e => e.id !== experience.id)
          )}
        ></button>
        <button
          className="edit-button modify-button"
          id="edit-institution-button"
          onClick={()=>{}}
        ></button>
      </span>
      <span id="experience-name-dates">
        <b>{experience.jobTitle}</b> - <i>{experience.from}</i> to <i>{experience.to}</i>
      </span>
      <div id="experience-company">{experience.companyName} </div>
      <div id="experience-responsibilities">
        <ul>
          {experience.responsibilities}
        </ul>
      </div>

    </li>
  )
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
      <Experience 
        title={jobTitle}
        xp={experiences}
        company={companyName}
        dates={period}
        jobResponsibilities={responsibilities}
        onAddXp={setExperiences}
        onChangeTitle={handleJobTitle}
        onChangeCompanyName={handleCompanyName}
        onChangeJobResponsibilities={handleResponsibilities}
        onChangeDates={handleDates}
      />
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
      <div className="experience">
        <h3><u>Experience</u></h3>
        <ul>
          {experienceItems}
        </ul>
      </div>
    </div>
    <button 
      id="toggle-edit" 
      onClick={toggleButtons}
    >Edit CV</button>
  </>
  );
}

export default App;
