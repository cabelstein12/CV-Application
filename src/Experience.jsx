import "./Form.css";
import "./Card.css"

let nextXpId = 0;
export default function Experience({title, xp, company, roles, dates, onAddXp, onChangeTitle, onChangeCompanyName, onChangeResponsibilities, onChangeDates}) {
  return (
    <>
      <form
        id="exp-form-section"
        className="form-section content"
        onSubmit={(e) => {
          e.preventDefault();
          onAddXp([
            ...xp,
            {id: nextXpId, jobTitle: title, companyName: company, responsibilities: roles, from: dates.from, to: dates.to}
          ])
        }}
      >
        <h2>Experience</h2>

        <label htmlFor="job-title"> Job Title </label>
        <input type="text" value={title} onChange={onChangeTitle}/>

        <label htmlFor="job-company"> Company </label>
        <input type="text" value={company} onChange={onChangeCompanyName}/>

        <label htmlFor="job-responsibilities"> Responsibilities </label>
        <textarea type="text" rows="4" cols="30" value={roles} onChange={onChangeResponsibilities}/>

        <label htmlFor="job-start">Start Date</label>
        <input type="date" value={dates.from} onChange={onChangeDates}/>
        <label htmlFor="job-end">End Date</label>
        <input id="end-date-text" type="date" value={dates.to} onChange={onChangeDates}/>
        <span> Present </span>
        <input
          id="end-date-checkbox"
          type="checkbox"
          onClick={() => {
            const endDate = document.getElementById("end-date-text");
            !endDate.disabled
            ? (endDate.disabled = true)
            : (endDate.disabled = false);
          }}
          />

        <button type="submit">Add Another Experience</button>
      </form>
    </>
  );
}
