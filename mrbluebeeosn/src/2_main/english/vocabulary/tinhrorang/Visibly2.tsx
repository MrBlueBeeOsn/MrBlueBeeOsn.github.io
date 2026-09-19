import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VISibly1(): React.JSX.Element {

  const postId = "VISibly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chinh-xac"><mark className="highlight-tertiary-padding-4-8">ADverbs: chính xác</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">VISibly
        <sup>
          <Link to="/vocabulary/VISibly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/VISibly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#exCIted-about">exCIted a<strong>bout</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#upSET">upSET</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SHAken">SHAken</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#reLIEVED">reLIEVED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#AGED">AGED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#imPROVED">imPROVED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#STRAINED">STRAINED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NERvous">NERvous</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#unCOMFORTable">unCOMFORTable</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#DIFFERent-in">DIFFERent in</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>VISibly</strong>" (một cách rõ ràng, dễ thấy) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              VISibly \<Link to="/pronunciation/5-vowel-system">VIS i̛ bly</Link>\ /ˈvɪzəbli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;thường được dùng để mô tả một điều gì đó có thể nhìn thấy được bằng mắt thường, dễ nhận biết hoặc có sự thay đổi rõ rệt.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="exCIted-about">the CHILDren were VISibly [exCIted a<strong>bout</strong>] the UPcoming TRIP.</li>
        <li className="list-none margin-bottom-20">Những đứa trẻ rõ ràng [phấn khích về] chuyến đi sắp tới.</li>

        <li value="2" id="upSET">she was VISibly [upSET] <strong>af</strong>ter HEARing the BAD NEWS.</li>
        <li className="list-none margin-bottom-20">Cô ấy rõ ràng [buồn] sau khi nghe tin xấu.</li>

        <li value="3" id="SHAken">he was VISibly [SHAken] <strong>af</strong>ter the ACcident.</li>
        <li className="list-none margin-bottom-20">Anh ấy rõ ràng [hoảng loạn] sau vụ tai nạn.</li>

        <li value="4" id="reLIEVED">she was VISibly [reLIEVED] when she FOUND her LOST KEYS.</li>
        <li className="list-none margin-bottom-20">Cô ấy rõ ràng [nhẹ nhõm] khi tìm thấy chìa khóa bị mất.</li>

        <li value="5" id="AGED"><strong>af</strong>ter YEARS of HARD WORK, he LOOKED VISibly [AGED].</li>
        <li className="list-none margin-bottom-20">Sau nhiều năm làm việc chăm chỉ, anh ấy trông [già đi] rõ rệt.</li>

        <li value="6" id="imPROVED">her HEALTH has VISibly [imPROVED] since she STARted EXercising.</li>
        <li className="list-none margin-bottom-20">Sức khỏe của cô ấy [đã cải thiện] rõ rệt kể từ khi cô ấy bắt đầu tập thể dục.</li>

        <li value="7" id="STRAINED">his FACE was VISibly [STRAINED] as he LIFted the HEAVy BOX.</li>
        <li className="list-none margin-bottom-20">Gương mặt anh ấy rõ ràng [căng thẳng] khi nâng chiếc hộp nặng.</li>

        <li value="8" id="NERvous">she was VISibly [NERvous] be<strong>fore</strong> her SPEECH.</li>
        <li className="list-none margin-bottom-20">Cô ấy rõ ràng [lo lắng] trước bài phát biểu của mình.</li>

        <li value="9" id="unCOMFORTable">he was VISibly [unCOMFORTable] when they ASKED a<strong>bout</strong> his PAST.</li>
        <li className="list-none margin-bottom-20">Anh ấy rõ ràng [không thoải mái] khi họ hỏi về quá khứ của anh.</li>

        <li value="10" id="DIFFERent-in">the TWO SISters were VISibly [DIFFERent in] persoNALity.</li>
        <li className="list-none margin-bottom-20">Hai chị em rõ ràng có tính cách [khác nhau].</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính dễ nhận thấy, rõ ràng của một trạng thái, cảm xúc hoặc sự thay đổi. Chúng thường được sử dụng để mô tả những gì có thể quan sát được bằng mắt thường.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Visibly</strong>" thường đứng trước ADjective để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như "<Link to="/vocabulary/CLEARly-1">CLEARly</Link>", "<Link to="/vocabulary/OBviously-1">OBviously</Link>", "<Link to="/vocabulary/EVidently-1">EVidently</Link>" để tạo sự đa dạng trong văn phong.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 5, 2024 · by 💎GEM ·</span>
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