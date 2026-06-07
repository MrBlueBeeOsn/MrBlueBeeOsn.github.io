import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Maybe1(): React.JSX.Element {

  const postId = "Maybe1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">Không chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">maybe
        <sup><Link to="/vocabulary/maybe-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/maybe-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>maybe</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Maybe</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈmeɪ.bi/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">māybē</Link>/
                <sup>&nbsp;⬤• (2x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

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

          <li>______ it will rain tomorrow.</li>
          <li className="margin-bottom-20 list-none">Có lẽ trời sẽ mưa vào ngày mai.</li>

          <li>______ you should call her.</li>
          <li className="list-none">Có lẽ bạn nên gọi cho cô ấy.</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>maybe</strong>" vì nó là một từ đơn lẻ.</li>

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

          <li><Link to="/vocabulary/perhaps-1">Perhaps</Link> (adv) /pərˈhæps/</li>
          <li className="list-none">______ we can meet later.</li>
          <li className="margin-bottom-20 list-none">Có lẽ chúng ta có thể gặp nhau sau.</li>

          <li><Link to="/vocabulary/possibly-1">Possibly</Link> /ˈpɑː.sə.bli/</li>
          <li className="list-none">It's ______ the best day of my life.</li>
          <li className="list-none">Có thể đây là ngày tuyệt vời nhất trong đời tôi.</li>

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

          <li><Link to="/vocabulary/definitely-1">Definitely</Link> /ˈdef.ən.ət.li/</li>
          <li className="list-none">I ______ want to go.</li>
          <li className="margin-bottom-20 list-none">Tôi chắc chắn muốn đi.</li>

          <li>Certainly /ˈsɜːr.tən.li/</li>
          <li className="list-none">______, you can borrow my book.</li>
          <li className="list-none">Chắc chắn rồi, bạn có thể mượn sách của tôi.</li>

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

      <p className="text-indent-whole">Hình dung một dấu hỏi lớn khi bạn không chắc chắn về điều gì đó.</p>

        <ul className="list-square">

          <li>______ you know the answer?</li>
          <li className="list-none">Có lẽ bạn biết câu trả lời?</li>

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

      <p className="text-indent-whole">Tạo nhiều câu với "<strong>maybe</strong>" trong các tình huống khác nhau, ví dụ khi đưa ra quyết định hoặc dự đoán.</p>

        <ul className="list-square">

          <li>I'm not sure, ______ I'll go to the party.</li>
          <li className="list-none">Tôi không chắc, có lẽ tôi sẽ đến bữa tiệc.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng "<strong>maybe</strong>" trong giao tiếp hàng ngày.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa perhaps và <strong>maybe</strong>):</p>

          <ol>

            <li><Link to="/vocabulary/perhaps-1">Perhaps</Link>: Cách nói lịch sự hơn, thường dùng trong văn viết hoặc các tình huống trang trọng.</li>
            <li className="list-none">______ you could help me with this problem.</li>
            <li className="list-none margin-bottom-20">Có lẽ anh/chị có thể giúp tôi giải quyết vấn đề này.</li>

            <li value="2"><strong>Maybe</strong>: Cách nói thông thường, <span className="highlight-255-padding-0-4">thường dùng trong giao tiếp hàng ngày</span>.</li>
            <li className="list-none">______ we can go to the movies tonight.</li>
            <li className="list-none margin-bottom-20">Có lẽ tối nay chúng ta có thể đi xem phim.</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Maybe</strong>" thường đứng ở đầu câu hoặc trước động cơ chính.</li>

          <li className="margin-bottom-20">Nó thể hiện sự do dự hoặc không chắc chắn của người nói.</li>

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