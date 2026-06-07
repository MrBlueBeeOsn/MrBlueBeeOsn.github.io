import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Usually2(): React.JSX.Element {

  const postId = "Usually2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#thoi-gian-lap-lai-terms"><mark className="highlight-tertiary-padding-4-8">Thời gian lặp lại</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">usually
        <sup>
          <Link to="/vocabulary/usually-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/usually-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>usually</strong>" (thường xuyên) và các cụm từ thường đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Usually&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈjuːʒuəli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ūsua̛lly</Link>/ 
              
              <sup>&nbsp;⬤•• (3x)</sup>
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "thường xuyên", "thông thường". Từ này được dùng để chỉ những việc xảy ra một cách đều đặn hoặc theo thói quen.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Usually <strong>does</strong> /dəz/</li>
        <li className="list-none">She ______ her homework after dinner.</li>
        <li className="list-none margin-bottom-20">Cô ấy thường làm bài tập về nhà sau bữa tối.</li>

        <li value="2">Usually <strong>goes</strong> /ɡəʊz/</li>
        <li className="list-none">He ______ to bed at 10 pm.</li>
        <li className="list-none margin-bottom-20">Anh ấy thường đi ngủ lúc 10 giờ tối.</li>

        <li value="3">Usually <strong>rains</strong> /reɪnz/</li>
        <li className="list-none">It ______ in the winter.</li>
        <li className="list-none margin-bottom-20">Mùa đông thường mưa.</li>

        <li value="4">Usually <strong>takes</strong> /teɪks/</li>
        <li className="list-none">It ______ me an hour to get to work.</li>
        <li className="list-none margin-bottom-20">Tôi thường mất một giờ để đi làm.</li>

        <li value="5">Usually <strong>feels</strong> /fiːlz/</li>
        <li className="list-none">She ______ happy after exercising.</li>
        <li className="list-none margin-bottom-20">Cô ấy thường cảm thấy vui vẻ sau khi tập thể dục.</li>

        <li value="6">Usually <strong>looks</strong> /lʊks/</li>
        <li className="list-none">He ______ tired in the morning.</li>
        <li className="list-none margin-bottom-20">Anh ấy thường trông mệt mỏi vào buổi sáng.</li>

        <li value="7">Usually <strong>eats</strong> /iːts/</li>
        <li className="list-none">She ______ fruits for breakfast.</li>
        <li className="list-none margin-bottom-20">Cô ấy thường ăn trái cây vào bữa sáng.</li>

        <li value="8">Usually <strong>lives</strong> /lɪvz/</li>
        <li className="list-none">He ______ in a small apartment.</li>
        <li className="list-none margin-bottom-20">Anh ấy thường sống trong một căn hộ nhỏ.</li>

        <li value="9">Usually <strong>works</strong> /wɜːks/</li>
        <li className="list-none">She ______ from home on Fridays.</li>
        <li className="list-none margin-bottom-20">Cô ấy thường làm việc tại nhà vào thứ Sáu.</li>

        <li value="10">Usually <strong>plays</strong> /pleɪz/</li>
        <li className="list-none">He ______ basketball with his friends on weekends.</li>
        <li className="list-none margin-bottom-20">Anh ấy thường chơi bóng rổ với bạn bè vào cuối tuần.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để diễn tả những hành động, tình trạng hoặc sự việc xảy ra một cách thường xuyên, có tính chất lặp đi lặp lại trong cuộc sống hàng ngày. Chúng giúp chúng ta hiểu rõ hơn về thói quen, lịch trình và cách sống của một người hoặc một sự vật nào đó.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Usually</strong>" thường đứng ở đầu câu hoặc trước động cơ để nhấn mạnh tính thường xuyên của một hành động.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như: <Link to="/vocabulary/often-1">often</Link>, generally, commonly.</li>

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