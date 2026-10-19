import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function FAITHfully1(): React.JSX.Element {

  const postId = "FAITHfully1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chan-thanh"><mark className="highlight-tertiary-padding-4-8">ADverbs: chân thành</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">FAITHfully
        <sup><Link to="/vocabulary/FAITHfully-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/FAITHfully-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>FAITHfully</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                FAITHfully \<Link to="/pronunciation/5-vowel-system">FĀITH fưl ly</Link>\ /ˈfeɪθfəli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Với lòng tin tưởng</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>FAITHfully</strong>" được dùng để mô tả một hành động được thực hiện một cách trung thành, tin cậy và đáng tin cường. Nó thường liên quan đến việc giữ lời hứa, thực hiện nhiệm vụ một cách tận tâm và trung thực.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she FAITHfully SERVED her COMpany for <strong>man</strong>y YEARS.</li>
          <li className="margin-bottom-20 list-none">Cô ấy đã tận tụy cống hiến cho công ty trong nhiều năm.</li>

          <li>he FOLlowed the inSTRUCtions FAITHfully.</li>
          <li className="list-none">Anh ấy đã tuân thủ nghiêm túc các hướng dẫn.</li>

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

          <li id="ADjective">he is a FAITHful FRIEND.</li>
          <li className="margin-bottom-20 list-none">Anh ấy là một người bạn trung thành.</li>

          <li id="NOUN">he has GREAT FAITH in his TEAM.</li>
          <li className="list-none">Anh ấy có niềm tin vững chắc vào đội của mình.</li>

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

          <li>he SERVED his COUNtry LOYally.</li>
          <li className="margin-bottom-20 list-none">Ông đã phục vụ Tổ quốc một cách trung thành.</li>

          <li>she deVOtedly CARED for her SICK MOTHer.</li>
          <li className="list-none">Cô đã tận tụy chăm sóc người mẹ ốm yếu của mình.</li>

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

          <li>he beTRAYED his FRIENDS TREACHerously.</li>
          <li className="margin-bottom-20 list-none">Anh ta đã phản bội bạn bè một cách đê hèn.</li>

          <li>she ACTed unFAITHfully towards her HUSband.</li>
          <li className="list-none">Cô ấy đã hành động không chung thủy với chồng mình.</li>

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

      <p className="text-indent-whole">Hình dung một con chó trung thành bên cạnh chủ nhân.</p>

        <ul className="list-square">

          <li>the DOG FAITHfully FOLlowed its OWner.</li>
          <li className="list-none">Con chó đã trung thành đi theo chủ của mình.</li>

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

      <p className="text-indent-whole">Tạo các câu miêu tả những hành động thể hiện sự trung thành.</p>

        <ul className="list-square">

          <li>she FAITHfully KEPT her PROMise.</li>
          <li className="list-none">Cô ấy đã trung thành giữ lời hứa của mình.</li>

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

      <p className="text-indent-whole margin-bottom-20">Use this word frequently in your writing or conversations.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he FINished the PROJect.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã hoàn thành dự án.</li>

            <li value="2">he FAITHfully FINished the PROJect on TIME.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã hoàn thành dự án một cách tận tâm và đúng hạn.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh</span> rằng anh ấy không chỉ hoàn thành dự án mà còn <span className="highlight-255-padding-0-4">làm việc một cách tận tâm và đúng hẹn</span>.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Sự trung thành: "<strong>FAITHfully</strong>" luôn nhấn mạnh sự trung thành và đáng tin cậy.</li>

          <li className="margin-bottom-20">Thường dùng trong ngữ cảnh tích cực: Nó thường được sử dụng để miêu tả những hành động tích cực, đáng khen ngợi.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 5, 2024 · by 💎GEM ·</span>
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