import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Frequently1(): React.JSX.Element {

  const postId = "Frequently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-lap-lai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">frequently
        <sup><Link to="/vocabulary/frequently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/frequently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>frequently</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Frequently</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈfriːkwəntli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">frėque̛ntly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Thường xuyên, liên tục</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>frequently</strong>" được dùng để miêu tả một hành động, sự việc xảy ra nhiều lần trong một khoảng thời gian nhất định. Nó cho thấy tính lặp đi lặp lại của một hành động hoặc sự kiện.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>She ______ visits her grandparents.</li>
          <li className="margin-bottom-20 list-none">Cô ấy thường xuyên đến thăm ông bà.</li>

          <li>It rains ______ in this region.</li>
          <li className="list-none">Ở vùng này thường xuyên mưa.</li>

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

          <li>Frequent (adj) /ˈfriːkwənt/</li>
          <li className="list-none">He is a ______ visitor to the library.</li>
          <li className="margin-bottom-20 list-none">Anh ấy là một khách quen của thư viện.</li>

          <li>Frequency (n) /ˈfriːkwənsi/</li>
          <li className="list-none">The ______ of accidents has increased.</li>
          <li className="list-none">Tần suất tai nạn đã tăng lên.</li>

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

          <li><Link to="/vocabulary/often-1">Often</Link>______ /ˈɔːfən/</li>
          <li className="list-none">I ______ go for a walk in the park.</li>
          <li className="margin-bottom-20 list-none">Tôi thường đi dạo trong công viên.</li>

          <li>Regularly /ˈreɡjələri/</li>
          <li className="list-none">She ______ attends yoga classes.</li>
          <li className="list-none">Cô ấy thường xuyên tham gia các lớp yoga.</li>

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

          <li><Link to="/vocabulary/rarely-1">Rarely</Link> /ˈreərli/</li>
          <li className="list-none">I ______ eat meat.</li>
          <li className="margin-bottom-20 list-none">Tôi hiếm khi ăn thịt.</li>

          <li><Link to="/vocabulary/seldom-1">Seldom</Link> /ˈsɛldəm/</li>
          <li className="list-none">She ______ goes to the movies.</li>
          <li className="list-none">Cô ấy ít khi đi xem phim.</li>

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

      <p className="text-indent-whole">Hình dung một chiếc đồng hồ đang chạy, biểu thị sự lặp đi lặp lại của thời gian.</p>

        <ul className="list-square">

          <li>The clock is ______ ticking, reminding us of the constant passage of time.</li>
          <li className="list-none">Chiếc đồng hồ thường xuyên tích tắc, nhắc nhở chúng ta về sự trôi chảy không ngừng của thời gian.</li>

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

      <p className="text-indent-whole"></p>

        <ul className="list-square">

          <li>I ______ drink coffee in the morning.</li>
          <li className="list-none">Tôi thường uống cà phê vào buổi sáng.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại hoặc khi viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>I go to the gym.</li>
            <li className="list-none margin-bottom-20">Tôi đi đến phòng tập thể dục.</li>

            <li value="2">I ______ go to the gym to exercise.</li>
            <li className="list-none margin-bottom-20">Tôi thường xuyên đến phòng tập thể dục để tập luyện.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>frequently</strong>" để <span className="highlight-255-padding-0-4">nhấn mạnh rằng việc đi đến</span> phòng tập thể dục <span className="highlight-255-padding-0-4">là một hoạt động thường xuyên</span> của người nói.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Mức độ thường xuyên: "<strong>requently</strong>" cho thấy một mức độ thường xuyên cao hơn so với "<Link to="/vocabulary/often-1">often</Link>".</li>

          <li className="margin-bottom-20">Tính lặp lại: Nó nhấn mạnh tính lặp đi lặp lại của một hành động hoặc sự kiện.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 2, 2024 · by 💎Gem ·</span>
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