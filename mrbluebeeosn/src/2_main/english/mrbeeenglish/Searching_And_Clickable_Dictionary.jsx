import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Blog from '/src/components/Blog';

export default function Searching_And_Clickable_Dictionary() {
  return (<>

  <main className="image image2">
    
    <h4>by <HashLink smooth to="/english#mr-bee-osn-english-terms"><mark className="highlight-tertiary-padding-4-8">Mr. Bee Osn</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">Search & Click Dictionary</h2>

    {/* This is the content of Mr. Bee Osn English Term. */}

    <div className="margin-bottom-50 margin-top-30 table-container">
    
      <div className="text-border1 padding-20">

        <Blog />

        <div  className="flex-container">

          <HashLink smooth to="/english#english-terms">
          <mark className="highlight-tertiary-padding-2-4">English</mark>
          </HashLink>

          <HashLink smooth to="/english#grammar-terms">
            <mark className="highlight-tertiary-padding-2-4">Grammar</mark>
          </HashLink>

          <HashLink smooth to="/english#pronunciation-terms">
            <mark className="highlight-tertiary-padding-2-4">Pronunciation</mark>
          </HashLink>

        </div>

        <div  className="flex-container">
            
          <HashLink smooth to="/english#tieng-anh-terms">
            <mark className="highlight-tertiary-padding-2-4">Tiếng Anh</mark>
          </HashLink>

          <HashLink smooth to="/english#vocabulary-terms">
            <mark className="highlight-tertiary-padding-2-4">Từ vựng</mark>
          </HashLink>

        </div>

      </div>
    
    </div>

    <p className="margin-top-50 text-small">by 🐝Mr. Bee Osn</p>
    
  </main>

  </>);
}