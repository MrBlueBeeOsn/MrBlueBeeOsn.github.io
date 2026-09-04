import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GREATly1(): React.JSX.Element {

  const postId = "GREATly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-muc-do-cao"><mark className="highlight-tertiary-padding-4-8">ADverbs: mức độ cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">GREATly
        <sup><Link to="/vocabulary/GREATly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/GREATly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>GREATly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [GREATly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">GREȦT ly</Link>] /ˈɡreɪtli/ ⬤• (2x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Rất, rất nhiều, đáng kể</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>GREATly</strong>" được dùng để nhấn mạnh mức độ cao của một Tính Cơ hoặc Trạng Cơ đi kèm. Nó thể hiện sự tăng cường về mức độ, cường độ hoặc quy mô của một hành động, trạng thái hoặc sự vật.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>i GREATly apPREciated your HELP.</li>
          <li className="margin-bottom-20 list-none">Tôi rất cảm ơn sự giúp đỡ của bạn.</li>

          <li>the PRICE of HOUSing has GREATly inCREASED.</li>
          <li className="list-none">Giá nhà đã tăng rất nhiều.</li>

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

          <li>she is a GREAT SINGer.</li>
          <li className="list-none">Cô ấy là một ca sĩ tuyệt vời.</li>

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

          <li>the reSULTS were sigNIFicantly DIFFERent.</li>
          <li className="margin-bottom-20 list-none">Kết quả khác biệt đáng kể.</li>

          <li>the TASK was conSIDerably MORE DIFficult than exPECTed.</li>
          <li className="list-none">Nhiệm vụ khó hơn nhiều so với dự kiến.</li>

        </ul>

        {/* <Link to="/vocabulary/CLEARly-1">Clearly</Link> */}

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>the TEMPERature has SLIGHTly inCREASED.</li>
          <li className="margin-bottom-20 list-none">Nhiệt độ đã tăng nhẹ.</li>

          <li>the DAMage was MINimally afFECTed.</li>
          <li className="list-none">Thiệt hại bị ảnh hưởng tối thiểu.</li>

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

      <p className="text-indent-whole">Hình dung một cái gì đó rất lớn, rất nhiều hoặc rất đẹp.</p>

        <ul className="list-square">

          <li>the WHALE was GREATly BIGger than <strong>an</strong>yone i had EVer SEEN beFORE.</li>
          <li className="list-none">Con cá voi đó lớn hơn bất kỳ con nào tôi từng thấy trước đây.</li>

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

      <p className="text-indent-whole">Tạo các câu liên quan đến những tình huống cần nhấn mạnh mức độ.</p>

        <ul className="list-square">

          <li>i am GREATly imPRESSED by your WORK.</li>
          <li className="list-none">Tôi rất ấn tượng với công việc của bạn.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các bài viết hoặc cuộc trò chuyện.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li value="1">the BOOK is INTEresting.</li>
            <li className="list-none margin-bottom-20">Cuốn sách thú vị.</li>

            <li value="2">the BOOK is GREATly INTEresting.</li>
            <li className="list-none margin-bottom-20">Cuốn sách thú vị một cách đặc biệt.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh</span> rằng cuốn sách không chỉ thú vị mà còn mang lại <span className="highlight-255-padding-0-4">cảm giác hứng thú rất lớn</span> cho người đọc.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Dùng để nhấn mạnh: Thường được sử dụng để nhấn mạnh mức độ của một Tính Cơ hoặc Trạng Cơ đi kèm.</li>

          <li className="margin-bottom-20">Có thể dùng với nhiều loại từ: Có thể kết hợp với nhiều loại từ khác nhau để tạo ra các câu có ý nghĩa khác nhau.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 6, 2024 · by 💎GEM ·</span>
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