import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Again2(): React.JSX.Element {

  const postId = "Again2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-lap-lai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">again
        <sup>
          <Link to="/vocabulary/again-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/again-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>again</strong>" (lại) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Again&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /əˈɡen/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">a̛gā̄in</Link>/ 
              
              <sup>&nbsp;•⬤ (2x)</sup>
              
            </span>
              
            &nbsp;là một trạng từ chỉ tần suất, thường được dùng để diễn tả một hành động được lặp lại, hoặc một tình huống tương tự xảy ra một lần nữa.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Again <strong>and</strong> again /ænd/</li>
        <li className="list-none">He made the same mistake ______.</li>
        <li className="list-none margin-bottom-20">Anh ấy lặp lại cùng một sai lầm nhiều lần.</li>

        <li value="2"><strong>Once</strong> again /wʌns/</li>
        <li className="list-none">Let's try that ______.</li>
        <li className="list-none margin-bottom-20">Hãy thử lại một lần nữa.</li>

        <li value="3"><strong>Time and</strong> again /taɪm ænd/</li>
        <li className="list-none">I've told you ______ not to do that.</li>
        <li className="list-none margin-bottom-20">Tôi đã nói với bạn nhiều lần rồi đấy.</li>

        <li value="4"><strong>Over and over</strong> again /ˈoʊvər ænd ˈoʊvər/</li>
        <li className="list-none">She played the same song ______.</li>
        <li className="list-none margin-bottom-20">Cô ấy nghe đi nghe lại cùng một bài hát.</li>

        <li value="5"><strong>All over</strong> again /ɔːl ˈoʊvər/</li>
        <li className="list-none">We had to start ______.</li>
        <li className="list-none margin-bottom-20">Chúng ta phải bắt đầu lại từ đầu.</li>

        <li value="6">Again <strong>soon</strong> /suːn/</li>
        <li className="list-none">I hope to see you ______.</li>
        <li className="list-none margin-bottom-20">Tôi hy vọng sẽ gặp lại bạn sớm.</li>

        <li value="7">Again, <strong>please</strong> /pliːz/</li>
        <li className="list-none">Could you say that ______?</li>
        <li className="list-none margin-bottom-20">Bạn có thể nói lại được không?</li>

        <li value="8"><strong>Not</strong> again /nɒt/</li>
        <li className="list-none">______! I've lost my keys.</li>
        <li className="list-none margin-bottom-20">Không phải lần nữa! Tôi lại làm mất chìa khóa rồi.</li>

        <li value="9"><strong>Once more</strong> /wʌns mɔːr/</li>
        <li className="list-none">Could you read that ______?</li>
        <li className="list-none margin-bottom-20">Bạn có thể đọc lại một lần nữa được không?</li>

        <li value="10"><strong>As before</strong> /æz bɪˈfɔːr/</li>
        <li className="list-none">Please do it ______.</li>
        <li className="list-none margin-bottom-20">Làm ơn làm như trước đây.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Again</strong>" có thể được sử dụng để nhấn mạnh sự lặp lại, sự thất vọng, hoặc một mong muốn.</li>

          <li className="margin-bottom-20">Ý nghĩa chính xác của cụm từ phụ thuộc vào ngữ cảnh sử dụng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này sẽ giúp bạn hiểu rõ hơn về cách sử dụng từ "<strong>again</strong>" trong tiếng Anh! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 14, 2024 · by 💎Gem ·</span>
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