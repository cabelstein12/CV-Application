export default function Education(){
    return(
        <>
            <h2>Education</h2>

            <form id="edu-form-section" className="form-section">

                <label htmlFor="school-name"> Institution: </label>
                <input type="text" />

                <label htmlFor="study-type"> Title of Study </label>
                <input type="text" />

                <label htmlFor="study-date-start"> Start </label>
                <input type="date" />

                <label htmlFor="study-date-end"> End </label>
                <input type="date" />

            </form>
        </>
    )
}