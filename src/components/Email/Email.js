import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Classes from "./Email.module.css";
import Image from "../../assets/Images/Content-Relationships-1.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

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
        <div>
          <textarea
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
      <div className={Classes.emailAddress}>
        <div className={Classes.call}>
          <div className={Classes.icons}>
            <FaPhoneAlt className={Classes.phone} />
            <h3>Call Us</h3>
          </div>
          <p>1-855-979-TASK</p>
          <p>(972) 449-5462</p>
        </div>
        <div className={Classes.emailContainar}>
          <div className={Classes.icons}>
            <TfiEmail className={Classes.Email} />
            <h3>Email</h3>
          </div>
          <p>info@parahack.com</p>
        </div>
        
      </div>
    </div>
  );
};
export default Email;
