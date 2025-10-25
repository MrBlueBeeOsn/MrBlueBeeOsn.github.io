import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function MrBeeOsnTopic(): React.JSX.Element {
  return (

    <div className="topic-container">

      {/* =============================
          Mr.Bee Osn Topic
      ============================= */}

      <div  className="flex-topic">

        <HashLink smooth to="/about">
          <mark className="highlight-tertiary-padding-2-4">About</mark>
        </HashLink>

        <HashLink smooth to="/project">
          <mark className="highlight-tertiary-padding-2-4">Project</mark>
        </HashLink>

        <HashLink smooth to="/journey">
          <mark className="highlight-tertiary-padding-2-4">Journey</mark>
        </HashLink>

        <HashLink smooth to="/contact">
          <mark className="highlight-tertiary-padding-2-4">Contact</mark>
        </HashLink>

      </div>

    </div>

  );
}