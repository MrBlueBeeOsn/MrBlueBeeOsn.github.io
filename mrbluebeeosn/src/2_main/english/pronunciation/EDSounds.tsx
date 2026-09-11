import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function EDSounds(): React.JSX.Element {

	const postId = "EDSounds";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/pronunciation#pronunciation-terms"><mark className="highlight-tertiary-padding-4-8">Pronunciation</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">ED Sounds</h1>

			{/* This is the content of English Learning Term. */}

			<div className="margin-y-50 text-border1 padding-10 highlight-238-padding-4-8 bee-container">

			{/* =============================
				UNSTRESSED
			============================= */}

			<p className="margin-top-20 text-center">

        <div className="example">

					<p className="example-sentence">
						<span className="highlight-255-padding-0-4 text-border">
							1. VOWel: r-COLored
						</span>
					</p>
					
					<p className="example-sentence">
						<span className="pill s">TIred</span> &nbsp; <span className="pill p">ˈtī(-ə)rd</span> &nbsp;<span className="pill v">/taɪ.əd/</span>
					</p>

					<p className="example-sentence">
						<span className="pill s">FIre</span> &nbsp;<span className="pill p">ˈfī(-ə)r</span> &nbsp;<span className="pill v">/faɪ.ər/</span>
					</p>

				</div>

        
        <div className="example">

					<p className="example-sentence">
						<span className="highlight-255-padding-0-4 text-border">
							2. CONsonant: ED<br/>
              ED = /t/ khi đứng trước ED là phụ âm vô thanh: k, p, s, ch, sh... <br/>
              /t/ nối âm sang PARTicle, not <del>prepoSITion</del>
						</span>
					</p>

					<p className="example-sentence">
							<span className="pill s">pickED UP</span> &nbsp;<span className="pill p">lookED UP</span> &nbsp;<span className="pill v">workED OUT</span>
					</p>
					
					
					<p className="example-sentence">
						<span className="pill s">turnED OUT</span> &nbsp;<span className="pill p">checkED IN</span> &nbsp;<span className="pill v">packED UP</span>
					</p>
				
				
					<p className="example-sentence">
							<span className="pill s">walkED OUT</span> &nbsp;<span className="pill p">kickED OUT</span> &nbsp;<span className="pill v">watchED OUT</span>
					</p>


				</div>
        
        
        <div className="example">

					<p className="example-sentence">
						<span className="highlight-255-padding-0-4 text-border">
							3. CONsonant: ED<br/>
              ED = /d/ khi đứng trước ED là phụ âm hữu thanh <br/>
              /d/ nối âm sang PARTicle, not <del>prepoSITion</del>
						</span>
					</p>

					<p className="example-sentence">
							<span className="pill s">callED UP</span> &nbsp;<span className="pill p">turnED ON</span> &nbsp;<span className="pill v">cleanED UP</span>
					</p>
					
					
					<p className="example-sentence">
						<span className="pill s">fillED IN</span> &nbsp;<span className="pill p">playED OUT</span> &nbsp;<span className="pill v">openED UP</span>
					</p>
				
				
					<p className="example-sentence">
							<span className="pill s">closED DOWN</span> &nbsp;<span className="pill p">showED UP</span> &nbsp;<span className="pill v">droppED OFF</span>
					</p>


				</div>
				

			</p>

			

			</div>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>September 11, 2026 · by Mr.ßEE ·</span>
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