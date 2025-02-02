import { useState } from "react";
import "./App.css";
import "./Card.css"

import Education from "./Education.jsx";
import Info from "./Info.jsx";
import Experience from "./Experience.jsx";

function App() {
  const [info, setInfo] = useState({first: "John", last: 'Doe', email: "jdoe@email.com", phone: "(123)123-1234"});
  
  function handleChange(prop){
    return function(e){
      setInfo({
        ...info,
        [prop]: e.target.value
      })
    }
  }

  const handleChangeFirstName = handleChange('first');
  const handleChangeLastName = handleChange('last');
  const handleChangeEmail = handleChange('email');
  const handleChangePhone = handleChange('phone');
  
  return (
  <>
      <div className="input">
        <Info 
          info = {info}
          onChangeFirstName={handleChangeFirstName}
          onChangeLastName={handleChangeLastName}
          onChangeEmail={handleChangeEmail}
          onChangePhone={handleChangePhone}
        />
        <Education />
        <Experience />
      </div>
    <div  className="output content">
      <div className="personalInfo">
        <span>{info.first} {info.last}</span><br></br>
        <span>{info.email} {info.phone}</span>

      </div>
    </div>

  </>
  );
}

export default App;
