import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Not2(): React.JSX.Element {

  const postId = "Not2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-terms"><mark className="highlight-tertiary-padding-4-8">Không</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">not
        <sup>
          <Link to="/vocabulary/not-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/not-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>not</strong>" (không) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Not&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /nɒt/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">not</Link>/ 
              
              <sup>&nbsp;⬤ (1x)</sup>
              
            </span>
              
            &nbsp;là một từ phủ định rất quan trọng, được dùng để tạo ra câu phủ định.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Not <strong>at all</strong> /ət ɔːl/</li>
        <li className="list-none">Thank you for your help. - ______.</li>
        <li className="list-none margin-bottom-20">Cảm ơn bạn đã giúp đỡ. - Không có gì đâu.</li>

        <li value="2">Not <strong>only</strong>... <strong>but also</strong> /ˈoʊnliː ... bʌt ˈɔːlsəʊ/</li>
        <li className="list-none">She is ______ beautiful ______ intelligent.</li>
        <li className="list-none margin-bottom-20">Cô ấy không chỉ xinh đẹp mà còn thông minh.</li>

        <li value="3">Not <strong>so much</strong> <strong>interested in his story as</strong> /səʊ mʌtʃ ... æz/</li>
        <li className="list-none">I am ______ in his reason.</li>
        <li className="list-none margin-bottom-20">Tôi không quan tâm đến câu chuyện của anh ta bằng lý do của anh ta.</li>

        <li value="4">Not <strong>any more</strong> /ˈɛniː mɔːr/</li>
        <li className="list-none">I do ______ eat meat ______.</li>
        <li className="list-none margin-bottom-20">Tôi không ăn thịt nữa.</li>

        <li value="5">Not <strong>at all</strong> /ət ɔːl/</li>
        <li className="list-none">I do ______ like this movie ______.</li>
        <li className="list-none margin-bottom-20">Tôi không thích bộ phim này chút nào.</li>

        <li value="6">Not <strong>only</strong>, <strong>but also</strong> /ˈoʊnli, bʌt ˈɔːlsəʊ/</li>
        <li className="list-none">______ is she kind, ______ she is ______ very helpful.</li>
        <li className="list-none margin-bottom-20">Không những cô ấy tốt bụng mà còn rất hữu ích.</li>

        <li value="7">Not <strong>as tall as</strong> /æz tɔːl æz/</li>
        <li className="list-none">She is ______ her brother.</li>
        <li className="list-none margin-bottom-20">Cô ấy không cao bằng anh trai mình.</li>

        <li value="8">Not <strong>a bit</strong> /ə bɪt/</li>
        <li className="list-none">I am ______ tired.</li>
        <li className="list-none margin-bottom-20">Tôi không mệt mỏi chút nào.</li>

        <li value="9">Not <strong>nearly</strong> /ˈnɪərliː/</li>
        <li className="list-none">This task is ______ as difficult as I thought.</li>
        <li className="list-none margin-bottom-20">Công việc này không khó bằng những gì tôi nghĩ.</li>

        <li value="10">Not <strong>so much</strong> /səʊ mʌtʃ/</li>
        <li className="list-none">It's ______ a problem as a challenge.</li>
        <li className="list-none margin-bottom-20">Đó không phải là một vấn đề mà là một thử thách.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Not</strong>" là một từ phủ định rất linh hoạt và có thể được sử dụng trong nhiều ngữ cảnh khác nhau.</li>

          <li className="margin-bottom-20">Ý nghĩa chính xác của cụm từ phụ thuộc vào ngữ cảnh sử dụng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 8, 2024 · by 💎Gem ·</span>
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