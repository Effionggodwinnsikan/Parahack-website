import React from 'react'
import Classes from "./EmailCard.module.css";
import emailjs from "@emailjs/browser";
import Image from "../../assets/Images/Content-Relationships-1.jpg";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiOutlineMailOpen} from "react-icons/hi";

const EmailCard = () => {
  return (
    <div>
      <div className={Classes.emailAddress}>
        <div className={Classes.call}>
          <div className={Classes.icons}>
            <MdOutlinePhoneIphone className={Classes.phone} />
          </div>
          <div className={Classes.call1}>
            <h3>Call Us</h3>
          <p>1-855-979-TASK</p>
          <p>(972) 449-5462</p>
          </div>
        </div>
        <div className={Classes.emailContainar}>
          <div className={Classes.icons}>
            <HiOutlineMailOpen className={Classes.Email} />
          </div>
          <div className={Classes.emailContainar1}>
            <h3>Email</h3>
          <p>info@parahack.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailCard