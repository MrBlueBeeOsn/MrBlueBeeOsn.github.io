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
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'

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

        <header className="title">

          <h1 className="name">HIEU TRONG KHAU</h1>
          <div className="title">Bookkeeper | Daily Transactions | Invoicing | Reconciliation</div>
          <div className="location"><FontAwesomeIcon icon={faLocationDot} /> Hoc Mon District, HCMC</div>
          
          <div className="contact-info">

            <div className="contact-item">
              <FontAwesomeIcon icon={faInstagram} />
              <Link to="https://www.instagram.com/mr.bluebee.ongsiengnang/" className="email-link" target="_blank">
                Instagram
              </Link>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faFacebook} /> 
              <Link to="https://www.facebook.com/aBookkeepingBee" className="email-link" target="_blank">
                Facebook
              </Link>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faGlobe} />
              <Link to="/" className="email-link">
                Bookkeeping Bee
              </Link>
              {/* <FontAwesomeIcon icon={faVolumeHigh} /><FontAwesomeIcon icon={faBookOpenReader} /> */}
            </div>

          </div>

          <div className="contact-info">

            <div className="contact-item">
              <FontAwesomeIcon icon={faLinkedin} />  
              <Link to="https://www.linkedin.com/in/hieukhau/" className="email-link" target="_blank">
                LinkedIn
              </Link>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faGithub} />
              <Link to="https://github.com/MrBlueBeeOsn" className="email-link" target="_blank">
                GitHub
              </Link>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faWhatsapp} />
              <Link to="https://wa.me/84906920292?text=Hi!%20I'm%20available%20to%20talk%20about%20the%20Accounting%20opportunity." className="email-link" target="_blank">
                WA Business
              </Link>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faTelegram} />
              <Link to="https://t.me/MrBeeOsn" className="email-link" target="_blank">
                Telegram
              </Link>
            </div>

          </div>

        </header>

        <div className="bee-wrapper1">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
      	</div>

      </div>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>October 27, 2025 · by 🐝Mr. Bee Osn ·</span>
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