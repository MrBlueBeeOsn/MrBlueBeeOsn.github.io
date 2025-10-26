import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function TrialBalance(): React.JSX.Element {

  const postId = "TrialBalance";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/bookkeeping#bookkeeping-terms"><mark className="highlight-tertiary-padding-4-8">Bookkeeping</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is a trial balance?</h1>

      {/* This is the content of Bookkeeping Term. */}

      <p>A <strong>trial balance</strong> in accounting is like a giant checklist to ensure everything is balanced in the company's books. It's a report that lists all the accounts in the general ledger and their ending balances, categorized as either debits or credits. The main goal is to see if the total debits equal the total credits, which signifies that the accounting records are balanced.</p>

      <p className="margin-top-20">Here's a deeper look at <strong>trial balances</strong>:</p>

      <h4 className="margin-y-50 text-center">Balancing the Books:</h4>

      <p>Imagine you have a scale with two sides. On one side, you place all the debits (like money spent), and on the other side, you put all the credits (like money received). In a perfect scenario, both sides should balance out. A <strong>trial balance</strong> helps ensure this by showing if the total debits match the total credits in the accounting system.</p>

      <h4 className="margin-y-50 text-center">What it Includes:</h4>

      <p>A <strong>trial balance</strong> typically includes:</p>

        <ul className="list-square">

          <li><strong>Account Names</strong>: Each account in the general ledger (like Cash, Accounts Receivable, Inventory, etc.) is listed.</li>

          <li><strong>Debit Balance</strong>: The total amount of debits for each account.</li>

          <li><strong>Credit Balance</strong>: The total amount of credits for each account.</li>

        </ul>

      <h4 className="margin-y-50 text-center">Preparation Process:</h4>

      <p>After recording all transactions for a specific period (usually a month or quarter), accountants calculate the ending balance for each account in the general ledger. These ending balances are then transferred to the <strong>trial balance</strong>.</p>
      
      <h4 className="margin-y-50 text-center">Importance:</h4>

      <p>A <strong>trial balance</strong> serves several purposes:</p>

        <ul className="list-square">

          <li><strong>Error Detection</strong>: If the total debits don't equal the total credits, it indicates a potential error in the accounting records. This prompts the accountant to investigate and find the mistake.</li>

          <li><strong>Verification</strong>: A balanced <strong>trial balance</strong> provides a basic level of assurance that the accounting system is accurate and complete.</li>

          <li><strong>Starting Point</strong>: The <strong>trial balance</strong> serves as a starting point for preparing financial statements like the income statement and balance sheet.</li>

        </ul>

      <h4 className="margin-y-50 text-center">Limitations:</h4>

      <p>While a balanced <strong>trial balance</strong> indicates no mathematical errors, it doesn't guarantee the complete absence of errors. For example, a transaction might be posted to the wrong account, even though the debits and credits balance.</p>

      <h4 className="margin-y-50 text-center">Unadjusted vs. Adjusted Trial Balance: </h4>
    
      <p>There are two main types of trial balances:</p>

        <ul className="list-square">

          <li><strong>Unadjusted Trial Balance</strong>: This is the initial <strong>trial balance</strong> prepared after summarizing the general ledger accounts. It doesn't consider any necessary adjustments like depreciation or accrued expenses.</li>

          <li><strong>Adjusted Trial Balance</strong>: This is a revised <strong>trial balance</strong> prepared after making necessary adjustments to ensure the financial statements accurately reflect the company's financial position and performance.</li>

        </ul>
      
      <p className="margin-top-20">In conclusion, a <strong>trial balance</strong> is a fundamental tool in accounting that helps ensure the accuracy and completeness of the company's financial records.</p>

      {/* =============================
            🌻 Think simply!
      ============================= */}

      <hr className="hr-short"/>

      <h2 className="margin-bottom-50 text-center">🌻 Think simply!</h2>

      <p>Imagine you have a big jar of jellybeans! Some jellybeans are the ones you earned from doing chores, and some are ones you spent on treats. A <strong>trial balance</strong> is like counting all the "earned" jellybeans and all the "spent" jellybeans to make sure you have the same amount of each kind.</p>

      <p className="margin-top-20">Here's how it works:</p>

        <ul className="list-square">

          <li><strong>Jellybean jar</strong> = <strong>Business</strong>: Businesses are like grown-up jellybean jars, only instead of candy, they have money. They earn money by selling things (like lemonade or toys) and spend money on things they need (like lemons for lemonade or a store to sell their toys in).</li>

          <li><strong>Different flavors</strong> = <strong>Accounts</strong>: Imagine different flavors of jellybeans representing different ways the business gets or spends money. Red jellybeans could be money from selling things ("sales"), and green jellybeans could be money spent on supplies ("expenses"). These are called "accounts".</li>

          <li><strong>Counting time</strong>! A <strong>trial balance</strong> is like counting all the red jellybeans and all the green jellybeans separately and checking if you have the same number of each. If you have the same amount, everything is organized. If not, maybe you ate more jellybeans than you earned and need to fix it!</li>

        </ul>
      
      <h4 className="margin-y-50 text-center">Why is a trial balance important?</h4>

        <ul className="list-square">

          <li><strong>Catching mix-ups</strong>: Just like you might accidentally put a red jellybean in the green pile, businesses might sometimes make mistakes when adding up their money. A <strong>trial balance</strong> helps them find those mistakes.</li>

          <li><strong>No lost jellybeans</strong>: If the red and green piles don't match, it means some jellybeans (money) might be missing! A <strong>trial balance</strong> helps businesses find the missing money.</li>

          <li><strong>Jellybean party preparation</strong>: Once you know all the jellybeans are organized and counted, you can plan a fun jellybean party! A <strong>trial balance</strong> helps businesses get everything ready for making important grown-up money decisions!</li>

        </ul>
    
      <p className="margin-top-20">Things to remember about <strong>trial balances</strong>:</p>

        <ul className="list-square">

          <li><strong>Just a snapshot</strong>: A <strong>trial balance</strong> doesn't show you every single jellybean, just the total for each flavor.</li>

          <li><strong>Grown-ups mostly use them</strong>: Businesses use <strong>trial balances</strong> a lot to make sure their money is organized.</li>

          <li><strong>Like a jellybean check-up</strong>: A <strong>trial balance</strong> is like a quick check-up to see if everything with the jellybeans (money) is in order.</li>

        </ul>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>February 28, 2024 · by 💎Gem ·</span>
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

    </article>
    
  </main>

  </>);
}