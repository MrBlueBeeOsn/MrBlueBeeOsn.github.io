import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function atTENtively2(): React.JSX.Element {

  const postId = "atTENtively2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-can-than-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: cẩn thận</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">atTENtively
        <sup>
          <Link to="/vocabulary/atTENtively-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/atTENtively-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>atTENtively</strong>" (một cách chăm chú) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [atTENtively][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">a̛t TEN tive ly</Link>] /əˈten.tɪv.li/ •⬤•• (4x)
              
            </span>
              
            &nbsp;thường được dùng để mô tả một hành động được thực hiện một cách chăm chú, tập trung, chú ý đến từng chi tiết.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">she atTENtively LISTENed to the SPEAKer.</li>
        <li className="list-none margin-bottom-20">Cô ấy lắng nghe người nói một cách chăm chú.</li>

        <li value="2">the STUdents atTENtively WATCHED the demonSTRAtion.</li>
        <li className="list-none margin-bottom-20">Các học sinh xem phần trình diễn một cách chăm chú.</li>

        <li value="3">he atTENtively READ the CONtract before SIGNing it.</li>
        <li className="list-none margin-bottom-20">Anh ấy đọc hợp đồng một cách chăm chú trước khi ký.</li>

        <li value="4">the SCIentist atTENtively obSERVED the CELLS under the MIcroscope.</li>
        <li className="list-none margin-bottom-20">Nhà khoa học quan sát các tế bào dưới kính hiển vi một cách chăm chú.</li>

        <li value="5">she atTENtively STUDied for her exAMS.</li>
        <li className="list-none margin-bottom-20">Cô ấy học bài cho kỳ thi của mình một cách chăm chú.</li>

        <li value="6">the DOG atTENtively FOLlowed its OWNer's comMANDS.</li>
        <li className="list-none margin-bottom-20">Con chó theo dõi lệnh của chủ nhân một cách chăm chú.</li>

        <li value="7">the WORKers atTENtively LIStened to the SAFEty inSTRUCtions.</li>
        <li className="list-none margin-bottom-20">Các công nhân lắng nghe hướng dẫn an toàn một cách chăm chú.</li>

        <li value="8">he atTENtively PAID atTENtion to the LECture.</li>
        <li className="list-none margin-bottom-20">Anh ấy chú ý đến bài giảng một cách chăm chú.</li>

        <li value="9">she atTENtively TOOK NOTES DURing the MEETing.</li>
        <li className="list-none margin-bottom-20">Cô ấy ghi chú trong cuộc họp một cách chăm chú.</li>

        <li value="10">the DOCtor atTENtively exAMined the PAtient.</li>
        <li className="list-none margin-bottom-20">Bác sĩ kiểm tra bệnh nhân một cách chăm chú.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính chăm chú, tập trung của một hành động. Chúng thường được sử dụng để miêu tả những hành động được thực hiện với sự cẩn thận và quan tâm đến từng chi tiết.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>atTENtively</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này mang nghĩa tích cực, thể hiện sự chăm chú, tập trung.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 2, 2025 · by 💎GEM ·</span>
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