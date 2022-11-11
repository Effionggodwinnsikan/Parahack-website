import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Classes from "./ContactInput.module.css";

const Result = () => {
  return (
    <p>Your message has been successfully sent.We will contact you soon.</p>
  );
};
const ContactInput = () => {
  const [result, showResult] = useState(false, true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ei6kz8m",
        "template_49kc0ag",
        form.current,
        "ZzQ9T60CgoDKkrhzK"
      )
      .then(
        (result) => {
          console.log(
            "Your message has been successfully sent.We will contact you soon."
          );
        },
        (error) => {
          console.log("make sure you are connected to your internet");
        }
      );
    form.current.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className={Classes.formContainer}>
      <form ref={form} onSubmit={sendEmail}>
        <p>
          Tell us about your project and we will contact you within a business
          day. All submitted information will be kept confidential.
        </p>

        <div className={Classes.formInnerContainer}>
          <div>
            <input
              className={Classes.emailInput}
              type="text"
              placeholder="First Name"
              name="firstName"
              required
            />

            <input
              className={Classes.emailInput}
              type="text"
              placeholder="Company Name"
              name="companyName"
            />
          </div>
          <div>
            <input
              className={Classes.emailInput}
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />

            <input
              className={Classes.emailInput}
              type="number"
              placeholder="Phone Number"
              name="phone"
              required
            />
          </div>
        </div>
        <div className={Classes.textarea1}>
          <textarea
            className={Classes.textarea}
            name="message"
            placeholder="What can we do for you?"
            required
          />
        </div>
        <div className={Classes.btnContainer}>
          <button className={Classes.btn}>
            <p>SEND</p>
          </button>
        </div>
        <div className={Classes.row}>{result ? <Result /> : null}</div>
      </form>
      
      
    </div>
  );
};
export default ContactInput;
