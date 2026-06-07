import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Basically1(): React.JSX.Element {

  const postId = "Basically1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#ve-co-ban-terms"><mark className="highlight-tertiary-padding-4-8">Về cơ bản</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">basically
        <sup><Link to="/vocabulary/basically-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/basically-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>basically</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Basically</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈbeɪsɪkli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">bāsica̛lly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Về cơ bản, nói một cách đơn giản</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>basically</strong>" được sử dụng để nhấn mạnh ý chính hoặc điểm quan trọng nhất của một vấn đề, một ý tưởng hoặc một tình huống. Nó có nghĩa là "nói một cách đơn giản" hoặc "về cơ bản".</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>______, I just want to relax.</li>
          <li className="margin-bottom-20 list-none">Về cơ bản, tôi chỉ muốn thư giãn.</li>

          <li>______, the problem is that we don't have enough money.</li>
          <li className="list-none">Về cơ bản, vấn đề là chúng ta không đủ tiền.</li>

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

          <li>Basic (adj) /ˈbeɪsɪk/</li>
          <li className="list-none">The ______ idea is very simple.</li>
          <li className="margin-bottom-20 list-none">Ý tưởng cơ bản rất đơn giản.</li>

          <li>Base (n) /beɪs/</li>
          <li className="list-none">The ______ of the pyramid is very wide.</li>
          <li className="list-none">Đáy của kim tự tháp rất rộng.</li>

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

          <li>Essentially /ɪˈsenʃəli/</li>
          <li className="list-none">______, it's a question of money.</li>
          <li className="margin-bottom-20 list-none">Về bản chất, đó là một vấn đề về tiền bạc.</li>

          <li>Fundamentally /ˌfʌndəˈmentəli/</li>
          <li className="list-none">______, I agree with you.</li>
          <li className="list-none">Về cơ bản, tôi đồng ý với bạn.</li>

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

          <li>Specifically /spəˈsɪfɪkli/</li>
          <li className="list-none">______, I need you to finish this report by Friday.</li>
          <li className="margin-bottom-20 list-none">Cụ thể, tôi cần bạn hoàn thành báo cáo này trước thứ Sáu.</li>

          <li><Link to="/vocabulary/precisely-1">Precisely</Link> /prɪˈsaɪsli/</li>
          <li className="list-none">______, that's what I mean.</li>
          <li className="list-none">Chính xác, đó là điều tôi muốn nói.</li>

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

      <p className="text-indent-whole">Hình dung một tòa nhà với một nền móng vững chắc.</p>

        <ul className="list-square">

          <li>The building is ______ built on a strong foundation.</li>
          <li className="list-none">Tòa nhà cơ bản được xây dựng trên một nền móng vững chắc.</li>

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

      <p className="text-indent-whole">Tạo các câu ví dụ liên quan đến các tình huống hàng ngày hoặc các cuộc trò chuyện.</p>

        <ul className="list-square">

          <li>______, I just need some time to think.</li>
          <li className="list-none">Về cơ bản, tôi chỉ cần một chút thời gian để suy nghĩ.</li>

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

      <p className=" margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại hoặc khi viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>I like to eat vegetables.</li>
            <li className="list-none margin-bottom-20">Tôi thích ăn rau.</li>

            <li value="2">______, I like to eat healthy food.</li>
            <li className="list-none margin-bottom-20">Về cơ bản, tôi thích ăn thức ăn lành mạnh.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>basically</strong>" để tổng kết một cách rộng hơn về sở thích ăn uống của người nói.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Rút gọn: "<strong>Basically</strong>" thường được dùng để rút gọn một ý tưởng phức tạp thành một ý tưởng đơn giản hơn.</li>

          <li className="margin-bottom-20">Tập trung vào ý chính: Nó giúp người nghe hoặc người đọc dễ dàng nắm bắt được ý chính.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 8, 2024 · by 💎Gem ·</span>
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