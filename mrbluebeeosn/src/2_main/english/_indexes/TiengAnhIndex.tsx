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


      <div className="vocabulary-container margin-top-20">
                      

        

      

      </div>


      <div className="flex-container margin-top-20">


          {/* =============================
              pronunciAtion
          ============================= */}

        {/* <div className="sub-box">

          
      
          <p id="pronunciation-terms"><mark className="highlight-secondary-padding-2-4">pronunciAtion</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/pronunciation/5-vowel-system">7 dấu phụ phiên âm tiếng Anh
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

        </div> */}

        <div className="sub-box">

          {/* =============================
              VERBS
          ============================= */}
      
          <p id="verbs-terms"><mark className="highlight-secondary-padding-2-4">VERBS</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/6-types-of-verbs">6 Types of Verbs
                {/* <sup>&nbsp;1&nbsp;</sup> */}
                </Link>
                {/* <Link to="/tieng-anh/6-dang-hanh-dong-2">
                  <sup>&nbsp;2&nbsp;</sup>
                </Link> */}
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/present-perfect">PREsent PERfect</Link>
              </div>
            </li>

            

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/meo-hay-de-viet-tieng-anh-muot-ma-hon">Mẹo Hay Để Viết Tiếng Anh Mượt Mà Hơn</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/6-dang-hanh-dong">6 Dạng [Hành Động]</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/khoang-thoi-gian-hanh-dong-o-hien-tai-hoan-thanh">📏 Khoảng Thời Gian Hành Động ở Hiện Tại Hoàn Thành</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/5-dang-dong-tu-vang-rong-1">5 Dạng [ĐỘNG] “Vàng Ròng”
                <sup>&nbsp;1&nbsp;</sup>
                </Link>
                <Link to="/tieng-anh/5-dang-dong-tu-vang-rong-2">
                  <sup>&nbsp;2&nbsp;</sup>
                </Link>
              </div>
            </li> */}
            
            
            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-nhan-dien-cum-danh-tu-tieng-anh">Nhận Diện Danh Cụm</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-nhan-dien-cum-dong-tu-tieng-anh">Nhận Diện Động Cụm</Link>
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
                <Link to="/tieng-anh/huong-dan-sap-xep-cum-danh-tu-tieng-anh">Hướng Dẫn Sắp Xếp Danh Cụm</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-sap-xep-cum-dong-tu-tieng-anh">Hướng Dẫn Sắp Xếp Động Cụm</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-viet-cum-danh-tu-tieng-anh">Hướng Dẫn Viết Danh Cụm</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-viet-cum-dong-tu-tieng-anh">Hướng Dẫn Viết Động Cụm</Link>
              </div>
            </li> */}

            {/* <li>
              <Link to="/tieng-anh/huong-dan-viet-cum-danh-tu-tieng-anh">Danh Cụm
                <sup>&nbsp;1&nbsp;</sup>
                  </Link> 
                  <Link to="/tieng-anh/huong-dan-dich-cum-danh-tu-tieng-anh">
                <sup>&nbsp;2&nbsp;</sup>
              </Link>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-dich-cum-dong-tu-tieng-anh">Hướng Dẫn Dịch [Động Cụm] Tiếng Anh</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-dich-cau-hoi-tieng-anh">Hướng Dẫn Dịch Câu Hỏi Tiếng Anh</Link>
              </div>
            </li> */}
        
            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/thoi-gian-hanh-dong-tieng-anh">12 Thời Gian Hành Động Tiếng Anh</Link>
              </div>
            </li> */}

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/nho-12-thoi-gian-hanh-dong-tieng-anh">Nhớ 12 Thời Gian Hành Động Tiếng Anh</Link>
              </div>
            </li> */}

          </ul>

        </div>


        <div className="sub-box">

          {/* =============================
              ADjective
          ============================= */}
      
          <p id="adjective-terms"><mark className="highlight-secondary-padding-2-4">ADjective</mark></p>

          <ul className="list-border1">

            {/* <li>
              <div className="li-content">
                <Link to="/tieng-anh/the-adjective-head-first">THE "ADjective HEAD" FIRST</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/the-beauty-of-the-girl-1">the BEAUty of the GIRL
                </Link>
              </div>
            </li> */}
            
            <li>
              <div className="li-content">
                <Link to="/tieng-anh/tips-for-recognizing-adjectives">Tips for Recognizing ADJECTIVES</Link>
              </div>
            </li>

          </ul>

        </div>

      

      </div>




    </article>
    
  </main>

  </>);
}