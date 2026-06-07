import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function No1(): React.JSX.Element {

  const postId = "No1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-terms"><mark className="highlight-tertiary-padding-4-8">Không</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">no
        <sup><Link to="/vocabulary/no-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/no-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>no</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>No</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /noʊ/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">nō</Link>/
                <sup>&nbsp;⬤ (1x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Không</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Thường được dùng như một từ đơn lập để trả lời câu hỏi hoặc từ chối một yêu cầu. Dùng để phủ định một thông tin, yêu cầu hoặc câu hỏi.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>Are you coming to the party? - ______, I'm not.</li>
          <li className="margin-bottom-20 list-none">Bạn có đến bữa tiệc không? - Không, tôi không.</li>

          <li>Do you like coffee? - ______, I prefer tea.</li>
          <li className="list-none">Bạn có thích cà phê không? - Không, tôi thích trà hơn.</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>no</strong>" vì đây là một từ đơn và rất cơ bản.</li>

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

          <li><Link to="/vocabulary/not-1">Not</Link> (adv) /nɒt/</li>
          <li className="list-none">I am ______ going.</li>
          <li className="margin-bottom-20 list-none">Tôi không đi.</li>

          <li><Link to="/vocabulary/never-1">Never</Link> (adv) /ˈnevər/</li>
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
          <li className="list-none">Are you hungry? - ______, I am.</li>
          <li className="margin-bottom-20 list-none">Bạn có đói không? - Có, tôi đói.</li>

          <li>Certainly (adv) /ˈsɜːrtnli/</li>
          <li className="list-none">Can I help you? - ______.</li>
          <li className="list-none">Tôi có thể giúp gì cho bạn? - Chắc chắn rồi.</li>

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

      <p className="text-indent-whole">Hình dung một dấu hiệu "Không" để ghi nhớ ý nghĩa của từ này.</p>

        <ul className="list-square">

          <li>______.</li>
          <li className="list-none"> Không. (Dùng khi muốn cấm một hành động nào đó mà không cần chỉ rõ.)</li>

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

      <p className="text-indent-whole">Tạo nhiều câu hỏi và câu trả lời với "<strong>no</strong>" trong các tình huống khác nhau.</p>

        <ul className="list-square">
          
          <li className="list-none">Would you like some coffee?</li>
          <li className=" margin-bottom-20 list-none">Bạn có muốn uống cà phê không?</li>

          <li>Yes, please.</li>
          <li className=" margin-bottom-20 list-none">Vâng, làm ơn.</li>

          <li>______, thank you. I'm not thirsty.</li>
          <li className="list-none">Không, cảm ơn. Tôi không khát.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng "<strong>no</strong>" trong giao tiếp hàng ngày.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa not và <strong>no</strong>):</p>

          <ol>

            <li><Link to="/vocabulary/not-1">Not</Link>: Được sử dụng để tạo thành câu phủ định đầy đủ.</li>
            <li className="list-none">I do ______ want any milk.</li>
            <li className="list-none margin-bottom-20">Tôi không muốn bất kỳ sữa nào.</li>

            <li value="2"><strong>No</strong>: <span className="highlight-255-padding-0-4">Thường được dùng như một câu trả lời ngắn gọn</span>.</li>
            <li className="list-none">Do you want some milk? - ______.</li>
            <li className="list-none margin-bottom-20">Bạn có muốn một ít sữa không? - Không.</li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>No</strong>" có thể đứng một mình để trả lời câu hỏi hoặc đặt ở đầu câu để phủ định một mệnh đề.</li>

          <li className="margin-bottom-20">"<strong>No</strong>" cũng có thể được dùng để tạo thành câu phủ định với động từ "to be" (am, is, are, was, were).</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>December 28, 2024 · by 💎Gem ·</span>
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