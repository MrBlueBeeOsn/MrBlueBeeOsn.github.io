import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function YES1(): React.JSX.Element {

  const postId = "YES1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-co"><mark className="highlight-tertiary-padding-4-8">ADverbs: có</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">YES
        <sup><Link to="/vocabulary/YES-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/YES-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>YES</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [YES][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">YES</Link>] /jɛs/ ⬤ (1x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Có</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Dùng để khẳng định một thông tin, đồng ý với một yêu cầu hoặc câu hỏi.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>are you COMing to the PARTy? - YES, i AM.</li>
          <li className="margin-bottom-20 list-none">Bạn có đến bữa tiệc không? - Có, tôi sẽ đến.</li>

          <li>do you LIKE COFfee? - YES, i DO.</li>
          <li className="list-none">Bạn có thích cà phê không? - Có, tôi thích.</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>YES</strong>" vì đây là một từ đơn và rất cơ bản.</li>

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

          <li>can i HELP you? - <Link to="/vocabulary/CERtainly-1">CERtainly</Link>.</li>
          <li className="margin-bottom-20 list-none">Tôi có thể giúp gì cho bạn? - Chắc chắn rồi.</li>

          <li>is that TRUE? - <Link to="/vocabulary/absoLUTEly-1">absoLUTEly</Link>.</li>
          <li className="list-none">Điều đó có đúng không? - Hoàn toàn đúng.</li>

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

          <li>are you COMing to the PARTy? - <Link to="/vocabulary/NO-1">NO</Link>, i'm <Link to="/vocabulary/NOT-1">NOT</Link>.</li>
          <li className="margin-bottom-20 list-none">Bạn có đến bữa tiệc không? - Không, tôi không.</li>

          <li>are you GOing to QUIT your JOB? - <Link to="/vocabulary/DEFinitely-1">DEFinitely</Link> <Link to="/vocabulary/NOT-1">NOT</Link>.</li>
          <li className="list-none">Bạn có định nghỉ việc không? - Chắc chắn là không.</li>

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

      <p className="text-indent-whole">Hình dung một cái gật đầu để biểu thị sự đồng ý.</p>

        <ul className="list-square">

          <li>YES.</li>
          <li className="list-none"> Vâng. (Cách nói thông dụng nhất.)</li>

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

      <p className="text-indent-whole">Tạo nhiều câu hỏi và câu trả lời với "<strong>YES</strong>" trong các tình huống khác nhau.</p>

        <ul className="list-square">

          <li className="list-none">would you LIKE some COFfee?</li>
          <li className="margin-bottom-20 list-none">Bạn có muốn uống cà phê không?</li>

          <li>YES, PLEASE.</li>
          <li className="margin-bottom-20 list-none">Vâng, làm ơn.</li>

          <li><Link to="/vocabulary/absoLUTEly-1">absoLUTEly</Link>!</li>
          <li className="list-none">Hoàn toàn!</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng "<strong>YES</strong>" trong giao tiếp hàng ngày.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa CERtainly và <strong>YES</strong>):</p>

          <ol>

            <li value="1">can i BORrow your PEN? - <Link to="/vocabulary/CERtainly-1">CERtainly</Link>.</li>
            <li className="list-none">Tôi có thể mượn bút của bạn không? - Chắc chắn rồi.</li>
            <li className="list-none margin-bottom-20">Là câu trả lời nhấn mạnh, thể hiện sự sẵn lòng hoặc đồng ý một cách nhiệt tình.</li>

            <li value="2">do you LIKE CHOCOLate? - YES.</li>
            <li className="list-none">Bạn có thích sô cô la không? - Có.</li>
            <li className="list-none">Là câu trả lời đơn giản cho một câu hỏi.</li>

          </ol>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>YES</strong>" thường đứng một mình để trả lời câu hỏi.</li>

          <li className="margin-bottom-20">"<strong>YES</strong>" cũng có thể được dùng để nhấn mạnh sự đồng ý.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>December 28, 2024 · by 💎GEM ·</span>
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