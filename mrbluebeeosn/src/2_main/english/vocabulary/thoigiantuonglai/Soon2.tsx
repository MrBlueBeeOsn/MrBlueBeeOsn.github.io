import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Soon2(): React.JSX.Element {

  const postId = "Soon2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-tuong-lai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian tương lai</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">soon
        <sup>
          <Link to="/vocabulary/soon-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/soon-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>soon</strong>" (sớm) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Soon&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /suːn/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">so͞on</Link>/ 
              
              <sup>&nbsp;⬤ (1x)</sup>
              
            </span>
              
            &nbsp;là một trạng từ chỉ thời gian, thường được dùng để diễn tả một sự kiện sẽ xảy ra trong tương lai gần

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">As <strong>soon</strong> as: Ngay khi /æz suːn æz/</li>
        <li className="list-none margin-bottom-20">As <strong>soon</strong> as I finish my work, I'll call you. (Ngay khi tôi làm xong việc, tôi sẽ gọi cho bạn.)</li>

        <li value="2">Very <strong>soon</strong>: Rất sớm /ˈveri suːn/</li>
        <li className="list-none margin-bottom-20">I'll be back very <strong>soon</strong>. (Tôi sẽ quay lại rất sớm.)</li>

        <li value="3">See you <strong>soon</strong>: Hẹn gặp lại sớm /siː juː suːn/</li>
        <li className="list-none margin-bottom-20">It was nice seeing you. See you <strong>soon</strong>! (Gặp bạn thật vui. Hẹn gặp lại sớm!)</li>

        <li value="4">As <strong>soon</strong> as possible: Càng sớm càng tốt /æz suːn æz ˈpɒs.ə.bəl/</li>
        <li className="list-none margin-bottom-20">Please reply as <strong>soon</strong> as possible. (Vui lòng trả lời càng sớm càng tốt.)</li>

        <li value="5"><strong>Soon</strong> after: Ngay sau khi /suːn ˈɑːf.tər/</li>
        <li className="list-none margin-bottom-20"><strong>Soon</strong> after he arrived, the party started. (Ngay sau khi anh ấy đến, bữa tiệc bắt đầu.)</li>

        <li value="6">How <strong>soon</strong>: Bao lâu nữa /haʊ suːn/</li>
        <li className="list-none margin-bottom-20">How <strong>soon</strong> will the train arrive? (Tàu sẽ đến bao lâu nữa?)</li>

        <li value="7">Till <strong>soon</strong>: Cho đến khi gặp lại /tɪl suːn/</li>
        <li className="list-none margin-bottom-20">Till <strong>soon</strong>! (Cho đến khi gặp lại!)</li>

        <li value="8">Any time <strong>soon</strong>: Trong thời gian gần /ˈɛni taɪm suːn/</li>
        <li className="list-none margin-bottom-20">Are you going to visit your parents any time <strong>soon</strong>? (Bạn có định thăm ba mẹ trong thời gian gần không?)</li>

        <li value="9">Sooner or later: Sớm muộn gì cũng /ˈsuːnər ɔːr ˈleɪ.tər/</li>
        <li className="list-none margin-bottom-20">Sooner or later, you will realize your mistake. (Sớm muộn gì bạn cũng sẽ nhận ra lỗi lầm của mình.)</li>

        <li value="10">In the near future: Trong tương lai gần /ɪn ðə nɪər ˈfjuː.tʃər/</li>
        <li className="list-none margin-bottom-20">We hope to visit you in the near future. (Chúng tôi hy vọng sẽ đến thăm bạn trong tương lai gần.)</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Soon</strong>" thường được sử dụng để tạo cảm giác mong đợi hoặc nhấn mạnh sự cấp bách của một hành động.</li>

          <li className="margin-bottom-20">Ý nghĩa chính xác của cụm từ phụ thuộc vào ngữ cảnh sử dụng.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này sẽ giúp bạn hiểu rõ hơn về cách sử dụng từ "<strong>soon</strong>" trong tiếng Anh! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 7, 2024 · by 💎Gem ·</span>
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