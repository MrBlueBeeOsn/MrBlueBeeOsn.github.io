import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Create(): React.JSX.Element {

  const postId = "Create";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#verbs-terms"><mark className="highlight-tertiary-padding-4-8">VERBs</mark></HashLink></h4>
      
            
      <h1 className="margin-y-50 text-center">[CREATE]</h1>

      {/* This is the content of Vocabulary Term. */}

      <h4 className="margin-bottom-30 text-center">BẢN THIẾT KẾ MÃ NGUỒN VÀ HỆ THỐNG VẬN HÀNH</h4>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20">[create] is a [Root Verb Base] that means to cause something to exist, or to make something new.</p>

          <p>[create] là một [Rễ Động Cơ][Root Verb Base] có nghĩa là tạo ra, sáng tạo, hoặc gây ra một điều gì đó mới.</p>

          <p className="margin-top-20">Phát âm: create [creATE][cre-ATE] /kriˈeɪt/</p>

            <ul className="list-square">
          
              <li>The team should [create] a new software program.</li>
              <li className="margin-bottom-20 list-none">Đội ngũ nên [tạo ra] một chương trình phần mềm mới.</li>

              <li className="list-none">Hình thái: [create] - [Thuần Động Cơ][Bare Verb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "create" đứng sau chịu tác động từ [Ý-Thái Động Cơ][Soft-Modal Verb Base] "should" để thực thi hành động hướng tới đối tượng tiếp nhận trực tiếp "a new software program".</li>
          
            </ul>

        </div>

        <div className="bee-wrapper">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>



      {/* =============================
            
      ============================= */}


      {/* 1.  */}

			<h3 className="margin-y-50 text-center">HỆ THỐNG [PHÂN LOẠI HẠT NHÂN ĐỘNG CƠ][VERB BASE CATEGORIES]</h3>

      <h4 className="margin-y-40">a. Phân hệ [Cơ][Base]</h4>
      
        <ol>
      
          <li value="1">[<strong>Rễ Động Cơ</strong>][<strong>Root Verb Base</strong>]: </li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng [Rễ Động Cơ][Root Verb Base] nguyên bản chưa qua xử lý gộp hay biến hóa cấu trúc hình thái vật lý.</li>
      
          <li value="2">[<strong>Hạt Động Cơ</strong>][<strong>Particle Verb Base</strong>]: to, out, in, with, back</li>
          <li className="margin-bottom-20 list-none">[Hạt] to đơn lẻ đóng vai trò mã định vị độc lập làm điểm tựa khởi động, đặt nền móng trực tiếp trước hành động để kích hoạt trạng thái nguyên bản. Các [Hạt] như out, in, with, back đơn lẻ đứng sau hành động để mở rộng hướng di chuyển, phạm vi tác động, cường độ hoặc trạng thái tiếp diễn/kết thúc của hạt nhân vận hành đó.</li>

          <li value="3">[<strong>Thời Động Cơ</strong>][<strong>Tense Verb Base</strong>]: does, did, is, has, was, am, are</li>
          <li className="margin-bottom-20 list-none">Hành động đơn lẻ xuất hiện để mang năng lượng [Thời] gian / [Thời] trong câu.</li>
      
          <li value="4">[<strong>Ý-Thái Động Cơ</strong>][<strong>Soft-Modal Verb Base</strong>]: would, could, should, might</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ mang tính [Ý] nhị, có [Ý] tư, mong muốn là thật nhưng cách nói nhường nhịn và triệt tiêu tính ép. Các khối phức đặc biệt "ought to" và "had better" được quét như một [Phức Ý-Thái Động Cơ][Complex Soft-Modal Verb Base] thống nhất.</li>

          <li value="5">[<strong>Áp-Thái Động Cơ</strong>][<strong>Assertive-Modal Verb Base</strong>]: will, shall, can, must, may</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ mang tính trực diện, [Áp] đặt thực tế xuống, không chừa lối thoát cho người nghe. Khối phức đặc biệt "have to" được quét như một [Phức Áp-Thái Động Cơ][Complex Assertive-Modal Verb Base] thống nhất.</li>

          <li value="6">[<strong>Thuần Động Cơ</strong>][<strong>Bare Verb Base</strong>]: create</li>
          <li className="margin-bottom-20 list-none">Hành động [Thuần] khiết đứng tự do một mình, hoàn toàn giải phóng và không có "to" đi kèm, thường đứng ngay sau:</li>

          <li className="list-none">[Hạt Động Cơ][Particle Verb Base]: to</li>
          <li className="list-none">[Ý-Thái Động Cơ][Soft-Modal Verb Base]: would, could, should, might</li>
          <li className="list-none">[Áp-Thái Động Cơ][Assertive-Modal Verb Base]: will, shall, can, must, may</li>
          <li className="list-none">Nhóm Động Cơ Sai Khiến / Cho Phép: make, let, let's, have</li>
          <li className="list-none">Nhóm Động Cơ Hỗ Trợ / Tương Tác: help, get (khi ở dạng đặc biệt)</li>
          <li className="margin-bottom-20 list-none">Nhóm Động Cơ Tri Giác / Cảm Nhận: see, hear, watch, feel, notice, observe, smell</li>
      
          <li value="7">[<strong>Hạt Thuần Động Cơ</strong>][<strong>Particle Bare Verb Base</strong>]: to create</li>
          <li className="margin-bottom-20 list-none">Sự tích hợp thẳng hàng giữa điểm tựa khởi động và cấu trúc hành động [Thuần] khiết đứng độc lập phía sau.</li>

          <li value="8">[<strong>Ý-Thái Thuần Động Cơ</strong>][<strong>Soft-Modal Bare Verb Base</strong>]: would create, could create, should create</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Ý] nhị, không ép và hành động [Thuần] khiết.</li>
      
          <li value="9">[<strong>Áp-Thái Thuần Động Cơ</strong>][<strong>Assertive-Modal Bare Verb Base</strong>]: will create, can create</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Áp] đặt thực tế và hành động [Thuần] khiết.</li>

          <li value="10">[<strong>Thời Thuần Động Cơ</strong>][<strong>Tense Bare Verb Base</strong>]: did create, does create</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] gian và hành động [Thuần] khiết song hành, được tách riêng biệt bằng một khoảng trắng trong câu.</li>

          <li value="11">[<strong>Thời-Thuần Động Cơ</strong>][<strong>Tense-Bare Verb Base</strong>]: created, creates</li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] (Quá khứ/Hiện tại) và hành động [Thuần] khiết hòa tan, gộp chung hoàn toàn vào trong cùng một chữ đơn duy nhất.</li>
      
          <li value="12">[<strong>Tiếp Động Cơ</strong>][<strong>Progressive Verb Base</strong>]: creating</li>
          <li className="margin-bottom-20 list-none">Hành động mang đuôi -ing thể hiện tính chất đang [Tiếp] diễn, kéo dài.</li>

          <li value="13">[<strong>Hoàn Động Cơ</strong>][<strong>Perfect Verb Base</strong>]: created, been</li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng cột 3 hoặc thêm đuôi -ed thể hiện tính chất đã trọn vẹn, [Hoàn] thành.</li>
      
          <li value="14">[<strong>Thời Tiếp Động Cơ</strong>][<strong>Tense Progressive Verb Base</strong>]: is creating, was creating</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa hành động mang [Thời] gian và hành động mang tính chất đang [Tiếp] diễn.</li>

          <li value="15">[<strong>Thời Hoàn Động Cơ</strong>][<strong>Tense Perfect Verb Base</strong>]: has created, had created</li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa hành động mang [Thời] gian và hành động mang tính chất đã trọn vẹn, [Hoàn] thành.</li>
      
          <li value="16">[<strong>Thời Hoàn Tiếp Động Cơ</strong>][<strong>Tense Perfect Progressive Verb Base</strong>]: has been creating, had been creating</li>
          <li className="list-none">Sự hợp nhất tuyến tính giữa ba lớp năng lượng [Thời] gian, tính chất đã trọn vẹn, [Hoàn] thành và tính chất đang [Tiếp] diễn.</li>
      
        </ol>
      
      

      <h4 className="margin-y-40">b. Phân hệ [Cụm][Phrase]</h4>
          
      <p className="text-indent-whole"><strong>QUY TẮC CỐT LÕI</strong>:</p>

      <p className="text-indent-whole">Khi bất kỳ họ [Cơ][Base] nào thuộc hệ thống 16 mục trên kéo theo thành phần bổ trợ phía sau (như [Danh Nhận][Noun Object], [Trạng Cơ][Adverb Base], [Trạng Cụm][Adverb Phrase], hoặc [Trạng Câu][Adverb Clause]), toàn bộ cấu trúc đó sẽ ngay lập tức được dán nhãn và nâng cấp thành dạng [Cụm][Phrase] tương ứng của chính nó.</p>


      
      <h4 className="margin-y-40">PHÂN NHÓM VÀ SƠ ĐỒ PHỐI HỢP MÃ NGUỒN [CREATE]</h4>
          
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 1</strong>: [<strong>Thời Động Cơ</strong>][<strong>Tense Verb Base</strong>]</p>

        <ul className="list-square">
      
          <li>be creating → [Thời] be (am/is/are, was/were) + [Tiếp Động Cơ] creating</li>

          <li>have been creating → [Thời + Hoàn] have/has/had + been + [Tiếp Động Cơ] creating</li>

          <li>have created → [Thời + Hoàn] have/has/had + created</li>

          <li>creates, created → [Thời-Thuần Động Cơ] Tích hợp</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 2</strong>: [<strong>Thuần Động Cơ</strong>][<strong>Bare Verb Base</strong>]</p>

        <ul className="list-square">
      
          <li>to create → [Hạt] to + [Thuần Động Cơ] create</li>
          <li>did create → [Thời] did (Nhấn mạnh) + [Thuần Động Cơ] create</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 3</strong>: [<strong>Ý-Thái Thuần Động Cơ</strong>][<strong>Soft-Modal Bare Verb Base</strong>]</p>

        <ul className="list-square">
      
          <li>should create → [Ý-Thái Động Cơ] should (gợi ý) + [Thuần Động Cơ] create</li>
          <li>could create → [Ý-Thái Động Cơ] could (khả năng nhẹ) + [Thuần Động Cơ] create</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>Nhóm 4</strong>: [<strong>Áp-Thái Thuần Động Cơ</strong>][<strong>Assertive-Modal Bare Verb Base</strong>]</p>

        <ul className="list-square">
      
          <li>will create → [Áp-Thái Động Cơ] will (cam kết) + [Thuần Động Cơ] create</li>
          <li>must create → [Áp-Thái Động Cơ] must (ép buộc) + [Thuần Động Cơ] create</li>
      
        </ul>
      


      {/* 1.  */}

			<h3 className="margin-y-50 text-center">PHẦN 1: HỆ THỐNG CÁC VÍ DỤ PHÂN HỆ MÃ TIẾNG ANH MỚI</h3>

      
      <h4 className="margin-y-40">1. Phân hệ [Động Cơ][Verb Base]</h4>
          
      <p className="margin-top-20 text-indent-whole"><strong>1.1</strong> <strong>Hình thành chức năng</strong> [<strong>Danh Cơ</strong>][<strong>Noun Base</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 1: creation [creAtion][cre-A-tion] /kriˈeɪʃn/</p>
      
        <ul className="list-square">
      
          <li>The rapid [creation] of new digital assets impressed the investors.</li>
          <li className="margin-bottom-20 list-none">Sự [tạo ra] nhanh chóng các tài sản kỹ thuật số mới đã làm ấn tượng các nhà đầu tư.</li>
      
          <li className="list-none">Hình thái: [creation] - [Diện Danh Cơ][Modified Noun Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "create" biến đổi cấu trúc đuôi "-tion" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] có khả năng định danh thực thể độc lập.</li>
      
          <li className="list-none">Chức năng: [creation] - [Danh Cơ][Noun Base] đảm nhận nhiệm vụ làm thành phần định danh nền tảng đứng đầu câu.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>1.2</strong> <strong>Hình thành chức năng</strong> [<strong>Tính Cơ</strong>][<strong>Adjective Base</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 2: creative [creAtive][cre-A-tive] /kriˈeɪtɪv/</p>
      
        <ul className="list-square">
      
          <li>Every marketing campaign requires a [creative] approach.</li>
          <li className="margin-bottom-20 list-none">Mỗi chiến dịch tiếp thị đều yêu cầu một phương pháp tiếp cận [sáng tạo].</li>
      
          <li className="list-none">Hình thái: [creative] - [Diện Tính Cơ][Modified Adjective Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "create" kết hợp biến đổi đuôi và hậu tố "-ive" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] có khả năng mô tả tính chất đặc điểm.</li>
      
          <li className="list-none">Chức năng: [creative] - [Tính Cơ][Adjective Base] kích hoạt bộ quét đặt ngay trước đối tượng "approach" để hiển thị đặc điểm của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>1.3</strong> <strong>Hình thành chức năng</strong> [<strong>Trạng Cơ</strong>][<strong>Adverb Base</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 3: creatively [creAtively][cre-A-tive-ly] /kriˈeɪtɪvli/</p>
      
        <ul className="list-square">
      
          <li>The designer solved the layout problem [creatively] during the meeting.</li>
          <li className="margin-bottom-20 list-none">Nhà thiết kế đã giải quyết vấn đề bố cục [một cách sáng tạo] trong cuộc họp.</li>
      
          <li className="list-none">Hình thái: [creatively] - [Diện Trạng Cơ][Modified Adverb Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "create" qua biến thể tính từ và thêm hậu tố "-ly" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] có khả năng bổ trợ bối cảnh phương thức.</li>
      
          <li className="list-none">Chức năng: [creatively] - [Trạng Cơ][Adverb Base] làm thành phần bổ nghĩa đứng sau hành động [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "solved" để xác định cách thức diễn ra.</li>
      
        </ul>


      <h4 className="margin-y-40">2. Phân hệ [Động Cụm][Verb Phrase]</h4>

      <p className="margin-top-20 text-indent-whole"><strong>2.1</strong> <strong>Hình thành chức năng</strong> [<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tiếp Động Cụm</strong>][<strong>Progressive Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4a:</p>
      
        <ul className="list-square">
      
          <li>[Creating automated workflows for clients] requires technical expertise.</li>
          <li className="margin-bottom-20 list-none">[Việc tạo ra các quy trình làm việc tự động cho khách hàng] đòi hỏi chuyên môn kỹ thuật.</li>
      
          <li className="list-none">Hình thái: [Creating automated workflows for clients] - [Tiếp Động Cụm][Progressive Verb Phrase] phát triển từ [Tiếp Động Cơ][Progressive Verb Base] "creating" tích hợp thêm vùng dữ liệu mở rộng phía sau.</li>
      
          <li className="list-none">Chức năng: [Creating automated workflows for clients] - [Danh Cụm][Noun Phrase] đóng vai trò làm [Danh Chủ][Noun Subject] đứng trước [Thời-Thuần Động Cụm][Tense-Bare Verb Phrase] "requires technical expertise" để quản lý một đầu việc lớn ở đầu câu.</li>
      
        </ul>

  

      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tiếp Động Cụm</strong>][<strong>Progressive Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4b:</p>
      
        <ul className="list-square">
      
          <li>The development team prioritized [creating interactive user interfaces].</li>
          <li className="margin-bottom-20 list-none">Đội ngũ phát triển đã ưu tiên [việc tạo ra các giao diện người dùng tương tác].</li>
      
          <li className="list-none">Hình thái: [creating interactive user interfaces] - [Tiếp Động Cụm][Progressive Verb Phrase] hình thành từ [Tiếp Động Cơ][Progressive Verb Base] "creating" tích hợp thêm vùng dữ liệu mở rộng phía sau.</li>
      
          <li className="list-none">Chức năng: [creating interactive user interfaces] - [Danh Cụm][Noun Phrase] đóng vai trò làm [Danh Nhận][Noun Object] tích hợp chuỗi dữ liệu đầu việc đứng ngay sau cặp phối hợp [Danh Chủ][Noun Subject] và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "prioritized".</li>
      
        </ul>


      
      <p className="margin-top-20 text-indent-whole"><strong>2.2</strong> <strong>Hình thành chức năng</strong> [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Hạt Thuần Động Cụm</strong>][<strong>Particle Bare Verb Phrase</strong>] <strong>sắp xảy ra</strong>, <strong>chủ động</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5a:</p>
      
        <ul className="list-square">
      
          <li>The designer [to create the new brand identity] has been hired.</li>
          <li className="margin-bottom-20 list-none">Nhà thiết kế [sắp sửa tạo ra nhận diện thương hiệu mới] đã được thuê.</li>
      
          <li className="list-none">Hình thái: [to create the new brand identity] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] phát triển từ cụm [Hạt Thuần Động Cơ][Particle Bare Verb Base] "to create" tích hợp thêm vùng dữ liệu mở rộng phía sau.</li>
      
          <li className="list-none">Chức năng: [to create the new brand identity] - [Tính Cụm][Adjective Phrase] đặt ngay sau đối tượng "designer" để quét và hiển thị đặc điểm hành động sắp xảy ra mang tính chủ động của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Hạt Thuần Hoàn Động Cụm</strong>][<strong>Particle Bare Perfect Verb Phrase</strong>] <strong>sắp xảy ra</strong>, <strong>bị động</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5b:</p>
      
        <ul className="list-square">
      
          <li>The artwork [to be created by the artist] will be displayed in the gallery.</li>
          <li className="margin-bottom-20 list-none">Tác phẩm nghệ thuật [sắp sửa được tạo ra bởi nghệ sĩ] sẽ được trưng bày trong phòng triển lãm.</li>
      
          <li className="list-none">Hình thái: [to be created by the artist] - [Hạt Thuần Hoàn Động Cụm][Particle Bare Perfect Verb Phrase] bắt đầu bằng [Hạt Động Cơ][Particle Verb Base] "to" kéo theo vùng bổ trợ phía sau chứa [Thuần Động Cơ][Bare Verb Base] "be" và [Hoàn Động Cơ][Perfect Verb Base] "created" để biểu thị trạng thái bị động tương lai.</li>
      
          <li className="list-none">Chức năng: [to be created by the artist] - [Tính Cụm][Adjective Phrase] kích hoạt bộ quét đặt ngay sau đối tượng "artwork" để mô tả trạng thái sắp sửa được tác động.</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tiếp Động Cụm</strong>][<strong>Progressive Verb Phrase</strong>] <strong>đang diễn ra</strong>, <strong>chủ động</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5c:</p>
      
        <ul className="list-square">
      
          <li>The programmer [creating the database structure] found a critical bug.</li>
          <li className="margin-bottom-20 list-none">Lập trình viên [đang tạo ra cấu trúc cơ sở dữ liệu] đã phát hiện một lỗi nghiêm trọng.</li>
      
          <li className="list-none">Hình thái: [creating the database structure] - [Tiếp Động Cụm][Progressive Verb Phrase] phát triển từ [Tiếp Động Cơ][Progressive Verb Base] "creating" tích hợp thêm vùng dữ liệu mở rộng biểu thị tính chủ động đang xảy ra.</li>
      
          <li className="list-none">Chức năng: [creating the database structure] - [Tính Cụm][Adjective Phrase] đặt ngay sau đối tượng "programmer" để hiển thị đặc điểm hành động chủ động của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Hoàn Động Cụm</strong>][<strong>Perfect Verb Phrase</strong>] <strong>đã xong</strong>, <strong>bị động</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5d:</p>
      
        <ul className="list-square">
      
          <li>The report [created by the research department] was presented yesterday.</li>
          <li className="margin-bottom-20 list-none">Báo cáo [đã được tạo ra bởi bộ phận nghiên cứu] đã được thuyết trình ngày hôm qua.</li>
      
          <li className="list-none">Hình thái: [created by the research department] - [Hoàn Động Cụm][Perfect Verb Phrase] phát triển từ [Hoàn Động Cơ][Perfect Verb Base] "created" kết hợp mở rộng ở dạng bị động thuộc trục thời quá khứ.</li>
      
          <li className="list-none">Chức năng: [created by the research department] - [Tính Cụm][Adjective Phrase] đặt ngay sau đối tượng "report" để mô tả đặc điểm trạng thái bị động hoàn thành.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Diện Tính Cụm</strong>][<strong>Modified Adjective Phrase</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5e:</p>
      
        <ul className="list-square">
      
          <li>They need a team [creative in finding solutions].</li>
          <li className="margin-bottom-20 list-none">Họ cần một đội ngũ [sáng tạo trong việc tìm kiếm các giải pháp].</li>
      
          <li className="list-none">Hình thái: [creative in finding solutions] - [Diện Tính Cụm][Modified Adjective Phrase] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "create" qua việc thêm hậu tố "-ive" và kết hợp mở rộng với một [Giới Cụm][Prepositional Phrase] phía sau.</li>
      
          <li className="list-none">Chức năng: [creative in finding solutions] - [Tính Cụm][Adjective Phrase] đứng ngay sau danh từ "team" để bổ nghĩa, xác định đặc điểm và năng lực trực tiếp cho đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>2.3</strong> <strong>Hình thành chức năng</strong> [<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Hạt Thuần Động Cụm</strong>][<strong>Particle Bare Verb Phrase</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6a:</p>
      
        <ul className="list-square">
      
          <li>The engineer launched the tool [to create custom reports].</li>
          <li className="margin-bottom-20 list-none">Kỹ sư đã khởi chạy công cụ [để tạo ra các báo cáo tùy chỉnh].</li>
      
          <li className="list-none">Hình thái: [to create custom reports] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] phát triển từ cụm [Hạt Thuần Động Cơ][Particle Bare Verb Base] "to create" kết hợp mở rộng đứng cuối chuỗi thông tin.</li>
      
          <li className="list-none">Chức năng: [to create custom reports] - [Trạng Cụm][Adverb Phrase] đảm nhận vai trò làm một khối bối cảnh mục đích đứng sau để bổ nghĩa cho hành động [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "launched".</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">[<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Hạt Thuần Động Cụm</strong>][<strong>Particle Bare Verb Phrase</strong>] <strong>có dấu phẩy</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6b:</p>
      
        <ul className="list-square">
      
          <li>[To create a seamless user experience], the designers simplified the menu.</li>
          <li className="margin-bottom-20 list-none">[Để tạo ra một trải nghiệm người dùng mượt mà], các nhà thiết kế đã đơn giản hóa menu.</li>
      
          <li className="list-none">Hình thái: [To create a seamless user experience] - [Hạt Thuần Động Cụm][Particle Bare Verb Phrase] phát triển từ cụm [Hạt Thuần Động Cơ][Particle Bare Verb Base] "to create" kết hợp mở rộng, được đảo lên đứng biệt lập ở đầu câu và ngăn cách bằng dấu phẩy.</li>
      
          <li className="list-none">Chức năng: [To create a seamless user experience], - [Trạng Cụm][Adverb Phrase] đảm nhận nhiệm vụ làm khối bối cảnh mục đích nhấn mạnh cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">[<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tiếp Động Cụm</strong>][<strong>Progressive Verb Phrase</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6c:</p>
      
        <ul className="list-square">
      
          <li>The company invested resources [creating advanced security protocols].</li>
          <li className="margin-bottom-20 list-none">Công ty đã đầu tư các nguồn lực [vào việc tạo ra các giao thức bảo mật nâng cao].</li>
      
          <li className="list-none">Hình thái: [creating advanced security protocols] - [Tiếp Động Cụm][Progressive Verb Phrase] phát triển từ [Tiếp Động Cơ][Progressive Verb Base] "creating" kết hợp mở rộng đứng ở phần sau câu nhằm làm rõ tiến trình nội dung.</li>
      
          <li className="list-none">Chức năng: [creating advanced security protocols] - [Trạng Cụm][Adverb Phrase] đóng vai trò làm khối bối cảnh cách thức đi kèm để bổ nghĩa trực tiếp cho hành động [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "invested" phía trước.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">[<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tiếp Động Cụm</strong>][<strong>Progressive Verb Phrase</strong>] <strong>có dấu phẩy</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6d:</p>
      
        <ul className="list-square">
      
          <li>[Creating unique marketing strategies], the startup attracted global investors.</li>
          <li className="margin-bottom-20 list-none">[Tạo ra các chiến lược tiếp thị độc đáo], công ty khởi nghiệp đã thu hút các nhà đầu tư toàn cầu.</li>
      
          <li className="list-none">Hình thái: [Creating unique marketing strategies] - [Tiếp Động Cụm][Progressive Verb Phrase] đứng biệt lập ở đầu câu, ngăn cách bằng dấu phẩy, mang [Tiếp Động Cơ][Progressive Verb Base] kết hợp mở rộng do được rút gọn từ một hệ [Động Câu][Verb Clause] trạng phụ thuộc có cùng thành phần lõi [Danh Chủ][Noun Subject].</li>
      
          <li className="list-none">Chức năng: [Creating unique marketing strategies] - [Trạng Cụm][Adverb Phrase] đóng vai trò làm một khối bối cảnh nguyên nhân/phương thức tổng thể để bổ nghĩa cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>



      <h4 className="margin-y-40">3. Phân hệ [Giới Cụm][Prepositional Phrase]</h4>
      
      <p className="margin-top-20 text-indent-whole"><strong>3.1</strong> <strong>Hình thành chức năng</strong> [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 7:</p>
      
        <ul className="list-square">
      
          <li>The innovation [in the creation of renewable energy systems] gained worldwide attention.</li>
          <li className="margin-bottom-20 list-none">Sự đổi mới [trong việc tạo ra các hệ thống năng lượng tái tạo] đã thu hút sự chú ý trên toàn thế giới.</li>
      
          <li className="list-none">Hình thái: [in the creation of renewable energy systems] - [Giới Cụm][Prepositional Phrase] xuất hiện dưới dạng một vùng mã định vị không chứa hạt nhân hành động, bắt đầu bằng [Giới Cơ][Prepositional Base] "in".</li>
      
          <li className="list-none">Chức năng: [in the creation of renewable energy systems] - [Tính Cụm][Adjective Phrase] vận hành như một bộ quét đặt ngay phía sau đối tượng "innovation" để hiển thị và mô tả phạm vi thuộc về của đối tượng đó.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>3.2</strong> <strong>Hình thành chức năng</strong> [<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Giới Cụm</strong>][<strong>Prepositional Phrase</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 8a:</p>
      
        <ul className="list-square">
      
          <li>The system shut down [for the creation of a system backup].</li>
          <li className="margin-bottom-20 list-none">Hệ thống đã tắt [phục vụ cho việc tạo ra một bản sao lưu hệ thống].</li>
      
          <li className="list-none">Hình thái: [for the creation of a system backup] - [Giới Cụm][Prepositional Phrase] xuất hiện dưới dạng một vùng mã xác lập lý do / bối cảnh, bắt đầu bằng [Giới Cơ][Prepositional Base] "for".</li>
      
          <li className="list-none">Chức năng: [for the creation of a system backup] - [Trạng Cụm][Adverb Phrase] đảm nhận vai trò làm một khối bối cảnh mục đích / nguyên nhân đứng sau để xác định cơ sở cho hành động [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "shut down".</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">[<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Giới Cụm</strong>][<strong>Prepositional Phrase</strong>] (<strong>có dấu phẩy</strong>):</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 8b:</p>
      
        <ul className="list-square">
      
          <li>[With the creation of new digital tools], the team improved productivity.</li>
          <li className="margin-bottom-20 list-none">[Với sự tạo ra các công cụ kỹ thuật số mới], đội ngũ đã cải thiện năng suất.</li>
      
          <li className="list-none">Hình thái: [With the creation of new digital tools] - [Giới Cụm][Prepositional Phrase] bắt đầu bằng [Giới Cơ][Prepositional Base] "With" kéo theo vùng danh cụm phía sau, được đảo lên đứng biệt lập ở đầu câu và ngăn cách bằng dấu phẩy.</li>
      
          <li className="list-none">Chức năng: [With the creation of new digital tools] - [Trạng Cụm][Adverb Phrase] đảm nhận nhiệm vụ thiết lập một khối bối cảnh nguyên nhân / phương tiện tổng thể để bổ nghĩa cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>



      <h4 className="margin-y-40">4. Phân hệ [Động Câu][Verb Clause]</h4>
          
      <h5 className="margin-y-30 text-indent-whole">4.1 Phân hệ [Hiển-Liên Động Câu][Connector Verb Clause]</h5>

      <p className="margin-top-20 text-indent-whole"><strong>4.1.1</strong> <strong>Hình thành chức năng</strong> [<strong>Danh Câu</strong>][<strong>Noun Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>Danh Câu</strong>][<strong>Noun Clause</strong>] <strong>cấu tạo từ</strong> [<strong>Hiển-Liên Động Câu</strong>][<strong>Connector Verb Clause</strong>] <strong>làm</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 9a:</p>
      
        <ul className="list-square">
      
          <li>[How the software creates automated reports] determines its usefulness.</li>
          <li className="margin-bottom-20 list-none">[Cách phần mềm tạo ra các báo cáo tự động] quyết định tính hữu ích của nó.</li>
      
          <li className="list-none">Hình thái: [How the software creates automated reports] - [Hiển-Liên Động Câu][Connector Verb Clause] chứa thành phần [Liên Cơ][Connector Base] "How" ở đầu, mang [Danh Chủ][Noun Subject] riêng "the software" và cụm hành động phối hợp phía sau.</li>
      
          <li className="list-none">Chức năng: [How the software creates automated reports] - [Danh Câu][Noun Clause] đóng vai trò làm [Danh Chủ][Noun Subject] quản lý khối thông tin quy trình đứng đầu câu để điều khiển [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "determines".</li>
      
        </ul>



      <p className="margin-top-20 text-indent-whole">[<strong>Danh Câu</strong>][<strong>Noun Clause</strong>] <strong>cấu tạo từ</strong> [<strong>Hiển-Liên Động Câu</strong>][<strong>Connector Verb Clause</strong>] <strong>làm</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 9b:</p>
      
        <ul className="list-square">
      
          <li>The manager explained [how the system creates new user profiles].</li>
          <li className="margin-bottom-20 list-none">Người quản lý đã giải thích [cách hệ thống tạo ra các hồ sơ người dùng mới].</li>
      
          <li className="list-none">Hình thái: [how the system creates new user profiles] - [Hiển-Liên Động Câu][Connector Verb Clause] chứa thành phần [Liên Cơ][Connector Base] "how" ở đầu, có [Danh Chủ][Noun Subject] "the system" và cụm hành động phối hợp phía sau.</li>
      
          <li className="list-none">Chức năng: [how the system creates new user profiles] - [Danh Câu][Noun Clause] trở thành [Danh Nhận][Noun Object] chứa dữ liệu mục tiêu chịu tác động từ hành động [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "explained".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>4.1.2</strong> <strong>Hình thành chức năng</strong> [<strong>Tính Câu</strong>][<strong>Adjective Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 10:</p>
      
        <ul className="list-square">
      
          <li>The tool [which creates high-resolution images] was recently updated.</li>
          <li className="margin-bottom-20 list-none">Công cụ [cái mà tạo ra các hình ảnh độ phân giải cao] gần đây đã được cập nhật.</li>
      
          <li className="list-none">Hình thái: [which creates high-resolution images] - [Hiển-Liên Động Câu][Connector Verb Clause] chứa thành phần [Liên Cơ][Connector Base] vật thể "which" ở đầu, mang hạt nhân hành động xử lý bối cảnh thuộc trục thời hiện tại.</li>
      
          <li className="list-none">Chức năng: [which creates high-resolution images] - [Tính Câu][Adjective Clause] hoạt động như một module lọc bổ sung đặt sau một khối tên gọi để nhận diện đối tượng "tool".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>4.1.3</strong> <strong>Hình thành chức năng</strong> [<strong>Trạng Câu</strong>][<strong>Adverb Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11:</p>
      
        <ul className="list-square">
      
          <li>The project succeeded [because the team created a comprehensive strategy].</li>
          <li className="margin-bottom-20 list-none">Dự án đã thành công [vì đội ngũ đã tạo ra một chiến lược toàn diện].</li>
      
          <li className="list-none">Hình thái: [because the team created a comprehensive strategy] - [Hiển-Liên Động Câu][Connector Verb Clause] kích hoạt ngay sau thành phần [Liên Cơ][Connector Base] nguyên nhân "because", chứa [Danh Chủ][Noun Subject] "the team" và cụm hành động mang dấu mốc trục thời quá khứ.</li>
      
          <li className="list-none">Chức năng: [because the team created a comprehensive strategy] - [Trạng Câu][Adverb Clause] thiết lập module bối cảnh để bổ nghĩa cho toàn bộ phần diện thông tin chính "The project succeeded" đứng trước.</li>
      
        </ul>



      <h5 className="margin-y-30 text-indent-whole">4.2 Phân hệ [Ẩn-Liên Động Câu][Zero-Connector Verb Clause]</h5>

      <p className="margin-top-20 text-indent-whole"><strong>4.2.1</strong> <strong>Hình thành chức năng</strong> [<strong>Danh Câu</strong>][<strong>Noun Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11a:</p>
      
        <ul className="list-square">
      
          <li>They believe [the startup created a revolutionary product].</li>
          <li className="margin-bottom-20 list-none">Họ tin rằng [công ty khởi nghiệp đã tạo ra một sản phẩm mang tính cách mạng].</li>
      
          <li className="list-none">Hình thái: [the startup created a revolutionary product] - [Ẩn-Liên Động Câu][Zero-Connector Verb Clause] đã ẩn thành phần [Liên Cơ][Connector Base] định hướng "that", chỉ còn hiển thị trọn vẹn khối [Danh Chủ][Noun Subject] "the startup" và cụm hành động phía sau.</li>
      
          <li className="list-none">Chức năng: [the startup created a revolutionary product] - [Danh Câu][Noun Clause] đóng vai trò làm [Danh Nhận][Noun Object] nhận toàn bộ năng lượng từ [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "believe".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>4.2.2</strong> <strong>Hình thành chức năng</strong> [<strong>Tính Câu</strong>][<strong>Adjective Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11b:</p>
      
        <ul className="list-square">
      
          <li>The design [she created] won first place in the competition.</li>
          <li className="margin-bottom-20 list-none">Thiết kế [mà cô ấy đã tạo ra] đã giành giải nhất trong cuộc thi.</li>
      
          <li className="list-none">Hình thái: [she created] - [Ẩn-Liên Động Câu][Zero-Connector Verb Clause] đã ẩn thành phần [Liên Cơ][Connector Base] vật thể đứng trước, giữ lại khối [Danh Chủ][Noun Subject] "she" và [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "created".</li>
      
          <li className="list-none">Chức năng: [she created] - [Tính Câu][Adjective Clause] đóng vai trò như bộ quét đặt ngay sau đối tượng "The design" để làm rõ đặc điểm cho đối tượng này.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>4.2.3</strong> <strong>Hình thành chức năng</strong> [<strong>Trạng Câu</strong>][<strong>Adverb Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11c:</p>
      
        <ul className="list-square">
      
          <li>[Should the system create duplicate entries], run the cleanup script.</li>
          <li className="margin-bottom-20 list-none">[Nếu hệ thống tạo ra các mục trùng lặp], hãy chạy kịch bản dọn dẹp.</li>
      
          <li className="list-none">Hình thái: [Should the system create duplicate entries] - [Ẩn-Liên Động Câu][Zero-Connector Verb Clause] vận hành ở trạng thái ẩn thành phần [Liên Cơ][Connector Base] điều kiện "if" bằng giải pháp đảo [Áp-Thái Động Cơ][Assertive-Modal Verb Base] "Should" lên trước, tuy thiết lập bề mặt biến đổi nhưng bản chất vẫn giữ trọn vẹn [Danh Chủ][Noun Subject] "the system" và [Thuần Động Cơ][Bare Verb Base] "create duplicate entries".</li>
      
          <li className="list-none">Chức năng: [Should the system create duplicate entries] - [Trạng Câu][Adverb Clause] đảm nhận nhiệm vụ thiết lập khối bối cảnh giả định/điều kiện để bổ nghĩa cho toàn bộ phần diện thông tin chính phía sau.</li>
      
        </ul>



      <h4 className="margin-y-40">5. Phân hệ [Tầng Đóng Gói][Tiered Structure]</h4>

      <p className="margin-top-20 text-indent-whole"><strong>5.1</strong> <strong>Hình thành chức năng</strong> [<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tầng Hạt Thuần Động Cụm</strong>][<strong>Tiered Particle Bare Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]</p>
      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12a:</p>
      
        <ul className="list-square">
      
          <li>It requires technical skills [to analyze {'{how the platform creates personalized content}'}].</li>
          <li className="margin-bottom-20 list-none">Nó đòi hỏi các kỹ năng kỹ thuật [để phân tích {'{cách nền tảng tạo ra nội dung cá nhân hóa}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: [to analyze {'{how the platform creates personalized content}'}] - [Tầng Hạt Thuần Động Cụm][Tiered Particle Bare Verb Phrase] lớn biểu hiện dưới dạng một vùng mã mở rộng bắt đầu bằng [Hạt Thuần Động Cơ][Particle Bare Verb Base] "to analyze" và kéo theo thành phần bổ trợ phía sau.</li>
      
          <li className="list-none">Chức năng: [to analyze {'{how the platform creates personalized content}'}] - [<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] chịu trách nhiệm làm một vùng đầu việc lớn, đảm nhận vai trò làm [Danh Chủ][Noun Subject] đứng sau [Thời-Thuần Động Cụm][Tense-Bare Verb Phrase] "requires technical skills" để bổ nghĩa cho [Giữ Chủ][Placeholder Subject] "It" ở đầu câu.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: {'{how the platform creates personalized content}'} - [Hiển-Liên Động Câu][Connector Verb Clause] định hình dưới dạng một khối mã con nằm gọn hoàn toàn bên trong vùng mã tổng thể, chứa đầy đủ [Danh Chủ][Noun Subject] riêng "the platform" và cụm hành động riêng thiết lập theo trục thời hiện tại đi sau thành phần [Liên Cơ][Connector Base] "how".</li>
      
          <li className="list-none">Chức năng: {'{how the platform creates personalized content}'} - [Danh Câu][Noun Clause] đóng vai trò làm [Danh Nhận][Noun Object] chịu sự điều phối trực tiếp từ hạt nhân hành động "analyze" ở tầng ngoài, tích hợp chuỗi thông tin tiếp nhận hành động để làm rõ nội dung cho việc phân tích.</li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tầng Tiếp Động Cụm</strong>][<strong>Tiered Progressive Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]</p>
      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12b:</p>
      
        <ul className="list-square">
      
          <li>The company suggested [exploring {'{why the campaign created mixed reactions}'}].</li>
          <li className="margin-bottom-20 list-none">Công ty đã gợi ý [việc khám phá {'{lý do tại sao chiến dịch lại tạo ra những phản ứng trái chiều}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: [exploring {'{why the campaign created mixed reactions}'}] - [Tầng Tiếp Động Cụm][Tiered Progressive Verb Phrase] bắt đầu bằng [Tiếp Động Cơ][Progressive Verb Base] "exploring" kết hợp vùng mã mở rộng phía sau.</li>
      
          <li className="list-none">Chức năng: [exploring {'{why the campaign created mixed reactions}'}] - [<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] đóng vai trò làm [Danh Nhận][Noun Object] đứng ngay sau hạt nhân [Thời Động Cơ][Tense Verb Base] "suggested" để bổ bổ sung trọn vẹn thông tin cho hành động gợi ý này.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: {'{why the campaign created mixed reactions}'} - [Hiển-Liên Động Câu][Connector Verb Clause] định hình dưới dạng một khối mã con nằm gọn hoàn toàn bên trong vùng mã tổng thể, chứa đầy đủ [Danh Chủ][Noun Subject] riêng "the campaign" và cụm hành động riêng thiết lập theo trục thời quá khứ đi sau thành thành phần [Liên Cơ][Connector Base] "why".</li>
      
          <li className="list-none">Chức năng: {'{why the campaign created mixed reactions}'} - [Danh Câu][Noun Clause] đóng vai trò làm [Danh Nhận][Noun Object] chịu sự điều phối trực tiếp từ hạt nhân hành động "exploring" ở tầng ngoài, làm rõ nội dung cho việc khám phá.</li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole"><strong>5.2</strong> <strong>Hình thành chức năng</strong> [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 13:</p>
      
        <ul className="list-square">
      
          <li>The committee reviewed documents [concerning {'{how the system creates database backups}'}].</li>
          <li className="margin-bottom-20 list-none">Ủy ban đã xem xét các tài liệu [liên quan đến {'{cách hệ thống tạo ra các bản sao lưu cơ sở dữ liệu}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: [concerning {'{how the system creates database backups}'}] - [Tầng Giới Cụm][Tiered Prepositional Phrase] (với "concerning" đóng vai trò [Giới Cơ][Prepositional Base]) biểu thị dưới dạng một vùng mã lớn.</li>
      
          <li className="list-none">Chức năng: [concerning {'{how the system creates database backups}'}] - [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] vận hành như một bộ quét tổng thể đặt ngay phía sau để mô tả đặc điểm nội dung cho [Danh Cơ][Noun Base] "documents" đứng trước nó.</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: {'{how the system creates database backups}'} - [Hiển-Liên Động Câu][Connector Verb Clause] định hình dưới dạng khối mã con nằm gọn bên trong, chứa [Danh Chủ][Noun Subject] "the system" và cụm hành động đi sau thành phần [Liên Cơ][Connector Base] "how".</li>
      
          <li className="list-none">Chức năng: {'{how the system creates database backups}'} - [Danh Câu][Noun Clause] đóng vai trò làm [Danh Nhận][Noun Object] chịu sự điều phối trực tiếp ở tầng ngoài.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>5.3</strong> <strong>Hình thành chức năng</strong> [<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 14:</p>
      
        <ul className="list-square">
      
          <li>The audit focused [on {'{why the department created excessive expenses}'}].</li>
          <li className="margin-bottom-20 list-none">Việc kiểm toán đã tập trung [vào {'{lý do tại sao bộ phận lại tạo ra các khoản chi phí quá mức}'}].</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: [on {'{why the department created excessive expenses}'}] - [Tầng Giới Cụm][Tiered Prepositional Phrase] biểu thị dưới dạng một vùng mã xác lập nội dung lớn bắt đầu bằng [Giới Cơ][Prepositional Base] "on".</li>
      
          <li className="list-none">Chức năng: [on {'{why the department created excessive expenses}'}] - [<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] đảm nhận vai trò làm một khối bối cảnh địa điểm/nội dung tổng thể đứng sau bổ nghĩa cho hành động [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "focused".</li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none">Hình thái: {'{why the department created excessive expenses}'} - [Hiển-Liên Động Câu][Connector Verb Clause] định hình dưới dạng khối mã con nằm gọn bên trong, chứa [Danh Chủ][Noun Subject] riêng "the department" và cụm hành động riêng thuộc trục thời quá khứ đi sau thành phần [Liên Cơ][Connector Base] "why".</li>
      
          <li className="list-none">Chức năng: {'{why the department created excessive expenses}'} - [Danh Câu][Noun Clause] đóng vai trò làm [Danh Nhận][Noun Object] chịu sự điều phối trực tiếp của [Giới Cơ][Prepositional Base] "on" ở tầng ngoài.</li>
      
        </ul>
      


      {/* 2.  */}

			<h3 className="margin-y-50 text-center">PHẦN 2: ỨNG DỤNG ĐỘT PHÁ – GIẢI MÃ PARAPHRASING BẰNG KỸ THUẬT [THẾ KHỐI]</h3>

      <h4 className="margin-y-40">1. Phân hệ [Động][Verb]: Thay đổi các module chứa hành động</h4>

      <p className="margin-top-20 text-indent-whole"><strong>Case 1</strong>: <strong>Giữ nguyên cấp độ</strong> [<strong>Cụm</strong>][<strong>Phrase</strong>]</p>
      
        <ul className="list-square">
      
          <li>[Creating automated workflows for clients] requires technical expertise.</li>
          <li className="margin-bottom-20 list-none">[Việc tạo ra các quy trình làm việc tự động cho khách hàng] đòi hỏi chuyên môn kỹ thuật.</li>
      
          <li className="list-none">Hình thái gốc: [Creating automated workflows for clients] - [Tiếp Động Cụm][Progressive Verb Phrase] biểu hiện dưới dạng khối mã mở rộng chứa hành động và đối tượng đi kèm.</li>
      
          <li className="list-none">Chức năng: [Creating automated workflows for clients] - [Danh Cụm][Noun Phrase] vận hành như một phân hệ [Danh Chủ][Noun Subject] để quản lý một đầu việc lớn ở đầu câu.</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Thế khối tương đương</strong> [<strong>Tiếp Động Cụm</strong>][<strong>Progressive Verb Phrase</strong>]</p>
      
        <ul className="list-square">
      
          <li>[Developing customized software tools for users] requires technical expertise.</li>
          <li className="margin-bottom-20 list-none">[Việc phát triển các công cụ phần mềm tùy chỉnh cho người dùng] đòi hỏi chuyên môn kỹ thuật.</li>
      
          <li className="list-none">Hình thái mới: [Developing customized software tools for users] - [Tiếp Động Cụm][Progressive Verb Phrase] mới chứa một hành động tiếp diễn khác cùng chuỗi dữ liệu mở rộng được đưa vào thế chỗ.</li>
      
          <li className="list-none">Chức năng mới: [Developing customized software tools for users] - [Danh Cụm][Noun Phrase] duy trì chính xác chức năng làm thành phần [Danh Chủ][Noun Subject] của khối cũ.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>Case 2</strong>: <strong>Kỹ thuật nâng cấp từ</strong> [<strong>Cụm</strong>][<strong>Phrase</strong>] <strong>lên</strong> [<strong>Câu</strong>][<strong>Clause</strong>]</p>
      
        <ul className="list-square">
      
          <li>The company boosted sales [by creating innovative marketing campaigns].</li>
          <li className="margin-bottom-20 list-none">Công ty đã tăng doanh số [bằng cách tạo ra các chiến dịch tiếp thị đổi mới].</li>
      
          <li className="list-none">Hình thái gốc: [by creating innovative marketing campaigns] - [Giới Cụm][Prepositional Phrase] hiển thị dưới dạng một vùng mã chứa [Giới Cơ][Prepositional Base] phương thức "by" đi kèm cụm hành động phía sau.</li>
      
          <li className="list-none">Chức năng: [by creating innovative marketing campaigns] - [Trạng Cụm][Adverb Phrase] đảm nhận vai trò làm một khối bối cảnh phương thức đứng sau bổ nghĩa cho hành động [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "boosted".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nâng cấp lên</strong> [<strong>Hiển-Liên Động Câu</strong>][<strong>Connector Verb Clause</strong>]</p>
      
        <ul className="list-square">
      
          <li>The company boosted sales [because the team created innovative marketing campaigns].</li>
          <li className="margin-bottom-20 list-none">Công ty đã tăng doanh số [vì đội ngũ đã tạo ra các chiến dịch tiếp thị đổi mới].</li>
      
          <li className="list-none">Hình thái mới: [because the team created innovative marketing campaigns] - [Hiển-Liên Động Câu][Connector Verb Clause] hiển thị dưới dạng khối mã chứa đầy đủ [Danh Chủ][Noun Subject] "the team" và cụm hành động đi sau thành phần [Liên Cơ][Connector Base] "because".</li>
      
          <li className="list-none">Chức năng mới: [because the team created innovative marketing campaigns] - [Trạng Câu][Adverb Clause] đảm nhận vai trò bối cảnh nguyên nhân ở cấp độ cao cấp hơn, bổ nghĩa cho toàn bộ phần diện thông tin chính.</li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>Case 3</strong>: <strong>Kỹ thuật hạ cấp từ</strong> [<strong>Câu</strong>][<strong>Clause</strong>] <strong>về</strong> [<strong>Cơ</strong>][<strong>Base</strong>]</p>
      
        <ul className="list-square">
      
          <li>The firm hired an agency [which creates promotional materials effectively].</li>
          <li className="margin-bottom-20 list-none">Công ty đã thuê một đại lý [cái mà tạo ra các tài liệu quảng cáo một cách hiệu quả].</li>
      
          <li className="list-none">Hình thái gốc: [which creates promotional materials effectively] - [Hiển-Liên Động Câu][Connector Verb Clause] thiết lập theo dạng phân hệ hệ con đầy đủ bổ nghĩa đứng sau một khối tên gọi, chứa thành phần [Liên Cơ][Connector Base] "which" và cụm hành động phía sau.</li>
      
          <li className="list-none">Chức năng: [which creates promotional materials effectively] - [Tính Câu][Adjective Clause] đóng vai trò một module lọc nhằm định nghĩa đặc điểm cho đối tượng "agency".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hạ cấp về</strong> [<strong>Diện Tính Cơ</strong>][<strong>Modified Adjective Base</strong>]</p>
      
        <ul className="list-square">
      
          <li>The firm hired a [creative] agency.</li>
          <li className="margin-bottom-20 list-none">Công ty đã thuê một đại lý [sáng tạo].</li>
      
          <li className="list-none">Hình thái mới: [creative] - [Diện Tính Cơ][Modified Adjective Base] hình thành từ khối [Rễ Động Cơ][Root Verb Base] nguyên bản "create" kết hợp đuôi "-ive" để thay đổi diện mạo bên ngoài thành một khối cấp độ [Cơ][Base] có khả năng mô tả đặc điểm, thu gọn hoàn toàn dưới dạng một thành phần tính đơn duy nhất đứng trước đối tượng.</li>
      
          <li className="list-none">Chức năng mới: [creative] - [Tính Cơ][Adjective Base] thiết lập vị trí ngay trước đối tượng để quét và hiển thị ngắn gọn đặc điểm của đối tượng đó.</li>
      
        </ul>


      <h4 className="margin-y-40">2. Phân hệ [Giới][Preposition]: Thay đổi các module chứa mã định vị</h4>

      <p className="margin-top-20 text-indent-whole"><strong>Case 4</strong>: <strong>Kỹ thuật hoán đổi vị trí cấp độ</strong> [<strong>Cụm</strong>][<strong>Phrase</strong>]</p>
      
        <ul className="list-square">
      
          <li>The system rebooted [for the creation of a system backup].</li>
          <li className="margin-bottom-20 list-none">Hệ thống đã khởi động lại [phục vụ cho việc tạo ra một bản sao lưu hệ thống].</li>
      
          <li className="list-none">Hình thái gốc: [for the creation of a system backup] - [Giới Cụm][Prepositional Phrase] bắt đầu bằng [Giới Cơ][Prepositional Base] chỉ lý do / bối cảnh "for" để kéo theo khối danh cụm phía sau.</li>
      
          <li className="list-none">Chức năng: [for the creation of a system backup] - [Trạng Cụm][Adverb Phrase] thực thi vai trò làm khối bối cảnh nguyên nhân / mục đích đứng sau để xác định cơ sở cho hành động [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "rebooted".</li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Thế khối tương đương</strong> [<strong>Phức Giới Cụm</strong>][<strong>Complex Prepositional Phrase</strong>]:</p>
      
        <ul className="list-square">
      
          <li>The system rebooted [because of the creation of a system backup].</li>
          <li className="margin-bottom-20 list-none">Hệ thống đã khởi động lại [bởi vì việc tạo ra một bản sao lưu hệ thống].</li>
      
          <li className="list-none">Hình thái mới: [because of the creation of a system backup] - [Phức Giới Cụm][Complex Prepositional Phrase] mới, bắt đầu bằng [Phức Giới Cơ][Complex Prepositional Base] "because of" được đưa vào thế chỗ.</li>
      
          <li className="list-none">Chức năng mới: [because of the creation of a system backup] - [Trạng Cụm][Adverb Phrase] đảm nhận vai trò thiết lập khối bối cảnh nguyên nhân tổng thể đứng sau bổ nghĩa cho hành động [Thời-Thuần Động Cơ][Tense-Bare Verb Base] "rebooted" mà không làm biến dạng sơ đồ sắp xếp tổng thể của câu.</li>
      
        </ul>

      

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>July 07, 2026 · by 💎Gem ·</span>
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