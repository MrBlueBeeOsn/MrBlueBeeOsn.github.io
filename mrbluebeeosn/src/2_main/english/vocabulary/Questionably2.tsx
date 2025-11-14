import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Questionably2(): React.JSX.Element {

  const postId = "Questionably2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">Không chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">questionably
        <sup>
          <Link to="/vocabulary/questionably-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/questionably-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>questionably</strong>" (một cách đáng ngờ) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Questionably&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈkwɛstʃənəbli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">questiơna̛bly</Link>/ 
              
              <sup>&nbsp;⬤••• (4x)</sup>
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "một cách đáng ngờ", thường được dùng để mô tả những gì gây nghi ngờ, không chắc chắn hoặc không đáng tin cậy.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1"><strong>Questionably</strong> ethical: Đạo đức đáng ngờ /ˈkwɛstʃənəbli ˈɛθɪkəl/</li>
        <li className="list-none margin-bottom-20">The company's practices were <strong>questionably</strong> ethical, raising concerns among consumers. (Những thực hành của công ty đó có đạo đức đáng ngờ, gây lo ngại cho người tiêu dùng.)</li>

        <li value="2"><strong>Questionably</strong> legal: Pháp lý đáng ngờ /ˈkwɛstʃənəbli ˈliːɡəl/</li>
        <li className="list-none margin-bottom-20">The deal was <strong>questionably</strong> legal, and could have serious consequences. (Thỏa thuận đó có tính pháp lý đáng ngờ và có thể gây ra hậu quả nghiêm trọng.)</li>

        <li value="3"><strong>Questionably</strong> safe: An toàn đáng ngờ /ˈkwɛstʃənəbli seɪf/</li>
        <li className="list-none margin-bottom-20">The old building was <strong>questionably</strong> safe, and needed to be renovated. (Tòa nhà cũ có độ an toàn đáng ngờ và cần được cải tạo.)</li>

        <li value="4"><strong>Questionably</strong> true: Đáng ngờ về sự thật /ˈkwɛstʃənəbli truː/</li>
        <li className="list-none margin-bottom-20">His story seemed <strong>questionably</strong> true, and I had my doubts. (Câu chuyện của anh ta có vẻ đáng ngờ về sự thật, và tôi nghi ngờ.)</li>

        <li value="5"><strong>Questionably</strong> motivated: Động cơ đáng ngờ /ˈkwɛstʃənəbli ˈmoʊtɪveɪtɪd/</li>
        <li className="list-none margin-bottom-20">Her sudden change of heart was <strong>questionably</strong> motivated, and I wondered what she was really up to. (Sự thay đổi đột ngột của cô ấy có động cơ đáng ngờ, và tôi tự hỏi cô ấy đang lên kế hoạch gì.)</li>

        <li value="6"><strong>Questionably</strong> obtained: Được lấy một cách đáng ngờ /ˈkwɛstʃənəbli əbˈteɪnd/</li>
        <li className="list-none margin-bottom-20">The evidence was <strong>questionably</strong> obtained and could be inadmissible in court. (Bằng chứng được lấy một cách đáng ngờ và có thể không được chấp nhận tại tòa.)</li>

        <li value="7"><strong>Questionably</strong> qualified: Năng lực đáng ngờ /ˈkwɛstʃənəbli ˈkwɑːlɪfaɪd/</li>
        <li className="list-none margin-bottom-20">He was <strong>questionably</strong> qualified for the job, and many people doubted his abilities. (Anh ta có năng lực đáng ngờ cho công việc đó, và nhiều người nghi ngờ về khả năng của anh ta.)</li>

        <li value="8"><strong>Questionably</strong> relevant: Có liên quan một cách đáng ngờ /ˈkwɛstʃənəbli ˈrɛləvənt/</li>
        <li className="list-none margin-bottom-20">The information presented was <strong>questionably</strong> relevant to the case. (Thông tin được trình bày có liên quan một cách đáng ngờ đến vụ án.)</li>

        <li value="9"><strong>Questionably</strong> fair: Công bằng một cách đáng ngờ /ˈkwɛstʃənəbli fer/</li>
        <li className="list-none margin-bottom-20">The decision was <strong>questionably</strong> fair, and many people felt they were treated unfairly. (Quyết định đó có tính công bằng đáng ngờ, và nhiều người cảm thấy họ bị đối xử bất công.)</li>

        <li value="10"><strong>Questionably</strong> honest: Thành thật một cách đáng ngờ /ˈkwɛstʃənəbli ˈɒnɪst/</li>
        <li className="list-none margin-bottom-20">His explanation seemed <strong>questionably</strong> honest, and I didn't believe him. (Lời giải thích của anh ta có vẻ thành thật một cách đáng ngờ, và tôi không tin anh ta.)</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh sự nghi ngờ, không chắc chắn hoặc thiếu tin tưởng vào một điều gì đó. Chúng thường được sử dụng để mô tả những tình huống, hành động hoặc thông tin gây nghi vấn và cần được kiểm chứng kỹ lưỡng hơn.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Questionably</strong>" thường được đặt trước tính từ để nhấn mạnh ý nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn viết hoặc nói để tạo ra một hiệu ứng nghi ngờ và cảnh giác.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 5, 2024 · by 💎Gem ·</span>
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