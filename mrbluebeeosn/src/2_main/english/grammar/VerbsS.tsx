import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VerbsAddS(): React.JSX.Element {

	const postId = "VerbsAddS";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/grammar#grammar-terms"><mark className="highlight-tertiary-padding-4-8">Grammar</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Verbs S</h1>

			{/* This is the content of English Learning Term. */}

			<div className="margin-y-50 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

      {/* =============================
        VERBSADDS
      ============================= */}

      <p className="margin-top-20 text-center">

        <div className="example">

          <p className="example-sentence">
            🟦 <span className="s">1st Person (Ngôi thứ nhất): <strong>the SPEAKer</strong>. This is you. You use I (singular) or We (plural).</span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            🟦 <span className="v">2nd Person (Ngôi thứ hai): <strong>the LIStener</strong>. This is the person right in front of you. You use You (both singular and plural).</span>
          </p>

        </div>

        <div className="example">

          <p className="example-sentence">
            🟦 <span className="o">3rd Person (Ngôi thứ ba): <strong>the outSIder</strong>. This is anyone or anything outside of the direct conversation. You are talking about them, not to them.</span>
          </p>

          <p className="example-sentence">
            <span className="t">Whenever you talk about <strong>one outSIder</strong> (he/she/it), you are technically "GO<strong>Ss</strong>iping" about them, so you must add the "<strong>S</strong>" (GO<strong>Ss</strong>iping) to the action: <br/>
            </span>
          </p>

          <p className="example-sentence">
            <span className="pill s">he...🆂</span> &nbsp;<span className="pill v">she...🆂</span> &nbsp;<span className="pill o">it...🆂</span> &nbsp;<span className="pill m">one...🆂</span> &nbsp;<span className="pill p">everyone...🆂</span>
          </p>

          <p className="example-sentence">
            <span className="s">
            he SPEAK<strong>🆂</strong> (Anh ấy nói...)
            </span>
          </p>

          <p className="example-sentence">
            <span className="v">
            she LAUGH<strong>🆂</strong> (Cô ấy cười...)
            </span>
          </p>

          <p className="example-sentence">
            <span className="o">
            it HURT<strong>🆂</strong> (Nó đau...)
            </span>
          </p>

          <p className="example-sentence">
            <span className="m">
            One SPEAK<strong>🆂</strong> (Một người nói...)
            </span>
          </p>

          <p className="example-sentence">
            <span className="p">
            Everyone LAUGH<strong>🆂</strong> (Mọi người đều cười...)
            </span>
          </p>

          {/* <p className="example-sentence">
            <span className="t">You don't add "<strong>S</strong>" when talking to the person right in front of you (You) or about yourself (I), because that is a direct conversation, not GO<strong>Ss</strong>ip!</span>
          </p> */}


        </div>


        <hr className="margin-y-20"/>

        <span className="highlight-255-padding-0-4 text-border">
          <strong>VERBS</strong>: ADD 🆂 to MAKE them SINGular<br/>
        </span>
          the CAT SLEEP🆂.

        <hr className="margin-y-20"/>
      
        <span className="highlight-255-padding-0-4 text-border">
          <strong>NOUNS</strong>: ADD 🆂 to MAKE them PLURal<br/>
        </span>
        ONE CAT, TWO CAT🆂, the CAT🆂 SLEEP.

      </p>

      

    </div>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>September 05, 2026 · by Mr.ßEE ·</span>
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