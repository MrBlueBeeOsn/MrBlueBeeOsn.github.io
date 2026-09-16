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

        <li value="1" id="">Stir-fried water spinach with garlic is a classic and delicious Vietnamese dish.</li>
        <li className="list-none margin-bottom-20">Rau muống xào tỏi là một món ăn truyền thống và ngon miệng của Việt Nam.</li>

        <li value="2" id="">Minced lemongrass gives grilled pork and chicken an incredible aroma.</li>
        <li className="list-none margin-bottom-20">Sả băm mang lại hương thơm khó cưỡng cho các món thịt heo và thịt gà nướng.</li>

        <li value="3" id="">A warm cup of ginger tea helps soothe a sore throat on cold days.</li>
        <li className="list-none margin-bottom-20">Một tách trà gừng ấm giúp làm dịu cổ họng trong những ngày trời lạnh.</li>

        <li value="4" id="">Adding a few slices of fresh chili pepper makes the noodle soup much more flavorful.</li>
        <li className="list-none margin-bottom-20">Thêm vài lát ớt tươi giúp món phở/bún trở nên đậm đà hương vị hơn rất nhiều.</li>

        <li value="5" id="">Duck noodle soup cooked with fresh bamboo shoots is a local favorite.</li>
        <li className="list-none margin-bottom-20">Món bún măng vịt nấu với măng tươi là món ăn yêu thích của nhiều người dân địa phương.</li>

        <li value="6" id="">Crispy fried lotus root chips are a unique and healthy snack.</li>
        <li className="list-none margin-bottom-20">Món snack củ sen chiên giòn là một món ăn vặt độc đáo và lành mạnh.</li>

        <li value="7" id="">Stuffed bitter melon soup is believed to help cool down the body in summer.</li>
        <li className="list-none margin-bottom-20">Canh khổ qua nhồi thịt được cho là giúp giải nhiệt cơ thể vào mùa hè.</li>

        <li value="8" id="">Fresh coriander (or cilantro) is sprinkled on top of a hot bowl of beef noodle soup before serving.</li>
        <li className="list-none margin-bottom-20">Rau mùi tươi được rắc lên trên bát phở bò nóng hổi trước khi thưởng thức.</li>

        <li value="9" id="">Sweet luffa cooked in a simple shrimp broth makes a refreshing soup for hot days.</li>
        <li className="list-none margin-bottom-20">Mướp ngọt nấu với nước dùng tôm đơn giản tạo thành món canh thanh mát cho những ngày oi bức.</li>

        <li value="10" id="">A plate of balut eggs is never complete without a handful of Vietnamese coriander.</li>
        <li className="list-none margin-bottom-20">Một đĩa trứng vịt lộn sẽ không bao giờ trọn vẹn nếu thiếu đi một nhúm rau răm.</li>

      </ol>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>September 16, 2026 · by 💎GEM ·</span>
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