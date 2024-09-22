import { FormControl, TextField, Button } from "@mui/material"
import "../assets/css/Contact.css"
import Hero from "../assets/img/gallery5.jpg"
import { useState } from "react"

const Contact = () => {
    const [isValid, setIsValid] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("")

    const checkUserInputs = () => {
        const emailInput = document.getElementById('email');
        const usernameInput = document.getElementById('username')
        const messageInput = document.getElementById('message')

        if (!emailInput.value || !usernameInput.value || !messageInput.value) {
            setShowBtn(false)
        } else {
            setShowBtn(true)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const emailInput = document.getElementById('email');
        setIsValid(true);

        if (!emailInput.value || !/\S+@\S+\.\S+/.test(emailInput.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            setIsValid(false)
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (isValid) {
            alert("Message sent")
        }
    }

    return (
        <div className="contact-container">
            <div className="img-container">
                <div className="grade"></div>
                <img src={Hero} alt="" />
            </div>
            <div className="contact-form-container">
                <form method="POST" onSubmit={onSubmit}>
                    <h2 className="archi-font">Contact Us</h2>
                    <FormControl className="contact-form">
                        <TextField
                            onChange={checkUserInputs}
                            className="contact-input"
                            name="username"
                            type="text"
                            id="username"
                            placeholder="Enter your name here"
                            required
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            onChange={checkUserInputs}
                            error={emailError}
                            helperText={emailErrorMessage}
                            className="contact-input"
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Enter your email here"
                            required
                            fullWidth
                            variant="outlined"
                        />
                        <TextField
                            onChange={checkUserInputs}
                            className="contact-input"
                            name="message"
                            type="message"
                            id="message"
                            placeholder="Tell us all about your project"
                            required
                            multiline
                            rows={7}
                            variant="outlined"
                        />
                    </FormControl>
                    {showBtn &&
                        <Button
                            type="submit"
                            variant="contained"
                            disableRipple
                            size="large"
                        >
                            SUBMIT
                        </Button>
                    }
                </form>
            </div>
        </div>
    )
}

export default Contact