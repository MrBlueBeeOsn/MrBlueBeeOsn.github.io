import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Fruits(): React.JSX.Element {

  const postId = "Fruits";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#nouns-fruits-&-vegetables"><mark className="highlight-tertiary-padding-4-8">NOUNS: FRUITS & VEGETables</mark></HashLink></h4>

      <h1 className="margin-y-50 text-center">🍎 Nhóm Trái Cây</h1>

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

        <li value="1" id="">An apple a day keeps the doctor away.</li>
        <li className="list-none margin-bottom-20">Một quả táo mỗi ngày giúp tránh xa bác sĩ / Ăn táo mỗi ngày rất tốt cho sức khỏe.</li>

        <li value="2" id="">Children and monkeys both love eating sweet bananas.</li>
        <li className="list-none margin-bottom-20">Cả trẻ em và loài khỉ đều rất thích ăn những quả chuối ngọt.</li>

        <li value="3" id="">She drinks a glass of fresh orange juice every morning.</li>
        <li className="list-none margin-bottom-20">Cô ấy uống một cốc nước cam tươi vào mỗi buổi sáng.</li>

        <li value="4" id="">Vietnamese mangoes are famous for their rich and sweet flavor.</li>
        <li className="list-none margin-bottom-20">Xoài Việt Nam nổi tiếng với hương vị đậm đà và ngọt ngào.</li>

        <li value="5" id="">My mom uses pineapple to make a delicious sweet and sour pork dish.</li>
        <li className="list-none margin-bottom-20">Mẹ tôi dùng dứa (thơm) để làm món thịt lợn xào chua ngọt rất ngon.</li>

        <li value="6" id="">Eating a cold slice of watermelon is the best way to beat the summer heat.</li>
        <li className="list-none margin-bottom-20">Ăn một lát dưa hấu lạnh là cách tuyệt vời nhất để xua tan cái nóng mùa hè.</li>

        <li value="7" id="">She topped the birthday cake with fresh red strawberries.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã phủ lên chiếc bánh sinh nhật những quả dâu tây đỏ mọng tươi ngon.</li>

        <li value="8" id="">Green and purple grapes are both great for making wine.</li>
        <li className="list-none margin-bottom-20">Cả nho xanh và nho tím đều rất tuyệt vời để làm rượu vang.</li>

        <li value="9" id="">Toast with mashed avocado and eggs is a very healthy breakfast.</li>
        <li className="list-none margin-bottom-20">Bánh mì nướng bơ nghiền và trứng là một bữa sáng rất lành mạnh.</li>

        <li value="10" id="">Ripe papaya is a soft, sweet, and vitamin-rich tropical fruit.</li>
        <li className="list-none margin-bottom-20">Đu đủ chín là một loại trái cây nhiệt đới mềm, ngọt và giàu vitamin.</li>

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