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
      
      <h1 className="margin-y-50 text-center">When</h1>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30"><strong>When</strong>: (liên từ): Khi. Dùng để kết nối hai mệnh đề, chỉ thời điểm một sự việc xảy ra hoặc một hành động được thực hiện.</p>

        <ul className="list-square">
      
          <li>I will call you <strong>______ I arrive at the station</strong>.</li>
          <li className="list-none">Tôi sẽ gọi cho bạn <strong>khi tôi đến nhà ga</strong>.</li>
      
        </ul>

      
      {/* =============================
            Pronunciation / Phát âm
      ============================= */}

      <h3 className="margin-y-50 text-center">Pronunciation / Phát âm</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: /wen/</li>
            <li className="margin-bottom-20 list-none">Lưu ý: Một số vùng tại Anh hoặc Mỹ (giọng Scotland hoặc miền Nam nước Mỹ) có thể phát âm là /hwen/, nhưng /wen/ là phát âm phổ biến nhất hiện nay.</li>
            
            <li>Phonetic Breakdown: wen</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      {/* =============================
            Word Family
      ============================= */}

      <h3 className="margin-y-50 text-center">Word Family</h3>

      <p className="margin-bottom-20">Từ "when" là một từ chức năng (function word) cốt lõi trong tiếng Anh, bản thân nó không biến đổi thành dạng danh từ, động từ hay tính từ bằng cách thêm hậu tố. Tuy nhiên, họ từ của nó bao gồm các từ ghép và trạng từ chỉ thời gian, thời điểm dựa trên gốc từ này:</p>

        <ul className="list-square">

          <li><strong>When</strong> (Liên từ) /wen/</li>
          <li className="list-none">He lived in London <strong>______ he was a child</strong>.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã sống ở Luân Đôn <strong>khi anh ấy còn là một đứa trẻ</strong>.</li>

          <li><strong>When</strong> (Trạng cơ) /wen/</li>
          <li className="list-none"><strong>______</strong> does the movie start?</li>
          <li className="margin-bottom-20 list-none"><strong>Khi nào</strong> thì bộ phim bắt đầu?</li>

          <li><strong>When</strong> (Đại từ) /wen/ - Dùng để thay thế cho một danh từ chỉ thời gian đứng trước và nối liền với mệnh đề quan hệ</li>
          <li className="list-none">I will never forget the day <strong>______ we first met</strong>.</li>
          <li className="margin-bottom-20 list-none">Tôi sẽ không bao giờ quên cái ngày <strong>mà chúng ta lần đầu gặp gỡ</strong>.</li>

          <li><strong>Whenever</strong> (Liên từ) /wenˈevə(r)/</li>
          <li className="list-none">You can borrow my car <strong>______ you need it</strong>.</li>
          <li className="margin-bottom-20 list-none">Bạn có thể mượn xe của tôi <strong>bất cứ khi nào bạn cần nó</strong>.</li>

          <li><strong>Whenever </strong> (Trạng cơ) - Dùng độc lập</li>
          <li className="list-none">You don't have to pay me back right now. Just do it <strong>______</strong>.</li>
          <li className="margin-bottom-20 list-none">Bạn không cần phải trả tiền lại cho tôi ngay bây giờ đâu. Cứ làm việc đó <strong>vào bất cứ lúc nào cũng được</strong>.</li>

          <li><strong>Whenever</strong> (Trạng cơ) - Dùng trong câu hỏi nghi vấn</li>
          <li className="list-none">______ will they finish this construction work?</li>
          <li className="margin-bottom-20 list-none">Khi nào thì họ mới chịu hoàn thành xong công trình xây dựng này đây không biết?</li>


          <li><strong>Whence</strong> (Trạng cơ - Từ cổ / Trang trọng) /wens/</li>
          <li className="list-none">They returned <strong>______ they came</strong>.</li>
          <li className="list-none">Họ đã quay trở lại <strong>nơi mà họ đã từ đó đến</strong>.</li>

        </ul>

      {/* =============================
            Synonyms / Từ đồng nghĩa
      ============================= */}

      <h3 className="margin-y-50 text-center">Synonyms / Từ đồng nghĩa</h3>

      <p className="margin-bottom-20">Dưới đây là các từ và cụm từ có chức năng tương tự như "when" để chỉ thời gian hoặc thời điểm, đi kèm cấu trúc và sắc thái riêng.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20"><strong>1. As</strong> /æz/ hoặc /əz/</p>

      <p className="text-indent-whole">Khi, trong khi; dùng khi hai hành động ngắn diễn ra cùng một lúc, hoặc một hành động đang tiến triển thì một hành động khác xen vào.</p>

        <ul className="list-square">

          <li><strong>______ she grew older</strong>, she gained more confidence.</li>
          <li className="list-none"><strong>Khi cô ấy càng lớn tuổi hơn</strong>, cô ấy càng trở nên tự tin hơn.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20"><strong>2. While</strong> /waɪl/</p>

      <p className="text-indent-whole">Trong khi, trong lúc; thường dùng để nhấn mạnh một hành động kéo dài, đang diễn ra liên tục tại thời điểm một sự việc khác xảy ra.</p>

        <ul className="list-square">

          <li>The phone rang <strong>______ I was taking a shower</strong>.</li>
          <li className="list-none">Điện thoại đã reo <strong>trong khi tôi đang tắm</strong>.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20"><strong>3. Once</strong> /wʌns/</p>

      <p className="text-indent-whole">Một khi, ngay sau khi; dùng để nhấn mạnh rằng một khi sự việc này đã hoàn thành hoặc xảy ra, thì sự việc kia mới diễn ra.</p>

        <ul className="list-square">

          <li><strong>______ you finish your homework</strong>, you can play video games.</li>
          <li className="list-none"><strong>Một khi bạn hoàn thành bài tập về nhà</strong>, bạn có thể chơi trò chơi điện tử.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20"><strong>4. At the time that</strong> /æt ðə taɪm ðæt/</p>

      <p className="text-indent-whole">Vào thời điểm mà; một cụm từ cụ thể và trang trọng hơn "when" để nhấn mạnh một mốc thời gian chính xác trong quá khứ hoặc tương lai.</p>

        <ul className="list-square">

          <li><strong>______ the economy crashed</strong>, many people lost their jobs.</li>
          <li className="list-none"><strong>Vào thời điểm mà nền kinh tế sụp đổ</strong>, nhiều người đã bị mất việc làm.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20"><strong>5. Upon</strong> /əˈpɒn/ (UK) hoặc /əˈpɑːn/ (US)</p>

      <p className="text-indent-whole">Khi, ngay sau khi; giới từ này thường đi kèm với Danh cơ hoặc V-ing để chỉ một hành động xảy ra ngay lập tức sau một hành động khác (mang sắc thái trang trọng).</p>

        <ul className="list-square">

          <li><strong>______ arriving at the hotel</strong>, they went straight to registration.</li>
          <li className="list-none"><strong>Khi đến khách sạn</strong>, họ đã đi thẳng đến quầy đăng ký.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20"><strong>6. By the time</strong> /baɪ ðə taɪm/</p>

      <p className="text-indent-whole">Vào lúc, tính đến lúc; dùng để diễn tả một sự việc đã hoặc sẽ hoàn thành trước một thời điểm được nhắc đến ở mệnh đề sau.</p>

        <ul className="list-square">

          <li><strong>______ we reached the cinema</strong>, the movie had already started.</li>
          <li className="list-none"><strong>Vào lúc chúng tôi đến được rạp chiếu phim</strong>, bộ phim đã bắt đầu rồi.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>May 26, 2026 · by 💎Gem ·</span>
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