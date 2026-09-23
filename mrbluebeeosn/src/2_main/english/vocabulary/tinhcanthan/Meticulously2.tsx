import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function meTICulously2(): React.JSX.Element {

  const postId = "meTICulously2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-can-than"><mark className="highlight-tertiary-padding-4-8">ADverbs: cẩn thận</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">meTICulously
        <sup>
          <Link to="/vocabulary/meTICulously-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/meTICulously-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#PLANNED">PLANNED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CRAFTed-by">CRAFTed by</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#reSEARCHED">reSEARCHED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#mainTAINED">mainTAINED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#deTAILED">deTAILED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#obSERVED">obSERVED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#reCORDed">reCORDed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#prePARED">prePARED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#asSEMbled">asSEMbled</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#inSPECTed-for">inSPECTed for</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>meTICulously</strong>" (một cách tỉ mỉ) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              meTICulously \<Link to="/pronunciation/5-vowel-system">me̛ TIC ư lơus ly</Link>\ /məˈtɪkjələsli/ •⬤••• (5x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "một cách tỉ mỉ", "một cách cẩn thận từng chi tiết nhỏ". Từ này thường được dùng để mô tả một hành động được thực hiện với sự chăm chút và chính xác cao.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="PLANNED">she meTICulously [PLANNED] the PARTy, MAking SURE <strong>ever</strong>y DEtail was PERfect.</li>
        <li className="list-none margin-bottom-20">Cô ấy [đã lên kế hoạch] cho bữa tiệc một cách tỉ mỉ, đảm bảo mọi chi tiết đều hoàn hảo.</li>

        <li value="2" id="CRAFTed-by">the WATCH was meTICulously [CRAFTed by] SKILLED ARtisans.</li>
        <li className="list-none margin-bottom-20">Chiếc đồng hồ đã [được chế tác bởi] các nghệ nhân lành nghề một cách tỉ mỉ. (được các nghệ nhân lành nghề chế tác một cách tỉ mỉ.)</li>

        <li value="3" id="reSEARCHED">the rePORT was BASED on meTICulously [reSEARCHED] DAta.</li>
        <li className="list-none margin-bottom-20">Báo cáo này đã dựa trên dữ liệu [được nghiên cứu] một cách tỉ mỉ.</li>

        <li value="4" id="mainTAINED">the GARden was meTICulously [mainTAINED], with <strong>ever</strong>y PLANT PERfectly TRIMMED.</li>
        <li className="list-none margin-bottom-20">Khu vườn đã [được chăm sóc] tỉ mỉ, với từng cây đều được cắt tỉa hoàn hảo.</li>

        <li value="5" id="deTAILED">the PAINTing was meTICulously [deTAILED], CAPturing <strong>ever</strong>y NUance of the SUBject.</li>
        <li className="list-none margin-bottom-20">Bức tranh đã [được vẽ] chi tiết tỉ mỉ, bắt trọn mọi sắc thái của chủ thể.</li>

        <li value="6" id="obSERVED">the SCIentist meTICulously [obSERVED] the beHAvior of the ANimals.</li>
        <li className="list-none margin-bottom-20">Nhà khoa học [đã quan sát] hành vi của động vật một cách tỉ mỉ.</li>

        <li value="7" id="reCORDed">the hisTORian meTICulously [reCORDed] <strong>ever</strong>y DEtail of the eVent.</li>
        <li className="list-none margin-bottom-20">Nhà sử học [đã ghi chép] tỉ mỉ mọi chi tiết của sự kiện.</li>

        <li value="8" id="prePARED">the CHEF meTICulously [prePARED] the MEAL, Using Only the FRESHest inGREdients</li>
        <li className="list-none margin-bottom-20">Đầu bếp [đã chuẩn bị] món ăn một cách tỉ mỉ, chỉ sử dụng những nguyên liệu tươi ngon nhất.</li>

        <li value="9" id="asSEMbled">the MODel was meTICulously [asSEMbled] FOLlowing the inSTRUCtions eXACTly.</li>
        <li className="list-none margin-bottom-20">Mô hình đã [được lắp ráp] tỉ mỉ, tuân theo chính xác hướng dẫn.</li>

        <li value="10" id="inSPECTed-for">the engiNEER meTICulously [inSPECTed] the maCHINE [for] any DEfects.</li>
        <li className="list-none margin-bottom-20">Kỹ sư [đã kiểm tra] máy móc một cách tỉ mỉ [để] tìm bất kỳ lỗi nào.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh sự cẩn thận, chính xác và tỉ mỉ trong việc thực hiện một hành động nào đó. Chúng thường được sử dụng để mô tả các công việc đòi hỏi sự tập trung cao độ và sự chú ý đến từng chi tiết nhỏ.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>meTICulously</strong>" thường được đặt trước hành động để nhấn mạnh cách thức thực hiện hành động đó.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong các ngữ cảnh liên quan đến công việc, nghệ thuật, khoa học, hoặc bất kỳ hoạt động nào đòi hỏi sự chính xác cao.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 3, 2024 · by 💎GEM ·</span>
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