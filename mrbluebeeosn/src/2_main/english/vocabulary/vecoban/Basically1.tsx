import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function BAsically1(): React.JSX.Element {

  const postId = "BAsically1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-ve-co-ban"><mark className="highlight-tertiary-padding-4-8">ADverbs: về cơ bản</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">BAsically
        <sup><Link to="/vocabulary/BAsically-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/BAsically-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>BAsically</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          {/* <p className="margin-bottom-20"><strong>Basically</strong></p> */}

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [BAsically][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">BĀ sic a̛lly</Link>] /ˈbeɪsɪkli/ ⬤•• (3x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Về cơ bản, nói một cách đơn giản</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>BAsically</strong>" được sử dụng để nhấn mạnh ý chính hoặc điểm quan trọng nhất của một vấn đề, một ý tưởng hoặc một tình huống. Nó có nghĩa là "nói một cách đơn giản" hoặc "về cơ bản".</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>BAsically, i JUST WANT to reLAX.</li>
          <li className="margin-bottom-20 list-none">Về cơ bản, tôi chỉ muốn thư giãn.</li>

          <li>BAsically, the PROBlem is that we DON'T have eNOUGH MONey.</li>
          <li className="list-none">Về cơ bản, vấn đề là chúng ta không đủ tiền.</li>

        </ul>

      {/* =============================
            Gia đình từ:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Gia đình từ</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>the BAsic iDEa is VEry SIMple.</li>
          <li className="margin-bottom-20 list-none">Ý tưởng cơ bản rất đơn giản.</li>

          <li>the BASE of the PYramid is VEry WIDE.</li>
          <li className="list-none">Đáy của kim tự tháp rất rộng.</li>

        </ul>

      {/* =============================
            Từ đồng nghĩa:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ đồng nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>esSENtially, it's a QUEStion of MONey.</li>
          <li className="margin-bottom-20 list-none">Về bản chất, đó là một vấn đề về tiền bạc.</li>

          <li>fundaMENtally, i aGREE with you.</li>
          <li className="list-none">Về cơ bản, tôi đồng ý với bạn.</li>

        </ul>

        {/* <Link to="/vocabulary/CLEARly-1">Clearly</Link> */}

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>speCIFically, i NEED you to FInish this rePORT by FRIday.</li>
          <li className="margin-bottom-20 list-none">Cụ thể, tôi cần bạn hoàn thành báo cáo này trước thứ Sáu.</li>

          <li>[<Link to="/vocabulary/preCISEly-1">preCISEly</Link>], THAT'S what i MEAN.</li>
          <li className="list-none">Chính xác, đó là điều tôi muốn nói.</li>

        </ul>
      
      {/* =============================
            🌻 Mẹo học từ vựng:
      ============================= */}

      <h3 className="margin-y-50 text-center">🌻 Mẹo học từ vựng:</h3>

      {/* =============================
            1. Liên kết hình ảnh:
      ============================= */}
      
      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>1. Liên kết</strong></mark> 
        </strong>
        <strong>&nbsp;với hình ảnh</strong>:
      </p>

      <p className="text-indent-whole">Hình dung một tòa nhà với một nền móng vững chắc.</p>

        <ul className="list-square">

          <li>the BUILDing is BAsically BUILT on a STRONG founDAtion.</li>
          <li className="list-none">Tòa nhà cơ bản được xây dựng trên một nền móng vững chắc.</li>

        </ul>

      {/* =============================
            2. Tạo câu ví dụ:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Tạo câu</strong></mark> 
        </strong>
        <strong>&nbsp;ví dụ</strong>:
      </p>

      <p className="text-indent-whole">Tạo các câu ví dụ liên quan đến các tình huống hàng ngày hoặc các cuộc trò chuyện.</p>

        <ul className="list-square">

          <li>BAsically, i JUST NEED some TIME to THINK.</li>
          <li className="list-none">Về cơ bản, tôi chỉ cần một chút thời gian để suy nghĩ.</li>

        </ul>

      {/* =============================
            3. Luyện tập thường xuyên:
      ============================= */}

      <p className="margin-top-20">
        <strong>
            <mark className="highlight-255-padding-4-8"><strong>3. Luyện tập</strong></mark>
        </strong>
        <strong>&nbsp;thường xuyên</strong>:
      </p>

      <p className=" margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại hoặc khi viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li value="1">i LIKE to EAT VEGEtables.</li>
            <li className="list-none margin-bottom-20">Tôi thích ăn rau.</li>

            <li value="2">BAsically, i LIKE to EAT HEALthy FOOD.</li>
            <li className="list-none margin-bottom-20">Về cơ bản, tôi thích ăn thức ăn lành mạnh.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>BAsically</strong>" để tổng kết một cách rộng hơn về sở thích ăn uống của người nói.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Rút gọn: "<strong>BAsically</strong>" thường được dùng để rút gọn một ý tưởng phức tạp thành một ý tưởng đơn giản hơn.</li>

          <li className="margin-bottom-20">Tập trung vào ý chính: Nó giúp người nghe hoặc người đọc dễ dàng nắm bắt được ý chính.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 8, 2024 · by 💎GEM ·</span>
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