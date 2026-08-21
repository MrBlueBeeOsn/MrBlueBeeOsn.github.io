import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function JOYfully1(): React.JSX.Element {

  const postId = "JOYfully1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-tich-cuc-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: tích cực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">JOYfully
        <sup><Link to="/vocabulary/JOYfully-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/JOYfully-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>JOYfully</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [JOYfully][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">JOY fưl ly</Link>] /ˈdʒɔɪfəli/ ⬤•• (3x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Một cách vui vẻ, hân hoan</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>JOYfully</strong>" được sử dụng để miêu tả một hành động được thực hiện với niềm vui, sự thích thú và sự phấn khích. Nó thể hiện một trạng thái cảm xúc tích cực và vui vẻ.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>the CHILdren PLAYED JOYfully in the PARK.</li>
          <li className="margin-bottom-20 list-none">Những đứa trẻ chơi vui vẻ trong công viên.</li>

          <li>she acCEPted the aWARD JOYfully.</li>
          <li className="list-none">Cô ấy nhận giải thưởng một cách vui vẻ.</li>

        </ul>

      {/* =============================
            Gia đình từ:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Gia đình từ</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>the CHILdren FELT GREAT JOY at reCEIVinɡ the GIFTS.</li>
          <li className="margin-bottom-20 list-none">Những đứa trẻ cảm thấy rất vui khi nhận được quà.</li>

          <li>she HAD a JOYful exPRESsion on her FACE.</li>
          <li className="list-none">Cô ấy có một biểu cảm vui mừng trên khuôn mặt.</li>

        </ul>

      {/* =============================
            Từ đồng nghĩa:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ đồng nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>they LIVED <Link to="/vocabulary/HAPpily-1">HAPpily</Link> EVer after.</li>
          <li className="margin-bottom-20 list-none">Họ sống hạnh phúc mãi mãi.</li>

          <li>i will GLADly HELP you.</li>
          <li className="list-none">Tôi sẽ vui lòng giúp bạn.</li>

        </ul>

        {/* <Link to="/vocabulary/CLEARly-1">Clearly</Link> */}

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>he SHOOK his HEAD SADly.</li>
          <li className="margin-bottom-20 list-none">Anh ấy lắc đầu buồn bã.</li>

          <li>she CRIED SORrowfully.</li>
          <li className="list-none">Cô ấy khóc đau khổ.</li>

        </ul>
      
      {/* =============================
            🌻 Mẹo học từ vựng:
      ============================= */}

      <h3 className="margin-y-50 text-center">🌻 Mẹo học từ vựng:</h3>

      {/* =============================
            1. Liên kết hình ảnh:
      ============================= */}
      
      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>1. Liên kết</strong></mark> 
        </strong>
        <strong>&nbsp;với hình ảnh</strong>:
      </p>

      <p className="text-indent-whole">Hình dung một đứa trẻ cười toe toét khi nhận được một món quà.</p>

        <ul className="list-square">

          <li>she OPened the PREsent and LAUGHED JOYfully.</li>
          <li className="list-none">Bé mở quà và cười vui vẻ.</li>

        </ul>

      {/* =============================
            2. Tạo câu ví dụ:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Tạo câu</strong></mark> 
        </strong>
        <strong>&nbsp;ví dụ</strong>:
      </p>

      <p className="text-indent-whole">Tạo các câu liên quan đến các hoạt động mang lại niềm vui.</p>

        <ul className="list-square">

          <li>she SANG JOYfully in the SHOWer.</li>
          <li className="list-none">Cô ấy hát vui vẻ trong phòng tắm.</li>

        </ul>

      {/* =============================
            3. Luyện tập thường xuyên:
      ============================= */}

      <p className="margin-top-20">
        <strong>
            <mark className="highlight-255-padding-4-8"><strong>3. Luyện tập</strong></mark>
        </strong>
        <strong>&nbsp;thường xuyên</strong>:
      </p>

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc trò chuyện hoặc bài viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>she WENT to WORK.</li>
            <li className="list-none margin-bottom-20">Cô ấy đi làm.</li>

            <li value="2">she WENT to WORK JOYfully.</li>
            <li className="list-none margin-bottom-20">Cô ấy đi làm một cách vui vẻ.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh</span> rằng cô ấy cảm thấy <span className="highlight-255-padding-0-4">vui vẻ khi đi làm</span>.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Cảm xúc tích cực: "<strong>JOYfully</strong>" luôn liên quan đến cảm xúc tích cực và vui vẻ.</li>

          <li className="margin-bottom-20">Hành động: Nó thường được sử dụng để miêu tả các hành động thể hiện niềm vui.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 7, 2024 · by 💎GEM ·</span>
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