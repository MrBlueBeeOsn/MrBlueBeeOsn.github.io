import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function RAPidly2(): React.JSX.Element {

  const postId = "RAPidly2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-nhanh"><mark className="highlight-tertiary-padding-4-8">ADverbs: nhanh</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">RAPidly
        <sup>
          <Link to="/vocabulary/RAPidly-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/RAPidly-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#GROWing">GROWing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#CHAnging">CHAnging</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SPREADing">SPREADing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#deCLIning">deCLIning</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#eVOlving">eVOlving</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#apPROACHing">apPROACHing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#exPANDing">exPANDing</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#deTEriorating">deTEriorating</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#acCELerated">acCELerated</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#disapPEARing">disapPEARing</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>RAPidly</strong>" (một cách nhanh chóng) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              [RAPidly][<Link to="/pronunciation/5-vowel-system">RAP id ly</Link>] /ˈræpɪdli/ ⬤•• (3x)
              
            </span>
              
            &nbsp;thường được sử dụng để mô tả một quá trình, sự thay đổi hoặc sự phát triển diễn ra một cách nhanh chóng.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="GROWing">the CITy's popuLAtion is RAPidly [GROWing].</li>
        <li className="list-none margin-bottom-20">Dân số thành phố đang tăng trưởng nhanh chóng.</li>

        <li value="2" id="CHAnging">the WORLD is RAPidly [CHAnging] due to technoLOGical adVANCEments.</li>
        <li className="list-none margin-bottom-20">Thế giới [đang thay đổi] nhanh chóng do sự phát triển của công nghệ.</li>

        <li value="3" id="SPREADing">the disEASE is RAPidly [SPREADing] through<strong>out</strong> the COUNtry.</li>
        <li className="list-none margin-bottom-20">Bệnh [đang lan rộng] nhanh chóng khắp cả nước.</li>

        <li value="4" id="deCLIning">the NUMber of enDANgered SPEcies is RAPidly [deCLIning].</li>
        <li className="list-none margin-bottom-20">Số lượng các loài động vật có nguy cơ tuyệt chủng [đang giảm] nhanh chóng.</li>

        <li value="5" id="eVOlving">techNOlogy is RAPidly [eVOlving], MAking our LIVES EAsier.</li>
        <li className="list-none margin-bottom-20">Công nghệ [đang phát triển] nhanh chóng, giúp cuộc sống của chúng ta dễ dàng hơn.</li>

        <li value="6" id="apPROACHing">the DEADline is RAPidly [apPROACHing].</li>
        <li className="list-none margin-bottom-20">Hạn chót [đang đến] gần.</li>

        <li value="7" id="exPANDing">the COMpany is RAPidly [exPANDing] into NEW MARkets.</li>
        <li className="list-none margin-bottom-20">Công ty [đang mở rộng] nhanh chóng vào các thị trường mới.</li>

        <li value="8" id="deTEriorating">the OLD BUILDing is RAPidly [deTEriorating].</li>
        <li className="list-none margin-bottom-20">Tòa nhà cũ [đang xuống cấp] nhanh chóng.</li>

        <li value="9" id="acCELerated">the CAR RAPidly [acCELerated] down the HIGHway.</li>
        <li className="list-none margin-bottom-20">Chiếc xe [tăng tốc] nhanh chóng trên đường cao tốc.</li>

        <li value="10" id="disapPEARing">the RAINforest is RAPidly [disapPEARing] due to deforesTAtion.</li>
        <li className="list-none margin-bottom-20">Rừng nhiệt đới [đang biến mất] nhanh chóng do nạn phá rừng.</li>

      </ol>

      <p>** Các cụm từ trên đều nhấn mạnh tính chất nhanh chóng, cấp bách của một sự thay đổi hoặc quá trình. Chúng thường được sử dụng để mô tả những sự kiện hoặc xu hướng có tác động lớn và đáng chú ý.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>RAPidly</strong>" thường được đặt trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong các ngữ cảnh liên quan đến khoa học, kinh tế, xã hội và môi trường.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>deCEMber 5, 2024 · by 💎GEM ·</span>
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