import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Often2(): React.JSX.Element {

  const postId = "Often2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-lap-lai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">often
        <sup>
          <Link to="/vocabulary/often-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/often-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về cách sử dụng từ "<strong>often</strong>" (thường xuyên) trong tiếng Anh nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Often&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈɒf.ən/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ofte̛n</Link>/ 
              
              <sup>&nbsp;⬤• (2x)</sup>
              
            </span>
              
            &nbsp;là một trạng từ chỉ tần suất, dùng để diễn tả một hành động hoặc sự việc xảy ra nhiều lần.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1"><strong>Often</strong> do: Thường làm /ˈɒfən duː/</li>
        <li className="list-none margin-bottom-20">I <strong>often</strong> do my homework in the evening. (Tôi thường làm bài tập về nhà vào buổi tối.)</li>

        <li value="2"><strong>Often</strong> go: Thường đi /ˈɒfən ɡəʊ/</li>
        <li className="list-none margin-bottom-20">We <strong>often</strong> go to the beach on weekends. (Chúng tôi thường đi biển vào cuối tuần.)</li>

        <li value="3"><strong>Often</strong> eat: Thường ăn /ˈɒfən iːt/</li>
        <li className="list-none margin-bottom-20">She <strong>often</strong> eats fruits for breakfast. (Cô ấy thường ăn trái cây vào bữa sáng.)</li>

        <li value="4"><strong>Often</strong> read: Thường đọc /ˈɒfən riːd/</li>
        <li className="list-none margin-bottom-20">He <strong>often</strong> reads books before going to bed. (Anh ấy thường đọc sách trước khi đi ngủ.)</li>

        <li value="5"><strong>Often</strong> play: Thường chơi /ˈɒfən pleɪ/</li>
        <li className="list-none margin-bottom-20">Children <strong>often</strong> play outside after school. (Trẻ em thường chơi ngoài trời sau giờ học.)</li>

        <li value="6">Not <strong>often</strong> but sometimes: Không thường xuyên nhưng thỉnh thoảng /nɒt ˈɒfən bət ˈsʌmtaɪmz/</li>
        <li className="list-none margin-bottom-20">I don't <strong>often</strong> watch TV, but sometimes I do. (Tôi không thường xuyên xem TV, nhưng thỉnh thoảng tôi cũng xem.)</li>

        <li value="7"><strong>Often</strong> in the morning: Thường vào buổi sáng /ˈɒfən ɪn ðə ˈmɔːnɪŋ/</li>
        <li className="list-none margin-bottom-20">I <strong>often</strong> drink coffee in the morning. (Tôi thường uống cà phê vào buổi sáng.)</li>

        <li value="8"><strong>Often</strong> at night: Thường vào ban đêm /ˈɒfən ət naɪt/</li>
        <li className="list-none margin-bottom-20">He <strong>often</strong> works late at night. (Anh ấy thường làm việc muộn vào ban đêm.)</li>

        <li value="9"><strong>Often</strong> on weekends: Thường vào cuối tuần /ˈɒfən ɒn ˈwiːkɛndz/</li>
        <li className="list-none margin-bottom-20">We <strong>often</strong> go shopping on weekends. (Chúng tôi thường đi mua sắm vào cuối tuần.)</li>

        <li value="10"><strong>Often</strong> when I...: Thường khi tôi... /ˈɒfən wen aɪ/</li>
        <li className="list-none margin-bottom-20"><strong>Often</strong> when I feel stressed, I listen to music. (Thường khi tôi cảm thấy căng thẳng, tôi nghe nhạc.)</li>

      </ol>

      {/* <p>** </p> */}

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Often</strong>" thường đứng trước động từ chính trong câu.</li>

          <li className="margin-bottom-20">Bạn có thể kết hợp "<strong>often</strong>" với nhiều trạng từ khác để tạo ra các cụm từ đa dạng hơn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎Gem ·</span>
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