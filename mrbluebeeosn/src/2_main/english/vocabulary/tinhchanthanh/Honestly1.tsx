import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Honestly1(): React.JSX.Element {

  const postId = "Honestly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-chan-thanh-terms"><mark className="highlight-tertiary-padding-4-8">Tính chân thành</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">honestly
        <sup><Link to="/vocabulary/honestly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/honestly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>honestly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Honestly</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈɒnɪstli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">honėstly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Một cách trung thực, thành thật</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>honestly</strong>" được dùng để nhấn mạnh rằng một điều gì đó được nói ra là hoàn toàn đúng sự thật, không có sự gian dối hoặc phóng đại. Nó thường được dùng để thể hiện sự chân thành, thẳng thắn của người nói.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>______, I don't know the answer.</li>
          <li className="margin-bottom-20 list-none">Thật sự, tôi không biết câu trả lời.</li>

          <li>______, I think you should reconsider your decision.</li>
          <li className="list-none">Thành thật mà nói, tôi nghĩ bạn nên xem xét lại quyết định của mình.</li>

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

          <li>Honest (adj) /ˈɒnɪst/</li>
          <li className="list-none">He is an ______ man.</li>
          <li className="margin-bottom-20 list-none">Anh ấy là một người đàn ông trung thực.</li>

          <li>Honesty (n) /ˈɒnəsti/</li>
          <li className="list-none">______ is the best policy.</li>
          <li className="list-none">Trung thực là chính sách tốt nhất.</li>

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

          <li><Link to="/vocabulary/truly-1">Truly</Link> /ˈtruːli/</li>
          <li className="list-none">I ______ believe in you.</li>
          <li className="margin-bottom-20 list-none">Tôi thực sự tin tưởng bạn.</li>

          <li><Link to="/vocabulary/sincerely-1">Sincerely</Link> /sɪnˈsɪərli/</li>
          <li className="list-none">I ______ apologize for my mistake.</li>
          <li className="list-none">Tôi xin lỗi chân thành vì lỗi lầm của mình.</li>

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

          <li>Dishonestly /dɪsˈɒnɪstli/</li>
          <li className="list-none">He lied ______ about his qualifications.</li>
          <li className="margin-bottom-20 list-none">Anh ta đã nói dối một cách không trung thực về trình độ của mình.</li>

          <li>Deceitfully /dɪˈsiːtfəli/</li>
          <li className="list-none">She deceived him ______.</li>
          <li className="list-none">Cô ấy đã lừa dối anh ta một cách xảo quyệt.</li>

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

      <p className="text-indent-whole">Hình dung một người đang đặt tay lên trái tim và nói một cách chân thành.</p>

        <ul className="list-square">

          <li>______, I feel so grateful.</li>
          <li className="list-none">Thật lòng mà nói, tôi cảm thấy rất biết ơn.</li>

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

      <p className="text-indent-whole">Tạo các câu ví dụ khác nhau với từ "<strong>honestly</strong>" trong nhiều ngữ cảnh.</p>

        <ul className="list-square">

          {/* <li></li>
          <li className="margin-bottom-20 list-none"></li> */}

          <li>______, I don't care what you think.</li>
          <li className="list-none">Thật sự, tôi không quan tâm bạn nghĩ gì.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại và bài viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>I like pizza.</li>
            <li className="list-none margin-bottom-20">Tôi thích pizza.</li>

            <li value="2">______, I love pizza. It's my favorite food.</li>
            <li className="list-none margin-bottom-20">Thật sự, tôi yêu pizza. Đó là món ăn yêu thích của tôi.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>honestly</strong>" để <span className="highlight-255-padding-0-4">nhấn mạnh mức độ yêu thích</span> của người nói đối với pizza.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Nhấn mạnh sự chân thật: "<strong>Honestly</strong>" thường được dùng để nhấn mạnh rằng người nói đang nói sự thật.</li>

          <li>Câu hỏi tu từ: Đôi khi, "<strong>honestly</strong>" được dùng trong câu hỏi tu từ để thể hiện sự ngạc nhiên hoặc không đồng tình.</li>

          <li>______, how could you do that?</li>
          <li className="list-none margin-bottom-20">Thật sự, làm sao bạn có thể làm như vậy được?</li>

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