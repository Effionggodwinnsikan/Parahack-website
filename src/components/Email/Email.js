import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Classes from "./Email.module.css";
import Image from "../../assets/Images/Content-Relationships-1.jpg";

const Result = () => {
  return (
    <p>Your message has been successfully sent.We will contact you soon.</p>
  );
};
const Email = () => {
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
      <img src={Image} alt="/" />
      <div className={Classes.overlay}></div>
      <form ref={form} onSubmit={sendEmail}>
      <h2>We're Here To Help!</h2>
        <div className={Classes.formInnerContainer}>
          <div>
            <input type="text" placeholder="Name" name="firstName" />

            <input type="text" placeholder="Company Name" name="companyName" />
          </div>
          <div>
            <input type="email" placeholder="Email Address" name="email" />

            <input type="number" placeholder="Phone Number" name="phone" />
          </div>
        </div>
        <div>
          <textarea name="message" placeholder="What can we do for you?" />
        </div>
        <div className={Classes.btnContainer}>
        <button className={Classes.btn}>
          <p>SEND</p>
        </button>
        </div>
        <div className={Classes.row}>{result ? <Result /> : null}</div>
      </form>
      <div className={Classes.emailAddress}>
        <div>
          {" "}
          <h4>email address</h4>
        </div>
        <div>
          {" "}
          <h4>Phone number</h4>
        </div>
      </div>
    </div>
  );
};
export default Email;
