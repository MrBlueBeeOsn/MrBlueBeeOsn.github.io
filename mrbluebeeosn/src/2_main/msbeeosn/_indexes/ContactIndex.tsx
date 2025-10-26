import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import MrBeeOsnTopic from '@/components/MrBeeOsnTopic';
import ExternalLink from '@/components/ExternalLink';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function ContactIndex(): React.JSX.Element {

  const postId = "ContactIndex";

  return (<>
     
  <main className="image image4">

    <article>

      {/* =============================
          Mr.Bee Osn Topic
      ============================= */}
      
        <MrBeeOsnTopic />

      {/* =============================
          Contact
      ============================= */}

      <h2 className="margin-y-50 text-center">Contact</h2>
      
        <ul className="list-border">

          <li>
            
            📧👥 <strong>Teams</strong>:&nbsp;

            <Link 
              to="#" 
              onClick={(e) => {
                window.location.href = "mailto:HieuTrongKhau@outlook.com";
                e.preventDefault();
              }}
            >

              Gửi email

            </Link>
            
          </li>

        </ul>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>by 🐝Mr. Bee Osn ·</span>
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