import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function corRECTly2(): React.JSX.Element {

  const postId = "corRECTly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chinh-xac"><mark className="highlight-tertiary-padding-4-8">ADverbs: chính xác</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">corRECTly
        <sup>
          <Link to="/vocabulary/corRECTly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/corRECTly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>corRECTly</strong>" (một cách chính xác) và các cụm từ thường đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
               [corRECTly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">cơr RECT ly</Link>] /kəˈrektli/ •⬤• (3x)
              
            </span>
              
              &nbsp;trong tiếng Anh có nghĩa là "một cách chính xác", "đúng đắn", thường được dùng để mô tả một hành động, câu trả lời, hoặc thông tin hoàn toàn đúng và không có sai sót.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the deTECtive corRECTly iDENtified the SUSpect.</li>
        <li className="list-none margin-bottom-20">Thám tử đã nhận dạng chính xác nghi phạm.</li>

        <li value="2">she corRECTly ANswered all theQUEStions on the TEST.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã trả lời chính xác tất cả các câu hỏi trong bài kiểm tra.</li>

        <li value="3">the MESsage was corRECTly inTERpreted by the reCEIver.</li>
        <li className="list-none margin-bottom-20">Thông điệp đã được người nhận diễn giải chính xác.</li>

        <li value="4">he corRECTly SPELLED every WORD on the LIST.</li>
        <li className="list-none margin-bottom-20">Anh ấy đã viết chính tả đúng mọi từ trong danh sách.</li>

        <li value="5">the engiNEER corRECTly CALculated the LOAD-BEARing caPACity of the BRIDGE.</li>
        <li className="list-none margin-bottom-20">Kỹ sư đã tính toán chính xác khả năng chịu tải của cây cầu.</li>

        <li value="6">the RULES were corRECTly apPLIED in this CASE.</li>
        <li className="list-none margin-bottom-20">Quy tắc đã được áp dụng chính xác trong trường hợp này.</li>

        <li value="7">the DOCtor corRECTly DIagnosed the PAtient's ILLness.</li>
        <li className="list-none margin-bottom-20">Bác sĩ đã chẩn đoán chính xác bệnh của bệnh nhân.</li>

        <li value="8">the CHESS PIEces were corRECTly poSITioned on the BOARD.</li>
        <li className="list-none margin-bottom-20">Các quân cờ đã được đặt đúng vị trí trên bàn cờ.</li>

        <li value="9">the SCIentist corRECTly MEASured the TEMPERature of the soLUtion.</li>
        <li className="list-none margin-bottom-20">Nhà khoa học đã đo chính xác nhiệt độ của dung dịch.</li>

        <li value="10">the inSTRUCtions were corRECTly underSTOOD by ALL the parTICipants.</li>
        <li className="list-none margin-bottom-20">Hướng dẫn đã được tất cả người tham gia hiểu chính xác.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh sự chính xác và đúng đắn trong việc thực hiện một hành động hoặc cung cấp thông tin. Chúng thường được sử dụng để đánh giá kết quả của một quá trình hoặc để xác nhận tính đúng đắn của một điều gì đó.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>corRECTly</strong>" thường được đặt trước hành động quá khứ phân từ để nhấn mạnh ý nghĩa của chúng.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong các văn bản hướng dẫn, báo cáo hoặc các văn bản mang tính chuyên môn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎GEM ·</span>
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