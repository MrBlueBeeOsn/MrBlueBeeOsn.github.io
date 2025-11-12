import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Perhaps1(): React.JSX.Element {

  const postId = "Perhaps1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">Không chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">perhaps
        <sup><Link to="/vocabulary/perhaps-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/perhaps-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>perhaps</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Perhaps</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /pəˈhæps/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">pe̛rhaps</Link>/
                <sup>&nbsp;•⬤ (2x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Có lẽ, có thể</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Diễn tả sự không chắc chắn, khả năng xảy ra một điều gì đó.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li><strong>Perhaps</strong> it will rain tomorrow. (Có lẽ ngày mai trời sẽ mưa.)</li>

          <li><strong>Perhaps</strong> you should call her. (Có lẽ bạn nên gọi cho cô ấy.)</li>

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

          <li>Haphazard: ngẫu nhiên /ˈhæp.hæz.ərd/ - tính từ</li>
          <li className="list-none">His work was haphazard and disorganized. (Công việc của anh ấy rất ngẫu nhiên và lộn xộn.)</li>

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

          <li><Link to="/vocabulary/maybe-1">Maybe</Link>: có lẽ /ˈmeɪ.bi/</li>
          <li className="margin-bottom-20 list-none">Maybe we can go to the park later. (Có lẽ chúng ta có thể đi công viên sau.)</li>

          <li>Possibly: có thể /ˈpɒs.ə.bli/</li>
          <li className="list-none">It is possibly the best book I've ever read. (Có thể đây là cuốn sách hay nhất mà tôi từng đọc.)</li>

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

          <li><Link to="/vocabulary/definitely-1">Definitely</Link>: chắc chắn /ˈdef.ɪ.nət.li/</li>
          <li className="margin-bottom-20 list-none">I definitely want to go to the party. (Tôi chắc chắn muốn đi dự tiệc.)</li>

          <li>Certainly: chắc chắn /ˈsɜː.tən.li/</li>
          <li className="list-none">Certainly, I will help you. (Chắc chắn rồi, tôi sẽ giúp bạn.)</li>

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

      <p className="text-indent-whole">Hãy tưởng tượng một đám mây mù bao phủ một sự kiện trong tương lai.</p>

        <ul className="list-square">

          <li>It's hard to say for sure, but <strong>perhaps</strong> the project will be delayed.</li>
          <li className="list-none">(Thật khó để nói chắc chắn, nhưng có lẽ dự án sẽ bị trì hoãn.)</li>

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

      <p className="text-indent-whole">Thử tạo càng nhiều câu ví dụ càng tốt với "<strong>perhaps</strong>" trong các ngữ cảnh khác nhau.</p>

        <ul className="list-square">

          <li><strong>Perhaps</strong> it will rain tomorrow.</li>
          <li className="list-none">(Có lẽ trời sẽ mưa vào ngày mai.)</li>

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

      <p className="text-indent-whole">Đọc và viết nhiều để củng cố vốn từ vựng và cách sử dụng của "<strong>perhaps</strong>".</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa maybe và <strong>perhaps</strong>):</p>

          <ol>

            <li><Link to="/vocabulary/maybe-1">Maybe</Link>: Thông dụng hơn và thường được sử dụng trong giao tiếp hàng ngày.</li>
            <li className="list-none margin-bottom-20">Maybe we can go out for dinner tonight. (Có lẽ tối nay chúng ta có thể đi ăn tối.)</li>

            <li value="2"><strong>Perhaps</strong>: <span className="highlight-255-padding-0-4">Mang tính trang trọng hơn một chút</span> so với "maybe".</li>
            <li className="list-none margin-bottom-20"><strong>Perhaps</strong> we should reconsider our decision. (Có lẽ chúng ta nên xem xét lại quyết định của mình.)</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Perhaps</strong>" thường đứng ở đầu câu hoặc trước động từ chính.</li>

          <li className="margin-bottom-20">"<strong>Perhaps</strong>" thường được sử dụng để diễn tả sự suy đoán hoặc không chắc chắn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

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