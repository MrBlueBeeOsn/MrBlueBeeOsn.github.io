import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Yes1(): React.JSX.Element {

  const postId = "Yes1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#co-terms"><mark className="highlight-tertiary-padding-4-8">Có</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">yes
        <sup><Link to="/vocabulary/yes-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/yes-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>yes</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Yes</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /jɛs/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">yes</Link>/
                <sup>&nbsp;⬤ (1x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Có</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Dùng để khẳng định một thông tin, đồng ý với một yêu cầu hoặc câu hỏi.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>Are you coming to the party? - <strong>Yes</strong>, I am. (Bạn có đến bữa tiệc không? - Có, tôi sẽ đến.)</li>

          <li>Do you like coffee? - <strong>Yes</strong>, I do. (Bạn có thích cà phê không? - Có, tôi thích.)</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>yes</strong>" vì đây là một từ đơn và rất cơ bản.</li>

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

          <li>Certainly: /ˈsɜːrtnli/ - Chắc chắn (dùng để đồng ý một cách nhấn mạnh)</li>
          <li className="margin-bottom-20 list-none">Can I help you? - Certainly. (Tôi có thể giúp gì cho bạn? - Chắc chắn rồi.)</li>

          <li><Link to="/vocabulary/absolutely-1">Absolutely</Link>: /ˈæbsəluːtli/ - Hoàn toàn</li>
          <li className="list-none">Is that true? - Absolutely. (Điều đó có đúng không? - Hoàn toàn đúng.)</li>

        </ul>

        {/* <Link to="/vocabulary/clearly-1">Clearly</Link> */}

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li><Link to="/vocabulary/no-1">No</Link>: (adv) /noʊ/ - Không</li>
          <li className="margin-bottom-20 list-none">Are you coming to the party? - No, I'm not. (Bạn có đến bữa tiệc không? - Không, tôi không.)</li>

          <li><Link to="/vocabulary/definitely-1">Definitely</Link> <Link to="/vocabulary/not-1">not</Link>: (adv) /ˈdefɪnətli nɒt/ - Chắc chắn không</li>
          <li className="list-none">Are you going to quit your job? - Definitely not. (Bạn có định nghỉ việc không? - Chắc chắn là không.)</li>

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

          <li><strong>Yes</strong>. Vâng.</li>
          <li className="list-none">(Cách nói thông dụng nhất.)</li>

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

      <p className="text-indent-whole">Tạo nhiều câu hỏi và câu trả lời với "<strong>yes</strong>" trong các tình huống khác nhau.</p>

        <ul className="list-square">

          <li className="list-none">Would you like some coffee? (Bạn có muốn uống cà phê không?)</li>
          <li><strong>Yes</strong>, please. (Vâng, làm ơn.)</li>
          <li><Link to="/vocabulary/absolutely-1">Absolutely</Link>! (Hoàn toàn!)</li>

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

      <p className="text-indent-whole">Thường xuyên sử dụng "<strong>yes</strong>" trong giao tiếp hàng ngày.

</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa certainly và <strong>yes</strong>):</p>

          <ol>

            <li>Certainly: Là câu trả lời nhấn mạnh, thể hiện sự sẵn lòng hoặc đồng ý một cách nhiệt tình.</li>
            <li className="list-none margin-bottom-20">Can I borrow your pen? - Certainly. (Tôi có thể mượn bút của bạn không? - Chắc chắn rồi.)</li>

            <li value="2"><strong>Yes</strong>: Là câu trả lời đơn giản cho một câu hỏi.</li>
            <li className="list-none margin-bottom-20">Do you like chocolate? - <strong>Yes</strong>. (Bạn có thích sô cô la không? - Có.)</li>

          </ol>

          {/* <ol>

            <li></li>

            <li className="margin-bottom-20"></li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: </p>

      </div> */}

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Yes</strong>" thường đứng một mình để trả lời câu hỏi.</li>

          <li className="margin-bottom-20">"<strong>Yes</strong>" cũng có thể được dùng để nhấn mạnh sự đồng ý.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>December 28, 2024 · by 💎Gem ·</span>
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