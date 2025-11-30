import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Happily1(): React.JSX.Element {

  const postId = "Happily1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-tich-cuc-terms"><mark className="highlight-tertiary-padding-4-8">Tính tích cực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">happily
        <sup><Link to="/vocabulary/happily-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/happily-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>happily</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Happily</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈhæpəli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">happi̛ly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Một cách hạnh phúc</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>happily</strong>" được dùng để mô tả một hành động, trạng thái hoặc tình huống diễn ra trong niềm vui, sự hài lòng và mãn nguyện. Nó thể hiện cảm xúc tích cực của con người.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>They lived <strong>happily</strong> ever after. (Họ sống hạnh phúc mãi mãi.)</li>

          <li>She smiled <strong>happily</strong>. (Cô ấy cười một cách hạnh phúc.)</li>

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

          <li>Happy (adj): hạnh phúc /ˈhæpi/</li>
          <li className="margin-bottom-20 list-none">I am very happy to see you. (Tôi rất vui khi gặp bạn.)</li>

          <li>Happiness (n): hạnh phúc /ˈhæpinəs/</li>
          <li className="list-none">Happiness is the key to a good life. (Hạnh phúc là chìa khóa cho một cuộc sống tốt đẹp.)</li>

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

          <li>Joyfully: Một cách vui mừng /ˈdʒɔɪfəli/</li>
          <li className="margin-bottom-20 list-none">The children played joyfully. (Những đứa trẻ chơi một cách vui mừng.)</li>

          <li>Gladly: Một cách vui vẻ /ˈɡlædli/</li>
          <li className="list-none">I will gladly help you. (Tôi rất vui lòng giúp bạn.)</li>

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

          <li>Sadly: Một cách buồn bã /ˈsædli/</li>
          <li className="margin-bottom-20 list-none">Sadly, he lost his job. (Buồn thay, anh ấy mất việc.)</li>

          <li>Unhappily: Một cách bất hạnh /ʌnˈhæpɪli/</li>
          <li className="list-none">She lived unhappily ever after. (Cô ấy sống bất hạnh mãi mãi.)</li>

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

      <p className="text-indent-whole">Hình dung một người đang cười và ôm một chú chó con.</p>

        <ul className="list-square">

          <li>She is <strong>happily</strong> cuddling a puppy.</li>
          <li className="list-none">(Cô ấy đang ôm một chú chó con một cách hạnh phúc.)</li>

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

      <p className="text-indent-whole">Tự tạo các câu ví dụ khác nhau với từ "<strong>happily</strong>" để diễn tả những khoảnh khắc hạnh phúc trong cuộc sống.</p>

        <ul className="list-square">

          <li>She <strong>happily</strong> graduated from university.</li>
          <li className="list-none">(Cô ấy đã tốt nghiệp đại học một cách vui vẻ.)</li>

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

      <p className="text-indent-whole">Thường xuyên sử dụng từ này trong các cuộc hội thoại và bài viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>She went to work. (Cô ấy đi làm.)</li>

            <li className="margin-bottom-20">She went to work <strong>happily</strong>. (Cô ấy đi làm một cách vui vẻ.)</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>happily</strong>" để <span className="highlight-255-padding-0-4">nhấn mạnh</span> rằng cô ấy cảm thấy <span className="highlight-255-padding-0-4">vui vẻ khi đi làm</span>, không chỉ đơn thuần là đi làm.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Cảm xúc tích cực: "<strong>Happily</strong>" luôn liên quan đến những cảm xúc tích cực như vui vẻ, hài lòng.</li>

          <li className="margin-bottom-20">Trạng thái tâm lý: Nó thường được dùng để mô tả trạng thái tâm lý của một người trong một tình huống cụ thể.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎Gem ·</span>
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