import "./Form.css";
let nextInstitutionId = 2;
export default function Education({name, institutions, discipline, date, modifying, modIndex, onModifyInstitution, onAddName, onAddInstitution, onAddDiscipline, onAddDate, clear}) {
  return (
    <>
      <form
        id="edu-form-section"
        className="form-section content"
        name='edu-form'
        onSubmit={(e) => {
          e.preventDefault();
          if(institutions.length == 1 && institutions[0].id == 'default'){
            institutions=[];
          }
          console.log(institutions)
          if(modifying){
            const updatedInstitution = institutions.map((edu, index) => {
              if(index === modIndex){
                  return edu = {id: modIndex, name: name, discipline: discipline, date: date}
              } else { return edu } 
            });
            onModifyInstitution(false)
            onAddInstitution(updatedInstitution)
          }else{
            onAddInstitution([
              ...institutions,
              {id: nextInstitutionId++, name: name, discipline: discipline, date: date}
            ]);
          }
          clear();
        }
      }
      >
        <h2>Education</h2>
        <label htmlFor="school-name"> Institution 
        </label>
          <input type="text" id="name" value={name} onChange={onAddName} minLength={7} />
        <label htmlFor="study-type"> Field of Study 
        </label>
          <input type="text" id="discipline" value={discipline} onChange={onAddDiscipline} minLength={7} />
        <label htmlFor="study-date-end"> Completion 
        </label>
          <input type="month" id="endDate" value={date} onChange={onAddDate} /> 
        <button type="submit">{modifying ? ("Modify Institution") : ("Add Another Institution")}</button>
      </form>
    </>
  );
}