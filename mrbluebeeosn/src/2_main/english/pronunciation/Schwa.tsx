import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Schwa(): React.JSX.Element {

  const postId = "Schwa";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/pronunciation#pronunciation-terms"><mark className="highlight-tertiary-padding-4-8">Pronunciation</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Schwa</h1>

      <div className="example">
                                                  
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#corRECT">🌟 The Correct Ways</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#WRONG">❌ The Wrong Way</HashLink>
          </span> &nbsp;

        </p>


      </div>

      {/* This is the content of English Learning Term. */}

      {/* 1.  */}

			<h3 className="margin-y-50 text-center" id="corRECT">🌟 The Correct Ways (Native & Natural)</h3>

      <h4 className="margin-y-40">The Core Standard: \ầ\</h4>
      
        <ul className="list-square">
      
          <li>How it works: This is the most accurate direct equivalent because \â\ is a naturally short vowel in Vietnamese.</li>
      
          <li>Effect: It cuts the sound short and matches the quick drop of an unstressed syllable perfectly.</li>
      
          <li>Examples: \HAP-pần\, \QUEST-chần\, \PRAB-lầm\.</li>
      
        </ul>


      <h4 className="margin-y-40">The Lazy NAE Style: \à\ or \ằ\</h4>
      
        <ul className="list-square">
      
          <li>How it works: When North American English speakers speak quickly, they drop their jaws and relax their throats completely.</li>
      
          <li>Effect: This extreme relaxation opens up the short \ầ\ sound just enough to sound like a quick, effortless \à\ or \ằ\ to the Vietnamese ear.</li>
      
          <li>Examples: \black-àn-white\, \ai-khàn-DU-ịt\, \PRAB-làm\.</li>
      
        </ul>
      

      {/* 2.  */}

			<h3 className="margin-y-50 text-center" id="WRONG">❌ The Wrong Way (The Old Mistake)</h3>
      
        <ul className="list-square">
      
          <li>How it works: Traditional teaching methods mistakenly map the Schwa to these sounds.</li>
      
          <li>Effect: In Vietnamese, /ơ/ and /ờ/ are long, open vowels. Using them drags out the syllable, destroying the natural rhythm and word stress of English.</li>
      
          <li>Examples: /HÁP-pờn/, /PRÁB-lờm/ (sounds heavy and robotic).</li>
      
        </ul>


      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>September 15, 2026 · by 💎GEM ·</span>
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