import "./Form.css";
import "./Card.css"

let nextXpId = 0;
export default function Experience({title, xp, company, jobResponsibilities, dates, onAddXp, onChangeTitle, onChangeCompanyName, onChangeJobResponsibilities, onChangeDates}) {
  return (
    <>
      <form
        id="exp-form-section"
        className="form-section content"
        onSubmit={(e) => {
          e.preventDefault();
          if(xp[0].id == 'default'){
            xp=[];
          }
          onAddXp([
            ...xp,
            {id: nextXpId++, jobTitle: title, companyName: company, responsibilities: jobResponsibilities, from: dates[0], to: dates[1]}
          ])
          console.log(xp)
        }}
      >
        <h2>Experience</h2>

        <label htmlFor="job-title"> Job Title </label>
        <input type="text" value={title} onChange={onChangeTitle}/>

        <label htmlFor="job-company"> Company </label>
        <input type="text" value={company} onChange={onChangeCompanyName}/>

        <label htmlFor="job-responsibilities"> Responsibilities </label>
        <textarea type="text" rows="4" cols="30" value={jobResponsibilities} onChange={onChangeJobResponsibilities}/>

        <label htmlFor="job-start">Start Date</label>
        <input type="month" value={dates[0]} onChange={onChangeDates[0]}/>
        <label htmlFor="job-end">End Date</label>
        <input id="end-date-text" type="month" value={dates[1]} onChange={onChangeDates[1]}/>
        <span> Present </span>
        <input
          id="end-date-checkbox"
          type="checkbox"
          onClick={() => {
            const endDate = document.getElementById("end-date-text");
            if(!endDate.disabled){
              endDate.disabled = true;
              dates[1] = "current"
            }else{
              endDate.disabled = false;
            }
          }}
          />

        <button type="submit">Add More Experience</button>
      </form>
    </>
  );
}
