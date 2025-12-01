import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ExternalLink from '@/components/icon/ExternalLink';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';
import ADELER from '@/components/method/ADELER';

export default function BookkeepingIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Bookkeeping Terms
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="bookkeeping-terms">Bookkeeping Terms</h3>

      <div className="table-search margin-bottom-50">
                        
        <SearchComponent />
        
        <VideoSearch />

        <ADELER />
                          
      </div>

      <div className="flex-container">

        <div className="sub-box">

          {/* =============================
              Người lập trình
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/bookkeeping/what-is-bookkeeping?">Bookkeeping</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/bookkeeping/what-is-accounts-receivable?">Accounts receivable</Link>&nbsp;(AR)
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/bookkeeping/what-is-accounts-payable?">Accounts payable</Link>&nbsp;(AP)
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/bookkeeping/what-is-a-journal-entry?">Journal entry</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/bookkeeping/what-is-a-general-ledger?">General ledger</Link>&nbsp;(GL)
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/bookkeeping/what-is-a-trial-balance?">Trial balance</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/bookkeeping/what-is-account-reconciliation?">Account reconciliation</Link>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="sub-box">

          {/* =============================
              Bookkeeper
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/bookkeeping/what-is-a-bookkeeper?">Bookkeeper</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

      <div className="flex-container">

        <div className="sub-box">

          {/* =============================
              Accounting Links
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="https://mrgreenbeeosn.github.io/#/accounting/what-is-accounting">Accounting  <sup><ExternalLink /></sup></Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}