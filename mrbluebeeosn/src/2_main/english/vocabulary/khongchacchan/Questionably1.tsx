import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Questionably1(): React.JSX.Element {

  const postId = "Questionably1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">Không chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">questionably
        <sup><Link to="/vocabulary/questionably-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/questionably-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>questionably</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Questionably</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈkwɛstʃənəbli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">questiơna̛bly</Link>/
                <sup>&nbsp;⬤••• (4x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Một cách đáng ngờ, không chắc chắn</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>questionably</strong>" được sử dụng để diễn tả một điều gì đó không chắc chắn, gây nghi ngờ hoặc có thể không đúng sự thật. Nó thường được dùng để thể hiện sự hoài nghi hoặc không đồng ý về một vấn đề nào đó.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>His story sounds ______ true.</li>
          <li className="margin-bottom-20 list-none">Câu chuyện của anh ta nghe có vẻ không chắc chắn là đúng.</li>

          <li>The data is ______ accurate.</li>
          <li className="list-none">Dữ liệu này có vẻ không chính xác lắm.</li>

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

          <li>Question (v) /ˈkwɛstʃən/</li>
          <li className="list-none">I ______ his motives.</li>
          <li className="margin-bottom-20 list-none">Tôi nghi ngờ động cơ của anh ta.</li>

          <li>Question (n) /ˈkwɛstʃən/</li>
          <li className="list-none">I have a ______ for you.</li>
          <li className="margin-bottom-20 list-none">Tôi có một câu hỏi cho bạn.</li>

          <li>Questionable (adj) /ˈkwɛstʃənəbl/</li>
          <li className="list-none">His actions are ______.</li>
          <li className="list-none">Hành động của anh ta rất đáng ngờ.</li>

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

          <li>Doubtfully /ˈdaʊtfəli/</li>
          <li className="list-none">He looked at me ______.</li>
          <li className="margin-bottom-20 list-none">Anh ta nhìn tôi một cách nghi ngờ.</li>

          <li>Suspiciously /səˈspɪʃəsli/</li>
          <li className="list-none">She glanced at him ______.</li>
          <li className="list-none">Cô ấy liếc nhìn anh ta một cách nghi ngờ.</li>

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

          <li><Link to="/vocabulary/definitely-1">Definitely</Link> /ˈdɛfɪnɪtli/</li>
          <li className="list-none">I ______ know the answer.</li>
          <li className="margin-bottom-20 list-none">Tôi chắc chắn biết câu trả lời.</li>

          <li>Certainly /ˈsɜːrtnli/</li>
          <li className="list-none">______, I will help you.</li>
          <li className="list-none">Chắc chắn rồi, tôi sẽ giúp bạn.</li>

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

      <p className="text-indent-whole">Hình dung một dấu chấm hỏi lớn hoặc một biểu tượng nghi ngờ.</p>

        <ul className="list-square">

          <li>The quality of the product is ______ high.</li>
          <li className="list-none">Chất lượng của sản phẩm này đáng ngờ.</li>

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

      <p className="text-indent-whole">Tạo các câu liên quan đến các tình huống gây nghi ngờ.</p>

        <ul className="list-square">

          <li>The evidence is ______ reliable.</li>
          <li className="list-none">Bằng chứng này có vẻ không đáng tin cậy lắm.</li>

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

            <li>He is a good person.</li>
            <li className="list-none margin-bottom-20">Anh ấy là một người tốt.</li>

            <li value="2">His motives are ______ good.</li>
            <li className="list-none margin-bottom-20">Động cơ của anh ấy có vẻ không tốt lắm.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">tạo ra sự nghi ngờ về động cơ</span> của người đó, trong khi câu đầu tiên khẳng định một cách chắc chắn.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Tạo sự hoài nghi: Tạo ra một cảm giác hoài nghi hoặc không tin tưởng.</li>

          <li className="margin-bottom-20">Không chắc chắn: Thể hiện sự không chắc chắn về tính xác thực hoặc độ tin cậy của một điều gì đó.</li>

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