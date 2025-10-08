import { Link } from "react-router-dom";

export default function () {
  return (<>

  <main className="image image2">
  
    <h4><Link to="/bookkeeping#bookkeeping-terms"><mark className="highlight-tertiary-padding-4-8">Bookkeeping</mark></Link></h4>

    <h2 className="margin-y-50 text-center">What is bookkeeping?</h2>

    {/* This is the content of Bookkeeping Term. */}

    {/* =============================
          ReactJS
    ============================= */}

    {/* 
    
    1/  Hàm phải bỏ thẻ div React: return (<>

    2/  Bình luận trong React {/*
        Bình luận trong trong React phần import: //
        Bình luận trong HTML <--
        
    3/  Link trong React: <Link to=""></Link>
        Link trong HTML: <a href="url">link text</a>

    4/  Thẻ thuộc tính trong React: className=""
        Thẻ thuộc tính trong HTML: className=""

    5/ Trong React (JSX), bạn phải viết:
      <pre className="pre-border"><code>{`

      Trong HTML, bạn có thể viết:
      <pre className="pre-border"><code>

    6/ Trong React (JSX), bạn phải viết:
      < >

      Trong HTML, bạn có thể viết:
      &lt; &gt;

    7/ Trong React (JSX), bạn phải viết: <hr />
      Trong HTML, bạn có thể viết: <hr>
    
    import { Link } from "react-router-dom";

        export default function () {
        return (<>

        </>);
        }
    */}
    
    {/* =============================
          HTML
    ============================= */}
    
    {
    
    /* &lt; &gt;
    
    <pre className="pre-border"><code>

    </code></pre>

    <div className="text-border1 padding-10 .highlight-238-padding-top-15">

      <p className="margin-y-30 text-center"><span className="highlight-255-padding-0-4"></span></p>

    </div>

    <div className="table-container">
      <table>

        <thead>

          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>

        </thead>

        <tbody>

          <tr>
              <td></td>
              <td></td>
              <td></td>
          </tr>

        </tbody>
        
      </table>
  
      <div className="margin-y-30">

        <p>
          <span className="highlight-255-padding-4-8"></span>
        </p>

      </div>
      
    </div>

    &nbsp;
    
    id=""

    <a href="url">link text</a> HTML

    import { Link } from "react-router-dom";
    <Link to="url">link text</Link>

    import { HashLink } from 'react-router-hash-link';
    <HashLink smooth to="#url">link text</HashLink>

    <img src="url" alt="alternatetext">

    className="margin-top-20"
  
    </strong>

    <h4 className="margin-y-50 text-center"></h4>
    
    <p></p>

      <ul className="list-square">

        <li></li>

        <li></li>

        <li></li>

      </ul>

      <ul className="list-disc">
      <ul className="list-circle"> 
      
    */}

    {/* =============================
          ☘️ Think simply!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">☘️ Think simply!</h3>
    
    {/* 
    
    <p className="text-indent"></p>   Chỉ thụt lề dòng đầu tiên của đoạn văn.

    <p className="text-indent-whole"></p>     Thụt lề toàn bộ khối của phần tử 
    
    */}

    <p className="margin-top-50 text-small"> · by 💎Gem ·</p> 

  </main>

  </>);
}