import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TheGaitOfEnglish2(): React.JSX.Element {

	const postId = "TheGaitOfEnglish2";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">The gait of the English
												
				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-1">&nbsp;1&nbsp;</HashLink>
				</sup>
				
				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-5">&nbsp;5&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-6">&nbsp;6&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-7">&nbsp;7&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-gait-of-english-8">&nbsp;8&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">SVOMPT: ĐƯỜNG THẲNG ĐỨNG ĐƯA BẠN LÊN ĐỈNH CÂU TIẾNG ANH</h4>

			<p>Bạn đã bao giờ tự hỏi: tại sao khi nói tiếng Anh, người ta không bao giờ nói “Yesterday I to school went”? Và tại sao câu “I ate an apple quickly in the kitchen last night” lại nghe tự nhiên đến thế?</p>

			<p>Bởi vì ẩn sâu bên dưới mọi câu tiếng Anh chuẩn là một trật <strong>tự bất di bất dịch</strong>: <strong>S</strong> – <strong>V</strong> – <strong>O</strong> – <strong>M</strong> – <strong>P</strong> – <strong>T</strong>.</p>

			<p className="margin-top-20">Và có một cách hình dung không chỉ giúp bạn nhớ trật tự này mà còn khiến bạn cảm nhận nó trong từng hơi thở khi nói:</p>

			<p className="margin-top-20">Hãy tưởng tượng <strong>một đường thẳng đứng</strong>, <strong>từ dưới lên trên</strong>, <strong>từ gần đến xa</strong>, <strong>lao thẳng về phía trước</strong>.</p>

			{/* 1. Đường thẳng không nằm ngang */}
			
			<h3 className="margin-y-50 text-center">1. Đường thẳng không nằm ngang</h3>

			<p>Trong thế giới của những người học ngoại ngữ, có một ranh giới vô hình giữa việc "biết" ngữ pháp và việc "nói" trôi chảy. Sự khác biệt thường nằm ở cách chúng ta hình dung câu chữ trong đầu.</p>

			<p>Quên những hàng chữ ngang tẻ nhạt trên trang giấy đi. Trong tư duy thực sự khi nói, không có gì nằm phẳng lặng. Mỗi câu bạn thốt ra là một <strong>chuyển động</strong>.</p>
			
			<p>Hãy hình dung một mũi tên bắn từ dưới đất lên bầu trời. Điểm bắt đầu ở <strong>dưới thấp</strong>, <strong>gần với bạn</strong>. Rồi nó vút lên, mỗi khoảnh khắc một xa, cho đến khi biến mất ở phía trước xa xôi.</p>
					
			<p>Đó chính là lộ trình của một câu tiếng Anh.</p>

			{/* 2. Sáu bậc của đường thẳng đứng */}
			
			<h3 className="margin-y-50 text-center">2. Sáu bậc của đường thẳng đứng</h3>

			<p>Hãy chia đường thẳng ấy thành sáu bậc, từ dưới lên trên:</p>
			
				<ul className="list-square">

					<li><strong>Bậc 6</strong> – <strong>T</strong> (<strong>Time</strong> – <strong>Thời gian</strong>):</li>
					<li className="margin-bottom-20 list-none">Đỉnh cao nhất, xa nhất, cũng là bậc cuối cùng. Khi nào? Thời gian không bao giờ đứng ở đầu câu trong trật tự tự nhiên. Nó ở tận cùng – bởi lẽ thời gian là thứ mơ hồ nhất, xa xôi nhất. Bạn chỉ nhắc đến nó sau khi đã nói xong mọi thứ khác.</li>

					<li><strong>Bậc 5</strong> – <strong>P</strong> (<strong>Place</strong> – <strong>Địa điểm</strong>):</li>
					<li className="margin-bottom-20 list-none">Ở đâu? Lại một bậc cao hơn. Không gian hiện ra, nhưng không gian ở đây không phải là trung tâm; nó lùi về phía sau cánh gà. Bạn càng lên cao, càng xa cái mốc khởi đầu.</li>

					<li><strong>Bậc 4</strong> – <strong>M</strong> (<strong>Manner</strong> – <strong>Cách thức</strong>)</li>
					<li className="margin-bottom-20 list-none">Thế nào? Bắt đầu xa dần khỏi cái lõi S-V-O. Cách thức là chi tiết bổ sung, như lớp áo khoác nhẹ phía ngoài. Nó không quan trọng bằng ai làm gì, nhưng lại cần thiết để câu sống động.</li>

					<li><strong>Bậc 3</strong> – <strong>O</strong> (<strong>Object</strong> – <strong>Tân ngữ</strong>)</li>
					<li className="margin-bottom-20 list-none">Người hoặc vật nhận chịu hành động. Bậc thứ ba – xa hơn một chút, nhưng vẫn nằm trong tầm với. Bạn không thể có O nếu chưa qua V, cũng như không thể bước lên bậc ba nếu chưa đặt chân lên bậc hai.</li>

					<li><strong>Bậc 2</strong> – <strong>V</strong> (<strong>Verb</strong> – <strong>Động từ</strong>)</li>
					<li className="margin-bottom-20 list-none">Ngay trên đầu chủ ngữ. Là <strong>hành động</strong> hoặc <strong>trạng thái</strong>. Bạn bước lên một bậc – thế giới bắt đầu chuyển động.</li>

					<li><strong>Bậc 1</strong> – <strong>S</strong> (<strong>Subject</strong> – <strong>Chủ ngữ</strong>)</li>
					<li className="margin-bottom-20 list-none">Dưới cùng, gần bạn nhất. Là cái ai hoặc cái gì khởi đầu mọi ý định. Nó như điểm tựa, như mặt đất dưới chân: vững chãi, rõ ràng, không thể thiếu.</li>
			
				</ul>

			{/* 3. Từ gần đến xa, hướng về phía trước */}
			
			<h3 className="margin-y-50 text-center">3. Từ gần đến xa, hướng về phía trước</h3>

			<p>Điều kỳ diệu là: đường thẳng đứng này cũng chính là đường thẳng <strong>từ gần đến xa</strong>. Khi bắt đầu câu, bạn đang ở rất gần – gần với bản thân (chủ ngữ), gần với hành động (động từ). Càng về cuối, bạn càng đi xa – xa vào không gian (địa điểm), xa vào thời gian (khi nào).</p>

			<p>Và tất cả đều <strong>hướng về phía trước</strong>. Không bao giờ lùi.</p>

			<p className="margin-top-20">Trong thực tế khi nói, não bộ không thể quay lại sắp xếp lại trật tự. Nó phải phát ra từng từ theo một tuyến tính duy nhất. Chính vì vậy, người bản xứ – dù không biết đến công thức SVOMPT – vẫn tự động đặt yesterday ở cuối câu. Họ đã “ngấm” cái đường thẳng đứng ấy từ nhỏ.</p>

			{/* 4. Khi viết và khi nói */}
			
			<h3 className="margin-y-50 text-center">4. Khi viết và khi nói</h3>

			<p>Khi viết, chúng ta ép đường thẳng đứng ấy nằm gọn trên một dòng ngang – đó là một sự thỏa hiệp với giấy mực. Nhưng khi nói, hãy để nó <strong>đứng thẳng</strong>. Hãy tưởng tượng mỗi câu thoát ra từ miệng mình là một mũi tên bắn từ dưới lên, từ gần đến xa, rồi tan biết vào không trung.</p>

			<p className="margin-top-20">Chính sự hình dung này – sống động, có chiều cao, có khoảng cách – sẽ khắc sâu trật tự từ vào tiềm thức. Bạn sẽ không còn phải tự hỏi: “Thời gian để ở đâu nhỉ?” Bạn chỉ cần nhìn lên bậc cao nhất của con dốc thẳng đứng.</p>

			{/* 5. Một vài biến tấu – nhưng không phá vỡ đường thẳng */}
			
			<h3 className="margin-y-50 text-center">5. Một vài biến tấu – nhưng không phá vỡ đường thẳng</h3>

			<p>Tất nhiên, tiếng Anh có những ngoại lệ. Đôi khi người ta đưa thời gian lên đầu để nhấn mạnh: “Yesterday, I met her.” Lúc này, trong tưởng tượng, họ như <strong>leo một mạch lên đỉnh rồi lại tụt xuống</strong> – được phép, nhưng không phải là lẽ thường. Và dù sao, phần còn lại của câu vẫn tuân theo SVOMPT: I met her (S-V-O) rồi mới đến M, P nếu có.</p>

			<p className="margin-top-20">Trạng từ tần suất (always, never, often) thường chen giữa S và V – một bậc phụ rất nhỏ, nhưng vẫn nằm trên đường thẳng. Hãy coi đó là những bậc lửng – không làm gãy trật tự tổng thể.</p>

			{/* 6. Làm sao để luyện tập con đường thẳng đứng này? */}
			
			<h3 className="margin-y-50 text-center">6. Làm sao để luyện tập con đường thẳng đứng này?</h3>

			<p>Việc coi SVOMPT là một đường chạy thẳng tắp giúp giải quyết ba vấn đề lớn của người học:</p>
			
				<ol>

					<li value="1"><strong>Vẽ trong đầu bốn bước leo dốc</strong>:</li>
					<li className="margin-bottom-20 list-none">Trước khi nói bất kỳ câu nào, hãy hình dung một đường kẻ dọc. Gắn nhãn S ở đáy, rồi V, O, M, P, T lần lượt phía trên. Sau đó phát âm từng từ, mắt nhìn lên cao dần.</li>

					<li value="2"><strong>Viết câu theo chiều dọc</strong>:</li>

					<li className="margin-bottom-20 list-none">Không phải hàng ngang. Hãy viết:</li>

					<li className="list-none">T</li>
					<li className="list-none">P</li>
					<li className="list-none">M</li>
					<li className="list-none">O</li>
					<li className="list-none">V</li>
					<li className="list-none">S</li>

					<li className="margin-bottom-20 list-none"><strong>Từ trên xuống cho dễ đọc</strong> rồi đọc ngược lên từ dưới. Cảm nhận sự leo thang.</li>

					<li value="3"><strong>Nói chậm như bước lên thang</strong>:</li>

					<li className="margin-top-20 list-none">“every night” (đỉnh).</li>
					<li className="list-none">“in my room” (gần đỉnh)</li>
					<li className="list-none">“quietly” (cao hơn)</li>
					<li className="list-none">“an apple” (cao)</li>
					<li className="list-none">“eat” (bước)</li>
					<li className="margin-bottom-20 list-none">“I” (chân chạm đất)</li>

					<li className="margin-bottom-20 list-none">Và câu kết thúc.</li>
			
				</ol>

			{/* Lời kết: Cảm nhận trật tự, không học vẹt */}
			
			<h3 className="margin-y-50 text-center">Lời kết: Cảm nhận trật tự, không học vẹt</h3>

			<p>SVOMPT không phải là một công thức khô khan cần nhồi nhét. Nó là <strong>dáng đi của tiếng Anh</strong> – một dáng đi thẳng đứng, bắt đầu từ điểm tựa dưới chân và phóng về phía trước xa xôi.</p>

			<p>Một khi bạn thực sự <strong>cảm nhận</strong> được đường thẳng ấy – từ gần đến xa, từ dưới lên trên – bạn sẽ không bao giờ nhầm vị trí của at school hay yesterday nữa. Bạn sẽ tự tin thốt ra những câu như:</p>

			<p>“She played the piano beautifully at the concert last night.”</p>

			<p>Hãy thử leo bậc thang đó. Dưới chân là She. Bước lên: played. Cao hơn: the piano. Cao hơn nữa: beautifully. Gần đỉnh: at the concert. Đỉnh cao nhất: last night.</p>

			<p>Đó. Bạn vừa đi một đường thẳng đứng hoàn hảo. Và bạn đã nói tiếng Anh đúng như người bản xứ – không cần suy nghĩ, chỉ cần hình dung.</p>

			<p className="margin-top-20"><strong>Hãy bắt đầu với chính câu bạn vừa đọc</strong>. Đóng bài viết này lại, ngước mắt lên cao và nói một điều gì đó theo đúng đường thẳng từ dưới lên. Bạn sẽ thấy: trật tự không còn là nỗi sợ, mà là một chuyến bay.</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>May 14, 2026 · by DPSK and 🐝Mr. Bee Osn ·</span>
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