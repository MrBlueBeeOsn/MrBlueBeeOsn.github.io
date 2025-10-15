import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import MrBeeOsnTopic from '@/components/MrBeeOsnTopic';
import ExternalLink from '@/components/ExternalLink';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function JourneyIndex(): React.JSX.Element {

  const postId = "JourneyIndex";

  return (<>
     
  <main className="image image4">

    {/* =============================
        Mr.Bee Osn Topic
    ============================= */}
    
      <MrBeeOsnTopic />

    {/* =============================
        About
    ============================= */}

    <h2 className="margin-y-50 text-center">Journey</h2>

    {/* =============================
          Tháng 8 + 9
    ============================= */}

    <div className="table-container">
      <table>
        <thead>

          <tr>
            <th>Date</th>
            <th>Updated</th>
          </tr>

        </thead>

        <tbody>

          <tr>
              <td>Aug. 17</td>
              <td>Diligently building valuable Accounting & English blogs.</td>
          </tr>

          <tr>
              <td>Sept. 20</td>
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

          <tr>
              <td>Oct. 15</td>
              <td>Successfully migrated to TypeScript.</td>
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
        <span>by 🐝Mr. Bee Osn ·</span>
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