import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Again2(): React.JSX.Element {

  const postId = "Again2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-lap-lai-terms"><mark className="highlight-tertiary-padding-4-8">Tính lặp lại</mark></HashLink></h4>
      
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

        <li value="1"><strong>Again</strong> and <strong>again</strong>: Lặp đi lặp lại /əˈɡen ænd əˈɡen/</li>
        <li className="list-none margin-bottom-20">He made the same mistake <strong>again</strong> and <strong>again</strong>. (Anh ấy lặp lại cùng một sai lầm nhiều lần.)</li>

        <li value="2">Once <strong>again</strong>: Một lần nữa /wʌns əˈɡen/</li>
        <li className="list-none margin-bottom-20">Let's try that once <strong>again</strong>. (Hãy thử lại một lần nữa.)</li>

        <li value="3">Time and <strong>again</strong>: Nhiều lần /taɪm ænd əˈɡen/</li>
        <li className="list-none margin-bottom-20">I've told you time and <strong>again</strong> not to do that. (Tôi đã nói với bạn nhiều lần rồi đấy.)</li>

        <li value="4">Over and over <strong>again</strong>: Lặp đi lặp lại nhiều lần /ˈoʊvər ænd ˈoʊvər əˈɡen/</li>
        <li className="list-none margin-bottom-20">She played the same song over and over <strong>again</strong>. (Cô ấy nghe đi nghe lại cùng một bài hát.)</li>

        <li value="5">All over <strong>again</strong>: Lại từ đầu /ɔːl ˈoʊvər əˈɡen/</li>
        <li className="list-none margin-bottom-20">We had to start all over again. (Chúng ta phải bắt đầu lại từ đầu.)</li>

        <li value="6"><strong>Again</strong> soon: Sớm nữa /əˈɡen suːn/</li>
        <li className="list-none margin-bottom-20">I hope to see you <strong>again</strong> soon. (Tôi hy vọng sẽ gặp lại bạn sớm.)</li>

        <li value="7"><strong>Again</strong>, please: Làm lại, xin vui lòng /əˈɡen pliːz/</li>
        <li className="list-none margin-bottom-20">Could you say that <strong>again</strong>, please? (Bạn có thể nói lại được không?)</li>

        <li value="8">Not <strong>again</strong>: Không phải lần nữa /nɒt əˈɡen/</li>
        <li className="list-none margin-bottom-20">Not <strong>again</strong>! I've lost my keys. (Không phải lần nữa! Tôi lại làm mất chìa khóa rồi.)</li>

        <li value="9">Once more: Một lần nữa /wʌns mɔːr/</li>
        <li className="list-none margin-bottom-20">Could you read that once more? (Bạn có thể đọc lại một lần nữa được không?)</li>

        <li value="10">As before: Như trước đây /æz bɪˈfɔːr/</li>
        <li className="list-none margin-bottom-20">Please do it as before. (Làm ơn làm như trước đây.)</li>

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