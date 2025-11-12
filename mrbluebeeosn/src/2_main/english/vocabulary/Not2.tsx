import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

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

        <li value="1"><strong>Not</strong> at all: Không hề, không chút nào /nɒt ət ɔːl/</li>
        <li className="list-none margin-bottom-20">Thank you for your help. - <strong>Not</strong> at all. (Cảm ơn bạn đã giúp đỡ. - Không có gì đâu.)</li>

        <li value="2"><strong>Not</strong> only... but also: Không chỉ... mà còn /nɒt ˈoʊnliː ... bʌt ˈɔːlsəʊ/</li>
        <li className="list-none margin-bottom-20">She is <strong>not</strong> only beautiful but also intelligent. (Cô ấy không chỉ xinh đẹp mà còn thông minh.)</li>

        <li value="3"><strong>Not</strong> so much... as: Không phải... mà là /nɒt səʊ mʌtʃ ... æz/</li>
        <li className="list-none margin-bottom-20">I am <strong>not</strong> so much interested in his story as in his reason. (Tôi không quan tâm đến câu chuyện của anh ta bằng lý do của anh ta.)</li>

        <li value="4"><strong>Not</strong> any more: Không còn nữa /nɒt ˈɛniː mɔːr/</li>
        <li className="list-none margin-bottom-20">I do<strong>n't</strong> eat meat any more. (Tôi không ăn thịt nữa.)</li>

        <li value="5"><strong>Not</strong> at all: Không hề, không chút nào /nɒt ət ɔːl/</li>
        <li className="list-none margin-bottom-20">I do<strong>n't</strong> like this movie at all. (Tôi không thích bộ phim này chút nào.)</li>

        <li value="6"><strong>Not</strong> only that, but also: Không những thế mà còn /nɒt ˈoʊnliː ðæt, bʌt ˈɔːlsəʊ/</li>
        <li className="list-none margin-bottom-20"><strong>Not</strong> only is she kind, but she is also very helpful. (Không những cô ấy tốt bụng mà còn rất hữu ích.)</li>

        <li value="7"><strong>Not</strong> as... as: Không bằng /nɒt æz ... æz/</li>
        <li className="list-none margin-bottom-20">She is <strong>not</strong> as tall as her brother. (Cô ấy không cao bằng anh trai mình.)</li>

        <li value="8"><strong>Not</strong> a bit: Không chút nào /nɒt ə bɪt/</li>
        <li className="list-none margin-bottom-20">I am <strong>not</strong> a bit tired. (Tôi không mệt mỏi chút nào.)</li>

        <li value="9"><strong>Not</strong> nearly: Không hề, không gần bằng /nɒt ˈnɪərliː/</li>
        <li className="list-none margin-bottom-20">This task is <strong>not</strong> nearly as difficult as I thought. (Công việc này không khó bằng những gì tôi nghĩ.)</li>

        <li value="10"><strong>Not</strong> so much: Không phải là... /nɒt səʊ mʌtʃ/</li>
        <li className="list-none margin-bottom-20">It's <strong>not</strong> so much a problem as a challenge. (Đó không phải là một vấn đề mà là một thử thách.)</li>

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