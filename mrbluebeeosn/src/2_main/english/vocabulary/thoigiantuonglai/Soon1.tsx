import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SOON1(): React.JSX.Element {

	const postId = "SOON1";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/vocabulary#ADverbs-SOON"><mark className="highlight-tertiary-padding-4-88">SOON</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">SOON
				<sup><Link to="/vocabulary/SOON-1">&nbsp;1&nbsp;</Link>
				</sup>
				<sup><Link to="/vocabulary/SOON-2">&nbsp;2&nbsp;</Link>
				</sup>
			</h1>

			<div className="example">
																						
				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#ADverb">ADverb</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADverb-er">ADverb-er</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ADverb-est">ADverb-est</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#SYNonyms">SYNonyms</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#ANtonyms">ANtonyms</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#VoCABulary-LEARNing-TIPS">🌻 VoCABulary LEARNing TIPS</HashLink>
					</span> &nbsp;

				</p>

			</div>

			{/* This is the content of Vocabulary Term. */}
			
			<p>Great! Let's dive into an analysis of the word "SOON" and related idioms.</p>

			<div className="text-border1 padding-top-20 padding-bottom-10 highlight-238-padding-4-8 bee-container">

				<div>

					<ul className="list-square padding-left-40">

						<li>
							<span className="highlight-255-padding-3-6">
								SOON \<Link to="/pronunciation/5-vowel-system">SO͞ON</Link>\ /suːn/ ⬤ (ONE SYLlable)
							</span>
						</li>

						<li><Link to="/grammar/what-is-an-adverb?">ADverb</Link></li>

						<li>Coming soon</li>

					</ul>

				</div>

				<div className="bee-wrapper">
					<img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
				</div>

			</div>

			<p className="margin-top-30 text-indent-whole">SOON: An event will take place in the near future.</p>

			<p className="margin-top-20 text-indent-whole">For example:</p>

				<ul className="list-square">

					<li id="ADverb">i'll be BACK SOON.</li>
					<li className="margin-bottom-20 list-none">I will return shortly!</li>

					<li>the PARTy will START SOON.</li>
					<li className="list-none">The party will begin soon.</li>

				</ul>

			{/* =============================
						VoCABulary FAMILy:
			============================= */}
				
			<p className="margin-top-20">
				<mark className="highlight-238-padding-4-8">
					<strong>VoCABulary FAMILy:</strong>:
				</mark>
			</p>

				<ul className="list-square">

					<li id="ADverb-er">WHEN can you COME? the SOONer, the BETter.</li>
					<li className="margin-bottom-20 list-none">When can you come? It would be great if you could come as soon as possible.</li>
					
					<li id="ADverb-est">i will rePLY SOONest.</li>
					<li className="list-none">I'll get back to you soon.</li>

				</ul>

			{/* =============================
						SYNonyms:
			============================= */}
				
			<p className="margin-top-20" id="SYNonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>SYNonyms</strong>:
        </mark>
      </p>

				<ul className="list-square">

					<li>i will be with you SHORTly.</li>
					<li className="margin-bottom-20 list-none">I'll be with you in a little bit.</li>

					<li>i'll be with you <Link to="/vocabulary/PRESently-1">PRESently</Link>.</li>
					<li className="list-none">I'll be there in a moment.</li>

				</ul>

				{/* <Link to="/vocabulary/CLEARly-1">Clearly</Link> */}

			{/* =============================
						ANtonyms:
			============================= */}

			<p className="margin-top-20" id="ANtonyms">
        <mark className="highlight-238-padding-4-8">
          <strong>ANtonyms</strong>:
        </mark>
      </p>

				<ul className="list-square">

					<li>let's MEET LAter.</li>
					<li className="margin-bottom-20 list-none">I'll be there right away.</li>

					<li>i will <Link to="/vocabulary/NEVer-1">NEVer</Link> forGET you.</li>
					<li className="list-none">I will always remember you.</li>

				</ul>
			
			{/* =============================
						🌻 Vocabulary-Learning Tips:
			============================= */}

			<h3 className="margin-y-50 text-center" id="VoCABulary-LEARNing-TIPS">🌻 Vocabulary-Learning Tips:</h3>

			{/* =============================
            1. Link to the image:
      ============================= */}
      
      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>1. Link to the image</strong>:</mark> 
        </strong>
      </p>

			<p className="text-indent-whole">Imagine a clock counting down.</p>

				<ul className="list-square">

					<li>the CLOCK is COUNTing DOWN. TIME'S UP SOON.</li>
					<li className="list-none">The clock is running out of time. You don't have much time left.</li>

				</ul>

			{/* =============================
            2. Create example sentences:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>2. Create example sentences</strong>:</mark> 
        </strong>
      </p>

			<p className="text-indent-whole">Tạo nhiều câu với "<strong>SOON</strong>" trong các ngữ cảnh khác nhau, liên quan đến thời gian.</p>

				<ul className="list-square">

					<li>the MEETing will START SOON.</li>
					<li className="list-none">The meeting is about to begin.</li>

				</ul>

			{/* =============================
            3. Regular practice:
      ============================= */}

      <p className="margin-top-20">
        <strong>
          <mark className="highlight-255-padding-4-8"><strong>3. Regular practice</strong>:</mark>
        </strong>
      </p>

			<p className="text-indent-whole margin-bottom-20">Create several sentences using "SOON" in different contexts related to time.</p>

				<p className="text-indent-whole">Examples for comparison (the difference between "SHORTly" and "SOON"):</p>

					<ol>

						<li value="1">the MEETing will comMENCE SHORTly.</li>
						<li className="list-none margin-bottom-20">The meeting will start in a few minutes.</li>

						<li value="2">i'll be BACK SOON.</li>
						<li className="list-none">I will return shortly.</li>

					</ol>

			{/* <span className="highlight-255-padding-0-4"></span> */}

			{/* =============================
						Lưu ý:
			============================= */}
			
			<div className="margin-y-30 text-border1 table-container">

				<h3 className="margin-y-30 text-center">Note:</h3>

				<ul className="list-square">

					<li>"SOON" usually comes at the end of a sentence or after a verb.</li>

					<li className="margin-bottom-20">It can be used to express anticipation, urgency, or an upcoming event.</li>

				</ul>

			</div>

			<p className="margin-top-50">Hoping you do great in your English studies! 🐝</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>noVEMber 7, 2024 · by 💎GEM ·</span>
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