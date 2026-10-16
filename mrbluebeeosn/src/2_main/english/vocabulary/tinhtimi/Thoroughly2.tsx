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

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#enJOYED">enJOYED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CLEAN">CLEAN</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#inVESTigating">inVESTigating</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#conVINCED-of">conVINCED of</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MIXED">MIXED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TESTed">TESTed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#MODern">MODern</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#disGUSTed">disGUSTed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#prePARED">prePARED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#underSTAND">underSTAND</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>THORoughly</strong>" (kỹ lưỡng) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">

            <span className="highlight-255-padding-3-6">

              THOroughly \<Link to="/pronunciation/5-vowel-system">THƠR ơugh ly</Link>\ /ˈθʌrəli/ ⬤•• (THREE SYLlables)

            </span>

            &nbsp;thường được sử dụng để nhấn mạnh tính kỹ lưỡng, hoàn toàn, triệt để của một hành động hoặc quá trình nào đó.
          
          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="enJOYED">i THORoughly enJOYED the CONcert LAST NIGHT.</li>
        <li className="list-none margin-bottom-20">Tôi đã thực sự rất thích buổi hòa nhạc tối qua.</li>

        <li value="2" id="CLEAN">be<strong>fore</strong> we MOVE IN, we NEED to THORoughly CLEAN the HOUSE.</li>
        <li className="list-none margin-bottom-20">Trước khi chúng ta dọn vào, chúng ta cần phải dọn dẹp gọn gàng cả ngôi nhà.</li>

        <li value="3" id="inVESTigating">the poLICE are THORoughly inVESTigating the CRIME SCENE.</li>
        <li className="list-none margin-bottom-20">Cảnh sát đang tiến hành điều tra kỹ lưỡng hiện trường vụ án.</li>

        <li value="4" id="conVINCED-of">i am THORoughly conVINCED of his INnocence.</li>
        <li className="list-none margin-bottom-20">Tôi hoàn toàn tin chắc rằng anh ấy vô tội.</li>

        <li value="5" id="MIXED">MAKE SURE the inGREdients are THORoughly MIXED be<strong>fore</strong> BAking.</li>
        <li className="list-none margin-bottom-20">Hãy đảm bảo các nguyên liệu đã được trộn đều trước khi nướng.</li>

        <li value="6" id="TESTed">the NEW PROduct has been THORoughly TESTed be<strong>fore</strong> <strong>be</strong>ing reLEASed.</li>
        <li className="list-none margin-bottom-20">Sản phẩm mới này đã được kiểm tra kỹ lưỡng trước khi được ra mắt.</li>

        <li value="7" id="MODern">the CIty's SKYline is THORoughly MODern.</li>
        <li className="list-none margin-bottom-20">Đường chân trời của thành phố mang đậm nét hiện đại.</li>

        <li value="8" id="disGUSTed">i was THORoughly disGUSTed by his beHAvior.</li>
        <li className="list-none margin-bottom-20">Tôi đã cảm thấy vô cùng ghê tởm trước hành vi của anh ta.</li>

        <li value="9" id="prePARED">she was THORoughly prePARED for the eXAM.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã chuẩn bị rất kỹ lưỡng cho kỳ thi.</li>

        <li value="10" id="underSTAND">i THINK i THORoughly underSTAND the CONcept NOW.</li>
        <li className="list-none margin-bottom-20">Tôi nghĩ bây giờ tôi đã hiểu rõ khái niệm này rồi.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính kỹ lưỡng, hoàn toàn, triệt để trong việc thực hiện một hành động hoặc quá trình nào đó. Chúng thường được sử dụng để tạo ấn tượng mạnh về sự tỉ mỉ, chu đáo và kỹ lưỡng.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"<strong>THORoughly</strong>" thường được đặt trước hành động hoặc ADjective để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn nói và văn viết để nhấn mạnh một ý tưởng.</li>

        </ul>
      
      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 4, 2024 · by 💎GEM ·</span>
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