import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CatenativeConstructions(): React.JSX.Element {

  const postId = "CatenativeConstructions";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/grammar#Modern-Grammar"><mark className="highlight-tertiary-padding-4-8">Modern Grammar</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Catenative Constructions</h1>

      {/* This is the content of English Learning Term. */}

      <h4 className="margin-bottom-30 text-center">Syntactic Framework for Catenative Constructions (CGEL 2002 Standard)</h4>
      
      <p>Below is the comprehensive grammatical system, fully synchronized with the exact English terminology used in The Cambridge Grammar of the English Language (2002) by Huddleston and Pullum.</p>

      {/* 1.  */}

      <h3 className="margin-y-50 text-center">1. Word Classes & Markers</h3>

      <h4 className="margin-y-40">Subordinator (Hạ)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: Refers to a word class whose sole function is marking syntactic embedding (Hypotaxis). It lacks independent lexical meaning and acts as a structural anchor to downgrade a clause into a dependent complement.</li>
      
          <li>Example: In the sentence "I know that you are right", the word that is a Subordinator (Hạ).</li>
      
        </ul>
      

      <h4 className="margin-y-40">Coordinator (Bình)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: Denotes a relationship of symmetry and equal syntactic status. This word class links constituents that share the same grammatical rank along the horizontal axis of the sentence (such as and, but, or).</li>
      
          <li>Example: In the sentence "I stayed but he left", the word but is a Coordinator (Bình).</li>
      
        </ul>


      <h4 className="margin-y-40">Infinitival marker (Nguyên dấu)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: Nguyên represents the infinitive form, and Dấu denotes an identifying sign (marker). This particle acts as a syntactic flag signaling that the immediately following verb is in its base (infinitive) form.</li>
      
          <li>Example: In the phrase "to learn", the word to functions as an Infinitival marker (Nguyên dấu).</li>
      
        </ul>
      

      <h4 className="margin-y-40">Infinitival subordinator (Nguyên hạ)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: Specifies the exact part of speech of the word "to" when operating within a catenative construction. It simultaneously introduces an infinitival (Nguyên) verb and carries the properties of a subordinator (Hạ) by embedding the following core clause.</li>
      
          <li>Example: In the sentence "She decided to leave", the word to functions as an Infinitival subordinator (Nguyên hạ).</li>
      
        </ul>
          
      
      {/* 2.  */}

      <h3 className="margin-y-50 text-center">2. Constructions & Verbs</h3>

      <h4 className="margin-y-40">Catenative verb (Chuỗi động)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: A verb that possesses the unique syntactic capacity to chain or hook a non-finite complement directly or via an intervening noun phrase, forming a continuous chain (derived from the Latin catena, meaning chain).</li>
      
          <li>Example: In the sentence "They seem to want to stay", both seem and want are Catenative verbs (Chuỗi động).</li>
      
        </ul>
      

      <h4 className="margin-y-40">Catenative construction (Chuỗi kết)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: The overarching term for the entire syntactic construction formed by chaining catenative verbs and their non-finite complements together.</li>
      
          <li>Example: The complete sentence structure of "She decided to learn English" is a <strong>Catenative Construction</strong> (Chuỗi kết).</li>
      
        </ul>


      <h4 className="margin-y-40">Simple <strong>catenative construction</strong> (Đơn chuỗi)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: The baseline catenative structure where no intervening Noun Phrase (NP) exists between the matrix catenative verb and the dependent non-finite clause.</li>
      
          <li>Example: "I want to go" is a Simple <strong>catenative construction</strong> (Đơn chuỗi).</li>
      
        </ul>


      <h4 className="margin-y-40">Complex <strong>catenative construction</strong> (Phức chuỗi)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: A complex variant of the <strong>catenative construction</strong> that obligatorily requires a Noun Phrase (NP) to intervene between the matrix catenative verb and the non-finite clause.</li>
      
          <li>Example: "I want him to go" is a Complex <strong>catenative construction</strong> (Phức chuỗi) (with him as the intervening NP).</li>
      
        </ul>


      {/* 3.  */}

      <h3 className="margin-y-50 text-center">3. Structural Constituents (Clauses & Intervening NPs)</h3>

      <h4 className="margin-y-40">Main clause (Chính điều)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: The core, structurally independent backbone of the sentence that is capable of standing alone as a complete semantic and syntactic unit.</li>
      
          <li>Example: In the coordinate sentence "I stayed but he left", the segment I stayed is a Main clause (Chính điều).</li>
      
        </ul>

      <h4 className="margin-y-40">Subordinate core clause (Hạ điều)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: A syntactic unit that has been stripped of its structural independence through embedding. It is forced to exist inside another matrix structure as a dependent complement.</li>
      
          <li>Example: In the sentence "I know that you are right", the phrase that you are right is a Subordinate core clause (Hạ điều).</li>
      
        </ul>


      <h4 className="margin-y-40">Coordinate clause (Bình điều)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: A clause linked into the grammatical framework via a Coordinator (Bình), maintaining an equal and symmetrical syntactic status with its counterpart.</li>
      
          <li>Example: In the sentence "I stayed but he left", the component but he left is a Coordinate clause (Bình điều).</li>
      
        </ul>
      

      <h4 className="margin-y-40">Infinitival clause (Nguyên điều)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: A non-finite clause containing an infinitival verb phrase that functions as an embedded subordinate core clause (Hạ điều) serving as a complement to a catenative verb (Chuỗi động).</li>
      
          <li>Example: In the sentence "She decided to learn English", the phrase to learn English is an Infinitival clause (Nguyên hạ điều).</li>
      
        </ul>
      

      <h4 className="margin-y-40">Ordinary matrix object (Thường tân)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: An intervening Noun Phrase (NP) in a Complex <strong>catenative construction</strong> (Phức chuỗi) that serves as a genuine semantic and syntactic object of the preceding matrix catenative verb.</li>
      
          <li>Example: In "I persuaded him to go", the pronoun him is an Ordinary matrix object (Thường tân) because the act of persuading directly targets "him".</li>
      
        </ul>
      
      
      <h4 className="margin-y-40">Raised matrix object (Nâng tân)</h4>
      
        <ul className="list-square">
      
          <li>Explanation: An intervening Noun Phrase (NP) in a Complex <strong>catenative construction</strong> (Phức chuỗi) that functions logically as the subject of the downstream non-finite verb, but has its syntactic position "raised" to serve as the matrix object of the catenative verb.</li>
      
          <li>Example: In "I expected him to go", the pronoun him is a Raised matrix object (Nâng tân) because the expectation targets the state of affairs ("his going"), not him as an individual entity.</li>
      
        </ul>
      
        

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>sepTEMber 29, 2026 · by 💎GOOgle SEARCH AI ·</span>
        </div>

        <div className="eye-icon no-margin">
          <EyeIcon />
        </div>

        <div className="post-date no-margin">
          <ViewCounter postId={postId} />
        </div>

        <div className="like-button no-margin">
          <LikeButton postId={postId} />
        </div>

      </div>

    </article>

  </main>

  </>);
}