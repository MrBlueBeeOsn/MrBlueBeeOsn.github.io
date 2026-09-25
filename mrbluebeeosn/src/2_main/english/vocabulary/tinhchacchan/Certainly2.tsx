import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function CERtainly2(): React.JSX.Element {

  const postId = "CERtainly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chac-chan"><mark className="highlight-tertiary-padding-4-8">ADverbs: chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">CERtainly
        <sup>
          <Link to="/vocabulary/CERtainly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/CERtainly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#NOT">NOT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MOST">MOST</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#arRIVE-on">arRIVE on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ABsolutely">ABsolutely</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#MORE-than">MORE than</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#KNOW-HOW-you-FEEL">KNOW HOW you FEEL</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#beLIEVE-in">beLIEVE in</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#aGREE-with">aGREE with</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#underSTAND">underSTAND</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#POSsible-to-aCHIEVE">POSsible to aCHIEVE</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>CERtainly</strong>" (chắc chắn) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              CERtainly \<Link to="/pronunciation/5-vowel-system">CÊR ta̛in ly</Link>\ /ˈsɜːrtnli/ ⬤•• (THREE SYLlables)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "chắc chắn", thường được sử dụng để khẳng định một điều gì đó là đúng, thật sự hoặc sẽ xảy ra.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="NOT">CERtainly [<Link to="/vocabulary/NOT-1">NOT</Link>], i would NEVer do such a THING.</li>
        <li className="list-none margin-bottom-20">Chắc chắn [không], tôi sẽ không bao giờ làm việc đó.</li>

        <li value="2" id="MOST">[MOST] CERtainly, i will be THERE to supPORT you.</li>
        <li className="list-none margin-bottom-20">[Hoàn toàn] chắc chắn rồi, tôi sẽ ở đó để ủng hộ bạn.</li>

        <li value="3" id="arRIVE-on">he will QUITE CERtainly [arRIVE on] TIME.</li>
        <li className="list-none margin-bottom-20">Anh ấy chắc chắn [sẽ đến] đúng giờ.</li>

        <li value="4" id="ABsolutely">THIS is [<Link to="/vocabulary/ABsolutely-1">ABsolutely</Link>] CERtainly the RIGHT deCISion.</li>
        <li className="list-none margin-bottom-20">Đây chắc chắn [tuyệt đối] là quyết định đúng đắn.</li>

        <li value="5" id="MORE-than">[MORE than] CERtainly, she will WIN the PRIZE.</li>
        <li className="list-none margin-bottom-20">[Hơn cả] chắc chắn, cô ấy sẽ giành được giải thưởng.</li>

        <li value="6" id="KNOW-HOW-you-FEEL">i CERtainly [KNOW HOW you FEEL].</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn [hiểu cảm giác của bạn].</li>

        <li value="7" id="beLIEVE-in">i CERtainly [beLIEVE in] the POWer of LOVE.</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn [tin vào] sức mạnh của tình yêu.</li>

        <li value="8" id="aGREE-with">i CERtainly [aGREE with] your oPINion.</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn [đồng ý với] ý kiến của bạn.</li>

        <li value="9" id="underSTAND">i CERtainly [underSTAND] your conCERNS.</li>
        <li className="list-none margin-bottom-20">Tôi chắc chắn hiểu những lo ngại của bạn.</li>

        <li value="10" id="POSsible-to-aCHIEVE">it is CERtainly [POSsible to aCHIEVE] your GOALS.</li>
        <li className="list-none margin-bottom-20">Chắc chắn bạn [có thể đạt được] mục tiêu của mình.</li>

      </ol>

      <p>** Các cụm từ trên đều mang ý nghĩa khẳng định, chắc chắn về một điều gì đó. Chúng được sử dụng để thể hiện sự tin tưởng, đồng ý hoặc hiểu rõ về một vấn đề.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>CERtainly</strong>" thường được đặt ở đầu câu hoặc trước hành động để nhấn mạnh ý nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được sử dụng trong nhiều ngữ cảnh khác nhau, từ giao tiếp hàng ngày đến văn viết trang trọng.</li>

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