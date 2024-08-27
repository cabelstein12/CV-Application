import "./Form.css"

export default function Info(){
    return(
        <>
            <form className="form-section" id="info-form-section">
                <h2>Personal</h2>

                <label htmlFor="first-name"> First Name </label>
                <input type="text" id="first-name"/>

                <label htmlFor="last-name"> Last Name </label>
                <input type="text" id="last-name" />

                <label htmlFor="field-name"> Career Title </label>
                <input type="text" id="field-name" />

                <label htmlFor="email"> Email </label>
                <input type='email' />

                <label htmlFor="phone"> Phone </label>
                <input type="tel" />

                {/* <button>Add Information</button> */}
            </form>
        </>
    )
}