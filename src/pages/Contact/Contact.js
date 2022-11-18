import React from "react";
import Image from "../../assets/Images/contact us image.jpg";
import ContactUsHero from "../../components/ContactUsHero/ContactUsHero";
import Classes from "./Contact.module.css";
import ContactInput from "../../components/ContactInput/ContactInput";
import EmailCard from "../../components/EmailCard/EmailCard";

const Contact = () => {
  return (
    <div className={Classes.Contact}>
      <ContactUsHero
        bgImg={Image}
        text="HOW CAN WE HELP"
        content="We love to hear from our clients. If you have any questions or concerns please reach out."
      />
      <ContactInput />
      <EmailCard/>
    </div>
  );
};

export default Contact;
