import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SLOWly2(): React.JSX.Element {

  const postId = "SLOWly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-cham"><mark className="highlight-tertiary-padding-4-8">ADverbs: chậm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SLOWly
        <sup>
          <Link to="/vocabulary/SLOWly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/SLOWly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#but-SUREly-MAking-in">but SUREly MAking ... in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FAded-into">FAded <strong>in</strong>to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#reCOVering-from">reCOVering from</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#GROWing">GROWing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CHAnging-due-to">CHAnging due to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MOving-across">MOving across</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#DYing">DYing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SINKing-into">SINKing <strong>in</strong>to</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#apPROACHing">apPROACHing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#REalizing">REalizing</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>SLOWly</strong>" (chậm rãi) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              SLOWly \<Link to="/pronunciation/5-vowel-system">SLŌW ly</Link>\ /ˈsləʊli/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "một cách chậm rãi", thường được dùng để mô tả tốc độ của một hành động, quá trình hoặc sự thay đổi.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="but-SUREly-MAking-in">she is SLOWly [but SUREly MAking] PROgress [in] her STUDies.</li>
        <li className="list-none margin-bottom-20">Cô ấy đang tiến bộ [trong] học tập [một cách chậm mà chắc].</li>

        <li value="2" id="FAded-into">the SOUND of the MUsic SLOWly [FAded <strong>in</strong>to] the NIGHT.</li>
        <li className="list-none margin-bottom-20">Âm thanh của nhạc dần dần [mờ nhạt vào] đêm.</li>

        <li value="3" id="reCOVering-from">he is SLOWly [reCOVering from] his ILLness.</li>
        <li className="list-none margin-bottom-20">Anh ấy đang dần dần [hồi phục sau] khi ốm.</li>

        <li value="4" id="GROWing">the PLANT is SLOWly [GROWing] TALler.</li>
        <li className="list-none margin-bottom-20">Cây đang dần dần cao [lớn] hơn.</li>

        <li value="5" id="CHAnging-due-to">the CLImate is SLOWly [CHAnging due to] GLObal WARMing.</li>
        <li className="list-none margin-bottom-20">Khí hậu đang dần dần [thay đổi do] biến đổi khí hậu toàn cầu.</li>

        <li value="6" id="MOving-across">the SNAIL was SLOWly [MOving a<strong>cross</strong>] the LEAF.</li>
        <li className="list-none margin-bottom-20">Con ốc sên [di chuyển] chậm chạp [trên] lá.</li>

        <li value="7" id="DYing">the OLD TREE was SLOWly [DYing].</li>
        <li className="list-none margin-bottom-20">Cây già đang dần dần [chết].</li>

        <li value="8" id="SINKing-into">the SHIP was SLOWly [SINKing <strong>in</strong>to] the OCean.</li>
        <li className="list-none margin-bottom-20">Con tàu đang dần dần [chìm xuống] đại dương.</li>

        <li value="9" id="apPROACHing">the STORM was SLOWly [apPROACHing] the COAST.</li>
        <li className="list-none margin-bottom-20">Cơn bão đang dần dần [tiến lại gần] bờ biển.</li>

        <li value="10" id="REalizing">she was SLOWly [REalizing] the TRUTH.</li>
        <li className="list-none margin-bottom-20">Cô ấy đang dần dần [nhận ra] sự thật.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh ADjective từ và sự dần dần của một quá trình hoặc hành động. Chúng thường được sử dụng để mô tả những thay đổi nhỏ nhặt nhưng liên tục theo thời gian.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>SLOWly</strong>" thường được đặt trước hành động để nhấn mạnh tốc độ của hành động.</li>

          <li className="margin-bottom-20">Từ này có thể được sử dụng trong nhiều ngữ cảnh khác nhau, từ việc mô tả chuyển động của vật thể đến việc diễn tả quá trình phát triển của một sự việc.</li>

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