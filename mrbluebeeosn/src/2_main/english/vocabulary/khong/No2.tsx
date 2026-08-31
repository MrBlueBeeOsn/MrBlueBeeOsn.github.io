import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NO2(): React.JSX.Element {

  const postId = "NO2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: không</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">NO
        <sup>
          <Link to="/vocabulary/NO-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/NO-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>NO</strong>" (không) khi nó đóng vai trò là một Trạng Cơ trong tiếng Anh nhé. </p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [NO][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">NŌ</Link>] /noʊ/ ⬤ (1x)
              
            </span>
              
            &nbsp;thường được biết đến như một từ phủ định, nhưng khi kết hợp với các từ khác, nó có thể tạo ra nhiều ý nghĩa và sắc thái khác nhau.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">she NO LONGer LIVES HERE.</li>
        <li className="list-none margin-bottom-20">Cô ấy không còn sống ở đây nữa.</li>

        <li value="2">i WANT NO MORE of your exCUses.</li>
        <li className="list-none margin-bottom-20">Tôi không muốn nghe thêm bất kỳ lời bào chữa nào của bạn nữa.</li>

        <li value="3">the TASK is NO LESS DIFficult than the LAST one.</li>
        <li className="list-none margin-bottom-20">Nhiệm vụ này không kém phần khó so với nhiệm vụ trước.</li>

        <li value="4">NO MATter what you SAY, i WON'T beLIEVE you.</li>
        <li className="list-none margin-bottom-20">Dù bạn nói gì đi nữa, tôi cũng sẽ không tin bạn.</li>

        <li value="5">NO WAY! i'm NOT GOing to do THAT.</li>
        <li className="list-none margin-bottom-20">Không đời nào! Tôi sẽ không làm việc đó.</li>

        <li value="6">NO WONder he's TIred. he's been WORKing ALL NIGHT.</li>
        <li className="list-none margin-bottom-20">Chẳng trách anh ấy mệt. Anh ấy đã làm việc cả đêm.</li>

        <li value="7">NO DOUBT she will sucCEED.</li>
        <li className="list-none margin-bottom-20">Chắc chắn cô ấy sẽ thành công.</li>

        <li value="8">would you LIKE some COFfee? NO THANKS, i'm NOT THIRsty.</li>
        <li className="list-none margin-bottom-20">Bạn có muốn uống cà phê không? Không, cảm ơn, tôi không khát.</li>

        <li value="9">the MEETing will be NO LONger than TWO HOURs.</li>
        <li className="list-none margin-bottom-20">Cuộc họp sẽ không quá hai giờ.</li>

        <li value="10">NO LESS than a THOUsand PEOple atTENDed the CONcert.</li>
        <li className="list-none margin-bottom-20">Có tới tận một ngàn người đã tham dự buổi hòa nhạc.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Trong nhiều trường hợp, "<strong>NO</strong>" có thể được coi như một phần tử trong một cụm từ hơn là một Trạng Cơ độc lập.</li>

          <li className="margin-bottom-20">Ý nghĩa của các cụm từ này có thể thay đổi tùy thuộc vào ngữ cảnh. Việc hiểu ngữ cảnh sẽ giúp bạn sử dụng các cụm từ này một cách chính xác.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những ví dụ trên sẽ giúp bạn hiểu rõ hơn về cách sử dụng từ "no" trong tiếng Anh! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>December 28, 2024 · by 💎GEM ·</span>
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