import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DILigently2(): React.JSX.Element {

  const postId = "DILigently2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-ti-mi"><mark className="highlight-tertiary-padding-4-8">ADverbs: tỉ mỉ</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">DILigently
        <sup>
          <Link to="/vocabulary/DILiGENTly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/DILiGENTly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WORKED-on">WORKED on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#STUDied-for">STUDied for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SEARCHED-for">SEARCHED for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#apPLIED-to">apPLIED ... to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#reCORDed">reCORDed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#mainTAINED">mainTAINED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#FOLlowed">FOLlowed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#prePARED-for">prePARED for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#purSUED-of">purSUED ... of</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#obSERVED">obSERVED</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>DILigently</strong>" (một cách chăm chỉ) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              DILigently \<Link to="/pronunciation/5-vowel-system">DIL i̛ ge̛nt ly</Link>\ /ˈdɪl.ə.dʒənt.li/ ⬤••• (4x)
              
              </span>

              &nbsp;thường được dùng để mô tả một hành động được thực hiện với sự chăm chỉ, cẩn thận và kiên trì.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="WORKED-on">she DILigently [WORKED on] her PROject until LATE at NIGHT.</li>
        <li className="list-none margin-bottom-20">Cô ấy chăm chỉ [làm] dự án đến tận khuya.</li>

        <li value="2" id="STUDied-for">he DILigently [STUDied for] his eXAMs.</li>
        <li className="list-none margin-bottom-20">Anh ấy [chăm chỉ] ôn thi.</li>

        <li value="3" id="SEARCHED-for">the deTECtives DILigently [SEARCHED for] CLUES.</li>
        <li className="list-none margin-bottom-20">Các thám tử [đã tìm kiếm] manh mối một cách cẩn thận.</li>

        <li value="4" id="apPLIED-to">she DILigently [apPLIED] herSELF [to] her NEW JOB.</li>
        <li className="list-none margin-bottom-20">Cô ấy [đã] nghiêm túc [làm việc với] công việc mới của mình.</li>

        <li value="5" id="reCORDed">the SCIentist DILigently [reCORDed] the DAta.</li>
        <li className="list-none margin-bottom-20">Nhà khoa học [đã ghi chép] dữ liệu một cách cẩn thận.</li>

        <li value="6" id="mainTAINED">he DILigently [mainTAINED] his GARden.</li>
        <li className="list-none margin-bottom-20">Anh ấy [đã chăm sóc] khu vườn của mình rất cẩn thận.</li>

        <li value="7" id="FOLlowed">she DILigently [FOLlowed] the DOCtor's inSTRUCtions.</li>
        <li className="list-none margin-bottom-20">Cô ấy [đã làm theo] chỉ dẫn của bác sĩ một cách nghiêm túc.</li>

        <li value="8" id="prePARED-for">the STUdents DILigently [prePARED for] the eXAM.</li>
        <li className="list-none margin-bottom-20">Học sinh [đã chuẩn bị] kỹ lưỡng cho kỳ thi.</li>

        <li value="9" id="purSUED-of">he DILigently [purSUED] his DREAM [of] beCOMinɡ a WRIter.</li>
        <li className="list-none margin-bottom-20">Anh ấy [đã] kiên trì [theo đuổi] ước mơ trở thành nhà văn.</li>

        <li value="10" id="obSERVED">the SCIentist DILigently [obSERVED] the beHAvior of the ANimals.</li>
        <li className="list-none margin-bottom-20">Nhà khoa học [đã quan sát] hành vi của động vật một cách kỹ lưỡng.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh sự chăm chỉ, cẩn thận và kiên trì trong việc thực hiện một hành động nào đó. Chúng thường được sử dụng để mô tả những người có thái độ làm việc nghiêm túc, có trách nhiệm.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>DILigently</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này mang nghĩa tích cực, thể hiện sự nỗ lực và cố gắng.</li>

        </ul>
      
      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>deCEMber 26, 2024 · by 💎GEM ·</span>
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