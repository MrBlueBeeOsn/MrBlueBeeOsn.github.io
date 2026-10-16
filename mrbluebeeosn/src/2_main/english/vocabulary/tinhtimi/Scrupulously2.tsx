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

      <h4><HashLink smooth to="/vocabulary#adverbs-ti-mi"><mark className="highlight-tertiary-padding-4-8">ADverbs: tỉ mỉ</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SCRUpulously
        <sup>
          <Link to="/vocabulary/SCRUpulously-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/SCRUpulously-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#CLEANED">CLEANED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FOLlowed">FOLlowed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#eXAMined">eXAMined</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#DOCumented">DOCumented</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#aVOIDed">aVOIDed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#mainTAINED">mainTAINED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#adHERED-to">adHERED to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ORganized">ORganized</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#PLANNED">PLANNED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#reCORDed">reCORDed</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>SCRUpulously</strong>" (một cách cẩn trọng) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">

            <span className="highlight-255-padding-3-6">

              SCRUpulously \<Link to="/pronunciation/5-vowel-system">SCRÜ pư lơus ly</Link>\ /ˈskruː.pjə.ləs.li/ ⬤••• (FOUR SYLlables)

            </span>
              
            &nbsp;thường được dùng để mô tả một hành động hoặc trạng thái được thực hiện một cách tỉ mỉ, cẩn thận, chú ý đến từng chi tiết nhỏ nhất.
          
          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="CLEANED">the SURgeon SCRUpulously CLEANED his HANDS be<strong>fore</strong> the operAtion.</li>
        <li className="list-none margin-bottom-20">Bác sĩ phẫu thuật đã rửa tay thật kỹ lưỡng trước khi phẫu thuật.</li>

        <li value="2" id="FOLlowed">the acCOUNtant SCRUpulously FOLlowed the reguLAtions.</li>
        <li className="list-none margin-bottom-20">Kế toán viên đã tuân thủ nghiêm ngặt các quy định.</li>

        <li value="3" id="eXAMined">the reSEARCHer SCRUpulously eXAMined the CRIME SCENE.</li>
        <li className="list-none margin-bottom-20">Nhà điều tra đã kiểm tra hiện trường vụ án một cách tỉ mỉ.</li>

        <li value="4" id="DOCumented">the reSEARCHer SCRUpulously DOCumented her FINDings.</li>
        <li className="list-none margin-bottom-20">Nhà nghiên cứu đã ghi chép cẩn thận các kết quả nghiên cứu của mình.</li>

        <li value="5" id="aVOIDed">the poliTIcian SCRUpulously aVOIDed any CONflict of INterest.</li>
        <li className="list-none margin-bottom-20">Vị chính trị gia này đã cẩn trọng tránh mọi xung đột lợi ích.</li>

        <li value="6" id="mainTAINED">the muSEum SCRUpulously mainTAINED the ARtifacts.</li>
        <li className="list-none margin-bottom-20">Bảo tàng đã bảo quản các hiện vật một cách cẩn thận.</li>

        <li value="7" id="adHERED-to">the COMpany SCRUpulously adHERED to the SAFEty reguLAtions.</li>
        <li className="list-none margin-bottom-20">Công ty đã tuân thủ nghiêm ngặt các quy định về an toàn.</li>

        <li value="8" id="ORganized">the liBRARian SCRUpulously ORganized the BOOKS.</li>
        <li className="list-none margin-bottom-20">Thủ thư đã sắp xếp các cuốn sách một cách cẩn thận và chu đáo.</li>

        <li value="9" id="PLANNED">they SCRUpulously PLANNED the eVENT.</li>
        <li className="list-none margin-bottom-20">Họ đã lên kế hoạch cho sự kiện này một cách tỉ mỉ.</li>

        <li value="10" id="reCORDed">the SCIentist SCRUpulously reCORDed the DAta.</li>
        <li className="list-none margin-bottom-20">Nhà khoa học đã ghi chép dữ liệu một cách tỉ mỉ.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính tỉ mỉ, cẩn thận, chú ý đến từng chi tiết nhỏ. Chúng thường được sử dụng để miêu tả những hành động hoặc trạng thái được thực hiện một cách kỹ lưỡng.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"<strong>SCRUpulously</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này mang nghĩa tích cực, thể hiện sự cẩn thận và tỉ mỉ.</li>

        </ul>
      
      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
          
        <div className="post-date no-margin">
          <span>April 14, 2025 · by 💎GEM ·</span>
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