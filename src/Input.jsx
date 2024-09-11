import "./Card.css";
import Info from "./Info.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

export default function Input({
  changeFirstName,
  changeLastName,
  changeEmail,
  changePhone,
  personalInfo,
}) {
  return (
    <div className="content">
      <Info
        changeFirstName={changeFirstName}
        changeLastName={changeLastName}
        changeEmail={changeEmail}
        changePhone={changePhone}
        personalInfo={personalInfo}
      />
      <Education />
      <Experience />
    </div>
  );
}
