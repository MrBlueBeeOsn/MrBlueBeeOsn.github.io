import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function When(): React.JSX.Element {

  const postId = "When";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#dc-terms"><mark className="highlight-tertiary-padding-4-8">DC</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">when</h1>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30">when: (conJUNCTion): Khi. Dùng để kết nối hai câu con, chỉ thời điểm một sự việc xảy ra hoặc một hành động được thực hiện.</p>

        <ul className="list-square">
      
          <li>i will CALL you [when] i arRIVE at the STAtion.</li>
          <li className="list-none">Tôi sẽ gọi cho bạn [khi] tôi đến nhà ga.</li>
      
        </ul>

      
      {/* =============================
            pronunciAtion / Phát âm
      ============================= */}

      <h3 className="margin-y-50 text-center">pronunciAtion / Phát âm</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: [when][when] /wen/</li>
            <li className="margin-bottom-20 list-none">Lưu ý: Một số vùng tại Anh hoặc Mỹ (giọng Scotland hoặc miền Nam nước Mỹ) có thể phát âm là /hwen/, nhưng /wen/ là phát âm phổ biến nhất hiện nay.</li>
            
            <li>phoNETic BREAKdown: wen</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      {/* =============================
            WORD FAMILy
      ============================= */}

      <h3 className="margin-y-50 text-center">WORD FAMILy</h3>

      <p className="margin-bottom-20">Từ "when" là một từ chức năng (FUNCtion WORD) cốt lõi trong tiếng Anh, bản thân nó không biến đổi thành dạng danh cơ, hành động hay Tính Cơ bằng cách thêm hậu tố. Tuy nhiên, họ từ của nó bao gồm các từ ghép và Trạng Cơ chỉ thời gian, thời điểm dựa trên gốc từ này:</p>

        <ul className="list-square">

          <li>when (conJUNCTion) /wen/</li>
          <li className="list-none">he LIVED in LONdon [when] he was a CHILD.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã sống ở Luân Đôn <strong>khi anh ấy còn là một đứa trẻ</strong>.</li>

          <li>WHEN (ADverb) /wen/</li>
          <li className="list-none">[WHEN] does the MOvie START?</li>
          <li className="margin-bottom-20 list-none"><strong>Khi nào</strong> thì bộ phim bắt đầu?</li>

          <li>when (conJUNCTion) /wen/ - Dùng để thay thế cho một Danh Cơ chỉ thời gian đứng trước và nối liền với câu con quan hệ</li>
          <li className="list-none">i will NEVer forGET the DAY [when] we FIRST MET.</li>
          <li className="margin-bottom-20 list-none">Tôi sẽ không bao giờ quên cái ngày <strong>mà chúng ta lần đầu gặp gỡ</strong>.</li>

          <li>whenever (conJUNCTion) /wenˈevə(r)/</li>
          <li className="list-none">you can BORrow my CAR [whenever] you NEED it.</li>
          <li className="margin-bottom-20 list-none">Bạn có thể mượn xe của tôi <strong>bất cứ khi nào bạn cần nó</strong>.</li>

          <li>wheNEVer (ADverb) - Dùng độc lập</li>
          <li className="list-none">you DON'T HAVE to PAY me BACK RIGHT NOW. JUST DO it [wheNEVer].</li>
          <li className="margin-bottom-20 list-none">Bạn không cần phải trả tiền lại cho tôi ngay bây giờ đâu. Cứ làm việc đó <strong>vào bất cứ lúc nào cũng được</strong>.</li>

          <li>wheNEVer (ADverb) - Dùng trong câu hỏi nghi vấn</li>
          <li className="list-none">[wheNEVer] WILL they FINish this conSTRUCTion WORK?</li>
          <li className="margin-bottom-20 list-none">Khi nào thì họ mới chịu hoàn thành xong công trình xây dựng này đây không biết?</li>


          <li>whence (ADverb) - Từ cổ / Trang trọng /wens/</li>
          <li className="list-none">they reTURNED [whence] they CAME.</li>
          <li className="list-none">Họ đã quay trở lại <strong>nơi mà họ đã từ đó đến</strong>.</li>

        </ul>

      {/* =============================
            SYNonyms / Từ đồng nghĩa
      ============================= */}

      <h3 className="margin-y-50 text-center">SYNonyms / Từ đồng nghĩa</h3>

      <p className="margin-bottom-20">Dưới đây là các từ và cụm từ có chức năng tương tự như "when" để chỉ thời gian hoặc thời điểm, đi kèm cấu trúc và sắc thái riêng.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20">1. as /æz/ hoặc /əz/</p>

      <p className="text-indent-whole">Khi, trong khi; dùng khi hai hành động ngắn diễn ra cùng một lúc, hoặc một hành động đang tiến triển thì một hành động khác xen vào.</p>

        <ul className="list-square">

          <li>as she GREW OLDer, she GAINED MORE CONfidence.</li>
          <li className="list-none">[Khi] cô ấy càng lớn tuổi hơn, cô ấy càng trở nên tự tin hơn.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20">2. while /waɪl/</p>

      <p className="text-indent-whole">Trong khi, trong lúc; thường dùng để nhấn mạnh một hành động kéo dài, đang diễn ra liên tục tại thời điểm một sự việc khác xảy ra.</p>

        <ul className="list-square">

          <li>the PHONE RANG [while] i was TAking a SHOWer.</li>
          <li className="list-none">Điện thoại đã reo [trong khi] tôi đang tắm.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20">3. once /wʌns/</p>

      <p className="text-indent-whole">Một khi, ngay sau khi; dùng để nhấn mạnh rằng một khi sự việc này đã hoàn thành hoặc xảy ra, thì sự việc kia mới diễn ra.</p>

        <ul className="list-square">

          <li>[once] you FINish your HOMEwork, you can PLAY VIDeo GAMES.</li>
          <li className="list-none">[Một khi] bạn hoàn thành bài tập về nhà, bạn có thể chơi trò chơi điện tử.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20">4. at the TIME that /æt ðə taɪm ðæt/</p>

      <p className="text-indent-whole">Vào thời điểm mà; một cụm từ cụ thể và trang trọng hơn "when" để nhấn mạnh một mốc thời gian chính xác trong quá khứ hoặc tương lai.</p>

        <ul className="list-square">

          <li>[at the TIME that] the eCONomy CRASHED, <strong> man</strong> y PEOple LOST their JOBS.</li>
          <li className="list-none">[Vào thời điểm mà] nền kinh tế sụp đổ, nhiều người đã bị mất việc làm.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20">5. U<strong>pon</strong> /əˈpɒn/ (UK) hoặc /əˈpɑːn/ (US)</p>

      <p className="text-indent-whole">Khi, ngay sau khi; giới cơ này thường đi kèm với Danh Cơ hoặc V-ing để chỉ một hành động xảy ra ngay lập tức sau một hành động khác (mang sắc thái trang trọng).</p>

        <ul className="list-square">

          <li>[u<strong>pon</strong>] arRIving at the hoTEL, they WENT STRAIGHT to regisTRAtion.</li>
          <li className="list-none">[Khi] đến khách sạn, họ đã đi thẳng đến quầy đăng ký.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20">6. By the TIME /baɪ ðə taɪm/</p>

      <p className="text-indent-whole">Vào lúc, tính đến lúc; dùng để diễn tả một sự việc đã hoặc sẽ hoàn thành trước một thời điểm được nhắc đến ở câu con sau.</p>

        <ul className="list-square">

          <li>[by the TIME] we REACHED the CINema, the MOvie had alREADy STARTed.</li>
          <li className="list-none">[Vào lúc] chúng tôi đến được rạp chiếu phim, bộ phim đã bắt đầu rồi.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>May 26, 2026 · by 💎GEM ·</span>
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