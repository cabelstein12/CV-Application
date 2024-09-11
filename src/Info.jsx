import "./Form.css";

export default function Info({
  personalInfo,
  changeFirstName,
  changeLastName,
  changeEmail,
  changePhone,
}) {
  return (
    <>
      <form className="form-section" id="info-form-section">
        <h2>Personal</h2>

        <label htmlFor="first-name"> First Name </label>
        <input
          type="text"
          id="first-name"
          value={personalInfo.firstName}
          onChange={changeFirstName}
        />

        <label htmlFor="last-name"> Last Name </label>
        <input
          type="text"
          id="last-name"
          value={personalInfo.lastName}
          onChange={changeLastName}
        />

        <label htmlFor="email"> Email </label>
        <input type="email" value={personalInfo.email} onChange={changeEmail} />

        <label htmlFor="phone"> Phone </label>
        <input type="tel" value={personalInfo.phone} onChange={changePhone} />

        {/* <button>Add Information</button> */}
      </form>
    </>
  );
}
