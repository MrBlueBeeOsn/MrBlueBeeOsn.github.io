import { Link } from "react-router-dom";

export default function Home_English() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        1. English Learning Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="english-learning-terms">English Learning Terms</h3>
    
    <ul className="list-border1">
      
      <li><Link to="/english/what-is-english?">English</Link></li>
      
      <li><Link to="/english/what-is-the-english-language?">The English language</Link></li>
      
      
    </ul>

    {/* =============================
        2. Grammar Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="grammar-terms">Grammar Terms</h3>

    <ul className="list-border1">

      <li><Link to="/english/grammar/what-is-an-adverb?">Adverb</Link></li>

      <li><Link to="/english/grammar/what-is-a-verb?">Verb</Link></li>

      <li><Link to="/english/grammar/what-is-an-adjective?">Adjective</Link></li>

      <li><Link to="/english/grammar/what-is-a-noun?">Noun</Link></li>

    </ul>

    {/* =============================
        3. Pronunciation Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="pronunciation-terms">Pronunciation Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="/english/pronunciation/what-is-pronunciation?">Pronunciation</Link></li>

      <li><Link to="/english/pronunciation/what-is-IPA?">IPA</Link></li>
      
    </ul>

    {/* =============================
        4. Mr. Bee's Articles
    ============================= */}

    <h3 className="margin-y-50 text-center" id="mr-bee-osn-english-terms">Mr. Bee Osn English Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="/english/mrbeeenglish/searching-and-clickable-dictionary">Searching and clickable dictionary</Link></li>
      
    </ul>

    {/* =============================
        5. Tiếng Anh Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="tieng-anh-terms">Tiếng Anh Terms</h3>
    
    <ul className="list-border1">

      <li>
        <Link to="/english/tienganh/he-thong-7-dau-phu-phien-am-tieng-anh-1">7 dấu phụ phiên âm tiếng Anh
          <sup>&nbsp;1&nbsp;</sup>
        </Link>
        <Link to="/english/tienganh/he-thong-7-dau-phu-phien-am-tieng-anh-2">
          <sup>&nbsp;2&nbsp;</sup>
        </Link>
      </li>

      <li><Link to="/english/tienganh/nguyen-am-don">Nguyên âm đơn</Link></li>

      <li><Link to="/english/tienganh/nguyen-am-doi">Nguyên âm đôi</Link></li>
      
    </ul>

    {/* =============================
        6. Vocabulary Terms
    ============================= */}

    <h3 className="margin-y-50 text-center" id="vocabulary-terms">Vocabulary Terms</h3>

    {/* =============================
        Tính chính xác
    ============================= */}
    
    <p id="tinh-chinh-xac-terms">Tính chính xác</p>

    <ul className="list-border1">
      
      <li>
        <Link to="/english/vocabulary/accurately-1">accurately
          <sup>&nbsp;1&nbsp;</sup>
            </Link> 
            <Link to="/english/vocabulary/accurately-2">
          <sup>&nbsp;2&nbsp;</sup>
        </Link>
      </li>

      <li>
        <Link to="/english/vocabulary/precisely-1">precisely
          <sup>&nbsp;1&nbsp;</sup>
        </Link>
        <Link to="/english/vocabulary/precisely-2">
          <sup>&nbsp;2&nbsp;</sup>
        </Link>
      </li>
      
      <li>
        <Link to="/english/vocabulary/correctly-1">correctly
          <sup>&nbsp;1&nbsp;</sup>
        </Link>
        <Link to="/english/vocabulary/correctly-2">
          <sup>&nbsp;2&nbsp;</sup>
        </Link>
      </li>

      <li>
        <Link to="/english/vocabulary/exactly-1">exactly
          <sup>&nbsp;1&nbsp;</sup>
        </Link>
        <Link to="/english/vocabulary/exactly-2">
          <sup>&nbsp;2&nbsp;</sup>
        </Link>
      </li>
      
    </ul>

    {/* =============================
        Tính tỉ mỉ
    ============================= */}
    
    <p className="margin-top-30" id="tinh-ti-mi-terms">Tính tỉ mỉ</p>

    <ul className="list-border1">

      <li>
        <Link to="/english/vocabulary/painstakingly-1">painstakingly
          <sup>&nbsp;1&nbsp;</sup>
            </Link> 
            <Link to="/english/vocabulary/painstakingly-2">
          <sup>&nbsp;2&nbsp;</sup>
        </Link>
      </li>

      <li>
        <Link to="/english/vocabulary/thoroughly-1">thoroughly
          <sup>&nbsp;1&nbsp;</sup>
            </Link> 
            <Link to="/english/vocabulary/thoroughly-2">
          <sup>&nbsp;2&nbsp;</sup>
        </Link>
      </li>
      
      <li>
        <Link to="/english/vocabulary/diligently-1">diligently
          <sup>&nbsp;1&nbsp;</sup>
            </Link> 
            <Link to="/english/vocabulary/diligently-2">
          <sup>&nbsp;2&nbsp;</sup>
        </Link>
      </li>

      <li>
        <Link to="/english/vocabulary/scrupulously-1">scrupulously
          <sup>&nbsp;1&nbsp;</sup>
            </Link> 
            <Link to="/english/vocabulary/scrupulously-2">
          <sup>&nbsp;2&nbsp;</sup>
        </Link>
      </li>
      
    </ul>
    
  </main>

  </>);
}