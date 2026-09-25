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
    
      <h4><HashLink smooth to="/vocabulary#adverbs-lap-lai"><mark className="highlight-tertiary-padding-4-88">ADverbs: lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">rePEATedly
        <sup>
          <Link to="/vocabulary/rePEATedly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/rePEATedly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ASKED-to-turN-DOWN">ASKED ... to turN DOWN</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FAILED">FAILED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#WARNED-about-of">WARNED about ... of</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#EMphasized-of">EMphasized ... of</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TESTed-for">TESTed for</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#exPOSED-to">exPOSED to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#deLAYED-due-to">deLAYED due to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MENtioned-to-TRAVel">MENtioned ... to TRAVel</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#obSERVED-of">obSERVED ... of</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#PRACticed-until">PRACticed ... un<strong>til</strong></HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>rePEATedly</strong>" (một cách lặp đi lặp lại) và các cụm từ hay đi kèm nhé.

</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              rePEATedly \<Link to="/pronunciation/5-vowel-system">re PĒAT ed ly</Link>\ /rɪˈpiːtɪdli/ •⬤•• (FOUR SYLlables)
              
            </span>
              
            &nbsp;là một ADverb chỉ việc làm điều gì đó nhiều lần, liên tục.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="ASKED-to-turN-DOWN">she rePEATedly [ASKED] him [to turN DOWN] the MUsic.</li>
        <li className="list-none margin-bottom-20">Cô ấy [đã liên tục yêu cầu] anh ấy [vặn nhỏ] tiếng nhạc.</li>

        <li value="2" id="FAILED">he rePEATedly [FAILED] his DRIving TEST.</li>
        <li className="list-none margin-bottom-20">Anh ấy [đã] liên tiếp [trượt] kỳ thi sát hạch lái xe.</li>

        <li value="3" id="WARNED-about-of">she was rePEATedly [WARNED a<strong>bout</strong>] the DANGers [of] SPEEDing.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã [được cảnh báo] nhiều lần [về] nguy hiểm [của] việc lái xe quá tốc độ.</li>

        <li value="4" id="EMphasized-of">the TEACHer rePEATedly [EMphasized] the imPORtance [of] STUDying.</li>
        <li className="list-none margin-bottom-20">Giáo viên [đã nhấn mạnh] nhiều lần tầm quan trọng [của] việc học.</li>

        <li value="5" id="TESTed-for">the NEW DRUG was rePEATedly [TESTed for] SAFEty.</li>
        <li className="list-none margin-bottom-20">Loại thuốc mới đã [được kiểm tra] độ an toàn nhiều lần.</li>

        <li value="6" id="exPOSED-to">she was rePEATedly [exPOSED to] LOUD NOISE.</li>
        <li className="list-none margin-bottom-20">Cô ấy thường xuyên [tiếp xúc với] tiếng ồn lớn.</li>

        <li value="7" id="deLAYED-due-to">the PROJect was rePEATedly [deLAYED due to] FUNding ISsues.</li>
        <li className="list-none margin-bottom-20">Dự án đã [bị trì hoãn] nhiều lần [do] vấn đề về tài chính.</li>

        <li value="8" id="MENtioned-to-TRAVel">he rePEATedly [MENtioned] his deSIre [to TRAVel].</li>
        <li className="list-none margin-bottom-20">Anh ấy [đã đề cập] nhiều lần [về] mong muốn [đi du lịch].</li>

        <li value="9" id="obSERVED-of">the SCIentists rePEATedly [obSERVED] the beHAvior [of] the ANimals.</li>
        <li className="list-none margin-bottom-20">Các nhà khoa học [đã quan sát] hành vi [của] động vật nhiều lần.</li>

        <li value="10" id="PRACticed-until">she rePEATedly [PRACticed] the piANo PIECE [un<strong>til</strong>] she could PLAY it PERfectly.</li>
        <li className="list-none margin-bottom-20">Cô ấy [đã luyện tập] bài piano đó nhiều lần [cho đến khi] chơi được hoàn hảo.</li>

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
          <span>noVEMber 7, 2024 · by 💎GEM ·</span>
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