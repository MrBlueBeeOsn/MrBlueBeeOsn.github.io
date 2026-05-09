import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Cautiously1(): React.JSX.Element {

  const postId = "Cautiously1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-can-than-terms"><mark className="highlight-tertiary-padding-4-8">Tính cẩn thận</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">cautiously
        <sup><Link to="/vocabulary/cautiously-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/cautiously-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>cautiously</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Cautiously</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈkɔː.ʃəs.li/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">cā̄utiơusly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng từ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Một cách thận trọng, cẩn thận, dè dặt</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>cautiously</strong>" miêu tả cách một hành động được thực hiện hoặc một tình huống được tiếp cận với sự cẩn trọng, chú ý đến những nguy hiểm hoặc vấn đề tiềm ẩn. Nó thể hiện sự đề phòng và cân nhắc kỹ lưỡng trước khi hành động.</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>He ______ approached the stray dog.</li>
          <li className="margin-bottom-20 list-none">Anh ấy thận trọng tiếp cận con chó lạc.</li>

          <li>She ______ opened the door, not knowing who was on the other side.</li>
          <li className="margin-bottom-20 list-none">Cô ấy cẩn thận mở cửa, không biết ai ở bên kia.</li>

          <li>The company is ______ optimistic about the new product launch.</li>
          <li className="list-none">Công ty thận trọng lạc quan về việc ra mắt sản phẩm mới.</li>

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

          <li>Cautious (adj) /ˈkɔː.ʃəs/</li>
          <li className="list-none">Be ______ when crossing the street.</li>
          <li className="margin-bottom-20 list-none">Hãy thận trọng khi băng qua đường.</li>

          <li className="list-none">She is a ______ investor.</li>
          <li className="margin-bottom-20 list-none">Cô ấy là một nhà đầu tư thận trọng.</li>

          <li>Caution (n) /ˈkɔː.ʃən/</li>
          <li className="list-none">Exercise ______ when handling chemicals.</li>
          <li className="margin-bottom-20 list-none">Hãy thận trọng khi xử lý hóa chất.</li>

          <li>Cautioned (v) /ˈkɔː.ʃən/</li>
          <li className="list-none">The police ______ him about his speed.</li>
          <li className="list-none">Cảnh sát đã cảnh báo anh ấy về tốc độ lái xe.</li>

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

          <li><Link to="/vocabulary/carefully-1">Carefully</Link> /ˈkeə.fəl.i/</li>
          <li className="list-none">Read the instructions ______.</li>
          <li className="margin-bottom-20 list-none">Hãy đọc kỹ hướng dẫn.</li>

          <li>Prudently /ˈpruː.dənt.li/</li>
          <li className="list-none">He invested his money ______.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã đầu tư tiền một cách khôn ngoan.</li>

          <li>Warily /ˈweə.rə.li/</li>
          <li className="list-none">She eyed the stranger ______.</li>
          <li className="margin-bottom-20 list-none">Cô ấy nhìn người lạ một cách cảnh giác.</li>

          <li>Circumspectly /ˈsɜːr.kəm.spekt.li/</li>
          <li className="list-none">He spoke ______ about the sensitive issue.</li>
          <li className="list-none">Anh ấy đã nói một cách thận trọng về vấn đề nhạy cảm.</li>

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

          <li>Carelessly /ˈkeə.ləs.li/</li>
          <li className="list-none">He ______ broke the vase.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã bất cẩn làm vỡ chiếc bình.</li>

          <li>Recklessly /ˈrek.ləs.li/</li>
          <li className="list-none">He drove ______ through the city.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã lái xe liều lĩnh qua thành phố.</li>

          <li>Impulsively /ɪmˈpʌl.sɪv.li/</li>
          <li className="list-none">She bought the dress ______.</li>
          <li className="margin-bottom-20 list-none">Cô ấy đã mua chiếc váy một cách bốc đồng.</li>

          <li>Rashly /ˈræʃ.li/</li>
          <li className="list-none">He acted ______.</li>
          <li className="list-none">Anh ấy đã hành động một cách hấp tấp.</li>

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

      <p className="text-indent-whole">Hình dung một người đi trên băng mỏng, một con mèo rình mồi, hoặc một người mở một gói hàng lạ một cách chậm rãi.</p>

        <ul className="list-square">

          <li>He walked ______ on the thin ice.</li>
          <li className="margin-bottom-20 list-none">Anh ấy bước đi thận trọng trên lớp băng mỏng.</li>

          <li>The cat moved ______ as it stalked its prey.</li>
          <li className="margin-bottom-20 list-none">Con mèo rình mồi một cách thận trọng.</li>

          <li>She opened the strange package ______.</li>
          <li className="list-none">Cô ấy mở gói hàng lạ một cách thận trọng.</li>

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

      <p className="text-indent-whole">Tạo các câu liên quan đến những tình huống bạn thấy cần sự thận trọng.</p>

        <ul className="list-square">

          <li>Approach a wild animal ______.</li>
          <li className="list-none">Hãy tiếp cận động vật hoang dã một cách thận trọng.</li>

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

      <p className="text-indent-whole margin-bottom-20">Chú ý đến những hành động đòi hỏi sự cẩn thận trong cuộc sống hàng ngày và cố gắng sử dụng từ này để mô tả chúng.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>He approached the dog.</li>
            <li className="list-none margin-bottom-20">Anh ấy đã tiếp cận con chó.</li>

            <li value="2">He ______ approached the stray dog.</li>
            <li className="list-none margin-bottom-20">Anh ấy thận trọng tiếp cận con chó lạc.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: <span className="highlight-255-padding-0-4">Nhấn mạnh sự cẩn trọng</span> vì con chó có thể nguy hiểm.</p>
      
      </div>

          <ol>

            <li>She opened the door.</li>
            <li className="list-none margin-bottom-20">Cô ấy đã mở cửa.</li>

            <li value="2">She ______ opened the door, not knowing who was on the other side.</li>
            <li className="list-none margin-bottom-20">Cô ấy cẩn thận mở cửa, không biết ai ở bên kia.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

          <p className="margin-y-10">Thể hiện sự đề phòng trước một tình huống không chắc chắn.</p>

      </div>

          <ol>

            <li>The company is optimistic about the new product launch.</li>
            <li className="list-none margin-bottom-20">Công ty lạc quan về việc ra mắt sản phẩm mới.</li>

            <li value="2">The company is ______ optimistic about the new product launch.</li>
            <li className="list-none margin-bottom-20">Công ty thận trọng lạc quan về việc ra mắt sản phẩm mới.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Chỉ sự lạc quan nhưng vẫn ý thức được những rủi ro tiềm ẩn.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>Cautiously</strong>" thường liên quan đến việc tránh rủi ro và đảm bảo an toàn.</li>

          <li>Nó thể hiện sự cân nhắc và suy nghĩ trước khi hành động.</li>

          <li className="margin-bottom-20">Cần phân biệt với các từ đồng nghĩa khác về mức độ nghi ngờ hoặc sự kỹ lưỡng (ví dụ: "warily" mang ý nghĩa nghi ngờ cao hơn "<strong>cautiously</strong>").</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>May 12, 2025 · by 💎Gem ·</span>
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