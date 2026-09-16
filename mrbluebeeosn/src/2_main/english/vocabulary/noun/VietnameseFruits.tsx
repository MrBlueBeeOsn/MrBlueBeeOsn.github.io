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

        <li value="1" id="">KNOWN as the KING of FRUITS, DURian has a STRONG aROma and a CREAMy TEXture.</li>
        <li className="list-none margin-bottom-20">Được mệnh danh là vua của các loài trái cây, sầu riêng có hương thơm nồng nàn và kết cấu béo ngậy.</li>

        <li value="2" id="">with its BRIGHT PINK SKIN and uNIQUE LOOK, DRAGon FRUIT is VERy reFRESHing.</li>
        <li className="list-none margin-bottom-20">Với lớp vỏ hồng sáng và vẻ ngoài độc đáo, quả thanh long mang lại cảm giác rất thanh mát.</li>

        <li value="3" id="">the HAIRy RED SHELL of a ramBUtan HIDES a SWEET and JUIcy transLUcent FRUIT inSIDE.</li>
        <li className="list-none margin-bottom-20">Lớp vỏ đỏ có lông của quả chôm chôm che giấu một phần thịt quả trong suốt, ngọt và mọng nước bên trong.</li>

        <li value="4" id="">RIPE JACKfruit SEGments have a disTINCT FRAgrance and a CHEWy, SWEET TASTE.</li>
        <li className="list-none margin-bottom-20">Những múi mít chín có hương thơm đặc trưng và vị ngọt, dai.</li>

        <li value="5" id="">SUMmer in VietNAM is incomPLETE with<strong>out</strong> enJOYing a BASket of FRESH, SWEET LYchees.</li>
        <li className="list-none margin-bottom-20">Mùa hè ở Việt Nam sẽ không trọn vẹn nếu thiếu đi việc thưởng thức một giỏ vải tươi ngọt.</li>

        <li value="6" id="">SWEET LONGan FRUITS are OFten USED to MAKE a COOLing HERBal desSERT SOUP in VietnaMESE.</li>
        <li className="list-none margin-bottom-20">Những quả nhãn ngọt thường được dùng để làm món chè thanh mát ở Việt Nam.</li>

        <li value="7" id="">the THICK PURple RIND of a MANgosteen proTECTS TENder, SNOW-WHITE SEGments inSIDE.</li>
        <li className="list-none margin-bottom-20">Lớp vỏ tím dày của quả măng cụt bảo vệ những múi trắng muốt, mềm mại bên trong.</li>

        <li value="8" id="">when SLICED CROSSwise, a STAR FRUIT NATurally FORMS a PERfect FIVE-POINTed STAR SHAPE.</li>
        <li className="list-none margin-bottom-20">Khi cắt ngang, quả khế tự nhiên tạo thành hình ngôi sao năm cánh hoàn hảo.</li>

        <li value="9" id="">CRUNCHy GREEN GUAva DIPPED in CHILi SALT is a POPular STREET FOOD a<strong>mong</strong> STUdents.</li>
        <li className="list-none margin-bottom-20">Ổi xanh giòn chấm muối ớt là món ăn vặt đường phố rất phổ biến của học sinh.</li>

        <li value="10" id="">VietnaMESE POMelo has LARGE, JUIcy SEGments that are both SWEET and SLIGHTly TANGy.</li>
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