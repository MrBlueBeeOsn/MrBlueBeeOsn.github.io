import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function (): React.JSX.Element {

  const postId = "";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#verbs-terms"><mark className="highlight-tertiary-padding-4-8">VERBs</mark></HashLink></h4>
      
            
      <h1 className="margin-y-50 text-center"></h1>

      {/* This is the content of Vocabulary Term. */}

      <h4 className="margin-bottom-30 text-center">BẢN THIẾT KẾ MÃ NGUỒN VÀ HỆ THỐNG VẬN HÀNH</h4>

      <div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-bottom-20"></p>

          <p></p>

          <p className="margin-top-20">Phát âm: </p>

            <ul className="list-square">
          
              <li></li>
              <li className="margin-bottom-20 list-none"></li>

              <li className="list-none"></li>
          
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
      
          <li value="2">[<strong>Hạt Động Cơ</strong>][<strong>Particle Verb Base</strong>]: to, away, back, over, on</li>
          <li className="margin-bottom-20 list-none">[Hạt] to đơn lẻ đóng vai trò mã định vị độc lập làm điểm tựa khởi động, đặt nền móng trực tiếp trước hành động để kích hoạt trạng thái nguyên bản. Các [Hạt] như away, back, over, on đơn lẻ đứng sau hành động để mở rộng hướng di chuyển, phạm vi tác động, cường độ hoặc trạng thái tiếp diễn/kết thúc của hạt nhân vận hành đó.</li>

          <li value="3">[<strong>Thời Động Cơ</strong>][<strong>Tense Verb Base</strong>]: does, did, is, has, was, am, are</li>
          <li className="margin-bottom-20 list-none">Hành động đơn lẻ xuất hiện để mang năng lượng [Thời] gian / [Thời] trong câu.</li>
      
          <li value="4">[<strong>Ý-Thái Động Cơ</strong>][<strong>Soft-Modal Verb Base</strong>]: would, could, should, might</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ mang tính [Ý] nhị, có [Ý] tư, mong muốn là thật nhưng cách nói nhường nhịn và triệt tiêu tính ép. Các khối phức đặc biệt "ought to" và "had better" được quét như một [Phức Ý-Thái Động Cơ][Complex Soft-Modal Verb Base] thống nhất.</li>

          <li value="5">[<strong>Áp-Thái Động Cơ</strong>][<strong>Assertive-Modal Verb Base</strong>]: will, shall, can, must, may</li>
          <li className="margin-bottom-20 list-none">Hành động chỉ [Thái] độ mang tính trực diện, [Áp] đặt thực tế xuống, không chừa lối thoát cho người nghe. Khối phức đặc biệt "have to" được quét như một [Phức Áp-Thái Động Cơ][Complex Assertive-Modal Verb Base] thống nhất.</li>

          <li value="6">[<strong>Thuần Động Cơ</strong>][<strong>Bare Verb Base</strong>]: </li>
          <li className="margin-bottom-20 list-none">Hành động [Thuần] khiết đứng tự do một mình, hoàn toàn giải phóng và không có "to" đi kèm, thường đứng ngay sau:</li>

          <li className="list-none">[Hạt Động Cơ][Particle Verb Base]: to</li>
          <li className="list-none">[Ý-Thái Động Cơ][Soft-Modal Verb Base]: would, could, should, might</li>
          <li className="list-none">[Áp-Thái Động Cơ][Assertive-Modal Verb Base]: will, shall, can, must, may</li>
          <li className="list-none">Nhóm Động Cơ Sai Khiến / Cho Phép: make, LET, LET'S, have</li>
          <li className="list-none">Nhóm Động Cơ Hỗ Trợ / Tương Tác: help, get (khi ở dạng đặc biệt)</li>
          <li className="margin-bottom-20 list-none">Nhóm Động Cơ Tri Giác / Cảm Nhận: see, hear, watch, feel, notice, observe, smell</li>
      
          <li value="7">[<strong>Hạt Thuần Động Cơ</strong>][<strong>Particle Bare Verb Base</strong>]: </li>
          <li className="margin-bottom-20 list-none">Sự tích hợp thẳng hàng giữa điểm tựa khởi động và cấu trúc hành động [Thuần] khiết đứng độc lập phía sau.</li>

          <li value="8">[<strong>Ý-Thái Thuần Động Cơ</strong>][<strong>Soft-Modal Bare Verb Base</strong>]: </li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Ý] nhị, không ép và hành động [Thuần] khiết.</li>
      
          <li value="9">[<strong>Áp-Thái Thuần Động Cơ</strong>][<strong>Assertive-Modal Bare Verb Base</strong>]: </li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa [Thái] độ, [Áp] đặt thực tế và hành động [Thuần] khiết.</li>

          <li value="10">[<strong>Thời Thuần Động Cơ</strong>][<strong>Tense Bare Verb Base</strong>]: </li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] gian và hành động [Thuần] khiết song hành, được tách riêng biệt bằng một khoảng trắng trong câu.</li>

          <li value="11">[<strong>Thời-Thuần Động Cơ</strong>][<strong>Tense-Bare Verb Base</strong>]: </li>
          <li className="margin-bottom-20 list-none">Trạng thái [Thời] (Quá khứ/Hiện tại) và hành động [Thuần] khiết hòa tan, gộp chung hoàn toàn vào trong cùng một chữ đơn duy nhất.</li>
      
          <li value="12">[<strong>Tiếp Động Cơ</strong>][<strong>Progressive Verb Base</strong>]: </li>
          <li className="margin-bottom-20 list-none">Hành động mang đuôi -ing thể hiện tính chất đang [Tiếp] diễn, kéo dài.</li>

          <li value="13">[<strong>Hoàn Động Cơ</strong>][<strong>Perfect Verb Base</strong>]: </li>
          <li className="margin-bottom-20 list-none">Hành động ở dạng cột 3 hoặc thêm đuôi -ed thể hiện tính chất đã trọn vẹn, [Hoàn] thành.</li>
      
          <li value="14">[<strong>Thời Tiếp Động Cơ</strong>][<strong>Tense Progressive Verb Base</strong>]: </li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa hành động mang [Thời] gian và hành động mang tính chất đang [Tiếp] diễn.</li>

          <li value="15">[<strong>Thời Hoàn Động Cơ</strong>][<strong>Tense Perfect Verb Base</strong>]: </li>
          <li className="margin-bottom-20 list-none">Sự hợp nhất tuyến tính giữa hành động mang [Thời] gian và hành động mang tính chất đã trọn vẹn, [Hoàn] thành.</li>
      
          <li value="16">[<strong>Thời Hoàn Tiếp Động Cơ</strong>][<strong>Tense Perfect Progressive Verb Base</strong>]: </li>
          <li className="list-none">Sự hợp nhất tuyến tính giữa ba lớp năng lượng [Thời] gian, tính chất đã trọn vẹn, [Hoàn] thành và tính chất đang [Tiếp] diễn.</li>
      
        </ol>
      
      

      <h4 className="margin-y-40">b. Phân hệ [Cụm][Phrase]</h4>
          
      <p className="text-indent-whole"><strong>QUY TẮC CỐT LÕI</strong>:</p>

      <p className="text-indent-whole"></p>
      


      {/* 1.  */}

			<h3 className="margin-y-50 text-center">PHẦN 1: HỆ THỐNG CÁC VÍ DỤ PHÂN HỆ MÃ TIẾNG ANH MỚI</h3>

      
      <h4 className="margin-y-40">1. Phân hệ [Động Cơ][Verb Base]</h4>
          
      <p className="margin-top-20 text-indent-whole"><strong>1.1</strong> <strong>Hình thành chức năng</strong> [<strong>Danh Cơ</strong>][<strong>Noun Base</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 1: </p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>1.2</strong> <strong>Hình thành chức năng</strong> [<strong>Tính Cơ</strong>][<strong>Adjective Base</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 2: </p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>1.3</strong> <strong>Hình thành chức năng</strong> [<strong>Trạng Cơ</strong>][<strong>Adverb Base</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 3: </p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>


      <h4 className="margin-y-40">2. Phân hệ [Động Cụm][Verb Phrase]</h4>

      <p className="margin-top-20 text-indent-whole"><strong>2.1</strong> <strong>Hình thành chức năng</strong> [<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tiếp Động Cụm</strong>][<strong>Progressive Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4a:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

  

      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tiếp Động Cụm</strong>][<strong>Progressive Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4b:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Hạt Thuần Động Cụm</strong>][<strong>Particle Bare Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4c:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

  
      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Hạt Thuần Động Cụm</strong>][<strong>Particle Bare Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4d:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Hạt Thuần Động Cụm</strong>][<strong>Particle Bare Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>] <strong>bổ nghĩa</strong> [<strong>Giữ Chủ</strong>][<strong>Placeholder Subject</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 4e:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole"><strong>2.2</strong> <strong>Hình thành chức năng</strong> [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>]</p>

      
      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tiếp Động Cụm</strong>][<strong>Progressive Verb Phrase</strong>] <strong>đang diễn ra</strong>, <strong>chủ động</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5a:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
    

      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Hạt Thuần Động Cụm</strong>][<strong>Particle Bare Verb Phrase</strong>] <strong>sắp xảy ra</strong>, <strong>chủ động</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5b:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      

      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Hạt Thuần Hoàn Động Cụm</strong>][<strong>Particle Bare Perfect Verb Phrase</strong>] <strong>sắp xảy ra</strong>, <strong>bị động</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5c:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Hoàn Động Cụm</strong>][<strong>Perfect Verb Phrase</strong>] <strong>đã xong</strong>, <strong>bị động</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5d:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole">[<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Diện Tính Cụm</strong>][<strong>Modified Adjective Phrase</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 5e:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>2.3</strong> <strong>Hình thành chức năng</strong> [<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>]</p>


      <p className="margin-top-20 text-indent-whole">[<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tiếp Động Cụm</strong>][<strong>Progressive Verb Phrase</strong>] <strong>có dấu phẩy</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6a:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">[<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tiếp Động Cụm</strong>][<strong>Progressive Verb Phrase</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6b:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">[<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Hạt Thuần Động Cụm</strong>][<strong>Particle Bare Verb Phrase</strong>] <strong>có dấu phẩy</strong>:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6c:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">[<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Hạt Thuần Động Cụm</strong>][<strong>Particle Bare Verb Phrase</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 6d:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>



      <h4 className="margin-y-40">3. Phân hệ [Giới Cụm][Prepositional Phrase]</h4>
      
      <p className="margin-top-20 text-indent-whole"><strong>3.1</strong> <strong>Hình thành chức năng</strong> [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 7:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>3.2</strong> <strong>Hình thành chức năng</strong> [<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Giới Cụm</strong>][<strong>Prepositional Phrase</strong>] (<strong>có dấu phẩy</strong>):</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 8a:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole">[<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Giới Cụm</strong>][<strong>Prepositional Phrase</strong>]:</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 8b:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>



      <h4 className="margin-y-40">4. Phân hệ [Liên Câu][Conjunctional Clause]</h4>
          
      <h5 className="margin-y-30 text-indent-whole">4.1 Phân hệ [Liên Câu][Conjunctional Clause]</h5>

      <p className="margin-top-20 text-indent-whole"><strong>4.1.1</strong> <strong>Hình thành chức năng</strong> [<strong>Danh Câu</strong>][<strong>Noun Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>Danh Câu</strong>][<strong>Noun Clause</strong>] <strong>cấu tạo từ</strong> [<strong>Liên Câu</strong>][<strong>Conjunctional Clause</strong>] <strong>làm</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 9a:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>



      <p className="margin-top-20 text-indent-whole">[<strong>Danh Câu</strong>][<strong>Noun Clause</strong>] <strong>cấu tạo từ</strong> [<strong>Liên Câu</strong>][<strong>Conjunctional Clause</strong>] <strong>làm</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 9b:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>4.1.2</strong> <strong>Hình thành chức năng</strong> [<strong>Tính Câu</strong>][<strong>Adjective Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 10:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>4.1.3</strong> <strong>Hình thành chức năng</strong> [<strong>Trạng Câu</strong>][<strong>Adverb Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>



      <h5 className="margin-y-30 text-indent-whole">4.2 Phân hệ [Ẩn-Liên Câu][Zero-Conjunctional Clause]</h5>

      <p className="margin-top-20 text-indent-whole"><strong>4.2.1</strong> <strong>Hình thành chức năng</strong> [<strong>Danh Câu</strong>][<strong>Noun Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11a:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>4.2.2</strong> <strong>Hình thành chức năng</strong> [<strong>Tính Câu</strong>][<strong>Adjective Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11b:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>4.2.3</strong> <strong>Hình thành chức năng</strong> [<strong>Trạng Câu</strong>][<strong>Adverb Clause</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 11c:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>



      <h4 className="margin-y-40">5. Phân hệ [Tầng Đóng Gói][Tiered Structure]</h4>

      <p className="margin-top-20 text-indent-whole"><strong>5.1</strong> <strong>Hình thành chức năng</strong> [<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tầng Tiếp Động Cụm</strong>][<strong>Tiered Progressive Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]</p>
      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12a:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tầng Tiếp Động Cụm</strong>][<strong>Tiered Progressive Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]</p>
      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12b:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tầng Hạt Thuần Động Cụm</strong>][<strong>Tiered Particle Bare Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>]</p>
      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12c:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tầng Hạt Thuần Động Cụm</strong>][<strong>Tiered Particle Bare Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Nhận</strong>][<strong>Noun Object</strong>]</p>
      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12d:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      
      <p className="margin-top-20 text-indent-whole">[<strong>Danh Cụm</strong>][<strong>Noun Phrase</strong>] <strong>cấu tạo từ</strong> [<strong>Tầng Hạt Thuần Động Cụm</strong>][<strong>Tiered Particle Bare Verb Phrase</strong>] <strong>làm</strong> [<strong>Danh Chủ</strong>][<strong>Noun Subject</strong>] <strong>bổ nghĩa</strong> [<strong>Giữ Chủ</strong>][<strong>Placeholder Subject</strong>]</p>
      
      <p className="margin-top-20 text-indent-whole">Ví dụ 12e:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      

      <p className="margin-top-20 text-indent-whole"><strong>5.2</strong> <strong>Hình thành chức năng</strong> [<strong>Tính Cụm</strong>][<strong>Adjective Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 13:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>5.3</strong> <strong>Hình thành chức năng</strong> [<strong>Trạng Cụm</strong>][<strong>Adverb Phrase</strong>]</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ 14:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 1</strong> (<strong>Cấp tổng thể</strong> - [...]):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      <p className="margin-top-20 text-indent-whole"><strong>Tầng 2</strong> (<strong>Cấp thành phần</strong> - {'{...}'}):</p>
      
        <ul className="list-square">
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      


      {/* 2.  */}

			<h3 className="margin-y-50 text-center">PHẦN 2: ỨNG DỤNG ĐỘT PHÁ – GIẢI MÃ PARAPHRASING BẰNG KỸ THUẬT [THẾ KHỐI]</h3>

      <h4 className="margin-y-40">1. Phân hệ [Động][Verb]: Thay đổi các module chứa hành động</h4>

      <p className="margin-top-20 text-indent-whole"><strong>Case 1</strong>: <strong>Giữ nguyên cấp độ</strong> [<strong>Cụm</strong>][<strong>Phrase</strong>]</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Thế khối tương đương</strong> [<strong>Tiếp Động Cụm</strong>][<strong>Progressive Verb Phrase</strong>]</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>Case 2</strong>: <strong>Kỹ thuật nâng cấp từ</strong> [<strong>Cụm</strong>][<strong>Phrase</strong>] <strong>lên</strong> [<strong>Câu</strong>][<strong>Clause</strong>]</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Nâng cấp lên</strong> [<strong>Liên Câu</strong>][<strong>Conjunctional Clause</strong>]</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>


      <p className="margin-top-20 text-indent-whole"><strong>Case 3</strong>: <strong>Kỹ thuật hạ cấp từ</strong> [<strong>Câu</strong>][<strong>Clause</strong>] <strong>về</strong> [<strong>Cơ</strong>][<strong>Base</strong>]</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Hạ cấp về</strong> [<strong>Diện Tính Cơ</strong>][<strong>Modified Adjective Base</strong>]</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>


      <h4 className="margin-y-40">2. Phân hệ [Giới][Preposition]: Thay đổi các module chứa mã định vị</h4>

      <p className="margin-top-20 text-indent-whole"><strong>Case 4</strong>: <strong>Kỹ thuật hoán đổi vị trí cấp độ</strong> [<strong>Cụm</strong>][<strong>Phrase</strong>]</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>
      
      
      <p className="margin-top-20 text-indent-whole"><strong>Thế khối tương đương</strong> [<strong>Phức Giới Cụm</strong>][<strong>Complex Prepositional Phrase</strong>]:</p>
      
        <ul className="list-square">
      
          <li></li>
          <li className="margin-bottom-20 list-none"></li>
      
          <li className="list-none"></li>
      
          <li className="list-none"></li>
      
        </ul>

      

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span> · by 💎Gem ·</span>
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