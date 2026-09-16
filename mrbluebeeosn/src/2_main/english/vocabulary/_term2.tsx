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
    
      <h4><HashLink smooth to="/vocabulary#nouns-"><mark className="highlight-tertiary-padding-4-8"></mark></HashLink></h4>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#"></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#"></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#"></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#"></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#"></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#"></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#"></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#"></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#"></HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#"></HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id=""></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="2" id=""></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="3" id=""></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="4" id=""></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="5" id=""></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="6" id=""></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="7" id=""></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="8" id=""></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="9" id=""></li>
        <li className="list-none margin-bottom-20"></li>

        <li value="10" id=""></li>
        <li className="list-none margin-bottom-20"></li>

      </ol>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span> · by 💎GEM ·</span>
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