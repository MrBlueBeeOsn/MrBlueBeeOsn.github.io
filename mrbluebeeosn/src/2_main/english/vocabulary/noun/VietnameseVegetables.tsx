import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VietnameseVegetables(): React.JSX.Element {

  const postId = "VietnameseVegetables";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#nouns-fruits-&-vegetables"><mark className="highlight-tertiary-padding-4-8">NOUNS: FRUITS</mark></HashLink></h4>

      <h1 className="margin-y-50 text-center">🌿 Specialty Vegetables, Fruits, and Spices</h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#WAter-SPINach">WAter SPINach</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LEMongrass">LEMongrass</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#GINger">GINger</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#CHILi-PEPper">CHILi PEPper</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#bamBOO-SHOOTS">bamBOO SHOOTS</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LOtus-ROOT">LOtus ROOT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#BITter-MELon">BITter MELon</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CORiander">CORiander</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LOOfah">LOOfah</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#VietnaMESE-CORiander">VietnaMESE CORiander</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="WAter-SPINach">STIR-FRIED WAter SPINach with GARlic <span className="pill-teal">is</span> a CLASsic and deLICious vietnaMESE DISH.</li>
        <li className="list-none margin-bottom-20">Stir-fried water spinach with garlic <span className="pill-teal">is</span> a classic and delicious dish from Vietnam.</li>

        <li value="2" id="LEMongrass">MINCED LEMongrass <span className="pill-teal">GIVES</span> GRILLED PORK and CHICKen an inCREDible aROma.</li>
        <li className="list-none margin-bottom-20">When you <span className="pill-teal">add</span> minced lemongrass to your pork or chicken, it <span className="pill-teal">makes</span> it <span className="pill-teal">taste</span> more like a delicious Asian meal than a simple grilled meat.</li>

        <li value="3" id="GINger">a WARM CUP of GINger TEA <span className="pill-teal">HELPS SOOTHE</span> a SORE THROAT on COLD DAYS.</li>
        <li className="list-none margin-bottom-20">On cold days, <span className="pill-teal">drinking</span> a cup of ginger tea <span className="pill-teal">can help</span> soothe a sore throat.</li>

        <li value="4" id="CHILi-PEPper"><span className="pill-teal">ADDing</span> a FEW SLIces of FRESH CHILi PEPper <span className="pill-teal">MAKES</span> the NOOdle SOUP MUCH MORE FLAvorful.</li>
        <li className="list-none margin-bottom-20"><span className="pill-teal">Add</span> some fresh chili peppers to the noodle soup to <span className="pill-teal">make</span> it more flavorful.</li>

        <li value="5" id="bamBOO-SHOOTS">DUCK NOOdle SOUP <span className="pill-teal">COOKED</span> with FRESH bamBOO SHOOTS <span className="pill-teal">is</span> a LOcal FAVORite.</li>
        <li className="list-none margin-bottom-20">Many people <span className="pill-teal">love</span> to <span className="pill-teal">eat</span> duck noodle soup <span className="pill-teal">made</span> with fresh bamboo shoots.</li>

        <li value="6" id="LOtus-ROOT">CRISpy FRIED LOtus ROOT CHIPS <span className="pill-teal">are</span> a uNIQUE and HEALthy SNACK.</li>
        <li className="list-none margin-bottom-20">Crispy fried lotus root chips <span className="pill-teal">are</span> a special and healthy snack.</li>

        <li value="7" id="BITter-MELon">STUFFED BITter MELon SOUP <span className="pill-teal">is beLIEVED</span> to <span className="pill-teal">HELP COOL DOWN</span> the BODy in SUMmer.</li>
        <li className="list-none margin-bottom-20">Many <span className="pill-teal">believe</span> that stuffed bitter melon soup <span className="pill-teal">cools down</span> the body and <span className="pill-teal">is</span> a good summertime meal.</li>

        <li value="8" id="CORiander">FRESH CORiander (or ciLANtro) <span className="pill-teal">is SPRINkled</span> on TOP of a HOT BOWL of BEEF NOOdle SOUP be<strong>fore</strong> <span className="pill-teal">SERVing.</span></li>
        <li className="list-none margin-bottom-20">Fresh coriander (also <span className="pill-teal">called</span> cilantro) <span className="pill-teal">is added</span> to a bowl of beef noodle soup just before it <span className="pill-teal">is served.</span></li>

        <li value="9" id="LOOfah">SWEET LOOfah <span className="pill-teal">COOKED</span> in a SIMple SHRIMP BROTH <span className="pill-teal">MAKES</span> a reFRESHing SOUP for HOT DAYS.</li>
        <li className="list-none margin-bottom-20">Sweet loofah, <span className="pill-teal">cooked</span> with shrimp in broth, <span className="pill-teal">makes</span> a refreshing soup for hot days.</li>

        <li value="10" id="VietnaMESE-CORiander">a PLATE of baLUT EGGS <span className="pill-teal">is</span> NEVer comPLETE without a HANDful of VietnaMESE CORiander.</li>
        <li className="list-none margin-bottom-20">A plate of boiled eggs <span className="pill-teal">isn't</span> complete without a few sprigs of Vietnamese coriander.</li>

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