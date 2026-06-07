import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Correctly1(): React.JSX.Element {

  const postId = "Correctly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-chinh-xac-terms"><mark className="highlight-tertiary-padding-4-8">Tính chính xác </mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">correctly
        <sup><Link to="/vocabulary/correctly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/correctly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>correctly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Correctly</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /kəˈrektli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">cơrrectly</Link>/
                <sup>&nbsp;•⬤• (3x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Một cách chính xác, đúng đắn</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>
      
      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>correctly</strong>" được sử dụng để chỉ ra rằng một hành động, câu trả lời, hoặc thông tin là đúng, không có lỗi. Nó thể hiện sự chính xác và chuẩn xác.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>She answered all the questions ______.</li>
          <li className="margin-bottom-20 list-none">Cô ấy đã trả lời tất cả các câu hỏi một cách chính xác.</li>

          <li>Please make sure you fill in the form ______.</li>
          <li className="list-none">Vui lòng đảm bảo bạn điền vào mẫu đơn một cách chính xác.</li>

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

          <li>Correct (adj) /kəˈrekt/</li>
          <li className="list-none">Your answer is ______.</li>
          <li className="margin-bottom-20 list-none">Câu trả lời của bạn đúng.</li>

          <li>Correction (n) /kəˈrekʃn/</li>
          <li className="list-none">The teacher made a ______ to my essay.</li>
          <li className="list-none">Giáo viên đã sửa một lỗi trong bài luận của tôi.</li>

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

          <li><Link to="/vocabulary/accurately-1">Accurately</Link> /ˈækjərətli/</li>
          <li className="list-none">The data was recorded ______.</li>
          <li className="margin-bottom-20 list-none">Dữ liệu đã được ghi lại một cách chính xác.</li>

          <li><Link to="/vocabulary/precisely-1">Precisely</Link> /prɪˈsaɪsli/</li>
          <li className="list-none">He explained the situation ______.</li>
          <li className="list-none">Anh ấy đã giải thích tình hình một cách chính xác.</li>

        </ul>

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>Incorrectly /ɪnˈkərektli/</li>
          <li className="list-none">He answered the question ______.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã trả lời câu hỏi một cách sai lầm.</li>

          <li>Improperly /ɪmˈprɒpərli/</li>
          <li className="list-none">She was treated ______.</li>
          <li className="list-none">Cô ấy đã bị đối xử một cách không đúng.</li>

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

      <p className="text-indent-whole">Hình dung một học sinh đang làm bài kiểm tra và đánh dấu đúng vào đáp án.</p>

        <ul className="list-square">

          <li>The student is carefully marking the answers ______, ensuring a high score.</li>
          <li className="list-none">Học sinh đang cẩn thận đánh dấu các câu trả lời một cách chính xác, đảm bảo đạt điểm cao.</li>

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

      <p className="text-indent-whole">Tạo các câu ví dụ khác nhau với từ "<strong>correctly</strong>" trong nhiều ngữ cảnh.</p>

        <ul className="list-square">

          <li>If you want to use the machine, you must follow the instructions ______.</li>
          <li className="list-none">Nếu bạn muốn sử dụng máy, bạn phải làm theo hướng dẫn một cách chính xác.</li>

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

            <li>He answered the question.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã trả lời câu hỏi.</li>

            <li value="2">He answered the question ______.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã trả lời câu hỏi một cách chính xác.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh rằng câu trả lời</span> của anh ấy không chỉ là một câu trả lời mà còn <span className="highlight-255-padding-0-4">là một câu trả lời đúng.</span></p>

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Khác biệt với "right": "<strong>Correctly</strong>" thường được dùng để mô tả cách thức thực hiện một việc gì đó, trong khi "right" chỉ đơn giản là đúng.</li>

          <li className="margin-bottom-20">Quá trình: "<strong>Correctly</strong>" nhấn mạnh sự chính xác trong quá trình thực hiện một hành động.</li>

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