import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Probably2(): React.JSX.Element {

  const postId = "Probably2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">Không chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">probably
        <sup>
          <Link to="/vocabulary/probably-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/probably-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>probably</strong>" (có lẽ) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Probably&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈprɒbəbli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">proba̛bly</Link>/ 
              
              <sup>&nbsp;⬤•• (3x)</sup>
              
            </span>
              
            &nbsp;là một trạng từ chỉ khả năng, thường được dùng để diễn tả sự không chắc chắn hoàn toàn nhưng có khả năng xảy ra cao.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1"><strong>Probably</strong> the best: Có lẽ là tốt nhất /ˈprɒbəbli ðə bɛst/</li>
        <li className="list-none margin-bottom-20">This is <strong>probably</strong> the best restaurant in town. (Đây có lẽ là nhà hàng ngon nhất trong thị trấn.)</li>

        <li value="2"><strong>Probably</strong> not: Có lẽ là không /ˈprɒbəbli nɒt/</li>
        <li className="list-none margin-bottom-20">I <strong>probably</strong> won't be able to make it to the party. (Có lẽ tôi sẽ không đến được buổi tiệc.)</li>

        <li value="3">Most <strong>probably</strong>: Rất có thể /məʊst ˈprɒbəbli/</li>
        <li className="list-none margin-bottom-20">Most <strong>probably</strong>, she will arrive late. (Rất có thể cô ấy sẽ đến muộn.)</li>

        <li value="4">Will <strong>probably</strong>: Sẽ có lẽ /wɪl ˈprɒbəbli/</li>
        <li className="list-none margin-bottom-20">I will <strong>probably</strong> go to the movies tomorrow. (Tôi sẽ có lẽ đi xem phim vào ngày mai.)</li>

        <li value="5"><strong>Probably</strong> due to: Có lẽ là do /ˈprɒbəbli djuː tuː/</li>
        <li className="list-none margin-bottom-20">The delay was <strong>probably</strong> due to the traffic. (Sự chậm trễ có lẽ là do giao thông.)</li>

        <li value="6">It is <strong>probably</strong>: Có lẽ là /ɪt ɪz ˈprɒbəbli/</li>
        <li className="list-none margin-bottom-20">It is <strong>probably</strong> the best decision you can make. (Có lẽ đó là quyết định tốt nhất bạn có thể đưa ra.)</li>

        <li value="7"><strong>Probably</strong> the reason is: Có lẽ lý do là /ˈprɒbəbli ðə ˈriːzən ɪz/</li>
        <li className="list-none margin-bottom-20"><strong>Probably</strong> the reason is that he's tired. (Có lẽ lý do là anh ấy mệt.)</li>

        <li value="8"><strong>Probably</strong> the best way is: Có lẽ cách tốt nhất là /ˈprɒbəbli ðə bɛst weɪ ɪz/</li>
        <li className="list-none margin-bottom-20"><strong>Probably</strong> the best way is to call him first. (Có lẽ cách tốt nhất là gọi điện cho anh ấy trước.)</li>

        <li value="9"><strong>Probably</strong> because: Có lẽ bởi vì /ˈprɒbəbli bɪˈkɒz/</li>
        <li className="list-none margin-bottom-20">She's <strong>probably</strong> upset because he didn't call. (Cô ấy có lẽ buồn vì anh ấy không gọi điện.)</li>

        <li value="10"><strong>Probably</strong> the most: Có lẽ là nhất /ˈprɒbəbli ðə məʊst/</li>
        <li className="list-none margin-bottom-20">This is <strong>probably</strong> the most difficult task I've ever had. (Đây có lẽ là nhiệm vụ khó khăn nhất mà tôi từng làm.)</li>

      </ol>

      <p>** Các cụm từ trên đều mang ý nghĩa không chắc chắn hoàn toàn nhưng có khả năng xảy ra cao. Chúng thường được sử dụng để diễn tả suy đoán, dự đoán hoặc đưa ra những nhận định chủ quan.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Probably</strong>" thường đứng ở đầu câu hoặc trước động từ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như "likely", "<Link to="/vocabulary/possibly-1">possibly</Link>", "<Link to="/vocabulary/perhaps-1">perhaps</Link>" để tạo sự đa dạng trong văn phong.</li>

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