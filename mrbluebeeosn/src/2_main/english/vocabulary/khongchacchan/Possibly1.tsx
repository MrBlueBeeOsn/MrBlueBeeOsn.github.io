import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function POSsibly1(): React.JSX.Element {

  const postId = "POSsibly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: không chắc</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">POSsibly
        <sup><Link to="/vocabulary/POSsibly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/POSsibly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>POSsibly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [POSsibly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">POS si̛b ly</Link>] /ˈpɒsəbli/ ⬤•• (3x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Có thể, có lẽ</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>POSsibly</strong>" được dùng để diễn tả một sự việc có khả năng xảy ra, nhưng không chắc chắn hoàn toàn. Nó thường được sử dụng để thể hiện sự không chắc chắn hoặc để đưa ra một giả định.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>it might POSsibly RAIN toMORrow.</li>
          <li className="margin-bottom-20 list-none">Có thể trời sẽ mưa vào ngày mai.</li>

          <li>she could POSsibly be at HOME NOW.</li>
          <li className="list-none">Có thể cô ấy đang ở nhà bây giờ.</li>

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

          <li>is it POSsible to FINish this WORK toDAY?</li>
          <li className="margin-bottom-20 list-none">Có thể hoàn thành công việc này ngày hôm nay không?</li>

          <li>there is a possiBILity of RAIN LAter.</li>
          <li className="list-none">Có khả năng trời mưa sau này.</li>

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

          <li><Link to="/vocabulary/perHAPS-1">perHAPS</Link> she is BUSy</li>
          <li className="margin-bottom-20 list-none">Có lẽ cô ấy đang bận.</li>

          <li><Link to="/vocabulary/MAYbe-1">MAYbe</Link> he will CALL you LAter.</li>
          <li className="list-none">Có thể anh ấy sẽ gọi cho bạn sau.</li>

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

          <li>i will <Link to="/vocabulary/DEFinitely-1">DEFinitely</Link> be THERE.</li>
          <li className="margin-bottom-20 list-none">Tôi chắc chắn sẽ đến đó.</li>

          <li>that is <Link to="/vocabulary/CERtainly-1">CERtainly</Link> TRUE.</li>
          <li className="list-none">Điều đó chắc chắn đúng.</li>

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

      <p className="text-indent-whole">Hình dung một đám mây đen trên bầu trời, và bạn đang tự hỏi "Có thể trời sẽ mưa không?".</p>

        <ul className="list-square">

          <li>WHAT do you THINK? is it POSsibly GOing to RAIN?</li>
          <li className="list-none">Bạn nghĩ sao? Có thể trời sẽ mưa không?</li>

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

      <p className="text-indent-whole">Tạo các câu thể hiện sự không chắc chắn.</p>

        <ul className="list-square">

          <li>they might POSsibly MISS the TRAIN.</li>
          <li className="list-none">Có thể họ sẽ lỡ tàu.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại hoặc bài viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li value="1">i will GO to the PARTy.</li>
            <li className="list-none margin-bottom-20">Tôi sẽ đi dự tiệc.</li>

            <li value="2">i might POSsibly GO to the PARTy.</li>
            <li className="list-none margin-bottom-20">Có thể tôi sẽ đi dự tiệc.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>POSsibly</strong>" để <span className="highlight-255-padding-0-4">thể hiện rằng việc đi</span> dự tiệc <span className="highlight-255-padding-0-4">chưa chắc chắn hoàn toàn</span>.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Mức độ chắc chắn: "<strong>POSsibly</strong>" thể hiện mức độ chắc chắn thấp hơn so với "<Link to="/vocabulary/DEFinitely-1">DEFinitely</Link>" hoặc "<Link to="/vocabulary/CERtainly-1">CERtainly</Link>".</li>

          <li className="margin-bottom-20">Dùng trong câu hỏi: Thường được sử dụng trong câu hỏi để hỏi về khả năng xảy ra của một sự việc.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 7, 2024 · by 💎GEM ·</span>
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