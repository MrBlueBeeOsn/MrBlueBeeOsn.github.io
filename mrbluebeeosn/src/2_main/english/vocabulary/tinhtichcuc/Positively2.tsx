import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function POSitively2(): React.JSX.Element {

  const postId = "POSitively2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-tich-cuc"><mark className="highlight-tertiary-padding-4-8">ADverbs: tích cực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">POSitively
        <sup>
          <Link to="/vocabulary/POSitively-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/POSitively-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#imPACted">imPACted</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#INfluenced">INfluenced</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#conTRIButed">conTRIButed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#afFECTS">afFECTS</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#reSPONDed">reSPONDed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CHANGED">CHANGED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#reinFORCED">reinFORCED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#proMOted">proMOted</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#VIEWED">VIEWED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#afFECT">afFECT</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>POSitively</strong>" (một cách tích cực) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              POSitively \<Link to="/pronunciation/5-vowel-system">POS i̛ tive ly</Link>\ /ˈpɒz.ə.tɪv.li/ ⬤••• (4x)
              
            </span>
              
            &nbsp;thường được dùng để mô tả một hành động, suy nghĩ hoặc kết quả mang tính tích cực, tốt đẹp.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="imPACted">the NEW POLicy POSitively [imPACted] emPLOYee moRALE.</li>
        <li className="list-none margin-bottom-20">Chính sách mới [đã tác động] tích cực đến tinh thần làm việc của nhân viên.</li>

        <li value="2" id="INfluenced">the MENtor POSitively [INfluenced] her caREER PATH.</li>
        <li className="list-none margin-bottom-20">Người cố vấn của cô ấy [đã ảnh hưởng] tích cực đến con đường sự nghiệp của cô ấy.</li>

        <li value="3" id="conTRIButed">he POSitively [conTRIButed] to the sucCESS of the PROject.</li>
        <li className="list-none margin-bottom-20">Anh ấy [đã đóng góp] tích cực vào sự thành công của dự án.</li>

        <li value="4" id="afFECTS">EXercise POSitively [afFECTS] both PHYSical and MENtal HEALTH.</li>
        <li className="list-none margin-bottom-20">Tập thể dục [tác động] tích cực đến cả sức khỏe thể chất và tinh thần.</li>

        <li value="5" id="reSPONDed">the CUStomers POSitively [reSPONDed] to the NEW PROduct.</li>
        <li className="list-none margin-bottom-20">Khách hàng [đã phản hồi] tích cực về sản phẩm mới.</li>

        <li value="6" id="CHANGED">the NEW MANagement POSitively [CHANGED] the COMpany's CULture.</li>
        <li className="list-none margin-bottom-20">Ban lãnh đạo mới [đã thay đổi] tích cực văn hóa công ty.</li>

        <li value="7" id="reinFORCED">the TEAcher POSitively [reinFORCED] the STUdents' EFforts.</li>
        <li className="list-none margin-bottom-20">Giáo viên [đã củng cố] tích cực những nỗ lực của học sinh.</li>

        <li value="8" id="proMOted">the camPAIGN POSitively [proMOted] HEALthy EAting HABits.</li>
        <li className="list-none margin-bottom-20">Chiến dịch [đã thúc đẩy] tích cực thói quen ăn uống lành mạnh.</li>

        <li value="9" id="VIEWED">he POSitively [VIEWED] the CHALlenges as opporTUnities for GROWTH.</li>
        <li className="list-none margin-bottom-20">Anh ấy [đã nhìn nhận] tích cực những thách thức như cơ hội để phát triển.</li>

        <li value="10" id="afFECT">HARD WORK and dediCAtion POSitively [afFECT] the OUTcome of any PROject.</li>
        <li className="list-none margin-bottom-20">Sự chăm chỉ và tận tâm [ảnh hưởng] tích cực đến kết quả của mọi dự án.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính tích cực, tốt đẹp của một hành động, suy nghĩ hoặc kết quả. Chúng thường được sử dụng để miêu tả những tình huống mang lại lợi ích, sự hài lòng hoặc thành công.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>POSitively</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này mang nghĩa tích cực, thể hiện sự tốt đẹp, có lợi.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>MARCH 29, 2025 · by 💎GEM ·</span>
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