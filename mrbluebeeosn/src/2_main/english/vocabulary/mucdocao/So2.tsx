import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function So2(): React.JSX.Element {

  const postId = "So2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#muc-do-cao-terms"><mark className="highlight-tertiary-padding-4-8">Mức độ cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">so
        <sup>
          <Link to="/vocabulary/so-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/so-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>so</strong>" (quá, rất; như vậy) khi nó đóng vai trò là một trạng từ trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>So&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /soʊ/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">sō</Link>/ 
              
              <sup>&nbsp;⬤ (1x)</sup>
              
            </span>
              
            &nbsp;là một trạng từ rất linh hoạt, có thể dùng để nhấn mạnh mức độ, chỉ kết quả hoặc đồng ý với một điều gì đó.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">So <strong>much</strong> /mʌtʃ/</li>
        <li className="list-none">Thank you ______ for your help!</li>
        <li className="list-none margin-bottom-20">Cảm ơn bạn rất nhiều vì sự giúp đỡ của bạn!</li>

        <li value="2">So <strong>many</strong> /ˈmɛni/</li>
        <li className="list-none">There are ______ people here today.</li>
        <li className="list-none margin-bottom-20">Hôm nay có quá nhiều người ở đây.</li>

        <li value="3">So <strong>good</strong> /ɡʊd/</li>
        <li className="list-none">This cake is ______!</li>
        <li className="list-none margin-bottom-20">Cái bánh này ngon quá!</li>

        <li value="4">So <strong>carefully</strong> /ˈkɛərfəli/</li>
        <li className="list-none">She drove ______ through the narrow streets.</li>
        <li className="list-none margin-bottom-20">Cô ấy lái xe rất cẩn thận qua những con phố hẹp.</li>

        <li value="5">So <strong>fast</strong> /fɑːst/</li>
        <li className="list-none">Time flies ______ when you're having fun.</li>
        <li className="list-none margin-bottom-20">Thời gian trôi rất nhanh khi bạn vui vẻ.</li>

        <li value="6">So <strong>that</strong> /ðæt/</li>
        <li className="list-none">He studied hard ______ he could pass the exam.</li>
        <li className="list-none margin-bottom-20">Anh ấy học chăm chỉ để mà anh ấy có thể vượt qua kỳ thi.</li>

        <li value="7">So <strong>long</strong> /lɒŋ/</li>
        <li className="list-none">Well, ______ for now!</li>
        <li className="list-none margin-bottom-20">Tạm biệt nhé!</li>

        <li className="list-none">It's been ______ since we last met.</li>
        <li className="list-none margin-bottom-20">Đã quá lâu rồi kể từ lần cuối chúng ta gặp nhau.</li>

        <li value="8">So <strong>what</strong>? /wɒt/</li>
        <li className="list-none">I made a mistake. "______? Everyone makes mistakes."</li>
        <li className="list-none margin-bottom-20">Tôi đã mắc lỗi. "Thì sao chứ? Ai cũng mắc lỗi mà."</li>

        <li value="9"><strong>And</strong> so <strong>on</strong> /ænd ɒn/</li>
        <li className="list-none">We discussed the budget, the timeline, the resources, ______.</li>
        <li className="list-none margin-bottom-20">Chúng tôi đã thảo luận về ngân sách, thời gian biểu, nguồn lực, và cứ thế.</li>

        <li value="10">So <strong>do I</strong> /duː aɪ/, So <strong>am I</strong> /æm aɪ/</li>
        <li className="list-none">I love chocolate. "______."</li>
        <li className="list-none margin-bottom-20">Tôi thích sô cô la. "Tôi cũng vậy."</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Nhấn mạnh mức độ: "<strong>So</strong>" thường được dùng để nhấn mạnh tính từ hoặc trạng từ (ví dụ: <strong>so</strong> beautiful, <strong>so</strong> quickly).</li>

          <li>Chỉ kết quả: "<strong>So</strong>" có thể dùng để giới thiệu kết quả của một hành động hoặc tình huống (ví dụ: It rained heavily, <strong>so</strong> we stayed home).</li>

          <li className="margin-bottom-20">Đa dạng ngữ cảnh: "<strong>So</strong>" là một từ rất phổ biến và có nhiều cách dùng khác nhau tùy thuộc vào ngữ cảnh.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>June 26, 2025 · by 💎Gem ·</span>
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