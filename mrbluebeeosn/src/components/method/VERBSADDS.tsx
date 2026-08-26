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

        <div className="example">

          <p className="example-sentence">
            🟦 <span className="s">1st Person (Ngôi thứ nhất): <strong>The Speaker</strong>. This is you. You use I (singular) or We (plural).</span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            🟦 <span className="v">2nd Person (Ngôi thứ hai): <strong>The Listener</strong>. This is the person right in front of you. You use You (both singular and plural).</span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            🟦 <span className="o">3rd Person (Ngôi thứ ba): <strong>The Outsider</strong>. This is anyone or anything outside of the direct conversation. You are talking about them, not to them.</span>
          </p>

          <p className="example-sentence">
            <span className="p">Whenever you talk about one outsider (He/She/It), you are technically "go<strong>ss</strong>iping" about them, so you must add the "<strong>S</strong>" (go<strong>SS</strong>iping) to the action: <br/>He speak<strong>s</strong> (Anh ấy nói...)<br/> She laugh<strong>s</strong> (Cô ấy cười...)<br/> It hurt<strong>s</strong> (Nó đau...)<br/> You don't add "S" when talking to the person right in front of you (You) or about yourself (I), because that is a direct conversation, not gossip!</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">He</span> &nbsp;<span className="pill v">She</span> &nbsp;<span className="pill o">It</span> &nbsp;<span className="pill m">One</span> &nbsp;<span className="pill p">Everyone</span> — &nbsp;<span className="pill t">go🆂🆂ping</span>
          </p>

        </div>


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