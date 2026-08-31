import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function parTICularly2(): React.JSX.Element {

  const postId = "parTICularly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#diem-nhan-dac-biet-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: đặc biệt</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">parTICularly
        <sup>
          <Link to="/vocabulary/parTICularly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/parTICularly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>parTICularly</strong>" (đặc biệt) và các cụm từ thường đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [parTICularly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">pa̛r TIC ư̇ la̛r ly</Link>] /pəˈtɪkjələrli/ •⬤••• (5x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "đặc biệt", "một cách đặc biệt", thường được dùng để nhấn mạnh một điều gì đó hơn những thứ khác.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">i am parTICularly INTERested in HIStory.</li>
        <li className="list-none margin-bottom-20">Tôi đặc biệt quan tâm đến lịch sử.</li>

        <li value="2">she is parTICularly CHOCOLate.</li>
        <li className="list-none margin-bottom-20">Cô ấy đặc biệt thích sô cô la.</li>

        <li value="3">he is parTICularly GOOD at PLAYing the piANo.</li>
        <li className="list-none margin-bottom-20">Anh ấy đặc biệt giỏi chơi piano.</li>

        <li value="4">this TASK is parTICularly CHALlenging.</li>
        <li className="list-none margin-bottom-20">Nhiệm vụ này đặc biệt khó khăn.</li>

        <li value="5">this inforMAtion is parTICularly RELevant to our disCUSsion.</li>
        <li className="list-none margin-bottom-20">Thông tin này đặc biệt liên quan đến cuộc thảo luận của chúng ta.</li>

        <li value="6">the SUNset was parTICularly BEAUtiful toDAY.</li>
        <li className="list-none margin-bottom-20">Hoàng hôn hôm nay đặc biệt đẹp.</li>

        <li value="7">it is parTICularly imPORTant to arRIVE on TIME for the MEETing.</li>
        <li className="list-none margin-bottom-20">Việc đến đúng giờ cho cuộc họp là đặc biệt quan trọng.</li>

        <li value="8">this PROBlem is parTICularly DIFficult to SOLVE.</li>
        <li className="list-none margin-bottom-20">Vấn đề này đặc biệt khó giải quyết.</li>

        <li value="9">this MEDicine is parTICularly efFECtive for TREATing HEADaches.</li>
        <li className="list-none margin-bottom-20">Thuốc này đặc biệt hiệu quả trong việc điều trị đau đầu.</li>

        <li value="10">this BOOK is parTICularly SUITable for beGINners.</li>
        <li className="list-none margin-bottom-20">Cuốn sách này đặc biệt phù hợp cho người mới bắt đầu.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để nhấn mạnh một đặc điểm, một tính chất hoặc một khía cạnh nào đó của một sự vật, sự việc hoặc một người. Chúng giúp làm nổi bật những điểm đặc biệt và thu hút sự chú ý của người nghe hoặc người đọc.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>parTICularly</strong>" thường được đặt trước Tính Cơ hoặc Danh Cơ để nhấn mạnh ý nghĩa của chúng.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong các văn bản viết và nói để làm cho câu văn trở nên sinh động và hấp dẫn hơn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 5, 2024 · by 💎GEM ·</span>
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