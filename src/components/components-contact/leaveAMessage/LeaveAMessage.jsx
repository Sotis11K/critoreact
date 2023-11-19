import React, { useState } from 'react'
import './leaveAMessage.css'

const LeaveAMessage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("Handling message")
        setErrorMessage('')


        const user = {name, email, message}
        const json = JSON.stringify(user)

        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: json
        })



        switch (result.status){
            case 200:
                alert('Form successfully sent!')
                clearForm()

                break;

            case 400:
                setErrorMessage('Something went wrong. Please check your information.')
                break;

        }
    }


    const clearForm = () =>{
        setName('')
        setEmail('')
        setMessage('')
    }


  return (
    <section class="leaveamessage">
        <form onSubmit={handleSubmit}>
            <div class="leaveamessage-container container">
                <h2>Leave us a message for any information.</h2>
                <span style={{color: 'red'}}>{errorMessage}</span>
                <input placeholder="Name*" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="Email*" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea placeholder="Your message*" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit">Send Message<i class="fa-solid fa-arrow-trend-up"></i></button>
            </div>
        </form>
    </section>
  )
}

export default LeaveAMessage

