import React from 'react'
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import Images from "../../assets/Images/vector engineer.png"
import SideBar from "../../components/SideBar/SideBar";
import Classes from "./Requirement.module.css";
import Image1 from "../../assets/Images/awards.webp";
import Schedule from "../../components/Schedule/Schedule";

const Requirement = () => {
  return (
    <div>
         <BlogHeader 
      text="
      WHAT’S AN SRS (SOFTWARE REQUIREMENT SPECIFICATION), AND WHY IT’S IMPORTANT?"
      bgImg={Images}
      />
      <div className={Classes.Container}>
        <div className={Classes.ContainerPg}>
          <p>
            When a startup is looking to build a long-term partnership when
            building a product, it’s a daunting task because going with the
            right outsourcing partner can play a massive role in its success.
            For any startup or a well-established organization, time and
            financial investment are crucial. There is a delicate balance
            between a project completed within the project delivery estimation
            while maintaining the quality and cost.
          </p>
          <p>
            Most startups can’t overlook all those crucial factors when choosing
            the right agency. There are a few key factors one should look for
            when selecting the right technical partner.
          </p>
          <h4>Extensive portfolio and good existing clients</h4>
          <p>
            Any agency that can provide good projects they successfully
            delivered will more likely have future projects. Look for completed
            projects which are live with demo / like URL. A lot of agencies will
            offer excellent project pricing, but often they don’t have the
            expertise or never successfully deliver a project for their clients.
            This is especially common when outsourcing projects overseas.
            Startups often don’t have the necessary budget, so the deciding
            factor comes down to cost, which may cost you more in the long run
            because the project won’t get completed, but you may end up starting
            over again is both time and money.
          </p>
          <h5>Business Drivers</h5>
          <p>
            This section of the SRS defines the client’s needs and why they
            require the use of the system. This information guides the decisions
            of the system developers and architects and business analysts.
          </p>
          <h5>Good reviews and happy customers</h5>
          <p>
            This is especially important; having happy customers is a goal for
            any excellent agency in the long run. When choosing an outsourcing
            partner, be sure to ask for references from existing customers who
            can vouch for the agency if you are in doubt. Also, it’s imperative
            to ask for previous projects/products that use the same tech stack
            as what you will go with. If you aren’t sure about the particular
            tech stack, it’s good to ask about similar products the firm may
            have delivered.
          </p>
          <h5>It’s an established brand</h5>
          <p>
            Try to avoid brand new agencies or overseas individuals who have no
            presence or portfolio. This is especially common when looking for a
            development team on a budget. Startups often mistake hiring
            individuals or agencies without a proper brand, company policies,
            etc. if a company doesn’t’ have its brand or isn’t highly
            established in the field, the project is also less likely to be
            managed professionally.
          </p>
          <h5>Bad reviews</h5>
          <p>
            If an agency has many bad or negative reviews, definitely avoid
            working with them. This indicates that your project will also most
            likely suffer the same faith.
          </p>
          <h5>It’s too good to be true</h5>
          <p>
            This is often related to the hourly rates or project estimates that
            are just too good to be true. Hiring an iOS developer for 10$.hour
            is just not possible. Even if the team is located in a remote South
            Asian country, keep in mind the age of the distributed workforce.
            Anyone with the skills and talent can make close to the market price
            for high-demand tech stacks. Anyone with the skillsets and expertise
            can find the right remote job, regardless of their region. Yes, we
            offer lower rates than agencies located here in Dallas, but it’s not
            80% cheaper like some agencies who might offer you. Sometimes these
            rates are offered, but in reality, the project will take more than
            what it should, and you will end up paying similar hourly rates if
            the project was done on time.
          </p>

          <p>
            In conclusion, I would urge all startups or established
            organizations to do the due diligence to ensure the agency that will
            be doing the development has the knowledge, skillsets, and expertise
            to get the project completed on time without sacrificing code
            quality. I often come across projects that are halfway done, using
            outdated tech stack where the client has spent a significant amount
            of resources to be in a position where the project can’t be
            finished. To learn more about our software development and staff
            augmentation services, please feel free to email me directly at
            shah@heavytask.com
          </p>
          <p>I look forward to serving you soon!</p>
          <p>Shah Tashfiq <br/>Founder / CEO @ HeavyTask</p>
        </div>
        <SideBar bgImg={Image1} />
      </div>
      <div className={Classes.Schedule}><Schedule/></div>
    </div>
  )
}

export default Requirement