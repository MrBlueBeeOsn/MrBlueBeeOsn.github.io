import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function BayDauPhuPhienAmTiengAnh1() {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

    <h2 className="margin-y-50 text-center">📖 HỆ THỐNG 7 DẤU PHỤ + 1 MẶC ĐỊNH = 8 MỤC PHIÊN ÂM TIẾNG ANH 

      <p className="text-center">(BẢN HOÀN CHỈNH

        <sup>
          <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">&nbsp;1&nbsp;</Link>
        </sup>

        <sup>
          <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-2">&nbsp;2&nbsp;</Link>
        </sup>)
        
      </p>

    </h2>

    {/* This is the content of English Learning Term. */}

    <p>Học phát âm tiếng Anh bằng <strong>IPA quốc tế</strong> đôi khi khó nhớ và xa lạ với người Việt. Vì vậy, ta có thể tạo một hệ thống dựa trên <strong>7 loại dấu phụ quen thuộc trong tiếng Việt</strong> để thay thế IPA, giúp dễ học, dễ liên tưởng và ghi nhớ lâu.</p>
    
    <p>Hệ thống ký hiệu nguyên âm này giúp đơn giản hóa việc học phát âm tiếng Anh.</p>

    <h4 className="margin-y-50 text-center">Giới thiệu</h4>

    <p>Hệ thống này gồm:</p>

      <ul className="list-square">

        <li>1 nhóm <HashLink smooth to="#mac-dinh">mặc định</HashLink> (không dấu) – các nguyên âm cơ bản.</li>

        <li>7 loại dấu phụ: <HashLink smooth to="#macron">Macron</HashLink>, <HashLink smooth to="#circumflex">Circumflex</HashLink>, <HashLink smooth to="#dot-above">Dot Above</HashLink>, <HashLink smooth to="#hook">Hook</HashLink>, <HashLink smooth to="#umlaut">Umlaut</HashLink>, <HashLink smooth to="#double-macron">Double Macron</HashLink>, <HashLink smooth to="#ring">Ring</HashLink>.</li>

        <li>Bảng tổng hợp <Link to="/tieng-anh/nguyen-am-don">nguyên âm đơn</Link></li>

        <li>Bảng tổng hợp <Link to="/tieng-anh/nguyen-am-doi">nguyên âm đôi</Link></li>

      </ul>
      
    <p className="margin-top-20">👉 Tổng cộng: 8 mục (7 dấu phụ + 1 mặc định).</p>

    <p>👉 Mục “mặc định” không phải là dấu thật sự, nhưng vẫn tính như một phần của hệ thống.</p>

    {/* =============================
      1. Mặc định (không dấu) — Nguyên âm ngắn (short vowels)
    ============================= */}

    <div className="margin-y-15 text-border1 table-container">

      <h4 className="margin-y-50 text-center" id="mac-dinh">1. Mặc định (không dấu) — Nguyên âm ngắn (short vowels)</h4>

      <p>📌 Giữ aeiou — oo y làm mặc định (short vowels) và ee (long vowel) để đơn giản:</p>

      <table className="margin-y-50">
        <thead>
          <tr>
            <th>Ký hiệu</th>
            <th>Ví dụ</th>
          </tr>
        </thead>

        <tbody>
          <tr>
              <td><strong>a</strong> = /æ/</td>
              <td>cat = /kæt/</td>
          </tr>
          
          <tr>
              <td><strong>e</strong> = /e/</td>
              <td>bed = /bed/</td>
          </tr>

          <tr>
              <td><strong>i</strong> = /ɪ/</td>
              <td>sit = /sɪt/</td>
          </tr>

          <tr>
              <td><strong>o</strong> = /ɑː/ (<HashLink smooth to="#ga">GA</HashLink>) <br/>&nbsp; = /ɒ/ (<HashLink smooth to="#rp">RP</HashLink>)</td>
              <td>hot = /hɑːt/ (<HashLink smooth to="#ga">GA</HashLink>) <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = /hɒt/ (<HashLink smooth to="#rp">RP</HashLink>)</td>
          </tr>

          <tr>
              <td><strong>u</strong> = /ʊ/</td>
              <td>put = /pʊt/</td>
          </tr>

          <tr>
              <td><strong>oo</strong> = /ʊ/</td>
              <td>book = /bʊk/, good = /ɡʊd/</td>
          </tr>

          <tr>
              <td><strong>y</strong> = /ɪ/</td>
              <td>myth = /mɪθ/</td>
          </tr>

          <tr>
              <td><strong>ee</strong> = /iː/</td>
              <td>bee = /biː/</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    {/* =============================
         2. Macron (¯) — Nguyên âm dài / diphthongs
    ============================= */}

    <div className="margin-y-15 text-border1 table-container">

      <h4 className="margin-y-50 text-center" id="macron">2. Macron (¯) — Nguyên âm dài / diphthongs</h4>

      <p>📌 Dấu ngang trên đầu = âm kéo dài / nguyên âm đôi chính.</p>

      <table className="margin-y-50">
        <thead>
          <tr>
            <th>Ký hiệu</th>
            <th>Ví dụ</th>
          </tr>
        </thead>

        <tbody>
          <tr>
              <td><strong>ā</strong> = /eɪ/</td>
              <td>cāke = /keɪk/</td>
          </tr>
          
          <tr>
              <td><strong>ē</strong> = /iː/</td>
              <td>hē = /hiː/</td>
          </tr>

          <tr>
              <td><strong>ī</strong> = /aɪ/</td>
              <td>tīme = /taɪm/</td>
          </tr>

          <tr>
              <td><strong>ō</strong> = /oʊ/ (<HashLink smooth to="#ga">GA</HashLink>) <br/>&nbsp; = /əʊ/ (<HashLink smooth to="#rp">RP</HashLink>)</td>
              <td>gō = /ɡoʊ/ (<HashLink smooth to="#ga">GA</HashLink>) <br/>&nbsp;&nbsp;&nbsp;&nbsp; = /ɡəʊ/ (<HashLink smooth to="#rp">RP</HashLink>)</td>
          </tr>

          <tr>
              <td><strong>ū</strong> = /juː/</td>
              <td>cūte = /kjuːt/</td>
          </tr>

          <tr>
              <td><strong>o͞o</strong> = /uː/</td>
              <td>fo͞od = /fuːd/, scho͞ol = /skuːl/</td>
          </tr>

          <tr>
              <td><strong>ȳ</strong> = /aɪ/</td>
              <td>whȳ = /waɪ/</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* =============================
        3. Circumflex (ˆ) — Caret vowel /ʌ/
    ============================= */}

    <div className="margin-y-15 text-border1 table-container">

      <h4 className="margin-y-50 text-center" id="circumflex">3. Circumflex (ˆ) — Caret vowel /ʌ/</h4>

      <p>📌 Dùng dấu mũ cho âm caret /ʌ/ (âm giữa, miệng mở vừa).</p>

      <table className="margin-y-50">
        <thead>
          <tr>
            <th>Ký hiệu</th>
            <th>Ví dụ</th>
          </tr>
        </thead>

        <tbody>
          <tr>
              <td><strong>â</strong> = /ʌ/</td>
              <td>bėcâuse = /bɪˈkʌz/</td>
          </tr>

          <tr>
              <td><strong>ô</strong> = /ʌ/</td>
              <td>ôthe̛r = /ˈʌð.ɚ/</td>
          </tr>

          <tr>
              <td><strong>û</strong> = /ʌ/</td>
              <td>sûn = /sʌn/</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* =============================
        4. Dot above (˙) — Âm /ɪ/ biến thể & /jə/
    ============================= */}
    
    <div className="margin-y-15 text-border1 table-container">

      <h4 className="margin-y-50 text-center" id="dot-above">4. Dot above (˙) — Âm /ɪ/ biến thể</h4>

      <p>📌 Dấu chấm trên để biểu thị các trường hợp chữ viết khác nhưng phát âm là /ɪ/</p>

      <table className="margin-y-50">
        <thead>
          <tr>
            <th>Ký hiệu</th>
            <th>Ví dụ</th>
          </tr>
        </thead>

        <tbody>
          <tr>
              <td><strong>ȧ</strong> = /ɪ/</td>
              <td>imȧge = /ˈɪm.ɪdʒ/</td>
          </tr>

          <tr>
              <td><strong>ė</strong> = /ɪ/</td>
              <td>ėxpense = /ɪkˈspens/</td>
          </tr>

          <tr>
              <td><strong>i̇</strong> = /ɪ/</td>
              <td>fit = /fɪt/ (i có dấu chấm trong fit)</td>
          </tr>

          <tr>
              <td><strong>ȯ</strong></td>
              <td>wȯmėn = /ˈwɪm.ɪn/</td>
          </tr>

          <tr>
              <td><strong>u̇</strong> = /ɪ/</td>
              <td>bu̇sinėss = /ˈbɪz.nɪs/</td>
          </tr>

          <tr>
              <td><strong>ư̇</strong> = /jə/ <br>
              </br> 
              <strong>u̇+ư</strong> = /j+ə/</td>

              <td>accư̇ra̛te = /ˈæk.jɚ.ət/ </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* =============================
        5. Hook (̛ ) — Âm schwa và schwa + r
    ============================= */}

    <div className="margin-y-15 text-border1 table-container">

      <h4 className="margin-y-50 text-center" id="hook">5. Hook ( ̛ ) — Âm schwa và schwa + r</h4>

      <p>📌 Dấu móc (như “ơ”) cho âm trung tính schwa và schwa +r.</p>

      <table className="margin-y-50">
        <thead>
          <tr>
            <th>Ký hiệu</th>
            <th>Ví dụ</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><strong>a̛</strong> = /ə/</td>
            <td>a̛bout =  /əˈbaʊt/</td>
          </tr>

          <tr>
            <td><strong>e̛</strong> = /ə/</td>
            <td>tāke̛n = /ˈteɪ.kən/</td>
          </tr>

          <tr>
            <td><strong>i̛</strong> = /ə/</td>
            <td>penci̛l = /ˈpen.səl/</td>
          </tr>

          <tr>
            <td><strong>ơ</strong> = /ə/</td>
            <td>lemơn = /ˈlem.ən/</td>
          </tr>

          <tr>
            <td><strong>ư</strong> = /ə/</td>
            <td>sưppört = /səˈpɔːrt/</td>
          </tr>

          <tr>
            <td colspan="2">Khi kết hợp với r → âm /ɜːr/:</td>
          </tr>

          <tr>
            <td><strong>e̛r</strong> = /ɜːr/</td>
            <td>he̛r = /hɝː/</td>
          </tr>

          <tr>
            <td><strong>i̛r</strong> = /ɜːr/</td>
            <td>bi̛rd = /bɝːd/</td>
          </tr>

          <tr>
            <td><strong>ơr</strong> = /ɜːr/</td>
            <td>wơrd = /wɝːd/</td>
          </tr>

          <tr>
            <td><strong>ưr</strong> = /ɜːr/</td>
            <td>nưrse = /nɝːs/</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* =============================
        6. Umlaut (¨) — Nguyên âm biến đổi
    ============================= */}

    <div className="margin-y-15 text-border1 table-container">

      <h4 className="margin-y-50 text-center" id="umlaut">6. Umlaut / Diaeresis (¨) — Nguyên âm biến đổi</h4>

      <p>📌 Dùng khi nguyên âm “đặc biệt” (thường là âm dài / vị trí môi/lưỡi khác).</p>

      <table className="margin-y-50">
        <thead>
          <tr>
            <th>Ký hiệu</th>
            <th>Ví dụ</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><strong>ä</strong> = /ɑː/</td>
            <td>cär = /kɑːr/, äutưmn = /ˈɑː.t̬əm/</td>
          </tr>

          <tr>
            <td><strong>ï</strong> = /iː/</td>
            <td>pïzza̛ = /ˈpiːt.sə/</td>
          </tr>

          <tr>
            <td><strong>ö</strong> = /ɔː/</td>
            <td>shöre = /ʃɔːr/</td>
          </tr>

          <tr>
            <td><strong>ü</strong> = /uː/</td>
            <td>Tüesday = /ˈtuːz.deɪ/</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* =============================
        7. Double Macron ( ̄ ̄ ) — Âm dài đặc biệt và biến thể mở rộng
    ============================= */}

    <div className="margin-y-15 text-border1 table-container">

      <h4 className="margin-y-50 text-center" id="double-macron">7. Double Macron (&nbsp; ̄ ̄ ) — Âm dài đặc biệt và biến thể mở rộng</h4>

      <p>📌 Biểu thị âm /uː/, /e/ /ɑː/</p>

      <table className="margin-y-50">
        <thead>
          <tr>
            <th>Ký hiệu</th>
            <th>Ví dụ</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
              <td><strong>ā̄</strong> = /e/ (<HashLink smooth to="#ga">GA</HashLink>) <br/>&nbsp;&nbsp;&nbsp; = /eə/ (<HashLink smooth to="#rp">RP</HashLink>)</td>
              <td>squā̄re = /skwer/ (<HashLink smooth to="#ga">GA</HashLink>) <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = /skweər/ (<HashLink smooth to="#rp">RP</HashLink>)</td>
          </tr>

          <tr>
              <td><strong>ē̄</strong> = /ɑː/</td>
              <td>gē̄nre = /ˈʒɑːn.rə/</td>
          </tr>

          <tr>
              <td><strong>ō̄</strong> = /uː/</td>
              <td>dō̄ = /duː/, whō̄se = /huːz/</td>
          </tr>

          <tr>
              <td><strong>ū̄</strong> = /e/</td>
              <td>bū̄ry = /ˈber.i/</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* =============================
        8. Ring (˚) — Âm tròn /ɔː/
    ============================= */}

    <div className="margin-y-15 text-border1 table-container">

      <h4 className="margin-y-50 text-center" id="ring">8. Ring (˚) — Âm tròn /ɔː/</h4>

      <p>📌 Biểu thị một số trường hợp âm /ɔː/ đặc biệt.</p>

      <table className="margin-y-50">
        <thead>
          <tr>
            <th>Ký hiệu</th>
            <th>Ví dụ</th>
          </tr>
        </thead>

        <tbody>
          <tr>
              <td><strong>å</strong> = /ɔː/</td>
              <td>wår /wɔːr/</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="margin-y-50 text-center">🔔 GHI CHÚ & NGUYÊN TẮC THỰC DỤNG</h3>

    <h4>🔹 Ta giữ giản lược:</h4>

    <p className="margin-top-20 text-indent-whole">Short vowels mặc định viết không dấu (aeiou, oo y) và long vowels (ee). Dấu chỉ dùng khi cần phân biệt hoặc cho âm dài/đặc biệt.</p>

    <h4 className="margin-top-30">🔹 /uː/ và /juː/ được tách rõ:</h4>

    <ul className="list-square">

        <li className="margin-top-20">fo͞od = /fuːd/, dō̄ = /duː/, Tüesday = /ˈtuːz.deɪ/</li>

        <li>cūte = /kjuːt/</li>

    </ul>

    <h4 className="margin-top-30">🔹 o mặc định có hai giá trị theo giọng:</h4>

    <p className="margin-top-20 text-indent-whole">o = /ɑː/ (US) và /ɒ/ (UK).</p>

    <h4 className="margin-top-30">🔹 Dot above (˙)</h4>

    <p className="margin-top-20 text-indent-whole">Là nơi đặt nhiều biến thể “chữ viết khác → phát âm /ɪ/” (imȧge, wȯmėn, bu̇sinėss, fit, ėxpense...), và ư̇ cho /jə/ (accư̇ra̛te).</p>

    <h4 className="margin-top-30">🔹 Hook (dấu móc)</h4>

    <p className="margin-top-20 text-indent-whole">Gom cả schwa /ə/ và schwa + r (ví dụ he̛r, bi̛rd).</p>

    <p className="margin-top-30">❗Chú thích:</p>

      <ul className="list-square">

        <li id="ga">Trong GA (General American: Anh–Mỹ)</li>
        
        <li id="rp">Trong RP (Received Pronunciation: Anh–Anh)</li>

      </ul>

    <div className="margin-y-30 text-border1 table-container">

      <h4 className="margin-top-30 text-center">✅ Kết luận</h4>

      <p className="margin-top-30">Hệ thống 8 dấu phụ này:</p>

      <ul className="list-square">

        <li>Bao phủ toàn bộ <Link to="/tieng-anh/nguyen-am-don">nguyên âm đơn</Link> + <Link to="/tieng-anh/nguyen-am-doi">nguyên âm đôi</Link>.</li>

        <li>Các âm khó (schwa /ə/, caret /ʌ/, weak /ɪ/) đều có ký hiệu riêng.</li>

        <li className="margin-bottom-30">Dựa trên dấu tiếng Việt → dễ nhớ, dễ gõ, dễ học hơn IPA, AHD gốc.</li>

      </ul>

    </div>

    <p className="margin-top-50 text-small">September 12, 2025 · by 🐝Mr. Bee Osn and GPT</p>
    
  </main>

  </>);
}