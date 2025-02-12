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
    id: 'default'
  }

  const defaultXP = {
    companyName: "Big Johns Woodworking",
    from: "2002-02",
    to: "2006-08",
    responsibilities: ["Operated woodworking machinery, including table saws, planers, routers, and sanders, to cut and shape materials.", "Ensured precise joinery and finishing techniques to produce high-quality furniture and cabinetry."]
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
  const [responsibilities, setResponsibilities] = useState({defaultXP});
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const period = [startDate, endDate]

  const handleJobTitle = handleChange(setJobTitle);
  const handleCompanyName = handleChange(setCompanyName);
  const handleResponsibilities = handleChange(setResponsibilities);
  const handleDates = [handleChange(setStartDate), handleChange(setEndDate)]

  const educationItems = institutions.map(institution => 
    <li key={institution.id}>
      <span className="delete-span"><button className="deleteBtn" onClick={() => 
        setInstitutions(
          institutions.filter(i => i.id !== institution.id)
        )
      }></button></span><span id="discipline-name">{institution.discipline}</span>
      <div id="institution-info"><b>{institution.name}</b>: <i>{institution.date}</i></div>
    </li>
  );
  const experienceItems = experiences.map(experience => 
    <li key={experience.id}>
      <span className="delete-span"><button className="deleteBtn" onClick={() => setExperiences(
        experiences.filter(e => e.id !== experience.id)
      )
      }></button></span><span id="experience-name"><b>{experience.jobTitle}</b> {experience.from} to {experience.to}</span>
      <div>{experience.companyName} </div>
      <div>
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
        jobRoles={responsibilities}
        dates={period}
        onAddXp={setExperiences}
        onChangeTitle={handleJobTitle}
        onChangeCompanyName={handleCompanyName}
        onChangeResponsibilities={handleResponsibilities}
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

  </>
  );
}

export default App;
