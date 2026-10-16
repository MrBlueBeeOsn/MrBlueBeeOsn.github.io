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
    
      <h4><HashLink smooth to="/vocabulary#nouns-fruits-&-vegetables"><mark className="highlight-tertiary-padding-4-8">NOUNS: FRUITS & VEGETables</mark></HashLink></h4>

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

        <li value="1" id="WAter-SPINach">STIR-FRIED WAter SPINach with GARlic is a CLASsic and deLICious vietnaMESE DISH.</li>
        <li className="list-none margin-bottom-20">A classic and delicious Vietnamese dish, stir-fried water spinach with garlic is easy to make.</li>

        <li value="2" id="LEMongrass">MINCED LEMongrass GIVES GRILLED PORK and CHICKen an inCREDible aROma.</li>
        <li className="list-none margin-bottom-20">Mixed lemongrass makes grilled pork and chicken taste really good.</li>

        <li value="3" id="GINger">a WARM CUP of GINger TEA HELPS SOOTHE a SORE THROAT on COLD DAYS.</li>
        <li className="list-none margin-bottom-20">On cold days, a cup of ginger tea can help soothe a sore throat.</li>

        <li value="4" id="CHILi-PEPper">ADDing a FEW SLIces of FRESH CHILi PEPper MAKES the NOOdle SOUP MUCH MORE FLAvorful.</li>
        <li className="list-none margin-bottom-20">Adding a few slices of fresh chilli pepper makes the noodle soup much more flavourful.</li>

        <li value="5" id="bamBOO-SHOOTS">DUCK NOOdle SOUP COOKED with FRESH bamBOO SHOOTS is a LOcal FAVORite.</li>
        <li className="list-none margin-bottom-20">Duck noodle soup with fresh bamboo shoots is a local favourite.</li>

        <li value="6" id="LOtus-ROOT">CRISpy FRIED LOtus ROOT CHIPS are a uNIQUE and HEALthy SNACK.</li>
        <li className="list-none margin-bottom-20">Crispy fried lotus root chips are a unique and healthy snack.</li>

        <li value="7" id="BITter-MELon">STUFFED BITter MELon SOUP is beLIEVED to HELP COOL DOWN the BODy in SUMmer.</li>
        <li className="list-none margin-bottom-20">Many people think that stuffed bitter melon soup is a good way to cool down in summer.</li>

        <li value="8" id="CORiander">FRESH CORiander (or ciLANtro) is SPRINkled on TOP of a HOT BOWL of BEEF NOOdle SOUP be<strong>fore</strong> SERVing.</li>
        <li className="list-none margin-bottom-20">Fresh coriander (or cilantro) is added to a bowl of beef noodle soup just before it is served.</li>

        <li value="9" id="LOOfah">SWEET LOOfah COOKED in a SIMple SHRIMP BROTH MAKES a reFRESHing SOUP for HOT DAYS.</li>
        <li className="list-none margin-bottom-20">A refreshing soup for hot days is made by cooking sweet loofah in a simple shrimp broth.</li>

        <li value="10" id="VietnaMESE-CORiander">a PLATE of baLUT EGGS is NEVer comPLETE without a HANDful of VietnaMESE CORiander.</li>
        <li className="list-none margin-bottom-20">A plate of boiled eggs just isn't the same without a little bit of Vietnamese coriander.</li>

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