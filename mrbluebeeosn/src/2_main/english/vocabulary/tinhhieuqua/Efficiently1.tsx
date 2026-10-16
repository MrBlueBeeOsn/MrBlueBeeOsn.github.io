import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function efFICiently1(): React.JSX.Element {

  const postId = "efFICiently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-hieu-qua"><mark className="highlight-tertiary-padding-4-8">ADverbs: hiệu quả</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">efFICiently
        <sup><Link to="/vocabulary/efFICiently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/efFICiently-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>efFICiently</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                efFICiently \<Link to="/pronunciation/5-vowel-system">ef FIC ie̛nt ly</Link>\ /ɪˈfɪʃəntli/ •⬤•• (FOUR SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Một cách hiệu quả</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>efFICiently</strong>" được dùng để mô tả một hành động được thực hiện một cách nhanh chóng, tiết kiệm và đạt được kết quả tốt nhất với ít công sức và tài nguyên nhất. Nó thể hiện sự tối ưu hóa trong việc sử dụng thời gian, năng lượng và các nguồn lực khác.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li id="ADverb">she comPLETEd the TASK efFICiently.</li>
          <li className="margin-bottom-20 list-none">Cô ấy đã hoàn thành nhiệm vụ một cách hiệu quả.</li>

          <li>this NEW SOFTware will HELP us WORK MORE efFICiently.</li>
          <li className="list-none">Phần mềm mới này sẽ giúp chúng ta làm việc hiệu quả hơn.</li>

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

          <li id="ADjective">he is a VERy efFICient WORKer.</li>
          <li className="margin-bottom-20 list-none">Anh ấy là một người làm việc rất hiệu quả.</li>

          <li id="NOUN">the efFICiency of this maCHINE is reMARKable.</li>
          <li className="list-none">Hiệu suất của chiếc máy này thật đáng kinh ngạc.</li>

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

          <li>the MEDicine WORKED <Link to="/vocabulary/efFECTively-1">efFECTively</Link>.</li>
          <li className="margin-bottom-20 list-none">Thuốc đã phát huy tác dụng hiệu quả.</li>

          <li>we NEED to WORK MORE <Link to="/vocabulary/proDUCTively-1">proDUCTively</Link> to MEET the DEADline.</li>
          <li className="list-none">Chúng ta cần làm việc hiệu quả hơn để đáp ứng thời hạn.</li>

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

          <li>the OLD SYStem WORKED inefFICiently.</li>
          <li className="margin-bottom-20 list-none">Hệ thống cũ hoạt động không hiệu quả.</li>

          <li>he SPENT his MONey WASTEfully.</li>
          <li className="list-none">Anh ta đã tiêu tiền một cách hoang phí.</li>

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

      <p className="text-indent-whole">Hình dung một người đang làm việc nhanh chóng và gọn gàng để hoàn thành công việc.</p>

        <ul className="list-square">

          <li>he is WORKing VERy efFICiently to FINish the TASK.</li>
          <li className="list-none">Anh ấy đang làm việc rất hiệu quả để hoàn thành nhiệm vụ.</li>

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

      <p className="text-indent-whole">Tự tạo các câu ví dụ khác nhau với từ "<strong>efFICiently</strong>" trong nhiều ngữ cảnh khác nhau.</p>

        <ul className="list-square">

          <li>she efFICiently MANaged her TIME to FINish all her TASKS.</li>
          <li className="list-none">Cô ấy đã quản lý thời gian một cách hiệu quả để hoàn thành tất cả các nhiệm vụ của mình.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại và bài viết.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he FINished the rePORT.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã hoàn thành bản báo cáo.</li>

            <li value="2">he FINished the rePORT efFICiently in JUST ONE HOUR.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã hoàn thành bản báo cáo một cách hiệu quả chỉ trong vòng một giờ.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh</span> rằng anh ấy không chỉ <span className="highlight-255-padding-0-4">hoàn thành</span> báo cáo mà còn làm điều đó <span className="highlight-255-padding-0-4">một cách nhanh chóng và hiệu quả</span>.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Tối ưu hóa: "<strong>efFICiently</strong>" nhấn mạnh việc tối ưu hóa các nguồn lực để đạt được mục tiêu.</li>

          <li className="margin-bottom-20">Kết quả: Nó thường được liên kết với việc đạt được kết quả mong muốn với ít nỗ lực nhất.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 3, 2024 · by 💎GEM ·</span>
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