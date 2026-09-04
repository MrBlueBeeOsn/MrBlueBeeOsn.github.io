import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function THORoughly2(): React.JSX.Element {

  const postId = "THORoughly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-ti-mi"><mark className="highlight-tertiary-padding-4-8">ADverbs: tỉ mỉ</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">THORoughly
        <sup>
          <Link to="/vocabulary/THORoughly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/THORoughly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>THORoughly</strong>" (một cách kỹ lưỡng, hoàn toàn) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">

            <span className="highlight-255-padding-3-6">

              [THOroughly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">THÔR ơugh ly</Link>] /ˈθʌrəli/ ⬤•• (3x)

            </span>

            &nbsp;thường được sử dụng để nhấn mạnh tính kỹ lưỡng, hoàn toàn, triệt để của một hành động hoặc quá trình nào đó.
          
          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">i THORoughly enJOYed the CONcert LAST NIGHT.</li>
        <li className="list-none margin-bottom-20">Tôi đã thưởng thức buổi hòa nhạc tối qua một cách trọn vẹn.</li>

        <li value="2">be<strong>fore</strong> we MOVE IN, we NEED to THORoughly CLEAN the HOUSE.</li>
        <li className="list-none margin-bottom-20">Trước khi chuyển vào, chúng ta cần dọn dẹp nhà cửa thật kỹ lưỡng.</li>

        <li value="3">the poLICE are THORoughly inVEStigating the CRIME SCENE.</li>
        <li className="list-none margin-bottom-20">Cảnh sát đang điều tra hiện trường vụ án một cách kỹ lưỡng.</li>

        <li value="4">i am THORoughly conVINCEd of his INnocence.</li>
        <li className="list-none margin-bottom-20">Tôi hoàn toàn tin chắc vào sự vô tội của anh ấy.</li>

        <li value="5">MAKE SURE the inGREdients are THORoughly MIXED be<strong>fore</strong> BAking.</li>
        <li className="list-none margin-bottom-20">Hãy chắc chắn trộn đều các nguyên liệu trước khi nướng.</li>

        <li value="6">the NEW PROduct has been THORoughly TESted be<strong>fore</strong> being reLEASed.</li>
        <li className="list-none margin-bottom-20">Sản phẩm mới đã được kiểm tra kỹ lưỡng trước khi được tung ra thị trường.</li>

        <li value="7">the CIty's SKYline is THORoughly MODern.</li>
        <li className="list-none margin-bottom-20">Đường chân trời của thành phố rất hiện đại.</li>

        <li value="8">i was THORoughly disGUSTed by his beHAvior.</li>
        <li className="list-none margin-bottom-20">Tôi cảm thấy ghê tởm tột độ trước hành vi của anh ta.</li>

        <li value="9">she was THORoughly prePARED for the exAM.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã chuẩn bị rất kỹ cho kỳ thi.</li>

        <li value="10">i THINK i THORoughly underSTAND the CONcept NOW.</li>
        <li className="list-none margin-bottom-20">Tôi nghĩ giờ thì tôi đã hiểu rõ khái niệm này rồi.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính kỹ lưỡng, hoàn toàn, triệt để trong việc thực hiện một hành động hoặc quá trình nào đó. Chúng thường được sử dụng để tạo ấn tượng mạnh về sự tỉ mỉ, chu đáo và kỹ lưỡng.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>THORoughly</strong>" thường được đặt trước hành động hoặc Tính Cơ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn nói và văn viết để nhấn mạnh một ý tưởng.</li>

        </ul>
      
      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎GEM ·</span>
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