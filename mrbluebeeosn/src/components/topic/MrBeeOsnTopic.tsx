import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

export default function MrBeeOsnTopic(): React.JSX.Element {
  const [selected, setSelected] = useState(false);
  return (

    <div className="topic-container">

      {/* =============================
          Mr.Bee Osn Topic
      ============================= */}

      <div  className="flex-topic">

        <NavLink to="/about"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
        >
          <mark className="highlight-tertiary-padding-2-4">About</mark>
        </NavLink>

        <NavLink to="/project"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
        >
          <mark className="highlight-tertiary-padding-2-4">Project</mark>
        </NavLink>

        <NavLink to="/journey"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
        >
          <mark className="highlight-tertiary-padding-2-4">Journey</mark>
        </NavLink>

        <NavLink to="/contact"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
        >
          <mark className="highlight-tertiary-padding-2-4">Contact</mark>
        </NavLink>

      </div>

    </div>

  );
}