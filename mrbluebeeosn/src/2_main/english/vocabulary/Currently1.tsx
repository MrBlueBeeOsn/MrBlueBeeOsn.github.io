import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Currently1(): React.JSX.Element {

  const postId = "Currently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-hien-tai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian hiện tại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">currently
        <sup><Link to="/vocabulary/currently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/currently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>currently</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Currently</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈkʌrəntli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">cûrre̛ntly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Hiện tại, bây giờ</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>currently</strong>" được dùng để chỉ một hành động, trạng thái hoặc sự kiện đang diễn ra tại thời điểm nói. Nó nhấn mạnh tính chất tạm thời của một tình huống.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>I am <strong>currently</strong> working on a new project. (Hiện tại tôi đang làm một dự án mới.)</li>

          <li>She is <strong>currently</strong> living in Paris. (Cô ấy hiện đang sống ở Paris.)</li>

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

          <li>Current (adj/n): Hiện tại, dòng điện /ˈkʌrənt/</li>
          <li className="margin-bottom-20 list-none">The current situation is very complex. (Tình hình hiện tại rất phức tạp.)</li>

          <li>Currency (n): Tiền tệ /ˈkʌrənsi/</li>
          <li className="list-none">The dollar is the currency of the United States. (Đô la là đơn vị tiền tệ của Hoa Kỳ.)</li>

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

          <li><Link to="/vocabulary/now-1">Now</Link>: Bây giờ (adv) /naʊ/</li>
          <li className="margin-bottom-20 list-none">I am working now. (Tôi đang làm việc bây giờ.)</li>

          <li>At present: Hiện tại /æt ˈprezənt/</li>
          <li className="list-none">At present, we are facing many challenges. (Hiện tại, chúng ta đang đối mặt với nhiều thách thức.)</li>

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

          <li>Formerly: Trước đây /ˈfɔːrmərli/</li>
          <li className="margin-bottom-20 list-none">She formerly worked as a teacher. (Trước đây cô ấy làm giáo viên.)</li>

          <li>Previously: Trước đó /ˈpriːviəsli/</li>
          <li className="list-none">She had previously visited this place. (Cô ấy đã từng đến nơi này trước đó.)</li>

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

      <p className="text-indent-whole">Hình dung một dòng thời gian với một điểm đánh dấu "bây giờ".</p>

        <ul className="list-square">

          <li>We are <strong>currently</strong> at this point on the timeline.</li>
          <li className="list-none">(Hiện tại chúng ta đang ở điểm này trên dòng thời gian.)</li>

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

      <p className="text-indent-whole">Tạo các câu về những gì bạn đang làm hoặc những gì đang xảy ra xung quanh bạn.</p>

        <ul className="list-square">

          <li>I am <strong>currently</strong> reading a book about history.</li>
          <li className="list-none">(Hiện tại tôi đang đọc một cuốn sách về lịch sử.)</li>

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

      <p className="text-indent-whole">Thường xuyên sử dụng từ này trong các cuộc hội thoại hoặc khi viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>She worked as a teacher for 10 years. (Cô ấy đã làm giáo viên trong 10 năm.)</li>

            <li className="margin-bottom-20">She is <strong>currently</strong> working on a new research project. (Cô ấy hiện đang làm việc trên một dự án nghiên cứu mới.)</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu đầu tiên mô tả một công việc đã hoàn thành trong quá khứ, còn câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh</span> rằng cô ấy <span className="highlight-255-padding-0-4">đang tham gia</span> vào một dự án nghiên cứu đang diễn ra.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Tính tạm thời: "<strong>Currently</strong>" nhấn mạnh tính chất tạm thời của một tình huống.</li>

          <li className="margin-bottom-20">Dùng với động từ hiện tại tiếp diễn: Thường được dùng với động từ hiện tại tiếp diễn để diễn tả hành động đang diễn ra.</li>

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