import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NEVer2(): React.JSX.Element {

  const postId = "NEVer2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-khong"><mark className="highlight-tertiary-padding-4-8">ADverbs: không</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">NEVer
        <sup>
          <Link to="/vocabulary/NEVer-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/NEVer-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>NEVer</strong>" (không bao giờ) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [NEver][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">NEV e̛r</Link>] /ˈnevər/ ⬤• (2x)
              
            </span>
              
            &nbsp;là một Trạng Cơ chỉ tần suất, dùng để diễn tả một hành động hoặc sự việc không xảy ra bao giờ cả.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">i have NEVer beFORE SEEN such a BEAUtiful SUNset.</li>
        <li className="list-none margin-bottom-20">Tôi chưa bao giờ thấy một cảnh hoàng hôn đẹp như vậy.</li>

        <li value="2">i will NEVer aGAIN MAKE <strong>that</strong> misTAKE.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ không bao giờ lặp lại sai lầm đó nữa.</li>

        <li value="3">NEVer MIND, it's NOT imPORTant.</li>
        <li className="list-none margin-bottom-20">Thôi đi, không quan trọng đâu.</li>

        <li value="4">i have NEVer SEEN such a BIG DOG.</li>
        <li className="list-none margin-bottom-20">Tôi chưa bao giờ thấy con chó nào to như vậy.</li>

        <li value="5">i have NEVer HEARD of <strong>that</strong> BAND.</li>
        <li className="list-none margin-bottom-20">Tôi chưa bao giờ nghe nói về ban nhạc đó.</li>

        <li value="6">i will NEVer forGET your KINDness.</li>
        <li className="list-none margin-bottom-20">Tôi sẽ không bao giờ quên lòng tốt của bạn.</li>

        <li value="7">it's NEVer TOO LATE to LEARN SOMEthing NEW.</li>
        <li className="list-none margin-bottom-20">Không bao giờ là quá muộn để học điều mới.</li>

        <li value="8">NEVer SAY, ANything is POSsible.</li>
        <li className="list-none margin-bottom-20">Đừng nói không bao giờ, mọi thứ đều có thể xảy ra.</li>

        <li value="9">i have NEVer in my LIFE SEEN such a BEAUtiful FLOWer.</li>
        <li className="list-none margin-bottom-20">Tôi chưa bao giờ trong đời thấy một bông hoa đẹp như vậy.</li>

        <li value="10">NEVer give UP on your DREAMS.</li>
        <li className="list-none margin-bottom-20">Đừng bao giờ từ bỏ ước mơ của bạn.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>NEVer</strong>" thường đứng ở đầu câu hoặc trước hành động chính.</li>

          <li className="margin-bottom-20">Bạn có thể kết hợp "<strong>NEVer</strong>" với nhiều Trạng Cơ khác để tạo ra các cụm từ đa dạng hơn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

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