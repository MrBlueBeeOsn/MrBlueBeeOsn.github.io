import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import ExternalLink from '@/components/icon/ExternalLink';
import { useState } from "react";

export default function VERBSADDS(): React.JSX.Element {
  return (

    // <div className="topic-container">

    // <div className="margin-y-50 text-border1 padding-10 highlight-238-padding-4-8">

    <div className="margin-y-50 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

      {/* =============================
        VERBSADDS
      ============================= */}

      <p className="margin-top-20 text-center">

        <span className="highlight-255-padding-0-4 text-border">
          <strong>Visualize Superman</strong>: Imagine <HashLink smooth to="/grammar/how-to-remember-verbs-add-s#asuperman">an "S" on the chest of a superhero</HashLink> that jumps onto the verb when the subject is he, she, or it.
        </span>

        <hr className="margin-y-20"/>

        <span className="highlight-255-padding-0-4 text-border">
          <HashLink smooth to="/grammar/how-to-remember-verbs-add-s#hesheorit">He, she, or it?</HashLink> S goes with it!
        </span>

        <hr className="margin-y-20"/>

        <span className="highlight-255-padding-0-4 text-border">
          <HashLink smooth to="/grammar/how-to-remember-verbs-add-s#hesheit">He, she, it,</HashLink> S muss mit
        </span>

        <hr className="margin-y-20"/>

        <span className="highlight-255-padding-0-4 text-border">
          <strong>Verbs</strong>: Add s <HashLink smooth to="/grammar/how-to-remember-verbs-add-s#verbs">to make them singular</HashLink> (the cat sleeps, the cats sleep).
        </span>

        <hr className="margin-y-20"/>
      
        <span className="highlight-255-padding-0-4 text-border">
          <strong>Nouns</strong>: Add s <HashLink smooth to="/grammar/how-to-remember-verbs-add-s#nouns">to make them plural</HashLink> (one cat, two cats).
        </span>

      </p>

      

    </div>
    
  );
}