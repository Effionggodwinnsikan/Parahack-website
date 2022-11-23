import React, { useState } from "react";
import Images from "../../assets/Images/app images.jfif";
import HeroTemplate from "../../components/HeroTemplate/HeroTemplate";
import Classes from "./MobileDevelopment.module.css";
import ButtonItems from "../../components/ButtonItems/ButtonItem";
import { Link } from "react-router-dom";
import { ImAndroid } from "react-icons/im";
import { SiFlutter, SiIos } from "react-icons/si";
import Accordion from "../../components/Accordion/Accordion";
import MobileCard from "../../components/MobileCard/MobileCard";
import Images1 from "../../assets/Images/happy-client.jpg";

const MobileDevelopment = () => {
  const [active, setActive] = useState(" ");
  return (
    <div className={Classes.MobileDevelopment}>
      <div className={Classes.MobileDevelopmentContainer}>
        <HeroTemplate
          text="MOBILE APP DEVELOPMENT"
          bgImg={Images}
          content="Custom IOS and Android Application Development"
        />
      </div>

      <div className={Classes.MobileDevelopmentContainer1}>
        <h2>Mobile App Development</h2>
        <p>
          With a mobile-first approach, ParaHack’s team has consistently
          delivered cutting-edge mobile applications for funded startups and
          established organizations across multiple verticles worldwide.
        </p>
        <p>
          From native to cross-platform applications, our team of dedicated
          mobile application development engineers has over 30 years of combined
          experience with the most cutting-edge technical stacks and toolkits
          for mobile applications. We specialize in react native, Xamarin,
          PhoneGap, Kotlin, and Flutter.
        </p>
        <p>
          ParaHack’s operations are based in Dallas. Mobile App Development is
          only one of the{" "}
          <Link to="/">
            <span>skillsets our team has at their disposal.</span>
          </Link>
        </p>
        <p>
          Whether you’re looking to develop a new app from the ground up or for
          a professional service to augment your existing app development
          process/team — we’ve got your back.
        </p>
      </div>
      <div className={Classes.mobileDev}>
        <div className={Classes.mobile}>
          <SiIos className={Classes.icons} />
          <p>iOS Development</p>
        </div>
        <div className={Classes.mobile}>
          <ImAndroid className={Classes.icons} />
          <p>Android Development</p>
        </div>
        <div className={Classes.mobile}>
          <SiFlutter className={Classes.icons} />
          <p>Flutter Development</p>
        </div>
      </div>
      <div className={Classes.MobileStrategyContainer}>
        <h2>Mobile Strategy</h2>
        <p>
          From apps for funded startups to mobile enterprise apps, our
          experienced team at HeavyTask can assist with everything from strategy
          to development and everything in between.
        </p>
        <p>
          Our technical experts create a mobile strategy for you by assessing
          your business and consumer needs. Moreover, following a
          user-feedback-focused agile development process ensures that your
          mobile strategy is investment-efficient and thorough.
        </p>
        <p>
          Statistics and technological advancements every year have proven that
          developing a mobile strategy has dramatically benefitted many funded
          start-ups and businesses worldwide. Many professionals argue that
          developing a mobile strategy gives you the most value for the lowest
          investments.
        </p>
        <p>Generally, you’d use mobile strategy to:</p>
        <div className={Classes.mobileCard2}>
          <MobileCard text="Increase your customer reach" />
          <MobileCard text="Create new opportunities and channels for revenue" />
          <MobileCard text="Gain essential data insights such as consumer data (consumer behaviors, personas, etc.)" />
          <MobileCard text="Provide superior service and customer experience based on the data collected" />
          <MobileCard text="Provide ease of access to both existing customers, new prospects & employees" />
          <MobileCard text="Significantly increase efficiency and overall organizational productivity." />
        </div>
      </div>
      <div className={Classes.MobileDesignContainer}>
        <h2>Mobile UI/UX Design</h2>
        <p>
          Our technical team at Heavy Task can design a comprehensive user
          interface (UI) and user experience (UX) for your mobile app. The UI/UX
          is one of the most vital aspects of app development since usability is
          key to the success of any app.
        </p>
        <p>
          Mobile apps with well-made user interfaces are essential to maximizing
          a user’s experience. This is why our technical experts focus heavily
          on designing a UI that ensures users have a smooth experience while
          using your mobile app. Start-ups worldwide have benefitted endlessly
          from having a detailed user interface design. In the modern day, it’s
          almost essential for a business to have a solid online presence,
          including a well-designed mobile app that’s easy to use.
        </p>
        <p>
          How often have you downloaded and used a well-designed app only to
          become a loyal consumer of that brand? You probably felt attached to
          many of your existing apps because they had an appealing and
          user-friendly interface that gave you what you needed with a few taps
          on your mobile screen.
        </p>
        <p>To ensure your mobile app has a smooth UI/UX, our technicians:</p>
        <div className={Classes.mobileCard3}>
          <MobileCard text="Establish a solid, easy-to-understand structure and layout for the app’s interface" />
          <MobileCard text="Clearly define every feature and function of your mobile app, ensuring little navigation is needed and the process of using the app is smooth" />
          <MobileCard text="Design the mobile app using appealing visual designs, colors, and branding that reflect your business’s while taking into account what your users recognize you as" />
          <MobileCard text="Make your mobile app’s UI visually appealing and reflect the business’s quality" />
        </div>
      </div>

      <div>
        <div className={Classes.client}>
          <div className={Classes.clientimg}>
            <img src={Images1} alt="/" />
            <div className={Classes.overlay}>
              <div className={Classes.content}>
                <div>
                  <h4> 100+</h4>

                  <p>Number of Clients</p>
                </div>
                <div>
                  <h4> 30+</h4>

                  <p>Team Members</p>
                </div>
                <div>
                  <h4> 7+</h4>

                  <p>Languages</p>
                </div>
                <div>
                  <h4> 100+</h4>

                  <p>Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={Classes.MobileHostingContainer}>
          <h2>Mobile App Cloud Hosting</h2>
          <p>
            At Heavy Task, our tech team can provide you with top-notch cloud
            hosting services for your mobile app. Once we’ve developed your
            mobile app, you’ll need the backend to be hosted on servers/or in
            the cloud, especially if your app has a sophisticated backend.{" "}
          </p>
          <p>
            A mobile strategy is only successful when it has a solid cloud
            hosting system woven throughout. This is why using Heavy Task’s
            cloud hosting services for your mobile app, you can expect to:
          </p>
          <div className={Classes.mobileCard1}>
            <MobileCard text="Increase operation efficiency" />
            <MobileCard text="Significantly reduce your business’s capital expenditures" />
            <MobileCard
              text="Improved scalability and flexibility. 
          Very important to ensure your budgeting is easier to manage when 
          there are unexpected spikes in mobile app users"
            />
            <MobileCard text="Simplified process of developing new apps" />
          </div>
        </div>
        <div className={Classes.MobileAnalyticsContainer}>
          <h2>Mobile App Analytics</h2>
          <p>
            ParaHack’s mobile development team ensures your launched mobile app
            is consistently maintained and changes are made according to users’
            feedback.
          </p>
          <p>
            Even top-tier companies have had their mobile apps fail to sustain
            themselves in the market without proper mobile analytics. It’s
            crucial to ensure your consumers’ behavior and feedback on the
            mobile app are analyzed and further implemented. By doing so, we can
            optimize your mobile app according to what users require while
            ensuring the changes are not negatively affecting your business.
            This will not only generate greater revenue but also improve your
            brand image. Every user enjoys using apps from
            companies/organizations that take account of their feedback.
          </p>
        </div>
        <div className={Classes.AccordionHeading}>
          <h1>Mobile App Development FAQs</h1>
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
      </div>
    </div>
  );
};

export default MobileDevelopment;
