import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function esPECially2(): React.JSX.Element {

  const postId = "esPECially2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#diem-nhan-dac-biet-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: đặc biệt</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">esPECially
        <sup>
          <Link to="/vocabulary/esPECially-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/esPECially-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>esPECially</strong>" (đặc biệt là) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [esPECIALly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ės PEC ia̛l ly</Link>] /ɪˈspɛʃəli/ •⬤• (3x)
              
            </span>
              
            &nbsp;thường được sử dụng để nhấn mạnh một điều gì đó đặc biệt quan trọng, nổi bật hoặc phù hợp hơn so với những thứ khác trong một ngữ cảnh nhất định.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">i am esPECially INTERested in LEARNing about DIFferent CULtures.</li>
        <li className="list-none margin-bottom-20">Tôi đặc biệt quan tâm đến việc tìm hiểu về các nền văn hóa khác nhau.</li>

        <li value="2">she is esPECially GOOD at PLAYing the piANo.</li>
        <li className="list-none margin-bottom-20">Cô ấy đặc biệt giỏi chơi piano.</li>

        <li value="3">the SLEEP is esPECially imPORTant for GROWing CHILdren.</li>
        <li className="list-none margin-bottom-20">Giấc ngủ đặc biệt quan trọng đối với trẻ em đang lớn.</li>

        <li value="4">the FInal exAM was esPECially DIFficult.</li>
        <li className="list-none margin-bottom-20">Bài thi cuối kỳ đặc biệt khó.</li>

        <li value="5">this is esPECially TRUE of PEOple who LIVE in BIG CITies.</li>
        <li className="list-none margin-bottom-20">Điều này đặc biệt đúng với những người sống ở các thành phố lớn.</li>

        <li value="6">i enJOY WALKing in the PARK, esPECially when the WEATHer is NICE.</li>
        <li className="list-none margin-bottom-20">Tôi thích đi dạo trong công viên, đặc biệt là khi trời đẹp.</li>

        <li value="7">i esPECially LIKE CHOCOLate ICE CREAM.</li>
        <li className="list-none margin-bottom-20">Tôi đặc biệt thích kem sô cô la.</li>

        <li value="8">i've been FEELing TIred LATEly, esPECially since i've been WORKing so HARD.</li>
        <li className="list-none margin-bottom-20">Gần đây tôi cảm thấy mệt mỏi, đặc biệt là từ khi tôi làm việc quá nhiều.</li>

        <li value="9">this BOOK is esPECially for beGINners.</li>
        <li className="list-none margin-bottom-20">Cuốn sách này đặc biệt dành cho người mới bắt đầu.</li>

        <li value="10">it's a GOOD DEAL, esPECially conSIDering the QUALity.</li>
        <li className="list-none margin-bottom-20">Đó là một giao dịch tốt, đặc biệt khi xét đến chất lượng.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh một điều gì đó đặc biệt, nổi bật hoặc phù hợp hơn so với những thứ khác. Chúng giúp làm cho câu nói trở nên cụ thể và sinh động hơn.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>esPECially</strong>" thường được đặt trước danh cơ, Tính Cơ hoặc câu con.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn nói và văn viết để làm cho câu nói thêm phần nhấn mạnh.</li>

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