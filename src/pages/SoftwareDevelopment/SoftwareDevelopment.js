import React, { useState } from "react";
import Classes from "./SoftwareDevelopment.module.css";
import Images from "../../assets/Images/software image.jfif";
import HeroTemplate from "../../components/HeroTemplate/HeroTemplate";
import ButtonItems from "../../components/ButtonItems/ButtonItem";
import Email from "../../components/Email/Email";
import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion/Accordion";
import Technology from "../../components/Technology/Technology";
import Images1 from "../../assets/Images/developer fixing bug.jpg";
import Carousel from "../../components/Carousel/Carousel";

const SoftwareDevelopment = () => {
  const [active, setActive] = useState(" ");
  return (
    <div className={Classes.SoftwareDevelopment}>
      <div className={Classes.SoftwareDevelopmentCon}>
        <HeroTemplate
          text="SOFTWARE DEVELOPMENT"
          bgImg={Images}
          content="Do you need custom software developed for your organization?"
        />
      </div>
      <div className={Classes.custom}>
        <h1>Custom Software Development</h1>
        <p>
          We can help you design and develop custom software that will allow
          your business to reach its full potential. Whether you need a custom
          software app to keep track of inventory, tools to manage your
          customers properly, or to solve a complex task — we’ve got you
          covered. ParaHack has software development experts with decades of
          experience. Our in-house expert developers, engineers, and UI/UX
          professionals can design and develop a custom solution just for your
          business or organization.
          <Link to="/contact">
            {""} <span>Contact us</span>
          </Link>{" "}
          {""}now and let our team deliver custom software that will perform and
          exceed your expectations.
        </p>
      </div>

      <div className={Classes.Hero}>
        <img src={Images1} alt="/" />
        <div className={Classes.overlay}></div>
        <div className={Classes.content}>
          <div className={Classes.content1}>
            <h2>
              <span>CODE </span> {""}QUALITY TOOLS
            </h2>
          </div>
          <div className={Classes.content2}>
            <h2>
              <span>TECHNOLOGY</span>
              {""} SELECTION
            </h2>
            <p>
              It can be challenging to assess the right technology to empower
              your organization. This is why our technical experts can assist
              you with making the right decision.
            </p>
            <p>
              Using our technical team’s specific domain knowledge, we can help
              your organization or business reach its objectives by aligning it
              with the right technologies. By doing so, the custom solution will
              promote future growth and reduction in TCO.
            </p>
          </div>
        </div>
      </div>
      <Technology />
      <div className={Classes.client}>
        <div className={Classes.clientimg}>
          <img src={Images1} alt="/" />
          <div className={Classes.clientOverlay}>
            <div className={Classes.clientContent}>
              <div>
                <h1>
                  Need A Quote Or Software Development Isn’t Going As Planned?
                </h1>
                <Link to="/">
                <button>Get A Quote</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Classes.speciality}>
        <div>
          <h2>Technical Expertise</h2>
          <p>
            Our technical team strives to continually innovate and stay up to
            date with the latest technology, skills, and know-how to deliver
            world-class applications that can compare to the best in the
            industry. Our large team of technical experts is proficient at using
            different software development stacks. So no matter which framework
            you’d prefer, we’ve got your back.
          </p>
        </div>
        <div className={Classes.speciality1}>
          <Carousel />
        </div>
      </div>
      <div className={Classes.lifecycle}>
        <div className={Classes.coverage}>
          <h2>FULL LIFECYCLE COVERAGE</h2>{" "}
          <p>
            HeavyTask’s full-stack development experts implement your software
            solution from the ground up, including frontend development, backend
            transformation, and integration to software middleware. Software
            Development Cycle
          </p>{" "}
          <p> Development Cycle</p>
        </div>
        <div className={Classes.circle} >
          <p>Software Development Cycle</p>
        </div>
      </div>
      <div className={Classes.AccordionHeading}>
        <h1>Software development FAQ</h1>
      </div>
      <Accordion
        questions="How do you guys charge?"
        answer="For projects, we charge based on the weeks it takes to 
        complete a project. Typically, in a project development cycle,
         we depend on various skill sets, and the hourly rate for each
          person varies. Our staff from various backgrounds will need 
          to play their share roles such as designers, project managers, 
          software architects, junior and senior engineers, and QA/QC team for any project."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="What are your core technologies?"
        answer="We specialize in Python and Django, Ruby on Rails, 
        Flutter, Node Js and react JS, .net, swift. Don’t see a stack
         you are looking for, no need to worry; we have a growing team,
          and we are always adding talented engineers to the team; fill
           out the form to see if we can help with your specific technical stack."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="I want to build a product; why should I hire ParaHack?"
        answer="Before founding ParaHack LLC, our founder worked in the
         technology space as a project manager and led teams working on 
         various products. As a team, we are entrepreneurial, creative, 
         builders, and problem solvers. We thrive working on challenging 
         products and ideas. Because of our distributed workforce model, 
         we can provide support around the clock, at a competitive rate.
          Hence, speed and cost are the most significant leverage we have,
          both crucial to a startup’s success."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="What is an MVP?"
        answer="A minimum viable product or an MVP is a working prototype
         intended to prove a concept for a brand new product. Typically,
          we design the MVP with the end goal in mind, so when additional
           features are added to the software, we can continue to develop 
           on top of the MVP, saving significant time and cost."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="What details should I provide in the project specifications?"
        answer="Typically there isn’t a detailed guide for an SRS (software requirement 
          specifications). However, we urge all our clients to provide a written document
           in detail that explains each module’s functionalities across all intended users."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="I have an unfinished project, can you complete it?"
        answer="For the most part, yes. We can do a 10-40 hours (depending on 
          the project’s size) code evaluation to thoroughly learn about the project
           and the coding quality. If the codes’ quality is up to par, we can take 
           on the project to complete it."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="What will happen after our first call?"
        answer="1.Discovery call.
        2.Defining needs.
        3.Project kick-off.
        4.Contract signing.
        4.Dev phase
        5.Summary
        6.Possibility of a long term agreement"
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="Can you support my existing team?"
        answer="Yes, we provide staff augmentation services to agencies
         and organizations who need additional engineers to complete a
          project or on-going support around the clock."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="We have an idea for a cool product, what should I do next?"
        answer="First, let’s schedule a call to learn more about the project 
        and define the scope to get an exact estimate and time frame for your project."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="Do you accept equity in the project instead of payments?"
        answer="Unfortunately, as a technical solutions provider, we do not accept
         equity in lieu of payment. Our main priority is providing and delivering
          technical solutions to our customers."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="Where is your development team located?"
        answer="We utilize a distributed global team, with sales and management 
        located in Dallas, TX, and our solutions center is located in Dhaka, Bangladesh."
        active={active}
        setActive={setActive}
      />
      <Accordion
        questions="Once the product is live, can you do on-going maintenance?"
        answer="Yes, most of our customers depend on us for continuous project
         improvement and maintenance and support."
        active={active}
        setActive={setActive}
      />
      <Email />
    </div>
  );
};

export default SoftwareDevelopment;
