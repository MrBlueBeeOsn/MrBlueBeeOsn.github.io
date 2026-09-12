import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function If(): React.JSX.Element {

  const postId = "If";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#dc-terms"><mark className="highlight-tertiary-padding-4-8">DC</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">if</h1>

      <div className="example">
                                            
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#ADverb">ADverb</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#ADjective">ADjective</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#NOUN">NOUN</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30"><strong>if</strong> (conJUNCTion): Nếu, nếu như, giả sử. Từ này được dùng để mở đầu cho một câu con điều kiện, diễn tả một tình huống giả định, một khả năng có thể xảy ra hoặc một điều kiện cần thiết để một sự việc khác diễn ra. Ngoài ra, trong câu gián tiếp, nó còn mang nghĩa là "liệu có... hay không".</p>

        <ul className="list-square">
      
          <li>[if] you STUDy HARD, you will PASS the EXAM.</li>
          <li className="list-none">Nếu bạn học hành chăm chỉ, bạn sẽ vượt qua kỳ thi.</li>
      
        </ul>

      {/* =============================
            pronunciAtion / Phát âm
      ============================= */}

      <h3 className="margin-y-50 text-center">pronunciAtion / Phát âm</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: [if][if] /ɪf/</li>
            <li>phoNETic BREAKdown: if</li>

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

      <p className="margin-bottom-20">Từ "if" là một liên cơ ngắn và không có các dạng biến đổi trực tiếp bằng cách thêm tiền tố hay hậu tố. Tuy nhiên, nó nằm trong một nhóm các từ và cụm từ ngữ pháp biểu thị điều kiện hoặc sự giả định có cùng bản chất chức năng:</p>

        <ul className="list-square">

          <li>if (1) /ɪf/</li>
          <li className="list-none">[if] it RAINS toMORrow, we will CANcel the PICnic.</li>
          <li className="margin-bottom-20 list-none">[Nếu] ngày mai trời mưa, chúng tôi sẽ hủy chuyến dã ngoại.</li>

          <li className="list-none">we can GO for a WALK [if] the RAIN STOPS.</li>
          <li className="margin-bottom-20 list-none">Chúng ta có thể đi dạo [nếu] cơn mưa tạnh.</li>

          <li>if (2) /ɪf/</li>
          <li className="list-none">[if] i had a LOT of MONey, i would TRAVel around the WORLD.</li>
          <li className="margin-bottom-20 list-none">[Nếu] tôi có thật nhiều tiền, tôi sẽ đi du lịch quanh thế giới.</li>

          <li>if (3) /ɪf/</li>
          <li className="list-none">[if] she had STARTed EARlier, she would NOT have MISSED the TRAIN.</li>
          <li className="margin-bottom-20 list-none">[Nếu] cô ấy bắt đầu sớm hơn, cô ấy đã không bị lỡ chuyến tàu.</li>

          <li className="list-none">[if] you had STUDied HARDer YESterday, you would KNOW the ANswer NOW.</li>
          <li className="margin-bottom-20 list-none">[Nếu] hôm qua bạn học hành chăm chỉ hơn thì, bây giờ bạn đã biết câu trả lời rồi</li>

          <li>if Only (Cụm từ cố định - diễn tả ước muốn) /ɪf ˈəʊnli/ (UK) hoặc /ɪf ˈoʊnli/ (US)</li>
          <li className="list-none">[if Only] i had KNOWN the TRUTH EARlier, THINGS would be DIFFERent.</li>
          <li className="margin-bottom-20 list-none">[Giá mà] tôi biết sự thật sớm hơn thì mọi chuyện đã khác rồi.</li>

          <li>WHAT-ifs (NOUN) - Thường dùng số nhiều 'what-ifs' /wɒt ɪfs/ (UK) hoặc /wʌt ɪfs/ (US)</li> 
          <li className="list-none">STOP WORrying about ALL the  [what-ifs] and FOCus on the PRESent.</li>
          <li className="margin-bottom-20 list-none">Đừng lo lắng về tất cả những điều [nếu như] nữa và hãy tập trung vào hiện tại.</li>
          <li className="list-none">Lưu ý ngữ cảnh: Stop worrying về những điều "nếu như" và hãy tập trung vào hiện tại.</li>

        </ul>

      {/* =============================
            SYNonyms / Từ đồng nghĩa
      ============================= */}

      <h3 className="margin-y-50 text-center">SYNonyms / Từ đồng nghĩa</h3>

      <p className="margin-bottom-20">Dưới đây là các từ và cụm từ có chức năng tương tự như "if" dùng để thiết lập một điều kiện hoặc giả định, kèm theo sắc thái biểu đạt riêng.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20">1. proVIded that /prəˈvaɪdɪd ðæt/ (hoặc proVIding that)</p>

      <p className="text-indent-whole">Với điều kiện là, miễn là; mang sắc thái trang trọng và nhấn mạnh vào điều kiện bắt buộc hơn "if".</p>

        <ul className="list-square">

          <li>[proVIded that] you reTURN the CAR by 5 p.M., you can BORrow it.</li>
          <li className="list-none">[Với điều kiện là] bạn trả lại xe trước 5 giờ chiều, bạn có thể mượn nó.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20">2. as LONG as /æz lɒŋ æz/ (UK) hoặc /æz lɔːŋ æz/ (US)</p>

      <p className="text-indent-whole">Miễn là, chỉ cần; thường dùng phổ biến trong văn nói hàng ngày để đưa ra một điều kiện cụ thể.</p>

        <ul className="list-square">

          <li>you can STAY HERE [as LONG as] you KEEP the ROOM CLEAN.</li>
          <li className="list-none">Bạn có thể ở lại đây [miễn là] bạn giữ phòng sạch sẽ.</li>

        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">Gộp lại theo đúng logic: "Lâu đến mức như...".</p>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20">3. un<strong>less</strong> /ʌnˈles/</p>

      <p className="text-indent-whole">Ngoại trừ khi, nếu không; từ này tương đương với cấu trúc "if not".</p>
      <p className="text-indent-whole">"Ngoại trừ khi" chính là loại trừ một điều kiện/tình huống.</p>

        <ul className="list-square">

          <li>we will GO to the BEACH [un<strong>less</strong>] it RAINS toMORrow.</li>
          <li className="list-none">Chúng tôi sẽ đi tắm biển [ngoại trừ khi] ngày mai trời mưa.</li>
          <li className="list-none">Chúng tôi sẽ đi tắm biển [nếu] ngày mai trời [không] mưa.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20">4. in case /ɪn keɪs/</p>

      <p className="text-indent-whole">Phòng khi, trong trường hợp; dùng để diễn tả một hành động chuẩn bị trước cho một tình huống có khả năng xảy ra.</p>

        <ul className="list-square">

          <li>TAKE an umBRELla [in case] it RAINS LAter.</li>
          <li className="list-none">Hãy mang theo ô [phòng khi] lát nữa trời mưa.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20">5. asSUMing that /əˈsjuːmɪŋ ðæt/ (UK) hoặc /əˈsuːmɪŋ ðæt/ (US)</p>

      <p className="text-indent-whole">Giả sử rằng, cứ cho là; dùng khi muốn chấp nhận một giả thuyết là đúng để thảo luận về kết quả của nó.</p>

        <ul className="list-square">

          <li>[asSUMing that] we START on TIME, we should FINish by NOON.</li>
          <li className="list-none">[Giả sử rằng] chúng ta bắt đầu đúng giờ, chúng ta sẽ hoàn thành trước buổi trưa.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20">6. On conDITion that /ɒn kənˈdɪʃn ðæt/ (UK) hoặc /ɑːn kənˈdɪʃn ðæt/ (US)</p>

      <p className="text-indent-whole">Với điều kiện là; một cụm từ rất trang trọng, thường dùng trong các thỏa thuận hoặc văn bản pháp lý.</p>

        <ul className="list-square">

          <li>he was GRANTed BAIL [on conDITion that] he STAYED in the COUNtry.</li>
          <li className="list-none">Anh ta đã được tại ngoại [với điều kiện là] phải ở lại trong nước.</li>

        </ul>

      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20">7. <strong>wheth</strong>er /ˈweðə(r)/</p>

      <p className="text-indent-whole">Liệu... có hay không; dùng thay thế cho "if" khi có sự lựa chọn giữa hai khả năng (thường đi kèm cấu trúc whether... or not), mang sắc thái trang trọng hơn "if".</p>

        <ul className="list-square">

          <li>i DON'T KNOW [<strong>wheth</strong>er] she will acCEPT the JOB OFfer or NOT.</li>
          <li className="list-none">Tôi không biết <strong>liệu</strong> cô ấy có chấp nhận lời mời nhận việc đó hay không.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>May 25, 2025 · by 💎GEM ·</span>
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