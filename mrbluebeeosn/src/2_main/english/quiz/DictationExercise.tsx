"use client";
 
import { useRef, useState } from "react";

import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

type Item = { en: string; vi: string; audio?: string };

const postId = "DictationExercise";
 
const ITEMS: Item[] = [
  { en: "Hello, Oyster Bay Sailing Club. How can I help you?", vi: "Xin chào, Câu lạc bộ Thuyền buồm Oyster Bay. Tôi có thể giúp gì cho bạn?" },
  { en: "I'd like to book a table for two at seven.", vi: "Tôi muốn đặt bàn cho hai người lúc bảy giờ." },
  { en: "Could you tell me where the nearest station is?", vi: "Bạn có thể cho tôi biết ga gần nhất ở đâu không?" },
  { en: "The meeting has been moved to Thursday afternoon.", vi: "Cuộc họp đã được dời sang chiều thứ Năm." },
  { en: "She hasn't replied to my email yet.", vi: "Cô ấy vẫn chưa trả lời email của tôi." },
  { en: "We're running out of time, so let's start.", vi: "Chúng ta sắp hết thời gian rồi, nên bắt đầu thôi." },
  { en: "Do you mind if I open the window?", vi: "Bạn có phiền nếu tôi mở cửa sổ không?" },
  { en: "He told me that the flight was delayed.", vi: "Anh ấy nói với tôi rằng chuyến bay bị hoãn." },
  { en: "I've been learning English for three years.", vi: "Tôi đã học tiếng Anh được ba năm." },
  { en: "Thank you for waiting. Your order is ready.", vi: "Cảm ơn bạn đã chờ. Đơn hàng của bạn đã sẵn sàng." },
];
 
const tokenize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[^a-z0-9' ]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
 
const RATES = [0.75, 1, 1.25];
 
type Status = "idle" | "correct" | "wrong" | "revealed";
 
export default function DictationExercise() {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [rate, setRate] = useState(1);
  const [score, setScore] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
 
  const item = ITEMS[index];
  const target = tokenize(item?.en ?? "");
  const typed = tokenize(value);
  const finished = index >= ITEMS.length;
  const answered = status === "correct" || status === "revealed";
 
  const play = () => {
    if (item.audio) {
      if (!audioRef.current) audioRef.current = new Audio();
      audioRef.current.src = item.audio;
      audioRef.current.playbackRate = rate;
      audioRef.current.play();
      return;
    }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(item.en);
    u.lang = "en-US";
    u.rate = rate;
    window.speechSynthesis.speak(u);
  };
 
  const check = () => {
    const ok = typed.length === target.length && typed.every((w, i) => w === target[i]);
    if (ok) setScore((s) => s + 1);
    setStatus(ok ? "correct" : "wrong");
  };
 
  const go = (next: number) => {
    window.speechSynthesis?.cancel();
    setIndex(next);
    setValue("");
    setStatus("idle");
  };
 
  const restart = () => {
    setScore(0);
    go(0);
  };
 
  if (finished) {
    return (
      <div className="dictation">
        <h3 className="dictation__title">All done</h3>
        <p className="dictation__text">
          You got {score} of {ITEMS.length} right.
        </p>
        <button className="dictation__btn dictation__btn--primary" onClick={restart}>
          Try again
        </button>
      </div>
    );
  }

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/english#dictation-exercise"><mark className="highlight-tertiary-padding-4-8">Dictation</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Dictation Exercise</h1>

			{/* This is the content of English Learning Term. */}


			 <div className="dictation">
      <div className="dictation__row">
        <span className="dictation__muted">
          {index + 1} / {ITEMS.length}
        </span>
        <div className="dictation__row">
          {RATES.map((r) => (
            <button
              key={r}
              className={`dictation__chip${rate === r ? " is-active" : ""}`}
              onClick={() => setRate(r)}
            >
              {r}x
            </button>
          ))}
        </div>
      </div>
 
      <button className="dictation__play" onClick={play}>
        ▶ Listen
      </button>
 
      <textarea
        className="dictation__input"
        value={value}
        disabled={answered}
        onChange={(e) => {
          setValue(e.target.value);
          if (status === "wrong") setStatus("idle");
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (!answered && value.trim()) check();
          }
        }}
        rows={3}
        placeholder="Type what you hear..."
      />
 
      {status === "wrong" && (
        <p className="dictation__wrong">
          Not quite.{" "}
          {target.map((w, i) => (
            <span
              key={i}
              className={`dictation__word ${typed[i] === w ? "is-ok" : "is-bad"}`}
            >
              {typed[i] === w ? w : "•".repeat(Math.max(w.length, 1))}
            </span>
          ))}
        </p>
      )}
 
      {status === "correct" && (
        <div>
          <p className="dictation__correct">✓ Correct!</p>
          <p className="dictation__text">{item.en}</p>
          <p className="dictation__muted">{item.vi}</p>
        </div>
      )}
 
      {status === "revealed" && (
        <div>
          <p className="dictation__muted">Answer</p>
          <p className="dictation__text">{item.en}</p>
          <p className="dictation__muted">{item.vi}</p>
        </div>
      )}
 
      <div className="dictation__row">
        <button
          className="dictation__btn dictation__btn--ghost"
          disabled={index === 0}
          onClick={() => go(index - 1)}
        >
          ← Previous
        </button>
        {!answered && (
          <button
            className="dictation__btn dictation__btn--text"
            onClick={() => setStatus("revealed")}
          >
            Show answer
          </button>
        )}
        {answered ? (
          <button className="dictation__btn dictation__btn--primary" onClick={() => go(index + 1)}>
            Next →
          </button>
        ) : (
          <button
            className="dictation__btn dictation__btn--primary"
            onClick={check}
            disabled={!value.trim()}
          >
            Check
          </button>
        )}
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