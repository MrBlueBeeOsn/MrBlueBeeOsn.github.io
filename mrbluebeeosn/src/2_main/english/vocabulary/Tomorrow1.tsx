import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Tomorrow1(): React.JSX.Element {

  const postId = "Tomorrow1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-tuong-lai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian tương lai</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">tomorrow
        <sup><Link to="/vocabulary/tomorrow-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/tomorrow-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>tomorrow</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Tomorrow</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /təˈmɔː.roʊ/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">tơmörrōw</Link>/
                <sup>&nbsp;•⬤• (3x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Ngày mai</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Chỉ thời điểm sau thời điểm hiện tại 24 giờ, ngày tiếp theo sau ngày hôm nay.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>I will go to the beach <strong>tomorrow</strong>. (Ngày mai tôi sẽ đi biển.)</li>

          <li>It will be sunny <strong>tomorrow</strong>. (Ngày mai trời sẽ nắng.)</li>

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

          <li><strong>Tomorrow</strong>: (noun) Ngày mai /təˈmɔː.roʊ/</li>
          <li className="margin-bottom-20 list-none"><strong>Tomorrow</strong> is my birthday. (Ngày mai là sinh nhật của tôi.)</li>

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

          <li>The day after <strong>tomorrow</strong>: Ngày kia /ðə deɪ ˈɑː.f.tər təˈmɔː.roʊ/</li>
          <li className="margin-bottom-20 list-none">I'm going on a trip the day after <strong>tomorrow</strong>. (Ngày kia tôi sẽ đi du lịch.)</li>

          <li>The next day: Ngày kế tiếp /ðə nɛkst deɪ/</li>
          <li className="list-none">The next day, she went to school. (Ngày hôm sau cô ấy đến trường.)</li>

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

          <li>Yesterday: Hôm qua /ˈjes.tər.deɪ/</li>
          <li className="margin-bottom-20 list-none">I went to the park yesterday. (Hôm qua tôi đã đến công viên.)</li>

          <li><Link to="/vocabulary/today-1">Today</Link>: Hôm nay /təˈdeɪ/</li>
          <li className="list-none">Today is a sunny day. (Hôm nay trời nắng.)</li>

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

      <p className="text-indent-whole">Hình dung một lịch và ngày mai được đánh dấu.</p>

        <ul className="list-square">

          <li>I have a meeting marked on my calendar today</li>
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

      <p className="text-indent-whole">Tạo nhiều câu với "<strong>tomorrow</strong>" trong các ngữ cảnh khác nhau.</p>

        <ul className="list-square">

          <li>Let's meet at the cafe <strong>tomorrow</strong> at 2 PM.</li>
          <li className="list-none">(Chúng ta gặp nhau ở quán cà phê lúc 2 giờ chiều ngày mai nhé.)</li>

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

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa the day after <strong>tomorrow</strong> và <strong>tomorrow</strong>):</p>

          <ol>

            <li>The day after <strong>tomorrow</strong>: Chỉ ngày sau ngày mai.</li>
            <li className="list-none margin-bottom-20">I have a test the day after <strong>tomorrow</strong>. (Ngày kia tôi có bài kiểm tra.)</li>

            <li value="2"><strong>Tomorrow</strong>: <span className="highlight-255-padding-0-4">Chỉ ngày ngay sau ngày hôm nay</span>.</li>
            <li className="list-none margin-bottom-20">I will meet her <strong>tomorrow</strong>. (Ngày mai tôi sẽ gặp cô ấy.)</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Tomorrow</strong>" thường đứng ở đầu câu hoặc giữa câu.</li>

          <li className="margin-bottom-20">"<strong>Tomorrow</strong>" có thể được dùng để nhấn mạnh sự đối lập với quá khứ hoặc hiện tại.</li>

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