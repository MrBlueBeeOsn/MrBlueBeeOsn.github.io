import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Grateful(): React.JSX.Element {

  const postId = "Grateful";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adjectives-terms"><mark className="highlight-tertiary-padding-4-8">Adjectives</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Grateful</h1>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30"><strong>Grateful</strong> (tính từ): Biết ơn, cảm kích. Từ này thể hiện lòng biết ơn hoặc sự trân trọng đối với những gì người khác đã làm cho mình hoặc những điều tốt đẹp mà mình nhận được.</p>

        <ul className="list-square">
      
          <li>I am deeply ______ for your support during this difficult time.</li>
          <li className="list-none">Tôi vô cùng biết ơn sự hỗ trợ của bạn trong khoảng thời gian khó khăn này.</li>
      
        </ul>

      {/* =============================
            Pronunciation / Phát âm
      ============================= */}

      <h3 className="margin-y-50 text-center">Pronunciation / Phát âm</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: /ˈɡreɪt.fəl/</li>
            <li>Phonetic Breakdown: GRAYT-ful</li>

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

      <p className="margin-bottom-20">Việc nắm vững các từ cùng gốc giúp bạn diễn đạt linh hoạt hơn qua các cấu trúc ngữ pháp khác nhau.</p>

        <ul className="list-square">

          <li><strong>Grateful</strong> (Tính cơ) /ˈɡreɪt.fəl/</li>
          <li className="list-none">She felt ______ for the warm hospitality of her hosts.</li>
          <li className="margin-bottom-20 list-none">Cô cảm thấy biết ơn vì sự hiếu khách nồng hậu của những người chủ nhà.</li>

          <li><strong>Gratefully</strong> (Trạng cơ) /ˈɡreɪt.fə.li/</li>
          <li className="list-none">He ______ accepted the offer of a hot meal.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã trân trọng đón nhận lời đề nghị về một bữa ăn nóng sốt.</li>

          <li><strong>Gratitude</strong> (Danh cơ) /ˈɡræt.ɪ.tuːd/</li>
          <li className="list-none">The simplest way to express your ______ is by saying thank you.</li>
          <li className="margin-bottom-20 list-none">Cách đơn giản nhất để bày tỏ lòng biết ơn của bạn là nói lời cảm ơn.</li>

          <li><strong>Gratefulness</strong> (Danh cơ) /ˈɡreɪt.fəl.nəs/</li>
          <li className="list-none">A deep sense of ______ filled her heart when she saw her family safe.</li>
          <li className="list-none">Một cảm giác biết ơn sâu sắc tràn ngập trái tim cô khi thấy gia đình mình bình an.</li>

        </ul>

      {/* =============================
            Synonyms / Từ đồng nghĩa
      ============================= */}

      <h3 className="margin-y-50 text-center">Synonyms / Từ đồng nghĩa</h3>

      <p className="margin-bottom-20">Các từ đồng nghĩa dưới đây cung cấp những sắc thái chính xác hơn tùy thuộc vào ngữ cảnh cụ thể.</p>

      {/* =============================
            1. 
      ============================= */}

      <p className="margin-top-20"><strong>1. Thankful</strong> /ˈθæŋk.fəl/</p>

      <p className="text-indent-whole">Biết ơn, thường đi kèm cảm giác vui mừng hoặc nhẹ nhõm vì một điều tồi tệ đã không xảy ra hoặc một điều tốt đẹp đã đến.</p>

        <ul className="list-square">

          <li>We were ______ that the storm passed without causing any damage.</li>
          <li className="list-none">Chúng tôi cảm thấy biết ơn vì cơn bão đã qua đi mà không gây ra bất kỳ thiệt hại nào.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20"><strong>2. Appreciative</strong> /əˈpriː.ʃə.tɪv/</p>

      <p className="text-indent-whole">Biết trân trọng, thể hiện sự tán thưởng và hiểu rõ giá trị của một hành động hoặc sự giúp đỡ.</p>

        <ul className="list-square">

          <li>The company is highly ______ of your hard work and dedication.</li>
          <li className="list-none">Công ty rất trân trọng sự chăm chỉ và cống hiến của bạn.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20"><strong>3. Obliged</strong> /əˈblaɪdʒd/</p>

      <p className="text-indent-whole">Biết ơn hoặc cảm thấy có bổn phận phải cảm ơn ai đó vì một ân huệ, thường dùng trong bối cảnh trang trọng.</p>

        <ul className="list-square">

          <li>I would be much ______ if you could send me the project details.</li>
          <li className="list-none">Tôi sẽ rất biết ơn nếu bạn có thể gửi cho tôi các chi tiết của dự án.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20"><strong>4. Indebted</strong> /ɪnˈdet.ɪd/</p>

      <p className="text-indent-whole">Mang ơn, biết ơn sâu sắc vì ai đó đã giúp đỡ mình vượt qua hoàn cảnh ngặt nghèo (như thể mắc một món nợ ân nghĩa).</p>

        <ul className="list-square">

          <li>I am forever ______ to the doctors who saved my life.</li>
          <li className="list-none">Tôi mãi mãi mang ơn các bác sĩ đã cứu mạng tôi.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20"><strong>5. Beholden</strong> /bɪˈhəʊl.dən/</p>

      <p className="text-indent-whole">Mắc nợ ân nghĩa, cảm thấy bị ràng buộc hoặc phụ thuộc vào ai đó do nhận sự giúp đỡ từ họ.</p>

        <ul className="list-square">

          <li>She did not want to be ______ to anyone for her financial success.</li>
          <li className="list-none">Cô không muốn phải mắc nợ bất kỳ ai cho sự thành công tài chính của mình.</li>

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