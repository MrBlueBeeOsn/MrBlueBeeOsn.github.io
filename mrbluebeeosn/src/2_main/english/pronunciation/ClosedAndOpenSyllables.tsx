import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ClosedAndOpenSyllables(): React.JSX.Element {

	const postId = "ClosedAndOpenSyllables";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/pronunciation#pronunciation-terms"><mark className="highlight-tertiary-padding-4-8">Pronunciation</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Closed/Open Syllables</h1>

			{/* This is the content of English Learning Term. */}

			<h4 className="margin-bottom-30 text-center">Easy-to-understand guide to the <strong>Closed</strong>/<strong>Open Syllables</strong> and Long/Short Vowels rule.</h4>

			<p>This is the exact "SEcret WEAPon" that students in the Philippines and kids in the US use to decode words naturally without memorizing complex IPA symbols!</p>

			{/* PART 1 */}

			<h3 className="margin-y-50 text-center">PART 1: THE CORE RULE (The Two Perfect Pairs)</h3>

			<p>To master this system, you only need to remember two pairs that always go together:</p>
			
				<ul className="list-square">
			
					<li>OPEN Syllable 🤝 LONG Vowel</li>
			
					<li>CLOSED Syllable 🤝 SHORT Vowel</li>
			
				</ul>


			{/* PART 2 */}

			<h3 className="margin-y-50 text-center">PART 2: HOW TO SPOT THEM USING THE SYLLABLE DOT (·)</h3>

			<p>The syllable division dot · in Merriam-Webster is your golden key to knowing whether a syllable is open or closed.</p>


			<h4 className="margin-y-40">1. OPEN Syllable (Ends in a Vowel)</h4>
					
			<p className="text-indent-whole">Definition: A syllable that ends in a Vowel (A, E, I, O, U). The door is "wide open" because no consonant is blocking it at the end.</p>

			<p className="text-indent-whole">The Result: The vowel becomes a LONG VOWEL.</p>

			<p className="text-indent-whole">How to read a Long Vowel: Super easy! You say it exactly like its name in the English Alphabet.</p>
			
				<ul className="list-square">
			
					<li className="margin-bottom-20">Letter A sounds like Ā /eɪ/ (as in "SAY")</li>
			
					<li className="margin-bottom-20">Letter E sounds like Ē /iː/ (as in "SEE")</li>
			
					<li className="margin-bottom-20">Letter I sounds like Ī /aɪ/ (as in "my")</li>

					<li>Letter O sounds like Ō /oʊ/ (as in "GO")</li>
					<li className="list-none margin-bottom-20">Letter O sounds like Ȯ /ɔː/ (as in "DOG")</li>
			
					<li>Letter U sounds like Ü /uː/ (as in "BLUE")</li>
					<li className="list-none">Letter U sounds like YÜ /YÊU/ /juː/ (as in "USE")</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Real Example:</p>
			
				<ul className="list-square">
			
					<li>Look at the word MUsic ──► Merriam splits it as: MU·sic.</li>
			
					<li>Look at the first syllable (MU): It ends with the vowel U ──► OPEN Syllable ──► The letter U says its long name: /juː/ (MYU).</li>
			
				</ul>


			<h4 className="margin-y-40">2. CLOSED Syllable (Ends in a Consonant)</h4>
					
			<p className="text-indent-whole">Definition: A syllable that ends in one or more Consonants (b, c, d, g, n, t...). The consonant acts like a door slamming shut, locking the vowel inside.</p>

			<p className="text-indent-whole">The Result: The trapped vowel becomes a SHORT VOWEL.</p>

			<p className="text-indent-whole">How to read a Short Vowel: You say it quickly and sharply.</p>
			
				<ul className="list-square">
			
					<li>Letter a sounds like /æ/ (as in "CAT")</li>
					<li className="list-none margin-bottom-20">Letter a sounds like ä /ɑː/ (as in "CAR" or "HOT")</li>
			
					<li className="margin-bottom-20">Letter e sounds like /e/ (as in "BED")</li>
			
					<li className="margin-bottom-20">Letter i sounds like /ɪ/ (as in "SIT")</li>

					<li className="margin-bottom-20">Letter o sounds like /ɑː/ (as in "TOP")</li>
			
					<li>Letter u sounds like yə /ia/ (as in "ACcurate")</li>
					<li className="list-none">Letter u sounds like u̇ /ʊ/ (as in "PUT")</li>
					<li className="list-none">Letter u sounds like 'ə /ʌ/ (as in "CUP")</li>
					<li className="list-none">Letter u sounds like /ə/ (as in "but")</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole">Real Example:</p>
			
				<ul className="list-square">
			
					<li>Look at the word MUsic ──► The second part is sic.</li>
			
					<li>It ends with the consonant c ──► CLOSED Syllable ──► The letter i is locked in, so it takes its short sound /ɪ/ (zik).</li>
			
				</ul>

			
			{/* PART 3 */}

			<h3 className="margin-y-50 text-center">PART 3: THE FINISHING TOUCH – YOUR "SYLLABLE + CAPITAL" SYSTEM</h3>

			<p>Once you know the open/closed rule to guess the vowel length, just look at the stress mark (ˈ) in the dictionary to create your own high-efficiency system.</p>

			
			<h4 className="margin-y-40">Practice 1: "MUsic"</h4>
					
			<p className="text-indent-whole">Dictionary check: Word root is MU·sic. Stress is on the first part.</p>

			<p className="text-indent-whole">Your mental process:</p>
			
				<ul className="list-square">
			
					<li>MU is open ──► sounds like MYU.</li>
			
					<li>sic is closed ──► sounds like zik.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Your Final System: MU·sic (Pronounced: MYU-zik)</p>


			<h4 className="margin-y-40">Practice 2: "BAby"</h4>

			<p className="text-indent-whole">Dictionary check: Word root is BA·by. Stress is on the first part.</p>
					
			<p className="text-indent-whole">Your mental process:</p>
			
				<ul className="list-square">
			
					<li>BA ends in a vowel ──► open ──► long A sounds like BEY.</li>
			
					<li>by is unstressed ──► sounds like bee.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Your Final System: BA·by (Pronounced: BEY-bee)</p>


			<h4 className="margin-y-40">Practice 3: "CATnip"</h4>

			<p className="text-indent-whole">Dictionary check: Word root is cat·nip. Stress is on the first part.</p>
					
			<p className="text-indent-whole">Your mental process:</p>
			
				<ul className="list-square">
			
					<li>CAT ends in a consonant ──► closed ──► short A sounds like KAT.</li>
			
					<li>nip ends in a consonant ──► closed ──► short I sounds like nip.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Your Final System: CAT·nip (Pronounced: KAT-nip)</p>
			

			{/* 💡Lời Kết */}

			<h3 className="margin-y-50 text-center">💡 GOLDEN RULE TO REMEMBER:</h3>
			
				<ul className="list-square">
			
					<li>Door Open (Vowel at the end)</li>
					<li className="margin-bottom-20 list-none">──► Long Sound (Alphabet Name)</li>
			
					<li>Door Closed (Consonant at the end)</li>
					<li className="list-none">──► Short Sound (Quick & Sharp)</li>
			
				</ul>
			
			
			<p className="margin-top-20">By using this Syllable Division + CAPITALIZATION method, you can unlock 80% of English vocabulary completely on your own, just like native speakers do.</p>


			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>September 10, 2026 · by GOOGle Search AI and Mr.ßEE ·</span>
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