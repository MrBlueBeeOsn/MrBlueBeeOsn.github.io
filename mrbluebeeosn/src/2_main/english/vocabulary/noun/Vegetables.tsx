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

        <li value="1" id="toMAtoes">FRESH toMAtoes are esSENtial for MAking a GREAT iTALian PAsta SAUCE.</li>
        <li className="list-none margin-bottom-20">To make great Italian pasta sauce, you need to use fresh tomatoes.</li>

        <li value="2" id="poTAtoes">FRENCH FRIES MADE from FRESH poTAtoes are my FAVORite FAST FOOD.</li>
        <li className="list-none margin-bottom-20">I love fast food, and my favorite is French fries made from fresh potatoes.</li>

        <li value="3" id="CARrot">BUGS BUNny is FAmous for MUNCHing on a CRUNCHy CARrot.</li>
        <li className="list-none margin-bottom-20">The Bugs Bunny cartoon character is well-known for gnawing on a soft, orange vegetable called a "carrot."</li>

        <li value="4" id="CUcumber">she PLACED SLIces of COLD CUcumber on her EYES to reDUCE PUFFiness.</li>
        <li className="list-none margin-bottom-20">To reduce puffiness, she placed slices of cold cucumber on her eyes.</li>

        <li value="5" id="BROCcoli">STEAMED BROCcoli with a LITtle CHEESE is a HEALTHy and deLICious SIDE DISH.</li>
        <li className="list-none margin-bottom-20">Broccoli with a little cheese, cooked over steamy heat, is both healthy and delicious.</li>

        <li value="6" id="CABbage">SHREDded CABbage is the MAIN inGREdient for MAking COLEslaw SALad.</li>
        <li className="list-none margin-bottom-20">Cabbage is the main ingredient for making coleslaw salad.</li>

        <li value="7" id="LETtuce">a GOOD BURger ALways NEEDS a CRISP LEAF of GREEN LETtuce.</li>
        <li className="list-none margin-bottom-20">If you want a good burger, you need to add a piece of lettuce.</li>

        <li value="8" id="ONion">CHOPping an ONion OFten MAKES PEOple's EYES WAter.</li>
        <li className="list-none margin-bottom-20">People often get emotional when they see an onion being chopped.</li>

        <li value="9" id="GARlic">ADDing MINCED GARlic MAKES the STIR-FRIED BEEF MUCH MORE FRAgrant.</li>
        <li className="list-none margin-bottom-20">Adding minced garlic makes the stir-fried beef much more flavorful.</li>

        <li value="10" id="SPINach">POPeye, the SAILor GETS his SUper STRENGTH whe<strong>nev</strong>er he EATS a CAN of SPINach.</li>
        <li className="list-none margin-bottom-20">POPeye's superpower is related to spinach. He becomes stronger whenever he eats a can of spinach.</li>

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