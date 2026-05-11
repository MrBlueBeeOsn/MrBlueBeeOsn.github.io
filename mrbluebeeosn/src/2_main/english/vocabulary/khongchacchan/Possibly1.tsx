import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Possibly1(): React.JSX.Element {

  const postId = "Possibly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">Không chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">possibly
        <sup><Link to="/vocabulary/possibly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/possibly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>possibly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Possibly</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈpɒsəbli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">possi̛bly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Có thể, có lẽ</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>possibly</strong>" được dùng để diễn tả một sự việc có khả năng xảy ra, nhưng không chắc chắn hoàn toàn. Nó thường được sử dụng để thể hiện sự không chắc chắn hoặc để đưa ra một giả định.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>It might ______ rain tomorrow.</li>
          <li className="margin-bottom-20 list-none">Có thể trời sẽ mưa vào ngày mai.</li>

          <li>She could ______ be at home now.</li>
          <li className="list-none">Có thể cô ấy đang ở nhà bây giờ.</li>

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

          <li>Possible (adj) /ˈpɒsəbl/</li>
          <li className="list-none">Is it ______ to finish this work today?</li>
          <li className="margin-bottom-20 list-none">Có thể hoàn thành công việc này ngày hôm nay không?</li>

          <li>Possibility (n) /ˌpɒsəˈbɪləti/</li>
          <li className="list-none">There is a ______ of rain later.</li>
          <li className="list-none">Có khả năng trời mưa sau này.</li>

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

          <li><Link to="/vocabulary/perhaps-1">Perhaps</Link> /pəˈhæps/</li>
          <li className="list-none">______ she is busy.</li>
          <li className="margin-bottom-20 list-none">Có lẽ cô ấy đang bận.</li>

          <li><Link to="/vocabulary/maybe-1">Maybe</Link> /ˈmeɪbi/</li>
          <li className="list-none">______ he will call you later.</li>
          <li className="list-none">Có thể anh ấy sẽ gọi cho bạn sau.</li>

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

          <li><Link to="/vocabulary/definitely-1">Definitely</Link> /ˈdefɪnətli/</li>
          <li className="list-none">I will ______ be there.</li>
          <li className="margin-bottom-20 list-none">Tôi chắc chắn sẽ đến đó.</li>

          <li>Certainly /ˈsɜːrtnli/</li>
          <li className="list-none">That is ______ true.</li>
          <li className="list-none">Điều đó chắc chắn đúng.</li>

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

      <p className="text-indent-whole">Hình dung một đám mây đen trên bầu trời, và bạn đang tự hỏi "Có thể trời sẽ mưa không?".</p>

        <ul className="list-square">

          <li>What do you think? Is it ______ going to rain?</li>
          <li className="list-none">Bạn nghĩ sao? Có thể trời sẽ mưa không?</li>

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

      <p className="text-indent-whole">Tạo các câu thể hiện sự không chắc chắn.</p>

        <ul className="list-square">

          <li>They might ______ miss the train.</li>
          <li className="list-none">Có thể họ sẽ lỡ tàu.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại hoặc bài viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>I will go to the party.</li>
            <li className="list-none margin-bottom-20">Tôi sẽ đi dự tiệc.</li>

            <li value="2">I might ______ go to the party.</li>
            <li className="list-none margin-bottom-20">Có thể tôi sẽ đi dự tiệc.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>possibly</strong>" để <span className="highlight-255-padding-0-4">thể hiện rằng việc đi</span> dự tiệc <span className="highlight-255-padding-0-4">chưa chắc chắn hoàn toàn</span>.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Mức độ chắc chắn: "<strong>Possibly</strong>" thể hiện mức độ chắc chắn thấp hơn so với "<Link to="/vocabulary/definitely-1">definitely</Link>" hoặc "certainly".</li>

          <li className="margin-bottom-20">Dùng trong câu hỏi: Thường được sử dụng trong câu hỏi để hỏi về khả năng xảy ra của một sự việc.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 7, 2024 · by 💎Gem ·</span>
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