import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TensesChart(): React.JSX.Element {

	const postId = "TensesChart";

	type Part = { t: string; c?: "v1" | "vs" | "v2" | "v3" | "ving" };
type Tense = { name: string; formula: Part[]; example: string };
 
const V = (t: string, c: Part["c"]): Part => ({ t, c });
const T = (t: string): Part => ({ t });
 
// Chữ trong [ ] sẽ được hiển thị dạng pill
const renderExample = (text: string) =>
  text.split(/(\[[^\]]+\])/).map((part, i) =>
    part.startsWith("[") ? (
      <span key={i} className="tm-pill">{part.slice(1, -1)}</span>
    ) : (
      part
    )
  );
 
// Thứ tự hàng: từ trên xuống (Perfect Continuous -> Simple); mỗi hàng: Past, Present, Future
const rows: Tense[][] = [
  [
    { name: "Past Perfect Continuous", formula: [T("S + had been + "), V("V-ing", "ving")], example: "She [had been studying] for 2 hours." },
    { name: "Present Perfect Continuous", formula: [T("S + have/has been + "), V("V-ing", "ving")], example: "She [has been studying] since 7." },
    { name: "Future Perfect Continuous", formula: [T("S + will have been + "), V("V-ing", "ving")], example: "She [will have been studying] for 3 hours." },
  ],
  [
    { name: "Past Perfect", formula: [T("S + had + "), V("V3/ed", "v3")], example: "She [had studied] before I came." },
    { name: "Present Perfect", formula: [T("S + have/has + "), V("V3/ed", "v3")], example: "She [has studied] English for years." },
    { name: "Future Perfect", formula: [T("S + will have + "), V("V3/ed", "v3")], example: "She [will have studied] by Friday." },
  ],
  [
    { name: "Past Continuous", formula: [T("S + was/were + "), V("V-ing", "ving")], example: "She [was studying] at 8 p.m." },
    { name: "Present Continuous", formula: [T("S + am/is/are + "), V("V-ing", "ving")], example: "She [is studying] right now." },
    { name: "Future Continuous", formula: [T("S + will be + "), V("V-ing", "ving")], example: "She [will be studying] at 8 p.m." },
  ],
  [
    { name: "Past Simple", formula: [T("S + "), V("V2/ed", "v2")], example: "She [studied] English yesterday." },
    { name: "Present Simple", formula: [T("S + "), V("V1", "v1"), T(" / "), V("V-s/es", "vs")], example: "She [studies] English every day." },
    { name: "Future Simple", formula: [T("S + will + "), V("V1", "v1")], example: "She [will study] tomorrow." },
  ],
];
 
const yLabels = [
  ["Perfect Continuous", "hoàn thành tiếp diễn"],
  ["Perfect", "hoàn thành"],
  ["Continuous", "tiếp diễn"],
  ["Simple", "đơn"],
];
 
const xLabels = [
  ["tm-p", "PAST", "quá khứ"],
  ["tm-n", "PRESENT", "hiện tại"],
  ["tm-f", "FUTURE", "tương lai"],
];

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/grammar#grammar-terms"><mark className="highlight-tertiary-padding-4-8">Grammar</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Tenses Chart</h1>

			{/* This is the content of English Learning Term. */}

			<h4 className="margin-bottom-30 text-center">A Comprehensive Guide to English Tenses</h4>

			<div className="tm-root">
      <div className="tm-legend">
        <span className="tm-chip tm-v1">V1 – nguyên mẫu</span>
        <span className="tm-chip tm-vs">V-s/es</span>
        <span className="tm-chip tm-v2">V2 / V-ed</span>
        <span className="tm-chip tm-v3">V3 / V-ed</span>
        <span className="tm-chip tm-ving">V-ing</span>
      </div>
 
      <div className="tm-scroll">
        <div className="tm-chart">
          <div className="tm-ylabel">FORM ↑</div>
 
          <div className="tm-yticks">
            {yLabels.map(([en, vi]) => (
              <div className="tm-ytick" key={en}>
                {en}
                <small>{vi}</small>
              </div>
            ))}
          </div>
 
          <div className="tm-plot">
            <div className="tm-now"><span>NOW</span></div>
            {rows.flatMap((row) =>
              row.map((tense, col) => (
                <div className={`tm-cell tm-c${col}`} key={tense.name}>
                  <div className="tm-name">{tense.name}</div>
                  <div className="tm-f">
                    {tense.formula.map((p, i) => (
                      <span key={i} className={p.c ? `tm-${p.c}` : undefined}>{p.t}</span>
                    ))}
                  </div>
                  <div className="tm-ex">{renderExample(tense.example)}</div>
                </div>
              ))
            )}
          </div>
 
          <div className="tm-xticks">
            {xLabels.map(([cls, en, vi]) => (
              <div className={`tm-xtick ${cls}`} key={en}>
                {en}
                <small>{vi}</small>
              </div>
            ))}
          </div>
          <div className="tm-xlabel">TIME →</div>
        </div>
      </div>
    </div>

			<div className="viewcounter">
			
				<div className="post-date no-margin">
					<span>noVEMber 09, 2026 · by Claude ·</span>
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