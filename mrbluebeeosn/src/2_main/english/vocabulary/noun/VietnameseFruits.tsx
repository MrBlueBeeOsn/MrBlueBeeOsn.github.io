import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VietnameseFruits(): React.JSX.Element {

  const postId = "VietnameseFruits";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#nouns-fruits-&-vegetables"><mark className="highlight-tertiary-padding-4-8">NOUNS: FRUITS & VEGETables</mark></HashLink></h4>

      <h1 className="margin-y-50 text-center">🥭 Trái Cây Đặc Sản Việt Nam</h1>

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

        <li value="1" id="">Known as the king of fruits, durian has a strong aroma and a creamy texture.</li>
        <li className="list-none margin-bottom-20">Được mệnh danh là vua của các loài trái cây, sầu riêng có hương thơm nồng nàn và kết cấu béo ngậy.</li>

        <li value="2" id="">With its bright pink skin and unique look, dragon fruit is very refreshing.</li>
        <li className="list-none margin-bottom-20">Với lớp vỏ hồng sáng và vẻ ngoài độc đáo, quả thanh long mang lại cảm giác rất thanh mát.</li>

        <li value="3" id="">The hairy red shell of a rambutan hides a sweet and juicy translucent fruit inside.</li>
        <li className="list-none margin-bottom-20">Lớp vỏ đỏ có lông của quả chôm chôm che giấu một phần thịt quả trong suốt, ngọt và mọng nước bên trong.</li>

        <li value="4" id="">Những múi mít chín có hương thơm đặc trưng và vị ngọt, dai.</li>
        <li className="list-none margin-bottom-20">Ripe jackfruit segments have a distinct fragrance and a chewy, sweet taste.</li>

        <li value="5" id="">Summer in Vietnam is incomplete without enjoying a basket of fresh, sweet lychees.</li>
        <li className="list-none margin-bottom-20">Mùa hè ở Việt Nam sẽ không trọn vẹn nếu thiếu đi việc thưởng thức một giỏ vải tươi ngọt.</li>

        <li value="6" id="">Sweet longan fruits are often used to make a cooling herbal dessert soup in Vietnam.</li>
        <li className="list-none margin-bottom-20">Những quả nhãn ngọt thường được dùng để làm món chè thanh mát ở Việt Nam.</li>

        <li value="7" id="">The thick purple rind of a mangosteen protects tender, snow-white segments inside.</li>
        <li className="list-none margin-bottom-20">Lớp vỏ tím dày của quả măng cụt bảo vệ những múi trắng muốt, mềm mại bên trong.</li>

        <li value="8" id="">When sliced crosswise, a star fruit naturally forms a perfect five-pointed star shape.</li>
        <li className="list-none margin-bottom-20">Khi cắt ngang, quả khế tự nhiên tạo thành hình ngôi sao năm cánh hoàn hảo.</li>

        <li value="9" id="">Crunchy green guava dipped in chili salt is a popular street food among students.</li>
        <li className="list-none margin-bottom-20">Ổi xanh giòn chấm muối ớt là món ăn vặt đường phố rất phổ biến của học sinh.</li>

        <li value="10" id="">Vietnamese pomelo has large, juicy segments that are both sweet and slightly tangy.</li>
        <li className="list-none margin-bottom-20">Bưởi Việt Nam có những tép lớn, mọng nước, vừa ngọt lại có vị chua thanh nhẹ.</li>

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