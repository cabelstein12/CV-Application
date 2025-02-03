import "./Form.css";
let nextInstitutionId = 0;
export default function Education({schoolName, institutions ,onInstitutionName, onAddInstitution, }) {
  
  return (
    <>
      <form
        id="edu-form-section"
        className="form-section content"
        name='edu-form'
        onSubmit={(e) => {
          e.preventDefault();
          onAddInstitution([
            ...institutions,
            {id: nextInstitutionId++, name: schoolName}
          ]);
        }}
      >
        <h2>Education</h2>
        <label htmlFor="school-name"> Institution </label>
        <input type="text" id="name" value={schoolName} onChange={onInstitutionName}/>
        {/* <label htmlFor="study-type"> Title of Study </label>
        <input type="text" id="discipline" placeholder={''} value={info.discipline}  />
        <label htmlFor="study-date-end"> End </label>
        <input type="month" id="endDate" /> */}

        <button type="submit">Add Another Institution</button>
      </form>
    </>
  );
}