import "./Form.css";

export default function Education({institution, onChangeInstitution, onChangeDiscipline, onChangeInstitutionEnd}) {
  return (
    <>
      <form
        id="edu-form-section"
        className="form-section content"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Education</h2>

        <label htmlFor="school-name"> Institution </label>
        <input type="text" value={institution.name} onChange={onChangeInstitution}/>
        <label htmlFor="study-type"> Title of Study </label>
        <input type="text" value={institution.discipline} onChange={onChangeDiscipline} />
        <label htmlFor="study-date-end"> End </label>
        <input type="month" value={institution.end} onChange={onChangeInstitutionEnd}/>

        <button type="submit">Add Another Institution</button>
      </form>
    </>
  );
}
