import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function PREsentPERfect(): React.JSX.Element {

	const postId = "PREsentPERfect";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#verbs-terms"><mark className="highlight-tertiary-padding-4-8">VERBS</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">PREsent PERfect</h1>					

			<h4 className="margin-bottom-30 text-center">Understanding 📏 the Time Frame of the Present Perfect Tense</h4>

			<p>Have you ever wondered, “📏 Is the Present Perfect Tense used to talk about actions that were not yet completed in the past?” This is a very common question among English learners, and the answer is partly correct, but not entirely. Let’s dive deeper into this tense together so you can fully understand and use it correctly!</p>

			<h3 className="margin-y-50 text-center">📏 What Is the Present Perfect Tense?</h3>

			<p>📏 The Present Perfect Tense is formed using "have/has" + the verb in the past participle form (V3).</p>

			<p className="text-indent-whole">For example:</p>

				<ul className="list-square">

					<li>i <strong>have JUST FINished</strong> WRIting this ARticle.</li>
					<li className="margin-bottom-20 list-none">I just finished writing this article.</li>

					<li className="margin-bottom-20 list-none">The word "just" is used to emphasize an action that has just taken place immediately before the moment of speaking.</li>

					<li>she <strong>has LIVED</strong> in San Francisco since TWENty fifTEEN.</li>
					<li className="margin-bottom-20 list-none">She has lived in San Francisco since 2015.</li>
					
					<li className="margin-bottom-20 list-none">The word "since," when used with a specific date (2015), is used to indicate an action that began in the past and is still continuing into the present.</li>

				</ul>

			<p className="margin-top-20">Unlike ⏳ the time of the action in the Past Simple, 📏 the time of the action in the Present Perfect is always connected to the present. It not only describes the past but also emphasizes the consequences or the continuation of the action up to the present.</p>

			<h3 className="margin-y-50 text-center">The Main Meanings of 📏 the Present Perfect Tense</h3>

			{/* 1. Hành động bắt đầu trong quá khứ và vẫn tiếp diễn đến hiện tại */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">1. An action that began in the past and is still ongoing in the present</h3>

				<p>This is exactly the case of an "incomplete action" that many of you often think of.</p>

					<ul className="list-square">

						<li>i <strong>have WORKED</strong> at this COMpany for FIVE YEARS.</li>
						<li className="margin-bottom-20 list-none">I've been employed at this company for the last five years.</li>

						<li className="list-none">This sentence uses 📏 the Present Perfect Tense with the word "for" to indicate an action that began in the past and is still ongoing at the present time (I’m still working at this company now).</li>

						<li className="list-none">→ Started working 5 years ago → still working now → the action hasn’t ended.</li>

						<li className="list-none">It is usually used with “for” (a period of time) or “since” (a specific point in time).</li>

					</ul>

			</div>

			{/* 2. Hành động đã hoàn thành trong quá khứ nhưng kết quả vẫn ảnh hưởng đến hiện tại */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">2. Actions that were completed in the past but whose results still affect the present</h3>

				<p>Here, the action has been completed, but its consequences are still evident in the present, and no specific time is mentioned.</p>

					<ul className="list-square">

						<li>i <strong>have LOST</strong> my WALlet.</li>
						<li className="margin-bottom-20 list-none">I lost my wallet.</li>

						<li className="list-none">Emphasizing the current situation (I still haven't found my wallet).</li>
						<li className="list-none">→ I lost my wallet (without specifying when) → I still don't have my wallet → I need to find it or get a new one.</li>

					</ul>

				<p className="margin-top-20">If we're talking about a specific time:</p>

					<ul className="list-square">

						<li>i <strong>LOST</strong> my WALlet YESterday.</li>
						<li className="margin-bottom-20 list-none">Yesterday, I lost my wallet.</li>
						
						<li className="list-none">Emphasize that the act of losing the wallet occurred and ended at a specific time in the past (YESterday).</li>
						<li className="list-none">→ Use the PAST Simple.</li>

					</ul>

			</div>

			{/* 3. Nói về kinh nghiệm cá nhân đến thời điểm hiện tại */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-y-50 text-center">3. Discuss your personal experiences to date</h3>

				<ul className="list-square">

						<li>he <strong>has VISited</strong> jaPAN THREE TIMES.</li>
						<li className="margin-bottom-20 list-none">He has traveled to Japan a total of three times.</li>

						<li className="list-none">→ So far in his life, he has been to Japan three times.</li>

						<li className="margin-top-20">Commonly used with <Link to="/vocabulary/EVer-1">EVer</Link>, <Link to="/vocabulary/NEVer-1">NEVer</Link>, alREAdy, YET, JUST, REcently...</li>

					</ul>
			</div>

				<h3 className="margin-y-50 text-center">Quick Comparison with ⏳ the Simple Past Tense</h3>

				<table className="margin-y-50">
					<thead>
						<tr>
							<th>📏 Time Period of Action in the Present Perfect Tense</th>
							<th>⏳ Action Time in the Simple Past</th>
						</tr>
					</thead>

					<tbody>

						<tr>
								<td>
									i <strong>have SEEN</strong> that MOvie.<br/>
									I've watched that movie.<br/><br/>
									
									(and now I know what it's about)
								</td>
								<td>
									I <strong>SAW</strong> that MOvie LAST WEEK.<br/>
									I watched the movie last week.<br/><br/>

									(list only the events)
								</td>
						</tr>

						<tr>
								<td>Regarding the present</td>
								<td>It occurred and ended only in the past</td>
						</tr>

						<tr>
								<td>No specific time (or "for" or "since")</td>
								<td>Has a specific time (YESterday, in 2020)</td>
						</tr>

					</tbody>
				</table>

			<h3 className="margin-y-50 text-center">Quick Memory Tips</h3>

			<p>→ Use the Present Perfect: If you're thinking about current consequences or something that has been ongoing up to now.</p>

			<p>→ Use the past simple: If you're simply recounting a past event as something that has already happened.</p>

			<p className="margin-top-20">📏 The Present Perfect Tense isn’t hard - you’ll get the hang of it with a little practice! Try writing a few sentences about yourself using this tense and see how it goes:</p>
			
				<ul className="list-square">
			
					<li>WHERE have you LIVED?</li>
					<li className="margin-bottom-20 list-none">Where did you grow up?</li>
			
					<li>WHAT have you EAten toDAY?</li>
					<li className="margin-bottom-20 list-none">What did you have for dinner today?</li>
			
					<li>have you EVer TRAVeled aBROAD?</li>
					<li className="list-none">Have you ever taken a trip that was very long and wide?</li>
			
				</ul>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>deCEMber 28, 2025 · by Grok and 🐝Mr. Bee Osn  ·</span>
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