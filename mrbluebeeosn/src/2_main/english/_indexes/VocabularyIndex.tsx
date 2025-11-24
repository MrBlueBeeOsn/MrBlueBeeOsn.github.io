import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EnglishTopic from '@/components/topic/EnglishTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/VideoSearch2';

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

			<div className="vocabulary-container">

				{/* =============================
							Mức độ cao
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
							Không chắc chắn
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
							Thời gian tương lai
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="thoi-gian-tuong-lai-terms"><mark className="highlight-secondary-padding-2-4">Thời gian tương lai</mark></summary>

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
							Thời gian hiện tại
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="thoi-gian-hien-tai-terms"><mark className="highlight-secondary-padding-2-4">Thời gian hiện tại</mark></summary>

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
							Điểm nhấn đặc biệt
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="diem-nhan-dac-biet-terms"><mark className="highlight-secondary-padding-2-4">Điểm nhấn đặc biệt</mark></summary>

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
							Thời gian hiếm
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

				{/* =============================
							Tính chân thành
				============================= */}

				<details className="sub-box-fix">
			
					<summary id="tinh-chan-thanh-terms"><mark className="highlight-secondary-padding-2-4">Tính chân thành</mark></summary>

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
				
			</div>

		</article>
		
	</main>

	</>);
}