import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function NguyenAmDon() {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

    <h2 className="margin-y-50 text-center">📌 BẢNG TỔNG HỢP NGUYÊN ÂM ĐƠN

      <sup><HashLink smooth to="/tieng-anh/nguyen-am-don">&nbsp;1&nbsp;</HashLink>
      </sup>
      
      <sup><HashLink smooth to="/tieng-anh/nguyen-am-doi">&nbsp;2&nbsp;</HashLink>
      </sup>

      <p className="text-center">(gọn, để tra cứu)</p>

    </h2>

    {/* This is the content of English Learning Term. */}

    <div className="table-container">
      <table>
        <thead>

          <tr>
            <th>&nbsp;IPA&nbsp;</th>
            <th>Ví dụ</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>/æ/</td>
            <td>cat = /kæt/</td>
          </tr>

          <tr>
            <td>/e/</td>
            <td>bed = /bed/; squā̄re = /skwer/ (<HashLink smooth to="#ga">GA</HashLink>) = /skweər/ (<HashLink smooth to="#rp">RP</HashLink>)= ; bū̄ry = /ˈber.i/</td>
          </tr>

          <tr>
            <td>/ɪ/</td>
            <td>imȧge = /ˈɪm.ɪdʒ/; ėxpense = /ɪkˈspens/, sit = /sɪt/; wȯmėn = /ˈwɪm.ɪn/; bu̇sinėss = /ˈbɪz.nɪs/, myth = /mɪθ/;</td>
          </tr>
     
          <tr>
            <td>/iː/</td>
            <td>bee = /biː/; hē = /hiː/; pïzza̛ = /ˈpiːt.sə/</td>
          </tr>

          <tr>
            <td>/ɑː/</td>
            <td>hot = /hɑːt/ (<HashLink smooth to="#ga">GA</HashLink>) = /hɒt/ (<HashLink smooth to="#rp">RP</HashLink>)</td>
          </tr>

          <tr>
            <td>/ʌ/</td>
            <td>bėcâuse = /bɪˈkʌz/; ôthe̛r = /ˈʌð.ɚ/; sûn = /sʌn/</td>
          </tr>

          <tr>
            <td>/ʊ/</td>
            <td>put = /pʊt/; book = /bʊk/</td>
          </tr>

          <tr>
            <td>/uː/</td>
            <td>fo͞od = /fuːd/; dō̄ = /duː/; Tüesday = /ˈtuːz.deɪ/</td>
          </tr>

          <tr>
            <td>/ɔː/</td>
            <td>shöre = /ʃɔːr/; wår = /wɔːr/</td>
          </tr>

          <tr>
            <td>/ɑː/</td>
            <td>cär = /kɑːr/; gē̄nre = /ˈʒɑːn.rə/</td>
          </tr>

          <tr>
            <td>/ə/</td>
            <td>a̛bout = /əˈbaʊt/, tāke̛n = /ˈteɪ.kən/, penci̛l = /ˈpen.səl/, lemơn = /ˈlem.ən/, sưppört = /səˈpɔːrt/</td>
          </tr>

          <tr>
            <td>/ɜːr/</td>
            <td>he̛r = /hɝː/, bi̛rd = /bɝːd/, wơrd = /wɝːd/, nưrse = /nɝːs/</td>
          </tr>

        </tbody>
      </table>
  
      <div className="margin-y-30">
        
        <p>📌 Chú thích:</p>

        <ul className="list-square">

          <li id="ga">Trong GA (General American: Anh–Mỹ)</li>
          
          <li id="rp">Trong RP (Received Pronunciation: Anh–Anh)</li>

        </ul>

      </div>

    </div>

    <p className="margin-top-50 text-small">September 12, 2025 - by 🐝Mr. Bee Osn and GPT</p>
    
  </main>

  </>);
}