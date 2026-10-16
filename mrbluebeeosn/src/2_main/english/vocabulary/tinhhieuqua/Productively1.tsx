import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function proDUCTively1(): React.JSX.Element {

  const postId = "proDUCTively1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hieu-qua"><mark className="highlight-tertiary-padding-4-8">ADverbs: hiệu quả</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">proDUCTively
        <sup><Link to="/vocabulary/proDUCTively-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/proDUCTively-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADjective">ADjective</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#VERB">VERB</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOUN">NOUN</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SYNonyms">SYNonyms</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ANtonyms">ANtonyms</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#VoCABulary-LEARNing-TIPS">🌻 VoCABulary LEARNing TIPS</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>proDUCTively</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                proDUCTively \<Link to="/pronunciation/5-vowel-system">prơ DƯC tive ly</Link>\ /prəˈdʌk.tɪv.li/ •⬤•• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Hiệu quả</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>proDUCTively</strong>" miêu tả cách một người làm việc, sử dụng thời gian hoặc tài nguyên để tạo ra kết quả tốt, có giá trị hoặc đạt được mục tiêu một cách hiệu quả.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she SPENT her MORNing proDUCTively, FINishING <strong>sever</strong>al imPORTant TASKS.</li>
          <li className="margin-bottom-20 list-none">Cô ấy đã dành buổi sáng của mình một cách hiệu quả, hoàn thành một số công việc quan trọng.</li>

          <li>the TEAM WORKED proDUCTively toGETHer to MEET the DEADline.</li>
          <li className="margin-bottom-20 list-none">Cả nhóm đã làm việc hiệu quả cùng nhau để hoàn thành công việc đúng hạn.</li>

          <li>he USED his FREE TIME proDUCTively by LEARNing a NEW SKILL.</li>
          <li className="list-none">Anh ấy đã tận dụng thời gian rảnh rỗi của mình một cách hiệu quả bằng cách học một kỹ năng mới.</li>

        </ul>

      {/* =============================
            VoCABulary FAMILy:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>VoCABulary FAMILy:</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li id="ADjective">it was a VERy proDUCtive MEEting.</li>
          <li className="margin-bottom-20 list-none">Đó là một cuộc họp rất hiệu quả.</li>

          <li className="list-none">he is a proDUCtive MEMber of the TEAM.</li>
          <li className="margin-bottom-20 list-none">Anh ấy là một thành viên năng suất của đội.</li>

          <li id="VERB">the FACtory proDUces CARS.</li>
          <li className="margin-bottom-20 list-none">Nhà máy này sản xuất ô tô.</li>

          <li id="NOUN">they SELL FRESH PROduce at the MARket.</li>
          <li className="margin-bottom-20 list-none">Họ bán các loại rau củ quả tươi tại chợ.</li>

          <li className="list-none">the COMpany is FOcused on imPROVing producTIVity.</li>
          <li className="list-none">Công ty tập trung vào việc nâng cao năng suất.</li>

        </ul>

      {/* =============================
            SYNonyms:
      ============================= */}
        
      <p className="margin-top-20" id="SYNonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>SYNonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>the WORK was DONE <Link to="/vocabulary/efFICiently-1">efFICiently</Link>.</li>
          <li className="margin-bottom-20 list-none">Công việc đã được hoàn thành một cách hiệu quả.</li>

          <li>the NEW STRATegy was IMplemented <Link to="/vocabulary/efFECTively-1">efFECTively</Link>.</li>
          <li className="margin-bottom-20 list-none">Chiến lược mới đã được triển khai một cách hiệu quả.</li>

          <li>they colLABorated FRUITfully on the PROJect.</li>
          <li className="margin-bottom-20 list-none">Họ đã hợp tác rất hiệu quả trong dự án này.</li>

          <li>he SPENT his TIME USEfully volunTEERing.</li>
          <li className="list-none">Anh ấy đã dành thời gian của mình một cách hữu ích để tham gia hoạt động tình nguyện.</li>

        </ul>

        {/* <Link to="/vocabulary/CLEARly-1">Clearly</Link> */}

      {/* =============================
            ANtonyms:
      ============================= */}

      <p className="margin-top-20" id="ANtonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>ANtonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>the PROJect was MANaged inefFICiently.</li>
          <li className="margin-bottom-20 list-none">Dự án đã được quản lý một cách thiếu hiệu quả.</li>

          <li>he SPENT the WHOLE DAY unproDUCTively.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã dành cả ngày mà chẳng làm được việc gì.</li>

          <li>they USED REsources WASTEfully.</li>
          <li className="margin-bottom-20 list-none">Họ đã sử dụng tài nguyên một cách lãng phí.</li>

          <li>he SAT Idly by while OTHers WORKED.</li>
          <li className="list-none">Anh ta chỉ ngồi không trong khi những người khác làm việc.</li>

        </ul>
      
      {/* =============================
            🌻 Vocabulary-Learning Tips:
      ============================= */}

      <h3 className="margin-y-50 text-center" id="VoCABulary-LEARNing-TIPS">🌻 Vocabulary-Learning Tips:</h3>

      {/* =============================
            1. Link to the image:
      ============================= */}
      
      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>1. Link</strong></mark> 
        </strong>
        <strong>&nbsp;to the image</strong>:
      </p>

      <p className="text-indent-whole">Hình dung một người đang làm việc hăng say và hoàn thành nhiều công việc, một khu vườn tươi tốt với nhiều hoa trái, hoặc một buổi họp nhóm hiệu quả với nhiều ý tưởng được đưa ra.</p>

        <ul className="list-square">

          <li>he WORKED proDUCTively and acCOMplished a LOT.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã làm việc rất hiệu quả và đạt được rất nhiều thành tựu.</li>

          <li>the GARden GREW proDUCTively, YIELding aBUNdant FRUITS and FLOWers.</li>
          <li className="margin-bottom-20 list-none">Khu vườn phát triển tươi tốt, cho ra những trái cây và hoa tươi tốt.</li>

          <li>the TEAM MET proDUCTively, GENerating NUmerous iDEaS.</li>
          <li className="list-none">Nhóm đã làm việc hiệu quả, nảy sinh ra rất nhiều ý tưởng.</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create</strong></mark> 
        </strong>
        <strong>&nbsp;example sentences</strong>:
      </p>

      <p className="text-indent-whole">Tạo các câu liên quan đến cách bạn sử dụng thời gian và làm việc hiệu quả.</p>

        <ul className="list-square">

          <li>i PLAN to USE my comMUTE TIME proDUCTively by LIStening to PODcasts.</li>
          <li className="list-none">Tôi dự định sẽ tận dụng thời gian đi làm một cách hiệu quả bằng cách nghe các chương trình podcast.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
            <mark className="highlight-255-padding-4-8"><strong>3. Regular</strong></mark>
        </strong>
        <strong>&nbsp;practice</strong>:
      </p>

      <p className="text-indent-whole margin-bottom-20">Chú ý đến những hoạt động mang lại kết quả tốt và cố gắng sử dụng từ này để mô tả chúng.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">she SPENT her MORNing WORKing.</li>
            <li className="list-none margin-bottom-20">Cô ấy đã dành cả buổi sáng để làm việc.</li>

            <li value="2">she SPENT her MORNing proDUCTively, FINishING <strong>sever</strong>al imPORTant TASKS.</li>
            <li className="list-none margin-bottom-20">Cô ấy đã dành buổi sáng của mình một cách hiệu quả, hoàn thành một số công việc quan trọng.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: <span className="highlight-255-padding-0-4">Nhấn mạnh</span> rằng thời gian <span className="highlight-255-padding-0-4">làm việc mang lại kết quả</span> cụ thể và có giá trị.</p>

      </div>

      <ol>

            <li>the TEAM WORKED toGETHer to MEET the DEADline.</li>
            <li className="list-none margin-bottom-20">Cả nhóm đã cùng nhau nỗ lực để hoàn thành công việc đúng hạn.</li>

            <li value="2">the TEAM WORKED proDUCTively toGETHer to MEET the DEADline.</li>
            <li className="list-none margin-bottom-20">Cả nhóm đã làm việc hiệu quả cùng nhau để hoàn thành công việc đúng hạn.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: <span className="highlight-255-padding-0-4">Thể hiện sự phối hợp và hiệu quả</span> trong quá trình làm việc nhóm.</p>

      </div>

          <ol>

            <li>he USED his FREE TIME by LEARNing a NEW SKILL.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã tận dụng thời gian rảnh rỗi để học một kỹ năng mới.</li>

            <li value="2">he USED his FREE TIME proDUCTively by LEARNing a NEW SKILL.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã tận dụng thời gian rảnh rỗi của mình một cách hiệu quả bằng cách học một kỹ năng mới.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: <span className="highlight-255-padding-0-4">Chỉ rõ rằng việc sử dụng</span> thời gian rảnh <span className="highlight-255-padding-0-4">mang lại lợi ích và sự phát triển</span> cá nhân</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Nhấn mạnh việc tạo ra kết quả có giá trị hoặc đạt được mục tiêu một cách hiệu quả và có tổ chức.</li>

          <li>Thường liên quan đến công việc, học tập hoặc việc sử dụng thời gian và tài nguyên.</li>

          <li className="margin-bottom-20">Mang ý nghĩa tích cực, thể hiện sự năng động và có mục đích.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>MAY 7, 2025 · by 💎GEM ·</span>
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