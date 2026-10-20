import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TRUly2(): React.JSX.Element {

	const postId = "TRUly2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/vocabulary#ADverbs-verifiCAtion"><mark className="highlight-tertiary-padding-4-8">verifiCAtion</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">TRUly
				<sup>
					<Link to="/vocabulary/TRUly-1">&nbsp;1&nbsp;</Link>
				</sup>
				<sup>
					<Link to="/vocabulary/TRUly-2">&nbsp;2&nbsp;</Link>
				</sup>
			</h1>

			<div className="example">
																			
				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#apPREciate">apPREciate</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#beLIEVE-in">beLIEVE in</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#underSTAND">underSTAND</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#SORry">SORry</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#reMARKable">reMARKable</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#inSPIring">inSPIring</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#uNIQUE">uNIQUE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#GRATEful">GRATEful</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#BLESSED">BLESSED</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#unforGETtable">unforGETtable</HashLink>
					</span> &nbsp;

				</p>

			</div>

			{/* This is the content of Vocabulary Term. */}

			<p>Great! Let's take a closer look at the word "TRUly" (truly) and some common phrases that go with it.</p>

			<div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

				<div>

					<p className="margin-y-10">
						
						<span className="highlight-255-padding-3-6">
							
							TRUly \<Link to="/pronunciation/5-vowel-system">TRÜ ly</Link>\ /ˈtruːli/ ⬤• (TWO SYLlables)
							
						</span>
							
						&nbsp;in English means "truly" or "actually" and is often used to emphasize the authenticity or truthfulness of something.

					</p>

				</div>

				<div className="bee-wrapper2">
					<img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
				</div>

			</div>

      <ol className="margin-top-30 padding-left-30">

				<li value="1" id="apPREciate">i TRUly apPREciate your HELP.</li>
				<li className="list-none margin-bottom-20">Thank you for your help. I really appreciate it.</li>

				<li value="2" id="beLIEVE-in">i TRUly beLIEVE in the POWer of LOVE.</li>
				<li className="list-none margin-bottom-20">I truly believe that love has the power to change things.</li>

				<li value="3" id="underSTAND">i TRUly underSTAND HOW you FEEL.</li>
				<li className="list-none margin-bottom-20">I know exactly what you're feeling.</li>

				<li value="4" id="SORry">i am TRUly SORry for WHAT i SAID.</li>
				<li className="list-none margin-bottom-20">I am sorry for my words. I am sorry.</li>

				<li value="5" id="reMARKable">her perFORmance was TRUly reMARKable.</li>
				<li className="list-none margin-bottom-20">She did a really great job.</li>

				<li value="6" id="inSPIring">his STORy is TRUly inSPIring.</li>
				<li className="list-none margin-bottom-20">His story really inspires people!</li>

				<li value="7" id="uNIQUE">her ARTwork is TRUly uNIQUE.</li>
				<li className="list-none margin-bottom-20">Her artwork is one of a kind.</li>

				<li value="8" id="GRATEful">i am TRUly GRATEful for your supPORT.</li>
				<li className="list-none margin-bottom-20">I'm very thankful for your help.</li>

				<li value="9" id="BLESSED">i FEEL TRUly BLESSED to have such GOOD FRIENDS.</li>
				<li className="list-none margin-bottom-20">I'm really lucky to have such great friends.</li>

				<li value="10" id="unforGETtable">it was a TRUly unforGETtable exPErience.</li>
				<li className="list-none margin-bottom-20">It was a very memorable experience.</li>

			</ol>

			<p>** The phrases above are all used to emphasize the sincerity and depth of emotions, thoughts, or opinions. They are often used in communication situations that call for sincerity and authenticity.</p>

			{/* =============================
						Lưu ý:
			============================= */}

			<div className="margin-y-30 text-border1 table-container">

				<h3 className="margin-y-30 text-center">Note:</h3>

				<ul className="list-square">

					<li>"TRUly" is often placed before an adjective or verb to emphasize the meaning.</li>

					<li className="margin-bottom-20">This word is commonly used in both formal spoken and written language.</li>

				</ul>

			</div>

			<p className="margin-top-50">Hoping this information is helpful to you! 🐝</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>noVEMber 2, 2024 · by 💎GEM ·</span>
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