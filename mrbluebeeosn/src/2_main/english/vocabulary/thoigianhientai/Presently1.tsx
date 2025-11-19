import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Presently1(): React.JSX.Element {

  const postId = "Presently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hien-tai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">presently
        <sup><Link to="/vocabulary/presently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/presently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>presently</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Presently</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈprezəntli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">prese̛ntly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Hiện tại: Chỉ thời điểm hiện tại, ngay bây giờ.</li>

            <li>Sớm thôi: Chỉ một thời điểm trong tương lai gần, không lâu nữa.</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">1. Hiện tại: Khi sử dụng "<strong>presently</strong>" với nghĩa hiện tại, nó đồng nghĩa với "now" (bây giờ).</p>

      <p className="margin-top-30 text-indent-whole">2. Sớm thôi: Khi sử dụng "<strong>presently</strong>" với nghĩa tương lai gần, nó có nghĩa là một việc gì đó sẽ xảy ra trong thời gian ngắn sắp tới.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>Hiện tại: I am <strong>presently</strong> working on this project. (Hiện tại tôi đang làm việc trên dự án này.)</li>

          <li>Sớm thôi: The meeting will begin <strong>presently</strong>. (Cuộc họp sẽ bắt đầu sớm thôi.)</li>

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

          <li>Present (adj): Hiện tại /ˈprezənt/</li>
          <li className="margin-bottom-20 list-none">The present situation is very difficult. (Tình hình hiện tại rất khó khăn.)</li>

          <li>Present (v): Tặng, trình bày /prɪˈzent/</li>
          <li className="margin-bottom-20 list-none">I will present my ideas at the meeting. (Tôi sẽ trình bày ý tưởng của mình tại cuộc họp.)</li>

          <li>Present (n): Món quà (ˈprez.ənt)</li>
          <li className="list-none">As a present for her graduation, I bought her a new laptop. (Như một món quà tốt nghiệp, tôi đã mua cho cô ấy một chiếc laptop mới.)</li>

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

          <li><Link to="/vocabulary/now-1">Now</Link>: Bây giờ /naʊ/</li>
          <li className="margin-bottom-20 list-none">I am reading a book now. (Tôi đang đọc sách bây giờ.)</li>

          <li>Soon: Sớm /suːn/</li>
          <li className="list-none">I will be there soon. (Tôi sẽ đến đó sớm.)</li>

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

          <li>Previously: Trước đây /ˈpriːviəsli/</li>
          <li className="margin-bottom-20 list-none">I previously worked as a teacher. (Trước đây tôi làm giáo viên.)</li>

          <li>Later: Sau này /ˈleɪtər/</li>
          <li className="list-none">We will discuss this later. (Chúng ta sẽ thảo luận về điều này sau.)</li>

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

      <p className="text-indent-whole">Hình dung một dòng thời gian và vị trí của "<strong>presently</strong>" trên đó.</p>

        <ul className="list-square">

          <li><strong>Presently</strong>, we are on track with the project timeline.</li>
          <li className="list-none">(Hiện tại, chúng ta đang đi đúng tiến độ dự án.)</li>

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

      <p className="text-indent-whole">Tạo các câu sử dụng "<strong>presently</strong>" trong cả hai nghĩa hiện tại và tương lai gần.</p>

        <ul className="list-square">

          <li><strong>Presently</strong>, I am eating an apple.</li>
          <li className="margin-bottom-20 list-none">(Hiện tại, tôi đang ăn táo.)</li>

          <li>The train will arrive <strong>presently</strong>.</li>
          <li className="list-none">(Tàu sẽ đến sớm thôi.)</li>

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

      <p className="text-indent-whole">Thường xuyên sử dụng từ này trong các bài viết hoặc cuộc trò chuyện.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>I will go to the store now. (Tôi sẽ đi đến cửa hàng bây giờ.)</li>

            <li className="margin-bottom-20">I will go to the store <strong>presently</strong>. (Tôi sẽ đi đến cửa hàng sớm thôi.)</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Cả hai câu đều có nghĩa tương tự, nhưng "<strong>presently</strong>" mang một sắc thái trang trọng hơn và <span className="highlight-255-padding-0-4">nhấn mạnh rằng việc đi</span> đến cửa hàng <span className="highlight-255-padding-0-4">sẽ diễn ra trong tương lai rất gần</span>.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Sự linh hoạt về nghĩa: Nghĩa của "<strong>presently</strong>" có thể thay đổi tùy thuộc vào ngữ cảnh.</li>

          <li className="margin-bottom-20">Sử dụng trong văn viết: "<strong>Presently</strong>" thường được sử dụng trong văn viết trang trọng hơn là trong giao tiếp hàng ngày.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 7, 2024 · by 💎Gem ·</span>
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