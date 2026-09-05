import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function UnstressedWords(): React.JSX.Element {

  const postId = "UnstressedWords";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/pronunciation#pronunciation-terms"><mark className="highlight-tertiary-padding-4-8">Pronunciation</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Unstressed Words</h1>

      {/* This is the content of English Learning Term. */}

      <div className="margin-y-50 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

      {/* =============================
        VERBSADDS
      ============================= */}

      <p className="margin-top-20 text-center">
        
        
        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              1a. RHYTHm
            </span>
          </p>
          
          <p className="example-sentence">
            <span className="pill s">STUdents</span> &nbsp;<span className="pill v">WRITE</span> &nbsp;<span className="pill p">esSAYS.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">the STUdents</span> &nbsp;<span className="pill v">WRITE</span> &nbsp;<span className="pill p">the esSAYS.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">the STUdents</span> &nbsp;<span className="pill v">will WRITE</span> &nbsp;<span className="pill p">the esSAYS.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">the STUdents</span> &nbsp;<span className="pill v">will have WRITten </span> &nbsp;<span className="pill p">the esSAYS.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">the STUdents</span> &nbsp;<span className="pill v">will have been WRITing</span> &nbsp;<span className="pill p">the esSAYS.</span>
          </p>  

        </div>
        
        
        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              1b. RHYTHm
            </span>
          </p>

          <p className="example-sentence">
            <span className="pill s">TEACHers</span> &nbsp;<span className="pill v">exPLAIN</span> &nbsp;<span className="pill p">LESsons.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">the TEACHers</span> &nbsp;<span className="pill v">exPLAIN</span> &nbsp;<span className="pill p">the LESsons.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">the TEACHers</span> &nbsp;<span className="pill v">will exPLAIN</span> &nbsp;<span className="pill p">the LESsons.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">the TEACHers</span> &nbsp;<span className="pill v">will have exPLAINED</span> &nbsp;<span className="pill p">the LESsons.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">the TEACHers</span> &nbsp;<span className="pill v">will have been exPLAINing</span> &nbsp;<span className="pill p">the LESsons.</span>
          </p>

        </div>


        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              2a. THOUGHT GROUP to READ in a SENtence
            </span>
          </p>
          
          
          <p className="example-sentence">
            <span className="pill s">I NEED to SAVE some MONey</span>
          </p>

          <p className="example-sentence">
            <span className="pill v">to BUY a NIcer HOUSE</span>
          </p>

          <p className="example-sentence">
            <span className="pill p">and GIVE my KIDS a FUture.</span>
          </p>


        </div>


        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              2b. THOUGHT GROUP to READ in a SENtence
            </span>
          </p>

          <p className="example-sentence">
            <span className="pill s">we PLAN to VISit some FRIENDS</span>
          </p>

          <p className="example-sentence">
            <span className="pill v">who LIVE in a SMALler TOWN</span>
          </p>

          <p className="example-sentence">
            <span className="pill p">and STAY there for the WEEKend.</span>
          </p>


        </div>
        

        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              3a. SENtence STRESS
            </span>
          </p>

          <p className="example-sentence">
              <span className="pill s">do you THINK</span> &nbsp;<span className="pill p">did she CALL</span> &nbsp;<span className="pill v">will they WIN</span>
          </p>
          
          
          <p className="example-sentence">
            <span className="pill s">do you KNOW</span> &nbsp;<span className="pill p">can you HELP</span> &nbsp;<span className="pill v">did they LEAVE</span>
          </p>
        
        
          <p className="example-sentence">
              <span className="pill s">will she COME</span> &nbsp;<span className="pill p">does he CARE</span> &nbsp;<span className="pill v">could we STAY</span>
          </p>


        </div>


        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              3b. WORD STRESS
            </span>
          </p>

          <p className="example-sentence">
            <span className="pill s">underSTAND</span> &nbsp;<span className="pill p">volunTEER</span> &nbsp;<span className="pill v">VietnamMESE</span>
         </p>
        
        
          <p className="example-sentence">
              <span className="pill s">engiNEER</span> &nbsp;<span className="pill p">pioNEER</span> &nbsp;<span className="pill v">afterNOON</span>
          </p>

          <p className="example-sentence">
              <span className="pill s">PortuGUESE</span> &nbsp;<span className="pill p">recomMEND</span> &nbsp;<span className="pill v">JapaNESE</span>
          </p>


        </div>


        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              3c. PHRAsal VERB STRESS
            </span>
          </p>

          <p className="example-sentence">
            <span className="pill s"><strong>ta</strong>king OFF</span> &nbsp;<span className="pill p"><strong>giv</strong>en UP</span> &nbsp;<span className="pill v"><strong>wo</strong>ken UP</span>
         </p>
        
        
          <p className="example-sentence">
              <span className="pill s"><strong>bro</strong>ken DOWN</span> &nbsp;<span className="pill p"><strong>fig</strong>ured OUT</span> &nbsp;<span className="pill v"><strong>car</strong>ried ON</span>
          </p>

          <p className="example-sentence">
              <span className="pill s"><strong>set</strong>tled IN</span> &nbsp;<span className="pill p"><strong>hur</strong>ried IN</span> &nbsp;<span className="pill v"><strong>hap</strong>pened ON</span>
          </p>


        </div>


        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              4. COUNTing STRESS
            </span>
          </p>

          <p className="example-sentence">
            <span className="pill s">one two THREE</span>
          </p>

          <p className="example-sentence">
            <span className="pill v">four five SIX</span>
          </p>

          <p className="example-sentence">
            <span className="pill p">SEVen EIGHT nine TEN</span>
          </p>


        </div>


        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              5. CapitaliZAtion for STRESS
            </span>
          </p>
        
        
          <p className="example-sentence">
              <span className="pill s">[YOgurt]</span> &nbsp;<span className="pill p">[YŌ gurt]</span> &nbsp;<span className="pill v">Ō: LONG, DON'T NEED G</span>
          </p>

          <p className="example-sentence">
              <span className="pill s">[YOGurt]</span> &nbsp;<span className="pill p">[YOG urt]</span> &nbsp;<span className="pill v">O: SHORT, NEED G</span>
          </p>


        </div>


        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              6. IPA STRESS MARK (ˈ)
            </span>
          </p>
        
        
          <p className="example-sentence">
              <span className="pill s">[YOgurt]</span> &nbsp;<span className="pill p">/ˈjoʊɡərt/</span>
          </p>

          <p className="example-sentence">
              <span className="pill s">[YOGurt]</span> &nbsp;<span className="pill p">/ˈjɒɡət/</span>
          </p>


        </div>
        
        
        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              7. to
            </span>
          </p>

          <p className="example-sentence">
            <span className="s">

              to + PHỤ ÂM ➡️ to SCHOOL /tə skuːl/<br/>

              to + NGUYÊN ÂM ➡️ to EAT /tʊ iːt/

            </span>
          </p>

        </div>
        
        
        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              8. the
            </span>
          </p>

          <p className="example-sentence">
            <span className="v">

              the + PHỤ ÂM ➡️ the BOOK /ðə bʊk/<br/>

              the + NGUYÊN ÂM ➡️ the END /ði ɛnd/

            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              9. that
            </span>
          </p>

          <p className="example-sentence">
            <span className="o">

              conJUNCtion (Yếu) ➡️ i KNOW that you CARE. /aɪ nəʊ ðət juː keə/<br/>

              PROnoun (Mạnh) ➡️ LOOK at THAT! /lʊk æt ðæt/

            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              10. was
            </span>
          </p>

          <p className="example-sentence">
            <span className="m">

              MAIN VERB (Yếu) [NOT STRESSED] ➡️ he was LATE. /hiː wəz leɪt/<br/>

              ENDing SENtence (Mạnh) [NOT STRESSED] ➡️ YES, he WAS! /jes hiː wɒz/

            </span>
          </p>

        </div>

        
        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              11. have
            </span>
          </p>

          <p className="example-sentence">
            <span className="p">

              HELPing VERB (Yếu) ➡️ you should have GONE. /juː ʃʊd əv ɡɒn/<br/>

              MAIN VERB (Mạnh) [NOT STRESSED] ➡️ i have a PEN. /aɪ hæv ə pen/

            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              12. has
            </span>
          </p>

          <p className="example-sentence">
            <span className="t">

              HELPing VERB (Yếu) ➡️ WHAT has he DONE? /wɒt əz hiː dʌn/<br/>

              MAIN VERB (Mạnh) [NOT STRESSED] ➡️ she has TWO DOGS. /ʃiː hæz tuː dɒɡz/

            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              13. for
            </span>
          </p>

          <p className="example-sentence">
            <span className="">

              prepoSITion (Yếu) ➡️ THIS is for YOU. /ðɪs ɪz fə juː/<br/>

              ENDing prepoSITion (Mạnh) ➡️ WHAT is THIS FOR? /wɒt ɪz ðɪs fɔːr/

            </span>
          </p>

        </div>

         <div className="example">

          <p className="example-sentence">
            <span className="highlight-255-padding-0-4 text-border">
              14. and
            </span>
          </p>

          <p className="example-sentence">
            <span className="">

              conJUNCtion (Yếu) ➡️ ROCK and ROLL. /rɒk ən rəʊl/<br/>

              conJUNCtion (Mạnh) ➡️ BLACK and WHITE. /blæk ænd waɪt/

            </span>
          </p>

        </div>

      </p>

      

    </div>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>September 05, 2026 · by Mr.ßEE ·</span>
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