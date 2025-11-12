import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function So1(): React.JSX.Element {

  const postId = "So1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-muc-do-terms"><mark className="highlight-tertiary-padding-4-8">Tính mức độ</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">so
        <sup><Link to="/vocabulary/so-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/so-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>so</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>So</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /soʊ/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">sō</Link>/
                <sup>&nbsp;⬤ (1x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Rất, quá; như vậy, thế đó; do đó, vì vậy</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">1. Rất, quá (trạng từ mức độ): Dùng để nhấn mạnh mức độ của một tính từ hoặc trạng từ.</p>

        <ul className="list-square">

          <li>The movie was <strong>so</strong> good. (Bộ phim rất hay.)</li>

          <li>She sings <strong>so</strong> beautifully. (Cô ấy hát rất hay.)</li>

        </ul>

      <p className="margin-top-20 text-indent-whole">2. Như vậy, thế đó (trạng từ cách thức/mức độ): Dùng để thay thế cho một ý đã được đề cập trước, tránh lặp lại.</p>

        <ul className="list-square">

          <li>Is he coming? - "I think <strong>so</strong>." (Anh ấy có đến không? - "Tôi nghĩ thế.")</li>

          <li>She said she would help, and <strong>so</strong> she did. (Cô ấy nói sẽ giúp, và cô ấy đã làm như vậy.)</li>

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

          <li><strong>So</strong>: (prep) /soʊ/ - Do đó, vì vậy (liên từ): Dùng để chỉ kết quả hoặc hậu quả của một hành động, sự việc.</li>
          <li className="list-none">It was raining, <strong>so</strong> we stayed home. (Trời đang mưa, vì vậy chúng tôi ở nhà.)</li>
          <li className="list-none">He worked hard, <strong>so</strong> he got a promotion. (Anh ấy đã làm việc chăm chỉ, do đó anh ấy được thăng chức.)</li>

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

          <li><Link to="/vocabulary/very-1">Very</Link>: (adv) /ˈveri/ - Rất (khi chỉ mức độ)</li>
          <li className="margin-bottom-20 list-none">The food was very delicious. (Món ăn rất ngon.)</li>

          <li>Therefore: (adv) /ˈðɛərfɔːr/ - Do đó, vì vậy (khi là liên từ)</li>
          <li className="list-none">He was ill; therefore, he could not attend the meeting. (Anh ấy bị ốm; do đó, anh ấy không thể tham dự cuộc họp.)</li>

        </ul>

        {/* <Link to="/vocabulary/clearly-1">Clearly</Link> */}

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li><Link to="/vocabulary/not-1">Not</Link> (very): (adv) /nɒt ˈveri/ - Không (mấy) (khi chỉ mức độ)</li>
          <li className="margin-bottom-20 list-none">The movie was not very interesting. (Bộ phim không mấy thú vị.)</li>

          <li>However: (adv) /haʊˈevər/ - Tuy nhiên (khi là liên từ)</li>
          <li className="list-none">It was cold; however, we still went for a walk. (Trời lạnh; tuy nhiên, chúng tôi vẫn đi dạo.)</li>

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

      <p className="text-indent-whole">Hãy tưởng tượng một mũi tên chỉ vào một điều gì đó với một dấu chấm than lớn để thể hiện sự nhấn mạnh ("rất!"). Hoặc một chuỗi domino, cái trước đổ làm cái sau đổ, tượng trưng cho mối quan hệ "do đó".</p>

        <ul className="list-square">

          <li>The arrow pointed, emphasizing <strong>so</strong> much with a large exclamation mark.</li>
          <li className="margin-bottom-20 list-none">(Mũi tên chỉ vào, nhấn mạnh rất nhiều với một dấu chấm than lớn.)</li>

          <li>The domino chain fell, representing a <strong>so</strong>-related sequence.</li>
          <li className="list-none">(Chuỗi domino đổ, tượng trưng cho một chuỗi quan hệ do đó.)</li>

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

      <p className="text-indent-whole">Tập trung tạo các câu mà "<strong>so</strong>" thể hiện các chức năng khác nhau của nó: nhấn mạnh, thay thế, hoặc chỉ kết quả.</p>

        <ul className="list-square">

          <li>She was <strong>so</strong> tired that she fell asleep immediately.</li>
          <li className="margin-bottom-20 list-none">(Cô ấy mệt đến nỗi cô ấy ngủ thiếp đi ngay lập tức.)</li>

          <li>Are you coming to the party? "I think <strong>so</strong>."</li>
          <li className="margin-bottom-20 list-none">(Bạn có đến bữa tiệc không? "Tôi nghĩ vậy.")</li>

          <li>It started raining heavily, <strong>so</strong> we decided to go home.</li>
          <li className="list-none">(Trời bắt đầu mưa to, do đó/vì vậy chúng tôi quyết định về nhà.)</li>

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

      <p className="text-indent-whole">Thường xuyên sử dụng "<strong>so</strong>" trong giao tiếp hàng ngày và khi viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa very và <strong>so</strong>):</p>

          <ol>

            <li><Link to="/vocabulary/very-1">Very</Link> (adv - mức độ): Dùng để chỉ mức độ cao nhưng thường mang tính chất khách quan hơn, ít cảm xúc hơn.</li>
            <li className="list-none margin-bottom-20">She was very happy. (Cô ấy rất hạnh phúc.) - Đơn thuần chỉ mức độ</li>

            <li value="2"><strong>So</strong> (adv - nhấn mạnh): Thường dùng <span className="highlight-255-padding-0-4">để thể hiện cảm xúc mạnh hơn</span> hoặc bất ngờ về mức độ. Đôi khi có thể đi kèm với mệnh đề "that".</li>
            <li className="list-none margin-bottom-20">She was <strong>so</strong> happy that she cried. (Cô ấy hạnh phúc đến nỗi bật khóc.) - Nhấn mạnh cảm xúc và kết quả.</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>So</strong>" là một từ rất linh hoạt và có nhiều chức năng khác nhau trong câu.</li>

          <li>Khi "<strong>so</strong>" là trạng từ chỉ mức độ, nó thường đứng trước tính từ hoặc trạng từ.</li>

          <li className="margin-bottom-20">Khi "<strong>so</strong>" là liên từ, nó thường đứng ở đầu mệnh đề chỉ kết quả.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>June 26, 2025 · by 💎Gem ·</span>
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