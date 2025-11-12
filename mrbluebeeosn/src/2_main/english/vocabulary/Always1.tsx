import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Always1(): React.JSX.Element {

  const postId = "Always1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#lien-tuc-terms"><mark className="highlight-tertiary-padding-4-8">Liên tục</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">always
        <sup><Link to="/vocabulary/always-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/always-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>always</strong>" và các thành ngữ liên quan nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Always</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈɔːl.weɪz/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ålwāys</Link>/
                <sup>&nbsp;⬤• (2x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Luôn luôn, mọi lúc</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Diễn tả một hành động, sự việc xảy ra liên tục, không thay đổi trong mọi trường hợp và thời gian.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>She <strong>always</strong> arrives on time. (Cô ấy luôn đến đúng giờ.)</li>

          <li>My mother <strong>always</strong> cooks breakfast for us. (Mẹ tôi luôn nấu bữa sáng cho chúng tôi.)</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>always</strong>".</li>

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

          <li>Constantly: Liên tục /ˈkɒn.stənt.li/</li>
          <li className="margin-bottom-20 list-none">He is constantly complaining. (Anh ấy liên tục phàn nàn.)</li>

          <li>Perpetually: Vĩnh viễn, liên tục /pəˈpet.ʃu.ə.li/</li>
          <li className="list-none">She is perpetually late. (Cô ấy luôn luôn đến muộn.)</li>

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

          <li>Never: (adv) Không bao giờ /ˈnev.ər/</li>
          <li className="margin-bottom-20 list-none">I have never been to Paris. (Tôi chưa bao giờ đến Paris.)</li>

          <li><Link to="/vocabulary/seldom-1">Seldom</Link>: (adv) Hiếm khi /ˈsel.dəm/</li>
          <li className="list-none">She seldom goes to the cinema. (Cô ấy hiếm khi đi xem phim.)</li>

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

      <p className="text-indent-whole">Hình dung một đồng hồ luôn chỉ đúng giờ.</p>

        <ul className="list-square">

          <li>This clock is <strong>always</strong> on time.</li>
          <li className="list-none">(Đồng hồ này luôn đúng giờ.)</li>

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

      <p className="text-indent-whole">Tạo nhiều câu với "<strong>always</strong>" trong các ngữ cảnh khác nhau, liên quan đến thói quen, đặc điểm, sự thật hiển nhiên.</p>

        <ul className="list-square">

          <li>He <strong>always</strong> gets up at 6 AM.</li>
          <li className="list-none">(Anh ấy luôn dậy lúc 6 giờ sáng.)</li>

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

      <p className="text-indent-whole">Thường xuyên sử dụng từ "<strong>always</strong>" trong giao tiếp hoặc khi viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa constantly và <strong>always</strong>):</p>

          <ol>

            <li>Constantly: Nhấn mạnh tính chất liên tục và lặp đi lặp lại của một hành động.</li>
            <li className="list-none margin-bottom-20">She is constantly talking on the phone. (Cô ấy liên tục nói chuyện điện thoại.)</li>

            <li value="2"><strong>Always</strong>: <span className="highlight-255-padding-0-4">Nhấn mạnh tính chất vĩnh cửu và tuyệt đối của một hành động</span>.</li>
            <li className="list-none margin-bottom-20">The sun <strong>always</strong> rises in the east. (Mặt trời luôn mọc ở hướng đông.)</li>

          </ol>

          {/* <ol>

            <li></li>

            <li className="margin-bottom-20"></li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: </p>

      </div> */}

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Always</strong>" thường được đặt ở đầu câu hoặc trước động từ chính.</li>

          <li className="margin-bottom-20">Nó thể hiện một sự chắc chắn và tuyệt đối về tần suất xảy ra của một hành động.</li>

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