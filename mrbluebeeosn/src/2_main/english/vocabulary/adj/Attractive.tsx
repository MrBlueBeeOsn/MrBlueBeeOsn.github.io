import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Attractive(): React.JSX.Element {

  const postId = "Attractive";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adjectives-terms"><mark className="highlight-tertiary-padding-4-8">Adjectives</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Attractive</h1>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30"><strong>Attractive</strong> (tính từ): Lôi cuốn, hấp dẫn, có sức hút. Từ này dùng để chỉ người hoặc vật có những đặc điểm gây ra sự chú ý, hứng thú hoặc thiện cảm.</p>

        <ul className="list-square">
      
          <li>The new job offer came with a very ______ salary.</li>
          <li className="list-none">Lời đề nghị công việc mới đi kèm với một mức lương rất hấp dẫn.</li>
      
        </ul>

      {/* =============================
            Pronunciation / Phát âm
      ============================= */}

      <h3 className="margin-y-50 text-center">Pronunciation / Phát âm</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: /əˈtræk.tɪv/</li>
            <li>Phonetic Breakdown: uh-TRAK-tiv</li>

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

      <p className="margin-bottom-20">Việc nắm vững các từ cùng gốc giúp bạn linh hoạt hơn khi diễn đạt cùng một ý tưởng dưới các loại từ khác nhau</p>

        <ul className="list-square">

          <li><strong>Attractive</strong> (Tính cơ) /əˈtræk.tɪv/</li>
          <li className="list-none">He has a very ______ smile.</li>
          <li className="margin-bottom-20 list-none">Anh ấy có một nụ cười rất cuốn hút.</li>

          <li><strong>Attract</strong> (Động cơ) /əˈtrækt/</li>
          <li className="list-none">Bright colors often ______ butterflies to the garden.</li>
          <li className="margin-bottom-20 list-none">Màu sắc rực rỡ thường thu hút bướm đến vườn.</li>

          <li><strong>Attraction</strong> (Danh cơ) /əˈtrækʃn/</li>
          <li className="list-none">The Eiffel Tower is a major tourist ______ in Paris.</li>
          <li className="margin-bottom-20 list-none">Tháp Eiffel là một điểm thu hút khách du lịch lớn ở Paris.</li>

          <li><strong>Attractiveness</strong> (Danh cơ - Trừu tượng) /əˈtræktɪvnəs/</li>
          <li className="list-none">The physical ______ of the product design helped increase sales.</li>
          <li className="margin-bottom-20 list-none">Sự hấp dẫn về mặt hình thức của thiết kế sản phẩm đã giúp tăng doanh số bán hàng.</li>

          <li><strong>Attractively</strong> (Trạng cơ) /əˈtræktɪvli/</li>
          <li className="list-none">The table was ______ decorated with flowers and candles.</li>
          <li className="list-none">Chiếc bàn được trang trí một cách lôi cuốn với hoa và nến.</li>

        </ul>

      {/* =============================
            Synonyms / Từ đồng nghĩa
      ============================= */}

      <h3 className="margin-y-50 text-center">Synonyms / Từ đồng nghĩa</h3>

      <p className="margin-bottom-20">Dưới đây là các từ có nghĩa gần giống nhưng mang những sắc thái sử dụng khác nhau.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20"><strong>1. Appealing</strong> /əˈpiːlɪŋ/</p>

      <p className="text-indent-whole">Gợi lên sự thích thú hoặc ham muốn; thường dùng cho các ý tưởng hoặc lựa chọn.</p>

        <ul className="list-square">

          <li>The idea of a long vacation is very ______ to me right now.</li>
          <li className="list-none">Ý tưởng về một kỳ nghỉ dài ngày rất hấp dẫn đối với tôi vào lúc này.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20"><strong>2. Alluring</strong> /əˈlʊərɪŋ/</p>

      <p className="text-indent-whole">Có sức quyến rũ mạnh mẽ, thường mang tính huyền bí hoặc cám dỗ.</p>

        <ul className="list-square">

          <li>The tropical island has an ______ atmosphere that draws visitors every year.</li>
          <li className="list-none">Hòn đảo nhiệt đới có một bầu không khí quyến rũ thu hút du khách mỗi năm.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20"><strong>3. Captivating</strong> /ˈkæptɪveɪtɪŋ/</p>

      <p className="text-indent-whole">Làm say đắm, thu hút toàn bộ sự chú ý của một người.</p>

        <ul className="list-square">

          <li>Her ______ performance held the audience’s attention until the very end.</li>
          <li className="list-none">Màn trình diễn say đắm của cô ấy đã giữ được sự chú ý của khán giả cho đến tận cuối cùng.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20"><strong>4. Charming</strong> /ˈtʃɑːmɪŋ/</p>

      <p className="text-indent-whole">Duyên dáng, có sức hút nhẹ nhàng và dễ mến.</p>

        <ul className="list-square">

          <li>We stayed in a ______ little cottage by the sea.</li>
          <li className="list-none">Chúng tôi đã ở trong một ngôi nhà nhỏ duyên dáng bên bờ biển.</li>

        </ul>

      {/* =============================
            5.  
      ============================= */}

      <p className="margin-top-20"><strong>5. Engaging</strong> /ɪnˈɡeɪdʒɪŋ/</p>

      <p className="text-indent-whole">Lôi cuốn, khiến người khác muốn tham gia hoặc tương tác cùng.</p>

        <ul className="list-square">

          <li>The speaker had an ______ personality that made the lecture enjoyable.</li>
          <li className="list-none">Diễn giả có một tính cách lôi cuốn khiến bài giảng trở nên thú vị.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20"><strong>6. Fascinating</strong> /ˈfæsɪneɪtɪŋ/</p>

      <p className="text-indent-whole">Cực kỳ thú vị, khiến người ta không thể rời mắt hay ngừng suy nghĩ về nó.</p>

        <ul className="list-square">

          <li>I found the documentary about deep-sea creatures absolutely ______.</li>
          <li className="list-none">Tôi thấy bộ phim tài liệu về các sinh vật biển sâu hoàn toàn thú vị.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 27, 2026 · by 💎Gem ·</span>
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