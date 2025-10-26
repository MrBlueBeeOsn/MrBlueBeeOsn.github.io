import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ExternalLink from '@/components/ExternalLink';

export default function BookkeepingIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Bookkeeping Terms
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="bookkeeping-terms">Bookkeeping Terms</h3>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/bookkeeping/what-is-bookkeeping?">Bookkeeping</Link></li>

            <li><Link to="/bookkeeping/what-is-accounts-receivable?">Accounts receivable</Link> (AR)</li>

            <li><Link to="/bookkeeping/what-is-accounts-payable?">Accounts payable</Link> (AP)</li>

            <li><Link to="/bookkeeping/what-is-a-journal-entry?">Journal entry</Link></li>

            <li><Link to="/bookkeeping/what-is-a-general-ledger?">General ledger</Link> (GL)</li>

            <li><Link to="/bookkeeping/what-is-a-trial-balance?">Trial balance</Link></li>

            <li><Link to="/bookkeeping/what-is-account-reconciliation?">Account reconciliation</Link></li>

          </ul>

        </div>

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/bookkeeping/what-is-a-bookkeeper?">Bookkeeper</Link></li>

          </ul>

        </div>

      </div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="https://mrgreenbeeosn.github.io/#/accounting/what-is-accounting">Accounting  <sup><ExternalLink /></sup></Link></li>

          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}