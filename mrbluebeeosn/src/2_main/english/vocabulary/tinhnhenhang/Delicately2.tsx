import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function DELicately2(): React.JSX.Element {

  const postId = "DELicately2";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/vocabulary#adverbs-nhe-nhang"><mark className="highlight-tertiary-padding-4-8">ADverbs: nhẹ nhàng</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">DELicately
        <sup>
          <Link to="/vocabulary/DELicately-1">&nbsp;1&nbsp;</Link>
        </sup>
        <sup>
          <Link to="/vocabulary/DELicately-2">&nbsp;2&nbsp;</Link>
        </sup>
      </h1>

      <div className="example">
                                
        <p className="example-sentence text-center">
          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#BALanced">BALanced</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#FLORal">FLORal</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SHAded">SHAded</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#HANDled">HANDled</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#SPICED">SPICED</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#conSTRUCTed-with">conSTRUCTed with</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border" >
            <HashLink smooth to="#WOven-with">WOven with</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#BALanced-on">BALanced on</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#perFUMED-with">perFUMED with</HashLink>
          </span> &nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <HashLink smooth to="#POISED-on">POISED on</HashLink>
          </span> &nbsp;

        </p>

      </div>

      {/* This is the content of Vocabulary Term. */}

      <p>Tuyệt vời! Chúng ta cùng khám phá sâu hơn về từ "<strong>DELicately</strong>" (một cách tinh tế, khéo léo) và các cụm từ hay đi kèm nhé.</p>

      <div className="text-border1 padding-10 highlight-238-padding-4-8 bee-container">

        <div>

          <p className="margin-y-10">
            
            <span className="highlight-255-padding-3-6">
              
              DELicately \<Link to="/pronunciation/5-vowel-system">DEL i̛ ca̛te ly</Link>\ /ˈdɛlɪkətli/ ⬤••• (FOUR SYLlables)
              
            </span>
              
            &nbsp;thường được sử dụng để miêu tả một hành động được thực hiện một cách khéo léo, nhẹ nhàng, hoặc một tình huống đòi hỏi sự tinh tế và nhạy cảm.

          </p>

        </div>

        <div className="bee-wrapper2">
          <img src="/assets/images/bee2.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <ol className="margin-top-30 padding-left-30">

        <li value="1" id="BALanced">the Ecosystem was DELicately [BALanced] be<strong>fore</strong> HUman interVENtion.</li>
        <li className="list-none margin-bottom-20">Hệ sinh thái [đã được cân bằng] một cách tinh tế trước khi con người can thiệp.</li>

        <li value="2" id="FLORal">the TEA has a DELicately [FLORal] aROma.</li>
        <li className="list-none margin-bottom-20">Trà có hương thơm [hoa] rất tinh tế.</li>

        <li value="3" id="SHAded">the PAINting was DELicately [SHAded], creAting a SOFT, eTHEreal ATmosphere.</li>
        <li className="list-none margin-bottom-20">Bức tranh được [tô màu] một cách tinh tế, tạo ra một bầu không khí mềm mại, huyền ảo.</li>

        <li value="4" id="HANDled">the situAtion reQUIred to be DELicately [HANDled] to aVOID CONflict.</li>
        <li className="list-none margin-bottom-20">Tình huống này cần [được xử lý] một cách khéo léo để tránh xung đột.</li>

        <li value="5" id="SPICED">the CURry was DELicately [SPICED], alLOWing the NATURal FLAvors of the inGREdients to SHINE THROUGH.</li>
        <li className="list-none margin-bottom-20">Cà ri [được gia vị] một cách tinh tế, cho phép hương vị tự nhiên của các nguyên liệu tỏa sáng.</li>

        <li value="6" id="conSTRUCTed-with">the WATCH was DELicately [conSTRUCTed with] INtricate DEtails.</li>
        <li className="list-none margin-bottom-20">Chiếc đồng hồ [được chế tác] một cách tinh xảo [với] những chi tiết phức tạp.</li>

        <li value="7" id="WOven-with">the SILK SCARF was DELicately [WOven with] INtricate PATterns.</li>
        <li className="list-none margin-bottom-20">Chiếc khăn lụa [được dệt] một cách tinh xảo [với] những họa tiết phức tạp.</li>

        <li value="8" id="BALanced-on">the ACrobat DELicately [BALanced on] the TIGHTrope.</li>
        <li className="list-none margin-bottom-20">Nghệ sĩ xiếc [cân bằng] một cách tinh tế [trên] dây cáp.</li>

        <li value="9" id="perFUMED-with">the ROOM was DELicately [perFUMED with] the SCENT of ROSES.</li>
        <li className="list-none margin-bottom-20">Căn phòng [có mùi thơm] hoa hồng rất tinh tế.</li>

        <li value="10" id="POISED-on">the balleRIna was DELicately [POISED on] the TIP of her TOES.</li>
        <li className="list-none margin-bottom-20">Nữ vũ công ba lê [đứng ở tư thế cân bằng] một cách tinh tế trên mũi chân.</li>

      </ol>

      <p>** Các cụm từ trên đều được sử dụng để miêu tả một hành động được thực hiện một cách khéo léo, nhẹ nhàng, hoặc một tình huống đòi hỏi sự tinh tế và nhạy cảm. Chúng thường được sử dụng để tạo ra một hình ảnh đẹp và tinh tế.</p>

      {/* =============================
            Lưu ý:
      ============================= */}

      <div className="margin-y-30 text-border1 table-container">

        <h3 className="margin-y-30 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li>"<strong>DELicately</strong>" thường được đặt trước hành động để bổ nghĩa.</li>

          <li className="margin-bottom-20">Từ này thường được sử dụng trong văn viết trang trọng để tạo ra một cảm giác thanh lịch và tinh tế.</li>

        </ul>

      </div>

      <p className="margin-top-50">Hy vọng những thông tin này hữu ích cho bạn! 🐝</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 14, 2024 · by 💎GEM ·</span>
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