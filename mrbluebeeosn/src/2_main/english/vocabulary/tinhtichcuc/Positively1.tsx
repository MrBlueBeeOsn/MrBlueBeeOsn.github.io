import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function POSitively1(): React.JSX.Element {

  const postId = "POSitively1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-tich-cuc"><mark className="highlight-tertiary-padding-4-8">ADverbs: tích cực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">POSitively
        <sup><Link to="/vocabulary/POSitively-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/POSitively-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>POSitively</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                POSitively \<Link to="/pronunciation/5-vowel-system">POS i̛ tive ly</Link>\ /ˈpɒz.ə.tɪv.li/ ⬤••• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Tích cực</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>POSitively</strong>" có thể mang nhiều ý nghĩa tùy thuộc vào ngữ cảnh:</p>
      
        <ol>
      
          <li>Một cách tích cực: Thể hiện sự lạc quan, hy vọng, hoặc hướng tới điều tốt đẹp.</li>
      
          <li>Một cách khẳng định, quả quyết: Thể hiện sự chắc chắn, không nghi ngờ.</li>
      
          <li>Một cách có lợi: Mang lại kết quả tốt.</li>
      
        </ol>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">he reSPONDed POSitively to the sugGEStion.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã phản hồi tích cực trước đề xuất đó.</li>

          <li>she POSitively iDENtified the SUSpect.</li>
          <li className="margin-bottom-20 list-none">Cô ấy đã xác định chắc chắn danh tính của nghi phạm.</li>

          <li>the NEW POLicy POSitively imPACted the COMpany's PROfits.</li>
          <li className="list-none">Chính sách mới đã tác động tích cực đến lợi nhuận của công ty.</li>

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

          <li id="ADjective">he has a POSitive ATtitude.</li>
          <li className="margin-bottom-20 list-none">Anh ấy có một thái độ tích cực.</li>

          <li className="list-none">the TEST reSULT was POSitive.</li>
          <li className="margin-bottom-20 list-none">Kết quả xét nghiệm là dương tính.</li>

          <li id="NOUN">her posiTIVity is conTAgious.</li>
          <li className="list-none">Sự tích cực của cô ấy thật lây lan.</li>

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

          <li>she CERtainly KNOWS WHAT she's DOing.</li>
          <li className="margin-bottom-20 list-none">Cô ấy chắc chắn biết mình đang làm gì.</li>

          <li>he LOOKED at the FUture optiMIStically.</li>
          <li className="margin-bottom-20 list-none">Anh ấy nhìn về tương lai với tinh thần lạc quan.</li>

          <li>the CRITics reVIEWED the MOvie FAvorably.</li>
          <li className="list-none">Các nhà phê bình đã đánh giá bộ phim này một cách tích cực.</li>

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

          <li>he reACTed NEGatively to the NEWS.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã có phản ứng tiêu cực trước tin tức đó.</li>

          <li>she SPOKE unCERtainly a<strong>bout</strong> her PLANS.</li>
          <li className="margin-bottom-20 list-none">Cô ấy nói một cách không chắc chắn về những kế hoạch của mình.</li>

          <li>the BAD WEAther ADversely afFECTed the CROPS.</li>
          <li className="list-none">Thời tiết xấu đã gây ảnh hưởng tiêu cực đến mùa màng.</li>

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

      <p className="text-indent-whole">Hình dung một người đang mỉm cười và nói "yes" một cách quả quyết.</p>

        <ul className="list-square">

          <li>he NODded and POSitively afFIRMED, "YES, we can DO it."</li>
          <li className="list-none">Anh ấy gật đầu và khẳng định một cách chắc chắn: “Đúng, chúng ta có thể làm được.”</li>

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

      <p className="text-indent-whole">Tạo các câu liên quan đến các tình huống khác nhau để hiểu rõ các nghĩa của từ.</p>

        <ul className="list-square">

          <li>the PAtient reSPONDed POSitively to the TREATment.</li>
          <li className="list-none">Bệnh nhân đã có phản ứng tích cực với phương pháp điều trị.</li>

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

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in your writing or conversations.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he ANswered the QUESTion.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã trả lời câu hỏi đó.</li>

            <li value="2">he ANswered the QUESTion POSitively.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã trả lời câu hỏi đó một cách khẳng định.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh</span> sự chắc chắn hoặc <span className="highlight-255-padding-0-4">thái độ tích cực trong câu trả lời</span> của anh ấy.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Đa nghĩa: "<strong>POSitively</strong>" có thể mang nhiều ý nghĩa khác nhau, cần xem xét ngữ cảnh để hiểu chính xác.</li>

          <li className="margin-bottom-20">Thường dùng trong nhiều ngữ cảnh: Từ này được sử dụng rộng rãi trong nhiều lĩnh vực, từ giao tiếp hàng ngày đến khoa học và kinh doanh.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>MARCH 29, 2025 · by 💎GEM ·</span>
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