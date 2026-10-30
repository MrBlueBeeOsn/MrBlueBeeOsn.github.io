import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SixTypesofVerbs(): React.JSX.Element {

	const postId = "SixTypesofVerbs";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#verbs-terms"><mark className="highlight-tertiary-padding-4-8">VERBS</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">6 Types of Verbs
									
				{/* <sup><HashLink smooth to="/tieng-anh/6-types-of-verbs">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/6-dang-hanh-dong-2">&nbsp;2&nbsp;</HashLink>
				</sup> */}

			</h1>

			<h4 className="margin-bottom-30 text-center">Super Easy to Remember with 3 Pairs of “Opposites”! 💥</h4>

			<p>Have you ever found English verbs “confusing” because there are so many forms?</p>

			<p>Good news: Just remember the 6 basic forms organized into 3 pairs of opposites that are super easy to visualize, and you’ll have a 95% grasp of how to use verbs in everyday conversation.</p>
			
			<p>This memorization method is super simple—it’s like a “head-to-head battle” between the forms—which helps your brain retain the information longer.</p>

			<p className="margin-bottom-50">Let’s “watch the match” between these 3 pairs!</p>

			{/* Cặp 1: WORK vs WORKS */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-top-50 margin-bottom-20 text-center">Pair 1: WORK vs. WORKS</h3>

				<p className="text-center margin-bottom-50">(“I/you/I” vs. “he/she/it”)</p>

				<p>WORK (base form – BARE infinitive): Used with "I," "you," "we," and "they" in the ⏳ Present Simple Tense, or after "do," "does," "did," "can," "will," "must," etc.</p>

				<p className="text-indent-whole">For example:</p>

					<ul className="list-square">

						<li>i WORK from HOME.</li>
						<li className="list-none">Tôi làm việc ở nhà.</li>
						<li className="margin-bottom-20 list-none">Affirmative form. Used to describe how or where you usually work at present.</li>

						<li>do you WORK on WEEKends?</li>
						<li className="list-none">Bạn có làm việc vào các ngày cuối tuần không?</li>
						<li className="margin-bottom-20 list-none">Question type (interrogative). The auxiliary verb is moved to the beginning of the sentence to ask about the other person’s habits or work schedule.</li>

						<li>they DON'T WORK VERy HARD.</li>
						<li className="list-none">Họ không làm việc chăm chỉ cho lắm.</li>
						<li className="margin-bottom-20 list-none">Negative form. Use "DON'T" (do NOT) with the base form of the verb "WORK" to express that an action is not taking place in the present.</li>

					</ul>

				<p className="margin-top-20">WORKS (third-person singular): Used only when the subject is he, she, or it.</p>

				<p className="text-indent-whole">For example:</p>

					<ul className="list-square">

						<li>she WORKS in a BIG COMpany.</li>
						<li className="list-none">Cô ấy làm việc trong một công ty lớn.</li>
						<li className="margin-bottom-20 list-none">Used to express a fact or a stable condition in the present. The verb "WORK" takes an "S" because the subject is third-person singular (she).</li>

						<li>he LIKES SPIcy FOOD.</li>
						<li className="list-none">Anh ấy thích đồ ăn cay.</li>
						<li className="margin-bottom-20 list-none">Used to describe current preferences, habits, or tastes. The verb "LIKE" takes an "s" when the subject is "he."</li>

						<li>the PHONE RINGS a LOT toDAY.</li>
						<li className="list-none">Điện thoại reo rất nhiều trong ngày hôm nay.</li>
						<li className="margin-bottom-20 list-none">Used to describe an event that repeats itself many times during the present (today). The verb "RING" takes an "S" because the subject is a singular noun (the PHONE).</li>

					</ul>

				<p className="margin-top-20 text-indent-whole">Mnemonic for Pair 1: “When talking about yourself or a group → use the regular form of ‘WORK.’ When talking about a person or thing → you must add an ‘s’ or ‘es’ to be ‘polite’!”</p>

			</div>

			{/* Cặp 2: WORKED vs have/has/had WORKED */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-top-50 margin-bottom-20 text-center">Pair 2: WORKED vs. have/has/had WORKED</h3>

				<p className="text-center margin-bottom-50">(Past tense indicating a “completely finished” action vs. past tense still relevant to the present)</p>

					<p>Worked (simple past): Used to describe an action that has been completed and took place at a specific time in the past.</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>YESterday i WORKED until MIDnight.</li>
						<li className="list-none">Hôm qua tôi đã làm việc cho đến tận nửa đêm. (⏳ Thời Gian Hành Động ở Quá Khứ Đơn)</li>
						<li className="margin-bottom-20 list-none">The action extended until a specific point in the past (MIDnight) and is associated with the clear time marker YESterday.</li>

						<li>we ATE SUshi LAST NIGHT.</li>
						<li className="list-none">Chúng tôi đã ăn sushi vào tối qua. (⏳ Thời Gian Hành Động ở Quá Khứ Đơn)</li>
						<li className="margin-bottom-20 list-none">The irregular verb "EAT" changes to "ATE," combined with the past time expression "LAST NIGHT."</li>

						<li>she WENT to jaPAN TWO YEARS aGO.</li>
						<li className="list-none">Cô ấy đã đi Nhật Bản cách đây hai năm. (⏳ Thời Gian Hành Động ở Quá Khứ Đơn)</li>
						<li className="margin-bottom-20 list-none">The irregular verb "go" is conjugated as "WENT," combined with the phrase "TWO YEARS AGO" (two years ago) to indicate a point in time that has passed in the past.</li>

					</ul>

				<p className="margin-top-20">Have/Has/had WORKED (past participle in 📏 the time frame of the action in the Present Perfect: Used to describe experiences or results that extend to the present (Present Perfect) or to a point in the past (Past Perfect).</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>i have WORKED HERE for 5 YEARS.</li>
						<li className="list-none">Tôi đã làm việc ở đây được 5 năm.</li>
						<li className="margin-bottom-20 list-none">📏 The Present Perfect Tense. This structure is used to describe an action that began in the past and is still ongoing in the present (as of now, I am still working here).</li>

						<li>she has NEVer EAten DURian.</li>
						<li className="list-none">Cô ấy chưa bao giờ ăn sầu riêng.</li>
						<li className="margin-bottom-20 list-none">📏 The Present Perfect Tense. The adverb "never" is often used to describe experiences up to the present time.</li>

						<li>by 5 p.M., we had FINished all the TASKS.</li>
						<li className="list-none">Trước 5 giờ chiều, chúng tôi đã hoàn thành tất cả các nhiệm vụ.</li>
						<li className="margin-bottom-20 list-none">📏 The Past Perfect Tense. Used to describe an action that was completed before a specific point in the past (before 5 p.m. that day).</li>

					</ul>

				<p className="margin-top-20 text-indent-whole">Tip for remembering Pair 2: “If the past event is over and has a specific date → use WORKED. If the past event still ‘haunts’ the present or isn’t over yet → use have/has/had WORKED!”</p>

			</div>

			{/* Cặp 3: To Work vs (Be) Working */}

			<div className="margin-y-15 text-border1 table-container">

				<h3 className="margin-top-50 margin-bottom-20 text-center">Pair 3: be WORKing vs. to WORK</h3>

				<p className="text-center margin-bottom-50">(“working right now” vs. “wanting to/being able to”)</p>

				<p>be WORKing (the -ing form – present participle): Used with am/is/are (⏱️ Present Continuous Tense), was/were, or after enJOY, HATE, KEEP, STOP, MIND…</p>

				<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>RIGHT NOW i am WORKing on this ARticle!</li>
						<li className="list-none">Ngay lúc này tôi đang làm bài báo này!</li>
						<li className="margin-bottom-20 list-none">Use ⏱️ the Present Continuous Tense (am WORKing) to describe an action that is actually taking place at the very moment of speaking.</li>

						<li>they were PLAYing GAMES when i CALLED.</li>
						<li className="list-none">Họ đang chơi trò chơi thì tôi gọi điện đến.</li>
						<li className="margin-bottom-20 list-none">Use ⏱️ the Past Continuous Tense (were PLAYing) to indicate an action that was in progress in the past when another action interrupted it (expressed in ⏳ the Simple Past Tense—CALLED).</li>

						<li>i enJOY WORKing with MUsic ON.</li>
						<li className="list-none">Tôi thích làm việc khi có bật nhạc.</li>
						<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple tense (enJOY) and the verb form "WORKing" following the action "enjoy," combined with the phrase indicating a state, "with Music ON" (with the music on).</li>

					</ul>

					<p className="margin-top-20">To Work (infinitive with “to” – to-infinitive): Used after WANT, NEED, DECIDE, PLAN, HOPE, LEARN, TRY, PROMISE…</p>

					<p className="text-indent-whole">Ví dụ:</p>

					<ul className="list-square">

						<li>i WANT to WORK aBROAD NEXT YEAR.</li>
						<li className="list-none">Tôi muốn làm việc ở nước ngoài vào năm tới. (⏳ Thời Gian Hành Động ở Hiện Tại Đơn)</li>
						<li className="margin-bottom-20 list-none">The "WANT to do SOMEthing" structure is used to express a current desire regarding future plans (NEXT YEAR).</li>

						<li>she deCIded to STUDy ENGlish SERiously.</li>
						<li className="list-none">Cô ấy đã quyết định học tiếng Anh một cách nghiêm túc. (⏳ Thời Gian Hành Động ở Quá Khứ Đơn)</li>
						<li className="margin-bottom-20 list-none">The structure "decided to do SOMETHING" is used to express a decision that was made and carried out in the past.</li>

						<li>it’s NICE to EAT HEALthy FOOD.</li>
						<li className="list-none">Thật tuyệt khi ăn những thực phẩm lành mạnh. (⏳ Thời Gian Hành Động ở Hiện Tại Đơn)</li>
						<li className="margin-bottom-20 list-none">The structure "it is + adjective + to do SOMETHING" is used to express an opinion or feeling about a particular action.</li>

					</ul>

				<p className="margin-top-20 text-indent-whole">Tip for remembering the three-word pair: If you’re actually doing it right now → add “be” + “WORKing” to “catch them in the act”! “If you want to do something in the future or in a general sense → use ‘to WORK.’”</p>

			</div>

			<h3 className="margin-y-50 text-center">Summary: 3 Super-Easy-to-Remember “Rival” Pairs</h3>
			
				<ol>

					<li>Tôi/anh/em: <strong>WORK</strong></li>
					<li className="margin-bottom-20 list-none">Anh ấy/cô ấy/nó: <strong>WORKS</strong> </li>
			
					<li>Chuyện xưa kết thúc: <strong>WORKED</strong></li>
					<li className="margin-bottom-20 list-none">Chuyện xưa vẫn còn ảnh hưởng: <strong>have</strong>/<strong>has</strong>/<strong>had WORKED</strong></li>

					<li>Đang làm thật: <strong>be</strong> <strong>WORKing</strong></li>
					<li className="margin-bottom-20 list-none">Muốn/làm được: <strong>to WORK</strong></li>
			
				</ol>

			<p className="margin-top-20 text-indent-whole">Once you’re familiar with these three pairs, just replace “work” with any action (EAT, GO, PLAY, LIVE, STUDY, LOVE, DRINK…) and you’ll be able to form most sentences correctly!</p>

			<h3 className="margin-y-50 text-center">Try out your day with 3 pairs of opponents</h3>

				<ul className="list-square">

					<li><strong>ever</strong>y day i WORK HARD, but RIGHT NOW i am WORKing Even HARDer!</li>
					<li className="list-none">Mỗi ngày tôi đều làm việc chăm chỉ, nhưng ngay lúc này tôi còn đang làm việc chăm chỉ hơn nữa!</li>
					<li className="margin-bottom-20 list-none">The first sentence uses ⏳ the Present Simple Tense (daily routine), while the second sentence uses ⏱️ the Present Continuous Tense (an action taking place at the moment of speaking).</li>
			
					<li>she WORKS in jaPAN, but i WORKED in vietNAM LAST YEAR.</li>
					<li className="list-none">Cô ấy làm việc ở Nhật, nhưng tôi đã từng làm việc ở Việt Nam vào năm ngoái.</li>
					<li className="margin-bottom-20 list-none">The first clause uses ⏳ the Present Simple Tense (facts/habits in the present), while the second clause uses ⏳ the Past Simple Tense (actions that occurred and were completed in the past, with the specific time reference being LAST YEAR).</li>
			
					<li>i have WORKED from HOME for 3 YEARS, and i WANT to WORK like this forEVer.</li>
					<li className="list-none">Tôi đã làm việc ở nhà được 3 năm rồi, và tôi muốn làm việc thế này mãi mãi.</li>
					<li className="margin-bottom-20 list-none">The first clause uses 📏 the Present Perfect Tense with "for 3 YEARS" (an action that began in the past and continues to the present), while the second clause uses ⏳ the Simple Present Tense (to express a current desire or preference).</li>
			
				</ul>

			<h3 className="margin-y-50 text-center">3-Day Challenge: “Memorize 3 Pairs – Speak Fluently”</h3>
			
				<ul className="list-square">

					<li>Day 1: Pair 1 – Write 10 sentences using “WORK” vs. “WORKS.”</li>

					<li>Day 2: Practice Pair 2 – tell stories in the past tense (WORKED) and describe experiences (have/has WORKED).</li>
			
					<li>Day 3: Practice Pair 3 – talk about “currently doing” (am/is/are WORKing) and “wanting to do” (WANT to…).</li>
			
				</ul>

			<p className="margin-top-20">Just 10 minutes a day, and after 3 days you’ll see: English is no longer a “complicated mess,” but just 3 fun and easy-to-remember head-to-head matches!</p>

			<p>Which pair will you choose to “watch the match” first today? Pair 1, Pair 2, or Pair 3?</p>

			<p>Get started right away - I’m sure you’ll “win” all three pairs in no time! 💪✨</p>

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