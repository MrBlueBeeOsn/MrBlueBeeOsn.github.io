import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function VocabularyIndex() {
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
        6. Vocabulary Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="vocabulary-terms">Từ vựng Terms</h3>

    <div className="flex-container">

      <div className="sub-box-fix">

        {/* =============================
        Tính chính xác
        ============================= */}
    
        <p id="tinh-chinh-xac-terms"><mark className="highlight-secondary-padding-2-4">Tính chính xác</mark></p>

        <ul className="list-border1">
          
          <li>
            <Link to="/vocabulary/accurately-1">accurately
              <sup>&nbsp;1&nbsp;</sup>
                </Link> 
                <Link to="/vocabulary/accurately-2">
              <sup>&nbsp;2&nbsp;</sup>
            </Link>
          </li>

          <li>
            <Link to="/vocabulary/precisely-1">precisely
              <sup>&nbsp;1&nbsp;</sup>
            </Link>
            <Link to="/vocabulary/precisely-2">
              <sup>&nbsp;2&nbsp;</sup>
            </Link>
          </li>
          
          <li>
            <Link to="/vocabulary/correctly-1">correctly
              <sup>&nbsp;1&nbsp;</sup>
            </Link>
            <Link to="/vocabulary/correctly-2">
              <sup>&nbsp;2&nbsp;</sup>
            </Link>
          </li>

          <li>
            <Link to="/vocabulary/exactly-1">exactly
              <sup>&nbsp;1&nbsp;</sup>
            </Link>
            <Link to="/vocabulary/exactly-2">
              <sup>&nbsp;2&nbsp;</sup>
            </Link>
          </li>
          
        </ul>

      </div>

      <div className="sub-box-fix">

        {/* =============================
        Tính tỉ mỉ
        ============================= */}
    
        <p id="tinh-ti-mi-terms"><mark className="highlight-secondary-padding-2-4">Tính tỉ mỉ</mark></p>

        <ul className="list-border1">

          <li>
            <Link to="/vocabulary/painstakingly-1">painstakingly
              <sup>&nbsp;1&nbsp;</sup>
                </Link> 
                <Link to="/vocabulary/painstakingly-2">
              <sup>&nbsp;2&nbsp;</sup>
            </Link>
          </li>

          <li>
            <Link to="/vocabulary/thoroughly-1">thoroughly
              <sup>&nbsp;1&nbsp;</sup>
                </Link> 
                <Link to="/vocabulary/thoroughly-2">
              <sup>&nbsp;2&nbsp;</sup>
            </Link>
          </li>
          
          <li>
            <Link to="/vocabulary/diligently-1">diligently
              <sup>&nbsp;1&nbsp;</sup>
                </Link> 
                <Link to="/vocabulary/diligently-2">
              <sup>&nbsp;2&nbsp;</sup>
            </Link>
          </li>

          <li>
            <Link to="/vocabulary/scrupulously-1">scrupulously
              <sup>&nbsp;1&nbsp;</sup>
                </Link> 
                <Link to="/vocabulary/scrupulously-2">
              <sup>&nbsp;2&nbsp;</sup>
            </Link>
          </li>
          
        </ul>

      </div>

    </div>
    
  </main>

  </>);
}