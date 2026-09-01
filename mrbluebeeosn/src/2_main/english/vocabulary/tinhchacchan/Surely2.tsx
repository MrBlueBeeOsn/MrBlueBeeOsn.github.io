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

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>SUREly</strong>" (chắc chắn) và các cụm từ hay đi kèm nhé.

</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [SUREly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">SURE ly</Link>] /ˈʃʊrli/ ⬤• (2x)
              
            </span>
              
            &nbsp;là một Trạng Cơ thường được sử dụng để thể hiện sự chắc chắn, tin tưởng vào một điều gì đó.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">i THOUGHT i LEFT my KEYS on the TAble, and SUREly eNOUGH, THERE they WERE.</li>
        <li className="list-none margin-bottom-20">Tôi nghĩ rằng tôi để chìa khóa trên bàn, và quả nhiên, chúng ở đó.</li>

        <li value="2">she WORKED so HARD; she SUREly must GET a proMOtion.</li>
        <li className="list-none margin-bottom-20">Cô ấy làm việc rất chăm chỉ, chắc chắn cô ấy phải được thăng chức.</li>

        <li value="3">SUREly you KNOW the ANswer to this QUEStion.</li>
        <li className="list-none margin-bottom-20">Chắc chắn bạn biết câu trả lời cho câu hỏi này.</li>

        <li value="4">SUREly you can FINish this TASK by toMORrow.</li>
        <li className="list-none margin-bottom-20">Chắc chắn bạn có thể hoàn thành công việc này vào ngày mai.</li>

        <li value="5">the WEATHer FOREcast SAYS it will RAIN toMORrow, so SUREly we will NEED umBRELlas.</li>
        <li className="list-none margin-bottom-20">Dự báo thời tiết nói rằng trời sẽ mưa vào ngày mai, vì vậy chắc chắn chúng ta sẽ cần ô.</li>

        <li value="6">SUREly you underSTAND the imPORtance of this PROJect.</li>
        <li className="list-none margin-bottom-20">Chắc chắn bạn hiểu tầm quan trọng của dự án này.</li>

        <li value="7">SUREly you aGREE that this is the BEST soLUtion.</li>
        <li className="list-none margin-bottom-20">Chắc chắn bạn đồng ý rằng đây là giải pháp tốt nhất.</li>

        <li value="8">SUREly you reMEMber the DAY we MET.</li>
        <li className="list-none margin-bottom-20">Chắc chắn bạn nhớ ngày chúng ta gặp nhau.</li>

        <li value="9">SUREly you REalize the CONsequences of your ACtions.</li>
        <li className="list-none margin-bottom-20">Chắc chắn bạn nhận ra hậu quả của hành động của mình.</li>

        <li value="10">SUREly apPREciate all the HARD WORK we've PUT into THIS.</li>
        <li className="list-none margin-bottom-20">Chắc chắn bạn đánh giá cao tất cả những nỗ lực mà chúng ta đã bỏ ra.</li>

      </ol>

      <p>** Các cụm từ trên đều thể hiện sự chắc chắn, tin tưởng của người nói về một điều gì đó. Chúng thường được sử dụng để nhấn mạnh một ý kiến, một suy nghĩ hoặc một sự kiện mà người nói cho là hiển nhiên hoặc không cần bàn cãi.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>SUREly</strong>" có thể đứng ở đầu câu, giữa câu hoặc cuối câu để tạo ra các sắc thái khác nhau trong câu.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong các tình huống giao tiếp thông thường hoặc trong văn viết trang trọng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 15, 2024 · by 💎GEM ·</span>
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