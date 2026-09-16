import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VietnameseVegetables(): React.JSX.Element {

  const postId = "VietnameseVegetables";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#nouns-fruits-&-vegetables"><mark className="highlight-tertiary-padding-4-8">NOUNS: FRUITS & VEGETables</mark></HashLink></h4>

      <h1 className="margin-y-50 text-center">🌿 Rau Củ & Gia Vị Đặc Sản</h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#WAter-SPINach">WAter SPINach</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LEMongrass">LEMongrass</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#GINger">GINger</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#CHILi-PEPper">CHILi PEPper</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#bamBOO-SHOOTS">bamBOO SHOOTS</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LOtus-ROOT">LOtus ROOT</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#BITter-MELon">BITter MELon</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CORiander">CORiander</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#LOOfah">LOOfah</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#VietnaMESE-CORiander">VietnaMESE CORiander</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="WAter-SPINach">STIR-FRIED [WAter SPINach] with GARlic is a CLASsic and deLICious vietnaMESE DISH.</li>
        <li className="list-none margin-bottom-20">[Rau muống] xào tỏi là một món ăn truyền thống và ngon miệng của Việt Nam.</li>

        <li value="2" id="LEMongrass">MINCED [LEMongrass] GIVES GRILLED PORK and CHICKen an inCREDible aROma.</li>
        <li className="list-none margin-bottom-20">[Sả] băm mang lại hương thơm khó cưỡng cho các món thịt heo và thịt gà nướng.</li>

        <li value="3" id="GINger">a WARM CUP of [GINger] TEA HELPS SOOTHE a SORE THROAT on COLD DAYS.</li>
        <li className="list-none margin-bottom-20">Một tách trà [gừng] ấm giúp làm dịu cổ họng trong những ngày trời lạnh.</li>

        <li value="4" id="CHILi-PEPper">ADDing a FEW SLIces of FRESH [CHILi PEPper] MAKES the NOOdle SOUP MUCH MORE FLAvorful.</li>
        <li className="list-none margin-bottom-20">Thêm vài lát [ớt] tươi giúp món phở/bún trở nên đậm đà hương vị hơn rất nhiều.</li>

        <li value="5" id="bamBOO-SHOOTS">DUCK NOOdle SOUP COOKED with FRESH [bamBOO SHOOTS] is a LOcal FAVORite.</li>
        <li className="list-none margin-bottom-20">Món bún măng vịt nấu với [măng] tươi là món ăn yêu thích của nhiều người dân địa phương.</li>

        <li value="6" id="LOtus-ROOT">CRISpy FRIED [LOtus ROOT] CHIPS are a uNIQUE and HEALthy SNACK.</li>
        <li className="list-none margin-bottom-20">Món snack [củ sen] chiên giòn là một món ăn vặt độc đáo và lành mạnh.</li>

        <li value="7" id="BITter-MELon">STUFFED [BITter MELon] SOUP is beLIEVED to HELP COOL DOWN the BODy in SUMmer.</li>
        <li className="list-none margin-bottom-20">Canh [khổ qua] nhồi thịt được cho là giúp giải nhiệt cơ thể vào mùa hè.</li>

        <li value="8" id="CORiander">FRESH [CORiander] (or ciLANtro) is SPRINkled on TOP of a HOT BOWL of BEEF NOOdle SOUP be<strong>fore</strong> SERVing.</li>
        <li className="list-none margin-bottom-20">[Rau mùi] tươi được rắc lên trên bát phở bò nóng hổi trước khi thưởng thức.</li>

        <li value="9" id="LOOfah">SWEET [LOOfah] COOKED in a SIMple SHRIMP BROTH MAKES a reFRESHing SOUP for HOT DAYS.</li>
        <li className="list-none margin-bottom-20">[Mướp] ngọt nấu với nước dùng tôm đơn giản tạo thành món canh thanh mát cho những ngày oi bức.</li>

        <li value="10" id="VietnaMESE-CORiander">a PLATE of baLUT EGGS is NEVer comPLETE without a HANDful of [VietnaMESE CORiander].</li>
        <li className="list-none margin-bottom-20">Một đĩa trứng vịt lộn sẽ không bao giờ trọn vẹn nếu thiếu đi một nhúm [rau răm].</li>

      </ol>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>sepTEMber 16, 2026 · by 💎GEM ·</span>
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