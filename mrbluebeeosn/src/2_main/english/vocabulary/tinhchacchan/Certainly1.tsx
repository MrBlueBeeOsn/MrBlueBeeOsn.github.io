import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Certainly1(): React.JSX.Element {

  const postId = "Certainly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-chac-chan-terms"><mark className="highlight-tertiary-padding-4-8">Tính chắc chắn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">certainly
        <sup><Link to="/vocabulary/certainly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/certainly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng tìm hiểu về từ "<strong>certainly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Certainly</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈsɜːrtnli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">ce̛rta̛inly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Chắc chắn, hoàn toàn</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>certainly</strong>" được dùng để thể hiện sự đồng ý một cách mạnh mẽ, khẳng định một điều gì đó là đúng hoặc sẽ xảy ra. Nó cũng có thể được sử dụng để nhấn mạnh một ý kiến hoặc một câu trả lời.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>Can you help me with this? ______!</li>
          <li className="margin-bottom-20 list-none">Bạn có thể giúp tôi việc này không? Chắc chắn rồi!</li>

          <li>I will ______ be there on time.</li>
          <li className="list-none">Tôi chắc chắn sẽ đến đúng giờ.</li>

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

          <li>Certain (adj) /ˈsɜːrtn/</li>
          <li className="list-none">I am ______ that he will win.</li>
          <li className="margin-bottom-20 list-none">Tôi chắc chắn rằng anh ấy sẽ thắng.</li>

          <li>Certainty (n) /ˈsɜːtntɪ/</li>
          <li className="list-none">There is no ______ in life.</li>
          <li className="list-none">Không có gì là chắc chắn trong cuộc sống.</li>

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

          <li><Link to="/vocabulary/definitely-1">Definitely</Link> /ˈdefɪnətli/</li>
          <li className="list-none">I will ______ go to the party.</li>
          <li className="margin-bottom-20 list-none">Tôi chắc chắn sẽ đi dự tiệc.</li>

          <li><Link to="/vocabulary/absolutely-1">Absolutely</Link> /ˈæbsəluːtli/</li>
          <li className="list-none">I ______ agree with you.</li>
          <li className="list-none">Tôi hoàn toàn đồng ý với bạn.</li>

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

          <li>Uncertainly /ʌnˈsɜːtntli/</li>
          <li className="list-none">He answered ______.</li>
          <li className="margin-bottom-20 list-none">Anh ấy trả lời một cách không chắc chắn.</li>

          <li>Doubtfully /ˈdaʊtfəli/</li>
          <li className="list-none">She looked at me ______.</li>
          <li className="list-none">Cô ấy nhìn tôi một cách nghi ngờ.</li>

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

      <p className="text-indent-whole">Hình dung một người gật đầu một cách chắc chắn khi trả lời một câu hỏi.</p>

        <ul className="list-square">

          <li>When asked if he would attend the party, he nodded ______.</li>
          <li className="list-none">Khi được hỏi liệu anh ấy có tham dự bữa tiệc không, anh ấy đã gật đầu chắc chắn.</li>

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

      <p className="text-indent-whole">Tạo các câu thể hiện sự đồng ý hoặc khẳng định.</p>

        <ul className="list-square">

          <li>______, I will be there.</li>
          <li className=" margin-bottom-20 list-none">Chắc chắn rồi, tôi sẽ có mặt.</li>

          <li>I will ______ be there to support you.</li>
          <li className="list-none">Tôi chắc chắn sẽ ở đó để ủng hộ bạn.</li>

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

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các cuộc hội thoại hoặc bài viết.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>I might go to the movies.</li>
            <li className="list-none margin-bottom-20">Có thể tôi sẽ đi xem phim.</li>

            <li value="2">I will ______ go to the movies.</li>
            <li className="list-none margin-bottom-20">Tôi chắc chắn sẽ đi xem phim.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>certainly</strong>" để <span className="highlight-255-padding-0-4">thể hiện một quyết định chắc chắn hơn</span> so với câu đầu.</p>

        {/* <span className="highlight-255-padding-0-4"></span> */}

      </div>

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Sự khẳng định: "<strong>Certainly</strong>" mang ý nghĩa khẳng định rất mạnh.</li>

          <li className="margin-bottom-20">Dùng trong nhiều ngữ cảnh: Từ này có thể được sử dụng trong nhiều tình huống giao tiếp khác nhau.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 7, 2024· by 💎Gem ·</span>
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