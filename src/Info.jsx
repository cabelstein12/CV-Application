export default function Info(){
    return(
        <>
            <h2>Your Info</h2>
            <form className="form-section" id="info-form-section">
                <label htmlFor="first-name"> First Name: </label>
                <input type="text" id="first-name"/>

                <label htmlFor="last-name"> Last Name: </label>
                <input type="text" id="last-name" />

                <label htmlFor="email"> Email: </label>
                <input type='email' />

                <label htmlFor="phone"> Phone: </label>
                <input type="tel" />

            </form>
        </>
    )
}