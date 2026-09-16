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
    
      <h4><HashLink smooth to="/tieng-anh#pronunciation-terms"><mark className="highlight-tertiary-padding-4-8">pronunciAtion</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">📖 HỆ THỐNG 7 DẤU PHỤ + 1 MẶC ĐỊNH = 8 MỤC PHIÊN ÂM TIẾNG ANH 

        <p className="text-center">(BẢN HOÀN CHỈNH

          <sup>
            <Link to="/pronunciation/5-vowel-system">&nbsp;1&nbsp;</Link>
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
            <li>[CAT][CAT] /kæt/</li>
            <li>[GET][GET] /get/</li>
            <li>[SIT][SIT] /sɪt/</li>
            <li>[HOT][HOT] /hɑːt/ (<HashLink smooth to="#ga">GA</HashLink>)</li>
            <li className="list-none">[HOT][HOT] /hɒt/ (<HashLink smooth to="#rp">RP</HashLink>)</li>
            <li>[PUT][PUT] /pʊt/</li>

            <li>[BOOK][BOOK] /bʊk/</li>
            <li>[MYTH][MYTH] /mɪθ/</li>

            <li>[BEE][BEE] /biː/</li>
            
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
            <li>[CAKE][CĀKE] /keɪk/</li>
            <li>[he][he] /hiː/ (function word)</li>
            <li>[TIME][TĪME] /taɪm/</li>
            <li>[GO][GŌ] /ɡoʊ/ (<HashLink smooth to="#ga">GA</HashLink>)</li>
            <li className="list-none">[GO][GŌ] /ɡəʊ/ (<HashLink smooth to="#rp">RP</HashLink>)</li>
            <li>[CUTE][CŪTE] /kjuːt/</li>

            <li>[FOOD][FO͞OD] /fuːd/</li>
            <li>[why][whȳ] /waɪ/</li>
          </ul>

        </div>

      </div>

      {/* =============================
          3. Hook (̛ ) — Schwa stress /'ə/
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <div className="margin-y-30">

          <h3 className="margin-y-50 text-center" id="circumflex">Hook (̛ ) <mark className="highlight-tertiary-padding-4-8">ˆ</mark> — Schwa stress /'ə/</h3>

          <p className="margin-top-20 text-indent-whole">📌 Dùng dấu Hook (̛ ) (như “ơ”) cho âm stress schwa</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">'a̛ 'ơ 'ư</span>
          </p>

          <p className="text-center">↓</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">'ə</span>
          </p>

          <ul className="list-square">
            <li>[beCAUSE][be CAUSE] /bɪˈkɒz/ (function word)</li>
            <li>[OTHer][ƠTH er] /ˈəð.ər/</li>
            <li>[BUTton][BƯT tơn] /ˈbət.ən/</li>
          </ul>

        </div>

      </div>
      
      {/* =============================
          4. Dot above (˙) — Âm /ɪ/ biến thể & /jə/
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <div className="margin-y-30">

          <h3 className="margin-y-50 text-center" id="dot-above">4. Dot above <mark className="highlight-tertiary-padding-4-8">˙</mark> — Âm /ɪ/ biến thể</h3>

          <p className="margin-top-20 text-indent-whole">📌 Dấu chấm trên để biểu thị các trường hợp chữ viết khác nhưng phát âm là /ʊ/ hay /ɔː/</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">u̇ ȯ</span>
          </p>

          <p className="text-center">↓</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">/ʊ/ /ɔː/</span>
          </p>

          <ul className="list-square">
            <li>[PUT][PU̇T] /ˈpʊt/</li>
            <li>[SHORE][SHȮRE] /ʃɔːr/</li>
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
            <li>[aBOUT][a̛ BOUT] /əˈbaʊt/ (function word)</li>
            <li>[TAken][TĀ ke̛n] /ˈteɪ.kən/</li>
            <li>[PENcil][PEN ci̛l] /ˈpen.səl/</li>
            <li>[LEMon][LEM ơn] /ˈlem.ən/</li>
            <li>[supPORT][sưp PȮRT] /səˈpɔːrt/</li>
          </ul>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">e̛r, i̛r, ơr, ưr</span>
          </p>

          <p className="text-center">↓</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">ɜː</span>
          </p>

          <ul className="list-square">
            <li>[her][he̛r] /hər/ (function word)</li>
            <li>[BIRD][BI̛RD] /bɜːrd/</li>
            <li>[WORD][WƠRD] /wɜːrd/</li>
            <li>[NURSE][NƯRSE] /nɜːrs/</li>
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
            <span className="highlight-255-padding-4-8">ä ü</span>
          </p>

          <p className="text-center">↓</p>

          <p className="margin-y-20 text-word-spacing-1">
            <span className="highlight-255-padding-4-8">ɑː uː</span>
          </p>

          <ul className="list-square">
            <li>[CAR][CÄR] /kɑːr/</li>
            <li>[TUESday][TÜES dāy] /ˈtʃuːz.deɪ/</li>
            <li>[BEAUtiful][TÜES dāy] /ˈbyü-ti-fəl/</li>
            <li>[ACcurate][AC cur a̛te] /ˈa-kyə-rət/</li>
          </ul>

        </div>

      </div>


      {/* =============================
            Notes!
      ============================= */}

      <p className="margin-top-20">❗Chú thích:</p>

        <ul className="list-square">

          <li id="ga">Trong GA (GENeral aMERican: Anh–Mỹ)</li>
          
          <li id="rp">Trong RP (reCEIVED pronunciAtion: Anh–Anh)</li>

        </ul>

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">✅ Kết luận</h3>

        <p className="margin-y-30">Hệ thống 8 dấu phụ này:</p>

        <ul className="list-square">

          <li>Bao phủ toàn bộ <Link to="/tieng-anh/nguyen-am-don#nguyen-am-don">nguyên âm đơn</Link> + <Link to="/tieng-anh/nguyen-am-doi#nguyen-am-doi">nguyên âm đôi</Link>.</li>

          <li>Phân biệt rõ:</li>

            <ul className="list-square">
        
              <li>[FOOD][FO͞OD] /fuːd/</li>

              <li>[do][dō̄] /duː/ (function word)</li>

              <li>[TUESday][TÜES dāy] /ˈtʃuːz.deɪ/</li>

              <li>[CUTE][CŪTE] /kjuːt/</li>
        
            </ul>

          <li className="margin-top-20 margin-bottom-30">Dựa trên dấu tiếng Việt — dễ nhớ, dễ gõ, dễ học hơn IPA, AHD gốc.</li>

        </ul>

      </div>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>sepTEMber 3, 2025 · by GPT and 🐝Mr. Bee Osn ·</span>
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