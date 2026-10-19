import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ocCAsionally1(): React.JSX.Element {

  const postId = "ocCAsionally1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hiem"><mark className="highlight-tertiary-padding-4-88">ADverbs: hiếm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ocCAsionally
        <sup><Link to="/vocabulary/ocCAsionally-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/ocCAsionally-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOUN">NOUN</HashLink>
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
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>ocCAsionally</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                ocCAsionally \<Link to="/pronunciation/5-vowel-system">ơc CĀ siơn a̛l ly</Link>\ /əˈkeɪʒənəli/ •⬤••• (FIVE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Thỉnh thoảng</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>ocCAsionally</strong>" được dùng để diễn tả một hành động xảy ra không thường xuyên, mà chỉ xảy ra trong một vài trường hợp hoặc một vài lần. Nó thể hiện sự không đều đặn, không liên tục của một sự việc.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">i ocCAsionally GO to the GYM.</li>
          <li className="margin-bottom-20 list-none">Thỉnh thoảng tôi đi tập gym.</li>

          <li>it RAINS ocCAsionally in the DESert.</li>
          <li className="list-none">Thỉnh thoảng cũng có mưa ở sa mạc.</li>

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

          <li id="NOUN">on SPECial ocCAsions, we WEAR FORmal CLOTHES.</li>
          <li className="list-none">Trong những dịp đặc biệt, chúng ta mặc trang phục trang trọng.</li>

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

          <li><Link to="/vocabulary/SOMEtimes-1">SOMEtimes</Link> i FEEL LONEly.</li>
          <li className="margin-bottom-20 list-none">Đôi khi tớ cảm thấy cô đơn.</li>

          <li>we meeT UP for COFfee NOW and THEN.</li>
          <li className="list-none">Thỉnh thoảng chúng tôi gặp nhau để uống cà phê.</li>

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

          <li>she is <Link to="/vocabulary/ALways-1">ALways</Link> on TIME.</li>
          <li className="margin-bottom-20 list-none">Cô ấy luôn đúng giờ.</li>

          <li>i <Link to="/vocabulary/NEVer-1">NEVer</Link> EAT FAST FOOD.</li>
          <li className="list-none">Tôi không bao giờ ăn thức ăn nhanh.</li>

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

      <p className="text-indent-whole">Hình dung một người chỉ thỉnh thoảng mới đọc sách báo.</p>

        <ul className="list-square">

          <li>she Only READS BOOKS and NEWSpapers ocCAsionally.</li>
          <li className="list-none">Cô ấy chỉ đọc sách và thỉnh thoảng đọc báo.</li>

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

      <p className="text-indent-whole">Tạo các câu ví dụ khác nhau với từ "<strong>ocCAsionally</strong>" trong nhiều ngữ cảnh khác nhau.</p>

        <ul className="list-square">

          <li>i ocCAsionally BAKE COOKies on WEEKends.</li>
          <li className="list-none">Thỉnh thoảng tôi làm bánh quy vào cuối tuần.</li>

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

      <p className="text-indent-whole margin-bottom-20">Use this word regularly in conversations and writing.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">i GO to the MOvies.</li>
            <li className="list-none margin-bottom-20">Tôi đi xem phim.</li>

            <li value="2">i ocCAsionally GO to the MOvies.</li>
            <li className="list-none margin-bottom-20">Thỉnh thoảng tôi đi xem phim.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>ocCAsionally</strong>" để <span className="highlight-255-padding-0-4">nhấn mạnh rằng việc đi xem</span> phim <span className="highlight-255-padding-0-4">không phải là một hoạt động thường xuyên</span> của người nói.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Tần suất: "<strong>ocCAsionally</strong>" chỉ ra một tần suất thấp của một hành động.</li>

          <li className="margin-bottom-20">Không thường xuyên: Nó nhấn mạnh sự không đều đặn, không liên tục.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 4, 2024 · by 💎GEM ·</span>
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