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
      
      <h1 className="margin-y-50 text-center">If</h1>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30"><strong>If</strong> (liên từ): Nếu, nếu như, giả sử. Từ này được dùng để mở đầu cho một mệnh đề điều kiện, diễn tả một tình huống giả định, một khả năng có thể xảy ra hoặc một điều kiện cần thiết để một sự việc khác diễn ra. Ngoài ra, trong câu gián tiếp, nó còn mang nghĩa là "liệu có... hay không".</p>

        <ul className="list-square">
      
          <li>______ you study hard, you will pass the exam.</li>
          <li className="list-none">Nếu bạn học hành chăm chỉ, bạn sẽ vượt qua kỳ thi.</li>
      
        </ul>

      {/* =============================
            Pronunciation / Phát âm
      ============================= */}

      <h3 className="margin-y-50 text-center">Pronunciation / Phát âm</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: /ɪf/</li>
            <li>Phonetic Breakdown: if</li>

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

      <p className="margin-bottom-20">Từ "if" là một liên từ ngắn và không có các dạng biến đổi trực tiếp bằng cách thêm tiền tố hay hậu tố. Tuy nhiên, nó nằm trong một nhóm các từ và cụm từ ngữ pháp biểu thị điều kiện hoặc sự giả định có cùng bản chất chức năng:</p>

        <ul className="list-square">

          <li><strong>If</strong> (DC 1) /ɪf/</li>
          <li className="list-none"><strong>If it rains tomorrow</strong>, we will cancel the picnic.</li>
          <li className="margin-bottom-20 list-none"><strong>Nếu ngày mai trời mưa</strong>, chúng tôi sẽ hủy chuyến dã ngoại.</li>

          <li className="list-none">We can go for a walk <strong>______ the rain stops</strong>.</li>
          <li className="margin-bottom-20 list-none">Chúng ta có thể đi dạo <strong>nếu cơn mưa tạnh</strong>.</li>

          <li><strong>If</strong> (DC 2) /ɪf/</li>
          <li className="list-none"><strong>If I had a lot of money</strong>, I would travel around the world.</li>
          <li className="margin-bottom-20 list-none"><strong>Nếu tôi có thật nhiều tiền</strong>, tôi sẽ đi du lịch quanh thế giới.</li>

          <li><strong>If</strong> (DC 3) /ɪf/</li>
          <li className="list-none"><strong>If she had started earlier</strong>, she would not have missed the train.</li>
          <li className="margin-bottom-20 list-none"><strong>Nếu cô ấy bắt đầu sớm hơn</strong>, cô ấy đã không bị lỡ chuyến tàu.</li>

          <li className="list-none"><strong>If you had studied harder yesterday</strong>, you would know the answer now.</li>
          <li className="margin-bottom-20 list-none"><strong>Nếu hôm qua bạn học hành chăm chỉ hơn thì</strong>, bây giờ bạn đã biết câu trả lời rồi</li>

          <li><strong>If only</strong> (Cụm từ cố định - diễn tả ước muốn) /ɪf ˈəʊnli/ (UK) hoặc /ɪf ˈoʊnli/ (US)</li>
          <li className="list-none"><strong>______ I had known the truth earlier</strong>, things would be different.</li>
          <li className="margin-bottom-20 list-none"><strong>Giá mà tôi biết sự thật sớm hơn thì</strong> mọi chuyện đã khác rồi.</li>

          <li><strong>What-ifs</strong> (Danh từ - Thường dùng số nhiều 'what-ifs') /wɒt ɪfs/ (UK) hoặc /wʌt ɪfs/ (US)</li> 
          <li className="list-none">Stop worrying about all the <strong>______</strong> and focus on the present.</li>
          <li className="margin-bottom-20 list-none">Đừng lo lắng về tất cả những điều "<strong>nếu như</strong>" nữa và hãy tập trung vào hiện tại.</li>
          <li className="list-none">Lưu ý ngữ cảnh: Stop worrying về những điều "nếu như" và hãy tập trung vào hiện tại.</li>

        </ul>

      {/* =============================
            Synonyms / Từ đồng nghĩa
      ============================= */}

      <h3 className="margin-y-50 text-center">Synonyms / Từ đồng nghĩa</h3>

      <p className="margin-bottom-20">Dưới đây là các từ và cụm từ có chức năng tương tự như "if" dùng để thiết lập một điều kiện hoặc giả định, kèm theo sắc thái biểu đạt riêng.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20"><strong>1. Provided that</strong> /prəˈvaɪdɪd ðæt/ (hoặc Providing that)</p>

      <p className="text-indent-whole">Với điều kiện là, miễn là; mang sắc thái trang trọng và nhấn mạnh vào điều kiện bắt buộc hơn "if".</p>

        <ul className="list-square">

          <li><strong>______ you return the car by 5 p.m.</strong>, you can borrow it.</li>
          <li className="list-none"><strong>Với điều kiện là bạn trả lại xe trước 5 giờ chiều</strong>, bạn có thể mượn nó.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20"><strong>2. As long as</strong> /æz lɒŋ æz/ (UK) hoặc /æz lɔːŋ æz/ (US)</p>

      <p className="text-indent-whole">Miễn là, chỉ cần; thường dùng phổ biến trong văn nói hàng ngày để đưa ra một điều kiện cụ thể.</p>

        <ul className="list-square">

          <li>You can stay here <strong>______ you keep the room clean</strong>.</li>
          <li className="list-none">Bạn có thể ở lại đây <strong>miễn là bạn giữ phòng sạch sẽ</strong>.</li>

        </ul>
          
      <p className="margin-top-20 text-indent-whole">Về bản chất, đây là cấu trúc so sánh bằng:</p>
      
        <ul className="list-square">
      
          <li>as (thứ nhất): Là trạng từ. Nghĩa là "đến mức".</li>
      
          <li>long: Là tính từ/trạng từ. Nghĩa là "lâu/dài".</li>
      
          <li>as (thứ hai): Là liên từ. Nghĩa là "như".</li>
      
        </ul>
      
      <p className="margin-top-20 text-indent-whole">Gộp lại theo đúng logic: "Lâu đến mức như...".</p>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20"><strong>3. Unless</strong> /ʌnˈles/</p>

      <p className="text-indent-whole">Trừ khi, nếu không; từ này tương đương với cấu trúc "if not".</p>
      <p className="text-indent-whole">"Trừ khi" chính là loại trừ một điều kiện/tình huống.</p>

        <ul className="list-square">

          <li>We will go to the beach <strong>______ it rains tomorrow</strong>.</li>
          <li className="list-none">Chúng tôi sẽ đi tắm biển <strong>trừ khi ngày mai trời mưa</strong>.</li>
          <li className="list-none">Chúng tôi sẽ đi tắm biển <strong>nếu ngày mai trời không mưa</strong>.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20"><strong>4. In case</strong> /ɪn keɪs/</p>

      <p className="text-indent-whole">Phòng khi, trong trường hợp; dùng để diễn tả một hành động chuẩn bị trước cho một tình huống có khả năng xảy ra.</p>

        <ul className="list-square">

          <li>Take an umbrella <strong>______ it rains later</strong>.</li>
          <li className="list-none">Hãy mang theo ô <strong>phòng khi lát nữa trời mưa</strong>.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20"><strong>5. Assuming that</strong> /əˈsjuːmɪŋ ðæt/ (UK) hoặc /əˈsuːmɪŋ ðæt/ (US)</p>

      <p className="text-indent-whole">Giả sử rằng, cứ cho là; dùng khi muốn chấp nhận một giả thuyết là đúng để thảo luận về kết quả của nó.</p>

        <ul className="list-square">

          <li><strong>______ we start on time</strong>, we should finish by noon.</li>
          <li className="list-none"><strong>Giả sử rằng chúng ta bắt đầu đúng giờ</strong>, chúng ta sẽ hoàn thành trước buổi trưa.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20"><strong>6. On condition that</strong> /ɒn kənˈdɪʃn ðæt/ (UK) hoặc /ɑːn kənˈdɪʃn ðæt/ (US)</p>

      <p className="text-indent-whole">Với điều kiện là; một cụm từ rất trang trọng, thường dùng trong các thỏa thuận hoặc văn bản pháp lý.</p>

        <ul className="list-square">

          <li>He was granted bail <strong>______ he stayed in the country</strong>.</li>
          <li className="list-none">Anh ta đã được tại ngoại <strong>với điều kiện là phải ở lại trong nước</strong>.</li>

        </ul>

      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20"><strong>7. Whether</strong> /ˈweðə(r)/</p>

      <p className="text-indent-whole">Liệu... có hay không; dùng thay thế cho "if" khi có sự lựa chọn giữa hai khả năng (thường đi kèm cấu trúc whether... or not), mang sắc thái trang trọng hơn "if".</p>

        <ul className="list-square">

          <li>I don't know <strong>______ she will accept the job offer or not</strong>.</li>
          <li className="list-none">Tôi không biết <strong>liệu cô ấy có chấp nhận lời mời nhận việc đó hay không</strong>.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>May 25, 2025 · by 💎Gem ·</span>
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