import React, { useState } from "react";
import Images from "../../assets/Images/staff augmentation.jfif";
import ContactUsHero from "../../components/ContactUsHero/ContactUsHero";
import ButtonItems from "../../components/ButtonItems/ButtonItem";
import Classes from "./StaffAugmentation.module.css";
import Email from "../../components/Email/Email";
import Accordion from "../../components/Accordion/Accordion";

const StaffAugmentation = () => {
  const [active, setActive] = useState(" ");
  return (
    <div className={Classes.StaffAugmentation}>
      <div className={Classes.StaffAugmentation1}>
        <ContactUsHero
          text="MOBILE APP DEVELOPMENT"
          bgImg={Images}
          content="Custom IOS and Android Application Development"
        />
        <div className={Classes.btn}>
          <ButtonItems text="HIRE NOW" />
        </div>
      </div>
      <div className={Classes.CloudComputing}>
        <h2>Hire the top engineering talent</h2>
        <p>
          Organizations looking to hire engineering staff to an existing team
          can now take advantage of our staff augmentation service. All of our
          certified remote engineers can help your organization with either
          development and admin tasks. We offer FTE’s (full-time equivalent )
          engineers or hourly based engineering staff who can join your existing
          team. Subject matter expertise, extensive experience, access to top
          engineers, and cost savings are a few of the main reasons our partners
          choose to hire ParaHack’s engineering staff.
        </p>
      </div>
      <div className={Classes.Recruitment}>
        <h2>STAFF AUGMENTATION BENEFITS</h2>
        <div className={Classes.RecruitmentProcesses}>
          <div className={Classes.empty}></div>
          <div>
            <h3>Dedicated Teams</h3>
            <p>
              ParaHack’s engineers are assigned to a particular client.
              Engineers are not allocated to other projects or accounts. Your
              team’s know how will remain intact over the life cycle of
              ParaHack’s services.
            </p>
          </div>
        </div>
        <div className={Classes.RecruitmentProcesses}>
          <div className={Classes.empty}></div>
          <div>
            <h3>24/7 Recruitment Process</h3>
            <p>
              Our hiring process is constantly active to ensure us immediate
              access to the best IT professionals in the market. More info about
              our staffing process can be found here: Top 1% IT Talent.
            </p>
          </div>
        </div>
        <div className={Classes.RecruitmentProcesses}>
          <div className={Classes.empty}></div>
          <div>
            <h3>Maintain Oversight & Control</h3>
            <p>
              ParaHack’s engineers quickly integrate themselves with your team’s
              processes and report to your team’s management and participate
              actively in daily meetings and progress reports.
            </p>
          </div>
        </div>
        <div className={Classes.RecruitmentProcesses}>
          <div className={Classes.empty}></div>
          <div>
            <h3>Save Time</h3>
            <p>
              Put our round the clock recruitment process to work for your team.
              Find the right professionals to add to your team in less time.
            </p>
          </div>
        </div>
        <div className={Classes.RecruitmentProcesses}>
          <div className={Classes.empty}></div>
          <div>
            <h3>Expertise</h3>
            <p>
              We rigorously test for logical/mathematical reasoning skills,
              technical ability and soft skills in our interview process. Only
              those engineers who score highly across each of these areas are
              presented to our clients.
            </p>
          </div>
        </div>
      </div>
      <div className={Classes.AccordionHeading}>
        <h1>Software development FAQ</h1>
        </div>
      <Accordion
        questions="How do we communicate with our augmented team?"
        answer="Typically we deploy a project management methodology and also make weekly sprints to ensure there is no communication gap. For new project kickoffs or to go over specifics, we use tools such as zoom."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="How do we know that the team is only working on our project?"
        answer="For staff augmentation, we provide dedicated engineers who will ONLY work on your project unless stated otherwise. We maintain a strict deadline and also a code of ethics. There is a reason why we have so many partners and successful relationships."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="How do you charge for staff augmentation?"
        answer="Depending on the staff’s technical expertise and experience, typically for a full-time engineer, our starting rate is around $4,200/ month. To get an exact price, please contact us."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="We are a small company and only need one engineer, do you provide just one team member?"
        answer="Yes, of course! We work with a lot of smaller agencies/startups who require 1-3 full-time staff."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="How does the time difference work?"
        answer="We are an American company.
       We can maintain any office hours; however, most of our partners take advantage of the time difference to have a team working around the clock. We can also use working hours, which will overlap, ensuring proper communication."
       active={active}
        setActive={setActive}
      />
      <Accordion
        questions="Will our augmented staff speak English?"
        answer="Yes, all our team members speak English."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="What kind of experience and education do they have?"
        answer="Our most junior engineers have a minimum of two years of professional experience. We recruit and train only the top 3% of engineers who all have graduated from top Universities. We use a rigorous recruiting process to ensure finding the best talent."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="How do we start?"
        answer="To Get started, fill out the contact form, and we will schedule a call with a staff augmentation expert to help you find the right talent."
        active={active}
        setActive={setActive}
      />

      <Email />
    </div>
  );
};

export default StaffAugmentation;
