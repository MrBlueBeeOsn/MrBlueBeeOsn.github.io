import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Bay_Dau_Phu_Phien_Am_Tieng_Anh_2() {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/english#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">📖 HỆ THỐNG 7 DẤU PHỤ + 1 MẶC ĐỊNH = 8 MỤC PHIÊN ÂM TIẾNG ANH (BẢN HOÀN CHỈNH)
      <sup><Link to="/english/tienganh/he-thong-7-dau-phu-phien-am-tieng-anh-1">&nbsp;1&nbsp;</Link>
      </sup>
      <sup><Link to="/english/tienganh/he-thong-7-dau-phu-phien-am-tieng-anh-2">&nbsp;2&nbsp;</Link>
      </sup>
    </h2>

    {/* This is the content of Mr. Bee Osn English Term. */}

    {/* =============================
         Giới thiệu
    ============================= */}

    <p>Tiếng Anh có nhiều nguyên âm mà chữ cái thông thường (a, e, i, o, u) không thể hiện hết.</p>
    
    <p>Để học nhanh và dễ nhớ, ta dùng 7 dấu phụ kết hợp với 1 dạng mặc định (không dấu) để biểu thị cách phát âm.</p>

    <h4 className="margin-y-50 text-center"> Giới thiệu</h4>

    <p>👉 Tổng cộng: 8 nhóm ký hiệu → bao quát hầu hết nguyên âm tiếng Anh.</p>

      <ul className="list-square">

        <li>1 <HashLink smooth to="#mac-dinh">Mặc định</HashLink> (không dấu) = nguyên âm cơ bản, ngắn.</li>

        <li>7 dấu phụ = <HashLink smooth to="#macron">macron</HashLink>, <HashLink smooth to="#circumflex">circumflex</HashLink>, <HashLink smooth to="#dot-above">dot above</HashLink>, <HashLink smooth to="#hook">hook</HashLink>, <HashLink smooth to="#umlaut">umlaut</HashLink>, <HashLink smooth to="#double-macron">double macron</HashLink>, <HashLink smooth to="#ring">ring</HashLink>.</li>

      </ul>

    {/* =============================
        1. Mặc định (không dấu) — Nguyên âm ngắn (short vowels)
    ============================= */}
  
    <div className="margin-y-50 text-border1">

      <h4 className="margin-y-50 text-center" id="mac-dinh">1. Mặc định (không dấu) — Nguyên âm ngắn (short vowels)</h4>

    <p className="margin-top-20 text-indent-whole">📌 Giữ aeiou — oo y làm mặc định (short vowels) và ee (long vowel) để đơn giản:</p>

    <p className="margin-y-20 text-word-spacing-1">
      <span className="highlight-white-padding-4-8">a e i o u — oo y — ee</span>
    </p>

    <p className="text-center">↓</p>

    <p className="margin-y-20 text-word-spacing-1">
      <span className="highlight-white-padding-4-8">æ e ɪ ɒ/ɑː ʊ — ʊ ɪ — iː</span>
    </p>

    <ul className="list-square">
      <li>cat = cat = /kæt/</li>
      <li>get = get = /get/</li>
      <li>sit = sit = /sɪt/</li>
      <li>hot = hot = /hɒt/ (Anh), /hɑːt/ (Mỹ)</li>
      <li>put = put = /pʊt/</li>

      <li>book = book = /bʊk/</li>
      <li>myth = myth = /mɪθ/</li>

      <li>bee = bee = /biː/</li>
    </ul>

    </div>

    {/* =============================
          2. Macron (¯) — Nguyên âm dài
    ============================= */}

    <div className="margin-y-50 text-border1">

      <h4 className="margin-y-50 text-center" id="macron">2. Macron <mark className="highlight-tertiary-padding-4-8">¯</mark> — Nguyên âm dài / diphthongs</h4>

      <p className="margin-top-20 text-indent-whole">📌 Dấu ngang trên đầu = âm kéo dài / nguyên âm đôi chính.</p>

      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">ā ē ī ȳ ō ū o͞o</span>
      </p>

      <p className="text-center">↓</p>

      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">eɪ iː aɪ oʊ juː (uː aɪ)</span>
      </p>

      <ul className="list-square">
        <li>cake = cāke = /keɪk/</li>
        <li>he = hē = /hi:/</li>
        <li>time = tīme = /taɪm/</li>
        <li>go = gō = /goʊ/</li>
        <li>cute = cūte = /kjuːt/</li>

        <li>food — fo͞od = /fuːd/</li>
        <li>why = whȳ = /waɪ/</li>
      </ul>

    </div>

    {/* =============================
        3. Circumflex (ˆ) — Caret vowel /ʌ/
    ============================= */}

    <div className="margin-y-50 text-border1">

      <h4 className="margin-y-50 text-center" id="circumflex">3. Circumflex <mark className="highlight-tertiary-padding-4-8">ˆ</mark> — Caret vowel /ʌ/</h4>

      <p className="margin-top-20 text-indent-whole">📌 Dùng dấu mũ cho âm caret /ʌ/ (âm giữa, miệng mở vừa).</p>

      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">â ô û</span>
      </p>

      <p className="text-center">↓</p>

      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">ʌ</span>
      </p>

      <ul className="list-square">
        <li>because = bėcâuse = /bɪˈkʌz/</li>
        <li>other = ôther = /ˈʌð.ɚ/</li>
        <li>button = bûttơn = /ˈbʌt.ən/</li>
      </ul>

    </div>
    
    {/* =============================
        4. Dot above (˙) — Âm /ɪ/ biến thể & /jə/
    ============================= */}

    <div className="margin-y-50 text-border1">

      <h4 className="margin-y-50 text-center" id="dot-above">4. Dot above <mark className="highlight-tertiary-padding-4-8">˙</mark> — Âm /ɪ/ biến thể</h4>

      <p className="margin-top-20 text-indent-whole">📌 Dấu chấm trên để biểu thị các trường hợp chữ viết khác nhưng phát âm là /ɪ/</p>

      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">ȧ ė i̇ ȯ u̇ ư̇</span>
      </p>

      <p className="text-center">↓</p>

      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">ɪ</span>
      </p>

      <ul className="list-square">
        <li>image = imȧge = /ˈɪm.ɪdʒ/</li>
        <li>expense = ėxpense = /ɪkˈspens/</li>
        <li>fit = fit = /fɪt/ (i có dấu chấm trong fit)</li>
        <li>women = wȯmėn = /ˈwɪm.ɪn/</li>
        <li>business = bu̇sinėss = /ˈbɪz.nɪs/</li>
        <li>accurate = accư̇ra̛te = /ˈæk.jɚ.ət/</li>
        <li className="list-none">u̇+ư = /j+ə/</li>
      </ul>

    </div>

    {/* =============================
          5. Hook (̛ ) — Schwa /ə/ và schwa và schwa + r
    ============================= */}

    <div className="margin-y-50 text-border1">

      <h4 className="margin-y-50 text-center" id="hook">5. Hook <mark className="highlight-tertiary-padding-4-8"> ̛  </mark>&nbsp;— Schwa /ə/ và schwa và schwa + r</h4>

      <p className="margin-top-20 text-indent-whole">📌 Dấu móc (như “ơ”) cho âm trung tính schwa và dạng +r.</p>

      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">a̛ e̛ i̛ ơ ư</span>
      </p>

      <p className="text-center">↓</p>

      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">ə</span>
      </p>

      <ul className="list-square">
        <li>about = a̛bout = /əˈbaʊt/</li>
        <li>taken = tāke̛n = /ˈteɪ.kən/</li>
        <li>pencil = penci̛l = /əˈbaʊt/</li>
        <li>lemon = lemơn = /ˈlem.ən/</li>
        <li>support = sưppört = /səˈpɔːrt/</li>
      </ul>

      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">e̛r, i̛r, ơr, ưr</span>
      </p>

      <p className="text-center">↓</p>

      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">ɜː</span>
      </p>

      <ul className="list-square">
        <li>her = he̛r = /hɝː/</li>
        <li>bird = bi̛rd = /bɝːd/</li>
        <li>word = wơrd = /wɝːd/</li>
        <li>nurse = nưrse = /nɝːs/</li>
      </ul>

    </div>

    {/* =============================
          6. Umlaut (¨) — Nguyên âm biến đổi
    ============================= */}

    <div className="margin-y-50 text-border1">

      <h4 className="margin-y-50 text-center" id="umlaut">6. Umlaut / Diaeresis <mark className="highlight-tertiary-padding-4-8">¨</mark> — Nguyên âm biến đổi</h4>

      <p className="margin-top-20 text-indent-whole">📌 Dùng khi nguyên âm “đặc biệt” (thường là âm dài / vị trí môi/lưỡi khác).</p>
      
      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">ä ë ï ö ü</span>
      </p>

      <p className="text-center">↓</p>

      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">ɑː eː i: o: uː</span>
      </p>

      <ul className="list-square">
        <li>car = cär = /kɑːr/</li>
        <li>autumn = äutưmn = /ˈɑː.t̬əm/</li>
        <li>pizza = pïzza̛ = /ˈpiːt.sə/</li>
        <li>shore = shöre = /ʃɔːr/</li>
        <li>Tuesday = Tüesday = /ˈtuːz.deɪ/ (trường hợp /juː/ hoặc /uː/ tuỳ từ)</li>
      </ul>

    </div>
    
    {/* =============================
        7. Double Macron ( ̄ ̄ ) Âm dài đặc biệt và biến thể mở rộng
    ============================= */}

    <div className="margin-y-50 text-border1">

      <h4 className="margin-y-50 text-center" id="double-macron">7. Double Macron <mark className="highlight-tertiary-padding-4-8">&nbsp; ̄ ̄</mark> — Âm dài đặc biệt và biến thể mở rộng</h4>

      <p className="margin-top-20 text-indent-whole">📌 Biểu thị âm /uː/, /e/</p>

      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">ō̄ ā̄</span>
      </p>

      <p className="text-center">↓</p>

      <p className="margin-y-20 text-word-spacing-1">
        <span className="highlight-white-padding-4-8">u: e ɑː</span>
      </p>

        <ul className="list-square">

          <li>do = dō̄ = /duː/</li>

          <li className="margin-bottom-20">who = /whō̄/ = /huː/</li>

          <li>square = squā̄re /skweər/ (<HashLink smooth to="#rp">RP</HashLink>) = </li>

          <li className="margin-bottom-50">square =  squā̄re = /skwer/ (<HashLink smooth to="#ga">GA</HashLink>)</li>

          <li>genre = gē̄nre = /ˈʒɑːn.rə/</li>

          <li className="margin-bottom-20">bury = bū̄ry = /ˈber.i/</li>

        </ul>

    </div>

      {/* =============================
        8. Ring (˚) — Âm tròn /ɔː/
    ============================= */}

      <div className="margin-y-50 text-border1">

        <h4 className="margin-y-50 text-center" id="ring">8. Ring <mark className="highlight-tertiary-padding-4-8">˚</mark> — Âm tròn /ɔː/</h4>

        <p className="margin-top-20 text-indent-whole">📌 Biểu thị một số trường hợp âm /ɔː/ đặc biệt.</p>

        <p className="margin-y-20 text-word-spacing-1">
          <span className="highlight-white-padding-4-8">å</span>
        </p>

        <p className="text-center">↓</p>

        <p className="margin-y-20 text-word-spacing-1">
          <span className="highlight-white-padding-4-8">ɔː</span>
        </p>

          <ul className="list-square">
            <li className="margin-bottom-50">war = wår = /wɔːr/ (RP)</li>
          </ul>

    </div>

     {/* =============================
          Notes!
    ============================= */}

    <p>❗Chú thích:</p>

      <ul className="list-square">

        <li id="rp">Trong RP (Received Pronunciation – Anh–Anh): square phát âm là /eə/.</li>

        <li className="margin-bottom-50" id="ga">Trong GA (General American – Anh–Mỹ): square thường rút ngắn thành /e/.</li>

      </ul>

    <div className="margin-y-50 text-border1">

      <h4 className="margin-y-30 text-center">✅ Kết luận</h4>

      <p className="margin-y-30">Hệ thống 8 dấu phụ này:</p>

      <ul className="list-square">

        <li>Bao phủ toàn bộ <Link to="/english/tienganh/nguyen-am-don#nguyen-am-don">nguyên âm đơn</Link> + <Link to="/english/tienganh/nguyen-am-doi#nguyen-am-doi">nguyên âm đôi</Link>.</li>

        <li>Phân biệt rõ o͞o, ō̄, ü = /uː/ và ū =/juː/</li>

        <li className="margin-bottom-30">Dựa trên dấu tiếng Việt — dễ nhớ, dễ gõ, dễ học hơn IPA, AHD gốc.</li>

      </ul>

    </div>
  
    <p className="margin-top-50 text-small">September 3, 2025 - by 🐝Mr. Bee Osn</p>
    
  </main>

  </>);
}