import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Rarely1(): React.JSX.Element {

  const postId = "Rarely1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hiem-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian hiếm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">rarely
        <sup><Link to="/vocabulary/rarely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/rarely-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>rarely</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Rarely</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈrerli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">rā̄rely</Link>/
                <sup>&nbsp;⬤• (2x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Tính hiếm khi, ít khi</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>rarely</strong>" dùng để diễn tả một hành động, sự việc xảy ra không thường xuyên, ít gặp. Nó cho thấy tần suất thấp của một sự kiện.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>I ______ eat meat.</li>
          <li className="margin-bottom-20 list-none">Tôi hiếm khi ăn thịt.</li>

          <li>She ______ goes to the movies.</li>
          <li className="list-none">Cô ấy hiếm khi đi xem phim.</li>

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

          <li>Rare (adj) /reər/</li>
          <li className="list-none">This is a ______ book.</li>
          <li className="list-none">Đây là một cuốn sách hiếm.</li>

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

          <li><Link to="/vocabulary/seldom-1">Seldom</Link> /ˈseldəm/</li>
          <li className="list-none">I ______ see him these days.</li>
          <li className="margin-bottom-20 list-none">Tôi hiếm khi gặp anh ấy những ngày này.</li>

          <li>Infrequently /ɪnˈfriːkwəntli/</li>
          <li className="list-none">She ______ visits her parents.</li>
          <li className="list-none">Cô ấy không thường xuyên đến thăm ba mẹ.</li>

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

          <li><Link to="/vocabulary/frequently-1">Frequently</Link> /ˈfriːkwəntli/</li>
          <li className="list-none">I ______ go to the gym.</li>
          <li className="margin-bottom-20 list-none">Tôi thường xuyên đến phòng tập thể dục.</li>

          <li><Link to="/vocabulary/often-1">Often</Link> /ˈɔːfən/</li>
          <li className="list-none">She ______ cooks dinner.</li>
          <li className="list-none">Cô ấy thường nấu bữa tối.</li>

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

      <p className="text-indent-whole">Hình dung một chiếc đồng hồ hiếm khi chạy hoặc một loài động vật quý hiếm.</p>

        <ul className="list-square">

          {/* <li></li>
          <li className="margin-bottom-20 list-none"></li> */}

          <li>This animal is ______ seen in the wild.</li>
          <li className="list-none">Loài động vật này hiếm khi được nhìn thấy trong tự nhiên.</li>

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

      <p className="text-indent-whole">Tự tạo các câu ví dụ khác nhau với từ "<strong>rarely</strong>" trong nhiều ngữ cảnh khác nhau.</p>

        <ul className="list-square">

          <li>She ______ goes out on weekdays.</li>
          <li className="list-none">Cô ấy hiếm khi ra ngoài vào các ngày trong tuần.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại để diễn tả sự hiếm hoi.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>I go to the library.</li>
            <li className="list-none margin-bottom-20">Tôi đi thư viện.</li>

            <li value="2">I ______ go to the library.</li>
            <li className="list-none margin-bottom-20">Tôi hiếm khi đi thư viện.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh rằng việc đi</span> thư viện <span className="highlight-255-padding-0-4">không</span> phải là một thói quen <span className="highlight-255-padding-0-4">thường xuyên</span> của người nói.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Tần suất: "<strong>Rarely</strong>" nhấn mạnh sự hiếm hoi của một hành động hoặc sự kiện.</li>

          <li className="margin-bottom-20">Phủ định: Đôi khi, "<strong>rarely</strong>" được dùng để nhấn mạnh ý nghĩa phủ định của một câu.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 15, 2024 · by 💎Gem ·</span>
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