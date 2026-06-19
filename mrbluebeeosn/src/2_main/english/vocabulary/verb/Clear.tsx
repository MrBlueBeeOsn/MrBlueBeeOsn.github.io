import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Clear(): React.JSX.Element {

  const postId = "Clear";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#verbs-terms"><mark className="highlight-tertiary-padding-4-8">Verbs</mark></HashLink></h4>

      
      <h1 className="margin-y-50 text-center">[clear]</h1>

      {/* This is the content of Vocabulary Term. */}


      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-30"><strong>Động Cơ</strong> [<strong>Verb Base</strong>]: [clear] /klɪər/</p>

            <ul className="list-square">
          
              <li>Please [______] this confusion.</li>
              <li className="margin-bottom-20 list-none">Hãy [làm rõ] sự nhầm lẫn này.</li>

              <li className="list-none">Hình thái: [clear] - Động Cơ [Verb Base] nguyên mẫu, làm hành động chính tác động lên thành phần chịu tác động "this confusion".</li>
          
            </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>



      {/* =============================
            🟦 Cấp độ Cơ [Base]
      ============================= */}


      <h4 className="margin-top-50 margin-bottom-40">🟦 Cấp độ Cơ [Base]</h4>

      <p className="text-indent-whole">Thành phần nền tảng ở dạng từ đơn lẻ, thực hiện một vai trò ngữ pháp cốt lõi.</p>


      <p className="margin-top-20 text-indent-whole"><strong>Danh Cơ</strong> [<strong>Noun Base</strong>]: [clarity] /ˈklær.ə.ti/</p>
      
        <ul className="list-square">
      
          <li>We need more [______].</li>
          <li className="margin-bottom-20 list-none">Chúng ta cần thêm [sự rõ ràng].</li>
      
          <li className="list-none">Hình thái: [clarity] - Động Cơ [Verb Base] biến đổi phần đuôi thành "-ity" để chuyển đổi bản chất sang chức năng danh.</li>
      
          <li className="list-none">Chức năng: [clarity] - Danh Cơ [Noun Base] đứng sau lượng cơ "more" để làm thành phần chịu tác động trực tiếp cho Động Cơ "need".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Tính Cơ</strong> [<strong>Adjective Base</strong>]: [clear] /klɪər/</p>
      
        <ul className="list-square">
      
          <li>His explanation was [______].</li>
          <li className="margin-bottom-20 list-none">Lời giải thích của anh ấy [rõ ràng].</li>
      
          <li className="list-none">Hình thái: [clear] - Động Cơ [Verb Base] chuyển đổi sang bản chất mô tả đặc điểm mà không thay đổi ký tự.</li>
      
          <li className="list-none">Chức năng: [clear] - Tính Cơ [Adjective Base] đứng sau thời động cơ hệ từ "was" để làm thành phần bổ nghĩa cho thành phần thực hiện "His explanation".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cơ</strong> [<strong>Adverb Base</strong>]: [clearly] /ˈklɪə.li/</p>
      
        <ul className="list-square">
      
          <li>She speaks [______].</li>
          <li className="margin-bottom-20 list-none">Cô ấy nói [một cách rõ ràng].</li>
      
          <li className="list-none">Hình thái: [clearly] - Động Cơ [Verb Base] kết hợp thêm phần đuôi "-ly" để chuyển đổi bản chất sang chức năng trạng.</li>
      
          <li className="list-none">Chức năng: [clearly] - Trạng Cơ [Adverb Base] đứng sau để thực hiện chức năng bổ nghĩa trực tiếp cho Động Cơ hành động "speaks".</li>
      
        </ul>
      
      


      {/* =============================
            🟦 Cấp độ Cụm [Phrase]
      ============================= */}


      <h4 className="margin-y-40">🟦 Cấp độ Cụm [Phrase]</h4>
          
      <p className="text-indent-whole">Đơn vị kết hợp nhiều từ nhưng chưa có đầy đủ phần Thành phần thực hiện - Hành động.</p>


      <p className="margin-top-20 text-indent-whole"><strong>Danh Cụm</strong> [<strong>Noun Phrase</strong>]: [Clearing the mess]</p>
      
        <ul className="list-square">
      
          <li>[______] is important.</li>
          <li className="margin-bottom-20 list-none">[Việc dọn dẹp đống lộn xộn] là quan trọng.</li>
      
          <li className="list-none">Hình thái: [Clearing the mess] - Động Cụm [Verb Phrase] có gốc là hành động thêm đuôi "-ing" đi kèm thành phần chịu tác động "the mess", dùng làm chất liệu nền để đóng vai trò cho các chức năng khác.</li>
      
          <li className="list-none">Chức năng: [Clearing the mess] - Danh Cụm [Noun Phrase] cấu tạo từ cụm hành động hóa danh, đứng đầu câu để thực hiện chức năng làm thành phần thực hiện cho Động Cơ "is".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Tính Cụm</strong> [<strong>Adjective Phrase</strong>]: [Clearing the mess]</p>
      
        <ul className="list-square">
      
          <li>The worker [______] is fast.</li>
          <li className="margin-bottom-20 list-none">Người công nhân [đang dọn dẹp đống lộn xộn] rất nhanh nhẹn.</li>
      
          <li className="list-none">Hình thái: [Clearing the mess] - Động Cụm [Verb Phrase] sử dụng dạng hành động thêm đuôi "-ing" đi kèm thành phần chịu tác động "the mess" tạo tính chủ động.</li>
      
          <li className="list-none">Chức năng: [Clearing the mess] - Tính Cụm [Adjective Phrase] đứng ngay sau để thực hiện chức năng bổ nghĩa trực tiếp cho Danh Cơ "The worker".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Trạng Cụm</strong> [<strong>Adverb Phrase</strong>]: [By clearing the mess]</p>
      
        <ul className="list-square">
      
          <li>[______], we found the key.</li>
          <li className="margin-bottom-20 list-none">[Bằng cách dọn dẹp đống lộn xộn], chúng tôi đã tìm thấy chìa khóa.</li>
      
          <li className="list-none">Hình thái: [By clearing the mess] - Động Cụm [Verb Phrase] kết hợp thêm thành phần chỉ phương thức "By" vào trước hành động đuôi "-ing".</li>
      
          <li className="list-none">Chức năng: [By clearing the mess] - Trạng Cụm [Adverb Phrase] đứng đầu câu và ngăn cách bằng dấu phẩy để thực hiện chức năng bổ nghĩa cho cả phần nội dung chính nhằm chỉ phương thức hành động.</li>
      
        </ul>
      



      {/* =============================
            🟦 Cấp độ Câu [Clause]
      ============================= */}


      <h4 className="margin-y-40">🟦 Cấp độ Câu [Clause]</h4>

      <p className="text-indent-whole">Đơn vị bậc cao có đầy đủ phần Thành phần thực hiện - Hành động để diễn đạt một ý phụ thuộc hoặc trọn vẹn, mang hình thái Động Câu [OSV] khi chứa trọn các thành phần [Object Subject Verb].</p>


      <p className="margin-top-20 text-indent-whole"><strong>Danh Câu</strong> [<strong>Noun Clause</strong>]: [Where the sky clears]</p>
      
        <ul className="list-square">
      
          <li>I see [______] up.</li>
          <li className="margin-bottom-20 list-none">Tôi thấy [nơi mà bầu trời đang quang đãng] trở lại.</li>
      
          <li className="list-none">Hình thái: [Where the sky clears] - Động Câu [Verb Clause] bắt đầu bằng thành phần liên kết không gian "Where", có thành phần thực hiện "the sky" và Động Cơ chính "clears".</li>
      
          <li className="list-none">Chức năng: [Where the sky clears] - Danh Câu [Noun Clause] đóng vai trò là phần phụ thuộc chức năng danh, đứng sau để thực hiện chức năng làm thành phần chịu tác động trực tiếp cho Động Cơ chính "see".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Tính Câu</strong> [<strong>Adjective Clause</strong>]: [Where the sky clears]</p>
      
        <ul className="list-square">
      
          <li>The area [______] is beautiful.</li>
          <li className="margin-bottom-20 list-none">Khu vực [nơi mà bầu trời đang quang đãng] thật đẹp.</li>
      
          <li className="list-none">Hình thái: [Where the sky clears] - Động Câu [Verb Clause] thiết lập phần phối hợp có đầy đủ thành phần thực hiện "the sky" và hành động "clears" đi sau thành phần liên kết "Where".</li>
      
          <li className="list-none">Chức năng: [Where the sky clears] - Tính Câu [Adjective Clause] đóng vai trò là phần phụ thuộc liên kết bổ nghĩa, đứng sau để thực hiện chức năng bổ nghĩa trực tiếp cho Danh Cơ chỉ nơi chốn "The area".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Trạng Câu</strong> [<strong>Adverb Clause</strong>]: [Where the sky clears]</p>
      
        <ul className="list-square">
      
          <li>[______], we can take photos.</li>
          <li className="margin-bottom-20 list-none">[Nơi nào bầu trời quang đãng], chúng ta có thể chụp ảnh.</li>
      
          <li className="list-none">Hình thái: [Where the sky clears] - Động Câu [Verb Clause] giữ nguyên phần phối hợp trọn vẹn giữa không gian, thành phần thực hiện và hành động để làm chất liệu bổ trợ.</li>
      
          <li className="list-none">Chức năng: [Where the sky clears] - Trạng Câu [Adverb Clause] đóng vai trò là phần phụ thuộc bổ trợ không gian, đứng đầu để thực hiện chức năng làm thành phần bổ trợ chỉ địa điểm, bổ nghĩa cho toàn bộ thành phần chính "we can take photos".</li>
      
        </ul>


      

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>June 19, 2026 · by 💎Gem ·</span>
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