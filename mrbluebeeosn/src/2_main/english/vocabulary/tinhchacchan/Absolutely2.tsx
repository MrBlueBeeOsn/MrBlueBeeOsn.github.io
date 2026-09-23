import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ABsolutely2(): React.JSX.Element {

  const postId = "ABsolutely2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chac-chan"><mark className="highlight-tertiary-padding-4-8">ADverbs: chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ABsolutely
        <sup>
          <Link to="/vocabulary/ABsolutely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/ABsolutely-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#CERtain-that">CERtain that</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NECessary-to-HAVE">NECessary to HAVE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#RIGHT-about">RIGHT a<strong>bout</strong></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#LOVE">LOVE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#HATE">HATE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#BEAUtiful">BEAUtiful</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#PERfect">PERfect</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TRUE">TRUE</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#conVINCED-that">conVINCED that</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#exHAUSTed">exHAUSTed</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>ABsolutely</strong>" (hoàn toàn, tuyệt đối) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              ABsolutely \<Link to="/pronunciation/5-vowel-system">ab sơ LÜTE ly</Link>\ /ˈæb·səˌlut·li/ ⬤••• (4x)
              
            </span>
              
            &nbsp;là một ADverb thường được dùng để nhấn mạnh một ý kiến, một câu trả lời hoặc một tình huống. Nó mang ý nghĩa hoàn toàn đồng ý, chắc chắn hoặc không có ngoại lệ nào.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="CERtain-that">i am ABsolutely [CERtain that] he will WIN the RACE.</li>
        <li className="list-none margin-bottom-20">Tôi hoàn toàn [chắc chắn rằng] anh ấy sẽ thắng cuộc đua.</li>

        <li value="2" id="NECessary-to-HAVE">it is ABsolutely [NECessary to HAVE] a PASSport to TRAVel abROAD.</li>
        <li className="list-none margin-bottom-20">Tuyệt đối [cần phải có] hộ chiếu để đi du lịch nước ngoài.</li>

        <li value="3" id="RIGHT-about">you are ABsolutely [RIGHT a<strong>bout</strong>] that.</li>
        <li className="list-none margin-bottom-20">Bạn hoàn toàn [đúng về] điều đó.</li>

        <li value="4" id="LOVE">i ABsolutely [LOVE] CHOCOLate ICE CREAM.</li>
        <li className="list-none margin-bottom-20">Tôi cực kỳ [thích] kem sô cô la.</li>

        <li value="5" id="HATE">i ABsolutely [HATE] SPIders.</li>
        <li className="list-none margin-bottom-20">Tôi hoàn toàn [ghét] nhện.</li>

        <li value="6" id="BEAUtiful">he SUNset was ABsolutely [BEAUtiful].</li>
        <li className="list-none margin-bottom-20">Hoàng hôn thật [đẹp].</li>

        <li value="7" id="PERfect">the CAKE was ABsolutely [PERfect].</li>
        <li className="list-none margin-bottom-20">Chiếc bánh thật [hoàn hảo].</li>

        <li value="8" id="TRUE">what he SAID was ABsolutely [TRUE].</li>
        <li className="list-none margin-bottom-20">Những gì anh ấy nói hoàn toàn [đúng sự thật].</li>

        <li value="9" id="conVINCED-that">i am ABsolutely [conVINCED that] she is INnocent.</li>
        <li className="list-none margin-bottom-20">Tôi hoàn toàn [tin rằng] cô ấy vô tội.</li>

        <li value="10" id="exHAUSTed"><strong>af</strong>ter the MARathon, i was ABsolutely [exHAUSTed].</li>
        <li className="list-none margin-bottom-20">Sau cuộc đua marathon, tôi đã [mệt mỏi rã rời].</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh một ý kiến, cảm xúc hoặc tình huống một cách mạnh mẽ. Chúng thường được đặt ở đầu câu để tạo sự chú ý và nhấn mạnh.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>ABsolutely</strong>" thường được đặt trước ADjective hoặc ADverb để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được sử dụng trong cả văn nói và văn viết.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 8, 2024 · by 💎GEM ·</span>
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