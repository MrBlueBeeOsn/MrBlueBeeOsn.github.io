import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function (): React.JSX.Element {

  const postId = "";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-xac-thuc-terms"><mark className="highlight-tertiary-padding-4-8">ADverbs: xác thực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">GENuinely
        <sup><Link to="/vocabulary/GENuinely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/GENuinely-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>GENuinely</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                [GENuinely][<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">GEN ū ine ly</Link>] /ˈdʒenjuɪnli/ ⬤••• (4x)
              </span>
            </li>

            <li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

            <li>Một cách chân thành, thật lòng</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>GENuinely</strong>" được dùng để nhấn mạnh tính chân thật, sự thật lòng trong một cảm xúc, hành động hoặc lời nói. Nó cho thấy rằng điều gì đó đến từ bên trong và không phải là giả tạo.</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>she GENuinely CARES about her FRIENDS.</li>
          <li className="margin-bottom-20 list-none">Cô ấy thực sự quan tâm đến bạn bè của mình.</li>

          <li>he was GENuinely surPRISED by the GIFT.</li>
          <li className="list-none">Anh ấy thực sự ngạc nhiên bởi món quà.</li>

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

          <li>he has a GENuine INterest in ART.</li>
          <li className="margin-bottom-20 list-none">Anh ấy có một sự quan tâm chân thành đến nghệ thuật.</li>

          <li>the WIND TURbine GENerates elecTRICity.</li>
          <li className="list-none">Tuabin gió tạo ra điện.</li>

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

          <li>she THANKED him sinCEREly for his HELP.</li>
          <li className="margin-bottom-20 list-none">Cô ấy chân thành cảm ơn anh ấy vì sự giúp đỡ.</li>

          <li>i <Link to="/vocabulary/TRUly-1">TRUly</Link> beLIEVE in what he SAID.</li>
          <li className="list-none">Tôi thực sự tin vào những gì anh ấy nói.</li>

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

          <li>he SMILED insinCEREly.</li>
          <li className="margin-bottom-20 list-none">Anh ấy cười một cách không chân thành.</li>

          <li>he SPOKE hypoCRITically about HONEsty.</li>
          <li className="list-none">Anh ta nói về sự trung thực một cách đạo đức giả.</li>

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

      <p className="text-indent-whole">Hình dung một người đang cười thật tươi khi nhận được một món quà.</p>

        <ul className="list-square">

          <li>he is GENuinely GRATEful for the THOUGHTful PREsent.</li>
          <li className="list-none">Anh ấy thực sự biết ơn món quà chu đáo này.</li>

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

      <p className="text-indent-whole">Tạo các câu về những cảm xúc hoặc hành động chân thành.</p>

        <ul className="list-square">

          <li>he GENuinely enJOYS SPENding TIME with his FAMILy.</li>
          <li className="list-none">Anh ấy thực sự thích dành thời gian cùng gia đình.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại hoặc khi viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>he SAID he LIKED my PAINting.</li>
            <li className="list-none margin-bottom-20">Anh ấy nói rằng anh ấy thích bức tranh của tôi.</li>

            <li value="2">he GENuinely adMIREd my PAINting.</li>
            <li className="list-none margin-bottom-20">Anh ấy thực sự ngưỡng mộ bức tranh của tôi.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>GENuinely</strong>" để <span className="highlight-255-padding-0-4">nhấn mạnh rằng sự ngưỡng mộ</span> của anh ấy <span className="highlight-255-padding-0-4">là chân thành</span> và không chỉ là một lời khen xã giao.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Tính chân thật: "<strong>GENuinely</strong>" nhấn mạnh sự chân thật, không giả tạo của một cảm xúc hoặc hành động.</li>

          <li className="margin-bottom-20">Đối lập với giả tạo: Nó thường được sử dụng để đối lập với những hành động hoặc lời nói giả dối.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎GEM ·</span>
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