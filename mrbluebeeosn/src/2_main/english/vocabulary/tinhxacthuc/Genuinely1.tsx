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
    
      <h4><HashLink smooth to="/vocabulary#tinh-xac-thuc-terms"><mark className="highlight-tertiary-padding-4-8">Tính xác thực</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">genuinely
        <sup><Link to="/vocabulary/genuinely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/genuinely-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>genuinely</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Genuinely</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈdʒenjuɪnli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">genūinely</Link>/
                <sup>&nbsp;⬤••• (4x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Tính  chân thành, thật lòng</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>genuinely</strong>" được dùng để nhấn mạnh tính chân thật, sự thật lòng trong một cảm xúc, hành động hoặc lời nói. Nó cho thấy rằng điều gì đó đến từ bên trong và không phải là giả tạo.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>She <strong>genuinely</strong> cares about her friends. (Cô ấy thực sự quan tâm đến bạn bè của mình.)</li>

          <li>He was <strong>genuinely</strong> surprised by the gift. (Anh ấy thực sự ngạc nhiên bởi món quà.)</li>

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

          <li>Genuine (adj): Chân thành, thật /ˈdʒenjuɪn/</li>
          <li className="margin-bottom-20 list-none">He has a genuine interest in art. (Anh ấy có một sự quan tâm chân thành đến nghệ thuật.)</li>

          <li>Generate (v): Tạo ra /ˈdʒenəreɪt/</li>
          <li className="list-none">The wind turbine generates electricity. (Tuabin gió tạo ra điện.)</li>

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

          <li>Sincerely: Một cách chân thành /sɪnˈsɪərli/</li>
          <li className="margin-bottom-20 list-none">She thanked him sincerely for his help. (Cô ấy chân thành cảm ơn anh ấy vì sự giúp đỡ.)</li>

          <li><Link to="/vocabulary/truly-1">Truly</Link>: Một cách thực sự /ˈtruːli/</li>
          <li className="list-none">I truly believe in what he said. (Tôi thực sự tin vào những gì anh ấy nói.)</li>

        </ul>

        {/* <Link to="/vocabulary/clearly-1">Clearly</Link> */}

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>Insincerely: Một cách không chân thành /ɪnˈsɪnsiərli/</li>
          <li className="margin-bottom-20 list-none">He smiled insincerely. (Anh ấy cười một cách không chân thành.)</li>

          <li>Hypocritically: Một cách đạo đức giả /ˌhɪpəˈkrɪtɪkli/</li>
          <li className="list-none">He spoke hypocritically about honesty. (Anh ta nói về sự trung thực một cách đạo đức giả.)</li>

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

          <li>He is <strong>genuinely</strong> grateful for the thoughtful present.</li>
          <li className="list-none">(Anh ấy thực sự biết ơn món quà chu đáo này.)</li>

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

          <li>He <strong>genuinely</strong> enjoys spending time with his family.</li>
          <li className="list-none">(Anh ấy thực sự thích dành thời gian cùng gia đình.)</li>

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

      <p className="text-indent-whole">Thường xuyên sử dụng từ này trong các cuộc hội thoại hoặc khi viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>He said he liked my painting. (Anh ấy nói rằng anh ấy thích bức tranh của tôi.)</li>

            <li className="margin-bottom-20">He <strong>genuinely</strong> admired my painting. (Anh ấy thực sự ngưỡng mộ bức tranh của tôi.)</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>genuinely</strong>" để <span className="highlight-255-padding-0-4">nhấn mạnh rằng sự ngưỡng mộ</span> của anh ấy <span className="highlight-255-padding-0-4">là chân thành</span> và không chỉ là một lời khen xã giao.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Tính chân thật: "<strong>Genuinely</strong>" nhấn mạnh sự chân thật, không giả tạo của một cảm xúc hoặc hành động.</li>

          <li className="margin-bottom-20">Đối lập với giả tạo: Nó thường được sử dụng để đối lập với những hành động hoặc lời nói giả dối.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 4, 2024 · by 💎Gem ·</span>
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