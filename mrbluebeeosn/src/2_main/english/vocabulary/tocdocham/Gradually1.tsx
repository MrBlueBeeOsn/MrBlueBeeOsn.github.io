import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Gradually1(): React.JSX.Element {

  const postId = "Gradually1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#toc-do-cham-terms"><mark className="highlight-tertiary-padding-4-8">Tốc độ chậm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">gradually
        <sup><Link to="/vocabulary/gradually-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/gradually-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng đi sâu vào từ "<strong>gradually</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Gradually</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈɡrædʒuəli/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">gradua̛lly</Link>/
                <sup>&nbsp;⬤••• (4x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Dần dần, từ từ</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>gradually</strong>" dùng để miêu tả một quá trình diễn ra chậm rãi, từng bước một, không đột ngột.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>The sun <strong>gradually</strong> rose over the horizon. (Mặt trời dần dần mọc lên trên đường chân trời.)</li>

          <li>Her health is <strong>gradually</strong> improving. (Sức khỏe của cô ấy đang dần cải thiện.)</li>

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

          <li>Gradual (adj): dần dần /ˈɡrædʒuəl/</li>
          <li className="margin-bottom-20 list-none">There was a gradual increase in temperature. (Có một sự gia tăng nhiệt độ dần dần.)</li>

          <li>Grade (v): phân loại, đánh giá /ɡreɪd/</li>
          <li className="margin-bottom-20 list-none">The teacher graded the students' essays. (Giáo viên chấm bài luận của học sinh.)</li>

          <li>Grade (n): cấp bậc, lớp /ɡreɪd/</li>
          <li className="list-none">She is in the fifth grade. (Cô ấy học lớp năm.)</li>

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

          <li><Link to="/vocabulary/slowly-1">Slowly</Link>: chậm chạp /ˈsləʊli/</li>
          <li className="margin-bottom-20 list-none">The clock slowly ticked. (Đồng hồ chạy chậm.)</li>

          <li><Link to="/vocabulary/steadily-1">Steadily</Link>: đều đặn /ˈstedɪli/</li>
          <li className="margin-bottom-20 list-none">The population is steadily increasing. (Dân số đang tăng đều đặn.)</li>

          <li>Progressively: ngày càng /prəˈɡresɪvli/</li>
          <li className="list-none">The disease was progressing progressively. (Bệnh ngày càng tiến triển.)</li>

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

          <li>Suddenly: đột ngột /ˈsʌdnli/</li>
          <li className="margin-bottom-20 list-none">The lights suddenly went out. (Đèn đột ngột tắt.)</li>

          <li>Abruptly: đột ngột, thình lình /əˈbrʌptli/</li>
          <li className="margin-bottom-20 list-none">The meeting ended abruptly. (Cuộc họp kết thúc đột ngột.)</li>

          <li><Link to="/vocabulary/rapidly-1">Rapidly</Link>: nhanh chóng /ˈræpɪdli/</li>
          <li className="list-none">The car accelerated rapidly. (Chiếc xe tăng tốc nhanh chóng.)</li>

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

      <p className="text-indent-whole">Hình dung một cây xanh lớn dần theo thời gian hoặc một người đang học một kỹ năng mới và ngày càng thành thạo hơn.</p>

        <ul className="list-square">

          <li>The tree grew <strong>gradually</strong> over the years.</li>
          <li className="margin-bottom-20 list-none">(Cây xanh lớn dần theo năm tháng.)</li>

          <li>She <strong>gradually</strong> became more proficient in the new skill.</li>
          <li className="list-none">(Cô ấy dần dần thành thạo hơn trong kỹ năng mới.)</li>

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

      <p className="text-indent-whole">Tự tạo các câu ví dụ khác nhau với từ "<strong>gradually</strong>" trong nhiều ngữ cảnh khác nhau.</p>

        <ul className="list-square">

          <li>The weather is <strong>gradually</strong> getting warmer.</li>
          <li className="list-none">(Thời tiết đang dần trở nên ấm hơn.)</li>

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

      <p className="text-indent-whole">Thường xuyên sử dụng từ này khi nói về những thay đổi chậm chạp và tiến triển.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>The plant grew <Link to="/vocabulary/quickly-1">quickly</Link>. (Cây lớn nhanh.)</li>

            <li className="margin-bottom-20">The plant grew <strong>gradually</strong> over the summer. (Cây lớn dần trong suốt mùa hè.)</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai sử dụng "<strong>gradually</strong>" để <span className="highlight-255-padding-0-4">nhấn mạnh</span> rằng quá trình <span className="highlight-255-padding-0-4">lớn lên</span> của cây diễn ra <span className="highlight-255-padding-0-4">từ từ</span>, theo từng giai đoạn, trong một khoảng thời gian dài (suốt mùa hè).</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Đối lập với đột ngột: "<strong>Gradually</strong>" thường được dùng để đối lập với "suddenly" để nhấn mạnh sự thay đổi chậm chạp.</li>

          <li className="margin-bottom-20">Miêu tả quá trình: Từ này thường được dùng để miêu tả một quá trình diễn ra trong một khoảng thời gian dài.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>November 10, 2024 · by 💎Gem ·</span>
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