import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TheLexicalVerbREAD(): React.JSX.Element {

  const postId = "TheLexicalVerbREAD";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/grammar#Modern-Grammar"><mark className="highlight-tertiary-padding-4-8">Modern Grammar</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">The Lexical Verb READ</h1>

      {/* This is the content of English Learning Term. */}

      <h4 className="margin-bottom-30 text-center">The Morphological Framework of CGEL 2002: Understanding "Forms" and Syncretism in the Paradigm of Read</h4>

      {/* I.  */}

      <h3 className="margin-y-50 text-center">I. Theoretical Foundation: Why CGEL 2002 Mandates "Form" over "Verb"</h3>

      <p>In the structural framework established by Rodney Huddleston and Geoffrey K. Pullum in The Cambridge Grammar of the English Language (CGEL, 2002), lexical items and their grammatical variations are separated with absolute precision. The system strictly avoids terms like "Preterite verb" or "Present verb," mandating the word <strong>Form</strong> instead due to two foundational linguistic principles:</p>
      
        <ul className="list-square">
      
          <li>A "<strong>Verb</strong>" is a Lexeme (An Abstract Lexical Unit.s):</li>
          <li className="margin-bottom-20 list-none">The verb READ is a single, abstract dictionary entry. Whether it manifests in speech or writing as read, reads, or reading, it remains the exact same underlying verb. Calling a specific slot in a paradigm a "Preterite verb" is a taxonomic error; it incorrectly implies that English possesses a unique part-of-speech category or a different vocabulary word for the past tense.</li>
      
          <li>A "<strong>Form</strong>" is an Inflectional Realization:</li>
          <li className="list-none">A single lexeme must put on different morphological "clothes"—known as inflectional forms—to fulfill specific syntactic roles in a sentence. Therefore, Preterite <strong>form</strong> accurately means "the past tense inflectional variant of the lexeme READ."</li>
      
        </ul>
      
      <p className="margin-top-20">Using the word <strong>Form</strong> is crucial to illustrating Syncretism (where a single shape represents multiple distinct grammatical slots). It proves that while the single verb read only has three written shapes (read, reads, reading), it dynamically occupies six distinct inflectional <strong>forms</strong> depending on its syntactic environment.</p>

      
      {/* II.  */}

      <h3 className="margin-y-50 text-center">The Inflectional Paradigm of the Lexical Verb Read</h3>
      
      <p>Under the CGEL 2002 framework, standard lexical verbs are analyzed through their distinct inflectional <strong>forms</strong> rather than being split into separate traditional tenses.</p>
      
      <p>The lexical verb read serves as a classic textbook example of heavy syncretism. While a prototypical irregular verb like take utilizes five distinct written shapes (take, takes, took, taking, taken), read collapses its paradigm into only three distinct written shapes and four distinct spoken shapes to cover all six core inflectional roles:</p>

      <h4 className="margin-y-40">1. Preterite form: READ /rɛd/</h4>
          
      <p className="text-indent-whole">– Used exclusively for the independent past tense literal or modal contexts.</p>
      
        <ul className="list-square">
      
          <li>She <strong>read</strong> the entire novel last night before going to bed.</li>
      
          <li>We <strong>read</strong> the contract thoroughly before signing it yesterday.</li>
      
        </ul>

      
      <h4 className="margin-y-40">2. 3rd singular present form: reads /riːdz/</h4>
          
      <p className="text-indent-whole">– Used for the present tense with a third-person singular subject.</p>
      
        <ul className="list-square">
      
          <li>He <strong>reads</strong> the morning newspaper every single day.</li>
      
          <li>The professor <strong>reads</strong> every essay with meticulous attention.</li>
      
        </ul>

      
      <h4 className="margin-y-40">3. Plain present form: read /riːd/</h4>
          
      <p className="text-indent-whole">– Used for the present tense with all other subject persons and numbers.</p>
      
        <ul className="list-square">
      
          <li>They <strong>read</strong> academic journals to stay updated with their research.</li>
      
          <li>I always <strong>read</strong> a few pages of a book before falling asleep.</li>
      
        </ul>

      
      <h4 className="margin-y-40">4. Plain form: read /riːd/</h4>
          
      <p className="text-indent-whole">– Used as the base for inflected constructions, including imperative, subjunctive, and infinitival clauses.</p>
      
        <ul className="list-square">
      
          <li>You must <strong>read</strong> the instructions carefully.</li>
      
          <li>It is vital that he <strong>read</strong> this report before the meeting starts.</li>
          <li className="list-none">Since we say "that he <strong>be</strong> here" (<strong>Plain form</strong>) and not "that he <strong>is</strong>/<strong>reads</strong> here", the verb read in your example is 100% a <strong>Plain form</strong>.</li>
      
        </ul>

      
      <h4 className="margin-y-40">5. Gerund-participle form: reading /riːdɪŋ/</h4>
          
      <p className="text-indent-whole">– A unified form representing the single inflectional shape historically divided into gerunds and present participles.</p>
      
        <ul className="list-square">
      
          <li><strong>Reading</strong> books expands your mind and builds vocabulary.</li>
      
          <li>She is <strong>reading</strong> a fascinating article right now.</li>
      
        </ul>

      
      <h4 className="margin-y-40">6. Past participle form: read /rɛd/ </h4>
          
      <p className="text-indent-whole">– Used in perfective aspects and passive voice constructions.</p>
      
        <ul className="list-square">
      
          <li>I have already <strong>read</strong> that email three times today.</li>
      
          <li>The poem was beautifully <strong>read</strong> by the author at the event.</li>
      
        </ul>
      

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>sepTEMber 27, 2026 · by 💎GOOgle SEARCH AI ·</span>
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