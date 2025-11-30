import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Happily2(): React.JSX.Element {

  const postId = "Happily2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-tich-cuc-terms"><mark className="highlight-tertiary-padding-4-8">Tính tích cực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">happily
        <sup>
          <Link to="/vocabulary/happily-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/happily-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>happily</strong>" (một cách vui vẻ) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Happily&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈhæpəli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">happi̛ly</Link>/ 
              
              <sup>&nbsp;⬤•• (3x)</sup>
              
            </span>
              
            &nbsp;thường được sử dụng để diễn tả trạng thái vui vẻ, hạnh phúc hoặc sự hài lòng.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1"><strong>Happily</strong> ever after: Và họ sống hạnh phúc mãi mãi /ˈhæpəli ˈevər ˈɑːftər/</li>
        <li className="list-none margin-bottom-20">They lived <strong>happily</strong> ever after. (Và họ sống hạnh phúc mãi mãi.)</li>

        <li value="2"><strong>Happily</strong> married: Kết hôn hạnh phúc /ˈhæpəli ˈmærɪd/</li>
        <li className="list-none margin-bottom-20">They have been <strong>happily</strong> married for 20 years. (Họ đã kết hôn hạnh phúc được 20 năm.)</li>

        <li value="3"><strong>Happily</strong> surprised: Vui mừng bất ngờ /ˈhæpəli səˈpraɪzd/</li>
        <li className="list-none margin-bottom-20">She was <strong>happily</strong> surprised to see him. (Cô ấy rất vui mừng khi gặp anh ấy.)</li>

        <li value="4"><strong>Happily</strong> retired: Vui vẻ nghỉ hưu /ˈhæpəli rɪˈtaɪərd/</li>
        <li className="list-none margin-bottom-20">My grandfather is <strong>happily</strong> retired and enjoys gardening. (Ông nội tôi đã vui vẻ nghỉ hưu và thích làm vườn.)</li>

        <li value="5"><strong>Happily</strong> engaged: Hạnh phúc đính hôn /ˈhæpəli ɪnˈɡeɪdʒd/</li>
        <li className="list-none margin-bottom-20">The couple is <strong>happily</strong> engaged and planning their wedding. (Cặp đôi đang rất hạnh phúc khi đính hôn và đang lên kế hoạch cho đám cưới.)</li>

        <li value="6"><strong>Happily</strong> agree: Vui vẻ đồng ý /ˈhæpəli əˈɡriː/</li>
        <li className="list-none margin-bottom-20">I <strong>happily</strong> agree to your proposal. (Tôi vui vẻ đồng ý với đề xuất của bạn.)</li>

        <li value="7"><strong>Happily</strong> accept: Vui vẻ chấp nhận /ˈhæpəli əkˈsɛpt/</li>
        <li className="list-none margin-bottom-20">I <strong>happily</strong> accept your invitation. (Tôi vui vẻ chấp nhận lời mời của bạn.)</li>

        <li value="8"><strong>Happily</strong> oblige: Vui lòng làm điều gì đó /ˈhæpəli əˈblaɪdʒ/</li>
        <li className="list-none margin-bottom-20">I'll <strong>happily</strong> oblige. (Tôi rất vui lòng.)</li>

        <li value="9"><strong>Happily</strong> for: May mắn thay cho /ˈhæpəli fɔːr/</li>
        <li className="list-none margin-bottom-20"><strong>Happily</strong> for us, the weather was beautiful. (May mắn thay cho chúng tôi, thời tiết rất đẹp.)</li>

        <li value="10"><strong>Happily</strong> occupied: Bận rộn một cách vui vẻ /ˈhæpəli ˈɒkjupaɪd/</li>
        <li className="list-none margin-bottom-20">She is <strong>happily</strong> occupied with her new hobby. (Cô ấy đang bận rộn một cách vui vẻ với sở thích mới của mình.)</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để diễn tả trạng thái vui vẻ, hạnh phúc hoặc sự hài lòng. Chúng thường được sử dụng trong các ngữ cảnh tích cực và mang lại cảm giác ấm áp, vui tươi.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Happily</strong>" thường được đặt trước động từ hoặc tính từ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn nói và văn viết để làm cho câu nói thêm phần sinh động và cảm xúc.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎Gem ·</span>
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