import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Because(): React.JSX.Element {

  const postId = "Because";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#dc-terms"><mark className="highlight-tertiary-padding-4-8">DC</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Because</h1>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30"><strong>Because</strong> (liên từ): Bởi vì. Từ này được dùng để mở đầu cho một mệnh đề chỉ nguyên nhân, lý do giải thích cho một sự việc hoặc hành động trước đó.</p>
      
        <ul className="list-square">
      
          <li>We stayed indoors <strong>______ it was raining heavily</strong>.</li>
          <li className="list-none">Chúng tôi ở trong nhà <strong>bởi vì trời mưa to</strong>.</li>
      
        </ul>

      {/* =============================
            Pronunciation / Phát âm
      ============================= */}

      <h3 className="margin-y-50 text-center">Pronunciation / Phát âm</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: /bɪˈkɒz/ (UK) hoặc /bɪˈkɔːz/ (US)</li>
            <li>Phonetic Breakdown: bih-KAWZ</li>

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

      <p className="margin-bottom-20">Từ "because" ban đầu được hình thành từ cụm từ gốc "by cause of". Do đó, họ từ của nó tập trung xoay quanh gốc từ gốc là Cause.</p>

        <ul className="list-square">

          <li><strong>Cause</strong> (Danh từ) /kɔːz/</li>
          <li className="list-none">The police are trying to find the ______ of the accident.</li>
          <li className="margin-bottom-20 list-none">Cảnh sát đang cố gắng tìm ra nguyên nhân của vụ tai nạn.</li>

          <li><strong>Cause</strong> (Động từ) /kɔːz/</li>
          <li className="list-none">The heavy rain could ______ severe flooding in low-lying areas.</li>
          <li className="margin-bottom-20 list-none">Trận mưa lớn có thể gây ra lũ lụt nghiêm trọng ở các vùng trũng thấp.</li>

          <li><strong>Causal</strong> (Tính từ) /ˈkɔːzl/</li>
          <li className="list-none">There is a clear ______ link between poverty and lack of education.</li>
          <li className="margin-bottom-20 list-none">Có một mối liên hệ nhân quả rõ ràng giữa nghèo đói và sự thiếu thốn giáo dục.</li>

          <li><strong>Causality</strong> (Danh từ - Trừu tượng) /kɔːˈzæləti/</li>
          <li className="list-none">The study investigates the law of ______ in human behavior.</li>
          <li className="margin-bottom-20 list-none">Nghiên cứu điều tra quy luật nhân quả trong hành vi của con người.</li>

          <li><strong>Causally</strong> (Trạng từ) /ˈkɔːzəli/</li>
          <li className="list-none">The two historical events are ______ related to each other.</li>
          <li className="margin-bottom-20 list-none">Hai sự kiện lịch sử này có mối quan hệ nhân quả với nhau.</li>

          <li><strong>Causation</strong> (Danh từ) /kɔːˈzeɪʃn/</li>
          <li className="list-none">The research proved a strong ______ between smoking and lung disease.</li>
          <li className="list-none">Nghiên cứu đã chứng minh một mối quan hệ nhân quả mạnh mẽ giữa việc hút thuốc và bệnh phổi.</li>

        </ul>

      {/* =============================
            Synonyms / Từ đồng nghĩa
      ============================= */}

      <h3 className="margin-y-50 text-center">Synonyms / Từ đồng nghĩa</h3>

      <p className="margin-bottom-20">Dưới đây là các từ và cụm từ có chức năng tương tự như "because" nhưng mang sắc thái biểu đạt hoặc cấu trúc khác nhau.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20"><strong>1. Since</strong> /sɪns/</p>

      <p className="text-indent-whole">Dùng khi lý do đã được cả người nói lẫn người nghe biết tới, hoặc khi lý do ít quan trọng hơn kết quả.</p>

        <ul className="list-square">

          <li><strong>______ you are already here</strong>, you can help us with dinner.</li>
          <li className="list-none"><strong>Vì bạn đã ở đây rồi</strong>, bạn có thể giúp chúng tôi chuẩn bị bữa tối.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20"><strong>2. As</strong> /æz/</p>

      <p className="text-indent-whole">Tương tự như since, thường mang sắc thái trang trọng hơn một chút và thường đặt mệnh đề nguyên nhân ở đầu câu.</p>

        <ul className="list-square">

          <li><strong>______ the weather was bad</strong>, the outdoor flight was canceled.</li>
          <li className="list-none"><strong>Vì thời thời tiết xấu</strong>, chuyến bay ngoài trời đã bị hủy.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20"><strong>3. Given that</strong> /ˈɡɪvn ðæt/</p>

      <p className="text-indent-whole">Xét đến việc, dựa vào sự thật là; thường dùng khi muốn đưa một sự kiện thực tế làm căn cứ cho kết luận.</p>

        <ul className="list-square">

          <li><strong>______ she has no prior experience</strong>, she did a wonderful job.</li>
          <li className="list-none"><strong>Xét đến việc cô ấy không có kinh nghiệm trước đó</strong>, cô ấy đã làm một công việc tuyệt vời.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20"><strong>4. Now that</strong> /naʊ ðæt/</p>

      <p className="text-indent-whole">Giờ đây khi mà; dùng để chỉ một nguyên nhân mới xuất hiện đem lại một kết quả ở hiện tại hoặc tương lai.</p>

        <ul className="list-square">

          <li><strong>______ the exams are over</strong>, we can finally relax.</li>
          <li className="list-none"><strong>Giờ đây khi các kỳ thi đã qua</strong>, chúng tôi cuối cùng đã có thể thư giãn.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20"><strong>5. Seeing that</strong> /ˈsiːɪŋ ðæt/</p>

      <p className="text-indent-whole">Thấy rằng, bởi vì; thường dùng phổ biến trong văn nói khi lý do hiển hiện ngay trước mắt hoặc vừa được nhận ra.</p>

        <ul className="list-square">

          <li><strong>______ it is getting late</strong>, we should probably head home.</li>
          <li className="list-none"><strong>Thấy rằng trời đang muộn dần</strong>, chúng ta có lẽ nên về nhà thôi.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20"><strong>6. For</strong> /fɔːr/</p>

      <p className="text-indent-whole">Bởi vì; một liên từ mang sắc thái rất trang trọng, mang tính văn học hoặc cổ kính, dùng để đưa ra lý do giải thích cho lời khẳng định trước đó.</p>

        <ul className="list-square">

          <li>We must start early, <strong>______ the journey is long</strong>.</li>
          <li className="list-none">Chúng ta phải khởi hành sớm, <strong>vì cuộc hành trình còn dài</strong>.</li>

        </ul>

      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20"><strong>7. In that</strong> /ɪn ðæt/</p>

      <p className="text-indent-whole">Bởi vì, ở chỗ; dùng để giải thích hoặc làm rõ một nhận định trước đó bằng cách chỉ ra lý do cụ thể.</p>

        <ul className="list-square">

          <li>This computer is unique <strong>______ it can think like a human</strong>.</li>
          <li className="list-none">Chiếc máy tính này độc đáo <strong>ở chỗ nó có thể tư duy như một con người</strong>.</li>

        </ul>

      {/* =============================
            8. 
      ============================= */}

      <p className="margin-top-20"><strong>8. On the grounds that</strong> /ɒn ðə ɡraʊndz ðæt/</p>

      <p className="text-indent-whole">Dựa trên lý do là, bởi vì; thường dùng trong bối cảnh trang trọng hoặc pháp lý khi đưa ra lập luận, bằng chứng.</p>

        <ul className="list-square">

          <li>He was acquitted <strong>______ there was insufficient evidence</strong>.</li>
          <li className="list-none">Anh ta đã được trắng án <strong>dựa trên lý do là không có đủ bằng chứng</strong>.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>May 18, 2026 · by 💎Gem ·</span>
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