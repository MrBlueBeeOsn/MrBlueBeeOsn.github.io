import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Complements(): React.JSX.Element {

	const postId = "Complements";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/grammar#Modern-Grammar"><mark className="highlight-tertiary-padding-4-8">Modern Grammar</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Complements</h1>

			{/* This is the content of English Learning Term. */}

			<h4 className="margin-bottom-30 text-center">The Status of Infinitival to and Its Complement: A Huddleston & Pullum Perspective</h4>

			<p>In modern English syntax, particularly within the framework established by Rodney Huddleston and Geoffrey K. Pullum in The Cambridge Grammar of the English Language (CGEL, 2002), traditional grammatical classifications undergo a rigorous structural re-evaluation. Two components prone to misclassification in traditional grammar are the word to in infinitival constructions and the structural status of the clauses that follow it or its finite counterparts.</p>


			{/* I.  */}

			<h3 className="margin-y-50 text-center">I. The Category of Infinitival to: Subordinator, Not Preposition</h3>

			<p>In traditional school grammar, to in a construction like to go is often casually lumped together with the preposition to found in to the station. CGEL (2002) explicitly rejects this classification, reassigning infinitival to to the category of subordinator—more specifically, an infinitival subordinator.</p>

			<p>Huddleston and Pullum justify this categorical shift based on clear distributional and syntactic criteria:</p>
			
				<ul className="list-square">
			
					<li><strong>Complement Selection</strong>: Traditional prepositions typically select a Noun Phrase (NP) as their complement. Infinitival to, conversely, licenses and combines with a Verb Phrase (VP) operating in its plain form.</li>
			
					<li><strong>Structural Parallelism</strong>: Infinitival to functions as a purely structural marker introduced to head a non-finite subordinate clause. This makes it syntactically analogous to the marker that in finite subordinate clauses (e.g., I think [that you are right]).</li>
			
					<li><strong>Grammaticalisation</strong>: While infinitival to historically evolved from the directional preposition to, in modern English it has undergone total grammaticalisation. It has shed its semantic spatial meaning to become a pure structural flag for non-finiteness.</li>
			
				</ul>


			{/* II.  */}

			<h3 className="margin-y-50 text-center">II. Morphological Identity: The LEXeme and the Plain Form</h3>
			
			<p className="margin-top-20">When identifying an uninflected verb as it appears in a dictionary entry, CGEL (2002) avoids terms like "root verb" or "infinitive verb" at the morphological level. Instead, the framework introduces a strict division between abstract lexical items and their real-world shapes:</p>
			
				<ul className="list-square">
			
					<li><strong>The Verb LEXeme</strong>: This represents the abstract lexical entity, containing all semantic definitions and the entire paradigm of its variants. In CGEL, LEXemes are conventionally represented in capital letters (e.g., the LEXeme TAKE or BE).</li>
			
					<li><strong>The Plain Form</strong>: This is the actual inflectional shape of the verb when it lacks any overt suffixes or modifications (no -s, -ed, or -ing). The dictionary entry headword take is the plain form representing the LEXeme TAKE.</li>
			
				</ul>
			
					
			<p className="margin-top-20">The plain form is highly versatile. It serves three distinct syntactic functions across the language:</p>
			
				<ul className="list-square">
			
					<li><strong>The imperative</strong>:</li>
					<li className="margin-bottom-20 list-none">Example: Give me the book.</li>
			
					<li><strong>The present subjunctive</strong>:</li>
					<li className="margin-bottom-20 list-none">Example: I insist that he be present.</li>
			
					<li><strong>The infinitival</strong>:</li>
					<li className="list-none">Example: I want to go. / I must go.</li>
			
				</ul>
			

			{/* III.  */}

			<h3 className="margin-y-50 text-center">III. Categories vs. Functions: Content Clauses and Clausal Complements</h3>

			<p>One of CGEL's most significant departures from traditional grammar is its refusal to use the terms "noun" or "noun clause" for clausal structures acting as core arguments. Phrases like that he is right or to go do not share the structural or distributional properties of Noun Phrases (NPs). Instead, CGEL separates them into Categories (what they are) and Functions (what they do).</p>

			<h3 className="margin-y-50">Category: Content Clauses</h3>

			<p>When analyzing the formal grammatical class of these clauses, CGEL classifies them as content clauses (subordinate clauses that lack the distinctive structural features of relative or comparative clauses).</p>

			<h4 className="margin-y-40">1. Declarative Content Clause:</h4>
					
			<p className="text-indent-whole">A clause that makes a statement without structural markers of exclamation or interrogation.</p>
			
				<ul className="list-square">
			
					<li>Example: ... [that he is right]</li>
			
				</ul>
			

			<h4 className="margin-y-40">2. Interrogative Content Clause:</h4>
					
			<p className="text-indent-whole">A clause that expresses a question within a subordinate structure, using a wh- word or the subordinators whether or if without subject-auxiliary inversion.</p>
			
				<ul className="list-square">
			
					<li>Example: ... [whether he will arrive] / ... [what he bought]</li>
			
				</ul>

			
			<h4 className="margin-y-40">3. Exclamative Content Clause:</h4>
					
			<p className="text-indent-whole">A clause driven by a non-inverted what or how phrase highlighting a strong degree.</p>
			
				<ul className="list-square">
			
					<li>Example: ... [what a great time we had]</li>
			
				</ul>
			
			<p className="margin-top-20">Note on Imperatives: CGEL explicitly points out that there are no subordinate imperative content clauses in modern English; clauses following verbs of demanding or commanding are structurally either present subjunctives or infinitivals.</p>


			<h3 className="margin-y-50">Function: Clausal Complements and Subjects</h3>

			<p>When evaluating what these categories do inside a sentence, they are mapped to specific structural functions. CGEL explicitly avoids assigning "Object" status to clauses, opting for a highly refined relational breakdown across various finite and non-finite clausal structures:</p>

			<h4 className="margin-y-40">1. Finite Clausal Subject: </h4>
					
			<p className="text-indent-whole">This occurs when a finite content clause sits outside the main VP as the primary argument of the sentence.</p>
			
				<ul className="list-square">
			
					<li>Example: [That he failed] is a pity.</li>
			
					<li className="list-none"><strong>The declarative content clause</strong> functions as a type of <strong>the finite clause as subject</strong>.</li>
			
				</ul>
			

			<h4 className="margin-y-40">2. Finite Clausal Complement (Declarative):</h4>
					
			<p className="text-indent-whole">This occurs when a declarative content clause is licensed directly by a head element.</p>
			
				<ul className="list-square">
			
					<li>Example: I think [that he is right].</li>
			
					<li className="list-none"><strong>The declarative content clause</strong> functions as an instance of <strong>the finite clause as complement</strong> of the verb 'think'.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"></p>

			<h4 className="margin-y-40">3. Finite Clausal Complement (Interrogative):</h4>
					
			<p className="text-indent-whole">This occurs when a subordinate question serves as a direct licensed complement of a head.</p>
			
				<ul className="list-square">
			
					<li>Example 1: I wonder [whether he will arrive].</li>
					<li className="margin-bottom-20 list-none"><strong>The closed interrogative content clause</strong> functions as an instance of <strong>the finite clause as complement</strong> of the verb 'wonder'.</li>
			
					<li>Example 2: She asked [what he bought].</li>
					<li className="list-none"><strong>The open interrogative content clause</strong> functions as an instance of <strong>the finite clause as complement</strong> of the verb 'ask'.</li>
			
				</ul>
			

			<h4 className="margin-y-40">4. Finite Clausal Complement (Exclamative):</h4>
					
			<p className="text-indent-whole">This occurs when a subordinate exclamative structural category fulfills a licensed complement function.</p>
			
				<ul className="list-square">
			
					<li>Example: I remember [what a great time we had].</li>
			
					<li className="list-none"><strong>The exclamative content clause</strong> functions as an instance of <strong>the finite clause as complement</strong> of the verb 'remember'.</li>
			
				</ul>

			
			<h4 className="margin-y-40">5. Relative Clausal Complement (Infrequent but Distinct):</h4>
					
			<p className="text-indent-whole">Unlike standard relative clauses which function as modifiers (adjuncts), certain highly specialized relative clauses function directly as licensed <strong>complements</strong> of specific lexical items.</p>

			<p className="margin-top-20">Ví dụ 1: Khi dùng từ "Cái gì / Thứ mà"</p>
			
				<ul className="list-square">
			
					<li>Relative Clause: I bought [the thing] that you recommended].</li>
					<li className="margin-bottom-20 list-none">Có danh từ "the thing"</li>

					<li>Fused Relative Clause: I bought [what you recommended].</li>
					<li className="list-none">Chữ "what" đã thay thế cho cả cụm "the thing that"</li>
			
				</ul>
			
			<p className="margin-top-20">Ví dụ 2: Khi nói về người</p>

				<ul className="list-square">
			
					<li>Relative Clause: [Anyone who wants to come] is welcome.</li>
					<li className="margin-bottom-20 list-none">Có danh từ/đại từ "Anyone"</li>

					<li>Fused Relative Clause: [Whoever] wants to come is welcome.</li>
					<li className="list-none">Chữ "Whoever" tự mang nghĩa là "bất cứ ai người mà"</li>
			
				</ul>


			<p className="margin-top-20">Ví dụ 3: Khi nói về nơi chốn</p>

				<ul className="list-square">
			
					<li>Relative Clause: This is [the place where we first met].</li>
					<li className="margin-bottom-20 list-none">Có danh từ "the place"</li>

					<li>Fused Relative Clause: This is [where we first met].</li>
					<li className="list-none">Chữ "where" đóng vai trò là "nơi mà"</li>
			
				</ul>

			
			<ul className="list-square">
			
					<li>Relative Clause: for [the thing that happened]</li>
					<li className="margin-bottom-20 list-none"><strong>The relative clause</strong> functions as an instance of <strong>the clause as modifier</strong> within a nominal constituent.</li>

					<li>Fused Relative Clause: for [what happened].</li>
					<li className="list-none">The <strong>fused relative construction</strong> functions as an instance of <strong>the Noun Phrase as complement</strong> within the prepositional phrase.</li>
			
				</ul>
			

			<h4 className="margin-y-40">6. Comparative Clausal Complement:</h4>
					
			<p className="text-indent-whole">A highly distinctive clause type introduced by than or as that functions strictly as the complement to a comparative head modifier.</p>
			
				<ul className="list-square">
			
					<li>Example: She is taller [than he is].</li>
			
					<li className="list-none"><strong>The comparative clause</strong> functions as an instance of <strong>the clause as complement</strong> of the comparative head element.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"></p>

			<h4 className="margin-y-40">7. Non-Finite Clausal Complement (Catenative Complement):</h4>
					
			<p className="text-indent-whole">This occurs when an infinitival non-finite clause is licensed by a catenative (chaining) verb like want, seem, or intend.</p>
			
				<ul className="list-square">
			
					<li>Example: I managed [to open the door].</li>
			
					<li className="list-none"><strong>The infinitival clause</strong> functions as an instance of <strong>the non-finite clause as catenative complement</strong> of the verb 'manage'.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">By strictly decoupling morphological category from syntactic function, the CGEL 2002 framework provides a remarkably elegant, non-redundant, and structurally sound map of English complementation.</p>

			

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>sepTEMber 28, 2026 · by 💎GOOgle SEARCH AI ·</span>
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