import { Link } from "react-router-dom";

export default function Home_Bookkeeping() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Bookkeeping Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="bookkeeping-terms">Bookkeeping Terms</h3>
    
    <ul className="list-border1 margin-bottom-50">

      <li><Link to="what-is-bookkeeping?">Bookkeeping</Link></li>

      {/* <li><Link to="bookkeeper?">Bookkeeper</Link></li>

      <li><Link to="accounts-receivable?">Accounts receivable</Link> (AR)</li>

      <li><Link to="accounts-payable?">Accounts payable</Link> (AP)</li>

      <li><Link to="journal-entry?">Journal entry</Link></li>

      <li><Link to="general-ledger?">General ledger</Link> (GL)</li>

      <li><Link to="trial-balance?">Trial balance</Link></li>

      <li><Link to="account-reconciliation?">Account reconciliation</Link></li> */}
      
    </ul>
    
  </main>

  </>);
}