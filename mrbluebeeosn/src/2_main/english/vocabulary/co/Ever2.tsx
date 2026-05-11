import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Ever2(): React.JSX.Element {

  const postId = "Ever2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#co-terms"><mark className="highlight-tertiary-padding-4-8">Có</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ever
        <sup>
          <Link to="/vocabulary/ever-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/ever-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>ever</strong>" (bao giờ) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Ever&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈev.ər/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">eve̛r</Link>/ 
              
              <sup>&nbsp;⬤• (2x)</sup>
              
            </span>
              
            &nbsp;thường được dùng để nhấn mạnh tính chất bao quát, trải nghiệm, hoặc sự so sánh cao nhất.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Ever <strong>since</strong> /sɪns/</li>
        <li className="list-none">______ I was a child, I've loved to read.</li>
        <li className="list-none margin-bottom-20">Từ khi còn nhỏ, tôi đã thích đọc sách.</li>

        <li value="2"><strong>As</strong> ever /æz/</li>
        <li className="list-none">He is, ______, late for the meeting.</li>
        <li className="list-none margin-bottom-20">Anh ấy, như thường lệ, lại đến muộn cuộc họp.</li>

        <li value="3">Ever <strong>after</strong> /ˈɑːftər/</li>
        <li className="list-none">They lived happily ______.</li>
        <li className="list-none margin-bottom-20">Họ sống hạnh phúc mãi mãi về sau.</li>

        <li value="4">Ever <strong>so</strong> /səʊ/</li>
        <li className="list-none">She is ______ kind.</li>
        <li className="list-none margin-bottom-20">Cô ấy rất tốt bụng.</li>

        <li value="5"><strong>Have you</strong> ever /hæv juː/</li>
        <li className="list-none">______ been to Paris?</li>
        <li className="list-none margin-bottom-20">Bạn đã từng đến Paris chưa?</li>

        <li value="6"><strong>If</strong> ever /ɪf/</li>
        <li className="list-none">______ there was a time to be brave, it is now.</li>
        <li className="list-none margin-bottom-20">Nếu có khi nào cần can đảm, thì đó là bây giờ.</li>

        <li value="7"><strong>Never</strong> ever /ˈnev.ər/</li>
        <li className="list-none">I will ______ forget that day.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ không bao giờ quên ngày hôm đó.</li>

        <li value="8"><strong>For</strong> ever <strong>and</strong> ever /fər ænd/</li>
        <li className="list-none">I will love you ______.</li>
        <li className="list-none margin-bottom-20">Anh sẽ yêu em mãi mãi.</li>

        <li value="9"><strong>Happily</strong> ever <strong>after</strong> /ˈhæpɪli ˈɑːftər/</li>
        <li className="list-none">They lived ______.</li>
        <li className="list-none margin-bottom-20">Họ sống hạnh phúc mãi mãi.</li>

        <li value="10">Ever <strong>and anon</strong> /ænd əˈnɒn/</li>
        <li className="list-none">______, a bird would sing.</li>
        <li className="list-none margin-bottom-20">Thỉnh thoảng, một con chim lại hót.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Ever</strong>" thường được sử dụng trong câu hỏi, câu phủ định và câu so sánh.</li>

          <li className="margin-bottom-20">Ý nghĩa chính xác của cụm từ phụ thuộc vào ngữ cảnh sử dụng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 12, 2024 · by 💎Gem ·</span>
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