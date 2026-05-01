import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Actually1(): React.JSX.Element {

  const postId = "Actually1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-xac-thuc-terms"><mark className="highlight-tertiary-padding-4-8">Tính xác thực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">actually
        <sup><Link to="/vocabulary/actually-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/actually-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>actually</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>actually</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈækʧuəli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">actua̛lly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Thực tế, thực ra</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>actually</strong>" được sử dụng để nhấn mạnh một sự thật hoặc một thông tin nào đó, thường là để sửa chữa hoặc bổ sung cho một thông tin đã được đưa ra trước đó. Nó cũng có thể được dùng để giới thiệu một thông tin mới hoặc bất ngờ.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>I thought she was a doctor, but ______, she's a nurse.</li>
          <li className="margin-bottom-20 list-none">Tôi tưởng cô ấy là bác sĩ, nhưng thực ra cô ấy là y tá.</li>

          <li>I'm going to the library today. - ______, I'm going to the gym.</li>
          <li className="list-none">Tôi sẽ đến thư viện hôm nay. - Thực ra, tôi sẽ đến phòng tập.</li>

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

          <li>Actual (adj) /ˈækʧuəl/</li>
          <li className="list-none">The ______ cost of the project was higher than expected.</li>
          <li className="margin-bottom-20 list-none">Chi phí thực tế của dự án cao hơn dự kiến.</li>

          <li>Actuality (n) /ækˈʧuæləti/</li>
          <li className="list-none">The ______ of the situation is much worse than we thought.</li>
          <li className="list-none">Thực tế của tình hình tồi tệ hơn nhiều so với chúng ta nghĩ.</li>

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

          <li>In fact /ɪn fækt/</li>
          <li className="list-none">______, I don't know the answer.</li>
          <li className="margin-bottom-20 list-none">Thực tế, tôi không biết câu trả lời.</li>

          <li>As a matter of fact /æz ə ˈmætər əv fækt/</li>
          <li className="list-none">______, I've already seen that movie.</li>
          <li className="list-none">Thực tế, tôi đã xem bộ phim đó rồi.</li>

        </ul>

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>Theoretically /θiːəˈrɛtɪkli/</li>
          <li className="list-none">______, it's possible, but not very likely.</li>
          <li className="margin-bottom-20 list-none">Về mặt lý thuyết thì có thể, nhưng không có khả năng xảy ra lắm.</li>

          <li>Hypothetically /ˌhaɪpəˈθɛtɪkli/</li>
          <li className="list-none">______, if I won the lottery, I would travel around the world.</li>
          <li className="list-none">Giả sử mà nói, nếu tôi trúng số, tôi sẽ đi du lịch vòng quanh thế giới.</li>

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

      <p className="text-indent-whole">Hình dung một người đang sửa lại một câu nói sai.</p>

        <ul className="list-square">

          <li>I thought the capital of Australia was Sydney, but ______, it's Canberra.</li>
          <li className="list-none">Tôi nghĩ thủ đô của Úc là Sydney, nhưng thực ra là Canberra.</li>

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

      <p className="text-indent-whole">Tự tạo các câu ví dụ khác nhau với từ "<strong>actually</strong>" trong nhiều ngữ cảnh khác nhau.</p>

        <ul className="list-square">

          <li>Do you like coffee? - Well, ______, I prefer tea.</li>
          <li className="list-none">Bạn có thích cà phê không? - Thật ra thì tôi thích trà hơn.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại và bài viết để làm quen với cách sử dụng.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>I think I'll have the pizza.</li>
            <li className="list-none margin-bottom-20">Tôi nghĩ tôi sẽ ăn pizza.</li>

            <li value="2">______, I'm feeling kind of hungry, so I'll have the burger.</li>
            <li className="list-none margin-bottom-20">Thực ra, tôi cảm thấy hơi đói, vì vậy tôi sẽ ăn hamburger.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>actually</strong>" <span className="highlight-255-padding-0-4">để thay đổi quyết định ban đầu</span> và đưa ra một lựa chọn khác.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Sửa chữa thông tin: "<strong>Actually</strong>" thường được dùng để sửa chữa một thông tin sai hoặc không chính xác.</li>

          <li>Thêm thông tin: Nó cũng có thể được dùng để bổ sung thêm thông tin chi tiết.</li>

          <li className="margin-bottom-20">Nhấn mạnh: "<strong>Actually</strong>" giúp nhấn mạnh một sự thật hoặc một quan điểm.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎Gem ·</span>
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