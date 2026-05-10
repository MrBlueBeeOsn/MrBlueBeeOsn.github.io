import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Usually1(): React.JSX.Element {

  const postId = "Usually1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-lap-lai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">usually
        <sup><Link to="/vocabulary/usually-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/usually-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>usually</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Usually</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈjuːʒuəli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ūsua̛lly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Thường thường, thường xuyên</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>usually</strong>" được dùng để mô tả một hành động, sự kiện hoặc tình huống xảy ra một cách thông thường, quen thuộc và có thể dự đoán được. Nó diễn tả tần suất của một việc gì đó.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>I ______ get up at 7 am.</li>
          <li className="margin-bottom-20 list-none">Tôi thường thức dậy lúc 7 giờ sáng.</li>

          <li>We ______ go to the movies on weekends.</li>
          <li className="list-none">Chúng tôi thường đi xem phim vào cuối tuần.</li>

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

          <li>Usual (adj) /ˈjuːʒuəl/</li>
          <li className="list-none">This is my ______ routine.</li>
          <li className="margin-bottom-20 list-none">Đây là thói quen thường ngày của tôi.</li>

          <li>Use (v) /juːz/</li>
          <li className="list-none">I ______ this pen every day.</li>
          <li className="list-none">Tôi dùng cây bút này mỗi ngày.</li>

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

          <li>Typically /ˈtɪpɪkli/</li>
          <li className="list-none">______, I eat breakfast at 8 am.</li>
          <li className="margin-bottom-20 list-none">Điển hình là, tôi ăn sáng lúc 8 giờ.</li>

          <li>Normally /ˈnɔːrməli/</li>
          <li className="list-none">______, I go to bed at 10 pm.</li>
          <li className="list-none">Bình thường, tôi đi ngủ lúc 10 giờ tối.</li>

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
          <li className="list-none">I ______ eat spicy food.</li>
          <li className="margin-bottom-20 list-none">Tôi hiếm khi ăn đồ ăn cay.</li>

          <li><Link to="/vocabulary/never-1">Never</Link> /ˈnevər/</li>
          <li className="list-none">I ______ drink coffee.</li>
          <li className="list-none">Tôi không bao giờ uống cà phê.</li>

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

      <p className="text-indent-whole">Hình dung một lịch trình hàng ngày, trong đó các hoạt động thường xuyên được đánh dấu.</p>

        <ul className="list-square">

          <li>I ______ go for a run after breakfast, as marked on my schedule.</li>
          <li className="list-none">Tôi thường đi chạy bộ sau bữa sáng, như đã đánh dấu trên lịch trình của tôi.</li>

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

      <p className="text-indent-whole">Tự tạo các câu ví dụ khác nhau với từ "<strong>usually</strong>" để mô tả thói quen hàng ngày của bạn.</p>

        <ul className="list-square">

          <li>I ______ have coffee and toast for breakfast.</li>
          <li className="list-none">Tôi thường ăn sáng bằng cà phê và bánh mì nướng.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại và bài viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>I go to the gym.</li>
            <li className="list-none margin-bottom-20">Tôi đi đến phòng tập thể dục.</li>

            <li value="2">I ______ go to the gym on Tuesdays and Thursdays.</li>
            <li className="list-none margin-bottom-20">Tôi thường đi đến phòng tập thể dục vào thứ Ba và thứ Năm.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>usually</strong>" để chỉ ra rằng <span className="highlight-255-padding-0-4">việc đi</span> đến phòng tập thể dục <span className="highlight-255-padding-0-4">là một phần của thói quen hàng ngày</span> của người nói, và không phải là một sự kiện ngẫu nhiên.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Tần suất: "<strong>Usually</strong>" nhấn mạnh tính thường xuyên của một hành động hoặc sự kiện.</li>

          <li className="margin-bottom-20">Không phải luôn luôn: Nó không có nghĩa là một việc gì đó xảy ra 100% thời gian, mà chỉ đơn giản là thường xuyên xảy ra.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span> · by 💎Gem ·</span>
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