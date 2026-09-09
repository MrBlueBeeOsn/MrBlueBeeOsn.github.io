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
      
      <h1 className="margin-y-50 text-center">al<strong>though</strong></h1>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30">al<strong>though</strong> (conJUNCTion): Mặc dù, dẫu cho. Từ này được dùng để mở đầu cho một câu con chỉ sự nhượng bộ, thể hiện một kết quả bất ngờ hoặc tương phản với thực tế được nhắc đến trong câu con đó.</p>

        <ul className="list-square">
      
          <li>[al<strong>though</strong>] it RAINED HEAVily, they STILL WENT for a WALK.</li>
          <li className="list-none">[Mặc dù] trời mưa to, họ vẫn đi dạo.</li>
      
        </ul>

      {/* =============================
            pronunciAtion / Phát âm
      ============================= */}

      <h3 className="margin-y-50 text-center">pronunciAtion / Phát âm</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: [alTHOUGH][al THOUGH] /ɔːlˈðəʊ/ (UK) hoặc /ɑːlˈðoʊ/ (US)</li>
            <li>phoNETic BREAKdown: awl-DHOH</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      {/* =============================
            WORD FAMILy
      ============================= */}

      <h3 className="margin-y-50 text-center">WORD FAMILy</h3>

      <p className="margin-bottom-20">Từ "al<strong>though</strong>" là một liên cơ thuần túy và không có các dạng biến đổi trực tiếp như danh cơ, hành động hay Tính Cơ trong họ từ của riêng nó. Tuy nhiên, nó có mối quan hệ gốc rễ chặt chẽ với từ though và các từ mang gốc biểu đạt sự nhượng bộ hoặc tương phản liên quan bao gồm:</p>

        <ul className="list-square">

          <li>al<strong>though</strong> (conJUNCTion) /ɔːlˈðəʊ/ (UK) hoặc /ɑːlˈðoʊ/ (US)</li>
          <li className="list-none">the ROOM was RATHer SMALL, [al<strong>though</strong>] it was VERy CLEAN and COMFORTable.</li>
          <li className="margin-bottom-20 list-none">Căn phòng khá nhỏ, [mặc dù] nó rất sạch sẽ và thoải mái.</li>

          <li>though (conJUNCTion) /ðəʊ/ (UK) hoặc /ðoʊ/ (US)</li>
          <li className="list-none">they deCIded to GO on a PICnic, [though] the WEATHer was disapPOINting.</li>
          <li className="margin-bottom-20 list-none">Họ đã quyết định đi dã ngoại, [dẫu cho] thời tiết thật đáng thất vọng.</li>

          <li>THOUGH (ADverb) /ðəʊ/ (UK) hoặc /ðoʊ/ (US)</li>
          <li className="list-none">we comPLETely forGOT the MAP. we MANaged to FIND the hoTEL, THOUGH.</li>
          <li className="margin-bottom-20 list-none">Chúng tôi đã hoàn toàn quên mang theo bản đồ. [Dẫu vậy], chúng tôi vẫn tìm được khách sạn.</li>

          <li>al<strong>be</strong>it (conJUNCTion) - Trang trọng /ˌɔːlˈbiːɪt/</li>
          <li className="list-none">the uniVERsity acCEPTed the proPOsal, [al<strong>be</strong>it] with CERtain reserVAtions.</li>
          <li className="list-none">Trường đại học đã chấp nhận đề xuất, [mặc dù] vẫn có những sự dè dặt nhất định.</li>

        </ul>

      {/* =============================
            SYNonyms / Từ đồng nghĩa
      ============================= */}

      <h3 className="margin-y-50 text-center">SYNonyms / Từ đồng nghĩa</h3>

      <p className="margin-bottom-20">Dưới đây là các liên cơ và cụm từ có chức năng tương tự như "al<strong>though</strong>" nhưng mang sắc thái biểu đạt hoặc cấu trúc ngữ pháp khác nhau.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20"><strong>1. Though</strong> /ðəʊ/ (UK) hoặc /ðoʊ/ (US)</p>

      <p className="text-indent-whole">Thường dùng phổ biến trong văn nói hàng ngày hơn "al<strong>though</strong>", có tính linh hoạt cao vì vừa làm liên cơ đứng đầu/giữa câu, vừa làm Trạng Cơ đứng ở cuối câu.</p>

        <ul className="list-square">

          <li>though she was TIred, she FINished the rePORT on TIME.</li>
          <li className="list-none">[Mặc dù] cô ấy mệt, cô ấy vẫn hoàn thành bản báo cáo đúng hạn.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20">2. Even though /ˈiːvn ðəʊ/ (UK) hoặc /ˈiːvn ðoʊ/ (US)</p>

      <p className="text-indent-whole">Mang ý nghĩa mạnh hơn "al<strong>though</strong>", nhấn mạnh sự tương phản rõ rệt hoặc một thực tế gây bất ngờ lớn.</p>

        <ul className="list-square">

          <li>[Even though] he STUDied HARD, he FAILED the FInal exAM.</li>
          <li className="list-none">[Mặc dù] anh ấy đã học hành chăm chỉ, anh ấy vẫn trượt kỳ thi cuối kỳ.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20">3. In spite of /ɪn spaɪt əv/</p>

      <p className="text-indent-whole">Mặc dù; đây là một cụm giới cơ, do đó theo sau nó phải là một Danh cơ, Danh cụm hoặc V-ing (không đi với một câu con).</p>

        <ul className="list-square">

          <li>[in spite of] the HEAVy TRAFfic, we arRIVED at the MEETing on SCHEDule.</li>
          <li className="list-none">[Mặc dù] giao thông ùn tắc, chúng tôi đã đến cuộc họp đúng lịch trình.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20">4. de<strong>spite</strong> /dɪˈspaɪt/</p>

      <p className="text-indent-whole">Tương tự như "in spite of", đây là một giới cơ mang sắc thái trang trọng hơn và theo sau bởi một Danh cơ, Danh cụm hoặc V-ing.</p>

        <ul className="list-square">

          <li>de<strong>spite</strong> HAVing a BAD COLD, she perFORMED BRILliantly on STAGE.</li>
          <li className="list-none">[Mặc dù] bị cảm lạnh nặng, cô ấy đã biểu diễn một cách xuất sắc trên sân khấu.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20">5. Even if /ˈiːvn ɪf/</p>

      <p className="text-indent-whole">Ngay cả khi, cho dù; dùng để diễn tả một giả định hoặc một điều kiện không ảnh hưởng đến kết quả của câu con chính.</p>

        <ul className="list-square">

          <li>[Even if] you START RIGHT NOW, you will STILL MISS the TRAIN.</li>
          <li className="list-none">[Ngay cả khi] bạn bắt đầu ngay bây giờ, bạn vẫn sẽ lỡ chuyến tàu.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20">6. Much as /mʌtʃ æz/ (UK) hoặc /mʌtʃ əz/ (US)</p>

      <p className="text-indent-whole">Mặc dù rất, dù cho rất; thường đi kèm với các hành động chỉ cảm xúc như like, love, want, dislike để nhấn mạnh mức độ của sự nhượng bộ.</p>

        <ul className="list-square">

          <li>[MUCH as] i would LIKE to STAY, i REALly must GO HOME NOW.</li>
          <li className="list-none">[Mặc dù] tôi rất muốn ở lại, tôi thực sự phải về nhà bây giờ rồi.</li>

        </ul>

      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20">7. while /waɪl/</p>

      <p className="text-indent-whole">Mặc dù, trong khi; khi đặt ở đầu câu, từ này có thể dùng để thay thế cho "al<strong>though</strong>" nhằm tạo sự đối lập nhẹ nhàng giữa hai sự kiện.</p>

        <ul className="list-square">

          <li>[while] i underSTAND your POINT of VIEW, i CANnot aGREE with your deCISion.</li>
          <li className="list-none">[Mặc dù] tôi hiểu quan điểm của bạn, tôi không thể đồng ý với quyết định của bạn.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>May 21, 2026 · by 💎GEM ·</span>
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