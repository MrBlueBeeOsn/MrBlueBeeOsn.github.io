import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Beautiful(): React.JSX.Element {

  const postId = "Beautiful";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adjectives-terms"><mark className="highlight-tertiary-padding-4-8">Adjectives</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Beautiful</h1>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30"><strong>Beautiful</strong> (tính từ): Đẹp, có những phẩm chất mang lại sự hài lòng hoặc thỏa mãn cho các giác quan (đặc biệt là thị giác) hoặc tâm trí. Từ này thường ám chỉ sự hài hòa, xuất sắc hoặc giá trị thẩm mỹ cao.</p>

      {/* =============================
            Pronunciation / Phát âm
      ============================= */}

      <h3 className="margin-y-50 text-center">Pronunciation / Phát âm</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: /ˈbjuː.tɪ.fəl/</li>
            <li>Phonetic Breakdown: BYOO-tih-ful</li>

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

      <p className="margin-bottom-20">Việc hiểu cách chuyển đổi giữa các loại từ giúp bạn linh hoạt hơn trong diễn đạt, đặc biệt là khi áp dụng cấu trúc tập trung vào danh từ để mô tả tính chất.</p>

        <ul className="list-square">

          {/* <li></li>
          <li className="margin-bottom-20 list-none"></li> */}

          <li><strong>Beautiful</strong> (Tính từ) /ˈbjuː.tɪ.fəl/</li>
          <li className="list-none">The sunset over the ocean was truly ______.</li>
          <li className="margin-bottom-20 list-none">Cảnh hoàng hôn trên biển thực sự rất đẹp.</li>

          <li><strong>Beauty</strong> (Danh từ) /ˈbjuːti/</li>
          <li className="list-none">The ______ of the landscape took my breath away.</li>
          <li className="margin-bottom-20 list-none">Vẻ đẹp của phong cảnh đã khiến tôi sững sờ.</li>

          <li><strong>Beautify</strong> (Động từ) /ˈbjuːtɪfaɪ/</li>
          <li className="list-none">They decided to ______ the garden with seasonal flowers.</li>
          <li className="margin-bottom-20 list-none">Họ quyết định làm đẹp khu vườn bằng những loài hoa theo mùa.</li>

          <li><strong>Beautifully</strong> (Trạng từ) /ˈbjuːtɪfəli/</li>
          <li className="list-none">The music was ______ composed and moved the entire audience.</li>
          <li className="margin-bottom-20 list-none">Bản nhạc được sáng tác một cách tuyệt đẹp và đã làm lay động toàn bộ khán giả.</li>

          <li><strong>Beautician</strong> (Danh từ - Chỉ người) /bjuːˈtɪʃn/</li>
          <li className="list-none">The professional ______ prepared the actors for the film..</li>
          <li className="margin-bottom-20 list-none">Chuyên gia thẩm mỹ chuyên nghiệp đã chuẩn bị cho các diễn viên trong bộ phim.</li>

          <li><strong>Beauteous</strong> (Tính từ - Văn chương) /ˈbjuːtiəs/</li>
          <li className="list-none">The poet wrote about the ______ stars in the night sky.</li>
          <li className="list-none">Nhà thơ đã viết về những ngôi sao tuyệt đẹp trên bầu trời đêm.</li>

        </ul>

      {/* =============================
            Synonyms / Từ đồng nghĩa
      ============================= */}

      <h3 className="margin-y-50 text-center">Synonyms / Từ đồng nghĩa</h3>

      <p className="margin-bottom-20">Các từ đồng nghĩa dưới đây cung cấp những sắc thái chính xác hơn tùy thuộc vào ngữ cảnh cụ thể.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20"><strong>1. Gorgeous</strong> /ˈɡɔːrdʒəs/</p>

      <p className="text-indent-whole">Dùng cho vẻ đẹp rực rỡ, lộng lẫy, thường gây ấn tượng mạnh ngay lập tức.</p>

        <ul className="list-square">

          <li>The bride looked absolutely ______ in her lace gown.</li>
          <li className="list-none">Cô dâu trông hoàn toàn rực rỡ trong chiếc váy ren.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20"><strong>2. Stunning</strong> /ˈstʌnɪŋ/</p>

      <p className="text-indent-whole">Ám chỉ vẻ đẹp gây choáng ngợp, khiến người xem sững sờ hoặc bất ngờ.</p>

        <ul className="list-square">

          <li>The penthouse offers a ______ view of the city skyline.</li>
          <li className="list-none">Căn hộ tầng thượng mang đến một tầm nhìn choáng ngợp ra đường chân trời của thành phố.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20"><strong>3. Exquisite</strong> /ɪkˈskwɪzɪt/</p>

      <p className="text-indent-whole">Dùng cho vẻ đẹp tinh tế, sắc sảo hoặc có sự gia công cực kỳ tỉ mỉ.</p>

        <ul className="list-square">

          <li>The museum displayed a collection of ______ hand-painted ceramics.</li>
          <li className="list-none">Bảo tàng trưng bày một bộ sưu tập đồ gốm vẽ tay tinh xảo.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20"><strong>4. Lovely</strong> /ˈlʌvli/</p>

      <p className="text-indent-whole">Gợi lên vẻ đẹp duyên dáng, đáng yêu và mang lại cảm giác dễ chịu, ấm áp.</p>

        <ul className="list-square">

          <li>We had a ______ afternoon walking through the botanical gardens.</li>
          <li className="list-none">Chúng tôi đã có một buổi chiều dễ chịu khi đi dạo qua các vườn bách thảo.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20"><strong>5. Radiant</strong> /ˈreɪdiənt/</p>

      <p className="text-indent-whole">Ám chỉ vẻ đẹp rạng rỡ, tỏa sáng, thường liên quan đến sức khỏe hoặc sự hạnh phúc.</p>

        <ul className="list-square">

          <li>She gave a ______ smile that instantly brightened the room.</li>
          <li className="list-none">Cô ấy nở một nụ cười rạng rỡ khiến căn phòng bừng sáng ngay lập tức.</li>

        </ul>

      {/* =============================
            6. 
      ============================= */}

      <p className="margin-top-20"><strong>6. Aesthetic</strong> /esˈθetɪk/</p>

      <p className="text-indent-whole">Có tính thẩm mỹ, thuộc về cái đẹp hoặc nghệ thuật.</p>

        <ul className="list-square">

          <li>The new furniture was chosen for purely ______ reasons.</li>
          <li className="list-none">Đồ nội thất mới được chọn hoàn toàn vì những lý do thẩm mỹ.</li>

        </ul>

      {/* =============================
            7. 
      ============================= */}

      <p className="margin-top-20"><strong>7. Magnificent</strong> /mæɡˈnɪfɪsnt/</p>

      <p className="text-indent-whole">Dùng cho vẻ đẹp hùng vĩ, ấn tượng hoặc có quy mô tráng lệ.</p>

        <ul className="list-square">

          <li>The ______ architecture of the cathedral dates back to the 12th century.</li>
          <li className="list-none">Kiến trúc hùng vĩ của nhà thờ có niên đại từ thế kỷ 12.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 26, 2026 · by 💎Gem ·</span>
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