import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Not1(): React.JSX.Element {

  const postId = "Not1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-terms"><mark className="highlight-tertiary-padding-4-8">Không</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">not
        <sup><Link to="/vocabulary/not-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/not-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>not</strong>" và các thành ngữ liên quan nhé.

</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Not</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /nɒt/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">not</Link>/
                <sup>&nbsp;⬤</sup>
              </span>
            </li>

            <li>Trạng cơ phủ định(negative <Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Không</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Dùng để phủ định một hành động, tính chất, hoặc sự kiện.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>I am ______ hungry.</li>
          <li className="margin-bottom-20 list-none">Tôi không đói.</li>

          <li>She is ______ a doctor.</li>
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

          <li>Nothing (pronoun) /ˈnʌθ.ɪŋ/</li>
          <li className="list-none">There is ______ in the box.</li>
          <li className="margin-bottom-20 list-none">Không có gì trong hộp.</li>

          <li>Nobody (pronoun) /ˈnəʊ.bɒ.di/</li>
          <li className="list-none">______ was at home.</li>
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

          <li><Link to="/vocabulary/no-1">No</Link> (adv) /noʊ/</li>
          <li className="list-none">______, I don't want to go.</li>
          <li className="margin-bottom-20 list-none">Không, tôi không muốn đi.</li>

          <li><Link to="/vocabulary/never-1">Never</Link> (adv) /ˈnev.ər/</li>
          <li className="list-none">I will ______ forget you.</li>
          <li className="list-none">Tôi sẽ không bao giờ quên bạn.</li>

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

          <li><Link to="/vocabulary/yes-1">Yes</Link> (adv) /jes/</li>
          <li className="list-none">______, I can speak English.</li>
          <li className="margin-bottom-20 list-none">Có, tôi có thể nói tiếng Anh.</li>

          <li><Link to="/vocabulary/always-1">Always</Link> (adv) /ˈɔːl.weɪz/</li>
          <li className="list-none">She ______ comes to class on time.</li>
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

      <p className="text-indent-whole">Hình dung một dấu hiệu "<Link to="/vocabulary/no-1">No</Link>" để biểu thị sự phủ định.</p>

        <ul className="list-square">


          <li>Please do ______ touch</li>
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

      <p className="text-indent-whole">Tạo nhiều câu với "<strong>not</strong>" trong các ngữ cảnh khác nhau, để phủ định các hành động, tính chất.</p>

        <ul className="list-square">

          <li>You should ______ smoke.</li>
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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng "<strong>not</strong>" trong giao tiếp hàng ngày.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa no và <strong>not</strong>):</p>

          <ol>

            <li><Link to="/vocabulary/no-1">No</Link>: Thường dùng để trả lời một câu hỏi hoặc làm một câu trả lời ngắn gọn.</li>
            <li className="list-none">Do you want coffee? - ______, thank you.</li>
            <li className="list-none margin-bottom-20">Bạn có muốn cà phê không? - Không, cảm ơn.</li>

            <li value="2"><strong>Not</strong>: <span className="highlight-255-padding-0-4">Thường dùng để phủ định một động từ</span>.</li>
            <li className="list-none">I am ______ going.</li>
            <li className="list-none margin-bottom-20">Tôi không đi.</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Not</strong>" thường đứng trước động từ chính trong câu.</li>

          <li className="margin-bottom-20">Nó là một từ phủ định rất quan trọng trong tiếng Anh.</li>

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