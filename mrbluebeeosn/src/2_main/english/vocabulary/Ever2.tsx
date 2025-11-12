import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Ever2(): React.JSX.Element {

  const postId = "Ever2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#lien-tuc-terms"><mark className="highlight-tertiary-padding-4-8">Liên tục</mark></HashLink></h4>
      
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

        <li value="1"><strong>Ever</strong> since: Kể từ khi mà /ˈevər sɪns/</li>
        <li className="list-none margin-bottom-20"><strong>Ever</strong> since I was a child, I've loved to read. (Từ khi còn nhỏ, tôi đã thích đọc sách.)</li>

        <li value="2">As <strong>ever</strong>: Như thường lệ /æz ˈevər/</li>
        <li className="list-none margin-bottom-20">He is, as <strong>ever</strong>, late for the meeting. (Anh ấy, như thường lệ, lại đến muộn cuộc họp.)</li>

        <li value="3"><strong>Ever</strong> after: Mãi mãi về sau /ˈevər ˈɑːftər/</li>
        <li className="list-none margin-bottom-20">They lived happily <strong>ever</strong> after. (Họ sống hạnh phúc mãi mãi về sau.)</li>

        <li value="4"><strong>Ever</strong> so: Rất là /ˈevər səʊ/</li>
        <li className="list-none margin-bottom-20">She is <strong>ever</strong> so kind. (Cô ấy rất tốt bụng.)</li>

        <li value="5">Have you <strong>ever</strong>: Bạn đã từng... /hæv juː ˈevər/</li>
        <li className="list-none margin-bottom-20">Have you <strong>ever</strong> been to Paris? (Bạn đã từng đến Paris chưa?)</li>

        <li value="6">If <strong>ever</strong>: Nếu có khi nào /ɪf ˈevər/</li>
        <li className="list-none margin-bottom-20">If <strong>ever</strong> there was a time to be brave, it is now. (Nếu có khi nào cần can đảm, thì đó là bây giờ.)</li>

        <li value="7">Never <strong>ever</strong>: Không bao giờ, tuyệt đối không /ˈnevər ˈevər/</li>
        <li className="list-none margin-bottom-20">I will never <strong>ever</strong> forget that day. (Tôi sẽ không bao giờ quên ngày hôm đó.)</li>

        <li value="8">For <strong>ever</strong> and <strong>ever</strong>: Mãi mãi /fər ˈevər ænd ˈevər/</li>
        <li className="list-none margin-bottom-20">I will love you for <strong>ever</strong> and <strong>ever</strong>. (Anh sẽ yêu em mãi mãi.)</li>

        <li value="9">Happily <strong>ever</strong> after: Hạnh phúc mãi mãi /ˈhæpɪli ˈevər ˈɑːftər/</li>
        <li className="list-none margin-bottom-20">They lived happily <strong>ever</strong> after. (Họ sống hạnh phúc mãi mãi.)</li>

        <li value="10"><strong>Ever</strong> and anon: Thỉnh thoảng /ˈevər ænd əˈnɒn/</li>
        <li className="list-none margin-bottom-20"><strong>Ever</strong> and anon, a bird would sing. (Thỉnh thoảng, một con chim lại hót.)</li>

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