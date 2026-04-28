import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function (): React.JSX.Element {

  const postId = "";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-nhe-nhang-terms"><mark className="highlight-tertiary-padding-4-8">Tính nhẹ nhàng</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">ly
        <sup>
          <Link to="/vocabulary/ly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/ly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! </p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>ly&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /li/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ly</Link>/ 
              
              <sup>&nbsp;⬤</sup>
              
            </span>
              
            &nbsp;trong tiếng Anh

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1"> <strong></strong> //</li>
        <li className="list-none"></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="2"> <strong></strong> //</li>
        <li className="list-none"></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="3"> <strong></strong> //</li>
        <li className="list-none"></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="4"> <strong></strong> //</li>
        <li className="list-none"></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="5"> <strong></strong> //</li>
        <li className="list-none"></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="6"> <strong></strong> //</li>
        <li className="list-none"></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="7"> <strong></strong> //</li>
        <li className="list-none"></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="8"> <strong></strong> //</li>
        <li className="list-none"></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="9"> <strong></strong> //</li>
        <li className="list-none"></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="10"> <strong></strong> //</li>
        <li className="list-none"></li>
        <li className="list-none margin-bottom-20"></li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li></li>

          <li className="margin-bottom-20"></li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span> · by 💎Gem ·</span>
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