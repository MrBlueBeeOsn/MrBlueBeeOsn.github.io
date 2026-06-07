import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Tenderly1(): React.JSX.Element {

  const postId = "Tenderly1";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#tinh-nhe-nhang-terms"><mark className="highlight-tertiary-padding-4-8">Tính nhẹ nhàng</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">tenderly
        <sup><Link to="/vocabulary/tenderly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup><Link to="/vocabulary/tenderly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      {/* This is the content of Vocabulary Term. */}
      
      <p>Tuyệt vời! Chúng ta cùng khám phá từ "<strong>tenderly</strong>" nhé.</p>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"><strong>Tenderly</strong></p>

          <ul className="list-square padding-left-40">

            <li>
              <span className="highlight-255-padding-3-6">
                /ˈten.dər.li/ + /<Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">tende̛rly</Link>/
                <sup>&nbsp;⬤•• (3x)</sup>
              </span>
            </li>

            <li>Trạng cơ (<Link to="/grammar/what-is-an-adverb?">adverb</Link>)</li>

            <li>Một cách dịu dàng, âu yếm, trìu mến</li>

          </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <p className="margin-top-30 text-indent-whole">Từ "<strong>tenderly</strong>" miêu tả một hành động hoặc lời nói được thực hiện một cách dịu dàng, trìu mến, thể hiện sự quan tâm, yêu thương và lòng trắc ẩn.

</p>

      <p className="text-indent-whole">Ví dụ:</p>

        <ul className="list-square">

          <li>He kissed her ______ on the forehead.</li>
          <li className="margin-bottom-20 list-none">Anh ấy hôn nhẹ lên trán cô ấy một cách trìu mến.</li>

          <li>She held the baby ______ in her arms.</li>
          <li className="list-none">Cô ấy bế đứa bé một cách âu yếm trong vòng tay.</li>


        </ul>

      {/* =============================
            Gia đình từ:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Gia đình từ</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>Tender (adj) /ˈten.dər/</li>
          <li className="list-none">He has a ______ heart.</li>
          <li className="margin-bottom-20 list-none">Anh ấy có một trái tim dịu dàng.</li>

          <li>Tended (v) /ˈten.dɪd/</li>
          <li className="list-none">She ______ to the injured bird.</li>
          <li className="margin-bottom-20 list-none">Cô ấy chăm sóc con chim bị thương một cách dịu dàng.</li>

          <li>Tenderness (n) /ˈten.dər.nəs/</li>
          <li className="list-none">He showed great ______ towards his children.</li>
          <li className="list-none">Anh ấy thể hiện sự âu yếm lớn đối với con cái của mình.</li>

        </ul>

      {/* =============================
            Từ đồng nghĩa:
      ============================= */}
        
      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ đồng nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li><Link to="/vocabulary/gently-1">Gently</Link> /ˈdʒent.li/</li>
          <li className="list-none">He touched her hand ______.</li>
          <li className="margin-bottom-20 list-none">Anh ấy chạm nhẹ vào tay cô ấy.</li>

          <li>Affectionately /əˈfek.ʃənət.li/</li>
          <li className="list-none">She smiled ______ at him.</li>
          <li className="margin-bottom-20 list-none">Cô ấy mỉm cười trìu mến với anh ấy.</li>

          <li>Lovingly /ˈlʌv.ɪŋ.li/</li>
          <li className="list-none">He spoke ______ of his wife.</li>
          <li className="list-none">Anh ấy nói một cách yêu thương về vợ mình.</li>

        </ul>

        {/* <Link to="/vocabulary/clearly-1">Clearly</Link> */}

      {/* =============================
            Từ trái nghĩa:
      ============================= */}

      <p className="margin-top-20">
        <mark className="highlight-238-padding-4-8">
          <strong>Từ trái nghĩa</strong>:
        </mark>
      </p>

        <ul className="list-square">

          <li>Harshly /ˈhɑːʃ.li/</li>
          <li className="list-none">He spoke ______ to the child.</li>
          <li className="margin-bottom-20 list-none">Anh ấy nói gay gắt với đứa trẻ.</li>

          <li>Roughly /ˈrʌf.li/</li>
          <li className="list-none">He treated the animal ______.</li>
          <li className="margin-bottom-20 list-none">Anh ấy đối xử thô bạo với con vật.</li>

          <li>Brutally /ˈbruː.tə.li/</li>
          <li className="list-none">He was ______ attacked.</li>
          <li className="list-none">Anh ấy bị tấn công dã man.</li>

        </ul>
      
      {/* =============================
            🌻 Mẹo học từ vựng:
      ============================= */}

      <h3 className="margin-y-50 text-center">🌻 Mẹo học từ vựng:</h3>

      {/* =============================
            1. Liên kết hình ảnh:
      ============================= */}
      
      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>1. Liên kết</strong></mark> 
        </strong>
        <strong>&nbsp;với hình ảnh</strong>:
      </p>

      <p className="text-indent-whole">Hình dung một người đang ôm ấp hoặc vuốt ve một người thân yêu.</p>

        <ul className="list-square">

          <li>He held his loved one ______.</li>
          <li className="margin-bottom-20 list-none">Anh ấy ôm người thân yêu một cách dịu dàng.</li>

          <li>She caressed her family member ______.</li>
          <li className="list-none">Cô ấy vuốt ve người thân một cách dịu dàng.</li>

        </ul>

      {/* =============================
            2. Tạo câu ví dụ:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Tạo câu</strong></mark> 
        </strong>
        <strong>&nbsp;ví dụ</strong>:
      </p>

      <p className="text-indent-whole">Tạo các câu liên quan đến các tình huống thể hiện sự dịu dàng và yêu thương.</p>

        <ul className="list-square">

          <li>She sang a lullaby ______ to her baby.</li>
          <li className="list-none">Cô ấy hát một bài hát ru con một cách dịu dàng cho đứa bé của mình.</li>

        </ul>

      {/* =============================
            3. Luyện tập thường xuyên:
      ============================= */}

      <p className="margin-top-20">
        <strong>
            <mark className="highlight-255-padding-4-8"><strong>3. Luyện tập</strong></mark>
        </strong>
        <strong>&nbsp;thường xuyên</strong>:
      </p>

      <p className="text-indent-whole margin-bottom-20">Thường xuyên sử dụng từ này trong các bài viết hoặc cuộc trò chuyện.</p>

        <p className="text-indent-whole">Ví dụ để so sánh (sự khác biệt):</p>

          <ol>

            <li>He kissed her.</li>
            <li className="list-none margin-bottom-20">Anh ấy hôn cô ấy.</li>

            <li value="2">He kissed her ______.</li>
            <li className="list-none margin-bottom-20">Anh ấy hôn cô ấy một cách trìu mến.</li>

          </ol>

      <div className="margin-bottom-20 padding-top-20 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <p className="margin-y-10">Sự khác biệt: Câu thứ hai <span className="highlight-255-padding-0-4">nhấn mạnh sự dịu dàng và yêu thương trong nụ hôn</span> của anh ấy.</p>

      </div>

      {/* <span className="highlight-255-padding-0-4"></span> */}

      {/* =============================
            Lưu ý:
      ============================= */}
      
      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>Nhấn mạnh sự dịu dàng và yêu thương: "<strong>Tenderly</strong>" nhấn mạnh sự dịu dàng, yêu thương và lòng trắc ẩn trong hành động hoặc lời nói.</li>

          <li className="margin-bottom-20">Thường dùng để miêu tả hành động và lời nói: Từ này thường được sử dụng để miêu tả hành động và lời nói thể hiện sự yêu thương và quan tâm.</li>

        </ul>

      </div>

      <p className="margin-top-50">Chúc bạn học tiếng Anh thật tốt! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 1, 2025 · by 💎Gem ·</span>
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