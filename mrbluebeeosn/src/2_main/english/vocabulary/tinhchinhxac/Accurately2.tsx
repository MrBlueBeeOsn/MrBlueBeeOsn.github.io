import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ACcurately2(): React.JSX.Element {

  const postId = "ACcurately2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chinh-xac-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: chính xác</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ACcurately
        <sup>
          <Link to="/vocabulary/ACcurately-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/ACcurately-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>ACcurately</strong>" và các cụm từ thường đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [ACcurately][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">AC cư̇ ra̛te ly</Link>] /ˈækjərətli/ ⬤••• (4x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "một cách chính xác", "một cách đúng đắn". Từ này thường được dùng để mô tả việc làm gì đó một cách tỉ mỉ, không sai sót, trùng khớp với thực tế.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the staTIStics ACcurately reFLECT the CURrent ecoNOMic situAtion.</li>
        <li className="list-none margin-bottom-20">Thống kê phản ánh chính xác tình hình kinh tế hiện tại.</li>

        <li value="2">the SCIentist ACcurately MEASured the TEMPERature of the soLUtion.</li>
        <li className="list-none margin-bottom-20">Nhà khoa học đã đo chính xác nhiệt độ của dung dịch.</li>

        <li value="3">the meteoROLogist ACcurately preDICTed the arRIval of the STORM.</li>
        <li className="list-none margin-bottom-20">Nhà khí tượng đã dự báo chính xác thời điểm cơn bão đến.</li>

        <li value="4">the WITness ACcurately deSCRIBED the SUSpect to the poLICE.</li>
        <li className="list-none margin-bottom-20">Nhân chứng đã mô tả chính xác nghi phạm cho cảnh sát.</li>

        <li value="5">the EXpert ACcurately iDENtified the RARE BIRD SPEcies.</li>
        <li className="list-none margin-bottom-20">Chuyên gia đã nhận dạng chính xác loài chim quý hiếm.</li>

        <li value="6">the engiNEER ACcurately CALculated the LOAD-BEARing caPACity of the BRIDGE.</li>
        <li className="list-none margin-bottom-20">Kỹ sư đã tính toán chính xác khả năng chịu tải của cây cầu.</li>

        <li value="7">the transLAtor ACcurately transLAted the DOCument from ENGlish into SPANish.</li>
        <li className="list-none margin-bottom-20">Người phiên dịch đã dịch chính xác tài liệu từ tiếng Anh sang tiếng Tây Ban Nha.</li>

        <li value="8">the MODel ACcurately repreSENTS the STRUCture of the MOLecule.</li>
        <li className="list-none margin-bottom-20">Mô hình đại diện chính xác cấu trúc của phân tử.</li>

        <li value="9">the TEACHer ACcurately asSESSED the STUdent's perFORmance.</li>
        <li className="list-none margin-bottom-20">Giáo viên đã đánh giá chính xác kết quả học tập của học sinh.</li>

        <li value="10">the ARTist ACcurately reproDUCED the SCENE in her PAINTing.</li>
        <li className="list-none margin-bottom-20">Họa sĩ đã tái tạo cảnh vật một cách chính xác trong bức tranh của mình.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh khái niệm về sự chính xác, sự tỉ mỉ và sự trùng khớp với thực tế. Chúng thường được sử dụng trong các ngữ cảnh liên quan đến khoa học, kỹ thuật, nghệ thuật và các hoạt động đòi hỏi độ chính xác cao.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>ACcurately</strong>" thường được đặt trước Tính Cơ hoặc Trạng Cơ để nhấn mạnh ý nghĩa của chúng.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn nói và văn viết để tạo ấn tượng mạnh.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 3, 2024 · by 💎GEM ·</span>
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