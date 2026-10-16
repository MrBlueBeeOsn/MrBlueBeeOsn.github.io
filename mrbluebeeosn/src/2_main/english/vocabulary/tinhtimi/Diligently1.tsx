import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DILigently1(): React.JSX.Element {

  const postId = "DILigently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-ti-mi"><mark className="highlight-tertiary-padding-4-8">ADverbs: tỉ mỉ</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">DILigently
        <sup><Link to="/vocabulary/DILiGENTly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/DILiGENTly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>DILigently</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">
              
            <li>
              <span className="highlight-255-padding-3-6">
                DILigently \<Link to="/pronunciation/5-vowel-system">DIL i̛ ge̛nt ly</Link>\ /ˈdɪl.ə.dʒənt.li/ ⬤••• (FOUR SYLlables)
              </span>
            </li>
            
            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Một cách tỉ mỉ</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>
      
      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>DILigently</strong>" được dùng để miêu tả một hành động được thực hiện với sự chăm chỉ, nỗ lực và sự tập trung cao độ. Nó thể hiện một thái độ làm việc nghiêm túc và hiệu quả.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she DILigently STUDied for the eXAM.</li>
          <li className="margin-bottom-20 list-none">Cô ấy đã học hành chăm chỉ để chuẩn bị cho kỳ thi.</li>

          <li>the WORKers DILigently rePAIRed the ROAD.</li>
          <li className="list-none">Các công nhân đã cần mẫn sửa chữa con đường.</li>

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

          <li id="ADjective">he is a DILigent STUdent.</li>
          <li className="margin-bottom-20 list-none">Cậu ấy là một học sinh siêng năng.</li>

          <li id="NOUN">her DILigence was reWARded.</li>
          <li className="list-none">Sự cần cù của cô ấy đã được đền đáp.</li>

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

          <li>the BEES inDUStriously GATHered POLlen.</li>
          <li className="margin-bottom-20 list-none">Những con ong cần mẫn thu thập phấn hoa.</li>

          <li>he asSIDuously WORKED on his PROject.</li>
          <li className="list-none">Anh ấy đã miệt mài làm việc trên dự án của mình.</li>

        </ul>

      {/* =============================
            ANtonyms:
      ============================= */}

      <p className="margin-top-20" id="ANtonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>ANtonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>he <Link to="/vocabulary/LAzily-1">LAzily</Link> SAT on the COUCH.</li>
          <li className="margin-bottom-20 list-none">Anh ta lười biếng ngồi trên ghế sofa.</li>

          <li>she CARElessly THREW her PApers on the FLOOR.</li>
          <li className="list-none">Cô ấy đã vô ý ném đống giấy tờ của mình xuống sàn.</li>

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

      <p className="text-indent-whole">Hình dung một người đang học bài với cuốn sách và bút, hoặc một công nhân đang làm việc chăm chỉ.</p>

        <ul className="list-square">

          <li>she is PUTting in a LOT of EFfort, STUDied DILigently for the eXAM.</li>
          <li className="list-none">Cô ấy đang nỗ lực rất nhiều, đã học hành chăm chỉ để chuẩn bị cho kỳ thi.</li>

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

      <p className="text-indent-whole">Tạo các câu liên quan đến những hoạt động đòi hỏi sự chăm chỉ.</p>

        <ul className="list-square">

          <li>she DILigently CLEANED the HOUSE.</li>
          <li className="list-none">Cô ấy đã siêng năng dọn dẹp ngôi nhà.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các bài viết hoặc cuộc trò chuyện.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he WORKED on the PROject.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã tham gia vào dự án.</li>

            <li value="2">he DILigently WORKED on the PROject for HOURS.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã làm việc chăm chỉ trên dự án đó trong nhiều giờ liền.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh sự chăm chỉ và nỗ lực</span> của anh ấy <span className="highlight-255-padding-0-4">trong việc hoàn thành</span> dự án.</p>

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Nhấn mạnh sự nỗ lực: "<strong>DILigently</strong>" luôn nhấn mạnh sự nỗ lực và sự cống hiến trong việc hoàn thành một nhiệm vụ.</li>

          <li className="margin-bottom-20">Dùng trong ngữ cảnh tích cực: Từ này thường được sử dụng trong ngữ cảnh tích cực để miêu tả những hành động đáng khen ngợi.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>deCEMber 26, 2024 · by 💎GEM ·</span>
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