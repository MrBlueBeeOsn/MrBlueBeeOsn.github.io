import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Usually1(): React.JSX.Element {

  const postId = "Usually1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ADverbs-OFten"><mark className="highlight-tertiary-padding-4-88">OFten</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Usually
        <sup><Link to="/vocabulary/Usually-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/Usually-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADjective">ADjective</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SYNonyms">SYNonyms</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ANtonyms">ANtonyms</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#VoCABulary-LEARNing-TIPS">🌻 VoCABulary LEARNing TIPS</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Great! Let's explore the word "Usually" together.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                Usually \<Link to="/pronunciation/5-vowel-system">Ū su a̛l ly</Link>\  /ˈjuːʒuəli/ ⬤••• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Usually</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">The word "Usually" is used to describe an action, event, or situation that occurs regularly, is familiar, and is predictable. It expresses the frequency of something.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i Usually geT UP at 7 AM.</li>
          <li className="margin-bottom-20 list-none">I typically get up at seven in the morning.</li>

          <li>we Usually GO to the MOvies on WEEKends.</li>
          <li className="list-none">We usually watch movies together on the weekend.</li>

        </ul>

      {/* =============================
            VoCABulary FAMILy:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>VoCABulary FAMILy:</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li id="ADjective">THIS is my USual rouTINE.</li>
          <li className="margin-bottom-20 list-none">This is how I usually do things.</li>

        </ul>

      {/* =============================
            SYNonyms:
      ============================= */}
        
      <p className="margin-top-20" id="SYNonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>SYNonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>TYPically, i EAT BREAKfast at 8 AM.</li>
          <li className="margin-bottom-20 list-none">I usually have breakfast around 8:00 a.m.</li>

          <li>NORmally, i GO to BED at 10 p.M.</li>
          <li className="list-none">I go to bed at 10 p.m. most nights.</li>

        </ul>

        {/* <Link to="/vocabulary/CLEARly-1">Clearly</Link> */}

      {/* =============================
            ANtonyms:
      ============================= */}

      <p className="margin-top-20" id="ANtonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>ANtonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>i <Link to="/vocabulary/RAREly-1">RAREly</Link> EAT SPIcy FOOD.</li>
          <li className="margin-bottom-20 list-none">I don't often eat spicy food.</li>

          <li>i <Link to="/vocabulary/NEVer-1">NEVer</Link> DRINK COFfee.</li>
          <li className="list-none">I don't like coffee.</li>

        </ul>
      
      {/* =============================
            🌻 Vocabulary-Learning Tips:
      ============================= */}

      <h3 className="margin-y-50 text-center" id="VoCABulary-LEARNing-TIPS">🌻 Vocabulary-Learning Tips:</h3>

      {/* =============================
            1. Link to the image:
      ============================= */}
      
      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>1. Link to the image</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Imagine a daily schedule in which regular activities are marked.</p>

        <ul className="list-square">

          <li>i Usually GO for a RUN <strong>af</strong>ter BREAKfast, as MARKED on my SCHEDule.</li>
          <li className="list-none">I like to go running after I eat breakfast.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Create your own example sentences using the word "Usually" to describe your daily routines.</p>

        <ul className="list-square">

          <li>i Usually HAVE COFfee and TOAST for BREAKfast.</li>
          <li className="list-none">I normally drink coffee and eat toast for breakfast.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations and writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i GO to the GYM.</li>
            <li className="list-none margin-bottom-20">I work out at the gym.</li>

            <li value="2">i Usually GO to the GYM on TUESdays and THURSdays.</li>
            <li className="list-none margin-bottom-20">I typically work out on Tuesdays and Thursdays.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">The difference: The second sentence uses "Usually" to <span className="highlight-255-padding-0-4">indicate that going to the gym is part of the speaker's daily routine,</span> not a random occurrence.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Frequency: "Usually" emphasizes the regularity of an action or event.</li>

          <li className="margin-bottom-20">Not always: It does not mean that something happens 100% of the time, but simply that it happens frequently.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span> · by 💎GEM ·</span>
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