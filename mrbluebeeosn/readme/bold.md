Khuyến nghị cho bài viết blog của bạn

1/ Dùng <strong> là lựa chọn tốt nhất trong trường hợp của bạn vì:

Các câu hỏi "Why" (như "Tại sao bạn bắt đầu viết blog?") và mục liệt kê (như "Tháng 1:") thường là điểm nhấn quan trọng trong blog (khơi gợi suy nghĩ, mốc thời gian chính).
<strong> mang ngữ nghĩa, tốt cho SEO và trợ năng.
Không cần CSS, giữ mã đơn giản, đặc biệt khi bạn có nhiều câu/mục cần in đậm trong bài viết.
Phù hợp với blog_journey_page.html (các mốc như "Tháng 1:") và các đoạn văn chứa câu hỏi "Why".

<p>Chúng ta cần thảo luận. <strong>Tại sao bạn bắt đầu viết blog?</strong> <strong>Tại sao nó quan trọng?</strong> Nội dung khác.</p>
<ul>
  <li><strong>Tháng 1:</strong> Cập nhật nội dung.</li>
  <li><strong>Tháng 2:</strong> Viết bài mới.</li>
</ul>


2/ Dùng <b> nếu:

Bạn chỉ muốn in đậm để trang trí thẩm mỹ và không quan tâm đến ngữ nghĩa.
Tuy nhiên, <b> ít được khuyến khích so với <strong> hoặc <span> với CSS.

<p>Chúng ta cần thảo luận. <b>Tại sao bạn bắt đầu viết blog?</b> Nội dung khác.</p>
<ul>
  <li><b>Tháng 1:</b> Cập nhật nội dung.</li>
  <li><b>Tháng 2:</b> Viết bài mới.</li>
</ul>


3/ Dùng class với <span> nếu:

Bạn muốn thêm kiểu dáng khác ngoài in đậm (như màu chữ, màu nền) để trang trí.
Các câu hỏi/mục không cần mang ý nghĩa quan trọng.

<style>
  .highlight {
    font-weight: bold;
    color: blue;
  }
</style>
<p><span class="highlight">Tại sao tôi bắt đầu viết blog?</span> Nội dung khác.</p>
<ul>
  <li><span class="highlight">Tháng 1:</span> Cập nhật nội dung.</li>
</ul>


4/ Dùng class với <mark> nếu:

Bạn muốn nhấn mạnh ngữ nghĩa và thêm hiệu ứng highlight (nhưng cần CSS để bỏ nền vàng mặc định).

<style>
  .highlight {
    background-color: transparent;
    font-weight: bold;
  }
</style>
<p><mark class="highlight">Tại sao bạn bắt đầu viết blog?</mark> Nội dung khác.</p>
<ul>
  <li><mark class="highlight">Tháng 1:</mark> Cập nhật nội dung.</li>
</ul>