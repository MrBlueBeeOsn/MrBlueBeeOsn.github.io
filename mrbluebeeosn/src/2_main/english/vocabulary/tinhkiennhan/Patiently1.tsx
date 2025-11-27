import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Patiently1(): React.JSX.Element {

  const postId = "Patiently1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-kien-nhan-terms"><mark className="highlight-tertiary-padding-4-8">Tính kiên nhẫn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">patiently
        <sup><Link to="/vocabulary/patiently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/patiently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>patiently</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Patiently</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈpeɪ.ʃənt.li/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">pātie̛ntly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Một cách kiên nhẫn, nhẫn nại, kiên trì</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>patiently</strong>" miêu tả một hành động hoặc trạng thái được thực hiện một cách kiên nhẫn, không vội vàng, không dễ cáu kỉnh hoặc khó chịu.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>He waited <strong>patiently</strong> for his turn. (Anh ấy kiên nhẫn chờ đến lượt của mình.)</li>

          <li>She listened <strong>patiently</strong> to his story. (Cô ấy kiên nhẫn lắng nghe câu chuyện của anh ấy.)</li>

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

          <li>Patient (adj, n): Kiên nhẫn, nhẫn nại; bệnh nhân /ˈpeɪ.ʃənt/</li>
          <li>(adj): He is a patient teacher. (Anh ấy là một giáo viên kiên nhẫn.)</li>
          <li className="margin-bottom-20 list-none">(n): The doctor treated the patient with care. (Bác sĩ chăm sóc bệnh nhân một cách cẩn thận.)</li>

          <li>Patience (n): Sự kiên nhẫn, sự nhẫn nại /ˈpeɪ.ʃəns/</li>
          <li className="list-none">He has a lot of patience. (Anh ấy có rất nhiều sự kiên nhẫn.)</li>

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

          <li>Calmly: Một cách bình tĩnh, điềm tĩnh /ˈkɑːm.li/</li>
          <li className="margin-bottom-20 list-none">He calmly explained the situation. (Anh ấy bình tĩnh giải thích tình huống.)</li>

          <li>Tolerantly: Một cách khoan dung, độ lượng /ˈtɒl.ər.ənt.li/</li>
          <li className="margin-bottom-20 list-none">He listened to their complaints tolerantly. (Anh ấy lắng nghe những lời phàn nàn của họ một cách khoan dung.)</li>

          <li>Enduringly: Một cách bền bỉ, chịu đựng /ɪnˈdʊr.ɪŋ.li/</li>
          <li className="list-none">She endured the pain enduringly. (Cô ấy chịu đựng nỗi đau một cách bền bỉ.)</li>

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

          <li>Impatiently: Một cách thiếu kiên nhẫn, sốt ruột /ɪmˈpeɪ.ʃənt.li/</li>
          <li className="margin-bottom-20 list-none">He waited impatiently for the bus. (Anh ấy chờ xe buýt một cách sốt ruột.)</li>

          <li>Frustratedly: Một cách bực bội, thất vọng /frʌsˈtreɪ.tɪd.li/</li>
          <li className="margin-bottom-20 list-none">She sighed frustratedly. (Cô ấy thở dài một cách bực bội.)</li>

          <li>Agitatedly: Một cách kích động, bồn chồn /ˈædʒ.ɪ.teɪ.tɪd.li/</li>
          <li className="list-none">He paced agitatedly around the room. (Anh ấy đi đi lại lại trong phòng một cách bồn chồn.)</li>

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

      <p className="text-indent-whole">Hình dung một người đang chờ đợi một cách bình tĩnh hoặc một người đang lắng nghe một cách chăm chú.</p>

        <ul className="list-square">

          <li>He waited <strong>patiently</strong> for his turn.</li>
          <li className="margin-bottom-20 list-none">(Anh ấy kiên nhẫn chờ đến lượt mình.)</li>

          <li>She listened <strong>patiently</strong> to the long explanation.</li>
          <li className="list-none">(Cô ấy kiên nhẫn lắng nghe lời giải thích dài dòng.)</li>

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

      <p className="text-indent-whole">Tạo các câu liên quan đến các tình huống thể hiện sự kiên nhẫn và nhẫn nại.</p>

        <ul className="list-square">

          <li>The teacher explained the lesson <strong>patiently</strong> to the students.</li>
          <li className="list-none">(Giáo viên giải thích bài học một cách kiên nhẫn cho học sinh.)</li>

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

      <p className="text-indent-whole">Thường xuyên sử dụng từ này trong các bài viết hoặc cuộc trò chuyện.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>He waited for his turn. (Anh ấy chờ đến lượt của mình.)</li>

            <li className="margin-bottom-20">He waited <strong>patiently</strong> for his turn. (Anh ấy kiên nhẫn chờ đến lượt của mình.)</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh sự kiên nhẫn và nhẫn nại trong quá trình chờ đợi</span> của anh ấy.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Nhấn mạnh sự kiên nhẫn và nhẫn nại: "<strong>Patiently</strong>" nhấn mạnh sự kiên nhẫn, nhẫn nại và không vội vàng hoặc khó chịu.</li>

          <li className="margin-bottom-20">Thường dùng để miêu tả cách chờ đợi hoặc lắng nghe: Từ này thường được sử dụng để miêu tả cách chờ đợi hoặc lắng nghe một cách kiên nhẫn.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 5, 2025 · by 💎Gem ·</span>
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