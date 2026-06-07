import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Sometimes1(): React.JSX.Element {

  const postId = "Sometimes1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hiem-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian hiếm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">sometimes
        <sup><Link to="/vocabulary/sometimes-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/sometimes-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>sometimes</strong>" và các thành ngữ liên quan nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Sometimes</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈsʌmtaɪmz/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">sômetīmes</Link>/
                <sup>&nbsp;⬤• (2x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Tính thỉnh thoảng, đôi khi</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Chỉ sự không thường xuyên, xảy ra một cách ngẫu nhiên.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>I ______ go to the gym after work.</li>
          <li className="margin-bottom-20 list-none">Tôi thỉnh thoảng đi tập gym sau giờ làm.</li>

          <li>It ______ rains in the summer.</li>
          <li className="list-none">Mùa hè đôi khi cũng mưa.</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>sometimes</strong>" vì đây là một từ đơn.</li>

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

          <li><Link to="/vocabulary/occasionally-1">Occasionally</Link> (adv) /əˈkeɪʒnəli/</li>
          <li className="list-none">We ______ meet for coffee.</li>
          <li className="margin-bottom-20 list-none">Chúng tôi thỉnh thoảng gặp nhau để uống cà phê.</li>

          <li>From time to time (adv) /frəm taɪm tə taɪm/</li>
          <li className="list-none">______, I like to watch movies.</li>
          <li className="list-none">Thỉnh thoảng, tôi thích xem phim.</li>

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

          <li><Link to="/vocabulary/always-1">Always</Link> (adv) /ˈɔːlweɪz/</li>
          <li className="list-none">She ______ comes to class on time.</li>
          <li className="margin-bottom-20 list-none">Cô ấy luôn đến lớp đúng giờ.</li>

          <li><Link to="/vocabulary/never-1">Never</Link> (adv) /ˈnɛvər/</li>
          <li className="list-none">I have ______ been to Paris.</li>
          <li className="list-none">Tôi chưa bao giờ đến Paris.</li>

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

      <p className="text-indent-whole">Hình dung một chiếc đồng hồ với kim giây quay liên tục để thể hiện sự không đều đặn.</p>

        <ul className="list-square">

          <li>The watch is running erratically; the second hand ______ jumps.</li>
          <li className="list-none">Đồng hồ chạy không đều; kim giây đôi khi nhảy.</li>

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

      <p className="text-indent-whole">Tạo nhiều câu với "<strong>sometimes</strong>" trong các ngữ cảnh khác nhau, liên quan đến tần suất.</p>

        <ul className="list-square">

          <li>I feel happy ______, but other times I feel sad.</li>
          <li className="list-none">Tôi cảm thấy hạnh phúc đôi khi, nhưng những lúc khác tôi lại cảm thấy buồn.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ "<strong>sometimes</strong>" trong giao tiếp hoặc khi viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa occasionally và <strong>sometimes</strong>):</p>

          <ol>

            <li><Link to="/vocabulary/occasionally-1">Occasionally</Link>: Mang ý nghĩa lịch sự hơn và nhấn mạnh tính ngẫu nhiên.</li>
            <li className="list-none">We ______ meet for lunch.</li>
            <li className="list-none margin-bottom-20">Chúng tôi thỉnh thoảng gặp nhau để ăn trưa.</li>

            <li value="2"><strong>Sometimes</strong>: <span className="highlight-255-padding-0-4">Mang ý nghĩa chung chung về sự không thường xuyên</span>.</li>
            <li className="list-none">I ______ forget to bring my umbrella.</li>
            <li className="list-none margin-bottom-20">Tôi đôi khi quên mang ô.</li>

          </ol>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Sometimes</strong>" thường đứng trước động từ chính trong câu.</li>

          <li className="margin-bottom-20">Nó có thể được sử dụng để diễn tả sự không chắc chắn hoặc sự thay đổi về tần suất.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 5, 2024 · by 💎Gem ·</span>
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