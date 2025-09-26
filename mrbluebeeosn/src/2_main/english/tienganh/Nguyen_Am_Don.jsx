import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Nguyen_Am_Don() {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/english#tieng-anh-terms"><mark className="highlight2">Tiếng Anh</mark></HashLink></h4>

    <h2 className="margin-y-50 text-center">📌 BẢNG TỔNG HỢP NGUYÊN ÂM ĐƠN
      <sup><Link to="/english/tienganh/nguyen-am-don">&nbsp;1&nbsp;</Link>
      </sup>
      <sup><Link to="/english/tienganh/nguyen-am-doi">&nbsp;2&nbsp;</Link>
      </sup>
      <p className="text-center">(gọn, để tra cứu)</p>
    </h2>

    {/* This is the content of English Learning Term. */}

    <div className="table-container">
      <table>
        <thead>

          <tr>
            <th>IPA</th>
            <th>Ví dụ</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>/æ/</td>
            <td>a = cat</td>
          </tr>

          <tr>
            <td>/e/ (<Link to="#ga">GA</Link>), /eə/ (<Link to="#rp">RP</Link>)</td>
            <td>e = bed; ā̄ = square; ū̄ = bury</td>
          </tr>

          <tr>
            <td>/ɪ/</td>
            <td>i = sit; y = myth; ȧ = image; i̇ = fit; ȯ = women; u̇ = business</td>
          </tr>
     
          <tr>
            <td>/iː/</td>
            <td>ee = bee; ē = he; ï = pizza</td>
          </tr>

          <tr>
            <td>/ɒ/ (RP), /ɑː/ (GA)</td>
            <td>o = hot</td>
          </tr>

          <tr>
            <td>/ʌ/</td>
            <td>â = because; ô = other; û = sun</td>
          </tr>

          <tr>
            <td>/ʊ/</td>
            <td>u = put; oo = book</td>
          </tr>

          <tr>
            <td>/uː/</td>
            <td>o͞o = food; ō̄ = do; ü = Tuesday</td>
          </tr>

          <tr>
            <td>/ɔː/</td>
            <td>ö = shore; å = war</td>
          </tr>

          <tr>
            <td>/ɑː/</td>
            <td>ä = car; ē̄ = genre</td>
          </tr>

          <tr>
            <td>/ə/</td>
            <td>a̛ = about, e̛ = taken, i̛ = pencil, ơ = lemon, ư = support</td>
          </tr>

          <tr>
            <td>/ɜːr/</td>
            <td>e̛r = her, i̛r = bird, ơr = word, ưr =nurse</td>
          </tr>

        </tbody>
      </table>
  
      <div className="margin-y-30">
        
        <p>📌 Chú thích:</p>

        <ul className="list-square">

          <li>Trong RP (Received Pronunciation – Anh–Anh): square phát âm là /eə/.</li>

          <li className="margin-bottom-50" id="ga">Trong GA (General American – Anh–Mỹ): square thường rút ngắn thành /e/.</li>

        </ul>

      </div>

    </div>

    <p className="margin-top-50 text-small">September 12, 2025 - by 🐝Mr. Bee Osn and GPT</p>
    
  </main>

  </>);
}