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
            <span className="pill s">[underSTAND]</span> &nbsp;<span className="pill p">[volunTEER]</span> &nbsp;<span className="pill v">[VietnamMESE]</span>
         </p>
        
        
          <p className="example-sentence">
              <span className="pill s">[do you THINK]</span> &nbsp;<span className="pill p">[<strong>wa</strong>king UP]</span> &nbsp;<span className="pill v">[<strong>tak</strong>ing OFF]</span>
          </p>


        </div>


        <div className="example">

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
        
        
        <p className="example-sentence">
            <span className="pill s">[YOgurt]</span> &nbsp;<span className="pill p">[YŌ gurt] Ō: LONG, Open SPACE</span> &nbsp;<span className="pill v">/ˈjoʊɡərt/</span>
        </p>

        <p className="example-sentence">
            <span className="pill s">[YOGurt]</span> &nbsp;<span className="pill p">[YOG urt] O: SHORT, CLOSED SPACE</span> &nbsp;<span className="pill v">/ˈjɒɡət/</span>
        </p>
        
        
        <div className="example">

          <p className="example-sentence">
            <span className="pill s">1. to</span>
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
            <span className="pill v">2. the</span>
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
            <span className="pill o">3. that</span>
          </p>

          <p className="example-sentence">
            <span className="o">

              Dạng lướt (Yếu) ➡️ i KNOW that you CARE. /aɪ nəʊ ðət juː keə/<br/>

              Dạng nhấn mạnh (Mạnh) ➡️ LOOK at THAT! /lʊk æt ðæt/

            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="pill m">4. was</span>
          </p>

          <p className="example-sentence">
            <span className="m">

              Dạng lướt (Yếu) ➡️ he was LATE. /hiː wəz leɪt/<br/>

              Dạng nhấn mạnh (Mạnh) ➡️ YES, he WAS! /jes hiː wɒz/

            </span>
          </p>

        </div>

        
        <div className="example">

          <p className="example-sentence">
            <span className="pill p">5. have</span>
          </p>

          <p className="example-sentence">
            <span className="p">

              Dạng lướt (Yếu) ➡️ you should have GONE. /juː ʃʊd əv ɡɒn/<br/>

              Dạng nhấn mạnh (Mạnh) ➡️ i have a PEN. /aɪ hæv ə pen/

            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="pill t">6. has</span>
          </p>

          <p className="example-sentence">
            <span className="t">

              Dạng lướt (Yếu) ➡️ WHAT has he DONE? /wɒt əz hiː dʌn/<br/>

              Dạng nhấn mạnh (Mạnh) ➡️ she has TWO DOGS. /ʃiː hæz tuː dɒɡz/

            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="pill ">7. for</span>
          </p>

          <p className="example-sentence">
            <span className="">

              Dạng lướt (Yếu) ➡️ THIS is for YOU. /ðɪs ɪz fə juː/<br/>

              Dạng nhấn mạnh (Mạnh) ➡️ WHAT is THIS FOR? /wɒt ɪz ðɪs fɔːr/

            </span>
          </p>

        </div>

         <div className="example">

          <p className="example-sentence">
            <span className="pill ">8. and</span>
          </p>

          <p className="example-sentence">
            <span className="">

              Dạng lướt (Yếu) ➡️ ROCK and ROLL. /rɒk ən rəʊl/<br/>

              Dạng nhấn mạnh (Mạnh) ➡️ BLACK and WHITE. /blæk ænd waɪt/

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