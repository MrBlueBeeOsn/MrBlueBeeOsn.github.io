import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NOT1(): React.JSX.Element {

  const postId = "NOT1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: không</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">NOT
        <sup><Link to="/vocabulary/NOT-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/NOT-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>NOT</strong>" và các thành ngữ liên quan nhé.

</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [NOT][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">NOT</Link>] /nɒt/ ⬤
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Không</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Dùng để phủ định một hành động, tính chất, hoặc sự kiện.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>i am NOT HUNgry.</li>
          <li className="margin-bottom-20 list-none">Tôi không đói.</li>

          <li>she is NOT a DOCtor.</li>
          <li className="list-none">Cô ấy không phải bác sĩ.</li>

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

          <li>there is NOTHing in the BOX.</li>
          <li className="margin-bottom-20 list-none">Không có gì trong hộp.</li>

          <li>NObody was at HOME.</li>
          <li className="list-none">Không ai ở nhà.</li>

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

          <li><Link to="/vocabulary/NO-1">NO</Link>, i don't WANT to GO.</li>
          <li className="margin-bottom-20 list-none">Không, tôi không muốn đi.</li>

          <li>i will <Link to="/vocabulary/NEVer-1">NEVer</Link> forGET you.</li>
          <li className="list-none">Tôi sẽ không bao giờ quên bạn.</li>

        </ul>

        {/* <Link to="/vocabulary/CLEARly-1">Clearly</Link> */}

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li><Link to="/vocabulary/YES-1">YES</Link>, i can SPEAK ENGlish.</li>
          <li className="margin-bottom-20 list-none">Có, tôi có thể nói tiếng Anh.</li>

          <li>she <Link to="/vocabulary/always-1">ALways</Link> COMES to CLASS on TIME.</li>
          <li className="list-none">Cô ấy luôn đến lớp đúng giờ.</li>

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

      <p className="text-indent-whole">Hình dung một dấu hiệu "<Link to="/vocabulary/NO-1">NO</Link>" để biểu thị sự phủ định.</p>

        <ul className="list-square">


          <li>PLEASE do NOT TOUCH.</li>
          <li className="list-none">Vui lòng không chạm vào.</li>

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

      <p className="text-indent-whole">Tạo nhiều câu với "<strong>NOT</strong>" trong các ngữ cảnh khác nhau, để phủ định các hành động, tính chất.</p>

        <ul className="list-square">

          <li>you should NOT SMOKE.</li>
          <li className="list-none">Bạn không nên hút thuốc.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng "<strong>NOT</strong>" trong giao tiếp hàng ngày.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa NO và <strong>NOT</strong>):</p>

          <ol>

            <li value="1">do you WANT COFfee? - <Link to="/vocabulary/NO-1">NO</Link>, THANK you.</li>
            <li className="list-none">Bạn có muốn cà phê không? - Không, cảm ơn.</li>
            <li className="list-none margin-bottom-20">Thường dùng để trả lời một câu hỏi hoặc làm một câu trả lời ngắn gọn.</li>

            <li value="2">i am NOT GOing.</li>
            <li className="list-none">Tôi không đi.</li>
            <li className="list-none"><span className="highlight-255-padding-0-4">Thường dùng để phủ định một động cơ</span>.</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>NOT</strong>" thường đứng trước hành động chính trong câu.</li>

          <li className="margin-bottom-20">Nó là một từ phủ định rất quan trọng trong tiếng Anh.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 8, 2024 · by 💎GEM ·</span>
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