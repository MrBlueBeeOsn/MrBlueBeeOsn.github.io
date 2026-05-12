import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Maybe2(): React.JSX.Element {

  const postId = "Maybe2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">Không chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">maybe
        <sup>
          <Link to="/vocabulary/maybe-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/maybe-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>maybe</strong>" (có lẽ) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Maybe&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈmeɪ.bi/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">māybē</Link>/ 
              
              <sup>&nbsp;⬤• (2x)</sup>
              
            </span>
              
            &nbsp;là một trạng từ thường được dùng để diễn tả sự không chắc chắn, khả năng xảy ra một điều gì đó.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Maybe <strong>later</strong> /ˈleɪtər/</li>
        <li className="list-none">Let's meet up for coffee ______.</li>
        <li className="list-none margin-bottom-20">Chúng ta có thể gặp nhau uống cà phê sau nhé.</li>

        <li value="2">Maybe <strong>not</strong> /nɒt/</li>
        <li className="list-none">I'm not sure if I can make it. ______.</li>
        <li className="list-none margin-bottom-20">Tôi không chắc liệu tôi có đến được không. Có lẽ là không.</li>

        <li value="3">Maybe <strong>so</strong> /səʊ/</li>
        <li className="list-none">You're right. ______.</li>
        <li className="list-none margin-bottom-20">Bạn đúng rồi. Có lẽ vậy.</li>

        <li value="4">Maybe <strong>if</strong> /ɪf/</li>
        <li className="list-none">______ I study harder, I can pass the exam.</li>
        <li className="list-none margin-bottom-20">Có lẽ nếu tôi học chăm chỉ hơn, tôi có thể vượt qua kỳ thi.</li>

        <li value="5"><strong>Or</strong> maybe /ɔːr/</li>
        <li className="list-none">I don't know what to do. Should I stay ______ go?</li>
        <li className="list-none margin-bottom-20">Tôi không biết phải làm gì. Tôi nên ở lại hay có lẽ nên đi?</li>

        <li value="6"><strong>Just</strong> maybe /dʒʌst/</li>
        <li className="list-none">______, he'll change his mind.</li>
        <li className="list-none margin-bottom-20">Có lẽ chỉ là anh ấy sẽ thay đổi ý kiến.</li>

        <li value="7">Maybe <strong>someday</strong> /ˈsʌmdeɪ/</li>
        <li className="list-none">______ I'll visit Japan.</li>
        <li className="list-none margin-bottom-20">Có lẽ một ngày nào đó tôi sẽ đến Nhật Bản.</li>

        <li value="8">Maybe <strong>it's because</strong> /ɪts bɪˈkɒz/</li>
        <li className="list-none">______ I'm tired.</li>
        <li className="list-none margin-bottom-20">Có lẽ là vì tôi mệt mỏi.</li>

        <li value="9"><strong>I'm not sure</strong>, maybe /aɪm nɒt ʃʊər/</li>
        <li className="list-none">______ we should leave now.</li>
        <li className="list-none margin-bottom-20">Tôi không chắc, có lẽ chúng ta nên đi bây giờ.</li>

        <li value="10"><strong>I think</strong> maybe /aɪ θɪŋk/</li>
        <li className="list-none">______ she's upset.</li>
        <li className="list-none margin-bottom-20">Tôi nghĩ có lẽ cô ấy đang buồn.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Maybe</strong>" thường đứng ở đầu câu hoặc trước động từ chính.</li>

          <li className="margin-bottom-20">Cùng với các từ khác, "<strong>maybe</strong>" tạo thành nhiều cụm từ khác nhau với ý nghĩa đa dạng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Việc hiểu ngữ cảnh sẽ giúp bạn sử dụng các cụm từ này một cách chính xác. 🐝🐝</p>

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