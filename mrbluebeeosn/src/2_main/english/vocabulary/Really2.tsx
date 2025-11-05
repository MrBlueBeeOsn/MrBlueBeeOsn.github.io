import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Really2(): React.JSX.Element {

  const postId = "Really2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-xac-thuc-terms"><mark className="highlight-tertiary-padding-4-8">Tính xác thực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">really
        <sup>
          <Link to="/vocabulary/really-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/really-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>really</strong>" (thực sự, rất) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Really&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈriːəli/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">rėa̛lly</Link>/ 
              
              <sup>&nbsp;⬤• (2x)</sup>
              
            </span>
              
            &nbsp;trong tiếng Anh có nghĩa là "thực sự", "rất", thường được dùng để nhấn mạnh một ý kiến, cảm xúc hoặc một sự kiện nào đó.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1"><strong>Really</strong> like: Thật sự thích /ˈriːəli laɪk/</li>
        <li className="list-none margin-bottom-20">I <strong>really</strong> like pizza. (Tôi rất thích pizza.)</li>

        <li value="2"><strong>Really</strong> want: Thật sự muốn /ˈriːəli wɒnt/</li>
        <li className="list-none margin-bottom-20">I <strong>really</strong> want to go to Paris. (Tôi rất muốn đến Paris.)</li>

        <li value="3"><strong>Really</strong> well: Rất tốt /ˈriːəli wɛl/</li>
        <li className="list-none margin-bottom-20">She speaks English <strong>really</strong> well. (Cô ấy nói tiếng Anh rất tốt.)</li>

        <li value="4"><strong>Really</strong> big: Rất lớn /ˈriːəli bɪɡ/</li>
        <li className="list-none margin-bottom-20">His house is <strong>really</strong> big. (Nhà của anh ấy rất lớn.)</li>

        <li value="5"><strong>Really</strong> fast: Rất nhanh /ˈriːəli fɑːst/</li>
        <li className="list-none margin-bottom-20">The car can go <strong>really</strong> fast. (Chiếc xe có thể chạy rất nhanh.)</li>

        <li value="6"><strong>Really</strong> hard: Rất khó /ˈriːəli hɑːrd/</li>
        <li className="list-none margin-bottom-20">This math problem is <strong>really</strong> hard. (Bài toán này rất khó.)</li>

        <li value="7"><strong>Really</strong> funny: Rất hài hước /ˈriːəli ˈfʌni/</li>
        <li className="list-none margin-bottom-20">That joke was <strong>really</strong> funny. (Câu đùa đó thật hài hước.)</li>

        <li value="8"><strong>Really</strong> tired: Rất mệt /ˈriːəli ˈtaɪərd/</li>
        <li className="list-none margin-bottom-20">I'm <strong>really</strong> tired after work. (Tôi rất mệt sau khi làm việc.)</li>

        <li value="9"><strong>Really</strong> happy: Rất vui /ˈriːəli ˈhæpi/</li>
        <li className="list-none margin-bottom-20">I'm <strong>really</strong> happy to see you. (Tôi rất vui khi gặp bạn.)</li>

        <li value="10"><strong>Really</strong> surprised: Rất ngạc nhiên /ˈriːəli səˈpraɪzd/</li>
        <li className="list-none margin-bottom-20">I was <strong>really</strong> surprised by the news. (Tôi rất ngạc nhiên khi nghe tin đó.)</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh mức độ của một tính từ hoặc trạng từ. "<strong>Really</strong>" được sử dụng để làm tăng cường ý nghĩa của từ đi kèm.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Really</strong>" có thể đứng trước hoặc sau tính từ hoặc trạng từ.</li>

          <li className="margin-bottom-20">Từ này rất phổ biến trong ngôn ngữ hàng ngày và được sử dụng trong nhiều ngữ cảnh khác nhau.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 2, 2024 · by 💎Gem ·</span>
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