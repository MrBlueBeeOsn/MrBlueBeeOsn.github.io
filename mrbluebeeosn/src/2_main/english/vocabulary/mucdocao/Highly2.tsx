import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function HIGHly2(): React.JSX.Element {

  const postId = "HIGHly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#muc-do-cao-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: mức độ cao</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">HIGHly
        <sup>
          <Link to="/vocabulary/HIGHly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/HIGHly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>HIGHly</strong>" (rất, cao) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [HIGHly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">HĪGH ly</Link>] /ˈhaɪli/ ⬤• (2x)
              
            </span>
              
            &nbsp;là một Trạng Cơ dùng để nhấn mạnh mức độ cao của một Tính Cơ hoặc trạng cơ. Nó thường được sử dụng để diễn tả một điều gì đó ở mức độ rất lớn, rất tích cực hoặc rất tiêu cực.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">this BOOK is HIGHly recomMENDed for anyone INTERested in HIStory.</li>
        <li className="list-none margin-bottom-20">Cuốn sách này rất được khuyến nghị cho bất kỳ ai quan tâm đến lịch sử.</li>

        <li value="2">the STUdents were HIGHly SKILLED SURgeon.</li>
        <li className="list-none margin-bottom-20">Cô ấy là một bác sĩ phẫu thuật rất giỏi.</li>

        <li value="3">the STUdents were HIGHly MOtivated to DO WELL on the eXAM.</li>
        <li className="list-none margin-bottom-20">Các học sinh rất có động lực để làm tốt bài kiểm tra.</li>

        <li value="4">his NEW MEDicine is HIGHly efFECtive in TREATing the diSEASE.</li>
        <li className="list-none margin-bottom-20">Thuốc mới này rất hiệu quả trong việc điều trị bệnh.</li>

        <li value="5">the JOB MARket is HIGHly comPETitive.</li>
        <li className="list-none margin-bottom-20">Thị trường việc làm rất cạnh tranh.</li>

        <li value="6">it is HIGHly unLIKEly that he will WIN the LOTtery.</li>
        <li className="list-none margin-bottom-20">Rất khó có thể anh ấy sẽ trúng số.</li>

        <li value="7">the FLU is HIGHly conTAgious.</li>
        <li className="list-none margin-bottom-20">Cúm rất dễ lây.</li>

        <li value="8">the MOvies was HIGHly PRAISED by the CRITics.</li>
        <li className="list-none margin-bottom-20">Bộ phim đã được các nhà phê bình ca ngợi rất nhiều.</li>

        <li value="9">the SIGN is HIGHly VISible from the HIGHway.</li>
        <li className="list-none margin-bottom-20">Biển báo rất dễ thấy từ xa lộ.</li>

        <li value="10">the techNOLogy USED in this PRODuct is HIGHly soPHISticated.</li>
        <li className="list-none margin-bottom-20">Công nghệ được sử dụng trong sản phẩm này rất tinh vi.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh mức độ cao của một tính chất hoặc đặc điểm. Chúng thường được sử dụng để tạo ấn tượng mạnh hoặc để nhấn mạnh một điểm quan trọng.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>HIGHly</strong>" thường đứng trước Tính Cơ hoặc Trạng Cơ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như "<Link to="/vocabulary/exTREMEly-1">exTREMEly</Link>", "<Link to="/vocabulary/VERy-1">VERy</Link>", "reMARKably" để tạo sự đa dạng trong văn phong.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 5, 2024 · by 💎GEM ·</span>
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