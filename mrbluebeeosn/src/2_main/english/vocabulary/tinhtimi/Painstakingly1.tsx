import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function PAINstakingly1(): React.JSX.Element {

  const postId = "PAINstakingly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-ti-mi"><mark className="highlight-tertiary-padding-4-8">ADverbs: tỉ mỉ</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">PAINstakingly
        <sup><Link to="/vocabulary/PAINstakingly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/PAINstakingly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>PAINstakingly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">
              
            <li>
              <span className="highlight-255-padding-3-6">
                 PAINstakingly \<Link to="/pronunciation/5-vowel-system">PĀIN stā king ly</Link>\ /ˈpeɪnzˌteɪ.kɪŋ.li/ ⬤••• (FOUR SYLlables)
              </span>
            </li>
            
            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Một cách tỉ mỉ</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>
      
      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>PAINstakingly</strong>" miêu tả một hành động hoặc trạng thái được thực hiện một cách cẩn thận, tỉ mỉ, chu đáo, đòi hỏi sự kiên nhẫn và nỗ lực lớn.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li id="ADverb">he PAINstakingly reSTORED the OLD PAINting.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã cẩn thận phục hồi bức tranh cũ.</li>

          <li>she reSEARCHED the TOpic PAINstakingly.</li>
          <li className="list-none">Cô ấy đã nghiên cứu chủ đề này một cách tỉ mỉ.</li>

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

          <li id="ADjective">he DID a PAINStaking JOB.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã làm một công việc rất công phu.</li>

          <li id="NOUN">the PAINStakingness of her WORK was imPRESsive.</li>
          <li className="list-none">Sự kiên trì trong công việc của cô ấy thật ấn tượng.</li>

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

          <li>she arRANGED the FLOWers <Link to="/vocabulary/meTICulously-1">meTICulously</Link>.</li>
          <li className="margin-bottom-20 list-none">Cô ấy đã cắm hoa một cách tỉ mỉ.</li>

          <li>he eXAMined the DOCument <Link to="/vocabulary/Carefully-1">CAREfully</Link>.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã xem xét tài liệu một cách cẩn thận.</li>

          <li>they SEARCHED the HOUSE <Link to="/vocabulary/THORoughly-1">THORoughly</Link>.</li>
          <li className="list-none">Họ đã lục soát ngôi nhà một cách kỹ lưỡng.</li>

        </ul>

      {/* =============================
            ANtonyms:
      ============================= */}

      <p className="margin-top-20" id="ANtonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>ANtonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>he DID the WORK CARElessly.</li>
          <li className="margin-bottom-20 list-none">Anh ta đã làm công việc đó một cách cẩu thả.</li>

          <li>she HANDled the eQUIPment NEGligently.</li>
          <li className="margin-bottom-20 list-none">Cô ấy đã sử dụng thiết bị một cách cẩu thả.</li>

          <li>he MADE a deCISion HAstily.</li>
          <li className="list-none">Anh ấy đã đưa ra quyết định một cách vội vàng.</li>

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

      <p className="text-indent-whole">Hình dung một người đang sửa chữa một chiếc đồng hồ cổ hoặc một nhà khoa học đang nghiên cứu một mẫu vật nhỏ.</p>

        <ul className="list-square">

          <li>he PAINstakingly rePAIRed the anTIQUE CLOCK.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã tỉ mỉ sửa chữa chiếc đồng hồ cổ.</li>

          <li>the SCIentist PAINstakingly eXAMined the TIny SPEcimen.</li>
          <li className="list-none">Nhà khoa học đã cẩn thận kiểm tra mẫu vật nhỏ xíu đó.</li>

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

      <p className="text-indent-whole">Tạo các câu liên quan đến các tình huống thể hiện sự cẩn thận và tỉ mỉ.</p>

        <ul className="list-square">

          <li>the ARtist PAINstakingly PAINted <strong>ever</strong>y DEtail of the PORtrait.</li>
          <li className="list-none">Họa sĩ đã tỉ mỉ vẽ từng chi tiết của bức chân dung.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các bài viết hoặc cuộc trò chuyện.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he reSTORED the OLD PAINting.</li>
            <li className="list-none margin-bottom-20">Ông đã phục chế bức tranh cổ.</li>

            <li value="2">he PAINstakingly reSTORED the OLD PAINting.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã cẩn thận phục hồi bức tranh cũ.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh sự cẩn thận và tỉ mỉ trong quá trình khôi phục</span> bức tranh.</p>

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Nhấn mạnh sự cẩn thận và tỉ mỉ: "<strong>PAINstakingly</strong>" nhấn mạnh sự cẩn thận, tỉ mỉ và chu đáo, đòi hỏi sự kiên nhẫn và nỗ lực lớn.</li>

          <li className="margin-bottom-20">Thường dùng để miêu tả quá trình làm việc hoặc nghiên cứu: Từ này thường được sử dụng để miêu tả quá trình làm việc hoặc nghiên cứu đòi hỏi sự tập trung và tỉ mỉ cao.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 8, 2025 · by 💎GEM ·</span>
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