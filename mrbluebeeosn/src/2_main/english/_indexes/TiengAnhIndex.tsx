import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '@/components/topic/EnglishTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';

export default function TiengAnhIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
          English Topic
      ============================= */}
      
        <EnglishTopic/>

      {/* =============================
          5. Tiếng Anh Terms
      ============================= */}

      <h3 className="margin-y-50 text-center" id="tieng-anh-terms">Tiếng Anh Terms</h3>

      <div className="table-search margin-bottom-50">
            
        <SearchComponent />
        
        <VideoSearch2 />
                    
      </div>

      <div className="vocabulary-container">
                  
        {/* =============================
              Tiếng Anh Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="tieng-anh-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/tieng-anh-questions">Tiếng Anh questions</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

        {/* =============================
              Ngữ pháp Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="ngu-phap-basic-practice"><mark className="highlight-secondary-padding-2-4">Ngữ pháp</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/trac-nghiem-ngu-phap-tieng-anh">Trắc Nghiệm Ngữ Pháp Tiếng Anh</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

        {/* =============================
              Phrasal Verbs Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="phrasal-verbs-basic-practice"><mark className="highlight-secondary-padding-2-4">Cụm động từ</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/phrasal-verbs-quiz">Phrasal Verbs Quiz</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

        {/* =============================
              Phrasal Verbs Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="tense-basic-practice"><mark className="highlight-secondary-padding-2-4">Thì</mark></summary>

          <ul className="list-border1">

              <li>
                <div className="li-content">
                  <Link to="trac-nghiem-thi-tieng-anh">Trắc Nghiệm Thì Tiếng Anh</Link>
                </div>
              </li>

            
            
          </ul>

        </details>

        {/* =============================
              Gerunds và Infinitives Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="ving-tov-basic-practice"><mark className="highlight-secondary-padding-2-4">Gerunds và Infinitives</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/trac-nghiem-gerunds-va-infinitives">Trắc Nghiệm Gerunds và Infinitives</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

      </div>

      <div className="flex-container margin-top-20">

        <div className="sub-box">

          {/* =============================
              Phát âm
          ============================= */}
      
          <p id="tinh-chinh-xac-terms"><mark className="highlight-secondary-padding-2-4">Phát âm</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">7 dấu phụ phiên âm tiếng Anh
                <sup>&nbsp;1&nbsp;</sup>
                </Link>
                <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-2">
                  <sup>&nbsp;2&nbsp;</sup>
                </Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/nguyen-am-don">Nguyên âm đơn</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/nguyen-am-doi">Nguyên âm đôi</Link>
              </div>
            </li>

            
            
          </ul>

        </div>

        <div className="sub-box">

          {/* =============================
              Động từ
          ============================= */}
      
          <p id="tieng-anh-terms"><mark className="highlight-secondary-padding-2-4">Động từ</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/6-dang-dong-tu-tieng-anh-1">6 Dạng Động Từ Tiếng Anh
                <sup>&nbsp;1&nbsp;</sup>
                </Link>
                <Link to="/tieng-anh/6-dang-dong-tu-tieng-anh-2">
                  <sup>&nbsp;2&nbsp;</sup>
                </Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/hieu-dung-ve-thi-hien-tai-hoan-thanh">Hiểu Đúng Về Thì Hiện Tại Hoàn Thành</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/gerunds-va-infinitives">Gerunds và Infinitives</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/bang-dong-tu-bat-quy-tac-pho-bien">Bảng động từ bất quy tắc phổ biến</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/bang-30-phrasal-verbs-pho-bien">Bảng 30 phrasal verbs phổ biến</Link>
              </div>
            </li>

            

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/meo-hay-de-viet-tieng-anh-muot-ma-hon">Mẹo Hay Để Viết Tiếng Anh Mượt Mà Hơn</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/6-dang-dong-tu-tieng-anh">6 Dạng Động Từ Tiếng Anh</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/thi-hien-tai-hoan-thanh">Thì Hiện Tại Hoàn Thành</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/5-dang-dong-tu-vang-rong-1">5 Dạng Động Từ “Vàng Ròng”
                <sup>&nbsp;1&nbsp;</sup>
                </Link>
                <Link to="/tieng-anh/5-dang-dong-tu-vang-rong-2">
                  <sup>&nbsp;2&nbsp;</sup>
                </Link>
              </div>
            </li> */}
            
            
            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-nhan-dien-cum-danh-tu-tieng-anh">Nhận Diện Cụm Danh Từ</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-nhan-dien-cum-dong-tu-tieng-anh">Nhận Diện Cụm Động Từ</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/dich-cau-tieng-viet-sang-tieng-anh">Dịch Câu Sang Tiếng Anh</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/phan-tich-cau-tieng-anh">Phân Tích Câu Tiếng Anh</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-sap-xep-cum-danh-tu-tieng-anh">Hướng Dẫn Sắp Xếp Cụm Danh Từ</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-sap-xep-cum-dong-tu-tieng-anh">Hướng Dẫn Sắp Xếp Cụm Động Từ</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-viet-cum-danh-tu-tieng-anh">Hướng Dẫn Viết Cụm Danh Từ</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-viet-cum-dong-tu-tieng-anh">Hướng Dẫn Viết Cụm Động Từ</Link>
              </div>
            </li> */}

            {/* <li>
              <Link to="/tieng-anh/huong-dan-viet-cum-danh-tu-tieng-anh">Cụm Danh Từ
                <sup>&nbsp;1&nbsp;</sup>
                  </Link> 
                  <Link to="/tieng-anh/huong-dan-dich-cum-danh-tu-tieng-anh">
                <sup>&nbsp;2&nbsp;</sup>
              </Link>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-dich-cum-dong-tu-tieng-anh">Hướng Dẫn Dịch Cụm Động Từ Tiếng Anh</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-dich-cau-hoi-tieng-anh">Hướng Dẫn Dịch Câu Hỏi Tiếng Anh</Link>
              </div>
            </li> */}
        
            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/thi-tieng-anh">12 Thì Tiếng Anh</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/nho-12-thi-tieng-anh">Nhớ 12 Thì Tiếng Anh</Link>
              </div>
            </li> */}

          </ul>

        </div>

      </div>

      <div className="flex-container margin-top-20">

        <div className="sub-box">

          {/* =============================
              Tính từ
          ============================= */}
      
          <p id="tieng-anh-terms"><mark className="highlight-secondary-padding-2-4">Tính từ</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/bi-quyet-nhan-biet-tinh-tu-trong-tieng-anh">Bí Quyết Nhận Biết Tính Từ</Link>
              </div>
            </li>

          </ul>

        </div>

        <div className="sub-box">

          {/* =============================
              Tư Duy
          ============================= */}
      
          <p id="tieng-anh-terms"><mark className="highlight-secondary-padding-2-4">Tư Duy</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/the-beauty-of-the-girl-1">The Beauty of the Girl
                <sup>&nbsp;1&nbsp;</sup>
                </Link>
                <Link to="/tieng-anh/the-beauty-of-the-girl-2">
                  <sup>&nbsp;2&nbsp;</sup>
                </Link>
                <Link to="/tieng-anh/the-beauty-of-the-girl-3">
                  <sup>&nbsp;3&nbsp;</sup>
                </Link>
                <Link to="/tieng-anh/the-beauty-of-the-girl-4">
                  <sup>&nbsp;4&nbsp;</sup>
                </Link>
                <Link to="/tieng-anh/the-beauty-of-the-girl-5">
                  <sup>&nbsp;5&nbsp;</sup>
                </Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/bi-mat-ve-tu-duy-ngon-ngu-1">Bí Mật Về Tư Duy Ngôn Ngữ
                <sup>&nbsp;1&nbsp;</sup>
                </Link>
                <Link to="/tieng-anh/bi-mat-ve-tu-duy-ngon-ngu-2">
                  <sup>&nbsp;2&nbsp;</sup>
                </Link>
                <Link to="/tieng-anh/bi-mat-ve-tu-duy-ngon-ngu-3">
                  <sup>&nbsp;3&nbsp;</sup>
                </Link>
              </div>
            </li>

            

          </ul>

        </div>

      </div>

      <div className="flex-container margin-top-20">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/tieng-anh/giao-vien-tieng-anh-la-gi?">Giáo viên tiếng Anh</Link></li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}