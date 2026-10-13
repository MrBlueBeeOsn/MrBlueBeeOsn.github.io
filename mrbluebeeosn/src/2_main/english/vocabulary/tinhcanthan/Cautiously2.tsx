import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CAUtiously2(): React.JSX.Element {

  const postId = "CAUtiously2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-can-than"><mark className="highlight-tertiary-padding-4-8">ADverbs: cẩn thận</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">CAUtiously
        <sup>
          <Link to="/vocabulary/CAUtiously-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/CAUtiously-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#apPROACHED">apPROACHED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MOVED-through">MOVED through</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SPOKE-about">SPOKE a<strong>bout</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#eXAMined">eXAMined</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#proCEEDed-with">proCEEDed with</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#inVESTed">inVESTed</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#apPROACHED2">apPROACHED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#Opened">Opened</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TAsted">TAsted</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#aGREED-to">aGREED to</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>CAUtiously</strong>" (một cách thận trọng) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              CAUtiously \<Link to="/pronunciation/5-vowel-system">CAU tiơus ly</Link>\ /ˈkɔː.ʃəs.li/ ⬤•• (THREE SYLlables)
              
            </span>
              
            &nbsp;thường được dùng để mô tả một hành động được thực hiện với sự cẩn thận, dè dặt và chú ý đến những nguy hiểm hoặc vấn đề tiềm ẩn.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="apPROACHED">the CAT CAUtiously apPROACHED the unfaMILiar OBject.</li>
        <li className="list-none margin-bottom-20">Con mèo cẩn trọng tiến lại gần vật thể lạ lẫm đó.</li>

        <li value="2" id="MOVED-through">he CAUtiously MOVED through the DARK ROOM, FEELing for OBstacles.</li>
        <li className="list-none margin-bottom-20">Anh ta cẩn thận di chuyển qua căn phòng tối, cố gắng sống sót và tìm các chướng ngại vật.</li>

        <li value="3" id="SPOKE-about">she CAUtiously SPOKE a<strong>bout</strong> the SENsitive TOPic.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã nói một cách thận trọng về chủ đề nhạy cảm này.</li>

        <li value="4" id="eXAMined">the SCIentist CAUtiously eXAMined the unKNOWN SUBstance.</li>
        <li className="list-none margin-bottom-20">Nhà khoa học đã thận trọng kiểm tra chất chưa xác định đó.</li>

        <li value="5" id="proCEEDed-with">they CAUtiously proCEEDed with the negotiAtions.</li>
        <li className="list-none margin-bottom-20">Họ đã tiến hành các cuộc đàm phán một cách thận trọng.</li>

        <li value="6" id="inVESTed">he CAUtiously inVESTed a SMALL PORtion of his SAvings.</li>
        <li className="list-none margin-bottom-20">Anh ấy đã thận trọng đầu tư một phần nhỏ số tiền tiết kiệm của mình.</li>

        <li value="7" id="apPROACHED2">the CHILD CAUtiously apPROACHED the EDGE of the CLIFF.</li>
        <li className="list-none margin-bottom-20">Đứa trẻ cẩn trọng tiến lại gần mép vách đá.</li>

        <li value="8" id="Opened">she CAUtiously Opened the CREAKing DOOR.</li>
        <li className="list-none margin-bottom-20">Cô cẩn trọng mở cánh cửa đang kêu cót két.</li>

        <li value="9" id="TAsted">he CAUtiously TAsted the unfaMILiar DISH.</li>
        <li className="list-none margin-bottom-20">Anh ấy cẩn trọng nếm thử món ăn lạ lẫm đó..</li>

        <li value="10" id="aGREED-to">they CAUtiously aGREED to the proPOsal, with <strong>sever</strong>al conDITions.</li>
        <li className="list-none margin-bottom-20">Họ đã thận trọng đồng ý với đề xuất này, với một số điều kiện.</li>

      </ol>

      <p>** Các cụm từ trên đều mô tả một hành động được thực hiện với sự cẩn thận, dè dặt và chú ý đến những nguy hiểm hoặc vấn đề tiềm ẩn.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>CAUtiously</strong>" thường đứng trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này mang nghĩa về phương thức thận trọng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>MAY 12, 2025 · by 💎GEM ·</span>
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