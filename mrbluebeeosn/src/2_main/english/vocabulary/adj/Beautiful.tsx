import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function BEAUtiful(): React.JSX.Element {

  const postId = "BEAUtiful";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADjectives-terms"><mark className="highlight-tertiary-padding-4-8">ADjectives</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">BEAUtiful</h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADjective">ADjective</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOUN">NOUN</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#VERB">VERB</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30"><strong>BEAUtiful</strong> (ADjective): possessing qualities that bring pleasure or satisfaction to the senses (especially sight) or the mind. This term often implies harmony, excellence, or high aesthetic value.</p>

        <ul className="list-square">
      
          <li id="ADjective">the SUNset <strong>o</strong>ver the Ocean was TRUly BEAUtiful.</li>
          <li className="margin-bottom-20 list-none">The sunset over the ocean was really pretty.</li>

          <li>WHAT a BEAUtiful SUNset!</li>
          <li className="margin-bottom-20 list-none">Wow, what a lovely sunset!</li>

          <li>the POet WROTE a<strong>bout</strong> the BEAUteous STARS in the NIGHT SKY.</li>
          <li className="list-none">The poet wrote about how beautiful the stars were in the night sky.</li>
      
        </ul>

      {/* =============================
            pronunciAtion
      ============================= */}

      <h3 className="margin-y-50 text-center">pronunciAtion</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: [BĒAU ti fưl] /ˈbjuː.tɪ.fəl/</li>
            <li>phoNETic BREAKdown: BYOO-tih-ful</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      {/* =============================
            WORD FAMILy
      ============================= */}

      <h3 className="margin-y-50 text-center">WORD FAMILy</h3>

      <p className="margin-bottom-20">Understanding how to switch between different parts of speech helps you express yourself more flexibly, especially when using structures that focus on NOUNS to describe characteristics.</p>

        <ul className="list-square">
          
          <li id="NOUN">the BEAUty of the LANDscape TOOK my BREATH aWAY.</li>
          <li className="margin-bottom-20 list-none">I was amazed by how beautiful the landscape was.</li>

          <li>the proFESsional beauTIcian prePARED the ACtors for the FILM.</li>
          <li className="margin-bottom-20 list-none">The professional makeup artist made the actors look ready for the film.</li>

          <li id="VERB">they deCIded to BEAUtify the GARden with SEAsonal FLOWers.</li>
          <li className="margin-bottom-20 list-none">They decided to make the garden look nice by adding seasonal flowers.</li>

          <li id="ADverb">the MUsic was BEAUtifully comPOSED and MOVED the enTIre AUdience.</li>
          <li className="list-none">The music was beautifully written and made the whole audience feel something.</li>

        </ul>

      {/* =============================
            SYNonyms
      ============================= */}

      <h3 className="margin-y-50 text-center">SYNonyms</h3>

      <p className="margin-bottom-40">The synonyms below offer more precise nuances depending on the specific context.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>1. GORgeous</strong>: Used to create a radiant, dazzling look that often makes an immediate, strong impression.</p>

        <ul className="list-square">

          <li>the BRIDE LOOKED ABsolutely GORgeous in her LACE GOWN.</li>
          <li className="list-none">The bride looked really beautiful in her lace gown.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>2. STUNning</strong>: Refers to beauty that is so overwhelming that it leaves the viewer speechless or surprised.</p>

        <ul className="list-square">

          <li>the PENThouse OFfers a STUNning VIEW of the CIty SKYline.</li>
          <li className="list-none">The penthouse has amazing views of the city skyline.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>3. exQUISite</strong>: For a refined, sophisticated look or exceptionally meticulous craftsmanship.</p>

        <ul className="list-square">

          <li>the muSEum disPLAYED a colLECtion of exQUISite HAND-PAINted ceRAMics.</li>
          <li className="list-none">The museum had a display of beautiful hand-painted ceramics.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>4. LOVEly</strong>: It evokes a graceful, charming beauty and creates a pleasant, warm feeling.</p>

        <ul className="list-square">

          <li>we had a LOVEly afterNOON WALKing through the boTANical GARdens.</li>
          <li className="list-none">We had a lovely afternoon walking through the botanical gardens.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>5. RAdiant</strong>: Implies a radiant, glowing beauty, often associated with health or happiness.</p>

        <ul className="list-square">

          <li>she GAVE a RAdiant SMILE that INstantly BRIGHtened the ROOM.</li>
          <li className="list-none">She smiled so brightly that the room immediately felt lighter.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>6. aesTHETic</strong>: Aesthetic; pertaining to beauty or art.</p>

        <ul className="list-square">

          <li>the NEW FURniture was CHOsen for PUREly aesTHETic REAsons.</li>
          <li className="list-none">The new furniture was chosen because it looks nice.</li>

        </ul>

      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20" id=""><strong>7. magNIFicent</strong>: Used to describe majestic, striking, or grand beauty.</p>

        <ul className="list-square">

          <li>the magNIFicent ARchitecture of the caTHEdral DATES BACK to the TWELFTH CENtury.</li>
          <li className="list-none">The cathedral was built in the 12th century and its architecture is really impressive.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 26, 2026 · by 💎GEM ·</span>
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