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
    
    <ul className="list-border1">

      <li>
        <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">7 dấu phụ phiên âm tiếng Anh
          <sup>&nbsp;1&nbsp;</sup>
        </Link>
        <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-2">
          <sup>&nbsp;2&nbsp;</sup>
        </Link>
      </li>

      <li><Link to="/tieng-anh/nguyen-am-don">Nguyên âm đơn</Link></li>

      <li><Link to="/tieng-anh/nguyen-am-doi">Nguyên âm đôi</Link></li>
      
    </ul>
    
  </main>

  </>);
}