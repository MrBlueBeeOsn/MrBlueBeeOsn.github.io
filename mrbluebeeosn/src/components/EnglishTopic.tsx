import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { useLocation } from 'react-router-dom';


export default function EnglishTopic(): React.JSX.Element {
  const [selected, setSelected] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === '/';
  return (

    <div className="topic-container">

      {/* =============================
        1. English Learning Terms
      ============================= */}

      <div  className="flex-topic">

        {/* English */}
        <NavLink to="/english"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
          // onMouseEnter={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--accent-color-50)';
          //   }
          // }}
          // onMouseLeave={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--tertiary-color)';
          //   }
          // }}
        >
        <mark className="highlight-tertiary-padding-2-4">English</mark>
        </NavLink>

        {/* Grammar */}
        <NavLink to="/grammar"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
          // onMouseEnter={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--accent-color-50)';
          //   }
          // }}
          // onMouseLeave={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--tertiary-color)';
          //   }
          // }}
        >
          <mark className="highlight-tertiary-padding-2-4">Grammar</mark>
        </NavLink>

        {/* Pronunciation */}
        <NavLink to="/pronunciation"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
          // onMouseEnter={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--accent-color-50)';
          //   }
          // }}
          // onMouseLeave={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--tertiary-color)';
          //   }
          // }}
        >
          <mark className="highlight-tertiary-padding-2-4">Pronunciation</mark>
        </NavLink>

        {/* Tiếng anh */}
        <NavLink to="/tieng-anh"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
          // onMouseEnter={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--accent-color-50)';
          //   }
          // }}
          // onMouseLeave={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--tertiary-color)';
          //   }
          // }}
        >
          <mark className="highlight-tertiary-padding-2-4">Tiếng Anh</mark>
        </NavLink>

        {/* Vocabulary */}
        <NavLink to="/vocabulary"
          className={`link-rounded ${selected ? 'selected' : ''}`}
          style={({ isActive }) => ({
            background: isActive ? 'var(--accent-color-50)' : '',
          })}
          // onMouseEnter={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--accent-color-50)';
          //   }
          // }}
          // onMouseLeave={(e) => {
          //   if (!e.currentTarget.classList.contains('active')) {
          //     e.currentTarget.style.background = 'var(--tertiary-color)';
          //   }
          // }}
        >
          <mark className="highlight-tertiary-padding-2-4">Từ vựng</mark>
        </NavLink>

      </div>

    </div>

  );
}