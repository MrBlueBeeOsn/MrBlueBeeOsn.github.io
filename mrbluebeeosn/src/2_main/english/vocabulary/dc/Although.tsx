import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Although(): React.JSX.Element {

  const postId = "Although";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#dc-terms"><mark className="highlight-tertiary-padding-4-8">DC</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Although</h1>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30"><strong>Although</strong> (liên từ): Mặc dù, dẫu cho. Từ này được dùng để mở đầu cho một mệnh đề chỉ sự nhượng bộ, thể hiện một kết quả bất ngờ hoặc tương phản với thực tế được nhắc đến trong mệnh đề đó.</p>

        <ul className="list-square">
      
          <li><strong>______ it rained heavily</strong>, they still went for a walk.</li>
          <li className="list-none"><strong>Mặc dù trời mưa to</strong>, họ vẫn đi dạo.</li>
      
        </ul>

      {/* =============================
            Pronunciation / Phát âm
      ============================= */}

      <h3 className="margin-y-50 text-center">Pronunciation / Phát âm</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: /ɔːlˈðəʊ/ (UK) hoặc /ɑːlˈðoʊ/ (US)</li>
            <li>Phonetic Breakdown: awl-DHOH</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      {/* =============================
            Word Family
      ============================= */}

      <h3 className="margin-y-50 text-center">Word Family</h3>

      <p className="margin-bottom-20">Từ "although" là một liên từ thuần túy và không có các dạng biến đổi trực tiếp như danh từ, động từ hay tính từ trong họ từ của riêng nó. Tuy nhiên, nó có mối quan hệ gốc rễ chặt chẽ với từ Though và các từ mang gốc biểu đạt sự nhượng bộ hoặc tương phản liên quan bao gồm:</p>

        <ul className="list-square">

          <li><strong>Although</strong> (Liên cơ) /ɔːlˈðəʊ/ (UK) hoặc /ɑːlˈðoʊ/ (US)</li>
          <li className="list-none">The room was rather small, <strong>______ it was very clean and comfortable</strong>.</li>
          <li className="margin-bottom-20 list-none">Căn phòng khá nhỏ, <strong>mặc dù nó rất sạch sẽ và thoải mái</strong>.</li>

          <li><strong>Though</strong> (Liên cơ) /ðəʊ/ (UK) hoặc /ðoʊ/ (US)</li>
          <li className="list-none">They decided to go on a picnic, <strong>______ the weather was disappointing</strong>.</li>
          <li className="margin-bottom-20 list-none">Họ đã quyết định đi dã ngoại, <strong>dẫu cho thời tiết thật đáng thất vọng</strong>.</li>

          <li><strong>Though</strong> (Trạng cơ) /ðəʊ/ (UK) hoặc /ðoʊ/ (US)</li>
          <li className="list-none">We completely forgot the map. We managed to find the hotel, ______.</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã hoàn toàn quên mang theo bản đồ. Dẫu vậy, chúng tôi vẫn tìm được khách sạn.</li>

          <li><strong>Albeit</strong> (Liên cơ - Trang trọng) /ˌɔːlˈbiːɪt/</li>
          <li className="list-none">The university accepted the proposal, <strong>______ with certain reservations</strong>.</li>
          <li className="list-none">Trường đại học đã chấp nhận đề xuất, <strong>mặc dù vẫn có những sự dè dặt nhất định</strong>.</li>

        </ul>

      {/* =============================
            Synonyms / Từ đồng nghĩa
      ============================= */}

      <h3 className="margin-y-50 text-center">Synonyms / Từ đồng nghĩa</h3>

      <p className="margin-bottom-20">Dưới đây là các liên từ và cụm từ có chức năng tương tự như "although" nhưng mang sắc thái biểu đạt hoặc cấu trúc ngữ pháp khác nhau.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20"><strong>1. Though</strong> /ðəʊ/ (UK) hoặc /ðoʊ/ (US)</p>

      <p className="text-indent-whole">Thường dùng phổ biến trong văn nói hàng ngày hơn "although", có tính linh hoạt cao vì vừa làm liên từ đứng đầu/giữa câu, vừa làm trạng từ đứng ở cuối câu.</p>

        <ul className="list-square">

          <li><strong>______ she was tired</strong>, she finished the report on time.</li>
          <li className="list-none"><strong>Mặc dù cô ấy mệt</strong>, cô ấy vẫn hoàn thành bản báo cáo đúng hạn.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20"><strong>2. Even though</strong> /ˈiːvn ðəʊ/ (UK) hoặc /ˈiːvn ðoʊ/ (US)</p>

      <p className="text-indent-whole">Mang ý nghĩa mạnh hơn "although", nhấn mạnh sự tương phản rõ rệt hoặc một thực tế gây bất ngờ lớn.</p>

        <ul className="list-square">

          <li><strong>______ he studied hard</strong>, he failed the final exam.</li>
          <li className="list-none"><strong>Mặc dù anh ấy đã học hành chăm chỉ</strong>, anh ấy vẫn trượt kỳ thi cuối kỳ.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20"><strong>3. In spite of</strong> /ɪn spaɪt əv/</p>

      <p className="text-indent-whole">Mặc dù; đây là một cụm giới từ, do đó theo sau nó phải là một Danh cơ, Danh cụm hoặc V-ing (không đi với một mệnh đề).</p>

        <ul className="list-square">

          <li><strong>______ the heavy traffic</strong>, we arrived at the meeting on schedule.</li>
          <li className="list-none"><strong>Mặc dù giao thông ùn tắc</strong>, chúng tôi đã đến cuộc họp đúng lịch trình.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20"><strong>4. Despite</strong> /dɪˈspaɪt/</p>

      <p className="text-indent-whole">Tương tự như "in spite of", đây là một giới từ mang sắc thái trang trọng hơn và theo sau bởi một Danh cơ, Danh cụm hoặc V-ing.</p>

        <ul className="list-square">

          <li><strong>______ having a bad cold</strong>, she performed brilliantly on stage.</li>
          <li className="list-none"><strong>Mặc dù bị cảm lạnh nặng</strong>, cô ấy đã biểu diễn một cách xuất sắc trên sân khấu.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20"><strong>5. Even if</strong> /ˈiːvn ɪf/</p>

      <p className="text-indent-whole">Ngay cả khi, cho dù; dùng để diễn tả một giả định hoặc một điều kiện không ảnh hưởng đến kết quả của mệnh đề chính.</p>

        <ul className="list-square">

          <li><strong>______ you start right now</strong>, you will still miss the train.</li>
          <li className="list-none"><strong>Ngay cả khi bạn bắt đầu ngay bây giờ</strong>, bạn vẫn sẽ lỡ chuyến tàu.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20"><strong>6. Much as</strong> /mʌtʃ æz/ (UK) hoặc /mʌtʃ əz/ (US)</p>

      <p className="text-indent-whole">Mặc dù rất, dù cho rất; thường đi kèm với các động từ chỉ cảm xúc như like, love, want, dislike để nhấn mạnh mức độ của sự nhượng bộ.</p>

        <ul className="list-square">

          <li><strong>______ I would like to stay</strong>, I really must go home now.</li>
          <li className="list-none"><strong>Mặc dù tôi rất muốn ở lại</strong>, tôi thực sự phải về nhà bây giờ rồi.</li>

        </ul>

      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20"><strong>7. While</strong> /waɪl/</p>

      <p className="text-indent-whole">Mặc dù, trong khi; khi đặt ở đầu câu, từ này có thể dùng để thay thế cho "although" nhằm tạo sự đối lập nhẹ nhàng giữa hai sự kiện.</p>

        <ul className="list-square">

          <li><strong>______ I understand your point of view</strong>, I cannot agree with your decision.</li>
          <li className="list-none"><strong>Mặc dù tôi hiểu quan điểm của bạn</strong>, tôi không thể đồng ý với quyết định của bạn.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>May 21, 2026 · by 💎Gem ·</span>
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