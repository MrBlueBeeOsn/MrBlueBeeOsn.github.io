import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Again1(): React.JSX.Element {

  const postId = "Again1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-lap-lai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">again
        <sup><Link to="/vocabulary/again-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/again-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>again</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Again</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /əˈɡen/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">a̛gā̄in</Link>/
                <sup>&nbsp;•⬤ (2x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Lại, một lần nữa</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Chỉ việc lặp lại một hành động, sự việc hoặc trạng thái.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>Can you say that ______?</li>
          <li className="margin-bottom-20 list-none">Bạn có thể nói lại điều đó được không?</li>

          <li>I've seen this movie before, but I want to watch it ______.</li>
          <li className="list-none">Tôi đã xem bộ phim này rồi, nhưng tôi muốn xem lại.</li>

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

          <li><strong>Again</strong> and <strong>again</strong> /əˈɡen ænd əˈɡen/</li>
          <li className="list-none">He kept asking the same question ______.</li>
          <li className="list-none">Anh ấy cứ hỏi đi hỏi lại cùng một câu hỏi.</li>

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

          <li>Once more /wʌns mɔːr/</li>
          <li className="list-none">Let's try ______.</li>
          <li className="margin-bottom-20 list-none">Chúng ta hãy thử thêm một lần nữa.</li>

          <li><Link to="/vocabulary/repeatedly-1">Repeatedly</Link> /rɪˈpiː.tɪd.li/</li>
          <li className="list-none">He ______ made the same mistake.</li>
          <li className="list-none">Anh ấy liên tục mắc cùng một lỗi lầm.</li>

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

          <li>Once (adv) /wʌns/</li>
          <li className="list-none">I've only done it ______.</li>
          <li className="margin-bottom-20 list-none">Tôi mới chỉ làm điều đó một lần.</li>

          <li>For the first time /fɔːr ðə fɜːst taɪm/</li>
          <li className="list-none">I'm seeing this movie ______.</li>
          <li className="list-none">Tôi đang xem bộ phim này lần đầu tiên.</li>

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

      <p className="text-indent-whole">Hãy tưởng tượng một chiếc đồng hồ quay trở lại vị trí ban đầu.</p>

        <ul className="list-square">

          <li>The clock stopped working, but now it's started ______.</li>
          <li className="list-none">Chiếc đồng hồ đã ngừng hoạt động, nhưng bây giờ nó đã bắt đầu lại.</li>

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

      <p className="text-indent-whole">Thử tạo càng nhiều câu ví dụ càng tốt với "<strong>again</strong>" trong các ngữ cảnh khác nhau.</p>

        <ul className="list-square">

          <li>The price of gas is going up ______.</li>
          <li className="list-none">Giá xăng lại tăng lên rồi.</li>

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

      <p className="text-indent-whole margin-bottom-20">Đọc và viết nhiều để củng cố vốn từ vựng và cách sử dụng của "<strong>again</strong>".</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa once more và <strong>again</strong>):</p>

          <ol>

            <li>Once more: Thường được dùng để nhấn mạnh sự lặp lại cuối cùng hoặc một nỗ lực cuối cùng.</li>
            <li className="list-none">Let's try ______.</li>
            <li className="list-none margin-bottom-20">Chúng ta hãy thử thêm một lần nữa.</li>

            <li value="2"><strong>Again</strong>: <span className="highlight-255-padding-0-4">Thường được dùng trong các tình huống thông thường</span>.</li>
            <li className="list-none">Please repeat that ______.</li>
            <li className="list-none margin-bottom-20">Làm ơn lặp lại điều đó.</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Again</strong>" thường đứng sau động từ.</li>

          <li className="margin-bottom-20">"<strong>Again</strong>" có thể được dùng để nhấn mạnh một ý tưởng hoặc cảm xúc.</li>

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