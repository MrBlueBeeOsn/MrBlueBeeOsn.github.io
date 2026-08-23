import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TIRElessly2(): React.JSX.Element {

  const postId = "TIRElessly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-kien-nhan-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: kiên nhẫn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">TIRElessly
        <sup>
          <Link to="/vocabulary/TIRElessly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/TIRElessly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>TIRElessly</strong>" (không mệt mỏi, kiên trì) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [TIRElessly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">TĪRE le̛s sly</Link>] /ˈtaɪrləsli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;thường được dùng để mô tả hành động được thực hiện một cách không ngừng nghỉ, kiên trì, không biết mệt mỏi.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the SCIentists WORKED TIRElessly to FIND a CURE for the disEASE.</li>
        <li className="list-none margin-bottom-20">Các nhà khoa học làm việc không ngừng nghỉ để tìm ra phương pháp chữa trị cho căn bệnh.</li>

        <li value="2">she TIRElessly purSUED her DREAMS of beCOMing a DOCtor.</li>
        <li className="list-none margin-bottom-20">Cô ấy không ngừng theo đuổi ước mơ trở thành bác sĩ.</li>

        <li value="3">the deTECtives TIRElessly SEARCHED for the MISsing PERson.</li>
        <li className="list-none margin-bottom-20">Các thám tử không ngừng tìm kiếm người mất tích.</li>

        <li value="4">the STUdent TIRElessly STUDied for the exAM.</li>
        <li className="list-none margin-bottom-20">Sinh viên học tập không ngừng nghỉ để chuẩn bị cho kỳ thi.</li>

        <li value="5">the ACtivist TIRElessly camPAIGNED for HUman RIGHTS.</li>
        <li className="list-none margin-bottom-20">Nhà hoạt động không ngừng vận động vì quyền con người.</li>

        <li value="6">the LAWyer TIRElessly deFENded his CLIent.</li>
        <li className="list-none margin-bottom-20">Luật sư không ngừng bảo vệ khách hàng của mình.</li>

        <li value="7">the COMpany TIRElessly proMOted its NEW PRODuct.</li>
        <li className="list-none margin-bottom-20">Công ty không ngừng quảng bá sản phẩm mới của mình.</li>

        <li value="8">the exPLORers TIRElessly exPLORED the unKNOWN TERritory.</li>
        <li className="list-none margin-bottom-20">Các nhà thám hiểm không ngừng khám phá vùng đất chưa biết.</li>

        <li value="9">the ARTist TIRElessly creAted NEW WORKS of ART.</li>
        <li className="list-none margin-bottom-20">Nghệ sĩ không ngừng tạo ra những tác phẩm nghệ thuật mới.</li>

        <li value="10">the ATHlete TIRElessly imPROVED his SKILLS.</li>
        <li className="list-none margin-bottom-20">Vận động viên không ngừng cải thiện kỹ năng của mình.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh sự kiên trì, bền bỉ và nỗ lực không ngừng nghỉ. Chúng thường được sử dụng để miêu tả những người có ý chí mạnh mẽ, quyết tâm cao và luôn hướng tới mục tiêu của mình.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>TIRElessly</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như "inCESsantly", "perSIStently", "reLENTlessly" để tạo sự đa dạng trong văn phong.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 14, 2024 · by 💎GEM ·</span>
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