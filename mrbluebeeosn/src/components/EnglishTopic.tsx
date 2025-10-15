import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function EnglishTopic(): React.JSX.Element {
  return (

    <div className="topic-container">

      {/* =============================
        1. English Learning Terms
      ============================= */}

      <div  className="flex-topic">

        <HashLink smooth to="/english">
        <mark className="highlight-tertiary-padding-2-4">English</mark>
        </HashLink>

        <HashLink smooth to="/grammar">
          <mark className="highlight-tertiary-padding-2-4">Grammar</mark>
        </HashLink>

        <HashLink smooth to="/pronunciation">
          <mark className="highlight-tertiary-padding-2-4">Pronunciation</mark>
        </HashLink>

        <HashLink smooth to="/tieng-anh">
          <mark className="highlight-tertiary-padding-2-4">Tiếng Anh</mark>
        </HashLink>

        <HashLink smooth to="/vocabulary">
          <mark className="highlight-tertiary-padding-2-4">Từ vựng</mark>
        </HashLink>

      </div>

    </div>

  );
}