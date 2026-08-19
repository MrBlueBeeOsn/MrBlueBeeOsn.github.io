import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GRADually2(): React.JSX.Element {

  const postId = "GRADually2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#toc-do-cham-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: chậm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">GRADually
        <sup>
          <Link to="/vocabulary/GRADually-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/GRADually-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>GRADually</strong>" (dần dần) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
               [GRADually][GRAD u al ly] /ˈɡrædʒuəli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">GRADua̛lly</Link>/ 
              
              &nbsp;⬤••• (4x)
              
            </span>
              
            &nbsp;trong tiếng Anh thường được sử dụng để mô tả một quá trình diễn ra chậm rãi, từng bước một, không đột ngột.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">The TEMperature GRADually inCREASED throughout the DAY.</li>
        <li className="list-none margin-bottom-20">Nhiệt độ tăng dần suốt cả ngày.</li>

        <li value="2">The NOISE GRADually deCREASED as we MOVED FARther aWAY.</li>
        <li className="list-none margin-bottom-20">Tiếng ồn giảm dần khi chúng tôi đi xa hơn.</li>

        <li value="3">She GRADually reCOVered from her ILLness.</li>
        <li className="list-none margin-bottom-20">Cô ấy dần dần hồi phục sức khỏe sau khi ốm.</li>

        <li value="4">The CLImate GRADually CHANGED over MILlions of YEARS.</li>
        <li className="list-none margin-bottom-20">Khí hậu thay đổi dần trong hàng triệu năm.</li>

        <li value="5">His ENGlish GRADually imPROVED after STUDying for a YEAR.</li>
        <li className="list-none margin-bottom-20">Tiếng Anh của anh ấy cải thiện dần sau khi học một năm.</li>

        <li value="6">The SUNlight GRADually FADed as the DAY TURNED into NIGHT.</li>
        <li className="list-none margin-bottom-20">Ánh nắng mặt trời dần dần mờ nhạt khi ngày chuyển sang đêm.</li>

        <li value="7">The PAIN GRADually disapPEARED after TAKing the MEDicine.</li>
        <li className="list-none margin-bottom-20">Cơn đau dần dần biến mất sau khi uống thuốc.</li>

        <li value="8">The CIty GRADually deVELoped into a MAjor meTROPolis.</li>
        <li className="list-none margin-bottom-20">Thành phố dần dần phát triển thành một đô thị lớn.</li>

        <li value="9">She GRADually aDAPTed to the NEW enVIronment.</li>
        <li className="list-none margin-bottom-20">Cô ấy dần dần thích nghi với môi trường mới.</li>

        <li value="10">His HEALTH GRADually deCLINED after the ACcident.</li>
        <li className="list-none margin-bottom-20">Sức khỏe của ông ấy dần dần suy giảm sau tai nạn.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh sự thay đổi diễn ra một cách chậm rãi, từ từ và đều đặn. Chúng thường được sử dụng để mô tả các quá trình tự nhiên, sự phát triển, sự thay đổi trong trạng thái hoặc tình hình.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>GRADually</strong>" thường được đặt trước hành động để nhấn mạnh ý nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được sử dụng trong nhiều ngữ cảnh khác nhau, từ khoa học, kỹ thuật đến cuộc sống hàng ngày.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 10, 2024 · by 💎Gem ·</span>
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