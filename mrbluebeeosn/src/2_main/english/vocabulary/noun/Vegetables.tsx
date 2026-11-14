import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Vegetables(): React.JSX.Element {

  const postId = "Vegetables";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#nouns-fruits-&-vegetables"><mark className="highlight-tertiary-padding-4-8">NOUNS: FRUITS</mark></HashLink></h4>

      <h1 className="margin-y-50 text-center">🥦 Fruits and Vegetables Group</h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#toMAtoes">toMAtoes</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#poTAtoes">poTAtoes</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CARrot">CARrot</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#CUcumber">CUcumber</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#BROCcoli">BROCcoli</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CABbage">CABbage</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#LETtuce">LETtuce</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ONion">ONion</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#GARlic">GARlic</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SPINach">SPINach</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="toMAtoes">FRESH toMAtoes <span className="pill-teal">are</span> esSENtial for <span className="pill-teal">MAking</span> a GREAT iTALian PAsta SAUCE.</li>
        <li className="list-none margin-bottom-20">To <span className="pill-teal">make</span> great Italian pasta sauce, you <span className="pill-teal">need</span> to <span className="pill-teal">use </span>fresh tomatoes.</li>

        <li value="2" id="poTAtoes">FRENCH FRIES <span className="pill-teal">MADE</span> from FRESH poTAtoes <span className="pill-teal">are</span> my FAVORite FAST FOOD.</li>
        <li className="list-none margin-bottom-20">I <span className="pill-teal">love</span> fast food, and my favorite <span className="pill-teal">is</span> French fries <span className="pill-teal">made</span> from fresh potatoes.</li>

        <li value="3" id="CARrot">BUGS BUNny <span className="pill-teal">is</span> FAmous for <span className="pill-teal">MUNCHing</span> on a CRUNCHy CARrot.</li>
        <li className="list-none margin-bottom-20">The Bugs Bunny cartoon character <span className="pill-teal">is</span> well-known for <span className="pill-teal">gnawing</span> on a soft, orange vegetable <span className="pill-teal">called</span> a "carrot."</li>

        <li value="4" id="CUcumber">she <span className="pill-teal">PLACED</span> SLIces of COLD CUcumber on her EYES to <span className="pill-teal">reDUCE</span> PUFFiness.</li>
        <li className="list-none margin-bottom-20">To <span className="pill-teal">reduce</span> puffiness, she <span className="pill-teal">placed</span> slices of cold cucumber on her eyes.</li>

        <li value="5" id="BROCcoli">STEAMED BROCcoli with a LITtle CHEESE <span className="pill-teal">is</span> a HEALTHy and deLICious SIDE DISH.</li>
        <li className="list-none margin-bottom-20">Broccoli with a little cheese, <span className="pill-teal">cooked</span> over steamy heat, <span className="pill-teal">is</span> both healthy and delicious.</li>

        <li value="6" id="CABbage">SHREDded CABbage <span className="pill-teal">is</span> the MAIN inGREdient for <span className="pill-teal">MAking</span> COLEslaw SALad.</li>
        <li className="list-none margin-bottom-20">Cabbage <span className="pill-teal">is</span> the main ingredient for <span className="pill-teal">making</span> coleslaw salad.</li>

        <li value="7" id="LETtuce">a GOOD BURger ALways <span className="pill-teal">NEEDS</span> a CRISP LEAF of GREEN LETtuce.</li>
        <li className="list-none margin-bottom-20">If you <span className="pill-teal">want</span> a good burger, you <span className="pill-teal">need</span> to <span className="pill-teal">add</span> a piece of lettuce.</li>

        <li value="8" id="ONion"><span className="pill-teal">CHOPping</span> an ONion OFten <span className="pill-teal">MAKES</span> PEOple's EYES WAter.</li>
        <li className="list-none margin-bottom-20">People often <span className="pill-teal">get</span> emotional when they <span className="pill-teal">see</span> an onion <span className="pill-teal">being chopped.</span></li>

        <li value="9" id="GARlic"><span className="pill-teal">ADDing</span> MINCED GARlic <span className="pill-teal">MAKES</span> the STIR-FRIED BEEF MUCH MORE FRAgrant.</li>
        <li className="list-none margin-bottom-20">If you <span className="pill-teal">want</span> the stir-fried beef to <span className="pill-teal">have</span> a more fragrant flavor, <span className="pill-teal">add</span> minced garlic while <span className="pill-teal">cooking.</span></li>

        <li value="10" id="SPINach">POPeye, the SAILor <span className="pill-teal">GETS</span> his SUper STRENGTH whe<strong>nev</strong>er he <span className="pill-teal">EATS</span> a CAN of SPINach.</li>
        <li className="list-none margin-bottom-20">POPeye's superpower <span className="pill-teal">is</span> related to spinach. He <span className="pill-teal">becomes</span> stronger whenever he <span className="pill-teal">eats</span> a can of spinach.</li>

      </ol>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>sepTEMber 16, 2026 · by 💎GEM ·</span>
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