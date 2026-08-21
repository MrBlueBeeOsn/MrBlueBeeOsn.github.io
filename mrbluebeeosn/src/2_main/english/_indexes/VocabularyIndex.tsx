import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '@/components/topic/EnglishTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';

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

			<div className="table-search margin-bottom-50">
			
				<SearchComponent />
				
				<VideoSearch2 />
							
			</div>

			


			<div className="vocabulary-container margin-top-20">
						
				{/* =============================
							Verbs
				============================= */}


				<details className="sub-box-fix">
			
					<summary id="verbs-terms"><mark className="highlight-secondary-padding-2-4">VERBs</mark></summary>

					<ul className="list-border1">

						{/* <li>
							<Link to="/vocabulary/clear">[clear]</Link>
						</li> */}

						<li>
							<Link to="/vocabulary/respond">[reSPOND]</Link> 	
						</li>

						<li>
							<Link to="/vocabulary/create">[creATE]</Link> 	
						</li>

						
						

					</ul>


				</details>

			</div>

			<hr className="hr-short"/>

			<div className="vocabulary-container margin-top-20">
						
				{/* =============================
							Adjectives
				============================= */}


				<details className="sub-box-fix">
			
					<summary id="adjectives-terms"><mark className="highlight-secondary-padding-2-4">ADjectives</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/BEAUtiful">BEAUtiful</Link> 	
						</li>

						<li>
							<Link to="/vocabulary/atTRACtive">atTRACtive</Link> 	
						</li>

						<li>
							<Link to="/vocabulary/GRATEful">GRATEful</Link> 	
						</li>
						

					</ul>


				</details>

			</div>

			<hr className="hr-short"/>

			<div className="vocabulary-container margin-top-20">
						
				{/* =============================
							Adverbs
				============================= */}


				<details className="sub-box-fix">
			
					<summary id="dc-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: DC</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/when">when</Link> 	
						</li>

						<li>
							<Link to="/vocabulary/if">if</Link> 	
						</li>

						<li>
							<Link to="/vocabulary/although">although</Link> 	
						</li>
						
						<li>
							<Link to="/vocabulary/because">because</Link> 	
						</li>

					</ul>


				</details>

			</div>

			<div className="vocabulary-container margin-top-20">

				{/* =============================
							ADverbs: mức độ cao
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="muc-do-cao-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: mức độ cao</mark></summary>

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

						<li>
							<Link to="/vocabulary/extremely-1">extremely
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/extremely-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/highly-1">highly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/highly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/greatly-1">greatly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/greatly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							ADverbs: không chắc
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="khong-chac-chan-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: không chắc</mark></summary>

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

						<li>
							<Link to="/vocabulary/possibly-1">possibly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/possibly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/questionably-1">questionably
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/questionably-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/probably-1">probably
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/probably-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/apparently-1">apparently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/apparently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							ADverbs: không
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="khong-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: không</mark></summary>

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
							ADverbs: có
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="co-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: có</mark></summary>

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
							ADverbs: đặc biệt
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="diem-nhan-dac-biet-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: đặc biệt</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/especially-1">especially
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/especially-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/particularly-1">particularly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/particularly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						
						
					</ul>

				</details>

				{/* =============================
							ADverbs: lặp lại
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="thoi-gian-lap-lai-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: lặp lại</mark></summary>

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

						<li>
							<Link to="/vocabulary/usually-1">usually
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/usually-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							ADverbs: tương lai
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="thoi-gian-tuong-lai-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: tương lai</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/soon-1">soon
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/soon-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/tomorrow-1">tomorrow
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/tomorrow-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						
						
					</ul>

				</details>

				{/* =============================
							ADverbs: hiện tại
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="thoi-gian-hien-tai-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: hiện tại</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/now-1">now
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/now-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/currently-1">currently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/currently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/today-1">today
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/today-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/presently-1">presently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/presently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							ADverbs: hiếm
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="thoi-gian-hiem-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: hiếm</mark></summary>

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
							ADverbs: về cơ bản
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="ve-co-ban-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: về cơ bản</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/BAsically-1">BAsically
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/BAsically-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>


					</ul>
					
				</details>

				{/* =============================
							ADverbs: nhanh
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="toc-do-nhanh-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: nhanh</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/QUICKly-1">QUICKly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/QUICKly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/RAPidly-1">RAPidly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/RAPidly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/INstantly-1">INstantly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/INstantly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/SUDdenly-1">SUDdenly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/SUDdenly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							ADverbs: chậm
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="toc-do-cham-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: chậm</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/SLOWly-1">SLOWly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/SLOWly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/LAzily-1">LAzily
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/LAzily-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/GRADually-1">GRADually
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/GRADually-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/beLAtedly-1">beLAtedly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/beLAtedly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							ADverbs: tích cực
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="tinh-tich-cuc-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: tích cực</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/HAPpily-1">HAPpily
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/HAPpily-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/JOYfully-1">JOYfully
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/JOYfully-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/CHEERfully-1">CHEERfully
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/CHEERfully-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/POSitively-1">POSitively
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/POSitively-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							ADverbs: kiên nhẫn
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="tinh-can-than-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: cẩn thận</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/carefully-1">carefully
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/carefully-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/cautiously-1">cautiously
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/cautiously-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/meticulously-1">meticulously
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/meticulously-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/attentively-1">attentively
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/attentively-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							ADverbs: kiên nhẫn
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="tinh-kien-nhan-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: kiên nhẫn</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/patiently-1">patiently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/patiently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/persistently-1">persistently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/persistently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/steadily-1">steadily
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/steadily-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/tirelessly-1">tirelessly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/tirelessly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							ADverbs: hiệu quả
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="tinh-hieu-qua-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: hiệu quả</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/effectively-1">effectively
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/effectively-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/efficiently-1">efficiently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/efficiently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/successfully-1">successfully
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/successfully-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/productively-1">productively
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/productively-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							ADverbs: chính xác
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="tinh-chinh-xac-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: chính xác</mark></summary>

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
							ADverbs: tỉ mỉ
				============================= */}

				<details className="sub-box-fix">
	
					<summary id="tinh-ti-mi-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: tỉ mỉ</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/PAINStakingly-1">PAINStakingly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/PAINStakingly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/THORoughly-1">THORoughly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/THORoughly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/DILigently-1">DILigently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/DILigently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/SCRUpulously-1">SCRUpulously
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/SCRUpulously-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							ADverbs: rõ ràng
					============================= */}

				<details className="sub-box-fix">

					<summary id="tinh-ro-rang-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: rõ ràng</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/CLEARly-1">CLEARly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/CLEARly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/OBviously-1">OBviously
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/OBviously-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/EVidently-1">EVidently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/EVidently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/VISibly-1">VISibly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/VISibly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							ADverbs: rõ ràng
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="tinh-xac-thuc-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: xác thực</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/REALly-1">REALly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/REALly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/TRUly-1">TRUly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/TRUly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/ACtually-1">ACtually
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/ACtually-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/GENuinely-1">GENuinely
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/GENuinely-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
					</ul>

				</details>

				{/* =============================
							ADverbs: chắc chắn
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="tinh-chac-chan-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: chắc chắn</mark></summary>

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

				{/* =============================
							ADverbs: chân thành
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="tinh-chan-thanh-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: chân thành</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/sincerely-1">sincerely
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/sincerely-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/honestly-1">honestly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/honestly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/faithfully-1">faithfully
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/faithfully-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/openly-1">openly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/openly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

					</ul>
					
				</details>

				{/* =============================
							ADverbs: nhẹ nhàng
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="tinh-nhe-nhang-terms"><mark className="highlight-secondary-padding-2-4">ADverbs: nhẹ nhàng</mark></summary>

					<ul className="list-border1">

						<li>
							<Link to="/vocabulary/gently-1">gently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/gently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/SOFTly-1">SOFTly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/SOFTly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/TENderly-1">TENderly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/TENderly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/delicately-1">delicately
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/delicately-2">
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