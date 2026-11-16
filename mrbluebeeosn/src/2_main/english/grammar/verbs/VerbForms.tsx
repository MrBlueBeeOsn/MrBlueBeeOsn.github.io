import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function VerbForms(): React.JSX.Element {

	const postId = "VerbForms";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/grammar#verbs"><mark className="highlight-tertiary-padding-4-8">Verbs</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Verb Forms</h1>

			{/* This is the content of English Learning Term. */}

			<h4 className="margin-bottom-30 text-center">The Complete Guide to the 5 Verb Forms in English (V1 – V5)r</h4>

			<p>In English grammar, verbs are the core of every sentence. To express different tenses, moods, and voices accurately, main verbs transform into five primary forms (commonly known as V1 through V5). Mastering these five forms is the single best foundation you can build for fluent writing and speaking.</p>

			<p>Here is a clear, beginner-friendly guide to how each verb form works.</p>

			<h4 className="margin-y-40">1. Base Form (V1 / Infinitive)</h4>
					
			<p className="text-indent-whole">The base form is the original, unchanged version of a verb found in the dictionary.</p>

			<p className="text-indent-whole"><strong>When to use it</strong>:</p>
			
				<ul className="list-square">
			
					<li>In the present simple tense with plural and first-person subjects (I, you, we, they).</li>
			
					<li>Immediately after modal verbs (can, could, will, should, must).</li>
			
					<li>After the word "to" to form a to-infinitive.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>Examples</strong>: work, go, eat</p>

				<ul className="list-square">
			
					<li>I <span className="pill-teal">work</span> from home every Friday.</li>
			
				</ul>

			


			<h4 className="margin-y-40">2. Past Simple Form (V2)</h4>
					
			<p className="text-indent-whole">This form describes an action that happened and finished at a specific time in the past.</p>

			<p className="text-indent-whole"><strong>How to form it</strong>:</p>
			
				<ul className="list-square">
			
					<li>Regular verbs: Add -ed or -d to the base form.</li>
			
					<li>Irregular verbs: Change spelling completely or stay the exact same (these must be memorized).</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>Examples</strong>: worked, went, ate</p>

				<ul className="list-square">
			
					<li>She <span className="pill-teal">went</span> to London last summer.</li>
			
				</ul>
			


			<h4 className="margin-y-40">3. Past Participle Form (V3)</h4>
					
			<p className="text-indent-whole">The past participle cannot stand alone as the main verb of a sentence. Instead, it pairs with auxiliary (helping) verbs to create perfect tenses or the passive voice.</p>

			<p className="text-indent-whole"><strong>When to use it</strong>:</p>
			
				<ul className="list-square">
			
					<li>After have, has, or had in perfect tenses (e.g., Present Perfect, Past Perfect).</li>
			
					<li>After a form of to be (is, are, was, were) in passive sentences.</li>
			
					<li>As a descriptive adjective.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>Examples</strong>: worked, gone, eaten</p>

				<ul className="list-square">
			
					<li>They <span className="pill-teal">have</span> already <span className="pill-teal">eaten</span> dinner.</li>
			
				</ul>

			<h4 className="margin-y-40">4. Present Participle / -ing Form (V4)</h4>
					
			<p className="text-indent-whole">This form is created by adding -ing to the end of the base verb.</p>

			<p className="text-indent-whole"><strong>When to use it</strong>:</p>
			
				<ul className="list-square">
			
					<li>With a form of to be to create continuous (progressive) tenses.</li>
			
					<li>As a gerund, where the verb acts like a noun (e.g., Swimming is fun).</li>
			
					<li>As an active adjective (e.g., an exciting movie).</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>Examples</strong>: working, going, eating</p>

				<ul className="list-square">
			
					<li>He <span className="pill-teal">is working</span> on a new project right now.</li>
			
				</ul>
			


			<h4 className="margin-y-40">5. Third-Person Singular Present Form (V5 / -s or -es Form)</h4>
					
			<p className="text-indent-whole">This form is used exclusively in the present simple tense when the subject is a single third-person entity.</p>

			<p className="text-indent-whole"><strong>When to use it</strong>:</p>
			
				<ul className="list-square">
			
					<li>Only with third-person singular subjects (he, she, it, a person's name, or a singular noun).</li>
			
				</ul>

			<p className="text-indent-whole"><strong>How to form it</strong>:</p>
			
				<ul className="list-square">
			
					<li>Add -s or -es to the base form (with a few irregular exceptions like have → has and be → is).</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole"><strong>Examples</strong>: works, goes, eats</p>

				<ul className="list-square">
			
					<li>My sister <span className="pill-teal">works</span> as a graphic designer.</li>
			
				</ul>

			{/* .  */}

      <h3 className="margin-y-50 text-center">Quick Reference Comparison Table</h3>

			<p>Use this table to see how both regular and irregular verbs transform across all five forms:</p>

			<table className="margin-y-50">
          <thead>
            <tr>
              <th>Base Form (V1)</th>
              <th>Past Simple (V2)</th>
							<th>Past Participle (V3)</th>
							<th>Present Participle (V4)</th>
							<th>3rd Person Singular Present (V5)</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Be (irregular)</td>
              <td>Was / Were</td>
							<td>Been</td>
              <td>Being</td>
							<td>Is (Note: Present simple also uses am and are)</td>
            </tr>

						<tr>
              <td>Work (regular)</td>
              <td>Worked</td>
							<td>Worked</td>
              <td>Working</td>
							<td>Works</td>
            </tr>

						<tr>
              <td>Go (irregular)</td>
              <td>Went</td>
							<td>Gone</td>
              <td>Going</td>
							<td>Goes</td>
            </tr>

            <tr>
              <td>Eat (irregular)</td>
              <td>Ate</td>
							<td>Eaten</td>
              <td>Eating</td>
							<td>Eats</td>
            </tr>

						<tr>
              <td>Cut (irregular)</td>
              <td>Cut</td>
							<td>Cut</td>
              <td>Cutting</td>
							<td>Cuts</td>
            </tr>

          </tbody>
        </table>

			{/* .  */}

      <h3 className="margin-y-50 text-center">Final Thoughts</h3>

			<p>Understanding the five verb forms takes the guesswork out of English tenses. Bookmark this guide as a quick reference whenever you write, and practice building one sentence for each form to lock them into your memory!</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>noVEMber 16, 2026 · by GGS AI ·</span>
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