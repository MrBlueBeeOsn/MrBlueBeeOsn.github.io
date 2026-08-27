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
            <span className="s">the: Đọc là <strong>ðì</strong> (/ði/ hoặc /ðiː/) → Sau nó là một NGUYÊN ÂM:<br/>
            the APple → đọc là <strong>ðì</strong> APple.<br/>
            the END → đọc là <strong>ðì</strong> END.
            </span>
          </p>

          <p className="example-sentence">
            <span className="s">the: Đọc là <strong>ðə</strong> (/ðə/ - âm Schwa) → Sau nó là một PHỤ ÂM:<br/>
            the BOOK → đọc là <strong>ðə</strong> BOOK.<br/>
            the CAR → đọc là <strong>ðə</strong> CAR.
            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="v">to: Đọc là <strong>tù</strong> (/tu/ ngắn hoặc /tuː/) → Sau nó là một NGUYÊN ÂM:<br/>
            GO to OFfice → đọc là GO <strong>tù</strong> OFfice<br/>
            to EAT → đọc là <strong>tù</strong> EAT.
            </span>
          </p>

          <p className="example-sentence">
            <span className="v">to: Đọc là <strong>tə</strong> / TỪ (/tə/ - âm Schwa) → Sau nó là một PHỤ ÂM:<br/>
            GO to SCHOOL → đọc là GO <strong>tə</strong> SCHOOL.<br/>
            to me → đọc là <strong>tə</strong> me.
            </span>
          </p>

        </div>


        <div className="example">

          <p className="example-sentence">
            <span className="o">that: Đọc là <strong>ðạt</strong> (/ðæt/) → Khi làm từ chỉ định (đứng trước danh hoặc đứng một mình).<br/>
            i WANT that BOOK. → đọc là i WANT <strong>ðạt</strong> BOOK.<br/>
            </span>
          </p>

          <p className="example-sentence">
            <span className="o">that: Đọc là <strong>ðət</strong> / TỪ (/ðət/ - âm Schwa) → Khi làm liên từ nối các mệnh đề hoặc đại từ quan hệ.<br/>
            he SAID that he KNEW. → he SAID <strong>ðət</strong> he KNEW.<br/>
            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="m">have: Đọc là <strong>hạve</strong> (/hæv/, /hæz/) → Động chính - sở hữu<br/>
            i have a CAR. → đọc là i <strong>hạve</strong> a CAR.<br/>
            </span>
          </p>

          <p className="example-sentence">
            <span className="m">have: Đọc là <strong>həve</strong> / TỪ (/ðət/ - âm Schwa) → Trợ động - thời hoàn thành<br/>
            they have GONE. → đọc là they <strong>həve</strong> GONE.<br/>
            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="p">do: Đọc là <strong>đù</strong> (/duː/, /dʌz/) → Động chính - hành động<br/>
            i do my HOMEwork. → đọc là i <strong>đù</strong> my HOMEwork.<br/>
            </span>
          </p>

          <p className="example-sentence">
            <span className="p">do: Đọc là <strong>đə</strong> / TỪ (/də/, /dəz/) → Trợ động từ - câu hỏi/phủ định<br/>
            WHAT do you THINK? → đọc là WHAT <strong>đə</strong> you THINK?<br/>
            </span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            <span className="t">was: Đọc là <strong>wạs</strong> (/biː/, /ɑːr/, /wɒz/) → Động chính/Cuối câu<br/>
            YES, i was. → đọc là YES, i <strong>wạs</strong><br/>
            </span>
          </p>

          <p className="example-sentence">
            <span className="t">was: Đọc là <strong>wəs</strong> / TỪ (/bi/, /ər/, /wəz/) → Trợ động - tiếp diễn/bị động<br/>
            it was RAINing. → it <strong>wəs</strong> RAINing.<br/>
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