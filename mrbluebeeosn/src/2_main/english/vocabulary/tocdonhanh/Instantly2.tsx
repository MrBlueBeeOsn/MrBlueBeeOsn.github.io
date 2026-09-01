import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function INstantly2(): React.JSX.Element {

  const postId = "INstantly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-nhanh"><mark className="highlight-tertiary-padding-4-8">ADverbs: nhanh</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">INstantly
        <sup>
          <Link to="/vocabulary/INstantly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/INstantly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>INstantly</strong>" (ngay lập tức) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [INstantly][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">IN sta̛nt ly</Link>] /ˈɪnstəntli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "ngay lập tức", "tức thì", thường được dùng để mô tả một hành động hoặc sự kiện xảy ra rất nhanh, không có sự trì hoãn.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">the EIffel TOWer is INstantly RECognizable around the WORLD.</li>
        <li className="list-none margin-bottom-20">Tháp Eiffel dễ nhận biết ngay lập tức trên toàn thế giới.</li>

        <li value="2">this GAME is so much FUN, it's INstantly adDICtive.</li>
        <li className="list-none">this game is so much fun, it's instantly addictive.</li>
        <li className="list-none margin-bottom-20">Trò chơi này rất vui, nó gây nghiện ngay lập tức.</li>

        <li value="3">the NEW SONG beCAME an INstantly CLASsic HIT.</li>
        <li className="list-none margin-bottom-20">Bài hát mới trở thành một bản hit kinh điển ngay lập tức.</li>

        <li value="4">i KNEW it was her INstantly RECognizable VOICE.</li>
        <li className="list-none margin-bottom-20">Tôi biết ngay đó là giọng nói dễ nhận biết của cô ấy.</li>

        <li value="5">as soon as i SAID it, i FELT INstantly reGRETful.</li>
        <li className="list-none margin-bottom-20">Ngay khi tôi nói ra điều đó, tôi đã cảm thấy hối hận ngay lập tức.</li>

        <li value="6">i FELT INstantly reLIEVED when i HEARD the GOOD NEWS.</li>
        <li className="list-none margin-bottom-20">Tôi cảm thấy nhẹ nhõm ngay lập tức khi nghe tin tốt lành.</li>

        <li value="7">the VIdeo WENT VIral and she beCAME INstantly FAmous.</li>
        <li className="list-none margin-bottom-20">Video trở nên lan truyền và cô ấy trở nên nổi tiếng ngay lập tức.</li>

        <li value="8">the NIke SWOOSH is an INstantly RECognizable LOgo.</li>
        <li className="list-none margin-bottom-20">Logo hình dấu ngoặc kép của Nike là một logo dễ nhận biết ngay lập tức.</li>

        <li value="9">as soon as i LEFT the ROOM, his NAME was INstantly forGOTten.</li>
        <li className="list-none margin-bottom-20">Ngay khi tôi rời khỏi phòng, tôi đã quên tên anh ấy ngay lập tức.</li>

        <li value="10">we INstantly conNECted when we FIRST MET.</li>
        <li className="list-none margin-bottom-20">Chúng tôi đã kết nối ngay lập tức khi gặp nhau lần đầu.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính tức thời, nhanh chóng và không có sự trì hoãn của một hành động, sự kiện hoặc cảm xúc. Chúng thường được sử dụng để tạo nên những hình ảnh sinh động và ấn tượng.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>INstantly</strong>" thường được đặt trước Tính Cơ hoặc phân từ quá khứ để nhấn mạnh ý nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn nói hoặc văn viết không chính thức để tạo ra hiệu ứng mạnh mẽ.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 23, 2024 · by 💎GEM ·</span>
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