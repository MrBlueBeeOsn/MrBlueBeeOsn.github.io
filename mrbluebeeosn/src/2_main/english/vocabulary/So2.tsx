import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

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

        <li value="1"><strong>So</strong> much: Quá nhiều /soʊ mʌtʃ/</li>
        <li className="list-none margin-bottom-20">Thank you <strong>so</strong> much for your help! (Cảm ơn bạn rất nhiều vì sự giúp đỡ của bạn!)</li>

        <li value="2"><strong>So</strong> many: Quá nhiều /soʊ ˈmɛni/</li>
        <li className="list-none margin-bottom-20">There are <strong>so</strong> many people here today. (Hôm nay có quá nhiều người ở đây.)</li>

        <li value="3"><strong>So</strong> good: Rất tốt, quá tốt /soʊ ɡʊd/</li>
        <li className="list-none margin-bottom-20">This cake is <strong>so</strong> good! (Cái bánh này ngon quá!)</li>

        <li value="4"><strong>So</strong> carefully: Rất cẩn thận /soʊ ˈkɛərfəli/</li>
        <li className="list-none margin-bottom-20">She drove <strong>so</strong> carefully through the narrow streets. (Cô ấy lái xe rất cẩn thận qua những con phố hẹp.)</li>

        <li value="5"><strong>So</strong> fast: Rất nhanh /soʊ fɑːst/</li>
        <li className="list-none margin-bottom-20">Time flies <strong>so</strong> fast when you're having fun. (Thời gian trôi rất nhanh khi bạn vui vẻ.)</li>

        <li value="6"><strong>So</strong> that: Để mà, để cho /soʊ ðæt/</li>
        <li className="list-none margin-bottom-20">He studied hard <strong>so</strong> that he could pass the exam. (Anh ấy học chăm chỉ để mà anh ấy có thể vượt qua kỳ thi.)</li>

        <li value="7"><strong>So</strong> long: Tạm biệt; quá lâu /soʊ lɒŋ/</li>
        <li className="list-none">Well, <strong>so</strong> long for now! (Tạm biệt nhé!)</li>
        <li className="list-none margin-bottom-20">It's been <strong>so</strong> long since we last met. (Đã quá lâu rồi kể từ lần cuối chúng ta gặp nhau.)</li>

        <li value="8"><strong>So</strong> what?: Thì sao chứ? Có vấn đề gì đâu? /soʊ wɒt/</li>
        <li className="list-none margin-bottom-20">I made a mistake. "<strong>So</strong> what? Everyone makes mistakes." (Tôi đã mắc lỗi. "Thì sao chứ? Ai cũng mắc lỗi mà.")</li>

        <li value="9">And <strong>so</strong> on: Và cứ thế, vân vân /ænd soʊ ɒn/</li>
        <li className="list-none margin-bottom-20">We discussed the budget, the timeline, the resources, and <strong>so</strong> on. (Chúng tôi đã thảo luận về ngân sách, thời gian biểu, nguồn lực, và cứ thế.)</li>

        <li value="10"><strong>So</strong> do I / <strong>So</strong> am I: Tôi cũng vậy /soʊ duː aɪ/ /soʊ æm aɪ/</li>
        <li className="list-none margin-bottom-20">I love chocolate. "<strong>So</strong> do I." (Tôi thích sô cô la. "Tôi cũng vậy.")</li>

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