import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Precisely2(): React.JSX.Element {

  const postId = "Precisely2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-chinh-xac-terms"><mark className="highlight-tertiary-padding-4-8">Tính chính xác</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">precisely
        <sup>
          <Link to="/vocabulary/precisely-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/precisely-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>precisely</strong>" (một cách chính xác) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>
      
          <p className="margin-y-10">

            <strong>Precisely&nbsp;</strong>

            <span className="highlight-255-padding-3-6">

              /prɪˈsaɪs.li/ + /

              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">prėcīsely</Link>/

              <sup>&nbsp;•⬤• (3x)</sup>

            </span>
              
            &nbsp;thường được dùng để mô tả một hành động hoặc trạng thái được thực hiện một cách chính xác, đúng đắn, không có sai sót.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1">Precisely <strong>measureed</strong> /ˈmɛʒərd/</li>
        <li className="list-none">The scientist ______ the chemicals.</li>
        <li className="list-none margin-bottom-20">Nhà khoa học đo lường các hóa chất một cách chính xác.</li>

        <li value="2">Precisely <strong>calculated</strong> /ˈkælkjʊleɪtɪd/</li>
        <li className="list-none">The engineer ______ the dimensions.</li>
        <li className="list-none margin-bottom-20">Kỹ sư tính toán các kích thước một cách chính xác.</li>

        <li value="3">Precisely <strong>defines</strong> /dɪˈfaɪnz/</li>
        <li className="list-none">The law ______ the terms.</li>
        <li className="list-none margin-bottom-20">Luật định nghĩa các điều khoản một cách chính xác.</li>

        <li value="4">Precisely <strong>located</strong> /loʊˈkeɪtɪd/</li>
        <li className="list-none">The map ______ the treasure.</li>
        <li className="list-none margin-bottom-20">Bản đồ xác định vị trí kho báu một cách chính xác.</li>

        <li value="5">Precisely <strong>followed</strong> /ˈfɒloʊd/</li>
        <li className="list-none">The chef ______ the recipe.</li>
        <li className="list-none margin-bottom-20">Đầu bếp tuân theo công thức một cách chính xác.</li>

        <li value="6">Precisely <strong>described</strong> /dɪˈskraɪbd/</li>
        <li className="list-none">The witness ______ the suspect.</li>
        <li className="list-none margin-bottom-20">Nhân chứng miêu tả nghi phạm một cách chính xác.</li>

        <li value="7">Precisely <strong>explained</strong> /ɪkˈspleɪnd/</li>
        <li className="list-none">The teacher ______ the concept.</li>
        <li className="list-none margin-bottom-20">Giáo viên giải thích khái niệm một cách chính xác.</li>

        <li value="8">Precisely <strong>controlled</strong> /kənˈtroʊld/</li>
        <li className="list-none">The machine ______ the temperature.</li>
        <li className="list-none margin-bottom-20">Máy móc kiểm soát nhiệt độ một cách chính xác.</li>

        <li value="9">Precisely <strong>aligned</strong> /əˈlaɪnd/</li>
        <li className="list-none">The parts were ______.</li>
        <li className="list-none margin-bottom-20">Các bộ phận được căn chỉnh một cách chính xác.</li>

        <li value="10">Precisely <strong>timed</strong> /taɪmd/</li>
        <li className="list-none">The event was ______.</li>
        <li className="list-none margin-bottom-20">Sự kiện được định thời gian một cách chính xác.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính chính xác, đúng đắn, không có sai sót. Chúng thường được sử dụng để miêu tả những hành động hoặc trạng thái được thực hiện một cách cẩn thận và đúng đến từng chi tiết.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Precisely</strong>" thường đứng trước động cơ để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này mang nghĩa tích cực, thể hiện sự cẩn thận và độ chính xác cao.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
          
        <div className="post-date no-margin">
          <span>April 15, 2025 · by 💎Gem ·</span>
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