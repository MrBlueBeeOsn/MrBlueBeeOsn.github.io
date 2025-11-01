import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '@/components/EnglishTopic';

export default function VocabularyIndex(): React.JSX.Element {
	return (<>
		 
	<main className="image image1 content">

		<article>

			{/* =============================
					English Topic
			============================= */}

			<EnglishTopic/>

			{/* =============================
					6. Vocabulary Terms
			============================= */}

			<h3 className="margin-y-50 text-center" id="vocabulary-terms">Từ vựng Terms</h3>

			<div className="flex-container">

				<details className="sub-box-fix">

					{/* =============================
							Tính chính xác
					============================= */}
			
					<summary id="tinh-chinh-xac-terms"><mark className="highlight-secondary-padding-2-4">Tính chính xác</mark></summary>

					<ul className="list-border1">
						
						<li>
							<Link to="/vocabulary/accurately-1">accurately
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/accurately-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/precisely-1">precisely
								<sup>&nbsp;1&nbsp;</sup>
							</Link>
							<Link to="/vocabulary/precisely-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/correctly-1">correctly
								<sup>&nbsp;1&nbsp;</sup>
							</Link>
							<Link to="/vocabulary/correctly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/exactly-1">exactly
								<sup>&nbsp;1&nbsp;</sup>
							</Link>
							<Link to="/vocabulary/exactly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				<details className="sub-box-fix">

					{/* =============================
							Tính tỉ mỉ
					============================= */}
			
					<summary id="tinh-ti-mi-terms"><mark className="highlight-secondary-padding-2-4">Tính tỉ mỉ</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/painstakingly-1">painstakingly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/painstakingly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/thoroughly-1">thoroughly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/thoroughly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/diligently-1">diligently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/diligently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/scrupulously-1">scrupulously
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/scrupulously-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				<details className="sub-box-fix">

					{/* =============================
							Tính rõ ràng
					============================= */}
			
					<summary id="tinh-ro-rang-terms"><mark className="highlight-secondary-padding-2-4">Tính rõ ràng</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/clearly-1">clearly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/clearly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/obviously-1">obviously
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/obviously-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/evidently-1">evidently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/evidently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/visibly-1">visibly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/visibly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				

			</div>

		</article>
		
	</main>

	</>);
}