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
			
			<h1 className="margin-y-50 text-center">How to remember verbs add s</h1>

			{/* This is the content of English Learning Term. */}

			<p>Remembering to add an "-s" to verbs is essential for third-person singular subjects (he, she, it, singular nouns) in the simple present tense. A simple way to remember this is: "If the subject is one, add an s to the fun" (verb).</p>

			<p>Here are the best ways to remember this rule:</p>

			<h3 className="margin-y-50 text-center">1. The "He, She, It" Rule (The 3rd Person S)</h3>

			<p>The "-s" ending is a special marker for third-person singular present-tense verbs.</p>

				<ul className="list-square">

					<li>I play -{'>'} He/She/It plays</li>

					<li>They work -{'>'} Mark works</li>

				</ul>

			<h3 className="margin-y-50 text-center">2. The "Opposite" Trick</h3>
			
			<p>Nouns and verbs act opposite when adding s for plural/singular.</p>

				<ul className="list-square">

					<li><strong>Nouns</strong>: Add s to make them plural (one cat, two cats).</li>

					<li><strong>Verbs</strong>: Add s to make them singular (the cat sleeps, the cats sleep).</li>

				</ul>

			<h3 className="margin-y-50 text-center">3. Memory Tricks</h3>

				<ul className="list-square">

					<li>"He, she, it, S muss mit" (German for "He, she, it, S must come along").</li>

					<li>"He, she, or it? S goes with it!"</li>

				</ul>

			<p className="margin-top-20"><strong>Visualize Superman</strong>: Imagine an "S" on the chest of a superhero that jumps onto the verb when the subject is he, she, or it.</p>

			<h3 className="margin-y-50 text-center">4. Special Rules and Exceptions</h3>

				<ul className="list-square">

					<li><strong>Add</strong> -<strong>es</strong>: For verbs ending in ch, s, sh, x, or z (e.g., watches, washes).</li>

					<li><strong>Change y to</strong> -<strong>ies</strong>: If the verb ends in a consonant + y (e.g., study -{'>'} studies).</li>

					<li><strong>Irregular Verbs</strong>: Go becomes goes, Do becomes does, Have becomes has.</li>

					<li><strong>No s for I</strong>/<strong>You</strong>: Even though "I" and "you" are one person, they do not take an s in the present tense (I walk, You walk).</li>

				</ul>

			<h3 className="margin-y-50 text-center">5. Quick Practice Tips</h3>

				<ul className="list-square">

					<li><strong>Hiss it out</strong>: If you forget, have a partner "hiss" like a snake (sssss) when you forget the s in conversation.</li>

					<li><strong>Practice with singular subjects</strong>: Create sentences using words like "My mom," "The cat," or "Everyone" to force the use of the -s.</li>

				</ul>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 4, 2026 · by 💎Gem ·</span>
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