import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SOMEtimes1(): React.JSX.Element {

  const postId = "SOMEtimes1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hiem"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiếm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SOMEtimes
        <sup><Link to="/vocabulary/SOMEtimes-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/SOMEtimes-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
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
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>SOMEtimes</strong>" và các thành ngữ liên quan nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                SOMEtimes \<Link to="/pronunciation/5-vowel-system">SƠME tīmes</Link>\ /ˈsʌmtaɪmz/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Đôi khi</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Chỉ sự không thường xuyên, xảy ra một cách ngẫu nhiên.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i SOMEtimes GO to the GYM <strong>af</strong>ter WORK.</li>
          <li className="margin-bottom-20 list-none">Thỉnh thoảng tôi đi tập gym sau giờ làm việc.</li>

          <li>it SOMEtimes RAINS in the SUMmer.</li>
          <li className="list-none">Đôi khi vào mùa hè cũng có mưa.</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>SOMEtimes</strong>" vì đây là một từ đơn.</li>

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

          <li>we <Link to="/vocabulary/ocCAsionally-1">ocCAsionall</Link> MEET for COFfee.</li>
          <li className="margin-bottom-20 list-none">Thỉnh thoảng chúng tôi gặp nhau để uống cà phê.</li>

          <li>from TIME to TIME, i LIKE to WATCH MOvies.</li>
          <li className="list-none">Thỉnh thoảng, tôi thích xem phim.</li>

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

          <li>she <Link to="/vocabulary/ALways-1">ALways</Link> COMES to CLASS on TIME.</li>
          <li className="margin-bottom-20 list-none">Cô ấy luôn đến lớp đúng giờ.</li>

          <li>I have <Link to="/vocabulary/NEVer-1">NEVer</Link> BEEN to PARis.</li>
          <li className="list-none">Tôi chưa bao giờ đến Paris.</li>

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
          <mark className="highlight-255-padding-4-8"><strong>1. Link</strong></mark> 
        </strong>
        <strong>&nbsp;to the image</strong>:
      </p>

      <p className="text-indent-whole">Hình dung một chiếc đồng hồ với kim giây quay liên tục để thể hiện sự không đều đặn.</p>

        <ul className="list-square">

          <li>the WATCH is RUNning erRATically; the SECond HAND SOMEtimes JUMPS.</li>
          <li className="list-none">Đồng hồ đang chạy không đều; kim giây thỉnh thoảng nhảy vọt.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create</strong></mark> 
        </strong>
        <strong>&nbsp;example sentences</strong>:
      </p>

      <p className="text-indent-whole">Tạo nhiều câu với "<strong>SOMEtimes</strong>" trong các ngữ cảnh khác nhau, liên quan đến tần suất.</p>

        <ul className="list-square">

          <li>i FEEL HAPpy SOMEtimes, but OTHer TIMES i FEEL SAD.</li>
          <li className="list-none">Đôi khi tôi cảm thấy hạnh phúc, nhưng có lúc tôi lại cảm thấy buồn.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
            <mark className="highlight-255-padding-4-8"><strong>3. Regular</strong></mark>
        </strong>
        <strong>&nbsp;practice</strong>:
      </p>

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ "<strong>SOMEtimes</strong>" trong giao tiếp hoặc khi viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa ocCAsionally và <strong>SOMEtimes</strong>):</p>

          <ol>

            <li value="1">we <Link to="/vocabulary/ocCAsionally-1">ocCAsionally</Link> MEET for LUNCH.</li>
            <li className="list-none">Thỉnh thoảng chúng tôi gặp nhau để ăn trưa.</li>
            <li className="list-none margin-bottom-20">Mang ý nghĩa lịch sự hơn và nhấn mạnh tính ngẫu nhiên.</li>

            <li value="2">i SOMEtimes forGET to BRING my umBRELla.</li>
            <li className="list-none">Đôi khi tôi lại quên mang theo chiếc ô của mình.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">Mang ý nghĩa chung chung về sự không thường xuyên.</span></li>

          </ol>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"<strong>SOMEtimes</strong>" thường đứng trước hành động chính trong câu.</li>

          <li className="margin-bottom-20">Nó có thể được sử dụng để diễn tả sự không chắc chắn hoặc sự thay đổi về tần suất.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 5, 2024 · by 💎GEM ·</span>
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