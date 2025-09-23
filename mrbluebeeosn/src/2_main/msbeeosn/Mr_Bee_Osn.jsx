import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Mr_Bee_Osn() {
  return (<>
     
      <main className="image image3">
    
        <h2 className="margin-y-50 text-center">Mr. Bee Osn</h2>

        <ul className="list-border">

          <li>Welcome everyone!</li>

          <li>Đây là website <mark className="highlight2">Bookkeeping + English</mark> nhiều trang nội bộ đầu tiên của mình!</li>
          
          <li>Trang web này được xây dựng để học <mark className="highlight2">Bookkeeping & English</mark> cơ bản.</li>

        </ul>

        <h2 className="year" id="2025">2025</h2>

        <ul className="month-list">

        {/* =============================
              Tháng 8
        ============================= */}

          <li><span className="month">Aug.17</span>🚀 Diligently building valuable Accounting & English blogs.</li>

          <li><span className="month"></span>What is <Link to="https://mrgreenbeeosn.github.io/#/accounting/what-is-accounting">accounting</Link>?</li>

          <li><span className="month"></span>What is <Link to="/bookkeeping/what-is-bookkeeping?">bookkeeping</Link>?</li>

          <li><span className="month"></span>What is <Link to="https://mrblackbeeosn.github.io/#/programming/what-is-programming">programming</Link>?</li>

          <li><span className="month"></span>Write & update</li>

        {/* =============================
              Tháng 9
        ============================= */}

          <li><span className="month">Sept.</span>Write & update</li>

          <li><span className="month">Sept.20</span>Chúc mừng Mr.Bee Osn đã chuyển sang ReactJS 🎉</li>

          <li><span className="month"></span>⏱️ Không tải lại trang (SPA - Single Page Application). Giúp trải nghiệm người dùng mượt mà hơn, không bị gián đoạn khi chuyển trang.</li>

          <li><span className="month"></span>🔧 Tái sử dụng component Header, footer, sidebar, form… đều có thể được viết thành các component tái sử dụng, giúp code gọn gàng và dễ bảo trì.</li>

          <li><span className="month">Sept.21</span>Rebuild struture</li>

          <li><span className="month">Sept.22</span>-</li>

          <li><span className="month">Sept.23</span>-</li>

          <li><span className="month">Sept.24</span>Write & update</li>

        </ul>

      </main>

  </>);
}