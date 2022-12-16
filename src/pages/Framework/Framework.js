import React from "react";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import SideBar from "../../components/SideBar/SideBar";
import Classes from "./Framework.module.css";
import Image1 from "../../assets/Images/awards.webp";
import Schedule from "../../components/Schedule/Schedule";
import {bloglist} from "../../config/Data/Data"

const Framework = () => {
  const currentBlogs = bloglist.slice(0,1);
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
          <div>
            <p>
              Mobile app development is booming as of 2022. It is estimated that
              mobile applications will generate over $935 billion in revenue by
              2023, and the projected number of mobile users around the globe
              will be a whopping 7.5 billion!
            </p>
            <p>
              Moreover, cross-platform mobile app development is becoming more
              common because of its easy-to-build & maintenance features and
              cross-functionality.
            </p>
            <p>
              With an increasing number of mobile users and mobile apps being
              developed, it’s essential to figure out which cross-platform
              mobile app development frameworks are commonly used and preferred
              by developers. More so, if you’re looking to opt for mobile app
              development services.
            </p>
            <p>
              The rest of this article will discuss the top 3 commonly preferred
              cross-platform mobile app development frameworks. Without further
              ado, let’s begin.
            </p>
          </div>
          <div>
            <h3>
              {" "}
              What Is A Mobile App Development Framework? Mobile application{" "}
            </h3>
            <p>
              development frameworks are essentially software tools that you can
              use to code, design & build mobile apps to be used on mobile
              devices such as Android devices, iOS devices, and Windows devices,
              etc. To be able to use mobile app development frameworks for
              mobile app development, you need to have a firm understanding of
              common programming languages, such as, Javascript, CSS, HTML, etc.
            </p>
          </div>
          <div>
            <h3>
              {" "}
              What Is A Cross-Platform Mobile App Development Framework?{" "}
            </h3>
            <p>
              {" "}
              Cross-platform mobile app development is the act of developing a
              mobile app that can run on multiple computing platforms such as
              Android, iOs & Windows, etc (More on this below).
            </p>
            <p>
              When it comes to cross-platform frameworks, they are tools that
              will allow you to essentially build mobile apps that are
              compatible with multiple devices. Cross-platform frameworks are
              commonly preferred nowadays due to how time and cost-efficient
              they can be.{" "}
            </p>
          </div>
          <div>
            <h3> What Are Cross-Platform Apps? </h3>
            <p>
              Cross-platform applications are applications that possess the
              ability of both native and web development frameworks.
              Cross-platform mobile app development is carried out to be
              compatible with multiple mobile operating systems. This means that
              a cross-platform mobile app is accessible through both Android and
              iOS.
            </p>
          </div>
          <div>
            <h4>Benefits of Cross-Platform Applications </h4>
            <ul>
              <li>
                Cross-platform mobile app frameworks allow you to use a single
                code base for multiple platforms. Ex. You can use the same
                codebase for your app to be compatible with both Android and iOS
                instead of having to develop separate apps for individual
                operating systems.
              </li>
              <li>
                Cross-platform applications are generally easier to build thanks
                to the shared code base and, moreover, easier to maintain.
              </li>
            </ul>
          </div>
          <div>
            <h4>Drawbacks of Cross-Platform Applications</h4>
            <ul>
              <li>
                In cross-platform mobile app development, bridging causes
                performance bottlenecks. This may lead to higher development
                time, depending on the context.
              </li>
              <li>
                Native device features are reliant on bridges and libraries.
              </li>
            </ul>
          </div>
          <div>
            <h3>What Are The Top 3 Cross-Platform Mobile App Frameworks?</h3>
            <p>
              There are many frameworks available for mobile app development.
              Mostly all frameworks are good for use depending on your
              requirements. When it comes to cross-platform mobile development
              frameworks, arguably, the top three preferred frameworks are as
              follows (not in order):
            </p>
            <ul>
              <li>Flutter</li>
              <li>React Native</li>
              <li>Xamarin</li>
            </ul>
          </div>
          <div>
            <h3>What Is Flutter? – Benefits & Drawbacks</h3>
            <p>
              Flutter is an open-source portable UI toolkit created by Google.
              It’s used to craft cross-platform applications for mobile, web,
              and desktop applications from a single codebase.
            </p>
            <p>
              Flutter enables you to deploy one codebase for iOS and Android
              applications, lower overall development costs, and make
              maintenance easy. You only have to change the code base once,
              making Flutter the perfect technology for quick MVP (minimum
              viable product) development.{" "}
            </p>
            <p>
              Flutter is primarily used for developing mobile apps. The main
              reason behind this is because Flutter allows you to program
              different apps for different mobile operating systems through a
              single codebase.{" "}
            </p>
            <p>
              Let’s look at some of the benefits and drawbacks of using Flutter
              for your cross-platform mobile app.
            </p>
          </div>
          <div>
            <h3>Benefits Of Flutter</h3>
            <ul>
              <li>
                <h4>Single Codebase (Cross-platform Programming)</h4>
              </li>
            </ul>
            <p>
              Before Flutter’s release, developers had a more challenging time
              crafting mobile applications. This is because they were required
              to write different codes for Android and iOS devices.{" "}
            </p>
            <p>
              Thanks to Flutter’s code reusability, you can now write just one
              codebase and use it for all platforms. Yes, you heard it right —
              all platforms. You can use the single codebase you’ve written for
              Android & iOS devices, as well as for web, desktop, and more.
            </p>
            <p>
              On top of the single shared codebase, Flutter’s widgets make it
              even easier to use for several platforms. Not only does all of
              this cut costs, but it also allows you to launch your new mobile
              app much faster due to the drastically reduced development time.{" "}
            </p>
            <ul>
              <li>
                <h4>Cost-Effective</h4>
              </li>
            </ul>
            <p>
              When compared to other cross-platform app development frameworks,
              Flutter is a much cheaper alternative. This is partly because of
              Flutter’s cross-platform functionality, as mentioned above.
            </p>
            <p>
              If you choose to go for a flutter app development service, you
              will likely save even more money. Outsourcing your mobile app
              development via an agency will ensure lesser development time,
              greater cost-effectiveness, and reduce your overall budget.
            </p>
            <p>
              You can hire a single Flutter development team for your mobile app
              and not worry about spending money on different development teams
              for other platforms.
            </p>
            <ul>
              <li>
                <h4>High Performance</h4>
              </li>
            </ul>

            <p>
              Generally speaking, using Flutter, you are guaranteed to
              experience high application performance, which can compare to the
              native app. In specific scenarios, such as for complex UI
              animations, Flutter can outperform other app development
              frameworks.
            </p>
            <ul>
              <li>
                <h4>Fast & Flexible Development</h4>
              </li>
            </ul>
            <p>
              Flutter is faster than most other application development
              frameworks available in the market. This is mainly due to some of
              its distinct features, such as Hot Reload, Widgets & their unique
              Dart programming language.
            </p>
            <ul>
              <li>
                <h4>Reliability</h4>
              </li>
            </ul>
            <p>
              Flutter, in a word, is reliable. Over the last five years, Flutter
              gained a vast number of followers. Thus there’s no shortage of
              flutter app development companies or services. Many major
              companies and organizations such as BMW, Google Pay & Alibaba
              group have cross-platform applications built via Flutter.{" "}
            </p>
            <h3>Drawbacks Of Flutter</h3>
            <ul>
              <li>
                <h4>Heavy Applications</h4>
              </li>
            </ul>
            <p>
              Flutter-based apps bundled with Flutter’s associated tools are
              fundamentally bigger than native apps. Some of the rival
              frameworks can produce similar apps with a lower footprint, such
              as native react.
            </p>
            <ul>
              <li>
                <h4>Dark Language Is Niche</h4>
              </li>
            </ul>
            <p>
              Dart is one of Flutter’s selling points. However, it’s also one of
              its significant downsides. Although Dart is a very fast, scalable,
              and productive language, it’s a very niche language when it comes
              to app development and isn’t as commonly used in contrast to
              programming languages like Javascript. Moreover, there’s been
              limited expansion since its release.{" "}
            </p>
            <ul>
              <li>
                <h4>Lack Of Community Support</h4>
              </li>
            </ul>
            <p>
              Flutter was publicly released in 2017, making it one of the newer
              frameworks. Although it’s been five years since its release, it
              didn’t gain that much traction. Because of this, the community
              around Flutter is much smaller when compared to some of the other
              frameworks, such as native react.{" "}
            </p>
            <p>
              The technology in Flutter suffers from a similarly small
              development community. As of now, the consequence is inescapable
              when picking any relatively new technology since they lack the
              requisite time or widespread usage to develop.
            </p>
            <h3>What is React Native? – Benefits & Drawbacks</h3>
            <p>
              React Native (RN) is a JavaScript-based mobile application
              framework that can be used to create natively rendered mobile
              applications for Android and iOS. Using the same codebase, the
              framework enables you to develop an application for various
              platforms.
            </p>
            <p>
              In 2015, Facebook originally made React Native available as an
              open-source project. It rose to the top of the list of tools used
              for mobile development in just a few short years.{" "}
            </p>
            <p>
              Some of the most popular mobile applications in the world,
              including Instagram, Facebook, and Skype, are powered by React
              Native development. Ex. Facebook’s popular marketplace product,
              privacy shortcuts, and crisis response were all built using React
              Native.
            </p>
            <p>
              Let’s look at some of the benefits and drawbacks of using React
              Native for your cross-platform mobile app.
            </p>
            <h3>Benefits Of Native React</h3>
            <ul>
              <li>
                <h4>Cross-platform Development (Reusability)</h4>
              </li>
            </ul>
            <p>
              Arguably one of the biggest advantages of React Native is
              reusability. It allows you to reuse code, meaning you can
              effectively run mobile apps on several platforms. React native can
              integrate 90% of the native framework to be usable for both
              Android and iOS. Moreover, if your web application code is built
              using React Native, you can expect to use the same code for your
              mobile app development.
            </p>
            <ul>
              <li>
                <h4>Low Investment</h4>
              </li>
            </ul>
            <p>
              React Native is a free framework that is open-source, and you can
              use it for both personal and business applications.{" "}
            </p>
            <p>
              Additionally, employing React Native may save your development
              expenses by about 50% if you deploy both Android and iOS apps.
              This is because your team won’t have to design every feature for
              each platform separately.
            </p>
          </div>
        </div>
        <SideBar bgImg={Image1} />
      </div>
      <div className={Classes.Schedule}><Schedule/></div>
    </div>
  );
};

export default Framework;
