import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Nguyen_Am_Doi() {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/english#tieng-anh-terms"><mark className="highlight2">Tiếng Anh</mark></HashLink></h4>

    <h2 className="margin-y-50 text-center">Nguyên âm đôi
      <sup><Link to="/english/tienganh/nguyen-am-don">&nbsp;1&nbsp;</Link>
      </sup>
      <sup><Link to="/english/tienganh/nguyen-am-doi">&nbsp;2&nbsp;</Link>
      </sup>
      <p className="text-center">(DIPHTHONGS)</p>
    </h2>

    {/* This is the content of English Learning Term. */}

    <div className="table-container">
      <table>
        <thead>

          <tr>
            <th>Ký hiệu</th>
            <th>IPA</th>
            <th>Ví dụ</th>
          </tr>

        </thead>

        <tbody>

          <tr>
              <td>ī, ȳ</td>
              <td>/aɪ/</td>
              <td>ī = time; ȳ = why</td>
          </tr>
          
          <tr>
              <td>ā</td>
              <td>/eɪ/</td>
              <td>ā = cake</td>
          </tr>

          <tr>
              <td>ō</td>
              <td>/oʊ/</td>
              <td>ō = go</td>
          </tr>

          <tr>
              <td>ou, ow</td>
              <td>/aʊ/</td>
              <td>ou = house, ow = now</td>
          </tr>

          <tr>
              <td>oi</td>
              <td>/ɔɪ/</td>
              <td>oi = boy</td>
          </tr>

          <tr>
              <td>ū</td>
              <td>/juː/</td>
              <td>ū = cute</td>
          </tr>

          <tr>
              <td>ư̇</td>
              <td>/jə/</td>
              <td>ư̇ = accurate (ư = support + u̇ = business)</td>
          </tr>

          <tr>
              <td>ã (<Link to="#rp">RP</Link>)</td>
              <td>/eə/ (RP), /e/ (GA)</td>
              <td>ã = square</td>
          </tr>

        </tbody>
      </table>
  
      <div className="margin-y-30">

        <p>📌 Chú thích:</p>

        <ul className="list-square">

          <li id="rp">Trong RP (Received Pronunciation – Anh–Anh): square phát âm là /eə/.</li>

          <li className="margin-bottom-50">Trong GA (General American – Anh–Mỹ): square thường rút ngắn thành /e/.</li>

        </ul>
        
      </div>

    </div>

    <p className="margin-top-50 text-small">September 12, 2025 - by 🐝Mr. Bee Osn and GPT</p>
    
  </main>

  </>);
}