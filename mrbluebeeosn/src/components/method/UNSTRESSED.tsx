import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import ExternalLink from '@/components/icon/ExternalLink';
import { useState } from "react";

export default function VERBSADDS(): React.JSX.Element {
  return (

    // <div className="topic-container">

    // <div className="margin-y-50 text-border1 padding-10 highlight-238-padding-4-8">

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
            <span className="pill s">The STUdents</span> &nbsp;<span className="pill v">WRITE</span> &nbsp;<span className="pill p">the esSAYS.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">The STUdents</span> &nbsp;<span className="pill v">will WRITE</span> &nbsp;<span className="pill p">the esSAYS.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">The STUdents</span> &nbsp;<span className="pill v">will have WRITten </span> &nbsp;<span className="pill p">the esSAYS.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">The STUdents</span> &nbsp;<span className="pill v">will have been WRITing</span> &nbsp;<span className="pill p">the esSAYS.</span>
          </p>  

        </div>
        
        
        <div className="example">

          <p className="example-sentence">
            <span className="pill s">TEACHers</span> &nbsp;<span className="pill v">exPLAIN</span> &nbsp;<span className="pill p">LESsons.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">The TEACHers</span> &nbsp;<span className="pill v">exPLAIN</span> &nbsp;<span className="pill p">the LESsons.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">The TEACHers</span> &nbsp;<span className="pill v">will exPLAIN</span> &nbsp;<span className="pill p">the LESsons.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">The TEACHers</span> &nbsp;<span className="pill v">will have exPLAINED</span> &nbsp;<span className="pill p">the LESsons.</span>
          </p>

          <p className="example-sentence">
            <span className="pill s">The TEACHers</span> &nbsp;<span className="pill v">will have been exPLAINing</span> &nbsp;<span className="pill p">the LESsons.</span>
          </p>

        </div>
        
        
        <div className="example">

          <p className="example-sentence">
            <span className="pill s">1. to</span>
          </p>

          <p className="example-sentence">
            <span className="s">

              to + PHỤ ÂM ➡️ Đọc là /tə/ (nghe giống "tờ") ➡️ Ví dụ: to SCHOOL /tə skuːl/<br/>

              to + NGUYÊN ÂM ➡️ Đọc là /tʊ/ (nghe giống "tù") ➡️ Ví dụ: to EAT /tʊ iːt/

            </span>
          </p>

        </div>
        
        
        <div className="example">

          <p className="example-sentence">
            <span className="pill v">2. the</span>
          </p>

          <p className="example-sentence">
            <span className="v">

              the + PHỤ ÂM ➡️ Đọc là /ðə/ (nghe giống "đờ") ➡️ Ví dụ: the BOOK /ðə bʊk/<br/>

              the + NGUYÊN ÂM ➡️ Đọc là /ði/ (nghe giống "đì") ➡️ Ví dụ: the END /ði ɛnd/

            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="pill o">3. that</span>
          </p>

          <p className="example-sentence">
            <span className="o">

              Dạng lướt (Yếu) ➡️ Đọc là /ðət/ (nghe giống "đợt") ➡️ Ví dụ: i KNOW that you CARE. /aɪ nəʊ ðət juː keə/<br/>

              Dạng nhấn mạnh (Mạnh) ➡️ Đọc là /ðæt/ ➡️ Ví dụ: LOOK at THAT! /lʊk æt ðæt/

            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="pill m">4. was</span>
          </p>

          <p className="example-sentence">
            <span className="m">

              Dạng lướt (Yếu) ➡️ Đọc là /wəz/ (nghe giống "uờz") ➡️ Ví dụ: he was LATE. /hiː wəz leɪt/<br/>

              Dạng nhấn mạnh (Mạnh) ➡️ Đọc là /wɒz/ (hoặc /wʌz/) ➡️ Ví dụ: YES, he WAS! /jes hiː wɒz/

            </span>
          </p>

        </div>

        
        <div className="example">

          <p className="example-sentence">
            <span className="pill p">5. have</span>
          </p>

          <p className="example-sentence">
            <span className="p">

              Dạng lướt (Yếu) ➡️ Đọc là /əv/ hoặc /v/ (nghe giống "ờv") ➡️ Ví dụ: you should have GONE. /juː ʃʊd əv ɡɒn/<br/>

              Dạng nhấn mạnh (Mạnh) ➡️ Đọc là /hæv/ ➡️ Ví dụ: i have a PEN. /aɪ hæv ə pen/

            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="pill t">6. has</span>
          </p>

          <p className="example-sentence">
            <span className="t">

              Dạng lướt (Yếu) ➡️ Đọc là /əz/ hoặc /z/ (nghe giống "ờz") ➡️ Ví dụ: WHAT has he DONE? /wɒt əz hiː dʌn/<br/>

              Dạng nhấn mạnh (Mạnh) ➡️ Đọc là /hæz/ ➡️ Ví dụ: she has TWO DOGS. /ʃiː hæz tuː dɒɡz/

            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="pill ">7. for</span>
          </p>

          <p className="example-sentence">
            <span className="">

              Dạng lướt (Yếu) ➡️ Đọc là /fə/ (nghe giống "phờ") ➡️ Ví dụ: THIS is for YOU. /ðɪs ɪz fə juː/<br/>

              Dạng nhấn mạnh (Mạnh) ➡️ Đọc là /fɔːr/ ➡️ Ví dụ: WHAT is THIS FOR? /wɒt ɪz ðɪs fɔːr/

            </span>
          </p>

        </div>

         <div className="example">

          <p className="example-sentence">
            <span className="pill ">8. and</span>
          </p>

          <p className="example-sentence">
            <span className="">

              Dạng lướt (Yếu) ➡️ Đọc là /ən/ hoặc /n/ (nghe giống "ờn") ➡️ Ví dụ: ROCK and ROLL. /rɒk ən rəʊl/<br/>

              Dạng nhấn mạnh (Mạnh) ➡️ Đọc là /ænd/ ➡️ Ví dụ: BLACK and WHITE. /blæk ænd waɪt/

            </span>
          </p>

        </div>


        <p className="example-sentence">
            <span className="pill s">[YOgurt][YŌ gurt]</span> &nbsp;<span className="pill p">YO: LONG, Open SPACE</span> &nbsp;<span className="pill v">/ˈjoʊɡərt/</span>
        </p>

        <p className="example-sentence">
            <span className="pill s">[YOGurt][YOG urt]</span> &nbsp;<span className="pill p">YOG: SHORT, CLOSED SPACE</span> &nbsp;<span className="pill v">/ˈjɒɡət/</span>
        </p>


        <p className="example-sentence">
            <span className="pill s">[one two THREE]</span> &nbsp;<span className="pill p">[four five SIX]</span> &nbsp;<span className="pill v">[SEVen EIGHT][nine TEN]</span>
        </p>

        <p className="example-sentence">
            <span className="pill s">[underSTAND]</span> &nbsp;<span className="pill p">[VietnamMESE]</span> &nbsp;<span className="pill v">[do you THINK]</span>
        </p>



      </p>

      

    </div>
    
  );
}