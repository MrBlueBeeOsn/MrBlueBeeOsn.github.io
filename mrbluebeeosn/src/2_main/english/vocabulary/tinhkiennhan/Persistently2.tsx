import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function perSIStently2(): React.JSX.Element {

  const postId = "perSIStently2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-kien-nhan-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: kiên nhẫn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">perSIStently
        <sup>
          <Link to="/vocabulary/perSIStently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/perSIStently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>perSIStently</strong>" (một cách kiên trì) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [perSIStently][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">pe̛r SIS te̛nt ly</Link>] /pəˈsɪs.tənt.li/ •⬤•• (4x)
              
            </span>
              
            &nbsp;thường được dùng để mô tả một hành động hoặc một trạng thái được duy trì một cách kiên quyết, không ngừng nghỉ, mặc cho những khó khăn hoặc trở ngại.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">she perSIStently purSUED her DREAM of beCOMing a DOCtor.</li>
        <li className="list-none margin-bottom-20">Cô ấy kiên trì theo đuổi ước mơ trở thành bác sĩ.</li>

        <li value="2">the JOURnalist perSIStently QUEStioned the poliTICian about the SCANdal.</li>
        <li className="list-none margin-bottom-20">Nhà báo kiên trì đặt câu hỏi cho chính trị gia về vụ bê bối.</li>

        <li value="3">he perSIStently deNIED any inVOLVEment in the CRIME.</li>
        <li className="list-none margin-bottom-20">Anh ta kiên quyết phủ nhận bất kỳ liên quan nào đến tội ác.</li>

        <li value="4">it was perSIStently RUmored that he would reSIGN.</li>
        <li className="list-none margin-bottom-20">Người ta liên tục đồn đại rằng ông ta sẽ từ chức.</li>

        <li value="5">despite the DIFficulties, she reMAINED perSIStently optiMIStic.</li>
        <li className="list-none margin-bottom-20">Mặc dù gặp khó khăn, cô ấy vẫn luôn lạc quan.</li>

        <li value="6">he was perSIStently pesSIStic about the FUture of the COMpany.</li>
        <li className="list-none margin-bottom-20">Anh ta luôn bi quan về tương lai của công ty.</li>

        <li value="7">the NOISE from the conSTRUCtion SITE was perSIStently anNOYing.</li>
        <li className="list-none margin-bottom-20">Tiếng ồn từ công trường xây dựng làm phiền dai dẳng.</li>

        <li value="8">it has been perSIStently RAINing for DAYS.</li>
        <li className="list-none margin-bottom-20">Trời đã mưa dai dẳng suốt mấy ngày.</li>

        <li value="9">SOMEone was perSIStently KNOCKing at the DOOR.</li>
        <li className="list-none margin-bottom-20">Ai đó đang gõ cửa liên tục.</li>

        <li value="10">he perSIStently TRIED to SOLVE the PUZzle.</li>
        <li className="list-none margin-bottom-20">Anh ấy cố gắng không ngừng để giải câu đố.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính chất kiên trì, không bỏ cuộc của một hành động hoặc trạng thái. Chúng thường được sử dụng để mô tả những người có ý chí mạnh mẽ, quyết tâm cao và không dễ dàng từ bỏ.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>perSIStently</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể mang cả ý nghĩa tích cực và tiêu cực, tùy thuộc vào ngữ cảnh sử dụng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>December 27, 2024 · by 💎GEM ·</span>
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