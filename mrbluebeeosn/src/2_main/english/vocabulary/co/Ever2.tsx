import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function EVer2(): React.JSX.Element {

  const postId = "EVer2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-co"><mark className="highlight-tertiary-padding-4-8">ADverbs: có</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">EVer
        <sup>
          <Link to="/vocabulary/EVer-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/EVer-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#since">since</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#as">as</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#AFter">AFter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SO-KIND">SO KIND</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#been-to">been to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#there-was-a-TIME">there was a TIME</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#forGET">forGET</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#and-EVer">and EVer</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#AFter2">AFter</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#and-aNON">and aNON</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>EVer</strong>" (bao giờ) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              EVer \<Link to="/pronunciation/5-vowel-system">EV e̛r</Link>\ /ˈev.ər/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;thường được dùng để nhấn mạnh tính chất bao quát, trải nghiệm, hoặc sự so sánh cao nhất.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="since">EVer [since] i was a CHILD, i've LOVED to READ.</li>
        <li className="list-none margin-bottom-20">Mãi [từ khi] tôi còn là một đứa trẻ, tôi đã thích đọc sách.</li>

        <li value="2" id="as">he is, [as] EVer, LATE for the MEETing.</li>
        <li className="list-none margin-bottom-20">Anh ấy, [như] thường lệ, lại đến muộn cuộc họp.</li>

        <li value="3" id="AFter">they LIVED HAPpily EVer [AFter].</li>
        <li className="list-none margin-bottom-20">Họ sống hạnh phúc mãi mãi [về sau].</li>

        <li value="4" id="SO-KIND">she is EVer [SO KIND].</li>
        <li className="list-none margin-bottom-20">Cô ấy lúc nào cũng [rất tốt bụng].</li>

        <li value="5" id="been-to">have you EVer [been to] PARis?</li>
        <li className="list-none margin-bottom-20">Bạn đã từng [đến] Paris chưa?</li>

        <li value="6" id="there-was-a-TIME">if EVer [there was a TIME] to be BRAVE, it is NOW.</li>
        <li className="list-none margin-bottom-20">Nếu [có khi nào] cần can đảm, thì đó là bây giờ.</li>

        <li value="7" id="forGET">i will NEVer EVer [forGET] that DAY.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ không bao giờ, bao giờ [quên] ngày hôm đó.</li>

        <li value="8" id="and-EVer">i will LOVE you for EVer [and EVer].</li>
        <li className="list-none margin-bottom-20">Anh sẽ yêu em [mãi mãi].</li>

        <li value="9" id="AFter2">they LIVED HAPpily EVer [AFter].</li>
        <li className="list-none margin-bottom-20">Họ sống hạnh phúc mãi [về sau].</li>

        <li value="10" id="and-aNON">EVer [and aNON], a BIRD would SING.</li>
        <li className="list-none margin-bottom-20">Luôn [và thoáng chốc], một con chim lại hót.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>EVer</strong>" thường được sử dụng trong câu hỏi, câu phủ định và câu so sánh.</li>

          <li className="margin-bottom-20">Ý nghĩa chính xác của cụm từ phụ thuộc vào ngữ cảnh sử dụng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 12, 2024 · by 💎GEM ·</span>
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