import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NguyenAmDon(): React.JSX.Element {

  const postId = "NguyenAmDon";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/tieng-anh#pronunciation-terms"><mark className="highlight-tertiary-padding-4-8">pronunciAtion</mark></HashLink></h4>

      <h1 className="margin-y-50 text-center">📌 BẢNG TỔNG HỢP NGUYÊN ÂM ĐƠN

        <sup><HashLink smooth to="/tieng-anh/nguyen-am-don">&nbsp;1&nbsp;</HashLink>
        </sup>

        <sup><HashLink smooth to="/tieng-anh/nguyen-am-doi">&nbsp;2&nbsp;</HashLink>
        </sup>

        <p className="text-center">(gọn, để tra cứu)</p>

      </h1>

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
              <td>[CAT][CAT] /kæt/</td>
            </tr>

            <tr>
              <td>/e/</td>
              <td>
                [BED][BED] /bed/<br/>
                [SQUARE][SQUĀ̄RE] /skwer/ (<HashLink smooth to="#ga">GA</HashLink>)<br/>
                [SQUARE][SQUĀ̄RE] /skweər/ (<HashLink smooth to="#rp">RP</HashLink>)<br/>
                [BURy][BŪ̄R y] /ˈber.i/
              </td>
            </tr>

            <tr>
              <td>/ɪ/</td>
              <td>
                [IMage][IM ȧge] /ˈɪm.ɪdʒ/<br/>
                [exPENSE][ėx PENSE] /ɪkˈspens/<br/>
                [SIT][SIT] /sɪt/<br/>
                [WOMen][WȮM ėn] /ˈwɪm.ɪn/<br/>
                [BUSINess][BU̇SI nėss] /ˈbɪz.nɪs/<br/>
                [MYTH][MYTH] /mɪθ/
              </td>
            </tr>
      
            <tr>
              <td>/iː/</td>
              <td>
                [BEE][BEE] /biː/<br/>
                [he][hė] /hiː/ (function word)<br/>
                [PIZza][PÏZ za̛] /ˈpiːt.sə/
              </td>
            </tr>

            <tr>
              <td>/ɑː/</td>
              <td>
                [HOT][HOT] /hɑːt/ (<HashLink smooth to="#ga">GA</HashLink>)<br/>
                [HOT][HOT] /hɒt/ (<HashLink smooth to="#rp">RP</HashLink>)
              </td>
            </tr>

            <tr>
              <td>/ʌ/</td>
              <td>
                [beCAUSE][bė CAUSE] /bɪˈkɒz/ (function word)<br/>
                [OTHer][ÔTH er] /ˈʌð.ər/<br/>
                [SUN][SÛN]/sʌn/
              </td>
            </tr>

            <tr>
              <td>/ʊ/</td>
              <td>
                [PUT][PUT] /pʊt/<br/>
                [BOOK][BOOK] /bʊk/
              </td>
            </tr>

            <tr>
              <td>/uː/</td>
              <td>
                [FOOD][FO͞OD] /fuːd/<br/>
                [do][dō̄] /duː/ (function word)<br/>
                [TUESday][TÜES dāy] /ˈtʃuːz.deɪ/
              </td>
            </tr>

            <tr>
              <td>/ɔː/</td>
              <td>
                [SHORE][SHÖRE] /ʃɔːr/<br/>
                [WAR][WÅR] /wɔːr/
              </td>
            </tr>

            <tr>
              <td>/ɑː/</td>
              <td>
                [CAR][CÄR] /kɑːr/<br/>
                [GENre][GĒ̄Nre] /ˈʒɑːn.rə/
              </td>
            </tr>

            <tr>
              <td>/ə/</td>
              <td>
                [aBOUT][a̛ BOUT] /əˈbaʊt/ (function word)<br/>
                [TAken][TĀ ke̛n] /ˈteɪ.kən//<br/>
                [PENcil][PEN ci̛l] /ˈpen.səl/<br/>
                [LEMon][LEM ơn] /ˈlem.ən/<br/>
                [supPORT][sưp PÖRT] /səˈpɔːrt/
              </td>
            </tr>

            <tr>
              <td>/ɜːr/</td>
              <td>
                [her][he̛r] /hər/ (function word)<br/>
                [BIRD][BI̛RD] /bɜːrd/<br/>
                [WORD][WƠRD] /wɜːrd/<br/>
                [NURSE][NƯRSE] /nɜːrs/
              </td>
            </tr>

          </tbody>
        </table>
    
        <div className="margin-y-30">
          
          <p>📌 Chú thích:</p>

          <ul className="list-square">

            <li id="ga">Trong GA (GENeral aMERican: Anh–Mỹ)</li>
            
            <li id="rp">Trong RP (reCEIVED pronunciAtion: Anh–Anh)</li>

          </ul>

        </div>

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