import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function (): React.JSX.Element {

  const postId = "";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-xac-thuc-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: xác thực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">GENuinely
        <sup>
          <Link to="/vocabulary/GENuinely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/GENuinely-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>GENuinely</strong>" (một cách chân thành) và các cụm từ thường đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [GENuinely][GEN u ine ly] /ˈdʒenjuɪnli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">GENūinely</Link>/ 
              
              &nbsp;⬤••• (4x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "một cách chân thành", "một cách thật lòng". Từ này thường được dùng để mô tả cảm xúc, hành động hoặc mối quan hệ mang tính chân thật, không giả tạo.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">She was GENuinely HAPpy to SEE her OLD FRIENDS.</li>
        <li className="list-none margin-bottom-20">Cô ấy rất vui khi gặp lại bạn bè cũ.</li>

        <li value="2">He was GENuinely conCERNED about her WELL-BEing.</li>
        <li className="list-none margin-bottom-20">Anh ấy rất quan tâm đến sức khỏe của cô ấy.</li>

        <li value="3">I am GENuinely GRATEful for your HELP.</li>
        <li className="list-none margin-bottom-20">Tôi thật sự biết ơn sự giúp đỡ của bạn.</li>

        <li value="4">He was GENuinely SORry for his  misTAKE.</li>
        <li className="list-none margin-bottom-20">Anh ấy rất hối hận về lỗi lầm của mình.</li>

        <li value="5">She was GENuinely INterested in his STOry.</li>
        <li className="list-none margin-bottom-20">Cô ấy rất quan tâm đến câu chuyện của anh ấy.</li>

        <li value="6">I GENuinely beLIEVE in the POWer of LOVE.</li>
        <li className="list-none margin-bottom-20">Tôi thật sự tin vào sức mạnh của tình yêu.</li>

        <li value="7">I GENuinely adMIRE her COUrage.</li>
        <li className="list-none margin-bottom-20">Tôi rất ngưỡng mộ sự dũng cảm của cô ấy.</li>

        <li value="8">I GENuinely apPREciate your KINDness.</li>
        <li className="list-none margin-bottom-20">Tôi thật sự trân trọng lòng tốt của bạn.</li>

        <li value="9">She GENuinely CARES about the WELfare of OTHers.</li>
        <li className="list-none margin-bottom-20">Cô ấy thật sự quan tâm đến phúc lợi của người khác.</li>

        <li value="10">He GENuinely LOVES his FAMily.</li>
        <li className="list-none margin-bottom-20">Anh ấy thật sự yêu thương gia đình của mình.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh tính chân thật, không giả tạo của cảm xúc, hành động hoặc mối quan hệ. Chúng thường được dùng trong các ngữ cảnh giao tiếp để thể hiện sự chân thành và lòng tin.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>GENuinely</strong>" thường được đặt trước Tính Cơ để nhấn mạnh ý nghĩa của chúng.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong các tình huống giao tiếp đòi hỏi sự chân thành và tin cậy.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

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