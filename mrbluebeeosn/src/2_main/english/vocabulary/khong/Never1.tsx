import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NEVer1(): React.JSX.Element {

  const postId = "NEVer1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: không</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">NEVer
        <sup><Link to="/vocabulary/NEVer-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/NEVer-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào phân tích từ "<strong>NEVer</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [NEver][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">NEV e̛r</Link>] /ˈnevər/ ⬤• (2x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Không bao giờ</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Chỉ sự phủ định hoàn toàn về một hành động, sự việc xảy ra ở bất kỳ thời điểm nào trong quá khứ, hiện tại hoặc tương lai.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>i have NEVer BEEN to PARis.</li>
          <li className="margin-bottom-20 list-none">Tôi chưa bao giờ đến Paris.</li>

          <li>she will NEVer forGET that DAY.</li>
          <li className="list-none">Cô ấy sẽ không bao giờ quên ngày hôm đó.</li>

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

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>NEVer</strong>".</li>

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

          <li>i have <Link to="/vocabulary/NOT-1">NOT</Link> EVer SEEN such a BEAUtiful SUNset.</li>
          <li className="margin-bottom-20 list-none">Tôi chưa bao giờ thấy một cảnh hoàng hôn đẹp như vậy.</li>

          <li>at NO TIME did i susPECT him of CHEATing.</li>
          <li className="list-none">Tôi không hề nghi ngờ anh ta gian lận.</li>

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

          <li>she <Link to="/vocabulary/always-1">ALways</Link> COMES on TIME.</li>
          <li className="margin-bottom-20 list-none">Cô ấy luôn đúng giờ.</li>

          <li>have you <Link to="/vocabulary/EVer-1">EVer</Link> BEEN to jaPAN?</li>
          <li className="list-none">Bạn đã từng đến Nhật Bản chưa?</li>

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

      <p className="text-indent-whole">Hãy tưởng tượng một chiếc bảng với dòng chữ "<strong>NEVer</strong> GIVE UP" (Không bao giờ bỏ cuộc), bạn có thể liên tưởng đến việc kiên trì theo đuổi mục tiêu.</p>

        <ul className="list-square">

          <li>EVery TIME i FEEL like GIVing UP, i THINK of the "NEVer GIVE UP" SIGN and KEEP GOing.</li>
          <li className="list-none">Mỗi khi muốn bỏ cuộc, tôi nghĩ đến dòng chữ "Không bao giờ bỏ cuộc" và tiếp tục cố gắng.</li>

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

      <p className="text-indent-whole">Thử tạo càng nhiều câu ví dụ càng tốt với "<strong>NEVer</strong>".</p>

        <ul className="list-square">

          <li>they have NEVer SEEN SNOW.</li>
          <li className="list-none">Họ chưa bao giờ thấy tuyết.</li>

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

      <p className="text-indent-whole margin-bottom-20">Đọc và viết nhiều để củng cố vốn từ vựng và cách sử dụng của "<strong>NEVer</strong>".</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa NOT EVer và <strong>NEVer</strong>):</p>

          <ol>

            <li value="1">i have <Link to="/vocabulary/NOT-1">NOT</Link> EVer SEEN such a BEAUtiful SUNset.</li>
            <li className="list-none margin-bottom-20">Tôi chưa bao giờ thấy một cảnh hoàng hôn đẹp như vậy.</li>

            <li value="2">i have NEVer BEEN to PARis.</li>
            <li className="list-none margin-bottom-20">Tôi chưa bao giờ đến Paris.</li>
    

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Cả hai từ đều có nghĩa là "không bao giờ" nhưng "NOT EVer" thường được coi là cách nói nhấn mạnh hơn.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>NEVer</strong>" thường được đặt ở đầu câu hoặc trước hành động chính.</li>

          <li className="margin-bottom-20">"<strong>NEVer</strong>" thường được dùng để nhấn mạnh sự phủ định hoàn toàn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 12, 2024 · by 💎GEM ·</span>
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