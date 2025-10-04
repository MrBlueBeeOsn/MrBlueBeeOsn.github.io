import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function TiengAnhIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        1. English Learning Terms
    ============================= */}

    <div className="topic-container">

      <div  className="flex-topic">

        <HashLink smooth to="/english">
        <mark className="highlight-tertiary-padding-2-4">English</mark>
        </HashLink>

        <HashLink smooth to="/grammar">
          <mark className="highlight-tertiary-padding-2-4">Grammar</mark>
        </HashLink>

        <HashLink smooth to="/pronunciation">
          <mark className="highlight-tertiary-padding-2-4">Pronunciation</mark>
        </HashLink>

        <HashLink smooth to="/tieng-anh">
          <mark className="highlight-tertiary-padding-2-4">Tiếng Anh</mark>
        </HashLink>

        <HashLink smooth to="/vocabulary">
          <mark className="highlight-tertiary-padding-2-4">Từ vựng</mark>
        </HashLink>

      </div>

    </div>

    {/* =============================
        5. Tiếng Anh Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="tieng-anh-terms">Tiếng Anh Terms</h3>

    <div className="flex-container">

      <div className="sub-box">

        {/* =============================
            Phát âm
        ============================= */}
    
        <p id="tinh-chinh-xac-terms"><mark className="highlight-secondary-padding-2-4">Phát âm</mark></p>

        <ul className="list-border1">

          <li>
            <div class="li-content">
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">7 dấu phụ phiên âm tiếng Anh
              <sup>&nbsp;1&nbsp;</sup>
              </Link>
              <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-2">
                <sup>&nbsp;2&nbsp;</sup>
              </Link>
            </div>
          </li>

          <li>
            <div class="li-content">
              <Link to="/tieng-anh/nguyen-am-don">Nguyên âm đơn</Link>
            </div>
          </li>

          <li>
            <div class="li-content">
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

            <div class="li-content">

              <Link to="/tieng-anh/huong-dan-dich-cum-danh-tu-tieng-anh">Hướng Dẫn Dịch Cụm Danh Từ Tiếng Anh</Link>

            </div>
            
          </li>
      
        </ul>

      </div>

    </div>
    
  </main>

  </>);
}