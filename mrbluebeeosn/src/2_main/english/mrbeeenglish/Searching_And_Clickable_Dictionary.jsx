import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Searching_And_Clickable_Dictionary() {
  return (<>

  <main className="image image2">
    
    <h4>by <HashLink smooth to="/english#mr-bee-osn-english-terms"><mark className="highlight-tertiary-padding-4-8">Mr. Bee Osn</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">Searching and clickable dictionary</h2>

    {/* This is the content of Mr. Bee Osn English Term. */}
    
    <p>→1️⃣ Vocabulary →2️⃣ Grammar →3️⃣ Pronunciation →4️⃣ Intonation →5️⃣ Fluency! 🌍</p>

    <p className="margin-top-50 text-small">by 🐝Mr. Bee Osn</p>
    
  </main>

  </>);
}