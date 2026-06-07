import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Particularly1(): React.JSX.Element {

  const postId = "Particularly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#diem-nhan-dac-biet-terms"><mark className="highlight-tertiary-padding-4-8">Điểm nhấn đặc biệt</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">particularly
        <sup><Link to="/vocabulary/particularly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/particularly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>particularly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Particularly</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /pəˈtɪkjələrli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">pa̛rticư̇la̛rly</Link>/
                <sup>&nbsp;•⬤••• (5x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Đặc biệt, nhất là</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>particularly</strong>" dùng để nhấn mạnh một điều gì đó hơn những điều khác. Nó thường được dùng để chỉ ra một sự việc, tính chất hoặc người nào đó nổi bật hơn so với những cái còn lại.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>I like all kinds of fruits, ______ apples.</li>
          <li className="margin-bottom-20 list-none">Tôi thích tất cả các loại trái cây, nhất là táo.</li>

          <li>The weather in Vietnam is hot, ______ in the summer.</li>
          <li className="list-none">Thời tiết ở Việt Nam rất nóng, đặc biệt là vào mùa hè.</li>

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

          <li>Particular (adj) /pəˈtɪkjələr/</li>
          <li className="list-none">She is very ______ about her clothes.</li>
          <li className="margin-bottom-20 list-none">Cô ấy rất kỹ tính về quần áo của mình.</li>

          <li>Particularize (v) /pəˈtɪkjələraɪz/</li>
          <li className="list-none">Can you ______ the problem?</li>
          <li className="list-none">Bạn có thể nêu chi tiết vấn đề không?</li>

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

          <li><Link to="/vocabulary/especially-1">Especially</Link> /ɪˈspɛʃəli/</li>
          <li className="list-none">I ______ like the color blue.</li>
          <li className="margin-bottom-20 list-none">Tôi đặc biệt thích màu xanh dương.</li>

          <li>Specifically /spəˈsɪfɪkli/</li>
          <li className="list-none">I'm looking for a job ______ in marketing.</li>
          <li className="list-none">Tôi đang tìm kiếm một công việc cụ thể trong lĩnh vực marketing.</li>

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

          <li>Generally /ˈdʒɛnərəli/</li>
          <li className="list-none">______, I like to stay at home on weekends.</li>
          <li className="margin-bottom-20 list-none">Nói chung, tôi thích ở nhà vào cuối tuần.</li>

          <li>Vaguely /ˈveɪɡli/</li>
          <li className="list-none">I remember ______ meeting her before.</li>
          <li className="list-none">Tôi nhớ mang máng đã gặp cô ấy trước đây.</li>

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

      <p className="text-indent-whole">Hình dung một chiếc bánh pizza với nhiều loại topping khác nhau, và bạn đang chỉ vào một miếng topping.</p>

        <ul className="list-square">

          <li>______, I like the pepperoni.</li>
          <li className="list-none">Đặc biệt, tôi thích xúc xích Ý</li>

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

      <p className="text-indent-whole">Tạo các câu về sở thích, đặc điểm hoặc tình huống bằng cách sử dụng "<strong>particularly</strong>".</p>

        <ul className="list-square">

          <li>I enjoy watching movies, ______ science fiction films.</li>
          <li className="list-none">Tôi thích xem phim, đặc biệt là phim khoa học viễn tưởng.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại hoặc khi viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>I like fruits.</li>
            <li className="list-none margin-bottom-20">Tôi thích trái cây.</li>

            <li value="2">I ______ like apples.</li>
            <li className="list-none margin-bottom-20">Tôi đặc biệt thích táo.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>particularly</strong>" để <span className="highlight-255-padding-0-4">nhấn mạnh</span> rằng trong số tất cả các loại trái cây, táo là <span className="highlight-255-padding-0-4">loại trái cây</span> mà người nói <span className="highlight-255-padding-0-4">thích nhất</span>.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Sự nhấn mạnh: "<strong>Particularly</strong>" dùng để nhấn mạnh một điểm cụ thể.</li>

          <li className="margin-bottom-20">Sự so sánh ngầm: Khi sử dụng "<strong>particularly</strong>", chúng ta đang ngầm so sánh với những điều khác.</li>

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