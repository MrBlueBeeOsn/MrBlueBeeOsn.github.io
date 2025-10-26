import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function AccountsReceivable(): React.JSX.Element {

  const postId = "AccountsReceivable";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/bookkeeping#bookkeeping-terms"><mark className="highlight-tertiary-padding-4-8">Bookkeeping</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is Accounts Receivable?</h1>

      {/* This is the content of Bookkeeping Term. */}

      <p><strong>Accounts receivable</strong> (<strong>AR</strong>), abbreviated as A/R sometimes,  represent the money owed to a business by its customers for goods or services that have been delivered but not yet paid for. It's essentially money owed to the business on credit.</p>

      <p className="margin-top-20">Here's a breakdown of how <strong>accounts receivable</strong> works:</p>

        <ul className="list-square">

          <li><strong>Selling on Credit</strong>: When a business allows a customer to purchase something without immediate payment, they're essentially extending credit to the customer. This creates an account receivable for the business, reflecting the amount the customer owes.</li>

          <li><strong>Examples of AR</strong>: This could be anything from a clothing store allowing a customer to take clothes home with a promise to pay later, to a company providing consulting services and billing the client at the end of the month.</li>

          <li><strong>Tracking AR</strong>: Businesses carefully track their <strong>accounts receivable</strong> to ensure timely payments and maintain a healthy cash flow. This might involve sending invoices to customers, following up on overdue payments, and offering different payment options.</li>

        </ul>

      <p className="margin-top-20">Here are some key things to remember about <strong>accounts receivable</strong>:</p>

        <ul className="list-square">

          <li><strong>An Asset</strong>, <strong>But</strong>...: <strong>Accounts receivable</strong> are listed as current assets on a company's balance sheet because they represent money that is expected to be collected in the short term (usually within a few months). However, there's always a risk that some customers might not pay on time or at all.</li>

          <li><strong>Management is Key</strong>: Effective management of <strong>accounts receivable</strong> is crucial for a business's financial health. This involves having a clear credit policy, efficient collection procedures, and minimizing the risk of bad debts.</li>

          <li><strong>Impact on Cash Flow</strong>: Delayed payments from customers can strain a business's cash flow, making it difficult to pay bills or invest in growth.</li>

        </ul>

      <p className="margin-top-20">Here are some terms you might encounter related to <strong>accounts receivable</strong>:</p>

        <ul className="list-square">

          <li><strong>Debtor</strong>: This is another term for a customer who owes money on an account receivable.</li>

          <li><strong>Credit Terms</strong>: These are the specific conditions under which a business extends credit to its customers, such as the net due date or any discounts offered for early payment.</li>

          <li><strong>Bad Debt</strong>: This refers to <strong>accounts receivable</strong> that a company is unable to collect after all efforts have been made. Businesses write off bad debts as an expense.</li>

        </ul>

      <p className="margin-top-20"><strong>Accounts receivable</strong> are a fundamental part of the business world, especially for companies that sell on credit. By understanding how AR works and managing it effectively, businesses can improve their cash flow and financial stability.</p>

      {/* =============================
            🌻 Think simply!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">🌻 Think simply!</h3>

      <p>Imagine you have a lemonade stand. You're making yummy lemonade and selling it to thirsty people on a hot summer day. But not everyone pays you right away. Some people might say, "I'll pay you later!" or maybe they forget their money.</p>

      <p><strong>Accounts receivable</strong> are like keeping track of all the money people owe you for the lemonade they haven't paid for yet. It's like a list of all the IOUs you have from your customers.</p>
      
      <p className="margin-top-20">Here's how it works:</p>

        <ul className="list-square">

          <li><strong>Lemonade stand</strong>: This is like your business.</li>

          <li><strong>People who owe money</strong>: These are the people who haven't paid you for their lemonade yet.</li>

          <li><strong>Amount owed</strong>: This is how much money each person owes you.</li>

          <li><strong>Accounts receivable</strong>: This is the total amount of money everyone owes you for the lemonade they haven't paid for yet.</li>

        </ul>
      
      <p className="margin-top-20">Think of it like this:</p>

        <ul className="list-square">

          <li>You sell a cup of lemonade for $1.</li>

          <li>Your friend drinks a cup but forgets his money. He says, "I'll owe you a dollar!"</li>

          <li>Your neighbor's kid takes a cup and runs away without paying.</li>

          <li>These are both <strong>accounts receivable</strong> because you're owed money, even though you haven't received it yet.</li>

        </ul>
      
      <h4 className="margin-y-50 text-center">Why is this important?</h4>

        <ul className="list-square">

          <li>It's like keeping track of your piggy bank, but instead of the money you have, it's the money other people owe you.</li>

          <li>It helps you know how much money you can expect to receive in the future.</li>

          <li>It's important to make sure people pay you what they owe, so you can buy more lemons and sugar to keep making lemonade!</li>

        </ul>

      <p className="margin-top-20">So, even though it might sound grown-up, <strong>accounts receivable</strong> are just like keeping track of the money you're owed from your lemonade stand (or any business). It helps you understand your finances and make sure you get paid for your hard work!</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>February 22, 2024 · by 💎Gem ·</span>
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