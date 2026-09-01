import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function apPARently2(): React.JSX.Element {

  const postId = "apPARently2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-khong-chac"><mark className="highlight-tertiary-padding-4-8">ADverbs: không chắc</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">apPARently
        <sup>
          <Link to="/vocabulary/apPARently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/apPARently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>apPARently</strong>" (dường như) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [apPARently][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">a̛p PAR e̛nt ly</Link>] /əˈpærəntli/ •⬤•• (4x)
              
            </span>
              
            &nbsp;là một Trạng Cơ thường được dùng để thể hiện một thông tin mà người nói không chắc chắn hoàn toàn về tính xác thực của nó.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the TASK SEEMED apPARently imPOSsible, but he MANaged to comPLETE it.</li>
        <li className="list-none margin-bottom-20">Công việc đó dường như không thể, nhưng anh ấy đã hoàn thành nó.</li>

        <li value="2">apPARently TRUE, she is LEAVing the COMpany NEXT WEEK.</li>
        <li className="list-none margin-bottom-20">Dường như là đúng, cô ấy sẽ rời công ty vào tuần tới.</li>

        <li value="3">the NUMbers apPEARED to be apPARently RANdom, but there was a PATtern.</li>
        <li className="list-none margin-bottom-20">Những con số dường như ngẫu nhiên, nhưng có một quy luật.</li>

        <li value="4">the SNAKE LOOKED apPARently HARMless, but it was POIsonous.</li>
        <li className="list-none margin-bottom-20">Con rắn trông dường như vô hại, nhưng nó lại độc.</li>

        <li value="5">the PROBlem SEEMED apPARently SIMple, but it was ACtually VERy COMplex.</li>
        <li className="list-none margin-bottom-20">Vấn đề dường như đơn giản, nhưng thực ra rất phức tạp.</li>

        <li value="6">the TWO eVENTS SEEMED apPARently unreLAted, but they were conNECTed.</li>
        <li className="list-none margin-bottom-20">Hai sự kiện dường như không liên quan, nhưng chúng lại có mối liên hệ với nhau.</li>

        <li value="7">she NODded, apPARently SATisfied with his ANswer.</li>
        <li className="list-none margin-bottom-20">Cô ấy gật đầu, dường như hài lòng với câu trả lời của anh ấy.</li>

        <li value="8">he LOOKED aROUND, apPARently conFUSED.</li>
        <li className="list-none margin-bottom-20">Anh ta nhìn xung quanh, dường như đang bối rối.</li>

        <li value="9">the BOOK was apPARently forGOTten on the TRAIN.</li>
        <li className="list-none margin-bottom-20">Cuốn sách dường như đã bị quên trên tàu.</li>

        <li value="10">she SMILED, apPARently aWARE of his FEELings.</li>
        <li className="list-none margin-bottom-20">Cô ấy mỉm cười, dường như nhận thức được cảm xúc của anh ấy.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính không chắc chắn của thông tin. Chúng được sử dụng khi người nói không có bằng chứng rõ ràng để khẳng định một điều gì đó, nhưng lại có một sự hiểu biết hoặc tin đồn về nó.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>apPARently</strong>" thường đứng ở đầu câu hoặc trước một Tính Cơ hoặc danh cụm.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như "SEEMingly", "<Link to="/vocabulary/EVidently-1">EVidently</Link>", "osTENsibly" để tạo sự đa dạng trong văn phong.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 11, 2024 · by 💎GEM ·</span>
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