import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VietnameseFruits(): React.JSX.Element {

  const postId = "VietnameseFruits";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#nouns-fruits-&-vegetables"><mark className="highlight-tertiary-padding-4-8">NOUNS: FRUITS</mark></HashLink></h4>

      <h1 className="margin-y-50 text-center">🥭 Vietnamese Specialty Fruits</h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#DURian">DURian</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#DRAGon-FRUIT">DRAGon FRUIT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ramBUtan">ramBUtan</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#JACKfruit">JACKfruit</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LYchees">LYchees</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LONGan">LONGan</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#MANGosteen">MANGosteen</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#STAR-FRUIT">STAR FRUIT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#GUAva">GUAva</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#POMelo">POMelo</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="DURian"><span className="pill-teal">KNOWN</span> as the KING of FRUITS, DURian <span className="pill-teal">has</span> a STRONG aROma and a CREAMy TEXture.</li>
        <li className="list-none margin-bottom-20">Durian <span className="pill-teal">is called</span> the king of fruits for good reasons. It <span className="pill-teal">has</span> a strong aroma and a creamy texture.</li>

        <li value="2" id="DRAGon-FRUIT">with its BRIGHT PINK SKIN and uNIQUE LOOK, DRAGon FRUIT <span className="pill-teal">is</span> VERy reFRESHing.</li>
        <li className="list-none margin-bottom-20">Dragon Fruit <span className="pill-teal">is</span> a refreshing fruit. It <span className="pill-teal">has</span> bright pink skin and <span className="pill-teal">looks</span> very unique.</li>

        <li value="3" id="ramBUtan">the HAIRy RED SHELL of a ramBUtan <span className="pill-teal">HIDES</span> a SWEET and JUIcy transLUcent FRUIT inSIDE.</li>
        <li className="list-none margin-bottom-20">The red outer <span className="pill-teal">covering</span> of the plant <span className="pill-teal">is </span>a thin shell that <span className="pill-teal">protects</span> a sweet and juicy, translucent fruit inside.</li>

        <li value="4" id="JACKfruit">RIPE JACKfruit SEGments <span className="pill-teal">have</span> a disTINCT FRAgrance and a CHEWy, SWEET TASTE.</li>
        <li className="list-none margin-bottom-20">Ripe jackfruit <span className="pill-teal">has</span> a unique smell and a sweet and crunchy texture.</li>

        <li value="5" id="LYchees">SUMmer in VietNAM <span className="pill-teal">is</span> incomPLETE with<strong>out</strong> <span className="pill-teal">enJOYing </span>a BASket of FRESH, SWEET LYchees.</li>
        <li className="list-none margin-bottom-20">Summer in Vietnam <span className="pill-teal">isn't</span> summer without a basket of fresh, sweet lychees.</li>

        <li value="6" id="LONGan">SWEET LONGan FRUITS <span className="pill-teal">are</span> OFten <span className="pill-teal">USED</span> to <span className="pill-teal">MAKE</span> a COOLing HERBal desSERT SOUP in VietnaMESE.</li>
        <li className="list-none margin-bottom-20">In Vietnam, sweet longan fruits <span className="pill-teal">are</span> often <span className="pill-teal">used</span> to <span className="pill-teal">make</span> a cool herbal dessert soup.</li>

        <li value="7" id="MANGosteen">the THICK PURple RIND of a MANGosteen <span className="pill-teal">proTECTS</span> TENder, SNOW-WHITE SEGments inSIDE.</li>
        <li className="list-none margin-bottom-20">The thick purple outer layer of a mangosteen <span className="pill-teal">protects</span> the soft, white inner parts.</li>

        <li value="8" id="STAR-FRUIT">when <span className="pill-teal">SLICED</span> CROSSwise, a STAR FRUIT NATurally <span className="pill-teal">FORMS</span> a PERfect FIVE-POINTed STAR SHAPE.</li>
        <li className="list-none margin-bottom-20">When you <span className="pill-teal">slice</span> a star fruit crosswise, you<span className="pill-teal">'ll see</span> that it naturally <span className="pill-teal">takes</span> the shape of a five-pointed star.</li>

        <li value="9" id="GUAva">CRUNCHy GREEN GUAva <span className="pill-teal">DIPPED</span> in CHILi SALT <span className="pill-teal">is</span> a POPular STREET FOOD a<strong>mong</strong> STUdents.</li>
        <li className="list-none margin-bottom-20">Many students <span className="pill-teal">like</span> to <span className="pill-teal">eat</span> crunchy green guava, which <span className="pill-teal">is</span> usually dipped in chili salt.</li>

        <li value="10" id="POMelo">VietnaMESE POMelo <span className="pill-teal">has</span> LARGE, JUIcy SEGments that <span className="pill-teal">are</span> both SWEET and SLIGHTly TANGy.</li>
        <li className="list-none margin-bottom-20">Vietnamese pommel <span className="pill-teal">has</span> large, juicy pieces that <span className="pill-teal">are</span> both sweet and slightly tangy.</li>

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