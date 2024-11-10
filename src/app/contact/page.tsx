export default function(){
    return(
<div>
    <form className="contact-form" action="/submit-form"method="POST"></form>

    <div className="group-form">
        <label className="field-label" htmlFor="name">Name:</label>
        <input className="field" type="text" id="name" name="name" required/>
    </div>
    <div className="group-form">
        <label className="field-label" htmlFor="email">Email:</label>
        <input className="field" type="email" id="email" name="email" required/>
    </div>
    <div className="group-form">
        <label className="field-label" htmlFor="message">Message:</label>
        <textarea className="field" id="message" name="message" required></textarea>
    </div>
    <div className="button">
        <button type="submit">Submit</button>
    </div>
    
    </div>

    )
}

