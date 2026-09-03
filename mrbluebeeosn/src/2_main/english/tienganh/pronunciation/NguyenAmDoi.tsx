import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NguyenAmDoi(): React.JSX.Element {

  const postId = "NguyenAmDoi";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/tieng-anh#pronunciation-terms"><mark className="highlight-tertiary-padding-4-8">pronunciAtion</mark></HashLink></h4>

      <h1 className="margin-y-50 text-center">📌 BẢNG TỔNG HỢP NGUYÊN ÂM ĐÔI

        <sup><HashLink smooth to="/tieng-anh/nguyen-am-don">&nbsp;1&nbsp;</HashLink>
        </sup>

        <sup><HashLink smooth to="/tieng-anh/nguyen-am-doi">&nbsp;2&nbsp;</HashLink>
        </sup>

        <p className="text-center">(DIPHTHONGS)</p>

      </h1>

      {/* This is the content of English Learning Term. */}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IPA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th>Ví dụ</th>
            </tr>
          </thead>

          <tbody>
            <tr>
                <td>/aɪ/</td>
                <td>
                  [TIME][TĪME] /taɪm/<br/>
                  [why][whȳ] /waɪ/
                </td>
            </tr>
            
            <tr>
                <td>/eɪ/</td>
                <td>[CAKE][CĀKE] /keɪk/</td>
            </tr>

            <tr>
                <td>/oʊ/</td>
                <td>
                  [GO][GŌ] /ɡoʊ/ (<HashLink smooth to="#ga">GA</HashLink>)<br/>
                  [GO][GŌ] /ɡəʊ/ (<HashLink smooth to="#rp">RP</HashLink>)
                </td>
            </tr>

            <tr>
                <td>/aʊ/</td>
                <td>
                  [HOUSE][HOUSE] /haʊs/<br/>
                  [NOW][NOW] /naʊ/
                </td>
            </tr>

            <tr>
                <td>/ɔɪ/</td>
                <td>[BOY][BOY] /bɔɪ/</td>
            </tr>

            <tr>
                <td>/juː/</td>
                <td>[CUTE][CŪTE] /kjuːt/</td>
            </tr>

            <tr>
                <td>/jə/ (u̇+ư)</td>
                <td>[ACcurate][AC cư̇r a̛te] /ˈæk.jə.rət/</td>
            </tr>

            <tr>
                <td>/eə/ (<HashLink smooth to="#rp">RP</HashLink>)</td>
                <td>
                  [SQUARE][SQUĀ̄RE] /skwer/ (<HashLink smooth to="#ga">GA</HashLink>)<br/>
                  [SQUARE][SQUĀ̄RE] /skweər/ (<HashLink smooth to="#rp">RP</HashLink>)
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