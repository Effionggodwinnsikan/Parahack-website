import React from "react";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import SideBar from "../../components/SideBar/SideBar";
import Classes from "./SoftwareFirm.module.css";
import Image1 from "../../assets/Images/awards.webp";
import Schedule from "../../components/Schedule/Schedule";
import {bloglist} from "../../config/Data/Data"

const SoftwareFirm = () => {
  const currentBlogs = bloglist.slice(4,5);
  return (
    <div>
     {currentBlogs.map((blog, i) =>{
      return(  
      <BlogHeader
       
        {...blog }
        key={i}
       
      />
    )})};
      <div className={Classes.Container}>
        <div className={Classes.ContainerPg}>
          <p>
            A Software Requirements Specification (SRS) is a document or set
            describing the behavior and features of the software and mobile
            applications or systems. The SRS includes several elements that
            define the functionality and use of the system to meet the
            requirements. The SRS also defines the main business processes
            supported, the simplifying assumptions, and key performance
            parameters required by the system.
          </p>

          <h3>What are the key elements of SRS?</h3>
          <p>
            The level of detail and formality in the SRS will vary. It depends
            on whether you’re applying the waterfall or agile methodology.
            Typically, the SRS includes a short description of the system,
            technical and functional requirements, assumptions, and client
            acceptance criteria.
          </p>
          <h5>Business Drivers</h5>
          <p>
            This section of the SRS defines the client’s needs and why they
            require the use of the system. This information guides the decisions
            of the system developers and architects and business analysts.
          </p>
          <h5>Business Model</h5>
          <p>
            This section includes the organizational hierarchy and context, key
            business functions, business context, current and future-state
            diagrams, and process flow charts.
          </p>
          <h5>System and Functional Requirements</h5>
          <p>
            This section consists of the hierarchical organization of the system
            requirements.
          </p>
          <h5>System and Business Use Cases</h5>
          <p>
            This section consists of a UML use case diagram illustrating the key
            external entities interacting with the SRS.
          </p>
          <h5>Technical Constraints and Requirements</h5>
          <p>
            You’ll use this section to list “non-functional” requirements
            embodying the technical operating environment for the system. It
            includes all technical constraints to operating conditions.
          </p>
          <h5>System Viability and Qualities</h5>
          <p>
            These elements include the availability, reliability, security,
            serviceability, and scalability of the system.
          </p>
          <h5>Assumptions</h5>
          <p>
            This section of the SRS contains any assumptions made by the
            engineering and development team. They come to these assumptions
            when gathering and analyzing data to match the client’s
            requirements.
          </p>
          <h5>Client Acceptance Criteria</h5>
          <p>
            This section of the SRS describes the client requirements they
            expect from implementing the system. If the client is satisfied with
            the results, they will “sign off” on the system in this section.
          </p>
        </div>
        <SideBar bgImg={Image1} />
      </div>
      <div className={Classes.Schedule}><Schedule/></div>
    </div>
  );
};

export default SoftwareFirm;
