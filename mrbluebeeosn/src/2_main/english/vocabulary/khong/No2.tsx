import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function No2(): React.JSX.Element {

  const postId = "No2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-terms"><mark className="highlight-tertiary-padding-4-8">Không</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">no
        <sup>
          <Link to="/vocabulary/no-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/no-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>no</strong>" (không) khi nó đóng vai trò là một trạng cơ trong tiếng Anh nhé. </p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>No&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /noʊ/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">nō</Link>/ 
              
              <sup>&nbsp;⬤ (1x)</sup>
              
            </span>
              
            &nbsp;thường được biết đến như một từ phủ định, nhưng khi kết hợp với các từ khác, nó có thể tạo ra nhiều ý nghĩa và sắc thái khác nhau.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">No <strong>longer</strong> /ˈlɔːŋɡər/</li>
        <li className="list-none">She ______ lives here.</li>
        <li className="list-none margin-bottom-20">Cô ấy không còn sống ở đây nữa.</li>

        <li value="2">No <strong>more</strong> /mɔːr/</li>
        <li className="list-none">I want ______ of your excuses.</li>
        <li className="list-none margin-bottom-20">Tôi không muốn nghe thêm bất kỳ lời bào chữa nào của bạn nữa.</li>

        <li value="3">No <strong>less</strong> /lɛs/</li>
        <li className="list-none">The task is ______ difficult than the last one.</li>
        <li className="list-none margin-bottom-20">Nhiệm vụ này không kém phần khó so với nhiệm vụ trước.</li>

        <li value="4">No <strong>matter</strong> /ˈmætər/</li>
        <li className="list-none">______ what you say, I won't believe you.</li>
        <li className="list-none margin-bottom-20">Dù bạn nói gì đi nữa, tôi cũng sẽ không tin bạn.</li>

        <li value="5">No <strong>way</strong> /weɪ/</li>
        <li className="list-none">______! I'm not going to do that.</li>
        <li className="list-none margin-bottom-20">Không đời nào! Tôi sẽ không làm việc đó.</li>

        <li value="6">No <strong>wonder</strong> /ˈwʌndər/</li>
        <li className="list-none">______ he's tired. He's been working all night.</li>
        <li className="list-none margin-bottom-20">Chẳng trách anh ấy mệt. Anh ấy đã làm việc cả đêm.</li>

        <li value="7">No <strong>doubt</strong> /daʊt/</li>
        <li className="list-none">______ she will succeed.</li>
        <li className="list-none margin-bottom-20">Chắc chắn cô ấy sẽ thành công.</li>

        <li value="8">No <strong>thanks</strong> /θæŋks/</li>
        <li className="list-none">Would you like some coffee? ______, I'm not thirsty.</li>
        <li className="list-none margin-bottom-20">Bạn có muốn uống cà phê không? Không, cảm ơn, tôi không khát.</li>

        <li value="9">No <strong>longer than</strong> /ˈlɔːŋɡər ðæn/</li>
        <li className="list-none">The meeting will be ______ than two hours.</li>
        <li className="list-none margin-bottom-20">Cuộc họp sẽ không quá hai giờ.</li>

        <li value="10">No <strong>less than</strong> /lɛs ðæn/</li>
        <li className="list-none">______ a thousand people attended the concert.</li>
        <li className="list-none margin-bottom-20">Có tới tận một ngàn người đã tham dự buổi hòa nhạc.</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Trong nhiều trường hợp, "<strong>no</strong>" có thể được coi như một phần tử trong một cụm từ hơn là một trạng cơ độc lập.</li>

          <li className="margin-bottom-20">Ý nghĩa của các cụm từ này có thể thay đổi tùy thuộc vào ngữ cảnh. Việc hiểu ngữ cảnh sẽ giúp bạn sử dụng các cụm từ này một cách chính xác.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những ví dụ trên sẽ giúp bạn hiểu rõ hơn về cách sử dụng từ "no" trong tiếng Anh! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>December 28, 2024 · by 💎Gem ·</span>
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