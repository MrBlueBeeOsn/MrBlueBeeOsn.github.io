import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function MAYbe1(): React.JSX.Element {

  const postId = "MAYbe1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-khong-chac"><mark className="highlight-tertiary-padding-4-8">ADverbs: không chắc</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">MAYbe
        <sup><Link to="/vocabulary/MAYbe-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/MAYbe-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#SYNonyms">SYNonyms</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ANtonyms">ANtonyms</HashLink>
          </span> &nbsp;

        </p>

        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#VoCABulary-LEARNing-TIPS">🌻 VoCABulary LEARNing TIPS</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>MAYbe</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                MAYbe \<Link to="/pronunciation/5-vowel-system">MĀY bē</Link>\ /ˈmeɪ.bi/ ⬤• (TWO SYLlables)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Có thể</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Diễn tả sự không chắc chắn, khả năng xảy ra một điều gì đó.</p>

      <p className="margin-top-20 text-indent-whole">For example:</p>

        <ul className="list-square">

          <li id="ADverb">MAYbe it will RAIN toMORrow.</li>
          <li className="margin-bottom-20 list-none">Có thể ngày mai sẽ có mưa.</li>

          <li>MAYbe you should CALL her.</li>
          <li className="list-none">Có lẽ bạn nên gọi cho cô ấy.</li>

        </ul>

      {/* =============================
            VoCABulary FAMILy:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>VoCABulary FAMILy:</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li className="list-none">Không có gia đình từ trực tiếp cho "<strong>MAYbe</strong>" vì nó là một từ đơn lẻ.</li>

        </ul>

      {/* =============================
            SYNonyms:
      ============================= */}
        
      <p className="margin-top-20" id="SYNonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>SYNonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li><Link to="/vocabulary/perHAPS-1">perHAPS</Link> we can meeT UP LAter.</li>
          <li className="margin-bottom-20 list-none">Có lẽ chúng ta có thể hẹn gặp nhau sau nhé.</li>

          <li>it's <Link to="/vocabulary/POSsibly-1">POSsibly</Link> the BEST DAY of my LIFE.</li>
          <li className="list-none">Có lẽ đây là ngày tuyệt vời nhất trong cuộc đời tôi.</li>

        </ul>

        {/* <Link to="/vocabulary/CLEARly-1">Clearly</Link> */}

      {/* =============================
            ANtonyms:
      ============================= */}

      <p className="margin-top-20" id="ANtonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>ANtonyms</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>i <Link to="/vocabulary/DEFinitely-1">DEFinitely</Link> WANT to GO.</li>
          <li className="margin-bottom-20 list-none">Tôi chắc chắn muốn đi.</li>

          <li><Link to="/vocabulary/CERtainly-1">CERtainly</Link>, you can BORrow my BOOK.</li>
          <li className="list-none">Tất nhiên, bạn có thể mượn cuốn sách của tôi.</li>

        </ul>
      
      {/* =============================
            🌻 Vocabulary-Learning Tips:
      ============================= */}

      <h3 className="margin-y-50 text-center" id="VoCABulary-LEARNing-TIPS">🌻 Vocabulary-Learning Tips:</h3>

      {/* =============================
            1. Link to the image:
      ============================= */}
      
      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>1. Link to the image</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Hình dung một dấu hỏi lớn khi bạn không chắc chắn về điều gì đó.</p>

        <ul className="list-square">

          <li>MAYbe you KNOW the ANswer?</li>
          <li className="list-none">Có lẽ bạn biết câu trả lời?</li>

        </ul>

      {/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

      <p className="text-indent-whole">Tạo nhiều câu với "<strong>MAYbe</strong>" trong các tình huống khác nhau, ví dụ khi đưa ra quyết định hoặc dự đoán.</p>

        <ul className="list-square">

          <li>i'm NOT SURE, MAYbe i'll GO to the PARTy.</li>
          <li className="list-none">Tớ không chắc, có lẽ tớ sẽ đi dự tiệc.</li>

        </ul>

      {/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng "<strong>MAYbe</strong>" trong giao tiếp hàng ngày.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt giữa perHAPS và <strong>MAYbe</strong>):</p>

          <ol>

            <li value="1"><Link to="/vocabulary/perHAPS-1">perHAPS</Link> you could HELP me with this PROJect.</li>
            <li className="list-none">Có lẽ bạn có thể giúp tôi thực hiện dự án này.</li>
            <li className="list-none margin-bottom-20">Cách nói lịch sự hơn, thường dùng trong văn viết hoặc các tình huống trang trọng.</li>

            <li value="2">MAYbe we can GO to the MOvies toNIGHT.</li>
            <li className="list-none">Có lẽ tối nay chúng ta có thể đi xem phim.</li>
            <li className="list-none">Cách nói thông thường, <span className="highlight-255-padding-0-4">thường dùng trong giao tiếp hàng ngày.</span></li>

          </ol>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Note:</h3>

        <ul className="list-square">

          <li>"<strong>MAYbe</strong>" thường đứng ở đầu câu hoặc trước hành động chính.</li>

          <li className="margin-bottom-20">Nó thể hiện sự do dự hoặc không chắc chắn của người nói.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 5, 2024 · by 💎GEM ·</span>
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