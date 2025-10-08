import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '/src/components/EyeIcon';
import ViewCounter from '/src/components/ViewCounter';
import LikeButton from '/src/components/LikeButton';

export default function () {

  const postId = "";

  return (<>

  <main className="image image2">
    
    <h4>by <HashLink smooth to="/#mr-bee-osn-english-terms"><mark className="highlight-tertiary-padding-4-8">Mr. Bee Osn</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">Searching and clickable dictionary</h2>

    {/* This is the content of Mr.Bee English Term. */}

    

    {/* =============================
          🌻 Think simply!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌻 Think simply!</h3>

    

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