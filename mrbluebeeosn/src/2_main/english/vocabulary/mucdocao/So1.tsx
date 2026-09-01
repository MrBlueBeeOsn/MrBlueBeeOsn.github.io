import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SO1(): React.JSX.Element {

  const postId = "SO1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#muc-do-cao-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: mức độ cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SO
        <sup><Link to="/vocabulary/SO-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/SO-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>SO</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [SO][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">SŌ</Link>] /soʊ/ ⬤ (1x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Rất, quá; như vậy, thế đó; do đó, vì vậy</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">1. Rất, quá (trạng cơ mức độ): Dùng để nhấn mạnh mức độ của một Tính Cơ hoặc trạng cơ.</p>

        <ul className="list-square">

          <li>the MOvie was SO GOOD.</li>
          <li className="margin-bottom-20 list-none">Bộ phim rất hay.</li>

          <li>she SINGS SO BEAUtifully.</li>
          <li className="list-none">Cô ấy hát rất hay.</li>

        </ul>

      <p className="margin-top-20 text-indent-whole">2. Như vậy, thế đó (trạng cơ cách thức/mức độ): Dùng để thay thế cho một ý đã được đề cập trước, tránh lặp lại.</p>

        <ul className="list-square">

          <li>is he COMing? - "i THINK SO."</li>
          <li className="margin-bottom-20 list-none">Anh ấy có đến không? - "Tôi nghĩ thế."</li>

          <li>she SAID she would HELP, and SO she DID.</li>
          <li className="list-none">Cô ấy nói sẽ giúp, và cô ấy đã làm như vậy.</li>

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

          <li>it was RAINing, SO we STAYED HOME.</li>
          <li className="margin-bottom-20 list-none">Trời đang mưa, vì vậy chúng tôi ở nhà.</li>

          <li>he WORKED HARD, SO he GOT a proMOtion.</li>
          <li className="list-none">Anh ấy đã làm việc chăm chỉ, do đó anh ấy được thăng chức.</li>

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

          <li>the FOOD was <Link to="/vocabulary/VERy-1">VERy</Link> deLICious.</li>
          <li className="margin-bottom-20 list-none">Món ăn rất ngon.</li>

          <li>he was ILL; THEREfore, he could NOT atTEND the MEETing.</li>
          <li className="list-none">Anh ấy bị ốm; do đó, anh ấy không thể tham dự cuộc họp.</li>

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

          <li>the MOvie was <Link to="/vocabulary/NOT-1">NOT</Link> INTEResting.</li>
          <li className="margin-bottom-20 list-none">Bộ phim không mấy thú vị.</li>

          <li>it was COLD; howEVer, we still WENT for a WALK.</li>
          <li className="list-none">Trời lạnh; tuy nhiên, chúng tôi vẫn đi dạo.</li>

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

      <p className="text-indent-whole">Hãy tưởng tượng một mũi tên chỉ vào một điều gì đó với một dấu chấm than lớn để thể hiện sự nhấn mạnh ("rất!").</p>

        <ul className="list-square">

          <li>that is SO COOL!</li>
          <li className="margin-bottom-20 list-none">Cái đó thật là ngầu quá xá!</li>

        </ul>

        <p className="text-indent-whole">Hoặc một chuỗi domino, cái trước đổ làm cái sau đổ, tượng trưng cho mối quan hệ "do đó".</p>

        <ul className="list-square">


          <li>it STARTed to RAIN, SO we WENT HOME.</li>
          <li className="list-none">Trời bắt đầu mưa, vì vậy chúng tôi đi về nhà.</li>

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

      <p className="text-indent-whole">Tập trung tạo các câu mà "<strong>SO</strong>" thể hiện các chức năng khác nhau của nó: nhấn mạnh, thay thế, hoặc chỉ kết quả.</p>

        <ul className="list-square">

          <li>she was SO TIred that she FELL aSLEEP imMEdiately.</li>
          <li className="margin-bottom-20 list-none">Cô ấy mệt đến nỗi cô ấy ngủ thiếp đi ngay lập tức.</li>

          <li>are you COMing to the PARTy? "i THINK SO."</li>
          <li className="margin-bottom-20 list-none">Bạn có đến bữa tiệc không? "Tôi nghĩ vậy."</li>

          <li>it STARted RAINing HEAVily, SO we deCIded to GO HOME.</li>
          <li className="list-none">Trời bắt đầu mưa to, do đó/vì vậy chúng tôi quyết định về nhà.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng "<strong>SO</strong>" trong giao tiếp hàng ngày và khi viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa VERy và <strong>SO</strong>):</p>

          <ol>

            <li value="1">she was <Link to="/vocabulary/VERy-1">VERy</Link> HAPpy.</li>
            <li className="list-none">Cô ấy rất hạnh phúc.</li>
            <li className="list-none margin-bottom-20">Đơn thuần chỉ mức độ. Dùng để chỉ mức độ cao nhưng thường mang tính chất khách quan hơn, ít cảm xúc hơn.</li>

            <li value="2">she was SO HAPpy that she CRIED.</li>
            <li className="list-none">Cô ấy hạnh phúc đến nỗi bật khóc.</li>
            <li className="list-none">Nhấn mạnh cảm xúc và kết quả. Thường dùng <span className="highlight-255-padding-0-4">để thể hiện cảm xúc mạnh hơn</span> hoặc bất ngờ về mức độ. Đôi khi có thể đi kèm với câu con "that".</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>SO</strong>" là một từ rất linh hoạt và có nhiều chức năng khác nhau trong câu.</li>

          <li>Khi "<strong>SO</strong>" là Trạng Cơ chỉ mức độ, nó thường đứng trước Tính Cơ hoặc trạng cơ.</li>

          <li className="margin-bottom-20">Khi "<strong>SO</strong>" là liên cơ, nó thường đứng ở đầu câu con chỉ kết quả.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>June 26, 2025 · by 💎GEM ·</span>
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