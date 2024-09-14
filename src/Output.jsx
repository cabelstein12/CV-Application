import "./Card.css";
import "./Output.css";

export default function Output({ personalInfo }) {
  return (
    <div className="content">
      <div className="personal-info">
        {personalInfo.firstName} {personalInfo.lastName} {personalInfo.email}{" "}
        {personalInfo.phone}
      </div>
    </div>
  );
}
