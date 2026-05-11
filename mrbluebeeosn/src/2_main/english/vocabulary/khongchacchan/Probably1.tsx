import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Probably1(): React.JSX.Element {

  const postId = "Probably1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">Không chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">probably
        <sup><Link to="/vocabulary/probably-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/probably-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng tìm hiểu sâu hơn về từ "<strong>probably</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Probably</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈprɒbəbli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">proba̛bly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Có lẽ, chắc hẳn</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>probably</strong>" được dùng để diễn tả sự không chắc chắn hoàn toàn nhưng có khả năng cao một sự việc nào đó sẽ xảy ra. Nó thể hiện một mức độ tin tưởng cao hơn "<Link to="/vocabulary/maybe-1">maybe</Link>" nhưng thấp hơn "certainly".</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>I'll ______ be home by 10.</li>
          <li className="margin-bottom-20 list-none">Có lẽ tôi sẽ về nhà trước 10 giờ.</li>

          <li>She ______ knows the answer.</li>
          <li className="list-none">Chắc hẳn cô ấy biết câu trả lời.</li>

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

          <li>Probable (adj) /ˈprɒbəbl/</li>
          <li className="list-none">It's ______ that it will rain tomorrow.</li>
          <li className="margin-bottom-20 list-none">Có khả năng trời sẽ mưa ngày mai.</li>

          <li>Probability (n) /ˌprɒbəˈbɪləti/</li>
          <li className="list-none">The ______ of winning is low.</li>
          <li className="list-none">Xác suất chiến thắng rất thấp.</li>

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

          <li>Likely /ˈlaɪkli/</li>
          <li className="list-none">It's ______ to rain.</li>
          <li className="margin-bottom-20 list-none">Có khả năng trời sẽ mưa.</li>

          <li><Link to="/vocabulary/possibly-1">Possibly</Link> /ˈpɒsəbli/</li>
          <li className="list-none">It's ______ the best solution.</li>
          <li className="list-none">Có thể đây là giải pháp tốt nhất.</li>

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

          <li><Link to="/vocabulary/definitely-1">Definitely</Link> /ˈdefɪnətli/</li>
          <li className="list-none">I'm ______ going.</li>
          <li className="margin-bottom-20 list-none">Tôi chắc chắn sẽ đi.</li>

          <li>Unlikely /ʌnˈlaɪkli/</li>
          <li className="list-none">It's ______ that he will come.</li>
          <li className="list-none">Không có khả năng anh ấy sẽ đến.</li>

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

      <p className="text-indent-whole">Hình dung một đám mây đen trên trời.</p>

        <ul className="list-square">

          <li>It will ______ rain.</li>
          <li className="list-none">Có lẽ trời sẽ mưa.</li>

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

      <p className="text-indent-whole">Tạo các câu ví dụ khác nhau với từ "<strong>probably</strong>" trong nhiều ngữ cảnh.</p>

        <ul className="list-square">

          <li>I'll ______ eat dinner at home tonight.</li>
          <li className="list-none">Có lẽ tối nay tôi sẽ ăn tối ở nhà.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại hàng ngày.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>I might go to the party.</li>
            <li className="list-none margin-bottom-20">Có thể tôi sẽ đi dự tiệc.</li>

            <li value="2">I'll ______ go to the party.</li>
            <li className="list-none margin-bottom-20">Có lẽ tôi sẽ đi dự tiệc.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>probably</strong>" để <span className="highlight-255-padding-0-4">thể hiện khả năng đi</span> dự tiệc <span className="highlight-255-padding-0-4">cao</span> hơn so với câu đầu sử dụng "might".</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Mức độ chắc chắn: "<strong>Probably</strong>" thể hiện một mức độ chắc chắn trung bình, không quá chắc chắn nhưng cũng không quá mơ hồ.</li>

          <li className="margin-bottom-20">Dự đoán: Nó thường được dùng để dự đoán về tương lai hoặc để diễn tả sự không chắc chắn về một thông tin nào đó.</li>

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