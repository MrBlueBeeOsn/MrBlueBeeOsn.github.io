import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import MrBeeOsnTopic from '@/components/MrBeeOsnTopic';
import ExternalLink from '@/components/ExternalLink';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
          Portfolio
      ============================= */}

      <h1 className="margin-y-50 text-center">Contact</h1>
      
        <div className="container">

        <header>

          <h1 className="name">HIEU KHAU</h1>
          <div className="title">General Accountant | VAS | Tax Compliance | Financial Reporting</div>
          <div className="location">📍 Hoc Mon District, HCMC</div>
          
          <div className="contact-info">

            <div className="contact-item">
              📧
              <a href="mailto:HieuKhau@outlook.com" className="email-link">
                Outlook
              </a>
            </div>

            <div className="contact-item">
              💼 
              <a href="https://www.linkedin.com/in/hieukhau/" className="email-link" target="_blank">
                LinkedIn
              </a>
            </div>

            <div className="contact-item">
              🌐
              <Link to="/" className="email-link">
                Accounting Bee
              </Link>
              🔊📖
            </div>

          </div>

          <div className="contact-info">

            <div className="contact-item">
              📹
              <a href="https://www.youtube.com/@Mr.GreenBee.Ongsiengnang" className="email-link">
                GitHub
              </a>
            </div>

           <FontAwesomeIcon icon={faGithub} />

            <div className="contact-item">
              💬
              <a href="https://wa.me/84906920292?text=Hi!%20I'm%20available%20to%20talk%20about%20the%20Accounting%20opportunity." className="email-link">
                WA Business
              </a>
            </div>

          </div>

        </header>

    </div>

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