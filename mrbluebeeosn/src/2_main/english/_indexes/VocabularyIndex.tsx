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
			
					<summary id="verbs-functions-terms"><mark className="highlight-secondary-padding-2-4">VERBS: FUNCtions</mark></summary>

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


				{/* =============================
							Verbs
				============================= */}


				<details className="sub-box-fix">
			
					<summary id="verbs-terms"><mark className="highlight-secondary-padding-2-4">VERBS</mark></summary>

					<ul className="list-border1">

						<li>
              <div className="li-content">
                <Link to="/tieng-anh/gerunds-and-infinitives">GERunds and inFINitives</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/irregular-verbs">irREGular VERBS</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/tieng-anh/phrasal-verbs">PHRAsal VERBS</Link>
              </div>
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
							<Link to="/vocabulary/meTICulously-1">meTICulously
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/meTICulously-2">
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
							<Link to="/vocabulary/PAtiently-1">PAtiently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/PAtiently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/perSIStently-1">perSIStently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/perSIStently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/STEADily-1">STEADily
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/STEADily-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/TIRElessly-1">TIRElessly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/TIRElessly-2">
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
							<Link to="/vocabulary/efFECtively-1">efFECtively
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/efFECtively-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/efFICiently-1">efFICiently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/efFICiently-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/sucCESSfully-1">sucCESSfully
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/sucCESSfully-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/proDUCtively-1">proDUCtively
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/proDUCtively-2">
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
							<Link to="/vocabulary/ACcurately-1">ACcurately
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/ACcurately-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/preCISEly-1">preCISEly
								<sup>&nbsp;1&nbsp;</sup>
							</Link>
							<Link to="/vocabulary/preCISEly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>
						
						<li>
							<Link to="/vocabulary/corRECTly-1">corRECTly
								<sup>&nbsp;1&nbsp;</sup>
							</Link>
							<Link to="/vocabulary/corRECTly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/exACTly-1">exACTly
								<sup>&nbsp;1&nbsp;</sup>
							</Link>
							<Link to="/vocabulary/exACTly-2">
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
							<Link to="/vocabulary/DILiGENTly-1">DILigently
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/DILiGENTly-2">
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
							<Link to="/vocabulary/CERtainly-1">CERtainly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/CERtainly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/DEFinitely-1">DEFinitely
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/DEFinitely-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/absoLUTEly-1">absoLUTEly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/absoLUTEly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/SUREly-1">SUREly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/SUREly-2">
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
							<Link to="/vocabulary/sinCEREly-1">sinCEREly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/sinCEREly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/HONestly-1">HONestly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/HONestly-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/FAITHfully-1">FAITHfully
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/FAITHfully-2">
								<sup>&nbsp;2&nbsp;</sup>
							</Link>
						</li>

						<li>
							<Link to="/vocabulary/Openly-1">Openly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/Openly-2">
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
							<Link to="/vocabulary/GENTly-1">GENTly
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/GENTly-2">
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
							<Link to="/vocabulary/DELicately-1">DELicately
								<sup>&nbsp;1&nbsp;</sup>
									</Link> 
									<Link to="/vocabulary/DELicately-2">
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