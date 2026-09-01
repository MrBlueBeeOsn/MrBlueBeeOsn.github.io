import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function POSsibly2(): React.JSX.Element {

  const postId = "POSsibly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#khong-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: không chắc</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">POSsibly
        <sup>
          <Link to="/vocabulary/POSsibly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/POSsibly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>POSsibly</strong>" (có thể) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [POSsibly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">POS si̛b ly</Link>] /ˈpɒsəbli/+ ⬤•• (3x)
              
            </span>
              
            &nbsp;thường được dùng để thể hiện sự không chắc chắn, khả năng xảy ra của một sự việc hoặc tình huống.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">this is POSsibly the BEST COFfee i've EVer TAsted</li>
        <li className="list-none margin-bottom-20">Đây có thể là ly cà phê ngon nhất mà tôi từng uống.</li>

        <li value="2">what he SAID is POSsibly TRUE, but i'm NOT SURE</li>
        <li className="list-none margin-bottom-20">Những gì anh ấy nói có thể là đúng, nhưng tôi không chắc chắn.</li>

        <li value="3">SWIMming in this LAKE is POSsibly DANgerous due to the STRONG CURrents</li>
        <li className="list-none margin-bottom-20">Bơi ở hồ này có thể nguy hiểm do dòng chảy mạnh.</li>

        <li value="4">this is POSsibly the WORST MOvie i've EVer SEEN</li>
        <li className="list-none margin-bottom-20">Đây có thể là bộ phim tệ nhất mà tôi từng xem.</li>

        <li value="5">my KEYS are POSsibly LOST SOMEwhere in the HOUSE</li>
        <li className="list-none margin-bottom-20">Chìa khóa của tôi có thể bị mất ở đâu đó trong nhà.</li>

        <li value="6">my WORDS were POSsibly misunderSTOOD</li>
        <li className="list-none margin-bottom-20">Có thể là lời nói của tôi đã bị hiểu nhầm.</li>

        <li value="7">the FLIGHT is POSsibly deLAYED due to BAD WEATHer</li>
        <li className="list-none margin-bottom-20">Chuyến bay có thể bị trì hoãn do thời tiết xấu.</li>

        <li value="8">these TWO eVENTS are POSsibly reLAted</li>
        <li className="list-none margin-bottom-20">Hai sự kiện này có thể có liên quan với nhau.</li>

        <li value="9">EATing TOO much SUgar is POSsibly HARMful to your HEALTH</li>
        <li className="list-none margin-bottom-20">Ăn quá nhiều đường có thể có hại cho sức khỏe của bạn.</li>

        <li value="10">MOving to a NEW CITy is POSsibly the BEST OPtion for my caREER</li>
        <li className="list-none margin-bottom-20">Chuyển đến thành phố mới có thể là lựa chọn tốt nhất cho sự nghiệp của tôi.</li>

      </ol>

      <p>** Các cụm từ trên đều thể hiện sự không chắc chắn và mở ra nhiều khả năng khác nhau. Chúng thường được sử dụng khi người nói không có đủ thông tin để đưa ra một kết luận chắc chắn.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>POSsibly</strong>" thường đứng ở đầu câu hoặc trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này có thể được thay thế bằng các từ đồng nghĩa như "<Link to="/vocabulary/perHAPS-1">perHAPS</Link>", "<Link to="/vocabulary/MAYbe-1">MAYbe</Link>", "could be" để tạo sự đa dạng trong văn phong.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 7, 2024 · by 💎GEM ·</span>
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