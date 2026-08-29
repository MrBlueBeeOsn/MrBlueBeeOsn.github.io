import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function rePEATedly2(): React.JSX.Element {

  const postId = "rePEATedly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-lap-lai-terms"><mark className="highlight-tertiary-padding-4-88">ADverbs: lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">rePEATedly
        <sup>
          <Link to="/vocabulary/rePEATedly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/rePEATedly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>rePEATedly</strong>" (một cách lặp đi lặp lại) và các cụm từ hay đi kèm nhé.

</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [rePEATedly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">rė PĒAT ėd ly</Link>] /rɪˈpiːtɪdli/ •⬤•• (4x)
              
            </span>
              
            &nbsp;là một Trạng Cơ chỉ việc làm điều gì đó nhiều lần, liên tục.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">she rePEATedly ASKED him to TURN DOWN the MUsic.</li>
        <li className="list-none margin-bottom-20">Cô ấy liên tục yêu cầu anh ấy vặn nhỏ tiếng nhạc.</li>

        <li value="2">he rePEATedly FAILED his DRIving TEST.</li>
        <li className="list-none margin-bottom-20">Anh ấy thi bằng lái nhiều lần nhưng đều trượt.</li>

        <li value="3">she was rePEATedly WARNED about the DANGers of SPEEDing.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã được cảnh báo nhiều lần về nguy hiểm của việc lái xe quá tốc độ.</li>

        <li value="4">the TEACHer rePEATedly EMphasized the imPORtance of STUDying.</li>
        <li className="list-none margin-bottom-20">Giáo viên đã nhấn mạnh nhiều lần tầm quan trọng của việc học.</li>

        <li value="5">the NEW DRUG was rePEATedly TESTed for SAFEty.</li>
        <li className="list-none margin-bottom-20">Loại thuốc mới đã được kiểm tra độ an toàn nhiều lần.</li>

        <li value="6">she was rePEATedly exPOSED to LOUD NOISE.</li>
        <li className="list-none margin-bottom-20">Cô ấy thường xuyên tiếp xúc với tiếng ồn lớn.</li>

        <li value="7">the PROJect was rePEATedly deLAYED due to FUNding ISsues.</li>
        <li className="list-none margin-bottom-20">Dự án đã bị trì hoãn nhiều lần do vấn đề về tài chính.</li>

        <li value="8">he rePEATedly MENtioned his deSIre to TRAVel.</li>
        <li className="list-none margin-bottom-20">Anh ấy đã đề cập nhiều lần về mong muốn được đi du lịch.</li>

        <li value="9">the SCIentists rePEATedly obSERVED the beHAvior of the ANimals.</li>
        <li className="list-none margin-bottom-20">Các nhà khoa học đã quan sát hành vi của động vật nhiều lần.</li>

        <li value="10">she rePEATedly PRACticed the piANo PIECE until she could PLAY it PERfectly.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã luyện tập bài piano đó nhiều lần cho đến khi chơi được hoàn hảo.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính lặp đi lặp lại của một hành động, sự kiện hoặc quá trình. Chúng thường được sử dụng để mô tả các tình huống mà một điều gì đó xảy ra nhiều lần, có thể là theo ý muốn hoặc không.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>rePEATedly</strong>" thường được đặt trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng để nhấn mạnh tính thường xuyên và sự kiên trì của một hành động.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 7, 2024 · by 💎GEM ·</span>
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