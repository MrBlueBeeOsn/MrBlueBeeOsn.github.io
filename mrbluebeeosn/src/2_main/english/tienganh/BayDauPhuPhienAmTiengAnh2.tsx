import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function BayDauPhuPhienAmTiengAnh2(): React.JSX.Element {

  const postId = "BayDauPhuPhienAmTiengAnh2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">📖 HỆ THỐNG 7 DẤU PHỤ + 1 MẶC ĐỊNH = 8 MỤC PHIÊN ÂM TIẾNG ANH 

        <p className="text-center">(BẢN HOÀN CHỈNH

          <sup>
            <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-1">&nbsp;1&nbsp;</Link>
          </sup>

          <sup>
            <Link to="/tieng-anh/he-thong-7-dau-phu-phien-am-tieng-anh-2">&nbsp;2&nbsp;</Link>
          </sup>)
          
        </p>

      </h1>
      
      {/* This is the content of Mr. Bee Osn English Term. */}

      {/* =============================
          Giới thiệu
      ============================= */}

      <p>Tiếng Anh có nhiều nguyên âm mà chữ cái thông thường (a, e, i, o, u) không thể hiện hết.</p>
      
      <p>Để học nhanh và dễ nhớ, ta dùng 7 dấu phụ kết hợp với 1 dạng mặc định (không dấu) để biểu thị cách phát âm.</p>

      <h3 className="margin-y-50 text-center"> Giới thiệu</h3>

      <p>👉 Tổng cộng: 8 nhóm ký hiệu → bao quát hầu hết nguyên âm tiếng Anh.</p>

        <ul className="list-square">

          <li>1 <HashLink smooth to="#mac-dinh">Mặc định</HashLink> (không dấu) = nguyên âm cơ bản, ngắn.</li>

          <li>7 dấu phụ = <HashLink smooth to="#macron">macron</HashLink>, <HashLink smooth to="#circumflex">circumflex</HashLink>, <HashLink smooth to="#dot-above">dot above</HashLink>, <HashLink smooth to="#hook">hook</HashLink>, <HashLink smooth to="#umlaut">umlaut</HashLink>, <HashLink smooth to="#double-macron">double macron</HashLink>, <HashLink smooth to="#ring">ring</HashLink>.</li>

        </ul>

      {/* =============================
          1. Mặc định (không dấu) — Nguyên âm ngắn (short vowels)
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <div className="margin-y-30">

          <h3 className="margin-y-50 text-center" id="mac-dinh">1. Mặc định (không dấu) — Nguyên âm ngắn (short vowels)</h3>

          <p className="margin-top-20 text-indent-whole">📌 Giữ aeiou — oo y làm mặc định (short vowels) và ee (long vowel) để đơn giản:</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">a e i o u — oo y — ee</span>
          </p>

          <p className="text-center">↓</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">æ e ɪ ɒ/ɑː ʊ — ʊ ɪ — iː</span>
          </p>

          <ul className="list-square">
            <li>cat = /kæt/</li>
            <li>get = /get/</li>
            <li>sit = /sɪt/</li>
            <li>hot = /hɑːt/ (<HashLink smooth to="#ga">GA</HashLink>) = /hɒt/ (<HashLink smooth to="#rp">RP</HashLink>)</li>
            <li>put = /pʊt/</li>

            <li>book = /bʊk/</li>
            <li>myth = /mɪθ/</li>

            <li>bee = /biː/</li>
            
          </ul>

        </div>

      </div>

      {/* =============================
            2. Macron (¯) — Nguyên âm dài
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <div className="margin-y-30">

          <h3 className="margin-y-50 text-center" id="macron">2. Macron <mark className="highlight-tertiary-padding-4-8">¯</mark> — Nguyên âm dài / diphthongs</h3>

          <p className="margin-top-20 text-indent-whole">📌 Dấu ngang trên đầu = âm kéo dài / nguyên âm đôi chính.</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">ā ē ī ō ū (o͞o ȳ)</span>
          </p>

          <p className="text-center">↓</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">eɪ iː aɪ oʊ juː (uː aɪ)</span>
          </p>

          <ul className="list-square">
            <li>cāke = /keɪk/</li>
            <li>hē = /hi:/</li>
            <li>tīme = /taɪm/</li>
            <li>gō = /ɡoʊ/ (<HashLink smooth to="#ga">GA</HashLink>) = /ɡəʊ/ (<HashLink smooth to="#rp">RP</HashLink>)</li>
            <li>cute = cūte = /kjuːt/</li>

            <li>fo͞od = /fuːd/</li>
            <li>whȳ = /waɪ/</li>
          </ul>

        </div>

      </div>

      {/* =============================
          3. Circumflex (ˆ) — Caret vowel /ʌ/
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <div className="margin-y-30">

          <h3 className="margin-y-50 text-center" id="circumflex">3. Circumflex <mark className="highlight-tertiary-padding-4-8">ˆ</mark> — Caret vowel /ʌ/</h3>

          <p className="margin-top-20 text-indent-whole">📌 Dùng dấu mũ cho âm caret /ʌ/ (âm giữa, miệng mở vừa).</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">â ô û</span>
          </p>

          <p className="text-center">↓</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">ʌ</span>
          </p>

          <ul className="list-square">
            <li>bėcâuse = /bɪˈkʌz/</li>
            <li>ôther = /ˈʌð.ɚ/</li>
            <li>bûttơn = /ˈbʌt.ən/</li>
          </ul>

        </div>

      </div>
      
      {/* =============================
          4. Dot above (˙) — Âm /ɪ/ biến thể & /jə/
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <div className="margin-y-30">

          <h3 className="margin-y-50 text-center" id="dot-above">4. Dot above <mark className="highlight-tertiary-padding-4-8">˙</mark> — Âm /ɪ/ biến thể</h3>

          <p className="margin-top-20 text-indent-whole">📌 Dấu chấm trên để biểu thị các trường hợp chữ viết khác nhưng phát âm là /ɪ/</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">ȧ ė i̇ ȯ u̇ ư̇</span>
          </p>

          <p className="text-center">↓</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">ɪ</span>
          </p>

          <ul className="list-square">
            <li>imȧge = /ˈɪm.ɪdʒ/</li>
            <li>ėxpense = /ɪkˈspens/</li>
            <li>fit = /fɪt/ (i có dấu chấm trong fit)</li>
            <li>wȯmėn = /ˈwɪm.ɪn/</li>
            <li>bu̇sinėss = /ˈbɪz.nɪs/</li>
            <li>accư̇ra̛te = /ˈæk.jɚ.ət/</li>
            <li className="list-none">u̇+ư = /j+ə/</li>
          </ul>

        </div>

      </div>

      {/* =============================
            5. Hook (̛ ) — Schwa /ə/ và schwa và schwa + r
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <div className="margin-y-30">

          <h3 className="margin-y-50 text-center" id="hook">5. Hook <mark className="highlight-tertiary-padding-4-8"> ̛  </mark>&nbsp;— Schwa /ə/ và schwa và schwa + r</h3>

          <p className="margin-top-20 text-indent-whole">📌 Dấu móc (như “ơ”) cho âm trung tính schwa và dạng +r.</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">a̛ e̛ i̛ ơ ư</span>
          </p>

          <p className="text-center">↓</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">ə</span>
          </p>

          <ul className="list-square">
            <li>a̛bout = /əˈbaʊt/</li>
            <li>tāke̛n = /ˈteɪ.kən/</li>
            <li>penci̛l = /əˈbaʊt/</li>
            <li>lemơn = /ˈlem.ən/</li>
            <li>sưppört = /səˈpɔːrt/</li>
          </ul>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">e̛r, i̛r, ơr, ưr</span>
          </p>

          <p className="text-center">↓</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">ɜː</span>
          </p>

          <ul className="list-square">
            <li>he̛r = /hɝː/</li>
            <li>bi̛rd = /bɝːd/</li>
            <li>wơrd = /wɝːd/</li>
            <li>nưrse = /nɝːs/</li>
          </ul>

        </div>

      </div>

      {/* =============================
            6. Umlaut (¨) — Nguyên âm biến đổi
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <div className="margin-y-30">

          <h3 className="margin-y-50 text-center" id="umlaut">6. Umlaut / Diaeresis <mark className="highlight-tertiary-padding-4-8">¨</mark> — Nguyên âm biến đổi</h3>

          <p className="margin-top-20 text-indent-whole">📌 Dùng khi nguyên âm “đặc biệt” (thường là âm dài / vị trí môi/lưỡi khác).</p>
          
          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">ä ë ï ö ü</span>
          </p>

          <p className="text-center">↓</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">ɑː eː i: o: uː</span>
          </p>

          <ul className="list-square">
            <li>cär = /kɑːr/</li>
            <li>äutưmn = /ˈɑː.t̬əm/</li>
            <li>pïzza̛ = /ˈpiːt.sə/</li>
            <li>shöre = /ʃɔːr/</li>
            <li>Tüesday = /ˈtuːz.deɪ/ (trường hợp /juː/ hoặc /uː/ tuỳ từ)</li>
          </ul>

        </div>

      </div>
      
      {/* =============================
          7. Double Macron ( ̄ ̄ ) Âm dài đặc biệt và biến thể mở rộng
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <div className="margin-y-30">

          <h3 className="margin-y-50 text-center" id="double-macron">7. Double Macron <mark className="highlight-tertiary-padding-4-8">&nbsp; ̄ ̄</mark> — Âm dài đặc biệt và biến thể mở rộng</h3>

          <p className="margin-top-20 text-indent-whole">📌 Biểu thị âm /e/ /ɑː/ /uː/ /e/</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">ā̄ ē̄ ō̄ ū̄</span>
          </p>

          <p className="text-center">↓</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">e ɑː u: e</span>
          </p>

            <ul className="list-square">

              <li>mā̄ny = /ˈmen.i/</li>
              <li>lībrā̄ry = /ˈlaɪ.brer.i/</li>
              <li className="margin-bottom-50">squā̄re = /skwer/ (<HashLink smooth to="#ga">GA</HashLink>) = /skweər/ (<HashLink smooth to="#rp">RP</HashLink>)</li>

              <li className="margin-bottom-50">gē̄nre = /ˈʒɑːn.rə/</li>

              <li>dō̄ = /duː/</li>
              <li>mō̄ve =  /muːv/</li>
              <li className="margin-bottom-20">whō̄ = /huː/</li>

              <li className="margin-bottom-20">bū̄ry = /ˈber.i/</li>

            </ul>

        </div>

      </div>

        {/* =============================
          8. Ring (˚) — Âm tròn /ɔː/
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <div className="margin-y-30">

          <h3 className="margin-y-50 text-center" id="ring">8. Ring <mark className="highlight-tertiary-padding-4-8">˚</mark> — Âm tròn /ɔː/</h3>

          <p className="margin-top-20 text-indent-whole">📌 Biểu thị một số trường hợp âm /ɔː/ đặc biệt.</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">å</span>
          </p>

          <p className="text-center">↓</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">ɔː</span>
          </p>

            <ul className="list-square">
              <li className="margin-bottom-50">wår = /wɔːr/</li>
            </ul>

        </div>

      </div>

      {/* =============================
            Notes!
      ============================= */}

      <p className="margin-top-20">❗Chú thích:</p>

        <ul className="list-square">

          <li id="ga">Trong GA (General American: Anh–Mỹ)</li>
          
          <li id="rp">Trong RP (Received Pronunciation: Anh–Anh)</li>

        </ul>

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">✅ Kết luận</h3>

        <p className="margin-y-30">Hệ thống 8 dấu phụ này:</p>

        <ul className="list-square">

          <li>Bao phủ toàn bộ <Link to="/tieng-anh/nguyen-am-don#nguyen-am-don">nguyên âm đơn</Link> + <Link to="/tieng-anh/nguyen-am-doi#nguyen-am-doi">nguyên âm đôi</Link>.</li>

          <li>Phân biệt rõ fo͞od = /fuːd/, dō̄ = /duː/, Tüesday = /ˈtuːz.deɪ/ và cūte = /kjuːt/</li>

          <li className="margin-bottom-30">Dựa trên dấu tiếng Việt — dễ nhớ, dễ gõ, dễ học hơn IPA, AHD gốc.</li>

        </ul>

      </div>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>September 3, 2025 · by 🐝Mr. Bee Osn and GPT ·</span>
        </div>

        <div className="eye-icon no-margin">
          <EyeIcon />
        </div>

        <div className="post-date no-margin">
          <ViewCounter postId={postId} />
        </div>

        <div className="like-button no-margin">
          <LikeButton postId={postId} />
        </div>

      </div>

    </article>
    
  </main>

  </>);
}