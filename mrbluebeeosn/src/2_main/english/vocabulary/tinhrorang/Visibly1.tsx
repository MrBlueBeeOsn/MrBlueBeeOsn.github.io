import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VISibly1(): React.JSX.Element {

  const postId = "VISibly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-ro-rang"><mark className="highlight-tertiary-padding-4-8">ADverbs: rõ ràng</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">VISibly
        <sup><Link to="/vocabulary/VISibly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/VISibly-2">&nbsp;2&nbsp;</Link>
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
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>VISibly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                VISibly \<Link to="/pronunciation/5-vowel-system">VIS i̛ bly</Link>\ /ˈvɪzəbli/ ⬤•• (THREE SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Rõ ràng</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>VISibly</strong>" được dùng để mô tả một điều gì đó dễ dàng nhận thấy bằng mắt thường, một cách rõ ràng và không thể phủ nhận. Nó thường được sử dụng để nhấn mạnh sự hiển nhiên của một trạng thái, cảm xúc hoặc sự thay đổi.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">she was VISibly upSET.</li>
          <li className="margin-bottom-20 list-none">Cô ấy trông rõ ràng là đang buồn bã.</li>

          <li>the DAMage to the CAR was VISibly apPARent.</li>
          <li className="list-none">Hư hỏng trên chiếc xe rất rõ ràng.</li>

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

          <li id="ADjective">the STARS are VISible on a CLEAR NIGHT.</li>
          <li className="margin-bottom-20 list-none">Các ngôi sao có thể nhìn thấy được vào một đêm trời quang đãng.</li>

          <li id="NOUN">she has EXcellent VISion.</li>
          <li className="list-none">Cô ấy có thị lực rất tốt.</li>

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

          <li>he <Link to="/vocabulary/CLEARly-1">CLEARly</Link> STAted his oPINion.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã nêu rõ quan điểm của mình.</li>

          <li>it was <Link to="/vocabulary/OBviously-1">OBviously</Link> a misTAKE.</li>
          <li className="list-none">Đó rõ ràng là một sai lầm.</li>

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

          <li>the CHANGE was inVISibly SLOW.</li>
          <li className="margin-bottom-20 list-none">Sự thay đổi diễn ra một cách chậm chạp đến mức không thể nhận ra.</li>

          <li>the PLANT GREW imperCEPtibly <strong>o</strong>ver the WEEKS.</li>
          <li className="list-none">Cây đã lớn lên một cách không thể nhận ra trong suốt những tuần qua.</li>

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

      <p className="text-indent-whole">Hình dung một người mặt đỏ bừng vì tức giận hoặc một vết bẩn lớn trên một chiếc áo trắng.</p>

        <ul className="list-square">

          <li>his FACE was VISibly RED with ANGer.</li>
          <li className="margin-bottom-20 list-none">Khuôn mặt anh ta đỏ bừng vì tức giận.</li>

          <li>here was a VISibly LARGE STAIN on his WHITE SHIRT.</li>
          <li className="list-none">Trên chiếc áo sơ mi trắng của anh ấy có một vết bẩn rõ ràng và lớn.</li>

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

      <p className="text-indent-whole">Tạo các câu liên quan đến những tình huống dễ nhận thấy.</p>

        <ul className="list-square">

          <li>she was VISibly TIred <strong>af</strong>ter the LONG JOURney.</li>
          <li className="list-none">Cô ấy trông rõ ràng là mệt mỏi sau chuyến đi dài.</li>

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

      <p className="text-indent-whole">Use this word frequently in your writing or conversations.</p>

        <p className="text-indent-whole">Examples for comparison (differences):</p>

          <ol>

            <li value="1">he was SAD.</li>
            <li className="list-none margin-bottom-20">Anh ấy cảm thấy buồn.</li>

            <li value="2">he was VISibly SAD, with TEARS in his EYES.</li>
            <li className="list-none margin-bottom-20">Anh ấy trông rõ ràng là buồn, với những giọt nước mắt lăn trên mắt.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh rằng cảm xúc buồn</span> của anh ấy <span className="highlight-255-padding-0-4">rất dễ nhận thấy</span> qua biểu hiện trên khuôn mặt.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>Sự hiển nhiên: Nhấn mạnh đến tính dễ nhận thấy bằng mắt thường.</li>

          <li className="margin-bottom-20">Trực quan: Thường được sử dụng để mô tả những thay đổi về ngoại hình, cảm xúc hoặc trạng thái.</li>

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