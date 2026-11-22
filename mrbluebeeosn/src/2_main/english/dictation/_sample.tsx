"use client";
 
import { useRef, useState } from "react";

import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

type Item = { en: string; write: string; stress: string; vi: string; audio?: string };

const postId = "ColorsExercise0112";
 
const ITEMS: Item[] = [
  { en: "",
    write: "",
    stress: "",
    vi: "",
    audio: "/assets/audio/numbers/01.mp3" },

  { en: "",
    write: "",
    stress: "",
    vi: "",
    audio: "/assets/audio/numbers/02.mp3" },

  { en: "",
    write: "",
    stress: "",
    vi: "",
    audio: "/assets/audio/numbers/03.mp3" },

  { en: "",
    write: "",
    stress: "",
    vi: "",
    audio: "/assets/audio/numbers/04.mp3" },

  { en: "",
    write: "",
    stress: "",
    vi: "",
    audio: "/assets/audio/numbers/05.mp3" },

  { en: "",
    write: "",
    stress: "",
    vi: "",
    audio: "/assets/audio/numbers/06.mp3" },

  { en: "",
    write: "",
    stress: "",
    vi: "",
    audio: "/assets/audio/numbers/07.mp3" },

  { en: "",
    write: "",
    stress: "",
    vi: "",
    audio: "/assets/audio/numbers/08.mp3" },

  { en: "",
    write: "",
    stress: "",
    vi: "",
    audio: "/assets/audio/numbers/09.mp3" },

  { en: "",
    write: "",
    stress: "",
    vi: "",
    audio: "/assets/audio/numbers/10.mp3" },

  { en: "",
    write: "",
    stress: "",
    vi: "",
    audio: "/assets/audio/numbers/11.mp3" },

  { en: "",
    write: "",
    stress: "",
    vi: "",
    audio: "/assets/audio/numbers/12.mp3" },
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
    
  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/dictation#dictation-exercise"><mark className="highlight-tertiary-padding-4-8">Dictation</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Dictation Exercise</h1>

      {/* This is the content of English Learning Term. */}

      <div className="dictation">
        <h3 className="dictation__title">All done</h3>
        <p className="dictation__text">
          You got {score} of {ITEMS.length} right.
        </p>
        <button className="dictation__btn dictation__btn--primary" onClick={restart}>
          Try again
        </button>
      </div>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>noVEMber 22, 2026 · by GEM ·</span>
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

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/dictation#colors-exercise"><mark className="highlight-tertiary-padding-4-8">Colors</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Colors Exercise 01-12</h1>

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
					
					<div>
						<p className="dictation__text">{item.en}</p>
          <p className="dictation__muted">{item.write}</p>
          <p className="dictation__muted">{item.stress}</p>
          <p className="dictation__muted">{item.vi}</p>
					</div>
        
        </p>
				
      )}
 
      {status === "correct" && (
        <div>
          <p className="dictation__correct">✓ Correct!</p>
          <p className="dictation__text">{item.en}</p>
          <p className="dictation__muted">{item.write}</p>
          <p className="dictation__muted">{item.stress}</p>
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
					<span>noVEMber 22, 2026 · by GEM ·</span>
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