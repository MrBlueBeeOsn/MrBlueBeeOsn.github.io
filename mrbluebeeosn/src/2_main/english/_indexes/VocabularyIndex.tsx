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

			<div className="vocabulary-container">

				{/* =============================
							Tính liên tục
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="khong-chac-chan-terms"><mark className="highlight-secondary-padding-2-4">Không chắc chắn</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/maybe-1">maybe
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/maybe-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/perhaps-1">perhaps
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/perhaps-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						
						
					</ul>

				</details>

				{/* =============================
							Tính liên tục
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="muc-do-cao-terms"><mark className="highlight-secondary-padding-2-4">Mức độ cao</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/so-1">so
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/so-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/very-1">very
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/very-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						
						
					</ul>

				</details>

				{/* =============================
							Không
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="khong-terms"><mark className="highlight-secondary-padding-2-4">Không</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/no-1">no
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/no-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/not-1">not
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/not-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/never-1">never
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/never-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							Có
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="co-terms"><mark className="highlight-secondary-padding-2-4">Có</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/yes-1">yes
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/yes-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/always-1">always
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/always-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/ever-1">ever
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/ever-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							Tính lặp lại
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="thoi-gian-hiem-terms"><mark className="highlight-secondary-padding-2-4">Thời gian hiếm</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/seldom-1">seldom
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/seldom-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/sometimes-1">sometimes
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/sometimes-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/rarely-1">rarely
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/rarely-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/occasionally-1">occasionally
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/occasionally-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							Tính lặp lại
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="tinh-lap-lai-terms"><mark className="highlight-secondary-padding-2-4">Tính lặp lại</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/again-1">again
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/again-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/often-1">often
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/often-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/repeatedly-1">repeatedly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/repeatedly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/frequently-1">frequently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/frequently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							Tính chính xác
				============================= */}

				<details className="sub-box-fix">
			
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

				{/* =============================
							Tính tỉ mỉ
				============================= */}

				<details className="sub-box-fix">
	
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

				{/* =============================
							Tính rõ ràng
					============================= */}

				<details className="sub-box-fix">

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

				{/* =============================
							Tính rõ ràng
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="tinh-xac-thuc-terms"><mark className="highlight-secondary-padding-2-4">Tính xác thực</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/really-1">really
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/really-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/truly-1">truly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/truly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/actually-1">actually
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/actually-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/genuinely-1">genuinely
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/genuinely-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							Tính chắc chắn
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="tinh-chac-chan-terms"><mark className="highlight-secondary-padding-2-4">Tính chắc chắn</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/certainly-1">certainly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/certainly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/definitely-1">definitely
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/definitely-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/absolutely-1">absolutely
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/absolutely-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/surely-1">surely
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/surely-2">
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