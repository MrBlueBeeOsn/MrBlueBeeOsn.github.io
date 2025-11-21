import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '@/components/topic/EnglishTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/VideoSearch2';

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

      <div className="flex-container">

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
              Ngữ pháp
          ============================= */}
      
          <p id="tinh-chinh-xac-terms"><mark className="highlight-secondary-padding-2-4">Ngữ pháp</mark></p>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-viet-cum-danh-tu-tieng-anh">Hướng Dẫn Viết Cụm Danh Từ</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/huong-dan-viet-cum-dong-tu-tieng-anh">Hướng Dẫn Viết Cụm Động Từ</Link>
              </div>
            </li>

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
        
          </ul>

        </div>

      </div>

      <div className="flex-container">
      
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