import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Patiently2(): React.JSX.Element {

  const postId = "Patiently2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-kien-nhan-terms"><mark className="highlight-tertiary-padding-4-8">Tính kiên nhẫn</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">patiently
        <sup>
          <Link to="/vocabulary/patiently-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/patiently-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>patiently</strong>" (một cách kiên nhẫn) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <strong>Patiently&nbsp;</strong>
            
            <span className="highlight-255-padding-3-6">
              
              /ˈpeɪ.ʃənt.li/ + /
              
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">pātie̛ntly</Link>/ 
              
              <sup>&nbsp;⬤•• (3x)</sup>
              
            </span>
              
            &nbsp;thường được dùng để mô tả một hành động hoặc tình huống diễn ra một cách kiên nhẫn, không vội vã, không nôn nóng.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Patiently <strong>waited</strong> /weɪtɪd/</li>
        <li className="list-none">She ______ for her turn.</li>
        <li className="list-none margin-bottom-20">Cô ấy kiên nhẫn chờ đến lượt mình.</li>

        <li value="2">Patiently <strong>listened</strong> /ˈlɪsənd/</li>
        <li className="list-none">He ______ to the long explanation.</li>
        <li className="list-none margin-bottom-20">Anh ấy kiên nhẫn lắng nghe lời giải thích dài dòng.</li>

        <li value="3">Patiently <strong>explained</strong> /ɪkˈspleɪnd/</li>
        <li className="list-none">The teacher ______ the lesson again.</li>
        <li className="list-none margin-bottom-20">Giáo viên kiên nhẫn giải thích lại bài học.</li>

        <li value="4">Patiently <strong>taught</strong> /tɔːt/</li>
        <li className="list-none">She ______ her child how to read.</li>
        <li className="list-none margin-bottom-20">Cô ấy kiên nhẫn dạy con mình đọc.</li>

        <li value="5">Patiently <strong>worked</strong> /wɜːrkd/</li>
        <li className="list-none">They ______ on the difficult project.</li>
        <li className="list-none margin-bottom-20">Họ kiên nhẫn làm việc cho dự án khó khăn.</li>

        <li value="6">Patiently <strong>endured</strong> /ɪnˈdʊrd/</li>
        <li className="list-none">He ______ the pain.</li>
        <li className="list-none margin-bottom-20">Anh ấy kiên nhẫn chịu đựng cơn đau.</li>

        <li value="7">Patiently <strong>guided</strong> /ɡaɪdɪd/</li>
        <li className="list-none">The tour guide ______ the group through the museum.</li>
        <li className="list-none margin-bottom-20">Hướng dẫn viên du lịch kiên nhẫn hướng dẫn đoàn qua viện bảo tàng.</li>

        <li value="8">Patiently <strong>observed</strong> /əbˈzɜːrvd/</li>
        <li className="list-none">The scientist ______ the experiment.</li>
        <li className="list-none margin-bottom-20">Nhà khoa học kiên nhẫn quan sát thí nghiệm.</li>

        <li value="9">Patiently <strong>corrected</strong> /kəˈrɛktɪd/</li>
        <li className="list-none">She ______ the student's mistakes.</li>
        <li className="list-none margin-bottom-20">Cô ấy kiên nhẫn sửa lỗi cho học sinh.</li>

        <li value="10">Patiently <strong>nurtured</strong> /ˈnɜːrtʃərd/</li>
        <li className="list-none">They ______ the young plants.</li>
        <li className="list-none margin-bottom-20">Họ kiên nhẫn nuôi dưỡng những cây non.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính kiên nhẫn, không vội vã của một hành động hoặc tình huống. Chúng thường được sử dụng để miêu tả những tình huống cần sự bình tĩnh và kiên trì.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Patiently</strong>" thường đứng trước động từ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này mang nghĩa tích cực, thể hiện sự kiên nhẫn, bình tĩnh.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

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