import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Link } from "react-router-dom";

export default function MrBeeOsn() {
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
          <li><span className="month">Aug.17</span>🚀 Diligently building valuable Accounting & English blogs.</li>
          <li><span className="month"></span>What is <a href="https://mrgreenbeeosn.github.io/accounting/accounting.html">accounting</a>?</li>
          <li><span className="month"></span>What is <a href="https://mrbluebeeosn.github.io/bookkeeping/bookkeeping.html">bookkeeping</a>?</li>
          <li><span className="month"></span>What is <a href="/Bookkeeping/Bookkeeping.html">Bookkeeping</a>?</li>
          <li><span className="month"></span>Write & update</li>
          <li><span className="month">Sept.</span>Write & update</li>
        </ul>

      </main>

  </>);
}