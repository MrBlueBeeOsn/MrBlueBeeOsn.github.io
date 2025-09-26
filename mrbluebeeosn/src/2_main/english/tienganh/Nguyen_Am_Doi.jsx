import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Nguyen_Am_Doi() {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/english#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

    <h2 className="margin-y-50 text-center">📌 BẢNG TỔNG HỢP NGUYÊN ÂM ĐÔI
      <sup><HashLink smooth to="/english/tienganh/nguyen-am-don">&nbsp;1&nbsp;</HashLink>
      </sup>
      <sup><HashLink smooth to="/english/tienganh/nguyen-am-doi">&nbsp;2&nbsp;</HashLink>
      </sup>
      <p className="text-center">(DIPHTHONGS)</p>
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
              <td>/aɪ/</td>
              <td>tīme = /taɪm/; whȳ = /waɪ/</td>
          </tr>
          
          <tr>
              <td>/eɪ/</td>
              <td>cāke = /keɪk/</td>
          </tr>

          <tr>
              <td>/oʊ/</td>
              <td>gō = /ɡoʊ/ (<HashLink smooth to="#ga">GA</HashLink>) = /ɡəʊ/ (<HashLink smooth to="#rp">RP</HashLink>)</td>
          </tr>

          <tr>
              <td>/aʊ/</td>
              <td>house = /haʊs/, now = /naʊ/</td>
          </tr>

          <tr>
              <td>/ɔɪ/</td>
              <td>boy = /bɔɪ/</td>
          </tr>

          <tr>
              <td>/juː/</td>
              <td>cūte = /kjuːt/</td>
          </tr>

          <tr>
              <td>/jə/</td>
              <td>accư̇ra̛te = /ˈæk.jɚ.ət/ (u̇ + ư = jə)</td>
          </tr>

          <tr>
              <td>/eə/ (<HashLink smooth to="#rp">RP</HashLink>), /e/ (<HashLink smooth to="#ga">GA</HashLink>)</td>
              <td>squā̄re = /skwer/ (<HashLink smooth to="#ga">GA</HashLink>) = /skweər/ (<HashLink smooth to="#rp">RP</HashLink>)</td>
          </tr>
        </tbody>
      </table>
  
      <div className="margin-y-30">

        <p>📌 Chú thích:</p>

        <ul className="list-square">

          <li id="ga">Trong GA (General American – Anh–Mỹ)</li>
          
          <li className="margin-bottom-50" id="rp">Trong RP (Received Pronunciation – Anh–Anh)</li>

        </ul>
        
      </div>

    </div>

    <p className="margin-top-50 text-small">September 12, 2025 - by 🐝Mr. Bee Osn and GPT</p>
    
  </main>

  </>);
}