import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function GRATEful(): React.JSX.Element {

  const postId = "GRATEful";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adjectives-terms"><mark className="highlight-tertiary-padding-4-8">ADjectives</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">[GRATEful]</h1>

      {/* This is the content of Vocabulary Term. */}

      <p className="margin-bottom-30">[<strong>GRATEful</strong>] (ADjective): Biết ơn, cảm kích. Từ này thể hiện lòng biết ơn hoặc sự trân trọng đối với những gì người khác đã làm cho mình hoặc những điều tốt đẹp mà mình nhận được.</p>

        <ul className="list-square">
      
          <li>i am DEEPly [GRATEful] for your supPORT during this DIFFicult TIME.</li>
          <li className="list-none">Tôi vô cùng biết ơn sự hỗ trợ của bạn trong khoảng thời gian khó khăn này.</li>
      
        </ul>

      {/* =============================
            Pronunciation / Phát âm
      ============================= */}

      <h3 className="margin-y-50 text-center">Pronunciation / Phát âm</h3>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <ul className="list-square padding-left-40">

            <li>IPA: [GRATEful][GRĀTE ful] /ˈɡreɪt.fəl/</li>
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

          <li>[<strong>GRATEful</strong>] (ADjective) /ˈɡreɪt.fəl/</li>
          <li className="list-none">she FELT [GRATEful] for the WARM hospiTALity of her HOSTS.</li>
          <li className="margin-bottom-20 list-none">Cô cảm thấy biết ơn vì sự hiếu khách nồng hậu của những người chủ nhà.</li>

          <li>[<strong>GRATEfully</strong>] (ADverb) /ˈɡreɪt.fə.li/</li>
          <li className="list-none">he [GRATEfully] acCEPted the OFFer of a HOT MEAL.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đã trân trọng đón nhận lời đề nghị về một bữa ăn nóng sốt.</li>

          <li>[<strong>GRATitude</strong>] (NOUN) /ˈɡræt.ɪ.tuːd/</li>
          <li className="list-none">the SIMplest WAY to exPRESS your [GRATitude] is by SAYing THANK YOU.</li>
          <li className="margin-bottom-20 list-none">Cách đơn giản nhất để bày tỏ lòng biết ơn của bạn là nói lời cảm ơn.</li>

          <li>[<strong>GRATEfulness</strong>] (NOUN) /ˈɡreɪt.fəl.nəs/</li>
          <li className="list-none">a DEEP SENSE of [GRATEfulness] FILLED her HEART when she SAW her FAMily SAFE.</li>
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

      <p className="margin-top-20"><strong>1. [THANKful] </strong> (ADjective) /ˈθæŋk.fəl/</p>

      <p className="text-indent-whole">Biết ơn, thường đi kèm cảm giác vui mừng hoặc nhẹ nhõm vì một điều tồi tệ đã không xảy ra hoặc một điều tốt đẹp đã đến.</p>

        <ul className="list-square">

          <li>we were [THANKful] that the STORM PASSED without CAUSing any DAMage.</li>
          <li className="list-none">Chúng tôi cảm thấy biết ơn vì cơn bão đã qua đi mà không gây ra bất kỳ thiệt hại nào.</li>

        </ul>

      {/* =============================
            2. 
      ============================= */}

      <p className="margin-top-20"><strong>2. [apPREciative] </strong> (ADjective) /əˈpriː.ʃə.tɪv/</p>

      <p className="text-indent-whole">Biết trân trọng, thể hiện sự tán thưởng và hiểu rõ giá trị của một hành động hoặc sự giúp đỡ.</p>

        <ul className="list-square">

          <li>the COMpany is HIGHly [apPREciative] of your HARD WORK and dediCAtion.</li>
          <li className="list-none">Công ty rất trân trọng sự chăm chỉ và cống hiến của bạn.</li>

        </ul>

      {/* =============================
            3. 
      ============================= */}

      <p className="margin-top-20"><strong>3. [obLIGED] </strong> (ADjective) /əˈblaɪdʒd/</p>

      <p className="text-indent-whole">Biết ơn hoặc cảm thấy có bổn phận phải cảm ơn ai đó vì một ân huệ, thường dùng trong bối cảnh trang trọng.</p>

        <ul className="list-square">

          <li>i would be MUCH [obLIGED] if you could SEND me the PROject DEtails.</li>
          <li className="list-none">Tôi sẽ rất biết ơn nếu bạn có thể gửi cho tôi các chi tiết của dự án.</li>

        </ul>

      {/* =============================
            4. 
      ============================= */}

      <p className="margin-top-20"><strong>4. [inDEBTed] </strong> (ADjective) /ɪnˈdet.ɪd/</p>

      <p className="text-indent-whole">Mang ơn, biết ơn sâu sắc vì ai đó đã giúp đỡ mình vượt qua hoàn cảnh ngặt nghèo (như thể mắc một món nợ ân nghĩa).</p>

        <ul className="list-square">

          <li>i am forEVer [inDEBTed] to the DOCtors who SAVED my LIFE.</li>
          <li className="list-none">Tôi mãi mãi mang ơn các bác sĩ đã cứu mạng tôi.</li>

        </ul>

      {/* =============================
            5. 
      ============================= */}

      <p className="margin-top-20"><strong>5. [beHOLDen] </strong> (ADjective) /bɪˈhəʊl.dən/</p>

      <p className="text-indent-whole">Mắc nợ ân nghĩa, cảm thấy bị ràng buộc hoặc phụ thuộc vào ai đó do nhận sự giúp đỡ từ họ.</p>

        <ul className="list-square">

          <li>she did NOT WANT to be [beHOLDen] to ANyone for her fiNANcial sucCESS.</li>
          <li className="list-none">Cô không muốn phải mắc nợ bất kỳ ai cho sự thành công tài chính của mình.</li>

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