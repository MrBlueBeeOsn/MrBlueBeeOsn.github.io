import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SCRUpulously2(): React.JSX.Element {

  const postId = "SCRUpulously2";

  return (<>

  <main className="image image2">

    <article>

      <h4><HashLink smooth to="/vocabulary#tinh-ti-mi-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: tỉ mỉ</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SCRUpulously
        <sup>
          <Link to="/vocabulary/SCRUpulously-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/SCRUpulously-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>SCRUpulously</strong>" (một cách tỉ mỉ) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">

            <span className="highlight-255-padding-3-6">

              [SCRUpulously][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">SCRÜ pư̇ lơus ly</Link>] /ˈskruː.pjə.ləs.li/ ⬤••• (4x)

            </span>
              
            &nbsp;thường được dùng để mô tả một hành động hoặc trạng thái được thực hiện một cách tỉ mỉ, cẩn thận, chú ý đến từng chi tiết nhỏ nhất.
          
          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the SURgeon SCRUpulously CLEANED his HANDS before the operAtion.</li>
        <li className="list-none margin-bottom-20">Bác sĩ phẫu thuật làm sạch tay một cách tỉ mỉ trước khi phẫu thuật.</li>

        <li value="2">the acCOUNtant SCRUpulously FOLlowed the reguLAtions.</li>
        <li className="list-none margin-bottom-20">Kế toán tuân thủ các quy định một cách tỉ mỉ.</li>

        <li value="3">the REsearcher SCRUpulously exAMined the CRIME SCENE.</li>
        <li className="list-none margin-bottom-20">Thám tử kiểm tra hiện trường vụ án một cách tỉ mỉ.</li>

        <li value="4">the REsearcher SCRUpulously DOCumented her FINDings.</li>
        <li className="list-none margin-bottom-20">Nhà nghiên cứu ghi chép những phát hiện của mình một cách tỉ mỉ.</li>

        <li value="5">the poliTIcian SCRUpulously aVOIDed any CONflict of INterest.</li>
        <li className="list-none margin-bottom-20">Chính trị gia tránh mọi xung đột lợi ích một cách tỉ mỉ.</li>

        <li value="6">the muSEum SCRUpulously mainTAINED the ARtifacts.</li>
        <li className="list-none margin-bottom-20">Bảo tàng duy trì các hiện vật một cách tỉ mỉ.</li>

        <li value="7">the COMpany SCRUpulously adHERED to the SAFEty reguLAtions.</li>
        <li className="list-none margin-bottom-20">Công ty tuân thủ chặt chẽ các quy định an toàn một cách tỉ mỉ.</li>

        <li value="8">the liBRARian SCRUpulously ORganized the BOOKS.</li>
        <li className="list-none margin-bottom-20">Người thủ thư sắp xếp sách một cách tỉ mỉ.</li>

        <li value="9">they SCRUpulously PLANNED the eVENT.</li>
        <li className="list-none margin-bottom-20">Họ lên kế hoạch cho sự kiện một cách tỉ mỉ.</li>

        <li value="10">the SCIentist SCRUpulously reCORDed the DAta.</li>
        <li className="list-none margin-bottom-20">Nhà khoa học ghi lại dữ liệu một cách tỉ mỉ.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính tỉ mỉ, cẩn thận, chú ý đến từng chi tiết nhỏ. Chúng thường được sử dụng để miêu tả những hành động hoặc trạng thái được thực hiện một cách kỹ lưỡng.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>SCRUpulously</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này mang nghĩa tích cực, thể hiện sự cẩn thận và tỉ mỉ.</li>

        </ul>
      
      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
          
        <div className="post-date no-margin">
          <span>April 14, 2025 · by 💎Gem ·</span>
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