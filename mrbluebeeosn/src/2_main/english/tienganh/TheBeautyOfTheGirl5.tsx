import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TheBeautyOfTheGirl5(): React.JSX.Element {

	const postId = "TheBeautyOfTheGirl5";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/tieng-anh#tieng-anh-terms"><mark className="highlight-tertiary-padding-4-8">Tiếng Anh</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">The Beauty of the Girl
															
				<sup><HashLink smooth to="/tieng-anh/the-beauty-of-the-girl-1">&nbsp;1&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-beauty-of-the-girl-2">&nbsp;2&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-beauty-of-the-girl-3">&nbsp;3&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-beauty-of-the-girl-4">&nbsp;4&nbsp;</HashLink>
				</sup>

				<sup><HashLink smooth to="/tieng-anh/the-beauty-of-the-girl-5">&nbsp;5&nbsp;</HashLink>
				</sup>

			</h1>

			<h4 className="margin-bottom-30 text-center">Lộ trình 7 ngày</h4>
			
				<p className="text-indent-whole">Ngày 1-2: Học chuyển đổi</p>

				<p className="text-indent-whole">Học 10 cụm từ/ngày:</p>

			<h4 className="margin-y-20"><strong>Ngày 1</strong>:</h4>
			
				<ol>
			
					<li>Hot coffee → Heat of coffee</li>

					<li>Cold water → Coldness of water</li>

					<li>Big house → Bigness of house</li>

					<li>Small car → Smallness of car</li>

					<li>Beautiful flower → Beauty of flower</li>
			
				</ol>
			
			<h4 className="margin-y-20"><strong>Ngày 2</strong>:</h4>
			
				<ol>
			
					<li value="6">Fast train → Speed of train</li>

					<li value="7">Slow turtle → Slowness of turtle</li>

					<li value="8">Happy child → Happiness of child</li>

					<li value="9">Strong man → Strength of man</li>

					<li value="10">Dark room → Darkness of room</li>
			
				</ol>

				<p className="margin-top-20 text-indent-whole">Dù "big", "small", "hot", "cold" rất dễ, vẫn phải luyện chuyển đổi để não tạo thói quen.</p>
			
			<h4 className="margin-y-20"><strong>Ngày 3-5</strong>: <strong>Luyện tập</strong></h4>

				<p className="margin-top-20 text-indent-whole">Đọc 10 câu ngắn/ngày:</p>

				<p className="margin-top-20 text-indent-whole">Ví dụ:</p>
			
				<ul className="list-square">
					
					<li>"The hot sun shines bright"</li>

					<li>"A beautiful bird sings sweet"</li>

					<li>"The big dog runs fast"</li>
			
				</ul>

				<p className="margin-top-20 text-indent-whole">Chuyển mọi tính từ thành danh từ!</p>

			<h4 className="margin-y-20"><strong>Ngày 6-7</strong>: <strong>Tự động hóa</strong></h4>

				<p className="text-indent-whole">Đọc không cần nghĩ:</p>

				<p className="text-indent-whole">Đọc bài báo ngắn, truyện đơn giản. Não tự động chuyển đổi!</p>

			{/* 1. Những sai lầm cần tránh */}

			<h3 className="margin-y-50 text-center">1. Những sai lầm cần tránh</h3>

			<h4 className="margin-y-20"><strong>Sai lầm 1</strong>: "<strong>Từ này dễ quá</strong>, <strong>không cần chuyển</strong>"</h4>
		
				<p className="text-indent-whole">Đừng bỏ qua từ dễ!</p>

				<p className="text-indent-whole">Dù "big", "small", "hot", "cold" rất dễ, vẫn phải luyện chuyển đổi để não tạo thói quen.</p>
			
			<h4 className="margin-y-20"><strong>Sai lầm 2</strong>: <strong>Chỉ đọc trong đầu</strong></h4>

				<p className="text-indent-whole">Hãy nói to ra!</p>

				<p className="text-indent-whole">"The beauty of the girl" - Nói to 10 lần!</p>

				<p className="text-indent-whole">Nói to giúp não ghi nhớ nhanh hơn gấp 10 lần.</p>

			<h4 className="margin-y-20"><strong>Sai lầm 3</strong>: <strong>Luyện 2 ngày rồi bỏ</strong></h4>

				<p className="text-indent-whole">Phải luyện đủ 7 ngày!</p>

				<p className="text-indent-whole">Não cần ít nhất 7 ngày để tạo thói quen mới. Đừng bỏ cuộc!</p>

			{/* 2. Kiểm tra tiến bộ */}

			<h3 className="margin-y-50 text-center">2. Kiểm tra tiến bộ</h3>

			<h4 className="margin-y-20"><strong>Test 1</strong>: <strong>Đọc câu này trong 2 giây</strong></h4>

				<p className="text-indent-whole">"A beautiful girl walked down a quiet street"</p>

				<p className="text-indent-whole">Nếu đọc xong trong 2 giây mà không cần dừng → Bạn đã thành công!</p>
			
			<h4 className="margin-y-20"><strong>Test 2</strong>: <strong>Đọc đoạn văn</strong></h4>

				<p className="text-indent-whole">"The hot sun was shining. A small bird was singing. The big tree gave cool shade."</p>

				<p className="text-indent-whole">Nếu đọc xong trong 5 giây → Bạn đã giỏi rồi!</p>

			<h4 className="margin-y-20"><strong>Test 3</strong>: <strong>Cảm giác</strong></h4>

				<p className="text-indent-whole">Khi đọc tiếng Anh bây giờ:</p>
			
				<ul className="list-square">

					<li>Nhẹ nhàng hơn? ✓</li>
					
					<li>Nhanh hơn? ✓</li>

					<li>Ít mệt hơn? ✓</li>
			
				</ul>

			<p className="margin-top-20 text-indent-whole">Nếu có 3 dấu tích → Chúc mừng!</p>

			{/* 3. Hành động ngay! */}

			<h3 className="margin-y-50 text-center">3. Hành động ngay!</h3>

			<h4 className="margin-y-20"><strong>Bước 1</strong>: <strong>Viết ra giấy</strong></h4>

				<p className="margin-top-20 text-indent-whole">Viết 10 cụm từ này:</p>
			
				<ol>
			
					<li>Beautiful girl → Beauty of girl</li>
			
					<li>Hot coffee → Heat of coffee</li>
			
					<li>Cold water → Coldness of water</li>

					<li>Big dog → Bigness of dog</li>
			
					<li>Small cat → Smallness of cat</li>
			
					<li>Fast car → Speed of car</li>

					<li>Happy baby → Happiness of baby</li>
			
					<li>Strong lion → Strength of lion</li>
			
					<li>Bright light → Brightness of light</li>

					<li>Dark night → Darkness of night</li>
			
				</ol>

			<h4 className="margin-y-20"><strong>Bước 2</strong>: <strong>Đọc to 5 lần</strong></h4>

				<p className="text-indent-whole">Mỗi cụm đọc to 5 lần!</p>

			<h4 className="margin-y-20"><strong>Bước 3</strong>: <strong>Luyện mỗi ngày</strong></h4>

				<p className="text-indent-whole">7 ngày liên tục, mỗi ngày 10 phút = Thay đổi cách đọc tiếng Anh mãi mãi!</p>
			
			{/* 4. Kết luận */}
			
			<h3 className="margin-y-50 text-center">4. Kết luận</h3>

			<p className="margin-top-20">Bạn đọc tiếng Anh chậm không phải vì:</p>
			
				<ul className="list-square">

					<li>Từ vựng ít ❌</li>

					<li>Ngữ pháp yếu ❌</li>

					<li>Thiếu trí thông minh ❌</li>
			
				</ul>

			<p className="margin-top-20">Mà vì:</p>
			
				<ul className="list-square">

					<li className="list-none"><strong>Bạn đang dịch sai thứ tự</strong>! ✓</li>
			
				</ul>

			<p className="margin-top-20">Từ hôm nay, đừng dịch:</p>
			
				<ul className="list-square">

					<li className="list-none">❌ Cô gái xinh</li>

					<li className="list-none">❌ Cà phê nóng</li>

					<li className="list-none">❌ Nước lạnh</li>
			
				</ul>

			<p className="margin-top-20">Hãy dịch xuôi:</p>

			<ul className="list-square">

					<li className="list-none">✅ The beauty of a girl</li>

					<li className="list-none">✅ The heat of coffee</li>

					<li className="list-none">✅ The coldness of water</li>
			
				</ul>

			<p className="margin-top-20">7 ngày. 10 phút mỗi ngày. Đọc tiếng Anh nhanh gấp đôi.</p>

			<p>Bắt đầu ngay hôm nay!</p>

			{/* 5. Thử ngay bây giờ: */}

			<h3 className="margin-y-50 text-center">5. Thử ngay bây giờ:</h3>
					
			<p>Nhìn ra xung quanh và tập dịch xuôi:</p>

			<ul className="list-square">

					<li>Bầu trời xanh → <strong>The blueness of the sky</strong></li>
					
					<li>Cây cao → <strong>The height of the tree</strong></li>

					<li>Gió mát → <strong>The coolness of the wind</strong></li>
			
				</ul>

			<p className="margin-top-20">Chào mừng bạn đến với cách đọc tiếng Anh đúng! 🎯</p>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>December 30, 2025 · by Claud and 🐝Mr. Bee Osn ·</span>
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