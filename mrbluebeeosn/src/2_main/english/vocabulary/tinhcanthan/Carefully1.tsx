import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Carefully1(): React.JSX.Element {

  const postId = "Carefully1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-can-than-terms"><mark className="highlight-tertiary-padding-4-8">Tính cẩn thận</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">carefully
        <sup><Link to="/vocabulary/carefully-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/carefully-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>carefully</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Carefully</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈkerfəli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">cā̄refưlly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Một cách cẩn thận</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>carefully</strong>" được dùng để mô tả một hành động được thực hiện một cách tỉ mỉ, chu đáo, tránh sai sót hoặc tai nạn. Nó thể hiện sự cẩn trọng và thận trọng.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>Please read the instructions ______ before you start.</li>
          <li className="margin-bottom-20 list-none">Vui lòng đọc kỹ hướng dẫn trước khi bắt đầu.</li>

          <li>She ______ packed her suitcase for the trip.</li>
          <li className="list-none">Cô ấy cẩn thận đóng gói vali cho chuyến đi.</li>

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

          <li>Careful (adj) /ˈkeəfəl/</li>
          <li className="list-none">Be ______ with that glass.</li>
          <li className="margin-bottom-20 list-none">Cẩn thận với cái ly đó.</li>

          <li>Care (n) /keər/</li>
          <li className="list-none">She takes good ______ of her plants.</li>
          <li className="list-none">Cô ấy chăm sóc cây cối rất tốt.</li>

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

          <li><Link to="/vocabulary/cautiously-1">Cautiously</Link> /ˈkɔːʃəsli/</li>
          <li className="list-none">He walked ______ across the icy road.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đi thận trọng trên con đường băng.</li>

          <li><Link to="/vocabulary/meticulously-1">Meticulously</Link> /məˈtɪkjələsli/</li>
          <li className="list-none">She ______ cleaned the house.</li>
          <li className="list-none">Cô ấy lau dọn nhà cửa một cách tỉ mỉ.</li>

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

          <li>Carelessly /ˈkeərləsli/</li>
          <li className="list-none">He ______ threw the paper on the floor.</li>
          <li className="margin-bottom-20 list-none">Anh ấy vứt giấy xuống sàn một cách cẩu thả.</li>

          <li>Rashly /ˈræʃli/</li>
          <li className="list-none">She acted ______ and made a mistake.</li>
          <li className="list-none">Cô ấy hành động hấp tấp và mắc lỗi.</li>

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

      <p className="text-indent-whole">Hình dung một người đang đi trên dây thừng một cách cẩn thận.</p>

        <ul className="list-square">

          <li>She is ______ walking on the tightrope.</li>
          <li className="list-none">Cô ấy đang đi trên dây thừng một cách cẩn thận.</li>

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

      <p className="text-indent-whole">Tạo các câu ví dụ khác nhau với từ "<strong>carefully</strong>" trong nhiều ngữ cảnh.</p>

        <ul className="list-square">

          <li>She ______ peeled the apple.</li>
          <li className="list-none">Cô ấy cẩn thận gọt táo.</li>

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

            <li>He crossed the street.</li>
            <li className="list-none margin-bottom-20">Anh ấy băng qua đường.</li>

            <li value="2">He ______ crossed the street because there was a lot of traffic.</li>
            <li className="list-none margin-bottom-20">Anh ấy cẩn thận băng qua đường vì có rất nhiều xe.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh</span> rằng anh ấy <span className="highlight-255-padding-0-4">đã băng qua đường một cách cẩn thận</span> do có nhiều xe cộ.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Sự đối lập: "<strong>Carefully</strong>" thường được dùng để đối lập với các hành động vội vàng, hấp tấp hoặc không cẩn thận.</li>

          <li className="margin-bottom-20">Quá trình: Nó nhấn mạnh sự chú ý đến từng chi tiết trong quá trình thực hiện một việc gì đó.</li>

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