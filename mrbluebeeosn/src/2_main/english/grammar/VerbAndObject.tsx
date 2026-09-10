import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VerbAndObject(): React.JSX.Element {

  const postId = "VerbAndObject";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/grammar#grammar-terms"><mark className="highlight-tertiary-padding-4-8">Grammar</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Verb and Object</h1>

      {/* This is the content of English Learning Term. */}

      <h4 className="margin-bottom-30 text-center">How V and O (Object) both collapse into What?</h4>

      <p>The verb (V) is wrapped inside What, but it splits into two parts.</p>

      <p>Think of it as a package deal: the action itself becomes What (put at the beginning), and the generic verb do takes the place of the original V.</p>
      
      <p>Here is:</p>
      
      <h4 className="margin-y-40">1. When you ask about the Verb (V): WATCHED a MOvie</h4>
          
      <p className="text-indent-whole">What moves to the front, and V turns into do/doing/done.</p>

      <p className="margin-top-20 text-indent-whole">Example:</p>
      
        <ul className="list-square">
      
          <li>TOM <strong>WATCHED a MOvie</strong>.</li>
          <li className="list-none">➔ WHAT did TOM DO?</li>
      
        </ul>
      


      <h4 className="margin-y-40">2. When you ask about the Object (O): a MOvie</h4>
          
      <p className="margin-top-20 text-indent-whole">What moves to the front, but the original V stays the same.</p>

      <p className="margin-top-20 text-indent-whole">Example:</p>
      
        <ul className="list-square">
      
          <li>TOM WATCHED <strong>a MOvie</strong>.</li>
          <li className="list-none">➔ WHAT did TOM WATCH?</li>
      
        </ul>


      <h3 className="margin-y-50 text-center">The Ultimate Wh- Cheat Sheet</h3>

      <p className="margin-top-20">If you want to see how the whole SVOMPT chain turns into Wh- words, here is the final map:</p>
      
        <ul className="list-square">
      
          <li>S ➔ WHO (or WHAT if it's an OBject/ANimal)</li>
      
          <li>V + O ➔ Collapses into: WHAT ... DO?</li>
          
          <li>M ➔ HOW</li>
      
          <li>P ➔ WhERE</li>
      
          <li>T ➔ WHEN</li>
      
        </ul>
      
      
      <p className="margin-top-20">So if you ask a question covering everything at once, it becomes:</p>

      <p><strong>WHO</strong> did <strong>WHAT</strong>, <strong>HOW</strong>, <strong>WHERE</strong>, and <strong>WHEN</strong>?</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>September 10, 2026 · by 💎GEM ·</span>
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