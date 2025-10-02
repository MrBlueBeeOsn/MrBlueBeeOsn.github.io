import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SearchBar from "../components/SearchBar";
import Blog from '../components/Blog';

export default function Home_Search() {
return (<>
     
<main className="image image3">
            
  <h3 className="margin-top-50 margin-bottom-20 text-center">Concept Hub</h3>

      {/* This is the content of Mr. Bee Osn English Term. */}

      <div className="table-container">

        <Blog />

        <div className="post-card">

          <div  className="flex-container">
              
            <HashLink smooth to="/bookkeeping#bookkeeping-terms">
              <mark className="highlight-tertiary-padding-2-4">Bookkeeping</mark>
            </HashLink>

          </div>

          <div  className="flex-container">

            <HashLink smooth to="/english#english-terms">
            <mark className="highlight-tertiary-padding-2-4">English</mark>
            </HashLink>

            <HashLink smooth to="/grammar#grammar-terms">
              <mark className="highlight-tertiary-padding-2-4">Grammar</mark>
            </HashLink>

            <HashLink smooth to="/pronunciation#pronunciation-terms">
              <mark className="highlight-tertiary-padding-2-4">Pronunciation</mark>
            </HashLink>

          </div>

          <div  className="flex-container">
              
            <HashLink smooth to="/tieng-anh#tieng-anh-terms">
              <mark className="highlight-tertiary-padding-2-4">Tiếng Anh</mark>
            </HashLink>

            <HashLink smooth to="/english#vocabulary-terms">
              <mark className="highlight-tertiary-padding-2-4">Từ vựng</mark>
            </HashLink>

          </div>

        </div>
      
      </div>

    </main>

  </>);
}