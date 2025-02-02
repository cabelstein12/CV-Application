import "./Form.css";


export default function Info({
  info, onChangeFirstName, onChangeLastName, onChangeEmail, onChangePhone
}) {
  
  return (
    <>
      <form className="form-section content" id="info-form-section">
        <h2>Personal</h2>

        <label htmlFor="first-name"> First Name </label>
        <input
          type="text"
          id="first-name"
          value={info.first}
          onChange={onChangeFirstName}

        />

        <label htmlFor="last-name"> Last Name </label>
        <input
          type="text"
          id="last-name"
          value={info.last}
          onChange={onChangeLastName}

        />

        <label htmlFor="email"> Email </label>
        <input 
          type="email"  
          value={info.email}
          onChange={onChangeEmail}
        />


        <label htmlFor="phone"> Phone </label>
        <input 
          type="tel" 
          value={info.phone}
          onChange={onChangePhone}
        />

        {/* <button>Add Information</button> */}
      </form>
    </>
  );
}
