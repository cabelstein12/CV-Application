import "./App.css";
import Input from "./Input.jsx";
import Output from "./Output.jsx";
import { useState } from "react";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  function updateFirstName(e) {
    setPersonalInfo({
      ...personalInfo,
      firstName: e.target.value,
    });
  }
  function updateLastName(e) {
    setPersonalInfo({
      ...personalInfo,
      lastName: e.target.value,
    });
  }
  function updateEmail(e) {
    setPersonalInfo({
      ...personalInfo,
      email: e.target.value,
    });
  }
  function updatePhone(e) {
    setPersonalInfo({ ...personalInfo, phone: e.target.value });
  }
  return (
    <>
      <Input
        changeFirstName={updateFirstName}
        changeLastName={updateLastName}
        changeEmail={updateEmail}
        changePhone={updatePhone}
        personalInfo={personalInfo}
      />
      <Output personalInfo={personalInfo} />
    </>
  );
}

export default App;
