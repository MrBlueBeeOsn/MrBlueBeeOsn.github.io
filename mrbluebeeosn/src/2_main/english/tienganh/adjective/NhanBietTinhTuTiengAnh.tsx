import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NhanBietTinhTuTiengAnh(): React.JSX.Element {

	const postId = "NhanBietTinhTuTiengAnh";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#adjective-terms"><mark className="highlight-tertiary-padding-4-8">ADjective</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Tips for Recognizing ADJECTIVES in English in the Blink of an Eye by Looking at the Word Endings</h1>

			<p>Have you ever felt confused about distinguishing adjectives from other parts of speech in a sentence? Don’t worry! In English, most adjectives leave a very clear “fingerprint” through their suffixes. Just by memorizing about 8-10 of the most common suffixes, you’ll be able to correctly identify 85–90% of adjectives when taking tests, writing essays, or communicating in everyday situations.</p>
			
			<p>Here’s the most detailed, engaging, and easy-to-remember guide to help you “crack the code” on adjectives in the blink of an eye!</p>

			<h3 className="margin-y-50 text-center">Why Do Word Endings “Reveal” ADJECTIVES? A Summary of the Most Common ADJECTIVE Endings</h3>

			<p>ADJECTIVES are often formed from NOUNS or verbs by adding suffixes. Each suffix carries a specific meaning, helping us quickly identify the word’s role in a sentence.</p>
					
			<p>Below is a summary table of the most common ADJECTIVE endings, along with many real-life examples:</p>

			<h4 className="margin-y-40">1. Can… / worth…: -able / -ible</h4>
					
			<p className="margin-top-20 text-indent-whole">COMFORtable, reSPONsible, FLEXible, VISible, inCREDible</p>
			
				<ul className="list-square">
			
					<li><strong>af</strong>ter a LONG DAY at WORK, I LOVE reLAXing on my <strong>COMFORtable</strong> SOfa with a GOOD BOOK.</li>
					<li className="margin-bottom-20 list-none">I love unwinding on my cozy sofa with a good book after a long day at work.</li>
			
					<li>as a TEAM LEADer, he is <strong>reSPONsible</strong> for MAking SURE all PROJects are comPLEted on TIME.</li>
					<li className="margin-bottom-20 list-none">His job as the team leader is to make sure that all projects are finished on time.</li>

					<li>our COMpany OFfers <strong>FLEXible</strong> WORKing HOURS, alLOWing emPLOYees to START WORK between EIGHT AM and TEN AM.</li>
					<li className="margin-bottom-20 list-none">Our company lets employees start work between 8:00 a.m. and 10:00 a.m. We also offer flexible working hours.</li>
			
					<li>the STARS are CLEARly <strong>VISible</strong> toNIGHT be<strong>cause</strong> the SKY is comPLETEly FREE of CLOUDS.</li>
					<li className="margin-bottom-20 list-none">You can see the stars at night when the sky is clear of clouds.</li>
			
					<li>the ACrobat perFORMED an <strong>inCREDible</strong> STUNT that LEFT the AUdience CHEERing in aMAZEment.</li>
					<li className="list-none">The performer amazed the audience with an incredible stunt.</li>
			
				</ul>
			


			<h4 className="margin-y-40">2. Full of… / having many…: -ous</h4>
					
			<p className="margin-top-20 text-indent-whole">DANgerous, FAmous, deLICious, CURious, eNORmous</p>
			
				<ul className="list-square">
			
					<li>SWIMming in this DEEP RIVer <strong>dur</strong>ing a HEAVy STORM is exTREMEly <strong>DANgerous</strong>.</li>
					<li className="margin-bottom-20 list-none">Swimming in this river during a storm is very dangerous. The river is deep, and there are strong currents.</li>
			
					<li>PARis is FAmous for its <strong>roMANtic</strong> ATmosphere and iCONic LANDmarks like the EIFFel TOWer.</li>
					<li className="margin-bottom-20 list-none">Paris is famous for its romantic feel and well-known attractions, like the Eiffel Tower.</li>

					<li>my MOTHer BAKED a <strong>deLICious</strong> CHOCOLate CAKE for my BIRTHday PARTy.</li>
					<li className="margin-bottom-20 list-none">For my birthday party, my mom baked a delicious chocolate cake.</li>
			
					<li>CHILDren are NATURally <strong>CURious</strong> a<strong>bout</strong> the WORLD around them and ALWAYS ASK <strong>man</strong>y QUESTions.</li>
					<li className="margin-bottom-20 list-none">Kids are always interested in the world around them and have a lot of questions.</li>
			
					<li>the COMpany MADE an <strong>eNORmous</strong> PROFit this YEAR <strong>af</strong>ter LAUNCHing their NEW PRODuct LINE.</li>
					<li className="list-none">The company made a lot of money this year after they released their new products.</li>
			
				</ul>
			


			<h4 className="margin-y-40">3. Full… / of good quality: -ful</h4>
					
			<p className="margin-top-20 text-indent-whole">BEAUtiful, CAREful, HELPful, sucCESSful, POWerful</p>
			
				<ul className="list-square">
			
					<li>we WATCHED a <strong>BEAUtiful</strong> SUNset over the Ocean on our last EVening of the HOLiday.</li>
					<li className="margin-bottom-20 list-none">On our last night of the trip, we watched the sunset over the ocean. It was beautiful.</li>
			
					<li>PLEASE be <strong>CAREful</strong> with that FRAGile GLASS VASE while MOving it to the LIVing ROOM.</li>
					<li className="margin-bottom-20 list-none">Be careful when moving the fragile glass vase to the living room.</li>

					<li>the LOcal TOURist GUIDE GAVE us <strong>HELPful</strong> adVICE on where to FIND the BEST STREET FOOD.</li>
					<li className="margin-bottom-20 list-none">The local tourist guide gave us helpful advice on where to find the best street food.</li>
			
					<li><strong>af</strong>ter years of HARD WORK, her TECH STARTup FInally beCAME a <strong>sucCESSful</strong> GLObal COMpany.</li>
					<li className="margin-bottom-20 list-none">After working hard for years, her technology startup finally became a global company that was very successful.</li>
			
					<li>the CEO deLIVered a <strong>POWerful</strong> SPEECH that inSPIred all the emPLOYees at the MEETing.</li>
					<li className="list-none">The CEO gave a great speech that motivated all the employees at the meeting.</li>
			
				</ul>
			

			<h4 className="margin-y-40">4. No… / lacking…: -less</h4>
					
			<p className="margin-top-20 text-indent-whole">HOPEless, CAREless, HOMEless, ENDless, USEless</p>
			
				<ul className="list-square">
			
					<li>he FELT <strong>HOPEless</strong> <strong>af</strong>ter FAILing the eXAM for the THIRD TIME, but his TEACHer enCOURaged him to TRY aGAIN.</li>
					<li className="margin-bottom-20 list-none">After failing the exam for the third time, he felt hopeless, but his teacher encouraged him to try again.</li>
			
					<li>MAking a <strong>CAREless</strong> misTAKE on the FInal MATH TEST COST him the HIGHest GRADE in the CLASS.</li>
					<li className="margin-bottom-20 list-none">He made a careless mistake on the final math test. Because of that, he got the highest grade in the class.</li>

					<li>the LOcal CHARity ORganization proVIDES FOOD and SHELter for <strong>HOMEless</strong> PEOple <strong>dur</strong>ing the COLD WINter MONTHS.</li>
					<li className="margin-bottom-20 list-none">During the cold winter months, the local charity organization provides food and shelter for people without homes.</li>
			
					<li>we were STUCK in <strong>ENDless</strong> TRAFfic on the HIGHway for over TWO HOURS.</li>
					<li className="margin-bottom-20 list-none">We got stuck in traffic on the highway. We were stuck there for over two hours.</li>
			
					<li>THROWing aWAY BROken elecTRONics is BETter than KEEPing them aROUND as <strong>USEless</strong> CLUTter.</li>
					<li className="list-none">Don't keep broken electronics around. Throw them away instead. They're just collecting dust and taking up space.</li>
			
				</ul>
			


			<h4 className="margin-y-40">5. Belonging to… / related to…: -al</h4>
					
			<p className="margin-top-20 text-indent-whole">NATional, PERsonal, NATURal, SOcial, traDITional</p>
			
				<ul className="list-square">
			
					<li>indePENdence DAY is a MAjor <strong>NATional</strong> HOLiday CELibrated aCROSS the COUNtry.</li>
					<li className="margin-bottom-20 list-none">Independence Day is a national holiday that is celebrated all over the country.</li>
			
					<li>she KEEPS her <strong>PERsonal</strong> DIary LOCKED in a DRAWer where NO ONE ELSE can READ it.</li>
					<li className="margin-bottom-20 list-none">She keeps her personal diary locked in a drawer so that no one else can read it.</li>

					<li>HONey is a deLICious and HEALthy <strong>NATURal</strong> SWEETener USED in <strong>man</strong>y RECipes.</li>
					<li className="margin-bottom-20 list-none">Honey is a tasty and healthy natural sweetener that you can use in many different recipes.</li>
			
					<li>volunTEERing at the LOcal FOOD BANK is a GREAT WAY to BUILD STRONG <strong>SOcial</strong> conNECtions.</li>
					<li className="margin-bottom-20 list-none">Volunteering at the local food bank is a great way to make new friends.</li>
			
					<li>my FAMILy ALways GATHers to COOK <strong>traDITional</strong> DISHes <strong>dur</strong>ing the LUnar NEW YEAR.</li>
					<li className="list-none">My family always gets together to cook traditional foods during the Lunar New Year.</li>
			
				</ul>
			


			<h4 className="margin-y-40">6. Having the nature of… / pertaining to…: -ic / -ical</h4>
					
			<p className="margin-top-20 text-indent-whole">ecoNOMic, scienTIFic, hisTORic, roMANtic, psychoLOgical</p>
			
				<ul className="list-square">
			
					<li>the COUNtry is CURrently FAcing MAjor <strong>ecoNOMic</strong> CHALlenges due to inFLAtion.</li>
					<li className="margin-bottom-20 list-none">The country is currently facing major economic challenges because prices are rising quickly.</li>
			
					<li>reSEARCHers USED <strong>scienTIFic</strong> MEthods to TEST the SAFEty of the NEW MEDicine.</li>
					<li className="margin-bottom-20 list-none">Researchers used science-based methods to test whether the new medicine was safe.</li>

					<li>the TWO NAtions SIGNED a <strong>hisTORic</strong> PEACE aGREEment <strong>af</strong>ter DEcades of CONflict.</li>
					<li className="margin-bottom-20 list-none">After many years of fighting, the two countries made a very important agreement to stop the fighting and become friends.</li>
			
					<li>he PLANNED a <strong>roMANtic</strong> DINner by the BEACH with CANdles and SOFT MUsic.</li>
					<li className="margin-bottom-20 list-none">He planned a romantic dinner by the beach. He wanted to make it special, so he arranged for candles and soft music.</li>
			
					<li>STRESS and anXIety can have SERious <strong>psychoLOgical</strong> and PHYSical efFECTS on a PERson.</li>
					<li className="list-none">Stress and anxiety can have serious effects on a person's mental and physical health.</li>
			
				</ul>
			


			<h4 className="margin-y-40">7. Tends to… / is… in nature: -ive</h4>
					
			<p className="margin-top-20 text-indent-whole">ACtive, creAtive, atTRACtive, efFECtive, SENsitive</p>
			
				<ul className="list-square">
			
					<li>Even in her SEVenties, she reMAINS VERy <strong>ACtive</strong> and GOES JOGging <strong>ever</strong>y MORNing.</li>
					<li className="margin-bottom-20 list-none">Even though she is seventy years old, she is still very active. She goes jogging every morning.</li>
			
					<li>the MARketing TEAM caME UP with a <strong>creAtive</strong> camPAIGN to atTRACT YOUNGer CUStomers.</li>
					<li className="margin-bottom-20 list-none">The Marketing team thought of a new way to sell their products. They want to attract young customers.</li>

					<li>the hisTORical TOWN has <strong>man</strong>y ANcient BUILDings and an <strong>atTRACtive</strong> OLD-WORLD CHARM.</li>
					<li className="margin-bottom-20 list-none">The historic town boasts many old buildings and an appealing old-world charm.</li>
			
					<li>REGular HANDwashing is ONE of the MOST <strong>efFECtive</strong> WAYS to preVENT the SPREAD of ILLness.</li>
					<li className="margin-bottom-20 list-none">Washing your hands regularly is one of the best ways to stop germs from spreading.</li>
			
					<li>you NEED to be CAREful with your WORDS be<strong>cause</strong> she is VERy <strong>SENsitive</strong> to CRITicism.</li>
					<li className="list-none">Choose your words carefully because she takes criticism personally.</li>
			
				</ul>


			<h4 className="margin-y-40">8. Has the characteristic… / is like…: -y</h4>
					
			<p className="margin-top-20 text-indent-whole">HAPpy, RAIny, SUNny, HEALthy, TAsty, CLOUdy</p>
			
				<ul className="list-square">

					<li>she LOOKED VERy <strong>HAPpy</strong> when she reCEIVED the GOOD NEWS a<strong>bout</strong> her proMOtion.</li>
					<li className="margin-bottom-20 list-none">She was very happy when she found out she was being promoted.</li>
			
					<li>it was a COLD and <strong>RAIny</strong> afterNOON, so we deCIDed to STAY inDOORS and WATCH a MOvie.</li>
					<li className="margin-bottom-20 list-none">It was a very cold and rainy afternoon. Because of this, we decided to stay inside and watch a movie.</li>
			
					<li>we SPENT our WEEKend at the BEACH be<strong>cause</strong> the WEAther was BRIGHT and <strong>SUNny</strong>.</li>
					<li className="margin-bottom-20 list-none">We went to the beach over the weekend because it was sunny.</li>

					<li>EATing PLENty of FRESH VEGETables and EXercising REGularly KEEPS your BOdy <strong>HEALthy</strong>.</li>
					<li className="margin-bottom-20 list-none">If you eat lots of fresh vegetables and exercise regularly, you'll have a healthy body.</li>
			
					<li>my GRANDmother COOKED a <strong>TAsty</strong> BOWL of BEEF NOOdle SOUP for BREAKfast.</li>
					<li className="margin-bottom-20 list-none">My grandmother used to make a tasty bowl of beef noodle soup for breakfast.</li>
			
					<li>the SKY beCAME <strong>CLOUdy</strong> in the afterNOON, but THANKfully it DIDn't RAIN.</li>
					<li className="list-none">It started to rain in the afternoon, but it didn't.</li>
			
				</ul>
			


			<h4 className="margin-y-40">9. Feel…: -ed</h4>
					
			<p className="margin-top-20 text-indent-whole">BORED, TIred, exCIted, INTERested, surPRISED</p>
			
				<ul className="list-square">
			
					<li>he FELT <strong>BORED</strong> be<strong>cause</strong> there was NOthing to DO on a RAIny SUNday afterNOON.</li>
					<li className="margin-bottom-20 list-none">He was bored. There was nothing to do on a rainy Sunday afternoon.</li>
			
					<li><strong>af</strong>ter WORKing for TEN HOURS STRAIGHT, she was TOO <strong>TIred</strong> to COOK DINner.</li>
					<li className="margin-bottom-20 list-none">She worked for ten hours without stopping. Then she was too tired to cook dinner.</li>

					<li>the KIDS were SO <strong>exCIted</strong> a<strong>bout</strong> GOing to the aMUSEment PARK toMORrow.</li>
					<li className="margin-bottom-20 list-none">The kids couldn't wait to go to the amusement park tomorrow.</li>
			
					<li>i am VERy <strong>INTERested</strong> in LEARNing MORE a<strong>bout</strong> artiFIcial inTELligence.</li>
					<li className="margin-bottom-20 list-none">I want to know more about artificial intelligence.</li>
			
					<li>we were <strong>surPRISED</strong> by the unexPECted BIRTHday PARTy our FRIENDS THREW for us.</li>
					<li className="list-none">We were surprised by a birthday party that our friends threw for us.</li>
			
				</ul>
			


			<h4 className="margin-y-40">10. To evoke a feeling…: -ing</h4>
					
			<p className="margin-top-20 text-indent-whole">BORing, TIRing, INTEResting, exCIting, conFUsing</p>

			
				<ul className="list-square">
			
					<li>the LECture was SO <strong>BORing</strong> that MOST of the STUdents FELL aSLEEP.</li>
					<li className="margin-bottom-20 list-none">The lecture was so boring that most of the students fell asleep.</li>
			
					<li>HIKing up the MOUNtain all DAY was VERy <strong>TIRing</strong>, but the VIEW at the TOP was WORTH it.</li>
					<li className="margin-bottom-20 list-none">Hiking up the mountain all day was really tiring, but the view at the top made it worth the effort.</li>

					<li>she TOLD me an <strong>INTEResting</strong> STORy a<strong>bout</strong> her TRIP to jaPAN.</li>
					<li className="margin-bottom-20 list-none">She told me an exciting story about her trip to Japan.</li>
			
					<li>WINning the CHAMpionship MATCH was the MOST <strong>exCIting</strong> MOment of his caREER.</li>
					<li className="margin-bottom-20 list-none">His career reached its most exciting point when he won the championship match.</li>
			
					<li>the inSTRUCtions for asSEMbling the BOOKshelf were TOO <strong>conFUsing</strong> to FOLlow.</li>
					<li className="list-none">The instructions for building the bookshelf were too confusing.</li>
			
				</ul>
			

			<h3 className="margin-y-50 text-center">Tips for “spotting” words super fast while taking a test</h3>

			<p>If you see the endings -able, -ible, -ous, -ful, -less, -al, -ic, -ive, or -y → it’s almost certainly an adjective (90% of the time).</p>

			<p>The -ed vs. -ing pair is extremely common on tests:</p>

			<p className="margin-top-20">-ed → a person's emotions</p>
			
				<ul className="list-square">
			
					<li>i’m INTERested.</li>
					<li className="margin-bottom-20 list-none">This interests me.</li>
			
					<li>i’m BORED.</li>
					<li className="margin-bottom-20 list-none">I'm tired of this.</li>
			
					<li>i’m TIred.</li>
					<li className="list-none">All this has left me tired.</li>
			
				</ul>

			
			<p className="margin-top-20">-ing → characteristics of the event</p>
			
				<ul className="list-square">
			
					<li>The LESson is INTEResting.</li>
					<li className="margin-bottom-20 list-none">The lesson is fun.</li>
			
					<li>The LESson is BORing.</li>
					<li className="margin-bottom-20 list-none">This lesson is boring.</li>
			
					<li>The LESson is TIRing.</li>
					<li className="list-none">The lesson is tiresome.</li>
			
				</ul>
			

			<h3 className="margin-y-50 text-center">Some vivid examples</h3>

			<p>Imagine the following everyday situations:</p>
			
				<ul className="list-square">

					<li>She’s very CAREful when she drives → careful (a person’s state of mind)</li>

					<li>This road is very DANgerous! → dangerous (a characteristic of the road)</li>

					<li>This dish is so deLICious! → absolutely delicious (a description of the dish)</li>

					<li>I felt HOPEless when I failed the exam for the third time → hopeless (a personal emotion)</li>
			
					<li>That movie was exCITing from start to finish → captivating, engaging</li>
			
				</ul>

			<p className="margin-top-20">Just 10 minutes a day, and after 3 days you’ll see: English is no longer a “messy jumble” - it’s just 3 fun and easy-to-remember pairings!</p>

			<h3 className="margin-y-50 text-center">In Summary – The Top 8 “Golden” Endings You Need to Remember Today</h3>

			<p>-<strong>able</strong>/-<strong>ible</strong> – <strong>ous</strong> – <strong>ful</strong> – <strong>less</strong> – <strong>al</strong> – <strong>ic</strong>/-<strong>ical</strong> – <strong>ive</strong> – <strong>y</strong></p>
					
			<p>Just by mastering these 8 suffixes, you’ll have a “secret weapon” for quickly identifying adjectives in reading comprehension, fill-in-the-blank exercises, writing sentences, or even when talking to native speakers.</p>
			
			<p>Try it out today: pick an English article, underline all the words with the endings listed above, and see what percentage you get right!</p>

			<p>Good luck with your studies, and may you soon become a “pro” at identifying adjectives! 🌟</p>

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