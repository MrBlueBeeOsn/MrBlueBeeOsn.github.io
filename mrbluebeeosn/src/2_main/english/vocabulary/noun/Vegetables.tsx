import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Vegetables(): React.JSX.Element {

  const postId = "Vegetables";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#nouns-fruits-&-vegetables"><mark className="highlight-tertiary-padding-4-8">NOUNS: FRUITS & VEGETables</mark></HashLink></h4>

      <h1 className="margin-y-50 text-center">🥦 Nhóm Rau Củ Quả</h1>

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

        <li value="1" id="">FRESH toMAtoes are esSENtial for MAking a GREAT iTALian PAsta SAUCE.</li>
        <li className="list-none margin-bottom-20">Cà chua tươi là nguyên liệu không thể thiếu để làm món sốt mì ý kiểu Ý tuyệt ngon.</li>

        <li value="2" id="">FRENCH FRIES MADE from FRESH poTAtoes are my FAVORite FAST FOOD.</li>
        <li className="list-none margin-bottom-20">Khoai tây chiên làm từ khoai tây tươi là món ăn vặt yêu thích của tôi.</li>

        <li value="3" id="">BUGS BUNny is FAmous for MUNCHing on a CRUNCHy CARrot.</li>
        <li className="list-none margin-bottom-20">Bugs Bunny nổi tiếng với hình ảnh nhai một củ cà rốt giòn rụm.</li>

        <li value="4" id="">she PLACED SLIces of COLD CUcumber on her EYES to reDUCE PUFFiness.</li>
        <li className="list-none margin-bottom-20">Cô ấy đặt những lát dưa leo lạnh lên mắt để giảm sưng.</li>

        <li value="5" id="">STEAMED BROCcoli with a LITtle CHEESE is a HEALTHy and deLICious SIDE DISH.</li>
        <li className="list-none margin-bottom-20">Bông cải xanh hấp với một ít phô mai là món ăn kèm lành mạnh và ngon miệng.</li>

        <li value="6" id="">SHREDded MAking is the MAIN inGREdient for MAKing COLEslaw SALad.</li>
        <li className="list-none margin-bottom-20">Bắp cải thái nhỏ là nguyên liệu chính để làm món salad bắp cải trộn coleslaw.</li>

        <li value="7" id="">a GOOD BURger ALways NEEDS a CRISP LEAF of GREEN LETtuce.</li>
        <li className="list-none margin-bottom-20">Một chiếc bánh burger ngon luôn cần một lá xà lách xanh tươi giòn.</li>

        <li value="8" id="">CHOPping an ONion OFten MAKES PEOple's EYES WAter.</li>
        <li className="list-none margin-bottom-20">Thái hành tây thường làm cho mọi người bị chảy nước mắt.</li>

        <li value="9" id="">ADDing MINCED GARlic MAKES the STIR-FRIED BEEF MUCH MORE FRAgrant.</li>
        <li className="list-none margin-bottom-20">Cho thêm tỏi băm làm cho món thịt bò xào thơm hơn rất nhiều.</li>

        <li value="10" id="">POPeye the SAILor GETS his SUper STRENGTH whe<strong>nev</strong>er he EATS a CAN of SPINach.</li>
        <li className="list-none margin-bottom-20">Thủy thủ POPeye có được sức mạnh siêu phàm mỗi khi ăn một hộp cải bó xôi.</li>

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