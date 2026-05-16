import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DependentClause2(): React.JSX.Element {

	const postId = "DependentClause2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">Dependent Clause
												
				<sup><HashLink smooth to="/tieng-anh/dependent-clause-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-8">&nbsp;8&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/dependent-clause-9">&nbsp;9&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">Làm chủ mệnh đề phụ thuộc: Công thức viết câu tiếng Anh giàu bản sắc</h4>

			<p>Bạn đã bao giờ tự hỏi:</p>

			<p>Tại sao có người viết tiếng Anh chỉ vài câu mà thấy “sâu”, còn mình viết cả đoạn vẫn thấy “nông”?</p>

			<p>Vấn đề không nằm ở số lượng từ. Nó nằm ở cách sắp xếp ý. Và chìa khóa của cách sắp xếp ấy chính là <strong>mệnh đề phụ thuộc</strong> (<strong>Dependent Clause</strong>).</p>
					
			<p>Hãy cùng tôi đi từng bước. Không lý thuyết suông. Chỉ có thao tác.</p>

			{/* Cách nhận diện nhanh: Nhìn vào từ mở đầu */}

			<h3 className="margin-y-50 text-center">Trước hết: Mệnh đề phụ thuộc nhìn như thế nào?</h3>

			<p>Bạn cần phân biệt nó với mệnh đề độc lập.</p>

			<p>Một mệnh đề độc lập có thể đứng riêng thành một câu hoàn chỉnh.</p>

			<p>Một mệnh đề phụ thuộc thì không – nhưng điều đó không có nghĩa là nó “sai”. Nó chỉ cần một mệnh đề khác đi kèm.</p>
					
			<p>Hãy so sánh:</p>

				<ul className="list-square">
			
					<li>The sun set.</li>
					<li className="margin-bottom-20 list-none">Mặt trời lặn.</li>

					<li className="margin-bottom-20 list-none">→ Đứng riêng được.</li>

					<li><strong>After</strong> the sun set</li>
					<li className="margin-bottom-20 list-none">Sau khi mặt trời lặn… thì sao?</li>

					<li className="list-none">→ Đứng riêng không xong.</li>
			
				</ul>
	

			<p className="margin-top-20">Ngay lập tức bạn thấy sự khác biệt. Cái thứ hai tạo ra sự chờ đợi. Đó là dấu hiệu rõ nhất.</p>
			
			{/* Cách nhận diện nhanh: Nhìn vào từ mở đầu */}

			<h3 className="margin-y-50 text-center">Cách nhận diện nhanh: Nhìn vào từ mở đầu</h3>

			<p>Nhớ:</p>
			
				<ul className="list-square">
			
					<li>Không dùng <strong>FANBOYS</strong></li>
					<li className="list-none">for, and, nor, but, or, yet, so</li>
			
				</ul>
			
			<p className="margin-top-20">Mệnh đề phụ thuộc thường được bắt đầu bằng một trong những từ sau</p>
			
				<ul className="list-square">
			
					<li><strong>Nhóm thời gian và điều kiện</strong>:</li>
					<li className="margin-bottom-20 list-none">when, whenever, while, as, before, after, since, until, once, as soon as, if, unless, provided that.</li>
					
					<li><strong>Nhóm nguyên nhân</strong> – <strong>tương phản</strong>:</li>
					<li className="margin-bottom-20 list-none">because, since (nghĩa “bởi vì”), as (nghĩa “bởi vì”), although, even though, though, whereas, while (nghĩa “trong khi”).</li>
			
					<li><strong>Nhóm bổ nghĩa cho danh từ</strong>:</li>
					<li className="margin-bottom-20 list-none">who, whom, which, that, whose, where, why.</li>
			
					<li><strong>Một số từ khác</strong>:</li>
					<li className="list-none">as if, as though, in case, so that.</li>
			
				</ul>

			<h4 className="margin-y-40">Hãy lấy ví dụ cụ thể.</h4>
					
			<p>Bạn đọc câu sau, gạch chân phần nào bắt đầu bằng các từ trên:</p>

				<ul className="list-square">
			
					<li>I will wait here until you come back.</li>
					<li className="margin-bottom-20 list-none">Tôi sẽ đợi ở đây cho đến khi bạn quay lại.</li>

					<li className="margin-bottom-20 list-none">→ <strong>until you come back</strong> là mệnh đề phụ thuộc.</li>

					<li>The house where I grew up has been sold.</li>
					<li className="margin-bottom-20 list-none">Ngôi nhà nơi tôi lớn lên đã được bán.</li>

					<li className="margin-bottom-20 list-none">→ <strong>where I grew up</strong> là mệnh đề phụ thuộc.</li>

					<li>As she opened the door, the phone rang.</li>
					<li className="margin-bottom-20 list-none">Khi cô ấy mở cửa, điện thoại reo.</li>

					<li className="list-none">→ <strong>As she opened the door</strong> là mệnh đề phụ thuộc.</li>
			
				</ul>


			{/* Ba bước để viết một câu có mệnh đề phụ thuộc */}

			<h3 className="margin-y-50 text-center">Ba bước để viết một câu có mệnh đề phụ thuộc</h3>

			<p>Đây là quy trình tôi muốn bạn tập. Làm lần lượt, không bỏ bước.</p>

			<h4 className="margin-y-40">Bước 1: Chọn hai ý có liên quan</h4>
					
			<p className="text-indent-whole">Bạn cần ít nhất hai mệnh đề. Một sẽ là chính, một là phụ. Hãy bắt đầu từ hai câu đơn giản.</p>
			
			<p className="text-indent-whole">Ví dụ:</p>
			
				<ul className="list-square">
			
					<li>(A) The traffic was terrible.</li>
					<li className="margin-bottom-20 list-none">Giao thông thật tồi tệ.</li>
			
					<li>(B) I arrived late.</li>
					<li className="list-none">Tôi đến muộn.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Hai ý này rõ ràng có quan hệ: A là nguyên nhân, B là kết quả.</p>

			<h4 className="margin-y-40">Bước 2: Chọn từ nối phù hợp</h4>
					
			<p className="text-indent-whole">Dựa vào mối quan hệ, bạn chọn một từ nối ở danh sách trên.</p>
			<p className="text-indent-whole">Ở đây, dùng <strong>because</strong> (bởi vì) hoặc so that (đến nỗi) không ổn. Because đúng nhất.</p>

			
			<h4 className="margin-y-40">Bước 3: Đặt mệnh đề phụ ở vị trí hợp lý và thêm dấu phẩy nếu cần</h4>

			<p className="text-indent-whole">Có hai cách:</p>

			<p className="text-indent-whole"><strong>Cách 1</strong> – <strong>Mệnh đề phụ đứng đầu</strong>:</p>
			
				<ul className="list-square">
			
					<li><strong>Because</strong> the traffic was terrible, I arrived late.</li>
					<li className="margin-bottom-20 list-none">Vì giao thông quá tồi tệ nên tôi đã đến muộn.</li>

					<li className="list-none">→ Dấu phẩy sau mệnh đề phụ.</li>
			
				</ul>
			
			
			<p className="margin-top-20 text-indent-whole"><strong>Cách 2</strong> – <strong>Mệnh đề phụ đứng cuối</strong>:</p>
			
				<ul className="list-square">
			
					<li>I arrived late <strong>because</strong> the traffic was terrible.</li>
					<li className="margin-bottom-20 list-none">Tôi đến muộn vì giao thông quá tồi tệ.</li>

					<li className="list-none">→ Không cần dấu phẩy.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Cả hai đều đúng. Cách nào hay hơn?</p>
			<p className="text-indent-whole">Nếu bạn muốn nhấn mạnh nguyên nhân, đưa lên đầu. Nếu muốn nhấn kết quả, đưa lên cuối.</p>


			<h4 className="margin-y-40">Hãy tập thêm một ví dụ khác</h4>
					
			<p className="text-indent-whole">Với nhóm <strong>although</strong> (mặc dù):</p>

			<p className="text-indent-whole">Hai câu đơn:</p>
			
				<ul className="list-square">
			
					<li>(A) It rained heavily.</li>
					<li className="margin-bottom-20 list-none">Trời mưa to.</li>
			
					<li>(B) We went for a walk</li>
					<li className="list-none">Chúng tôi đi dạo.</li>
			
				</ul>
					
			<p className="margin-top-20 text-indent-whole">Chọn although để thể hiện sự tương phản. Viết:</p>
			
				<ul className="list-square">
			
					<li><strong>Although</strong> it rained heavily, we went for a walk.</li>
					<li className="margin-bottom-20 list-none">Mặc dù trời mưa rất to, chúng tôi vẫn đi dạo.</li>
			
					<li>We went for a walk <strong>although</strong> it rained heavily.</li>
					<li className="list-none">Chúng tôi vẫn đi dạo mặc dù trời mưa rất to.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Lưu ý: Khi although ở giữa câu, không có dấu phẩy. Điều này khác với because? Không, quy tắc dấu phẩy hoàn toàn giống: chỉ dùng dấu phẩy khi mệnh đề phụ đứng đầu.</p>

			{/* Làm thế nào để phân biệt mệnh đề phụ thuộc với mệnh đề chính mà không nhầm? */}

			<h3 className="margin-y-50 text-center">Làm thế nào để phân biệt mệnh đề phụ thuộc với mệnh đề chính mà không nhầm?</h3>
			
			<h4 className="margin-y-40">Bài kiểm tra 1: Câu hỏi “Vậy thì sao?”</h4>

			<p className="text-indent-whole">Đọc cụm từ đó và hỏi “Vậy thì sao?”. Nếu bạn thấy thiếu một phần trả lời cho câu hỏi đó, nó là mệnh đề phụ thuộc.</p>

			<p className="text-indent-whole">Thử:</p>
			
				<ul className="list-square">
		
					<li><strong>When</strong> the bell rang → “Vậy thì sao?”</li>
					<li className="list-none">→ Chưa có câu trả lời.</li>
					<li className="list-none">→ Phụ thuộc.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">Thử:</p>
			
				<ul className="list-square">
		
					<li>The bell rang → “Vậy thì sao?”</li>
					<li className="list-none">→ Bạn có thể trả lời “À, ừ thì nó reo thôi?”</li>
					<li className="list-none">→ Nhưng thực ra bản thân nó đã là một sự kiện hoàn chỉnh</li>
					<li className="list-none">→ Độc lập.</li>
			
				</ul>
			
			
			<h4 className="margin-y-40">Bài kiểm tra 2: Phép thử “thay bằng một danh từ”</h4>

			<p className="text-indent-whole">Đôi khi mệnh đề phụ thuộc làm chủ ngữ hoặc tân ngữ (noun clause).</p>

			<p className="text-indent-whole">Hãy thử thay nó bằng một từ như something hay that thing. Nếu thay được, rất có thể nó là mệnh đề danh từ – một loại mệnh đề phụ thuộc.</p>
			
				<ul className="list-square">
		
					<li>What he said surprised me.</li>
					<li className="list-none">Điều anh ấy nói làm tôi ngạc nhiên.</li>
			
				</ul>
					
			<p className="margin-top-20 text-indent-whole">Thay <strong>What he said</strong> bằng <strong>That thing</strong> Được</p>
			
				<ul className="list-square">
		
					<li>That thing surprised me.</li>
					<li className="list-none">Điều đó làm tôi ngạc nhiên.</li>
			
				</ul>
			
			<p className="margin-top-20 text-indent-whole">→ Đó là mệnh đề phụ thuộc.</p>

			{/* Lộ trình làm chủ mệnh đề phụ thuộc trong 2 tuần */}

			<h3 className="margin-y-50 text-center">Lộ trình làm chủ mệnh đề phụ thuộc trong 2 tuần</h3>

			<p>Thay vì học dàn trải, tôi đề nghị bạn thực hiện theo từng ngày cụ thể.</p>

			<h4 className="margin-y-40">Tuần 1 – Nhận diện và phân tích</h4>
			
				<ul className="list-square">
			
					<li>Ngày 1-2:</li>
					<li className="margin-bottom-20 list-none">Đọc một bài báo ngắn (ví dụ BBC, VOA). Dùng bút chì gạch chân tất cả các từ nối (who, which, that, because, although, when, while, as, if, unless, where, etc.). Mỗi khi thấy một từ đó, hãy xác định xem nó có bắt đầu một mệnh đề có chủ ngữ – động từ hay không.</li>
			
					<li>Ngày 3-4:</li>
					<li className="margin-bottom-20 list-none">Với mỗi mệnh đề phụ tìm được, hãy tách nó ra khỏi câu và đọc một mình. Cảm nhận sự “thiếu hụt”. Sau đó, ghép lại và chỉ ra mệnh đề chính đi kèm.</li>
			
					<li>Ngày 5-7:</li>
					<li className="list-none">Viết 5 câu phức mỗi ngày dựa trên các mẫu bạn đã đọc. Bắt chước là cách học nhanh nhất.</li>
			
				</ul>
			


			<h4 className="margin-y-40">Tuần 2 – Sản sinh chủ động</h4>
			
				<ul className="list-square">
			
					<li>Ngày 8-9:</li>
					<li className="margin-bottom-20 list-none">Lấy một đoạn văn toàn câu đơn do chính bạn viết. Khoanh tròn các cặp câu có liên quan về ý. Viết lại chúng thành câu phức với mệnh đề phụ thuộc.</li>
			
					<li>Ngày 10-11:</li>
					<li className="margin-bottom-20 list-none">Tập chuyển đổi vị trí mệnh đề phụ (đầu câu, cuối câu, chen giữa). Quan sát sự thay đổi về nhịp điệu và sự nhấn mạnh.</li>
			
					<li>Ngày 12-14:</li>
					<li className="list-none">Viết một đoạn văn ngắn (5-7 câu) chủ đề tự do, trong đó mỗi câu đều có ít nhất một mệnh đề phụ thuộc. Sau đó đọc to lên. Nếu nghe tự nhiên, bạn đã thành công.</li>
			
				</ul>
			

			{/* Một ví dụ hoàn chỉnh để bạn thấy toàn bộ quy trình */}

			<h3 className="margin-y-50 text-center">Một ví dụ hoàn chỉnh để bạn thấy toàn bộ quy trình</h3>

			<p>Chủ đề: Buổi sáng hôm qua.</p>

			<p className="margin-top-20">Hai câu đơn ban đầu:</p>
			
				<ul className="list-square">
			
					<li>I opened the window.</li>
					<li className="margin-bottom-20 list-none">Tôi mở cửa sổ.</li>
			
					<li>The sun was shining.</li>
					<li className="list-none">Mặt trời đang chiếu sáng.</li>
			
				</ul>

				<h4 className="margin-y-40">Bước 1: Chọn quan hệ</h4>

				<p className="text-indent-whole">Thời gian (khi tôi mở cửa sổ thì mặt trời đang chiếu).</p>


				<h4 className="margin-y-40">Bước 2: Chọn từ nối</h4>
					
				<p className="text-indent-whole">when hoặc as.</p>


				<h4 className="margin-y-40">Bước 3: Viết</h4>
						
	
			
				<ul className="list-square">
			
					<li><strong>When</strong> I opened the window, the sun was shining.</li>
					<li className="list-none">Khi tôi mở cửa sổ, mặt trời đang chiếu sáng.</li>
			
				</ul>

			<p className="margin-top-20">Thêm một ý nữa:</p>

				<ul className="list-square">
			
					<li>I felt happy.</li>
					<li className="list-none">Tôi cảm thấy vui.</li>
			
				</ul>

			<p className="margin-top-20">Quan hệ: nguyên nhân – kết quả (vì mặt trời chiếu nên tôi vui).</p>
					
			<p>Viết tiếp:</p>
			
				<ul className="list-square">
			
					<li><strong>When</strong> I opened the window, the sun was shining, <strong>so</strong> I felt happy.</li>
					<li className="margin-bottom-20 list-none">Khi tôi mở cửa sổ, mặt trời đang tỏa sáng, vì vậy tôi cảm thấy hạnh phúc.</li>

					<li className="list-none">Chú ý: <strong>so</strong> là <strong>FANBOYS</strong>, không phải từ nối mệnh đề phụ.</li>
			
				</ul>
			
			<p className="margin-top-20">Để dùng mệnh đề phụ, hãy dùng <strong>because</strong>:</p>
			
				<ul className="list-square">
			
					<li><strong>When</strong> I opened the window, I felt happy <strong>because</strong> the sun was shining.</li>
					<li className="list-none">Khi tôi mở cửa sổ, tôi cảm thấy vui vì mặt trời đang chiếu sáng.</li>
			
				</ul>


			{/* Kết luận: Đừng sợ, chỉ cần bắt đầu */}

			<h3 className="margin-y-50 text-center">Kết luận: Đừng sợ, chỉ cần bắt đầu</h3>

			<p>Mệnh đề phụ thuộc không phải một cấu trúc xa lạ. Bạn đã dùng nó hàng trăm lần mà có thể không để ý. Điều quan trọng là <strong>dùng có ý thức</strong>. Bắt đầu từ việc ghép hai câu đơn bằng một từ nối nhỏ. Rồi ba câu. Rồi thử đảo vị trí.</p>

			<p>Sai thì sửa. Người bản xứ cũng sai. Chỉ có điều họ sửa nhanh vì họ hiểu bản chất: mệnh đề phụ thuộc tồn tại là để làm cho câu chính trở nên rõ ràng và phong phú hơn.</p>

			<p>Hãy viết một câu ngay bây giờ, trong khung bình luận hoặc trong vở của bạn. Bắt đầu bằng <strong>Although</strong> hoặc <strong>Because</strong>. Bạn sẽ thấy nó không khó chút nào.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 16, 2026 · by DPSK and 🐝Mr. Bee Osn ·</span>
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