import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Exactly1(): React.JSX.Element {

  const postId = "Exactly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-chinh-xac-terms"><mark className="highlight-tertiary-padding-4-8">Tính chính xác</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">exactly
        <sup><Link to="/vocabulary/exactly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/exactly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng tìm hiểu về từ "<strong>exactly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Exactly</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ɪɡˈzæktli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ėxactly</Link>/
                <sup>&nbsp;•⬤• (3x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Chính xác, đúng đắn</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div> 

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>exactly</strong>" dùng để nhấn mạnh sự chính xác, hoàn toàn trùng khớp với một điều gì đó. Nó có thể được sử dụng để xác nhận, đồng ý, hoặc để làm rõ một thông tin.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>That's ______ what I was thinking.</li>
          <li className="margin-bottom-20 list-none">Đúng là điều tôi đang nghĩ.</li>

          <li>She arrived at ______ 3 o'clock.</li>
          <li className="list-none">Cô ấy đến đúng 3 giờ.</li>

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

          <li>Exact (adj) /ɪɡˈzækt/</li>
          <li className="list-none">The ______ time is 2:15 PM.</li>
          <li className="list-none">Thời gian chính xác là 2:15 chiều.</li>

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

          <li><Link to="/vocabulary/precisely-1">Precisely</Link> /prɪˈsaɪsli/</li>
          <li className="list-none">That's ______ what I meant.</li>
          <li className="margin-bottom-20 list-none">Đó chính xác là điều tôi muốn nói.</li>

          <li><Link to="/vocabulary/accurately-1">Accurately</Link> /ˈækjərətli/</li>
          <li className="list-none">The measurement was ______ taken.</li>
          <li className="list-none">Đo lường đã được thực hiện chính xác.</li>

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

          <li>Approximately /əˈprɒksɪmətli/</li>
          <li className="list-none">There were ______ 100 people at the party.</li>
          <li className="margin-bottom-20 list-none">Có khoảng 100 người tại bữa tiệc.</li>

          <li>Roughly /ˈrʌfli/</li>
          <li className="list-none">It takes ______ 30 minutes to get there.</li>
          <li className="list-none">Mất khoảng 30 phút để đến đó.</li>

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

      <p className="text-indent-whole">Hình dung một thước đo chính xác đến từng milimet.</p>

        <ul className="list-square">

          <li>This digital caliper can measure the length of this component ______ to the millimeter.</li>
          <li className="list-none">Thước kẹp kỹ thuật số này có thể đo độ dài của thành phần này chính xác đến từng milimet.</li>

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

          <li>Can you repeat that, ______?</li>
          <li className="list-none">Anh/chị có thể lặp lại điều đó, chính xác không?</li>

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

            <li>I'll be there soon.</li>
            <li className="list-none margin-bottom-20">Tôi sẽ đến đó sớm.</li>

            <li value="2">I'll be there at ______ 5 PM.</li>
            <li className="list-none margin-bottom-20">Tôi sẽ đến đó đúng 5 giờ.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>exactly</strong>" để <span className="highlight-255-padding-0-4">nhấn mạnh</span> thời gian đến <span className="highlight-255-padding-0-4">một cách chính xác,</span> không muộn hơn hoặc sớm hơn.</p>

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Sự chính xác tuyệt đối: "<strong>Exactly</strong>" thường được sử dụng để nhấn mạnh sự chính xác tuyệt đối, không có sai lệch.</li>

          <li className="margin-bottom-20">Xác nhận thông tin: Nó có thể được dùng để xác nhận một thông tin đã được đưa ra trước đó.</li>

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