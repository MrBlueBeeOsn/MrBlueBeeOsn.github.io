import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function QUICKly2(): React.JSX.Element {

  const postId = "QUICKly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-nhanh"><mark className="highlight-tertiary-padding-4-8">ADverbs: nhanh</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">QUICKly
        <sup>
          <Link to="/vocabulary/QUICKly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/QUICKly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#GROWing-and-exPANDing">GROWing and exPANDing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FAded-behind-the">FAded be<strong>hind</strong> the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CHAnging">CHAnging</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#REalized">REalized</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#forGOTten">forGOTten</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SPREAD-throughout-the">SPREAD through<strong>out</strong> the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SOLVED">SOLVED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#TIred">TIred</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#beCAME-with-the">beCAME ... with the</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#EATen-by-the">EATen by the</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>QUICKly</strong>" (một cách nhanh chóng) và các cụm từ thường đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              QUICKly \<Link to="/pronunciation/5-vowel-system">QUICK ly</Link>\ /ˈkwɪkli/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "một cách nhanh chóng", "một cách gấp rút". Từ này thường được dùng để mô tả hành động hoặc quá trình diễn ra trong một thời gian ngắn.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="GROWing-and-exPANDing">the CIty is QUICKly [GROWing and exPANDing].</li>
        <li className="list-none margin-bottom-20">Thành phố [đang phát triển và mở rộng] rất nhanh.</li>

        <li value="2" id="FAded-behind-the">the SUN QUICKly [FAded] be<strong>hind</strong> the] CLOUDS.</li>
        <li className="list-none margin-bottom-20">Mặt trời nhanh chóng đã [biến mất sau] những đám mây.</li>

        <li value="3" id="CHAnging">the FASHion INdustry is QUICKly [CHAnging].</li>
        <li className="list-none margin-bottom-20">Ngành công nghiệp thời trang [đang thay đổi] rất nhanh.</li>

        <li value="4" id="REalized">i QUICKly [REalized] my misTAKE.</li>
        <li className="list-none margin-bottom-20">Tôi nhanh chóng [đã nhận ra] lỗi lầm của mình.</li>

        <li value="5" id="forGOTten">the INcident was QUICKly [forGOTten].</li>
        <li className="list-none margin-bottom-20">Vụ việc đó nhanh chóng đã [bị lãng quên].</li>

        <li value="6" id="SPREAD-throughout-the">the RUmor QUICKly [SPREAD through<strong>out</strong> the] SCHOOL.</li>
        <li className="list-none margin-bottom-20">Tin đồn nhanh chóng [đã lan truyền khắp] trường học.</li>

        <li value="7" id="SOLVED">the PROBlem was QUICKly [SOLVED].</li>
        <li className="list-none margin-bottom-20">Vấn đề đã [được giải quyết] nhanh chóng.</li>

        <li value="8" id="TIred"><strong>af</strong>ter a LONG DAY, i was QUICKly [TIred].</li>
        <li className="list-none margin-bottom-20">Sau một ngày dài, tôi nhanh chóng [đã cảm thấy mệt mỏi].</li>

        <li value="9" id="beCAME-with-the">she QUICKly [beCAME] BORED [with the] MOvie.</li>
        <li className="list-none margin-bottom-20">Cô ấy nhanh chóng [đã cảm thấy] chán [với] bộ phim.</li>

        <li value="10" id="EATen-by-the">the CAKE was QUICKly [EATen by the] CHILDren.</li>
        <li className="list-none margin-bottom-20">Cái bánh nhanh chóng đã [bị ăn hết bởi] bọn trẻ. (đã bị bọn trẻ ăn hết).</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh tốc độ của một hành động hoặc quá trình. Chúng thường được dùng để mô tả những sự việc diễn ra một cách bất ngờ, đột ngột hoặc nhanh chóng.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>QUICKly</strong>" thường được đặt trước hành động để nhấn mạnh ý nghĩa của chúng.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn viết và văn nói để mô tả sự thay đổi, sự phát triển hoặc sự kết thúc của một sự việc.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 4, 2024 · by 💎GEM ·</span>
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