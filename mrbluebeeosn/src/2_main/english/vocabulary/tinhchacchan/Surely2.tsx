import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SUREly2(): React.JSX.Element {

  const postId = "SUREly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-chac-chan"><mark className="highlight-tertiary-padding-4-8">ADverbs: chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">SUREly
        <sup>
          <Link to="/vocabulary/SUREly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/SUREly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#eNOUGH">eNOUGH</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#must-GET">must GET</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#you-KNOW">you KNOW</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#you-can-FINish">you can FINish</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#we-will-NEED">we will NEED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#you-underSTAND">you underSTAND</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#you-aGREE-that">you aGREE that</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#you-reMEMber">you reMEMber</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#you-REalize">you REalize</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#apPREciate-all">apPREciate all</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>SUREly</strong>" (chắc chắn là) và các cụm từ hay đi kèm nhé.

</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              SUREly \<Link to="/pronunciation/5-vowel-system">SURE ly</Link>\ /ˈʃʊrli/ ⬤• (TWO SYLlables)
              
            </span>
              
            &nbsp;là một ADverb thường được sử dụng để thể hiện sự chắc chắn, tin tưởng vào một điều gì đó.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="eNOUGH">i THOUGHT i LEFT my KEYS on the TAble, and SUREly eNOUGH, THERE they WERE.</li>
        <li className="list-none margin-bottom-20">Tôi nghĩ rằng tôi đã bỏ quên chìa khóa trên bàn, và quả thật, chúng vẫn ở đó.</li>

        <li value="2" id="must-GET">she WORKED SO HARD; she SUREly must GET a proMOtion.</li>
        <li className="list-none margin-bottom-20">Cô ấy đã làm việc rất chăm chỉ; chắc chắn cô ấy sẽ được thăng chức.</li>

        <li value="3" id="you-KNOW">SUREly you KNOW the ANswer to this QUESTion.</li>
        <li className="list-none margin-bottom-20">Chắc chắn là bạn biết câu trả lời cho câu hỏi này rồi.</li>

        <li value="4" id="you-can-FINish">SUREly you can FINish this TASK by toMORrow.</li>
        <li className="list-none margin-bottom-20">Chắc chắn là bạn có thể hoàn thành nhiệm vụ này trước ngày mai.</li>

        <li value="5" id="we-will-NEED">the WEATHer FOREcast SAYS it will RAIN toMORrow, so SUREly we will NEED umBRELlas.</li>
        <li className="list-none margin-bottom-20">Dự báo thời tiết cho biết ngày mai sẽ có mưa, nên chắc chắn chúng ta sẽ cần ô.</li>

        <li value="6" id="you-underSTAND">SUREly you underSTAND the imPORtance of this PROJect.</li>
        <li className="list-none margin-bottom-20">Chắc chắn là bạn đã hiểu rõ tầm quan trọng của dự án này rồi.</li>

        <li value="7" id="you-aGREE-that">SUREly you aGREE that THIS is the BEST soLUtion.</li>
        <li className="list-none margin-bottom-20">Chắc chắn bạn cũng đồng ý rằng đây là giải pháp tốt nhất.</li>

        <li value="8" id="you-reMEMber">SUREly you reMEMber the DAY we MET.</li>
        <li className="list-none margin-bottom-20">Chắc chắn là bạn còn nhớ ngày chúng ta gặp nhau.</li>

        <li value="9" id="you-REalize">SUREly you REalize the CONsequences of your ACtions.</li>
        <li className="list-none margin-bottom-20">Chắc chắn là bạn đã nhận thức được hậu quả của những hành động của mình rồi.</li>

        <li value="10" id="apPREciate-all">SUREly apPREciate all the HARD WORK we've PUT into THIS.</li>
        <li className="list-none margin-bottom-20">Chúng tôi thực sự đánh giá cao tất cả những nỗ lực mà chúng tôi đã dành cho việc này.</li>

      </ol>

      <p>** Các cụm từ trên đều thể hiện sự chắc chắn, tin tưởng của người nói về một điều gì đó. Chúng thường được sử dụng để nhấn mạnh một ý kiến, một suy nghĩ hoặc một sự kiện mà người nói cho là hiển nhiên hoặc không cần bàn cãi.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"<strong>SUREly</strong>" có thể đứng ở đầu câu, giữa câu hoặc cuối câu để tạo ra các sắc thái khác nhau trong câu.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong các tình huống giao tiếp thông thường hoặc trong văn viết trang trọng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 15, 2024 · by 💎GEM ·</span>
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