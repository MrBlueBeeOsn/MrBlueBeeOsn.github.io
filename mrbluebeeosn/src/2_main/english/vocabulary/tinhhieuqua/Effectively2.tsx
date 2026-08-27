import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function efFECtively2(): React.JSX.Element {

  const postId = "efFECtively2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hieu-qua-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: hiệu quả</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">effectively
        <sup>
          <Link to="/vocabulary/efFECtively-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/efFECtively-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>effectively</strong>" (một cách hiệu quả) và các cụm từ thường đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
               [efFECtively][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ėf FEC tive ly</Link>] /ɪˈfektɪvli/ •⬤•• (4x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "một cách hiệu quả", "một cách có kết quả". Từ này thường được dùng để mô tả hành động, quá trình hoặc phương pháp đạt được mục tiêu một cách tốt nhất.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">she efFECtively comMUNicated her iDEas to the TEAM.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã truyền đạt ý tưởng của mình đến cả nhóm một cách hiệu quả.</li>

        <li value="2">he efFECtively MANaged the PROJect within the DEADline.</li>
        <li className="list-none margin-bottom-20">Anh ấy đã quản lý dự án một cách hiệu quả trong thời hạn cho phép.</li>

        <li value="3">the TEAM efFECtively SOLVED the PROBlem.</li>
        <li className="list-none margin-bottom-20">Đội đã giải quyết vấn đề một cách hiệu quả.</li>

        <li value="4">the NEW POLicy was efFECtively IMplemented.</li>
        <li className="list-none margin-bottom-20">Chính sách mới đã được thực hiện một cách hiệu quả.</li>

        <li value="5">she efFECtively USED her TIME to STUDy for the exAM.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã sử dụng thời gian của mình một cách hiệu quả để ôn thi.</li>

        <li value="6">the COACH efFECtively MOtivated the TEAM to WIN the GAME.</li>
        <li className="list-none margin-bottom-20">Huấn luyện viên đã động viên đội bóng một cách hiệu quả để giành chiến thắng.</li>

        <li value="7">the TEACHer efFECtively TAUGHT the STUdents the NEW CONcept.</li>
        <li className="list-none margin-bottom-20">Giáo viên đã dạy học sinh khái niệm mới một cách hiệu quả.</li>

        <li value="8">he efFECtively LED the COMpany through the CRIsis.</li>
        <li className="list-none margin-bottom-20">Anh ấy đã lãnh đạo công ty vượt qua khủng hoảng một cách hiệu quả.</li>

        <li value="9">she efFECtively neGOtiated a BETter DEAL for the COMpany.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã thương lượng một thỏa thuận tốt hơn cho công ty.</li>

        <li value="10">the TEAM efFECtively colLABorated on the PROJect.</li>
        <li className="list-none margin-bottom-20">Đội đã hợp tác hiệu quả trong dự án.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh hiệu quả của một hành động, quá trình hoặc phương pháp. Chúng thường được dùng để đánh giá cao khả năng, kỹ năng hoặc kết quả của một người hoặc một nhóm người.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>efFECtively</strong>" thường được đặt trước hành động để nhấn mạnh ý nghĩa của chúng.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn viết và văn nói để mô tả những gì đạt được một cách tốt nhất.</li>

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