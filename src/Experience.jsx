import "./Form.css"

export default function Experience () {

    return (
        <>
            <form id="exp-form-section" className="form-section">
                <h2>Experience</h2> 
                
                <label htmlFor="job-title"> Job Title </label>
                <input type="text" />

                <label htmlFor="job-company"> Company </label>
                <input type="text" />

                <label htmlFor="job-responsibilities"> Responsibilities </label>
                <textarea type="text" rows="4" cols="50" />

                <label htmlFor="job-start">Start Date</label>
                <input type="date"/>

                <label htmlFor="job-end">End Date</label>
                <input id="end-date-text" type="date" />
                <span>  Present </span>
                <input id="end-date-checkbox" type="checkbox" onClick={()=>{
                    const endDate = document.getElementById('end-date-text');
                    !endDate.disabled ? endDate.disabled = true : endDate.disabled = false;
                    }
                }/>

            </form>
        </>
    )
}