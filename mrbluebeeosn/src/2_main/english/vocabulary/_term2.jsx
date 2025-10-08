import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '/src/components/EyeIcon';
import ViewCounter from '/src/components/ViewCounter';
import LikeButton from '/src/components/LikeButton';

export default function () {

  const postId = "";

  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/vocabulary#tinh-chinh-xac-terms"><mark className="highlight-tertiary-padding-4-8">Tính chính xác</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">ly
      <sup>
        <Link to="/vocabulary/accurately-1">&nbsp;1&nbsp;</Link>
      </sup>
      <sup>
        <Link to="/vocabulary/accurately-2">&nbsp;2&nbsp;</Link>
      </sup>
    </h2>

    {/* This is the content of Vocabulary Term. */}

    <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>ly</strong>" và các cụm từ thường đi kèm nhé.</p>

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

      <li value="1"></li>

      <li className="list-none margin-bottom-20"></li>

      <li value="2"></li>

      <li className="list-none margin-bottom-20"></li>

      <li value="3"></li>

      <li className="list-none margin-bottom-20"></li>

      <li value="4"></li>

      <li className="list-none margin-bottom-20"></li>

      <li value="5"></li>

      <li className="list-none margin-bottom-20"></li>

      <li value="6"></li>

      <li className="list-none margin-bottom-20"></li>

      <li value="7"></li>

      <li className="list-none margin-bottom-20"></li>

      <li value="8"></li>
      
      <li className="list-none margin-bottom-20"></li>

      <li value="9"></li>

      <li className="list-none margin-bottom-20"></li>

      <li value="10"></li>

      <li className="list-none margin-bottom-20"></li>

    </ol>

    <p>** </p>

    {/* =============================
          Lưu ý:
    ============================= */}

    <div className="margin-y-30 text-border1 table-container">

      <h4 className="margin-y-30 text-center">Lưu ý:</h4>

      <ul className="list-square">

        <li></li>

        <li className="margin-bottom-20"></li>

      </ul>

    </div>

    <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

    <p className="margin-top-50 text-small"> · by 💎Gem ·</p>

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
    
  </main>

  </>);
}