import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function IrregularVerbs(): React.JSX.Element {

	const postId = "IrregularVerbs";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/vocabulary#verbs-terms"><mark className="highlight-tertiary-padding-4-8">VERBS</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">irREGular VERBS</h1>

			<div className="example">
													
				<p className="example-sentence text-center">
					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#is">is</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#has">has</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#DO">DO</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#GO">GO</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#COME">COME</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#SEE">SEE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#GET">GET</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#MAKE">MAKE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#KNOW">KNOW</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#TAKE">TAKE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#GIVE">GIVE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#WRITE">WRITE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#SPEAK">SPEAK</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#FIND">FIND</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#THINK">THINK</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#TELL">TELL</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#SAY">SAY</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#beCOME">beCOME</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#LEAVE">LEAVE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#FEEL">FEEL</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#PUT">PUT</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#BRING">BRING</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#beGIN">beGIN</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#KEEP">KEEP</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#LET">LET</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#SET">SET</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#READ">READ</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#BUY">BUY</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#SIT">SIT</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#STAND">STAND</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#LOSE">LOSE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#PAY">PAY</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#MEET">MEET</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#RUN">RUN</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#EAT">EAT</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#DRINK">DRINK</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#DRIVE">DRIVE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#BREAK">BREAK</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#CHOOSE">CHOOSE</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#forGET">forGET</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#HEAR">HEAR</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#HOLD">HOLD</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#LEARN">LEARN</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#SEND">SEND</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#SHOW">SHOW</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#SLEEP">SLEEP</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#SWIM">SWIM</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#TEACH">TEACH</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#underSTAND">underSTAND</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#WIN">WIN</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#WEAR">WEAR</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#FLY">FLY</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#FALL">FALL</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#CUT">CUT</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#HIT">HIT</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#HURT">HURT</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#COST">COST</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#BUILD">BUILD</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#CATCH">CATCH</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#THROW">THROW</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border" >
						<HashLink smooth to="#SING">SING</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#V1">V1</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#V2">V2</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#V3">have/has + V3</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#V4">had + V3</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#V5">will have + V3</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#V6">be + V3</HashLink>
					</span> &nbsp;

				</p>

				<p className="example-sentence text-center">

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#Tips-for-Learning-Quickly">Tips for Learning Quickly</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#Learning-Through-Short-Stories">Learning Through Short Stories</HashLink>
					</span> &nbsp;

					<span className="highlight-255-padding-0-4 text-border">
						<HashLink smooth to="#Flashcard">Flashcard</HashLink>
					</span> &nbsp;

				</p>


			</div>

			<h4 className="margin-bottom-30 text-center">Complete Chart & Most Detailed Instructions (2025)</h4>

			<p>Irregular verbs are a “nightmare” for many English learners because they don’t follow the -ed rule like regular verbs do. However, by mastering just about 60–70 of the most common irregular verbs, you’ll be able to communicate confidently, write professional emails, score high on the IELTS/TOEIC, and even speak like a native speaker at the intermediate to advanced levels.</p>

			<p>Below is a list of the most common irregular verbs (updated based on actual usage in 2025), along with clear, easy-to-remember explanations of how to use them.</p>

			<h3 className="margin-y-50 text-center">Table of the Most Common Irregular Verbs</h3>

			<h4 className="margin-y-40" id="is">1. is</h4>
			
				<ul className="list-square">
			
					<li>he is ALways CAREfully when reVIEWing the fiNANcial NUMbers <strong>ever</strong>y EVEning.</li>
					<li className="list-none">He always looks at the financial numbers carefully every night.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "is" form (for the third-person singular subject "he") to describe a state or quality in the present.</li>
			
					<li>she was VERy BUSy ORganizing her phoTOGraphy portFOlio YESterday.</li>
					<li className="list-none">She spent a lot of time getting her photography portfolio ready yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "was" form (for the singular subject "she") to describe a past state, along with the adverb "yesterday."</li>
			
					<li>they have been WORKing on the WEB deVELopment PROJect for HOURS.</li>
					<li className="list-none">They have been working for hours on the project to develop and improve the web.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have been" combined with the progressive form to indicate an action that began in the past and is still continuing into the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="has">2. has</h4>
			
				<ul className="list-square">
			
					<li>he has an ENGlish LESson on his LEARNing APP <strong>ever</strong>y EVEning.</li>
					<li className="list-none">He teaches English using an app every night.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "has" form (for the third-person singular subject "he") to indicate a habit or a regular occurrence.</li>
			
					<li>she had a proDUCtive MEETing with the acCOUNTing TEAM YESterday.</li>
					<li className="list-none">She met with the accounting team yesterday and got a lot done.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "had" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have had <strong>sever</strong>al disCUSsions a<strong>bout</strong> the NEW WEB PROJect.</li>
					<li className="list-none">They've talked about the new web project a few times.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have had" (where "have" is the auxiliary verb and "had" is the main verb in the past participle form) to describe events that have already taken place but are still relevant or have consequences in the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="DO">3. DO</h4>
			
				<ul className="list-square">
			
					<li>he DOES his WEB deVELopment WORK CAREfully <strong>ever</strong>y EVEning.</li>
					<li className="list-none">He spends every evening working on his web development projects.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "does" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she DID a THORough CHECK of the acCOUNTing RECords YESterday.</li>
					<li className="list-none">She thoroughly reviewed the accounting records yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the DID form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have DONE a GREAT JOB UPdating the fiNANcial SOFTware.</li>
					<li className="list-none">The updates to the financial software are really great!</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have DONE" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="GO">4. GO</h4>
			
				<ul className="list-square">
			
					<li>he GOES to the LOcal COFfee SHOP to BUY FRESH roBUSta BEANS <strong>ever</strong>y EVEning.</li>
					<li className="list-none">He buys fresh robusta beans at the local coffee shop every night.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Action Tense in the "GOES" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she WENT to the PARK to CAPture PICtures of the KITE FLYers YESterday.</li>
					<li className="list-none">She went to the park yesterday to take pictures of the kites flying in the wind.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the form "WENT" to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have GONE to the OFFice to FInalize the QUARterly fiNANcial STATEments.</li>
					<li className="list-none">They have gone to the office to complete the financial statements. These statements show the company's financial situation at the end of the first three months.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have gone" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			

			<h4 className="margin-y-40" id="COME">5. COME</h4>
			
				<ul className="list-square">
			
					<li>he COMES HOME from WORK to enJOY a WARM CUP of COFfee <strong>ever</strong>y EVEning.</li>
					<li className="list-none">Every evening, when he comes home from work, he enjoys his evening drink: a warm cup of coffee.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "COMES" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she CAME to the LOcal PARK to TAKE PHOtos of the KITES YESterday.</li>
					<li className="list-none">She went to the nearby park yesterday to take pictures of the kites.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the form "CAME" to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have come UP with a NEW STRATegy for the WEB PROJect.</li>
					<li className="list-none">The team has created a new plan for the website project.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have come" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="SEE">6. SEE</h4>
			
				<ul className="list-square">
			
					<li>he SEES the SUNset CLEARly from his BALcony <strong>ever</strong>y EVEning.</li>
					<li className="list-none">Every evening, he can see the sunset from his balcony without any trouble.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the SEES form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she SAW a BEAUtiful KITE FLYing HIGH in the SKY YESterday.</li>
					<li className="list-none">She spotted a gorgeous kite flying high in the sky yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "SAW" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have SEEN sigNIFicant imPROVEments in the acCOUNTing SOFTware.</li>
					<li className="list-none">The accounting software has gotten much better.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have SEEN" to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="GET">7. GET</h4>
			
				<ul className="list-square">
			
					<li>he GETS FRESH COFfee BEANS deLIVered to his HOUSE <strong>ever</strong>y EVEning.</li>
					<li className="list-none">Fresh coffee beans are delivered to his home every evening.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "GETS" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she GOT a GREAT DEAL on a NEW CAMERa LENS YESterday.</li>
					<li className="list-none">She got a really good deal on a brand new camera lens yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "GOT" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have GOTten all the fiNANcial rePORTs READy for the MEETing.</li>
					<li className="list-none">All the financial reports are ready for the meeting.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have got," referring to an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="MAKE">8. MAKE</h4>
			
				<ul className="list-square">
			
					<li>he MAKES a STRONG CUP of PHIN COFfee <strong>ever</strong>y EVEning.</li>
					<li className="list-none">He always makes a strong cup of Phin coffee every evening.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "MAKES" form (for the third-person singular subject "he") to describe habits or regular occurrences.</li>
			
					<li>she MADE a deLIcious BRAISED DISH in her CAST Iron PAN YESterday.</li>
					<li className="list-none">She cooked a delicious braised dish in her cast iron pan yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "MADE" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have MADE sigNIFicant UPdates to the WEB deVELopment PROJect.</li>
					<li className="list-none">They have made some big changes to the web development project.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have made" to describe an action that has been completed and is related to the present.</li>
			
				</ul>


			<h4 className="margin-y-40" id="KNOW">9. KNOW</h4>
			
				<ul className="list-square">
			
					<li>he KNOWS HOW to OPtimize WEBsite perFORmance <strong>ever</strong>y EVEning.</li>
					<li className="list-none">He knows how to make a website work as well as possible every night.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form "KNOWS" (for the third-person singular subject "he") to indicate a habit or a regular occurrence.</li>
			
					<li>she KNEW HOW to FIX her CAMERa SETtings YESterday.</li>
					<li className="list-none">She knew how to change her camera settings yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the form "KNEW" to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have KNOWN a<strong>bout</strong> the NEW acCOUNTing reguLAtions for WEEKS.</li>
					<li className="list-none">They've known about the new regulations for accounting for weeks.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have KNOWN" to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="TAKE">10. TAKE</h4>
			
				<ul className="list-square">
			
					<li>he TAKES a SHORT BREAK to enJOY a CUP of COFfee <strong>ever</strong>y EVEning.</li>
					<li className="list-none">Every evening, he stops to drink a cup of coffee.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form "TAKES" (for the third-person singular subject "he") to refer to habits or events that occur regularly.</li>
			
					<li>she TOOK STUNning PHOtos at the KITE FIELD YESterday.</li>
					<li className="list-none">She took amazing photos at the Kite Field yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "TOOK" form to refer to an action that occurred and was completed in the past.</li>
			
					<li>they have TAken all the fiNANcial RECords for AUditing.</li>
					<li className="list-none">The financial records for audit have been taken.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have taken" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40" id="GIVE">11. GIVE</h4>
			
				<ul className="list-square">
			
					<li>he GIVES HELPful adVICE on WEB deVELopment <strong>ever</strong>y EVEning.</li>
					<li className="list-none">He's always happy to give helpful advice on website development whenever someone needs it.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "GIVES" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she GAVE a presenTAtion a<strong>bout</strong> her phoTOGraphy portFOlio YESterday.</li>
					<li className="list-none">She gave a presentation yesterday about the photos she took.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "gave" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have GIVen all the NECessary DAta to the acCOUNTing dePARTment.</li>
					<li className="list-none">They have given all the information needed to the accounting department.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have given" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="WRITE">12. WRITE</h4>
			
				<ul className="list-square">
			
					<li>he WRITES CODE for his WEB deVELopment PROJects <strong>ever</strong>y EVEning.</li>
					<li className="list-none">Every evening, he puts his nose to the grindstone as he writes code for his web development projects.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the WRITES form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she WROTE an ARticle a<strong>bout</strong> her phoTOGraphy JOURney YESterday.</li>
					<li className="list-none">She wrote an article yesterday about her journey as a photographer.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the form "wrote" to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have WRITten a compreHENsive fiNANcial rePORT for the COMpany.</li>
					<li className="list-none">They wrote a financial report that clearly explained the company's financial situation.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have written" to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="SPEAK">13. SPEAK</h4>
			
				<ul className="list-square">
			
					<li>he SPEAKS ENGlish FLUently <strong>af</strong>ter PRACticing with his LANGuage APP <strong>ever</strong>y EVEning.</li>
					<li className="list-none">He speaks English very well because he practices with an app every night.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form "SPEAKS" (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she SPOKE to the phoTOGraphy CLIent a<strong>bout</strong> the PROJect DEtails YESterday.</li>
					<li className="list-none">She spoke with the client about the details of the photo project last night.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the SPOKE form to refer to an action that took place and ended in the past.</li>
			
					<li>they have SPOken a<strong>bout</strong> the NEW acCOUNTing STRATegies alREADy.</li>
					<li className="list-none">People have already talked about the new accounting techniques.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have spoken" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="FIND">14. FIND</h4>
			
				<ul className="list-square">
			
					<li>he FINDS NEW inspirAtion for his WEB PROJects <strong>ever</strong>y EVEning.</li>
					<li className="list-none">Every evening, he comes up with new ideas for his web projects.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "FINDS" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she FOUND a GREAT DEAL on a CAMERa LENS YESterday.</li>
					<li className="list-none">She bought a camera lens yesterday for a very low price.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "FOUND" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have FOUND a soLUtion to the acCOUNTing disCREPancy.</li>
					<li className="list-none">They've figured out a way to fix the accounting problems.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have FOUND" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			

			<h4 className="margin-y-40" id="THINK">15. THINK</h4>
			
				<ul className="list-square">
			
					<li>he THINKS a<strong>bout</strong> NEW STRATegies for his WEB deVELopment WORK <strong>ever</strong>y EVEning.</li>
					<li className="list-none">Every night, he thinks about new ways to improve his web development work.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form "THINKS" (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she THOUGHT a<strong>bout</strong> rePAIRing her BROken CAMERa YESterday.</li>
					<li className="list-none">She was thinking about getting her busted camera fixed yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense in the "THOUGHT" form to refer to an action that occurred and ended in the past.</li>
			
					<li>they have THOUGHT CAREfully a<strong>bout</strong> the NEW fiNANcial PLAN.</li>
					<li className="list-none">They've given the new financial plan a great deal of thought.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have THOUGHT" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="TELL">16. TELL</h4>
			
				<ul className="list-square">
			
					<li>he TELLS his TEAM a<strong>bout</strong> his NEW PROJect iDEaS <strong>ever</strong>y EVEning.</li>
					<li className="list-none">He shares details about his new project, iDEA, with his team each evening.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense in the "tells" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she TOLD me the WHOLE STORy a<strong>bout</strong> her CAMERa YESterday.</li>
					<li className="list-none">She told me everything she knew about her camera yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "TOLD" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have TOLD us all the DEtails a<strong>bout</strong> the acCOUNTing rePORT.</li>
					<li className="list-none">They have explained everything to us about the report on how the money was accounted for.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have TOLD" to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="SAY">17. SAY</h4>
			
				<ul className="list-square">
			
					<li>he SAYS that he preFERS a STRONG CUP of COFfee <strong>ever</strong>y EVEning.</li>
					<li className="list-none">He says he likes to drink a strong cup of coffee every night.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "SAYS" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she SAID that she forGOT her CAMERa BAG YESterday.</li>
					<li className="list-none">She told me she didn't realize she'd left her camera bag at home the day before.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "SAID" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have SAID that the NEW PROJect PLAN is READy.</li>
					<li className="list-none">They have announced that the new project plan is ready.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have said" to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="beCOME">18. beCOME</h4>
			
				<ul className="list-square">
			
					<li>he beCOMES more FOcused <strong>af</strong>ter DRINKing a STRONG CUP of COFfee <strong>ever</strong>y EVEning.</li>
					<li className="list-none">He gets more done every evening if he starts with a strong cup of coffee.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "becomes" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she beCAME a proFESSional phoTOGrapher YESterday <strong>af</strong>ter reCEIVing her cerTIFicate.</li>
					<li className="list-none">She became a professional photographer yesterday, after getting a certificate in the field.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "became" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have beCOME KEY MEMbers of the acCOUNTing TEAM.</li>
					<li className="list-none">They're now an important part of the accounting team.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have become" to describe an action that has been completed and is related to the present.</li>
			
				</ul>


			<h4 className="margin-y-40" id="LEAVE">19. LEAVE</h4>
			
				<ul className="list-square">
			
					<li>he LEAVES his OFFice <strong>ever</strong>y EVEning <strong>af</strong>ter FINishing all TASKS.</li>
					<li className="list-none">He bows out of the office every night after wrapping up everything on his to-do list.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form "LEAVES" (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she LEFT her CAMERa on the TAble YESterday.</li>
					<li className="list-none">She forgot to take her camera with her when she left for the day.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "LEFT" form to indicate an action that began and ended in the past.</li>
			
					<li>they have LEFT for the MEETing ROOM alREADy.</li>
					<li className="list-none">They've already made their way to the meeting room, by the way.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have LEFT" to describe an action that has been completed and is related to the present.</li>
			
				</ul>


			<h4 className="margin-y-40" id="FEEL">20. FEEL</h4>
			
				<ul className="list-square">
			
					<li>he FEELS reLAXED <strong>af</strong>ter DRINKing a HOT CUP of COFfee <strong>ever</strong>y EVEning.</li>
					<li className="list-none">Drinking a hot cup of coffee makes him feel relaxed every evening.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "FEELS" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she FELT TIred <strong>af</strong>ter CARrying her CAMERa BAG YESterday.</li>
					<li className="list-none">She was pretty tired from lugging her camera bag around yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "FELT" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they have FELT VERy MOtivated since the PROJect STARTed.</li>
					<li className="list-none">They've been super pumped about the project since it kicked off.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have FELT" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40" id="PUT">21. PUT</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">PUTS</span> his DOCuments in a SAFE DRAWer <strong>ever</strong>y EVEning.</li>
					<li className="list-none">Every night, he <span className="pill-teal">stashes</span> his documents in the safe drawer.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the PUTS form (for the third-person singular subject "He") to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">PUT</span> her CAMERa <span className="pill-teal">ON</span> the TAble YESterday.</li>
					<li className="list-none">She <span className="pill-teal">set</span> her camera <span className="pill-teal">on</span> the table yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the PUT form to refer to an action that occurred and ended in the past.</li>
			
					<li>they <span className="pill-teal">have PUT</span> a LOT of EFfort into the NEW PROJect.</li>
					<li className="list-none">They <span className="pill-teal">worked</span> really hard on the new project.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have PUT" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="BRING">22. BRING</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">BRINGS</span> a HOT CUP of COFfee to his DESK <strong>ever</strong>y MORNing.</li>
					<li className="list-none">Every morning, he <span className="pill-teal">gets</span> a hot cup of coffee for his desk.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "BRINGS" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">BROUGHT</span> her CAMERa along to TAKE PHOtos YESterday.</li>
					<li className="list-none">She <span className="pill-teal">brought</span> her camera with her so she <span className="pill-teal">could take</span> pictures.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "BROUGHT" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have BROUGHT</span> all the NECessary DOCuments for the MEETing.</li>
					<li className="list-none">They <span className="pill-teal">have</span> all the documents they <span className="pill-teal">need</span> for the meeting.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have BROUGHT" to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="beGIN">23. beGIN</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">beGINS</span> his WORKday EARly <strong>ever</strong>y MORNing.</li>
					<li className="list-none">He <span className="pill-teal">starts working</span> early every morning.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "beGINS" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">beGAN LEARNing</span> ENGlish <span className="pill-teal">Using</span> a NEW METHod LAST YEAR.</li>
					<li className="list-none">She <span className="pill-teal">started learning</span> English <span className="pill-teal">using</span> a new approach last year.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "beGAN" form to indicate an action that occurred and ended in the past.</li>
			
					<li>they <span className="pill-teal">have beGUN WORKing</span> on the NEW acCOUNTing rePORT.</li>
					<li className="list-none">The new accounting report <span className="pill-teal">is being prepared.</span></li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have begun" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="KEEP">24. KEEP</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">KEEPS</span> his WORKspace NEAT and ORganized <strong>ever</strong>y DAY.</li>
					<li className="list-none">He <span className="pill-teal">makes</span> sure to <span className="pill-teal">keep</span> his workspace tidy and well-organized each day.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "KEEPS" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">KEPT</span> all her NOTES from the acCOUNTing COURSE LAST YEAR.</li>
					<li className="list-none">She <span className="pill-teal">saved</span> all her notes from the accounting course she <span className="pill-teal">took</span> last year.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "KEPT" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have KEPT</span> their PROMise to <span className="pill-teal">FINish</span> the PROJect on TIME.</li>
					<li className="list-none">They <span className="pill-teal">finished</span> the project on time, as they <span className="pill-teal">had promised</span> they <span className="pill-teal">would.</span></li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have KEPT" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			

			<h4 className="margin-y-40" id="LET">25. LET</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">LETS</span> his TEAM WORK from HOME on FRIdays.</li>
					<li className="list-none">He <span className="pill-teal">allows</span> his team to <span className="pill-teal">work</span> from home on Fridays.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "LETS" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">LET</span> the CAT <span className="pill-teal">OUT</span> of the HOUSE this MORNing.</li>
					<li className="list-none">This morning, she <span className="pill-teal">let</span> the cat <span className="pill-teal">out</span> of the house.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "LET" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have LET</span> us <span className="pill-teal">USE</span> their OFFice SPACE for the MEEting.</li>
					<li className="list-none">We<span className="pill-teal">'re allowed</span> to <span className="pill-teal">use</span> their office for the meeting.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have + LET" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="SET">26. SET</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">SETS</span> a CLEAR GOAL at the beGINning of <strong>ever</strong>y MONTH.</li>
					<li className="list-none">Every month, he <span className="pill-teal">makes</span> a clear goal.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the SETS form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">SET</span> her aLARM CLOCK EARly YESterday.</li>
					<li className="list-none">She <span className="pill-teal">set</span> the alarm on her phone early yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "SET" form to refer to an action that occurred and ended in the past.</li>
			
					<li>they <span className="pill-teal">have SET</span> all the RULES for the NEW PROJect.</li>
					<li className="list-none">All of the rules for the new project <span className="pill-teal">have been set</span> by them.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have SET" to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="READ">27. READ</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">READS</span> SPECialized TECHnical BLOGS <strong>ever</strong>y EVEning.</li>
					<li className="list-none">Every evening, he <span className="pill-teal">reads</span> technical blogs that <span className="pill-teal">are written</span> for professionals in his field.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form "READS" (for the third-person singular subject "he") to describe a habit or an event that occurs regularly.</li>
			
					<li>she <span className="pill-teal">READ</span> an INTEResting BOOK LAST WEEK.</li>
					<li className="list-none">I <span className="pill-teal">hear</span> she <span className="pill-teal">read</span> an interesting book last week.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the form "READ" (pronounced /red/) to refer to an action that took place and ended in the past.</li>
			
					<li>they <span className="pill-teal">have READ</span> the NEW PROJect GUIDElines THORoughly.</li>
					<li className="list-none">They <span className="pill-teal">have read</span> the new guidelines for the project very carefully.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have READ" (pronounced /red/), referring to an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="BUY">28. BUY</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">BUYS</span> FRESH roBUSta BEANS <strong>ever</strong>y MONTH.</li>
					<li className="list-none">Every month, he <span className="pill-teal">buys</span> fresh, locally-produced Robusta beans.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form "BUYS" (for the third-person singular subject "he") to indicate a habit or a regular occurrence.</li>
			
					<li>she <span className="pill-teal">BOUGHT</span> a NEW CAST IRON PAN YESterday.</li>
					<li className="list-none">She <span className="pill-teal">picked up</span> a cast iron skillet yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the form "BOUGHT" to indicate an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have BOUGHT</span> all the NECessary inGREdients.</li>
					<li className="list-none">All the necessary ingredients <span className="pill-teal">have been purchased.</span></li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have BOUGHT" to describe an action that has been completed and is related to the present.</li>
			
				</ul>


			<h4 className="margin-y-40" id="SIT">29. SIT</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">SITS</span> at his DESK <strong>ever</strong>y MORNing to WORK.</li>
					<li className="list-none">He <span className="pill-teal">sits</span> at his desk every morning and <span className="pill-teal">works.</span></li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense in the SITS form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">SAT</span> on the BENCH in the PARK YESterday.</li>
					<li className="list-none">She <span className="pill-teal">was sitting</span> on the bench in the park yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the SAT form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have SAT</span> in the MEETing ROOM for <strong>o</strong>veran HOUR.</li>
					<li className="list-none">They <span className="pill-teal">have spent</span> over an hour in the meeting room.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have SAT" to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="STAND">30. STAND</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">STANDS</span> by the WINdow <strong>ever</strong>y MORNing to <span className="pill-teal">WATCH</span> the SUNrise.</li>
					<li className="list-none">Every morning, he<span className="pill-teal">'s</span> at the window, <span className="pill-teal">waiting</span> for the sun to <span className="pill-teal">come up.</span></li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the STANDS form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">STOOD</span> in the RAIN for a LONG TIME YESterday.</li>
					<li className="list-none">She <span className="pill-teal">stood</span> in the rain for quite a while yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the form "STOOD" to indicate an action that occurred and ended in the past.</li>
			
					<li>they <span className="pill-teal">have STOOD</span> FIRM against all the DIFficulties.</li>
					<li className="list-none">They <span className="pill-teal">have remained</span> strong in the face of challenges.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have STOOD" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40" id="LOSE">31. LOSE</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">LOses</span> his KEYS when<strong>ev</strong>er he is in a HURry.</li>
					<li className="list-none">He always <span className="pill-teal">loses</span> his keys when he<span className="pill-teal">'s</span> in a rush.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form "loses" (for the third-person singular subject "he") to indicate a habit or a regular occurrence.</li>
			
					<li>she <span className="pill-teal">LOST</span> her FAvorite CAMERa in the PARK LAST WEEK.</li>
					<li className="list-none">Last week, she <span className="pill-teal">lost</span> her favorite camera in the park.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "LOST" form to refer to an action that took place and ended in the past.</li>
			
					<li>they <span className="pill-teal">have LOST</span> their WAY in the unfaMILiar NEIGHborhood.</li>
					<li className="list-none">They <span className="pill-teal">are</span> not familiar with the neighborhood.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have LOST" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="PAY">32. PAY</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">PAYS</span> his BILLS at the beGINning of <strong>ever</strong>y MONTH.</li>
					<li className="list-none">Every month, he <span className="pill-teal">pays</span> all his bills on time.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "PAYS" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">PAID</span> for the NEW COFfee GRINDer YESterday.</li>
					<li className="list-none">She <span className="pill-teal">paid</span> for the new coffee grinder that <span className="pill-teal">was</span> on sale yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "PAID" form to refer to an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have PAID</span> for the SERvice in adVANCE.</li>
					<li className="list-none">They <span className="pill-teal">paid</span> for the service ahead of time.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have PAID" to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="MEET">33. MEET</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">MEETS</span> his CLIents <strong>ever</strong>y TUESday.</li>
					<li className="list-none">He <span className="pill-teal">meets</span> with his clients on Tuesdays.</li>
					<li className="margin-bottom-20 list-none">Dùng ⏳ Thời Gian Hành Động ở Hiện Tại Đơn với dạng MEETS (cho chủ thể ngôi thứ ba số ít he) để chỉ thói quen hoặc sự việc diễn ra theo quy luật.</li>
			
					<li>she <span className="pill-teal">MET</span> an OLD FRIEND YESterday.</li>
					<li className="list-none">Yesterday, she <span className="pill-teal">ran</span> into an old friend.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the MET form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have MET</span> beFORE at the CONference.</li>
					<li className="list-none">They <span className="pill-teal">met</span> each other at the conference.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have MET" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="RUN">34. RUN</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">RUNS</span> in the PARK <strong>ever</strong>y afterNOON.</li>
					<li className="list-none">He <span className="pill-teal">exercises</span> by <span className="pill-teal">running</span> in the park every day at noon.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "RUNS" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">RAN</span> to <span className="pill-teal">CATCH</span> the BUS this MORNing.</li>
					<li className="list-none">She <span className="pill-teal">hurried</span> to <span className="pill-teal">catch</span> the bus this morning.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "RAN" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have RUN</span> FIVE kiLOMeters so FAR.</li>
					<li className="list-none">They <span className="pill-teal">have run</span> five kilometers (3 miles) so far.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have RUN" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			

			<h4 className="margin-y-40" id="EAT">35. EAT</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">EATS</span> a HEALTHy BREAKfast <strong>ever</strong>y DAY.</li>
					<li className="list-none">Every day, he <span className="pill-teal">eats</span> a breakfast that<span className="pill-teal">'s</span> good for his health.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "EATS" form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">ATE</span> a deLICious MEAL LAST NIGHT.</li>
					<li className="list-none">The food she <span className="pill-teal">ate</span> last night <span className="pill-teal">was</span> delicious.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the ATE form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have EAten</span> all the FOOD on the TAble.</li>
					<li className="list-none">They <span className="pill-teal">ate</span> all the food that <span className="pill-teal">was</span> on the table.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have eaten" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="DRINK">36. DRINK</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">DRINKS</span> a LARGE CUP of roBUSta COFfee <strong>ever</strong>y MORNing.</li>
					<li className="list-none">Every morning, he <span className="pill-teal">drinks</span> a large cup of coffee <span className="pill-teal">made</span> from Robusta beans.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the DRINKS form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">DRANK</span> a GLASS of FRESH JUICE YESterday.</li>
					<li className="list-none">She <span className="pill-teal">drank</span> one glass of fresh juice yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the form "DRANK" to refer to an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have DRUNK</span> all the WAter in the BOTtle.</li>
					<li className="list-none">They<span className="pill-teal">'ve drunk</span> all the water from the bottle.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have DRUNK" to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="DRIVE">37. DRIVE</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">DRIVES</span> to WORK <strong>ever</strong>y MORNing.</li>
					<li className="list-none">He <span className="pill-teal">gets</span> to work by <span className="pill-teal">driving</span> every morning.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the DRIVES form (for the third-person singular subject "he") to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">DROVE</span> to the COUNtryside LAST WEEKend.</li>
					<li className="list-none">Last weekend, she <span className="pill-teal">drove</span> to the countryside.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "DROVE" form to refer to an action that began and ended in the past.</li>
			
					<li>they <span className="pill-teal">have DRIVen</span> for FIVE HOURS STRAIGHT.</li>
					<li className="list-none">They have been driving for five hours without stopping.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have DRIVen" to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="BREAK">38. BREAK</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">BREAKS</span> the RECord <strong>ever</strong>y YEAR.</li>
					<li className="list-none">He <span className="pill-teal">sets</span> a new record every year.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the "BREAKS" form (for the third-person singular subject "he") to indicate an event that occurs regularly.</li>
			
					<li>she <span className="pill-teal">BROKE</span> her FAvorite COFfee CUP LAST DAY.</li>
					<li className="list-none">She <span className="pill-teal">broke</span> the cup she <span className="pill-teal">liked</span> the most while she <span className="pill-teal">was drinking</span> her morning coffee yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the form "BROKE" to refer to an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have BROken</span> the OLD maCHINE comPLETEly.</li>
					<li className="list-none">They completely <span className="pill-teal">destroyed</span> the old machine!</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have broken" to describe an action that has been completed and is related to the present.</li>
			
				</ul>


			<h4 className="margin-y-40" id="CHOOSE">39. CHOOSE</h4>
			
				<ul className="list-square">
			
					<li>she <span className="pill-teal">CHOOses</span> the BEST OPTion for the PROJect.</li>
					<li className="list-none">She <span className="pill-teal">picks</span> the best option for the project.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form "CHOOses" (for the third-person singular subject "she") to indicate an action that occurs regularly.</li>
			
					<li>he <span className="pill-teal">CHOSE</span> a NEW CAR LAST WEEK.</li>
					<li className="list-none">He <span className="pill-teal">bought</span> a new car last week.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "CHOSE" form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have CHOsen</span> the WINning TEAM.</li>
					<li className="list-none">The winning team <span className="pill-teal">has been selected.</span></li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have chosen" to describe an action that has been completed and is related to the present.</li>
			
				</ul>


			<h4 className="margin-y-40" id="forGET">40. forGET</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">forGETS</span> his KEYS ALmost <strong>ever</strong>y DAY.</li>
					<li className="list-none">He almost always <span className="pill-teal">forgets</span> his keys.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form "forGETS" (for the third-person singular subject "he") to indicate an event that occurs regularly.</li>
			
					<li>she <span className="pill-teal">forGOT</span> to <span className="pill-teal">rePLY</span> to my MESsage YESterday.</li>
					<li className="list-none">She <span className="pill-teal">did</span> not <span className="pill-teal">respond</span> to my message yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the "forGOT" form to refer to an action that took place and ended in the past.</li>
			
					<li>they <span className="pill-teal">have forGOTten</span> all a<strong>bout</strong> the apPOINTment.</li>
					<li className="list-none">Unfortunately, the appointment <span className="pill-teal">has</span> not <span className="pill-teal">been mentioned.</span></li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with "have forgotten" to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			
			<h4 className="margin-y-40" id="HEAR">41. HEAR</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">HEARS</span> a STRANGE NOISE outside his WINdow.</li>
					<li className="list-none">He <span className="pill-teal">hears</span> an unusual noise coming from outside his window.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the “HEARS” form (for the third-person singular subject “he”) to describe events that occur regularly.</li>
			
					<li>she <span className="pill-teal">HEARD</span> the GOOD NEWS YESterday.</li>
					<li className="list-none">She <span className="pill-teal">heard</span> some great news yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the “HEARD” form to indicate an action that occurred and was completed in the past.</li>
			
					<li>we <span className="pill-teal">have HEARD</span> a<strong>bout</strong> this PLAN beFORE.</li>
					<li className="list-none">We already <span className="pill-teal">know</span> about this plan.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with “have HEARD” to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="HOLD">42. HOLD</h4>
			
				<ul className="list-square">
			
					<li>she <span className="pill-teal">HOLDS</span> a MEETing <strong>ever</strong>y MONday MORNing.</li>
					<li className="list-none">Every Monday morning, she <span className="pill-teal">has</span> a meeting.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Action Tense with the “HOLDS” form (for the third-person singular subject “she”) to indicate an event that occurs regularly.</li>
			
					<li>he <span className="pill-teal">HELD</span> the umBRELla for me in the RAIN.</li>
					<li className="list-none">He <span className="pill-teal">held</span> my umbrella for me in the rain.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Past Simple “Action” tense with the “HELD” form to indicate an action that began and ended in the past.</li>
			
					<li>they <span className="pill-teal">have HELD</span> this poSITion for THREE YEARS.</li>
					<li className="list-none">They<span className="pill-teal">'ve had</span> this position for three years.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with “have HELD” to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="LEARN">43. LEARN</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">LEARNS</span> a NEW LANguage <strong>ever</strong>y YEAR.</li>
					<li className="list-none">Every year, he <span className="pill-teal">learns</span> a new language.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form “LEARNS” (for the third-person singular subject “he”) to indicate an event that occurs regularly.</li>
			
					<li>she <span className="pill-teal">LEARNED</span> a LOT from the exPERIence.</li>
					<li className="list-none">We<span className="pill-teal">'ve figured out</span> a solution to the problem.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the “LEARNED” form to refer to an action that occurred and was completed in the past.</li>
			
					<li>we <span className="pill-teal">have LEARNT</span> HOW to <span className="pill-teal">SOLVE</span> the PROBlem.</li>
					<li className="list-none">We<span className="pill-teal">'ve figured out</span> a solution to the problem.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with “have LEARNT” to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="SEND">44. SEND</h4>
			
				<ul className="list-square">
			
					<li>she <span className="pill-teal">SENDS</span> a WEEkly rePORT to her MANager.</li>
					<li className="list-none">Each week, she <span className="pill-teal">sends</span> her boss a report.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form “sends” (for the third-person singular subject “She”) to indicate an action that occurs regularly.</li>
			
					<li>he <span className="pill-teal">SENT</span> an imPORTant Email YESterday.</li>
					<li className="list-none">He <span className="pill-teal">sent</span> a crucial email yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the “SENT” form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have SENT</span> the PACKage sucCESSfully.</li>
					<li className="list-none">They <span className="pill-teal">shipped</span> the package, and it <span className="pill-teal">was</span> successfully <span className="pill-teal">delivered.</span></li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with “has SENT” / “have SENT” to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			

			<h4 className="margin-y-40" id="SHOW">45. SHOW</h4>
			
				<ul className="list-square">
			
					<li>the CHART <span className="pill-teal">SHOWS</span> the ANnual SALES GROWTH CLEARly.</li>
					<li className="list-none">The chart clearly <span className="pill-teal">shows</span> how sales <span className="pill-teal">have increased</span> each year.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form “SHOWS” (for the third-person singular subject “the CHART”) to indicate that an event occurs regularly.</li>
			
					<li>he <span className="pill-teal">SHOWED</span> his NEW PROJect PROUDly at the MEETing.</li>
					<li className="list-none">He <span className="pill-teal">was</span> proud to <span className="pill-teal">show off</span> his new project at the meeting.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the form “SHOWED” to indicate an action that occurred and was completed in the past.</li>
			
					<li>she <span className="pill-teal">has SHOWN</span> GREAT imPROVEment REcently.</li>
					<li className="list-none">She <span className="pill-teal">has shown</span> big improvement lately.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with “has SHOWN” to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="SLEEP">46. SLEEP</h4>
			
				<ul className="list-square">
			
					<li>the BAby <span className="pill-teal">SLEEPS</span> for EIGHT HOURS <strong>ever</strong>y NIGHT.</li>
					<li className="list-none">Every night, the baby <span className="pill-teal">sleeps</span> for eight hours.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the “sleeps” form (for the third-person singular subject “the Baby”) to indicate a habit or a regular occurrence.</li>
			
					<li>he <span className="pill-teal">SLEPT</span> SOUNDly through the NIGHT.</li>
					<li className="list-none">He <span className="pill-teal">slept</span> quietly all night.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the “SLEPT” form to indicate an action that occurred and ended in the past.</li>
			
					<li>she <span className="pill-teal">has SLEPT</span> for a LONG TIME.</li>
					<li className="list-none">She <span className="pill-teal">slept</span> for a long time.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with “has SLEPT” to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="SWIM">47. SWIM</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">SWIMS</span> in the POOL <strong>ever</strong>y MORNing.</li>
					<li className="list-none">Every morning, he <span className="pill-teal">swims</span> in the pool.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense in the SWIMS form (for the third-person singular subject “he”) to refer to habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">SWAM across</span> the RIVer YESterday.</li>
					<li className="list-none">She <span className="pill-teal">was</span> able to <span className="pill-teal">swim</span> across the river yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the SWAM pattern to describe an action that began and ended in the past.</li>
			
					<li>they <span className="pill-teal">have SWUM</span> in this LAKE <strong>man</strong>y TIMES.</li>
					<li className="list-none">They <span className="pill-teal">have gone swimming</span> in this lake many times.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with “have SWUM” to describe an action that has been completed and is related to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="TEACH">48. TEACH</h4>
			
				<ul className="list-square">
			
					<li>she <span className="pill-teal">TEACHes</span> ENGlish at a LOcal SCHOOL.</li>
					<li className="list-none">She <span className="pill-teal">is</span> a teacher who <span className="pill-teal">teaches</span> English at a local school.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the TEACHes form (for the third-person singular subject “she”) to describe habits or events that occur regularly.</li>
			
					<li>he <span className="pill-teal">TAUGHT</span> us a VALuable LESson YESterday.</li>
					<li className="list-none">He <span className="pill-teal">taught</span> us a very helpful and valuable lesson yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Past Simple Tense with the form “TAUGHT” to refer to an action that took place and ended in the past.</li>
			
					<li>they <span className="pill-teal">have TAUGHT</span> this SUBject for FIVE YEARS.</li>
					<li className="list-none">They <span className="pill-teal">have been teaching</span> this subject for five years.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with “have TAUGHT” to describe an action that has been completed and is related to the present.</li>
			
				</ul>


			<h4 className="margin-y-40" id="underSTAND">49. underSTAND</h4>
			
				<ul className="list-square">
			
					<li>the TEACHer <span className="pill-teal">underSTANDS</span> the STUdent's PROBlem.</li>
					<li className="list-none">The teacher <span className="pill-teal">gets</span> what the student's problem <span className="pill-teal">is.</span></li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form “understands” (for the third-person singular subject “the teacher”) to indicate that the action occurs regularly.</li>
			
					<li>she <span className="pill-teal">underSTOOD</span> the LESson CLEARly <strong>af</strong>ter the explaNAtion.</li>
					<li className="list-none">She <span className="pill-teal">understood</span> the lesson after the instructor's clear explanation.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the form “underSTOOD” to refer to an action that occurred and was completed in the past.</li>
			
					<li>he <span className="pill-teal">has underSTOOD</span> the CORE CONcept THORoughly.</li>
					<li className="list-none">He <span className="pill-teal">has</span> a strong understanding of the main idea.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with “has understood” to describe an action that has been completed and is relevant to the present.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="WIN">50. WIN</h4>
			
				<ul className="list-square">
			
					<li>our TEAM <span className="pill-teal">WINS</span> <strong>ever</strong>y GAME THIS SEAson.</li>
					<li className="list-none">Our team always <span className="pill-teal">wins</span> games during the season.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the WINS form (for the third-person singular subject “our TEAM”) to indicate that the action occurs regularly.</li>
			
					<li>she <span className="pill-teal">WON</span> the FIRST PRIZE in the compeTITion YESterday.</li>
					<li className="list-none">She <span className="pill-teal">came</span> in first place in the competition yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the “WON” form to indicate an action that occurred and was completed in the past.</li>
			
					<li>he <span className="pill-teal">has WON</span> all the MATCHes EASily.</li>
					<li className="list-none">He <span className="pill-teal">won</span> all the matches without much difficulty.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with “has WON” to describe an event that has been completed and is related to the present.</li>
			
				</ul>


			<h4 className="margin-y-40" id="WEAR">51. WEAR</h4>
			
				<ul className="list-square">
			
					<li>a MAN <span className="pill-teal">WEARS</span> a WARM COAT in the COLD WEATHer.</li>
					<li className="list-none">A man <span className="pill-teal">wears</span> a warm coat in the cold outside.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form “wears” (for the third-person singular subject “A man”) to refer to a habit or an event that occurs depending on weather conditions.</li>
			
					<li>she <span className="pill-teal">WORE</span> a LOVEly DRESS to the PARTy LAST NIGHT.</li>
					<li className="list-none">She <span className="pill-teal">looked</span> beautiful in a lovely dress at last night's party.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the form “wore” to indicate an action that occurred and was completely finished in the past.</li>
			
					<li>this PAIR of SHOES <span className="pill-teal">has been worN OUT</span> comPLETely.</li>
					<li className="list-none">These shoes <span className="pill-teal">are</span> completely <span className="pill-teal">torn up.</span></li>
					<li className="list-none">This structure uses 📏 the Present Perfect Passive Tense with the verb phrase “worn out” (where ‘out’ is the adverb immediately following “worn”), referring to an action that has been completed and has left a result in the present.</li>
			
				</ul>


			<h4 className="margin-y-40" id="FLY">52. FLY</h4>
			
				<ul className="list-square">
			
					<li>a PLANE <span className="pill-teal">FLIES</span> HIGH above the CLOUDS.</li>
					<li className="list-none">A plane <span className="pill-teal">flies</span> high up in the sky, far above the clouds.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form “FLIES” combined with the state verb ‘HIGH’ (for the third-person singular subject “a PLANE”) to express a fact or an action that occurs regularly.</li>
			
					<li>the BIRD <span className="pill-teal">FLEW aWAY</span> QUICKly when i <span className="pill-teal">CAME</span> CLOSE.</li>
					<li className="list-none">The bird <span className="pill-teal">flew away</span> quickly as soon as it <span className="pill-teal">saw</span> me.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the phrase “flew away” to indicate an action that occurred and ended in the past.</li>
			
					<li>he <span className="pill-teal">has FLOWN</span> to VietNAM on a BUSIness TRIP.</li>
					<li className="list-none">He <span className="pill-teal">has traveled</span> to Vietnam for work.</li>
					<li className="list-none">This structure uses a verb in the perfect tense (has FLOWN) to describe an action that has been completed and is related to the present, with “he” as the subject.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="FALL">53. FALL</h4>
			
				<ul className="list-square">
			
					<li>the RAIN <span className="pill-teal">FALLS</span> HEAVily on the ROOF.</li>
					<li className="list-none">It <span className="pill-teal">is raining</span> very heavily on the roof.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the “FALLS” form (for the third-person singular subject “the RAIN”) to describe phenomena or events that occur according to natural laws.</li>
			
					<li>he <span className="pill-teal">FELL</span> from the CAMERa eQUIPment while <span className="pill-teal">WORKing</span> outSIDE.</li>
					<li className="list-none">He <span className="pill-teal">fell</span> from some equipment while <span className="pill-teal">exercising</span> outdoors.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the “FELL” form to indicate an action that occurred and was completed in the past.</li>
			
					<li><strong>sever</strong>al OLD TREES <span className="pill-teal">have FALLen DOWN</span> <strong>dur</strong>ing the STORM.</li>
					<li className="list-none">The storm <span className="pill-teal">knocked over</span> several old trees.</li>
					<li className="list-none">This structure uses a verb in the past tense (FALLen) following “have” to describe an event that has occurred and has resulted in a current outcome, with the subject being <strong>sever</strong>al OLD TREES (some ancient trees).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="CUT">54. CUT</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">CUTS</span> the VEGETables for <span className="pill-teal">COOKing.</span></li>
					<li className="list-none">He <span className="pill-teal">chops</span> the vegetables so that they <span className="pill-teal">are</span> ready to <span className="pill-teal">cook.</span></li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the CUTS form (for the third-person singular subject “He”) to indicate an action that occurs regularly.</li>
			
					<li>she <span className="pill-teal">CUT</span> a PIECE of CAKE for me YESterday.</li>
					<li className="list-none">She <span className="pill-teal">cut</span> a slice of cake for me yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the CUT form to indicate an action that occurred and ended in the past (this verb retains its original form in the past tense).</li>
			
					<li>the GRASS <span className="pill-teal">has been CUT</span> SHORT in the GARden.</li>
					<li className="list-none">The grass in the garden <span className="pill-teal">has been cut</span> very short.</li>
					<li className="list-none">This structure uses an action verb in the perfect tense (CUT) following “has been” to describe an action that has been completed and has produced a result in the present, with the subject affected being the GRASS (lawn).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="HIT">55. HIT</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">HITS</span> the TENnis BALL with GREAT FORCE.</li>
					<li className="list-none">The player <span className="pill-teal">hits</span> the tennis ball with a lot of force..</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the HITS form (for the third-person singular subject “he”) to describe actions that occur regularly or are technical in nature in sports.</li>
			
					<li>the CAR <span className="pill-teal">HIT</span> a TREE on the SIDE of the ROAD LAST NIGHT.</li>
					<li className="list-none">The car <span className="pill-teal">hit</span> a tree last night while it <span className="pill-teal">was</span> on the side of the road.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the HIT form to refer to an event that occurred and ended in the past (this word remains unchanged in the past tense).</li>
			
					<li>the TARget <span className="pill-teal">has been HIT</span> sucCESSfully by the ARcher.</li>
					<li className="list-none">The archer successfully <span className="pill-teal">hit</span> the target.</li>
					<li className="list-none">This structure uses an action verb in the perfect tense (HIT) following “has been” to describe an action that has been completed and has produced a result in the present, with “the TARget” as the recipient of the action.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="HURT">56. HURT</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">HURTS</span> his KNEE when <span className="pill-teal">PLAYing</span> FOOTball.</li>
					<li className="list-none">He <span className="pill-teal">has</span> a sore knee when he <span className="pill-teal">plays</span> football</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form “HURTS” (for the third-person singular subject “he”) to describe something that happens frequently or a habit when playing sports.</li>
			
					<li>she <span className="pill-teal">HURT</span> her FINger while <span className="pill-teal">COOKing</span> YESterday.</li>
					<li className="list-none">She <span className="pill-teal">cut</span> her finger while she <span className="pill-teal">was cooking</span> yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the “HURT” form to indicate an action that occurred and ended in the past (this verb remains unchanged in the past tense).</li>
			
					<li>his FEELings <span className="pill-teal">have been HURT</span> by those HARSH WORDS.</li>
					<li className="list-none">His feelings <span className="pill-teal">were hurt</span> by the harsh words.</li>
					<li className="list-none">This structure uses an action verb in the past perfect tense (HURT) following “have been” to describe an event that occurred in the past and has had an effect in the present, with the subject affected being his FEELINGS (his emotions).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="COST">57. COST</h4>
			
				<ul className="list-square">
			
					<li>this NEW PHONE <span className="pill-teal">COSTS</span> a LOT of MONey.</li>
					<li className="list-none">The new phone <span className="pill-teal">costs</span> a lot of money.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the COSTS form (for the third-person singular subject “this NEW PHONE”) to indicate a fact or price at the present time.</li>
			
					<li>the TRIP <span className="pill-teal">COST</span> us a FORtune LAST SUMmer.</li>
					<li className="list-none">We <span className="pill-teal">spent</span> a lot of money on the trip last summer.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the COST form to refer to an event that occurred and ended in the past (this particular word retains its form in the past tense).</li>
			
					<li>a LOT of TIME <span className="pill-teal">has been COST</span> by this deLAY.</li>
					<li className="list-none">This delay <span className="pill-teal">has taken up</span> a lot of time.</li>
					<li className="list-none">This structure uses a verb in the perfect tense (COST) following “has been” to describe an action that has had an impact on the present, with the subject affected being “a LOT of TIME” (a great deal of time).</li>
			
				</ul>
			
			
			<h4 className="margin-y-40" id="BUILD">58. BUILD</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">BUILDS</span> a NEW HOUSE for his PARents.</li>
					<li className="list-none">He <span className="pill-teal">builds</span> a house for his parents to <span className="pill-teal">live</span> in that <span className="pill-teal">is</span> completely new.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Action Tense with the BUILDS form (for the third-person singular subject “he”) to indicate an ongoing action or a plan currently in progress.</li>
			
					<li>they <span className="pill-teal">BUILT</span> a SMALL BRIDGE <strong>o</strong>ver the RIVER LAST YEAR.</li>
					<li className="list-none">A small bridge <span className="pill-teal">was built</span> over the river last year.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the “BUILT” form to indicate an action that was completely finished in the past, accompanied by the specific time reference “LAST YEAR.”</li>
			
					<li>this WEBsite <span className="pill-teal">has been BUILT</span> with GREAT CARE.</li>
					<li className="list-none">This website <span className="pill-teal">was built</span> with great attention to detail.</li>
					<li className="list-none">This structure uses an action verb in the perfect tense (BUILT) following “has been” to describe an action that has been completed and has produced a result in the present, with “this website” as the object of the action.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="CATCH">59. CATCH</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">CATCHes</span> the BUS to WORK <strong>ever</strong>y MORNing.</li>
					<li className="list-none">Every morning, he <span className="pill-teal">catches</span> the bus to work.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the CATCHes form (for the third-person singular subject “he”) to describe a recurring habit.</li>
			
					<li>she <span className="pill-teal">CAUGHT</span> a BIG FISH YESterday.</li>
					<li className="list-none">She <span className="pill-teal">caught</span> a really big fish yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the “CAUGHT” form to indicate an action that occurred and ended in the past.</li>
			
					<li>they <span className="pill-teal">have CAUGHT</span> the TRAIN JUST in TIME.</li>
					<li className="list-none">They <span className="pill-teal">were</span> able to <span className="pill-teal">catch</span> the train just in time.</li>
					<li className="list-none">Use 📏 the Present Perfect Tense with the participle form “CAUGHT” following “have” to indicate an action that has just been completed and is affecting the present.</li>
			
				</ul>


			<h4 className="margin-y-40" id="THROW">60. THROW</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">THROWS</span> the BALL to his DOG in the PARK.</li>
					<li className="list-none">He <span className="pill-teal">throws</span> the ball to his dog in the park.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the form “THROWS” (for the third-person singular subject “he”) to indicate a habit or an action that occurs frequently.</li>
			
					<li>she <span className="pill-teal">threw aWAY</span> the OLD LETters LAST NIGHT.</li>
					<li className="list-none">Last night, she <span className="pill-teal">threw away</span> the old letters.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the form “threw” to refer to an action that occurred and was completed in the past (the phrase “threw aWAY” means “threw away”).</li>
			
					<li>the WINdow <span className="pill-teal">has been THROWN</span> Open by the WIND.</li>
					<li className="list-none">The window <span className="pill-teal">is</span> open because the wind <span className="pill-teal">opened</span> it.</li>
					<li className="list-none">This structure uses an action verb in the perfect tense (THROWN) following “has been” to describe an event that occurred in the past and has resulted in a current outcome, with “the window” as the object affected.</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="SING">61. SING</h4>
			
				<ul className="list-square">
			
					<li>he <span className="pill-teal">SINGS</span> aLONG to his FAVORite SONGS while <span className="pill-teal">CODing</span> <strong>ever</strong>y EVEning.</li>
					<li className="list-none">Every evening, he <span className="pill-teal">sings</span> his favorite songs while <span className="pill-teal">working</span> at his computer.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Present Simple Tense with the SINGS form (for the third-person singular subject “he”) to describe habits or events that occur regularly.</li>
			
					<li>she <span className="pill-teal">SANG</span> a traDITional SONG at the FAMILy GATHering YESterday.</li>
					<li className="list-none">She <span className="pill-teal">sang</span> a traditional song at her family's gathering yesterday.</li>
					<li className="margin-bottom-20 list-none">Use ⏳ the Simple Past Tense with the “SANG” form to indicate an action that occurred and was completed in the past.</li>
			
					<li>they <span className="pill-teal">have SUNG</span> toGETHer at <strong>man</strong>y comMUnity eVENTS.</li>
					<li className="list-none">They <span className="pill-teal">sang</span> together at a variety of community events.</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense with “have SUNG” to describe an action that has been completed and is related to the present.</li>
			
				</ul>
			

			<h3 className="margin-y-50 text-center">An Easy-to-Remember Way to Use the 3 Columns V1, V2, and V3</h3>

			{/* V1: Nguyên thể / Hiện tại */}

			<h4 id="V1">V1: Time of Action in the Simple Present Tense (add “s” or ‘es’ to “he,” “she,” or “it”)</h4>

			<p className="margin-top-20">Used to describe habits, obvious truths, or repeated actions.</p>
			
				<ul className="list-square">
			
					<li>she <span className="pill-teal">GOES</span> to SCHOOL <strong>ever</strong>y DAY.</li>
					<li className="list-none">She <span className="pill-teal">attends</span> school on a daily basis.</li>
					<li className="list-none">⏳ Time of Action in the Simple Present Tense</li>
			
				</ul>

			{/* V2: ⏳ Thời Gian Hành Động ở Quá Khứ Đơn */}

			<h4 className="margin-top-20" id="V2">V2: Past Simple Tense</h4>

			<p className="margin-top-20 text-indent-whole">Used to describe actions that occurred and were completed in the past; often accompanied by time expressions such as “yesterday,” “last week,” or “ago.”</p>
			
				<ul className="list-square">

					<li>YESterday, i <span className="pill-teal">WENT</span> to the CINema.</li>
					<li className="list-none">Yesterday, I <span className="pill-teal">went</span> to the movie theater.</li>
					<li className="list-none">⏳ Past Simple Tense</li>
			
				</ul>

			{/* V3: Past Participle */}

			<h4 className="margin-top-20" id="V3">V3: Past Participle</h4>

			<p className="margin-top-20">1️⃣ Time of Action in the Present Perfect (have/has + V3)</p>

			<p className="margin-top-20 text-indent-whole">Used to describe an action that has already occurred but is still relevant to the present, or an experience.</p>
			
				<ul className="list-square">

					<li>i <span className="pill-teal">have</span> just <span className="pill-teal">GONE</span> HOME.</li>
					<li className="list-none">I just <span className="pill-teal">got</span> back home.</li>
					<li className="list-none">📏 Time Period of Action in the Present Perfect Tense</li>
			
				</ul>

			<p className="margin-top-20" id="V4">2️⃣ Past Perfect Tense (had + V3)</p>

			<p className="margin-top-20 text-indent-whole">Used to describe an action that occurred before another action in the past.</p>
			
				<ul className="list-square">

					<li>i <span className="pill-teal">had FINished</span> my HOMEwork be<strong>fore</strong> DINner.</li>
					<li className="list-none">I <span className="pill-teal">had completed</span> my homework before dinner.</li>
					<li className="list-none">📏 Time Period of Action in the Past Perfect Tense</li>
			
				</ul>

			<p className="margin-top-20" id="V5">3️⃣ Future Perfect Tense (will have + V3)</p>

			<p className="margin-top-20 text-indent-whole">Used to describe an action that will be completed before a specific point in the future.</p>
			
				<ul className="list-square">

					<li>i <span className="pill-teal">will have FINished</span> my HOMEwork by NINE p.M.</li>
					<li className="list-none">I <span className="pill-teal">will have finished</span> my homework by nine o'clock this evening.</li>
					<li className="list-none">📏 Future Perfect Tense</li>
			
				</ul>
					
			<p className="margin-top-20" id="V6">4️⃣ Passive voice (be + V3)</p>

			<p className="margin-top-20 text-indent-whole">Used to emphasize the action or the object affected, not the person performing the action.</p>
			
				<ul className="list-square">

					<li>the LETter <span className="pill-teal">was WRITten</span> by her.</li>
					<li className="list-none">She <span className="pill-teal">wrote</span> the letter.</li>
					<li className="list-none">Passive Sentences ⏳ Action Time in the Simple Past</li>
			
				</ul>

			<h3 className="margin-y-50 text-center" id="Tips-for-Learning-Quickly">Tips for Learning Quickly & Retaining Information Long-Term (Successfully Used by Thousands of Students)</h3>

			<h4 className="margin-top-30 margin-bottom-20">1. Learning in groups based on pronunciation rules (very effective)::</h4>
					
				<ul className="list-square">
			
					<li>Unaltered group: [CUTS CUT CUT] / [HITS HIT HIT] / [PUTS PUT PUT]</li>
			
					<li>Vowel-changing group: [SINGS SANG SUNG] / [DRINKS DRANK DRUNK] / [SWIMS SWAM SWUM]</li>
			
					<li>Groups V2 and V3 are the same: [BUYS BOUGHT BOUGHT] / [BRINGS BROUGHT BROUGHT]</li>

					<li>Special “Departures & Arrivals” Group: [GOES WENT GONE] / [COMES CAME COME]</li>
			
				</ul>

			
			<h4 className="margin-y-40" id="Learning-Through-Short-Stories">2. Learning Through Short Stories:</h4>
			
				<ul className="list-square">
			
					<li>YESterday i <span className="pill-teal">TOOK</span> a PHOto, but toDAY i <span className="pill-teal">have TAken</span> <strong>man</strong>y PHOtos alREADy.</li>
					<li className="margin-bottom-20 list-none">I <span className="pill-teal">took</span> a photograph yesterday, but today, I <span className="pill-teal">have</span> already <span className="pill-teal">taken</span> many photographs.</li>
			
					<li>YESterday i <span className="pill-teal">TOOK</span> a PHOto:</li>
					<li className="list-none">This structure uses ⏳ the Past Simple Tense for the duration of an action with the “TOOK” form of the verb “TAKE.”</li>
					<li className="margin-bottom-20 list-none">Used to describe an act of taking a photo that occurred and was completely finished in the past, accompanied by the specific time adverb “yesterday.”</li>
			
					<li>...but toDAY i <span className="pill-teal">have TAken</span> <strong>man</strong>y PHOtos alREADy:</li>
					<li className="list-none">This structure uses 📏 the Present Perfect Tense for the duration of an action, in the form “have taken.”</li>
					<li className="list-none">Used to emphasize the results or the number of photos taken so far today, in combination with the adverbs “toDAY” (today) and “alREADy” (already).</li>
			
				</ul>
			
			
			<h4 className="margin-top-30 margin-bottom-20" id="Flashcard">3. 3-sided flashcard (very sturdy):</h4>
					
				<ul className="list-square">
			
					<li>Side 1: [GOES]</li>
			
					<li>Side 2: [WENT]</li>
			
					<li>Side 3: [GONE] + example sentence</li>
			
				</ul>

			<h4 className="margin-top-30 margin-bottom-20">4. Prioritize the first 30 actions → they account for ~85% of the frequency of occurrence in communication and exams.</h4>
			
			<p>Print out this chart, hang it on the wall, and learn 10 verbs a day for one week. After 6 weeks, you’ll have a solid grasp of nearly all the most common irregular verbs!</p>

			<p>I hope you do well in your studies and soon “break free” from acting recklessly! 💪</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>JANuary 05, 2026 · by Grok ·</span>
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