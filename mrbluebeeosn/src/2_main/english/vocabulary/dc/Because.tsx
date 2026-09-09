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
      
      <h1 className="margin-y-50 text-center">be<strong>cause</strong></h1>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30">be<strong>cause</strong> (conJUNCTion): Bởi vì. Từ này được dùng để mở đầu cho một câu con chỉ nguyên nhân, lý do giải thích cho một sự việc hoặc hành động trước đó.</p>
      
        <ul className="list-square">
      
          <li>we STAYED inDOORS [because] it was RAIning HEAVily.</li>
          <li className="list-none">Chúng tôi ở trong nhà [bởi vì] trời mưa to.</li>
      
        </ul>

      {/* =============================
            pronunciAtion / Phát âm
      ============================= */}

      <h3 className="margin-y-50 text-center">pronunciAtion / Phát âm</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: [beCAUSE][be CAUSE] /bɪˈkɒz/ (UK) hoặc /bɪˈkɔːz/ (US)</li>
            <li>phoNETic BREAKdown: bih-KAWZ</li>

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

      <p className="margin-bottom-20">Từ "be<strong>cause</strong>" ban đầu được hình thành từ cụm từ gốc "by CAUSE of". Do đó, họ từ của nó tập trung xoay quanh gốc từ gốc là CAUSE.</p>

        <ul className="list-square">

          <li>be<strong>cause</strong> (conJUNCTion) /bɪˈkɒz/ (UK) hoặc /bɪˈkɔːz/ (US)</li>
          <li className="list-none">i PASSED the exAM [be<strong>cause</strong>] i STUDied HARD EVERy NIGHT.</li>
          <li className="margin-bottom-20 list-none">Tôi đã vượt qua kỳ thi [bởi vì] tôi học hành chăm chỉ mỗi tối.</li>
          
          <li>be<strong>cause</strong> of (prepoSITion) /bɪˈkɒz əv/ (UK) hoặc /bɪˈkɔːz əv/ (US)</li>
          <li className="list-none">the FLIGHT was deLAYED [be<strong>cause</strong> of] the THICK FOG.</li>
          <li className="margin-bottom-20 list-none">Chuyến bay đã bị hoãn [vì] sương mù dày đặc.</li>
          
          <li>CAUSE of (NOUN) /kɔːz/</li>
          <li className="list-none">the poLICE are TRYing to FIND the [CAUSE of] the ACcident.</li>
          <li className="margin-bottom-20 list-none">Cảnh sát đang cố gắng tìm ra [nguyên nhân] của vụ tai nạn.</li>

          <li>CAUSE (VERB) /kɔːz/</li>
          <li className="list-none">the HEAVy RAIN could [CAUSE] seVERE FLOODing in LOW-LYing AReas.</li>
          <li className="margin-bottom-20 list-none">Trận mưa lớn có thể [gây ra] lũ lụt nghiêm trọng ở các vùng trũng thấp.</li>

          <li>CAUsal (ADjective) /ˈkɔːzl/</li>
          <li className="list-none">there is a CLEAR [CAUsal] LINK between POVerty and LACK of eduCAtion.</li>
          <li className="margin-bottom-20 list-none">Có một mối liên hệ [nhân quả] rõ ràng giữa nghèo đói và sự thiếu thốn giáo dục.</li>

          <li>cauSALity (NOUN) - Trừu tượng /kɔːˈzæləti/</li>
          <li className="list-none">the STUDy inVEStigates the LAW of [cauSALity] in HUman beHAvior.</li>
          <li className="margin-bottom-20 list-none">Nghiên cứu điều tra quy luật [nhân quả] trong hành vi của con người.</li>

          <li>CAUsally (ADverb) /ˈkɔːzəli/</li>
          <li className="list-none">the TWO hisTORical eVENTS are [CAUsally] reLAted to EACH OTHer.</li>
          <li className="margin-bottom-20 list-none">Hai sự kiện lịch sử này có mối quan hệ [nhân quả] với nhau.</li>

          <li>cauSAtion (NOUN) /kɔːˈzeɪʃn/</li>
          <li className="list-none">the REsearch PROVED a STRONG [cauSAtion] between SMOking and LUNG diSEASE.</li>
          <li className="list-none">Nghiên cứu đã chứng minh một [mối quan hệ nhân quả] mạnh mẽ giữa việc hút thuốc và bệnh phổi.</li>

        </ul>

      {/* =============================
            SYNonyms / Từ đồng nghĩa
      ============================= */}

      <h3 className="margin-y-50 text-center">SYNonyms / Từ đồng nghĩa</h3>

      <p className="margin-bottom-20">Dưới đây là các từ và cụm từ có chức năng tương tự như "because" nhưng mang sắc thái biểu đạt hoặc cấu trúc khác nhau.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20">1. Since /sɪns/</p>

      <p className="text-indent-whole">Dùng khi lý do đã được cả người nói lẫn người nghe biết tới, hoặc khi lý do ít quan trọng hơn kết quả.</p>

        <ul className="list-square">

          <li>[since] you are alREADy HERE, you can HELP us with DINner.</li>
          <li className="list-none">[Vì] bạn đã ở đây rồi, bạn có thể giúp chúng tôi chuẩn bị bữa tối.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20">2. as /æz/</p>

      <p className="text-indent-whole">Tương tự như since, thường mang sắc thái trang trọng hơn một chút và thường đặt câu con nguyên nhân ở đầu câu.</p>

        <ul className="list-square">

          <li>[as] the WEAther was BAD, the OUTdoor FLIGHT was CANceled.</li>
          <li className="list-none">[Vì] thời thời tiết xấu, chuyến bay ngoài trời đã bị hủy.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20">3. GIVen that /ˈɡɪvn ðæt/</p>

      <p className="text-indent-whole">Xét đến việc, dựa vào sự thật là; thường dùng khi muốn đưa một sự kiện thực tế làm căn cứ cho kết luận.</p>

        <ul className="list-square">

          <li>[GIVen that] she has no PRIor exPErience, she DID a WONderful JOB.</li>
          <li className="list-none">[Xét đến việc] cô ấy không có kinh nghiệm trước đó, cô ấy đã làm một công việc tuyệt vời.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20">4. NOW that /naʊ ðæt/</p>

      <p className="text-indent-whole">Giờ đây khi mà; dùng để chỉ một nguyên nhân mới xuất hiện đem lại một kết quả ở hiện tại hoặc tương lai.</p>

        <ul className="list-square">

          <li>[NOW that] the exAMS are OVer, we can FInally reLAX.</li>
          <li className="list-none">[Giờ đây khi] các kỳ thi đã qua, chúng tôi cuối cùng đã có thể thư giãn.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20">5. SEEing that /ˈsiːɪŋ ðæt/</p>

      <p className="text-indent-whole">Thấy rằng, bởi vì; thường dùng phổ biến trong văn nói khi lý do hiển hiện ngay trước mắt hoặc vừa được nhận ra.</p>

        <ul className="list-square">

          <li>[SEEing that] it is getting LATE, we should PROBably HEAD HOME.</li>
          <li className="list-none">[Thấy rằng] trời đang muộn dần, chúng ta có lẽ nên về nhà thôi.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20">6. for /fɔːr/</p>

      <p className="text-indent-whole">Bởi vì; một liên cơ mang sắc thái rất trang trọng, mang tính văn học hoặc cổ kính, dùng để đưa ra lý do giải thích cho lời khẳng định trước đó.</p>

        <ul className="list-square">

          <li>we must START EARly, [for] the JOURney is LONG.</li>
          <li className="list-none">Chúng ta phải khởi hành sớm, [vì] cuộc hành trình còn dài.</li>

        </ul>

      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20">7. In that /ɪn ðæt/</p>

      <p className="text-indent-whole">Bởi vì, ở chỗ; dùng để giải thích hoặc làm rõ một nhận định trước đó bằng cách chỉ ra lý do cụ thể.</p>

        <ul className="list-square">

          <li>this comPUter is uNIQUE [in that] it can THINK like a HUman.</li>
          <li className="list-none">Chiếc máy tính này độc đáo [ở chỗ] nó có thể tư duy như một con người.</li>

        </ul>

      {/* =============================
            8. 
      ============================= */}

      <p className="margin-top-20">8. On the GROUNDS that /ɒn ðə ɡraʊndz ðæt/</p>

      <p className="text-indent-whole">Dựa trên lý do là, bởi vì; thường dùng trong bối cảnh trang trọng hoặc pháp lý khi đưa ra lập luận, bằng chứng.</p>

        <ul className="list-square">

          <li>he was acQUITTED [on the GROUNDS that] there was insufFICient EVidence.</li>
          <li className="list-none">Anh ta đã được trắng án [dựa trên lý do là] không có đủ bằng chứng.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>May 18, 2026 · by 💎GEM ·</span>
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