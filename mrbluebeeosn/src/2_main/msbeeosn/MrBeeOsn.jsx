import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ExternalLink from '/src/components/ExternalLink';
import EyeIcon from '/src/components/EyeIcon';
import ViewCounter from '/src/components/ViewCounter';
import LikeButton from '/src/components/LikeButton';

export default function MrBeeOsn() {

  const postId = "MrBeeOsn";

  return (<>
     
  <main className="image image4">

    <h2 className="margin-y-50 text-center">Mr. Bee Osn</h2>

      <ul className="list-border">

        <li>Welcome everyone!</li>

        <li>Đây là website <mark className="highlight-tertiary-padding-0-4">Bookkeeping + English</mark> nhiều trang nội bộ đầu tiên của mình!</li>
        
        <li>Trang web này được xây dựng để học <mark className="highlight-tertiary-padding-0-4">Bookkeeping & English</mark> cơ bản.</li>

      </ul>

    {/* =============================
          Tháng 8
    ============================= */}

    <h2 className="year" id="2025">2025</h2>

      <ul className="month-list">

        <li><span className="month">Mr. Bee - Ong siêng năng</span></li>

        <li><span className="month"></span>🚀 What is <Link to="https://mrgreenbeeosn.github.io/#/accounting/what-is-accounting">accounting <sup><ExternalLink /></sup></Link>?</li>

        <li><span className="month"></span>🚀 What is <Link to="/bookkeeping/what-is-bookkeeping?">bookkeeping</Link>?</li>

        <li><span className="month"></span>🚀 What is <Link to="https://mrblackbeeosn.github.io/#/programming/what-is-programming">programming <sup><ExternalLink /></sup></Link>?</li>
      
        
      </ul>

    {/* =============================
          Tháng 9
    ============================= */}

    <div className="table-container margin-top-50">
      <table>
        <thead>

          <tr>
            <th>Date</th>
            <th>Updated</th>
          </tr>

        </thead>

        <tbody>

          <tr>
              <td>Aug.17</td>
              <td>Diligently building valuable Accounting & English blogs.</td>
          </tr>

          <tr>
              <td>Sept.20</td>
              <td>Successfully migrated to React.</td>
          </tr>

          <tr>
              <td>21</td>
              <td>Restructure the codebase</td>
          </tr>
          
          <tr>
              <td>22</td>
              <td>Consistently refining the structure</td>
          </tr>

          <tr>
              <td>23</td>
              <td>Ongoing updates and insightful blog posts.</td>
          </tr>

          <tr>
              <td>24</td>
              <td>Consistently sharing insights through blog posts.</td>
          </tr>

        </tbody>
      </table>
  
      <div className="margin-top-30">

        <p>📌 Technology:</p>

        <ul className="list-square">

          <li className="list-none">⏱️ Seamless user experience with SPA — no page reloads.</li>

          <li className="list-none">🔧 Reusable components like header, footer, sidebar, and forms make the code cleaner and easier to maintain.</li>

        </ul>
        
      </div>

    </div>

    <div className="viewcounter">

			<div className="post-date no-margin">
				<span> ·</span>
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

  </main>

  </>);
}