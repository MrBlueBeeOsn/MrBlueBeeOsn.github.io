import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function POSitively1(): React.JSX.Element {

  const postId = "POSitively1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-tich-cuc-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: tích cực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">POSitively
        <sup><Link to="/vocabulary/POSitively-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/POSitively-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>POSitively</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [POSitively][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">POS i̛ tive ly</Link>] /ˈpɒz.ə.tɪv.li/ ⬤••• (4x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Một cách tích cực, khẳng định, quả quyết</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>POSitively</strong>" có thể mang nhiều ý nghĩa tùy thuộc vào ngữ cảnh:</p>
      
        <ol>
      
          <li>Một cách tích cực: Thể hiện sự lạc quan, hy vọng, hoặc hướng tới điều tốt đẹp.</li>
      
          <li>Một cách khẳng định, quả quyết: Thể hiện sự chắc chắn, không nghi ngờ.</li>
      
          <li>Một cách có lợi: Mang lại kết quả tốt.</li>
      
        </ol>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>he reSPONDed POSitively to the sugGEStion.</li>
          <li className="margin-bottom-20 list-none">Anh ấy phản hồi tích cực trước đề xuất.</li>

          <li>she POSitively iDENtified the SUSpect.</li>
          <li className="margin-bottom-20 list-none">Cô ấy khẳng định chắc chắn nghi phạm.</li>

          <li>the NEW POLicy POSitively imPACted the COMpany's PROfits.</li>
          <li className="list-none">Chính sách mới tác động tích cực đến lợi nhuận của công ty.</li>

        </ul>

      {/* =============================
            Gia đình từ:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Gia đình từ</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>he HAS a POSitive ATtitude.</li>
          <li className="margin-bottom-20 list-none">Anh ấy có thái độ tích cực.</li>

          <li>the TEST reSULT was POSitive.</li>
          <li className="margin-bottom-20 list-none">Kết quả xét nghiệm là dương tính.</li>

          <li>her posiTIVity is conTAgious.</li>
          <li className="list-none">Sự tích cực của cô ấy có tính lan truyền.</li>

        </ul>

      {/* =============================
            Từ đồng nghĩa:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ đồng nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>she CERtainly KNOWS what she's DOing.</li>
          <li className="margin-bottom-20 list-none">Anh ấy nhìn vào tương lai một cách lạc quan.</li>

          <li>he LOOKED at the FUture optiMIStically.</li>
          <li className="margin-bottom-20 list-none">Cô ấy chắc chắn biết mình đang làm gì.</li>

          <li>the CRITics reVIEWED the MOvie FAvorably.</li>
          <li className="list-none">Các nhà phê bình đánh giá bộ phim một cách thuận lợi.</li>

        </ul>

        {/* <Link to="/vocabulary/CLEARly-1">Clearly</Link> */}

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>he reACTed NEGatively to the NEWS.</li>
          <li className="margin-bottom-20 list-none">Anh ấy phản ứng tiêu cực với tin tức.</li>

          <li>she SPOKE unCERtainly about her PLANS.</li>
          <li className="margin-bottom-20 list-none">Cô ấy nói một cách không chắc chắn về kế hoạch của mình.</li>

          <li>the BAD WEAther ADversely afFECTed the CROPS.</li>
          <li className="list-none">Thời tiết xấu ảnh hưởng bất lợi đến mùa màng.</li>

        </ul>
      
      {/* =============================
            🌻 Mẹo học từ vựng:
      ============================= */}

      <h3 className="margin-y-50 text-center">🌻 Mẹo học từ vựng:</h3>

      {/* =============================
            1. Liên kết hình ảnh:
      ============================= */}
      
      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>1. Liên kết</strong></mark> 
        </strong>
        <strong>&nbsp;với hình ảnh</strong>:
      </p>

      <p className="text-indent-whole">Hình dung một người đang mỉm cười và nói "yes" một cách quả quyết.</p>

        <ul className="list-square">

          <li>he NODded and POSitively afFIRMED, "YES, we can DO it."</li>
          <li className="list-none">Anh ấy gật đầu và khẳng định một cách quả quyết: "Vâng, chúng ta có thể làm được."</li>

        </ul>

      {/* =============================
            2. Tạo câu ví dụ:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Tạo câu</strong></mark> 
        </strong>
        <strong>&nbsp;ví dụ</strong>:
      </p>

      <p className="text-indent-whole">Tạo các câu liên quan đến các tình huống khác nhau để hiểu rõ các nghĩa của từ.</p>

        <ul className="list-square">

          <li>the PAtient reSPONDed POSitively to the TREATment.</li>
          <li className="list-none">Bệnh nhân phản ứng tích cực với điều trị.</li>

        </ul>

      {/* =============================
            3. Luyện tập thường xuyên:
      ============================= */}

      <p className="margin-top-20">
        <strong>
            <mark className="highlight-255-padding-4-8"><strong>3. Luyện tập</strong></mark>
        </strong>
        <strong>&nbsp;thường xuyên</strong>:
      </p>

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các bài viết hoặc cuộc trò chuyện.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>he ANswered the QUEStion.</li>
            <li className="list-none margin-bottom-20">Anh ấy trả lời câu hỏi.</li>

            <li value="2">he ANswered the QUEStion POSitively.</li>
            <li className="list-none margin-bottom-20">Anh ấy trả lời câu hỏi một cách khẳng định/tích cực.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh</span> sự chắc chắn hoặc <span className="highlight-255-padding-0-4">thái độ tích cực trong câu trả lời</span> của anh ấy.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Đa nghĩa: "<strong>POSitively</strong>" có thể mang nhiều ý nghĩa khác nhau, cần xem xét ngữ cảnh để hiểu chính xác.</li>

          <li className="margin-bottom-20">Thường dùng trong nhiều ngữ cảnh: Từ này được sử dụng rộng rãi trong nhiều lĩnh vực, từ giao tiếp hàng ngày đến khoa học và kinh doanh.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>March 29, 2025 · by 💎GEM ·</span>
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