import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import ExternalLink from '@/components/icon/ExternalLink';
import { useState } from "react";

export default function SVOMPT(): React.JSX.Element {
  return (

    // <div className="topic-container">

    // <div className="margin-y-50 text-border1 padding-10 highlight-238-padding-4-8">

    <div className="margin-y-50 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

      {/* =============================
        SVOMPT
      ============================= */}

      <div className="road-visual">

				<svg className="road-svg" viewBox="0 0 320 400" xmlns="http://www.w3.org/2000/svg">
					{/* Road shape */}
					<polygon points="160,20 210,390 110,390" fill="#ede9e2"/>
					<line x1="160" y1="20" x2="110" y2="390" stroke="#d4cfc8" stroke-width="1"/>
					<line x1="160" y1="20" x2="210" y2="390" stroke="#d4cfc8" stroke-width="1"/>
					{/* Vanishing point dot */}
					<circle cx="160" cy="20" r="3" fill="#c4602a" opacity="0.5"/>
					{/* Road center dashes */}
					<line x1="160" y1="38" x2="160" y2="55" stroke="#c4cfc8" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
					<line x1="160" y1="80" x2="160" y2="105" stroke="#c4cfc8" stroke-width="1.2" stroke-dasharray="5 5" opacity="0.5"/>
					<line x1="160" y1="140" x2="160" y2="175" stroke="#c4cfc8" stroke-width="1.5" stroke-dasharray="6 5" opacity="0.5"/>
					<line x1="160" y1="230" x2="160" y2="275" stroke="#c4cfc8" stroke-width="2" stroke-dasharray="8 6" opacity="0.5"/>

					{/* T — farthest */}
					<rect x="136" y="26" width="48" height="18" rx="9" fill="#f1efe8" stroke="#b4b2a9" stroke-width="0.5"/>
					<text x="160" y="38" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="10" fill="#444441" dominant-baseline="central">Time</text>

					{/* P */}
					<rect x="130" y="62" width="60" height="22" rx="11" fill="#e6f1fb" stroke="#85b7eb" stroke-width="0.5"/>
					<text x="160" y="75" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="11" fill="#0c447c" dominant-baseline="central">Place</text>

					{/* M */}
					<rect x="122" y="110" width="76" height="26" rx="13" fill="#faeeda" stroke="#ef9f27" stroke-width="0.5"/>
					<text x="160" y="125" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="12" fill="#633806" dominant-baseline="central">Manner</text>

					{/* O */}
					<rect x="112" y="170" width="96" height="30" rx="15" fill="#faece7" stroke="#f0997b" stroke-width="0.5"/>
					<text x="160" y="187" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="13" fill="#712b13" dominant-baseline="central">Object</text>

					{/* V */}
					<rect x="100" y="242" width="120" height="36" rx="18" fill="#e1f5ee" stroke="#5dcaa5" stroke-width="0.5"/>
					<text x="160" y="262" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="14" font-weight="500" fill="#085041" dominant-baseline="central">Verb</text>

					{/* S — closest, largest */}
					<rect x="84" y="322" width="152" height="44" rx="22" fill="#eeedfe" stroke="#afa9ec" stroke-width="0.5"/>
					<text x="160" y="346" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="16" font-weight="500" fill="#26215c" dominant-baseline="central">Subject</text>
				</svg>

				<p className="road-caption">Gần bạn nhất là S — vừa bước ra. Xa dần là V, O, M, P, T.

					<br />
					
					Nói là đi thẳng về phía trước.

				</p>

			</div>

      

    </div>
    
  );
}