import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function RAPidly1(): React.JSX.Element {

  const postId = "RAPidly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-nhanh"><mark className="highlight-tertiary-padding-4-8">ADverbs: nhanh</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">RAPidly
        <sup><Link to="/vocabulary/RAPidly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/RAPidly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>RAPidly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          {/* <p className="margin-bottom-20"><strong>Rapidly</strong></p> */}

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                RAPidly \<Link to="/pronunciation/5-vowel-system">RAP id ly</Link>\ /ˈræpɪdli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Nhanh chóng</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>RAPidly</strong>" được dùng để miêu tả một hành động hoặc quá trình diễn ra với tốc độ cao, nhanh chóng. Nó nhấn mạnh sự nhanh nhẹn và sự thay đổi diễn ra trong một khoảng thời gian ngắn.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">techNOlogy is adVANCEing RAPidly.</li>
          <li className="margin-bottom-20 list-none">Công nghệ đang phát triển với tốc độ nhanh chóng.</li>

          <li>the CHILD GREW RAPidly during her FIRST YEAR.</li>
          <li className="list-none">Đứa trẻ đã lớn lên rất nhanh trong năm đầu tiên của mình.</li>

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

          <li id="ADjective">the RIVer has a RAPid CURrent.</li>
          <li className="margin-bottom-20 list-none">Dòng sông có dòng chảy mạnh.</li>

          <li id="NOUN">the raPIDity of CHANGE surPRISED us.</li>
          <li className="list-none">Tốc độ thay đổi đã khiến chúng tôi ngạc nhiên.</li>

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

          <li>she RAN <Link to="/vocabulary/QUICKly-1">QUICKly</Link> to CATCH the BUS.</li>
          <li className="margin-bottom-20 list-none">Cô ấy chạy nhanh để bắt kịp xe buýt.</li>

          <li>the BIRD FLEW SWIFTly through the AIR.</li>
          <li className="list-none">Con chim bay lướt nhanh qua không trung.</li>

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

          <li>the SNAIL MOVED <Link to="/vocabulary/SLOWly-1">SLOWly</Link> a<strong>cross</strong> the LEAF.</li>
          <li className="margin-bottom-20 list-none">Con ốc sên bò chậm rãi trên chiếc lá.</li>

          <li>the PLANT GREW <Link to="/vocabulary/GRADually-1">GRADually</Link> TALler.</li>
          <li className="list-none">Cây dần dần cao lên.</li>

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

      <p className="text-indent-whole">Hình dung một chiếc xe đua đang chạy với tốc độ cao hoặc một quả bóng rơi nhanh xuống đất.</p>

        <ul className="list-square">

          <li>the RACE CAR MOVED RAPidly down the TRACK.</li>
          <li className="margin-bottom-20 list-none">Chiếc xe đua lao vun vút trên đường đua.</li>

          <li>the BALL FELL RAPidly to<strong>wards</strong> the GROUND.</li>
          <li className="list-none">Quả bóng rơi nhanh xuống mặt đất.</li>

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

      <p className="text-indent-whole">Tạo các câu liên quan đến các sự kiện xảy ra nhanh chóng.</p>

        <ul className="list-square">

          <li>the NEWS SPREAD RAPidly through<strong>out</strong> the TOWN.</li>
          <li className="list-none">Tin tức lan truyền nhanh chóng khắp thị trấn.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc trò chuyện hoặc bài viết.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">the TRAIN is MOving.</li>
            <li className="list-none margin-bottom-20">Tàu đang chạy.</li>

            <li value="2">the TRAIN is MOving RAPidly.</li>
            <li className="list-none margin-bottom-20">Tàu đang chạy rất nhanh.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh tốc độ di chuyển</span> của tàu.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Mức độ nhanh: "<strong>RAPidly</strong>" thường chỉ sự nhanh chóng ở mức độ cao hơn so với "<Link to="/vocabulary/QUICKly-1">QUICKly</Link>".</li>

          <li className="margin-bottom-20">Ngữ cảnh: Ý nghĩa của "<strong>RAPidly</strong>" có thể thay đổi tùy thuộc vào ngữ cảnh câu.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>deCEMber 5, 2024 · by 💎GEM ·</span>
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