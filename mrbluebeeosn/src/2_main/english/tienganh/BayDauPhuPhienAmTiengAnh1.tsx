import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function BayDauPhuPhienAmTiengAnh1(): React.JSX.Element {

  const postId = "BayDauPhuPhienAmTiengAnh1";

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

      {/* This is the content of English Learning Term. */}

      <p>Học phát âm tiếng Anh bằng <strong>IPA quốc tế</strong> đôi khi khó nhớ và xa lạ với người Việt. Vì vậy, ta có thể tạo một hệ thống dựa trên <strong>7 loại dấu phụ quen thuộc trong tiếng Việt</strong> để thay thế IPA, giúp dễ học, dễ liên tưởng và ghi nhớ lâu.</p>
      
      <p>Hệ thống ký hiệu nguyên âm này giúp đơn giản hóa việc học phát âm tiếng Anh.</p>

      <h3 className="margin-y-50 text-center">Giới thiệu</h3>

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

        <h3 className="margin-y-50 text-center" id="mac-dinh">1. Mặc định (không dấu) — Nguyên âm ngắn (short vowels)</h3>

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
                <td>[CAT][CAT] /kæt/</td>
            </tr>
            
            <tr>
                <td><strong>e</strong> = /e/</td>
                <td>[BED][BED] /bed/</td>
            </tr>

            <tr>
                <td><strong>i</strong> = /ɪ/</td>
                <td>[SIT][SIT] /sɪt/</td>
            </tr>

            <tr>
                <td><strong>o</strong> = /ɑː/ (<HashLink smooth to="#ga">GA</HashLink>) <br/>&nbsp; = /ɒ/ (<HashLink smooth to="#rp">RP</HashLink>)</td>

                <td>
                  [HOT][HOT] /hɑːt/ (<HashLink smooth to="#ga">GA</HashLink>) <br/>
                  [HOT][HOT] /hɒt/ (<HashLink smooth to="#rp">RP</HashLink>)
                </td>
            </tr>

            <tr>
                <td><strong>u</strong> = /ʊ/</td>
                <td>[PUT][PUT] /pʊt/</td>
            </tr>

            <tr>
                <td><strong>oo</strong> = /ʊ/</td>
                <td>
                  [BOOK][BOOK] /bʊk/<br/>
                  [GOOD][GOOD] /ɡʊd/
                </td>
            </tr>

            <tr>
                <td><strong>y</strong> = /ɪ/</td>
                <td>[MYTH][MYTH] /mɪθ/</td>
            </tr>

            <tr>
                <td><strong>ee</strong> = /iː/</td>
                <td>[BEE][BEE] /biː/</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* =============================
          2. Macron (¯) — Nguyên âm dài / diphthongs
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <h3 className="margin-y-50 text-center" id="macron">2. Macron (¯) — Nguyên âm dài / diphthongs</h3>

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
                <td>[CAKE][CĀKE] /keɪk/</td>
            </tr>
            
            <tr>
                <td><strong>ē</strong> = /iː/</td>
                <td>[he][hė] /hiː/ (function word)</td>
            </tr>

            <tr>
                <td><strong>ī</strong> = /aɪ/</td>
                <td>[TIME][TĪME] /taɪm/</td>
            </tr>

            <tr>
                <td><strong>ō</strong> = /oʊ/ (<HashLink smooth to="#ga">GA</HashLink>) <br/>&nbsp; = /əʊ/ (<HashLink smooth to="#rp">RP</HashLink>)</td>

                <td>
                  [GO][GŌ] /ɡoʊ/ (<HashLink smooth to="#ga">GA</HashLink>)<br/>
                  [GO][GŌ] /ɡəʊ/ (<HashLink smooth to="#rp">RP</HashLink>)
                </td>
            </tr>

            <tr>
                <td><strong>ū</strong> = /juː/</td>
                <td>[CUTE][CŪTE] /kjuːt/</td>
            </tr>

            <tr>
                <td><strong>o͞o</strong> = /uː/</td>
                <td>
                  [FOOD][FO͞OD] /fuːd/<br/>
                  [SCHOOL][SCHO͞OL] /skuːl/
                </td>
            </tr>

            <tr>
                <td><strong>ȳ</strong> = /aɪ/</td>
                <td>[why][whȳ] /waɪ/ (function word)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* =============================
          3. Circumflex (ˆ) — Caret vowel /ʌ/
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <h3 className="margin-y-50 text-center" id="circumflex">3. Circumflex (ˆ) — Caret vowel /ʌ/</h3>

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
                <td>[beCAUSE][bė CAUSE] /bɪˈkɒz/ (function word)</td>
            </tr>

            <tr>
                <td><strong>ô</strong> = /ʌ/</td>
                <td>[OTHer][ÔTH er] /ˈʌð.ər/</td>
            </tr>

            <tr>
                <td><strong>û</strong> = /ʌ/</td>
                <td>[SUN][SÛN]/sʌn/</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* =============================
          4. Dot above (˙) — Âm /ɪ/ biến thể & /jə/
      ============================= */}
      
      <div className="margin-y-15 text-border1 table-container">

        <h3 className="margin-y-50 text-center" id="dot-above">4. Dot above (˙) — Âm /ɪ/ biến thể</h3>

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
                <td>[IMage][IM ȧge] /ˈɪm.ɪdʒ/</td>
            </tr>

            <tr>
                <td><strong>ė</strong> = /ɪ/</td>
                <td>[exPENSE][ėx PENSE] /ɪkˈspens/</td>
            </tr>

            <tr>
                <td><strong>i̇</strong> = /ɪ/</td>
                <td>[FIT][FIT] /fɪt/ (i có dấu chấm trong fit)</td>
            </tr>

            <tr>
                <td><strong>ȯ</strong></td>
                <td>[WOMen][WȮM ėn] /ˈwɪm.ɪn/</td>
            </tr>

            <tr>
                <td><strong>u̇</strong> = /ɪ/</td>
                <td>[BUSIness][BU̇SI nėss] /ˈbɪz.nɪs/</td>
            </tr>

            <tr>
                <td><strong>ư̇</strong> = /jə/ <br>
                </br> 
                <strong>u̇+ư</strong> = /j+ə/</td>

                <td>[ACcurate][AC cư̇r a̛te] /ˈæk.jə.rət/</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* =============================
          5. Hook (̛ ) — Âm schwa và schwa + r
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <h3 className="margin-y-50 text-center" id="hook">5. Hook ( ̛ ) — Âm schwa và schwa + r</h3>

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
              <td>[aBOUT][a̛ BOUT] /əˈbaʊt/ (function word)</td>
            </tr>

            <tr>
              <td><strong>e̛</strong> = /ə/</td>
              <td>[TAken][TĀ ke̛n] /ˈteɪ.kən/</td>
            </tr>

            <tr>
              <td><strong>i̛</strong> = /ə/</td>
              <td>[PENcil][PEN ci̛l] /ˈpen.səl/</td>
            </tr>

            <tr>
              <td><strong>ơ</strong> = /ə/</td>
              <td>[LEMon][LEM ơn] /ˈlem.ən/</td>
            </tr>

            <tr>
              <td><strong>ư</strong> = /ə/</td>
              <td>[supPORT][sưp PÖRT] /səˈpɔːrt/</td>
            </tr>

            <tr>
              <td colSpan={2}>Khi kết hợp với r → âm /ɜːr/:</td>
            </tr>

            <tr>
              <td><strong>e̛r</strong> = /ɜːr/</td>
              <td>[her][he̛r] /hər/ (function word)</td>
            </tr>

            <tr>
              <td><strong>i̛r</strong> = /ɜːr/</td>
              <td>[BIRD][BI̛RD] /bɜːrd/</td>
            </tr>

            <tr>
              <td><strong>ơr</strong> = /ɜːr/</td>
              <td>[WORD][WƠRD] /wɜːrd/</td>
            </tr>

            <tr>
              <td><strong>ưr</strong> = /ɜːr/</td>
              <td>[NURSE][NƯRSE] /nɜːrs/</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* =============================
          6. Umlaut (¨) — Nguyên âm biến đổi
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <h3 className="margin-y-50 text-center" id="umlaut">6. Umlaut / Diaeresis (¨) — Nguyên âm biến đổi</h3>

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
              <td>
                [CAR][CÄR] /kɑːr/<br/>
                [AUtumn][ÄU tumn] /ˈɑː.t̬əm/
              </td>
            </tr>

            <tr>
              <td><strong>ï</strong> = /iː/</td>
              <td>[PIZza][PÏZ za̛] /ˈpiːt.sə/</td>
            </tr>

            <tr>
              <td><strong>ö</strong> = /ɔː/</td>
              <td>[SHORE][SHÖRE] /ʃɔːr/</td>
            </tr>

            <tr>
              <td><strong>ü</strong> = /uː/</td>
              <td>[TUESday][TÜES dāy] /ˈtʃuːz.deɪ/</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* =============================
          7. Double Macron ( ̄ ̄ ) — Âm dài đặc biệt và biến thể mở rộng
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <h3 className="margin-y-50 text-center" id="double-macron">7. Double Macron (&nbsp; ̄ ̄ ) — Âm dài đặc biệt và biến thể mở rộng</h3>

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
                <td><strong>ā̄</strong> = /e/ (<HashLink smooth to="#ga">GA</HashLink>)<br/>&nbsp;&nbsp; = /eə/ (<HashLink smooth to="#rp">RP</HashLink>)</td>
                
                <td>
                  [SQUARE][SQUĀ̄RE] /skwer/ (<HashLink smooth to="#ga">GA</HashLink>)<br/>
                  [SQUARE][SQUĀ̄RE] /skweər/ (<HashLink smooth to="#rp">RP</HashLink>)
                 </td>
            </tr>

            <tr>
                <td><strong>ē̄</strong> = /ɑː/</td>
                <td>[GENre][GĒ̄Nre] /ˈʒɑːn.rə/</td>
            </tr>

            <tr>
                <td><strong>ō̄</strong> = /uː/</td>
                <td>
                  [do][dō̄] /duː/<br/>
                  [whose][whō̄se] /huːz/
                </td>
            </tr>

            <tr>
                <td><strong>ū̄</strong> = /e/</td>
                <td>[BURy][BŪ̄R y] /ˈber.i/</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* =============================
          8. Ring (˚) — Âm tròn /ɔː/
      ============================= */}

      <div className="margin-y-15 text-border1 table-container">

        <h3 className="margin-y-50 text-center" id="ring">8. Ring (˚) — Âm tròn /ɔː/</h3>

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
                <td>[WAR][WÅR] /wɔːr/</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="margin-y-50 text-center">🔔 GHI CHÚ & NGUYÊN TẮC THỰC DỤNG</h3>

      <h3>🔹 Ta giữ giản lược:</h3>

      <p className="margin-top-20 text-indent-whole">Short vowels mặc định viết không dấu (aeiou, oo y) và long vowels (ee). Dấu chỉ dùng khi cần phân biệt hoặc cho âm dài/đặc biệt.</p>

      <h3 className="margin-top-30">🔹 /uː/ và /juː/ được tách rõ:</h3>
      
        <ul className="margin-top-20 list-square">
      
          <li>[FOOD][FO͞OD] /fuːd/</li>

          <li>[do][dō̄] /duː/ (function word)</li>

          <li>[TUESday][TÜES dāy] /ˈtʃuːz.deɪ/</li>

          <li>[CUTE][CŪTE] /kjuːt/</li>
      
        </ul>

      <h3 className="margin-top-30">🔹 o mặc định có hai giá trị theo giọng:</h3>

      <p className="margin-top-20 text-indent-whole">o = /ɑː/ (US) và /ɒ/ (UK).</p>

      <h3 className="margin-top-30">🔹 Dot above (˙)</h3>

      <p className="margin-top-20 text-indent-whole">Là nơi đặt nhiều biến thể “chữ viết khác → phát âm /ɪ/”:</p>
      
        <ul className="list-square">
      
          <li>[IMage][IM ȧge] /ˈɪm.ɪdʒ/</li>
      
          <li>[WOMen][WȮM ėn] wȯmėn</li>
      
          <li>[BUSIness][BU̇SI nėss] /ˈbɪz.nɪs/</li>

          <li>[FIT][FIT] /fɪt/</li> 
      
          <li>[exPENSE][ėx PENSE] /ɪkˈspens/</li>
      
      
        </ul>


      <p className="margin-top-20 text-indent-whole">và ư̇ cho /jə/:</p>

      <ul className="list-square">
      
          <li>[ACcurate][AC cư̇r a̛te] /ˈæk.jə.rət/</li>
      
        </ul>


      <h3 className="margin-top-30">🔹 Hook (dấu móc)</h3>

      <p className="margin-top-20 text-indent-whole">Gom cả schwa /ə/ và schwa + r</p>

      <p className="margin-top-20 text-indent-whole">Ví dụ</p>

        <ul className="list-square">

          <li>[her][he̛r] /hər/</li>
          
          <li>[BIRD][BI̛RD] /bɜːrd/</li>

        </ul>


      <p className="margin-top-30">❗Chú thích:</p>

        <ul className="list-square">

          <li id="ga">Trong GA (GENeral aMERican: Anh–Mỹ)</li>
          
          <li id="rp">Trong RP (reCEIVED pronunciAtion: Anh–Anh)</li>

        </ul>

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-top-30 text-center">✅ Kết luận</h3>

        <p className="margin-top-30">Hệ thống 8 dấu phụ này:</p>

        <ul className="list-square">

          <li>Bao phủ toàn bộ <Link to="/tieng-anh/nguyen-am-don">nguyên âm đơn</Link> + <Link to="/tieng-anh/nguyen-am-doi">nguyên âm đôi</Link>.</li>

          <li>Các âm khó (schwa /ə/, caret /ʌ/, weak /ɪ/) đều có ký hiệu riêng.</li>

          <li className="margin-bottom-30">Dựa trên dấu tiếng Việt → dễ nhớ, dễ gõ, dễ học hơn IPA, AHD gốc.</li>

        </ul>

      </div>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>September 12, 2025 · by GPT and 🐝Mr. Bee Osn ·</span>
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