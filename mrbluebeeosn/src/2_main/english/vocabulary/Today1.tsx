import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Today1(): React.JSX.Element {

  const postId = "Today1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hien-tai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">today
        <sup><Link to="/vocabulary/today-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/today-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>today</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Today</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /təˈdeɪ/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">tơdāy</Link>/
                <sup>&nbsp;•⬤ (2x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Hôm nay</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Chỉ thời điểm hiện tại, ngày mà người nói hoặc người nghe đang trải qua.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>It's sunny <strong>today</strong>. (Hôm nay trời nắng.)</li>

          <li>I'm going to the movies <strong>today</strong>. (Hôm nay tôi sẽ đi xem phim.)</li>

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

          <li><strong>Today</strong>: (noun) Hôm nay /təˈdeɪ/</li>
          <li className="margin-bottom-20 list-none"><strong>Today</strong> is a beautiful day. (Hôm nay là một ngày đẹp trời.)</li>

          <li>Day: (noun) Ngày /deɪ/</li>
          <li className="list-none">Every day I go to school. (Mỗi ngày tôi đều đi học.)</li>

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
          <li className="margin-bottom-20 list-none">I'm going to bed now. (Bây giờ tôi sẽ đi ngủ.)</li>

          <li>At present: Hiện tại /æt ˈprez.ənt/</li>
          <li className="list-none">At present, I am working on a new project. (Hiện tại, tôi đang làm việc trên một dự án mới.)</li>

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

          <li>Yesterday: hôm qua /ˈjes.tər.deɪ/</li>
          <li className="margin-bottom-20 list-none">I went to the park yesterday. (Hôm qua tôi đã đến công viên.)</li>

          <li>Tomorrow: ngày mai /təˈmɔː.roʊ/</li>
          <li className="list-none">I will go to the beach tomorrow. (Ngày mai tôi sẽ đi biển.)</li>

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

      <p className="text-indent-whole">Hình dung một lịch và ngày hôm nay được đánh dấu.</p>

        <ul className="list-square">

          <li>I have a meeting marked on my calendar <strong>today</strong>.</li>
          <li className="list-none">(Tôi có một cuộc họp được đánh dấu trên lịch hôm nay.)</li>

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

      <p className="text-indent-whole">Tạo nhiều câu với "<strong>today</strong>" trong các ngữ cảnh khác nhau.</p>

        <ul className="list-square">

          <li>I'm going to the movies <strong>today</strong>.</li>
          <li className="list-none">(Hôm nay tôi sẽ đi xem phim.)</li>

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

      <p className="text-indent-whole">Đọc và viết nhiều để nhớ từ vựng lâu hơn.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa now và <strong>today</strong>):</p>

          <ol>

            <li><Link to="/vocabulary/now-1">Now</Link>: Chỉ thời điểm chính xác tại thời điểm nói.</li>
            <li className="list-none margin-bottom-20">I'm eating now. (Bây giờ tôi đang ăn.)</li>

            <li value="2"><strong>Today</strong>: <span className="highlight-255-padding-0-4">Chỉ một khoảng thời gian 24 giờ</span>, từ nửa đêm đến nửa đêm.</li>
            <li className="list-none margin-bottom-20">I'm busy <strong>today</strong>. (Hôm nay tôi bận.)</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Today</strong>" thường đứng ở đầu câu hoặc giữa câu.</li>

          <li className="margin-bottom-20">"<strong>Today</strong>" có thể được dùng để nhấn mạnh sự đối lập với quá khứ hoặc tương lai.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎Gem ·</span>
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