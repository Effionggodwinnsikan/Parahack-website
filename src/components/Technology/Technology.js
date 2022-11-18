import React from "react";
import Classes from "./Technology.module.css";

const Technology = () => {
  return (
    <div className={Classes.Technology}>
      <div className={Classes.TechnologyGuideline}>
        <h2>TECHNOLOGY GUIDELINES</h2>
        <p>
          Seeking to achieve code consistency and improved maintainability, we
          conform to language‑specific conventions for architecture and
          components interaction design and clean code.
        </p>
      </div>
      <div className={Classes.Technology1}>
        <div className={Classes.TechnologyGeneral}>
          <h3> <span>GENERAL</span>{""} PROGRAM­MING PRINCIPLES</h3>
          <p>
            HeavyTask practices SOLID principles and General Responsibility
            Assignment Software Patterns (GRASP), to ensure quick changes. We
            rely on keep-it-short-simple philosophy and by using Code Modularity
            which ensures codes which are easier to understand and test.
          </p>
        </div>
        <div className={Classes.TechnologySpecific}>
          <h3><span>SPECIFIC</span> {""} CODING GUIDELINES</h3>
          <p>
            Whenever applicable, we utilize vendor‑specific guidelines that
            cover technical standards, as well as incentives for common
            development style for languages and frameworks including naming and
            formatting conventions, architecture design practices and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
