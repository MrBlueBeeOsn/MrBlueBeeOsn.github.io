import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Belatedly1(): React.JSX.Element {

  const postId = "Belatedly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#toc-do-cham-terms"><mark className="highlight-tertiary-padding-4-8">Tốc độ chậm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">belatedly
        <sup><Link to="/vocabulary/belatedly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/belatedly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>belatedly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Belatedly</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /bɪˈleɪ.tɪd.li/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">bėlātėdly</Link>/
                <sup>&nbsp;•⬤•• (4x</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Muộn màng, chậm trễ</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>belatedly</strong>" miêu tả một hành động hoặc sự kiện xảy ra muộn hơn so với thời điểm dự kiến hoặc mong đợi. Nó thường gợi lên cảm giác hối tiếc hoặc nhận ra điều gì đó quá muộn.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>He ______ realized his mistake.</li>
          <li className="margin-bottom-20 list-none">Anh ấy muộn màng nhận ra sai lầm của mình.</li>

          <li>The birthday card arrived ______.</li>
          <li className="margin-bottom-20 list-none">Tấm thiệp sinh nhật đến muộn.</li>

          <li>She ______ apologized for her behavior.</li>
          <li className="list-none">Cô ấy muộn màng xin lỗi về hành vi của mình.</li>

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

          <li>Belated (adj) /bɪˈleɪ.tɪd/</li>
          <li className="list-none">He offered a ______ apology.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đưa ra một lời xin lỗi muộn màng.</li>

          <li className="list-none">We received a ______ invitation.</li>
          <li className="list-none">Chúng tôi nhận được một lời mời muộn.</li>

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

          <li>Late /leɪt/</li>
          <li className="list-none">He arrived ______ for the meeting.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đến muộn cho cuộc họp.</li>

          <li>Tardily /ˈtɑːr.dɪ.li/</li>
          <li className="list-none">The train arrived ______.</li>
          <li className="margin-bottom-20 list-none">Chuyến tàu đến muộn.</li>

          <li>Behind schedule /bɪˈhaɪnd ˈskedʒ.uːl/</li>
          <li className="list-none">The project is running ______.</li>
          <li className="margin-bottom-20 list-none">Dự án đang bị chậm hơn lịch trình.</li>

          <li>Too late /tuː leɪt/</li>
          <li className="list-none">It was ______ to apologize.</li>
          <li className="list-none">Đã quá muộn để xin lỗi.</li>

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

          <li>Early /ˈɜːr.li/</li>
          <li className="list-none">He arrived ______ for the appointment.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đến sớm cho cuộc hẹn.</li>

          <li>Promptly /ˈprɒmpt.li/</li>
          <li className="list-none">She replied ______ to the email.</li>
          <li className="margin-bottom-20 list-none">Cô ấy trả lời email một cách nhanh chóng.</li>

          <li>Punctually /ˈpʌŋk.tʃu.ə.li/</li>
          <li className="list-none">The meeting started ______.</li>
          <li className="margin-bottom-20 list-none">Cuộc họp bắt đầu đúng giờ.</li>

          <li>Immediately /ɪˈmiː.di.ət.li/</li>
          <li className="list-none">Please report any issues ______.</li>
          <li className="list-none">Vui lòng báo cáo mọi vấn đề ngay lập tức.</li>

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

      <p className="text-indent-whole">Hình dung một món quà sinh nhật đến sau ngày sinh, một người nhận ra lỗi lầm sau khi gây ra hậu quả, hoặc một lời xin lỗi được đưa ra quá muộn để hàn gắn mối quan hệ.</p>

        <ul className="list-square">

          <li>The birthday gift arrived ______.</li>
          <li className="margin-bottom-20 list-none">Món quà sinh nhật đến muộn.</li>

          <li>He ______ realized his mistake after the consequences.</li>
          <li className="margin-bottom-20 list-none">Anh ấy muộn màng nhận ra lỗi lầm sau hậu quả.</li>

          <li>The apology was offered ______ to mend the relationship.</li>
          <li className="list-none">Lời xin lỗi được đưa ra muộn màng để hàn gắn mối quan hệ.</li>

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

      <p className="text-indent-whole">Tạo các câu liên quan đến những tình huống bạn hoặc người khác hành động hoặc nhận ra điều gì đó muộn màng.</p>

        <ul className="list-square">

          <li>The fire department arrived ______ at the scene.</li>
          <li className="list-none">Sở cứu hỏa đến hiện trường một cách muộn màng.</li>

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

      <p className="text-indent-whole margin-bottom-20">Chú ý đến những tình huống có sự chậm trễ và cố gắng sử dụng từ này để mô tả chúng.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>He realized his mistake.</li>
            <li className="list-none margin-bottom-20">Anh ấy nhận ra sai lầm của mình.</li>

            <li value="2">He ______ realized his mistake.</li>
            <li className="list-none margin-bottom-20">Anh ấy muộn màng nhận ra sai lầm của mình.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai ngụ ý rằng anh ấy <span className="highlight-255-padding-0-4">đã mất một khoảng thời gian để nhận ra sai lầm</span>, và có lẽ đã có những hậu quả xảy ra trước khi anh ấy nhận ra.</p>

      </div>

         <ol>

            <li>The birthday card arrived.</li>
            <li className="list-none margin-bottom-20">Tấm thiệp sinh nhật đã đến.</li>

            <li value="2">The birthday card arrived ______.</li>
            <li className="list-none margin-bottom-20">Tấm thiệp sinh nhật đến muộn.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">chỉ rõ</span> rằng tấm thiệp <span className="highlight-255-padding-0-4">không đến đúng</span> vào ngày sinh nhật.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Nhấn mạnh sự chậm trễ so với thời điểm mong đợi: "<strong>Belatedly</strong>" thường mang ý rằng điều gì đó đáng lẽ nên xảy ra sớm hơn.</li>

          <li className="margin-bottom-20">Có thể đi kèm với cảm giác hối tiếc hoặc nhận ra muộn: Khi một người nhận ra sai lầm hoặc đưa ra lời xin lỗi "<strong>belatedly</strong>", nó thường ngụ ý rằng họ ước đã hành động sớm hơn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 23, 2025 · by 💎Gem ·</span>
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