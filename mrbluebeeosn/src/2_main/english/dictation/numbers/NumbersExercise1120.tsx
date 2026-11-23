"use client";
 
import { useRef, useState } from "react";

import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

type Item = { en: string; write: string; stress: string; vi: string; audio?: string };

const postId = "NumbersExercise1120";
 
const ITEMS: Item[] = [
  { en: "eLEVen",
    write: "",
    stress: "",
    vi: "11",
    audio: "/assets/audio/numbers1120/01.mp3" },

  { en: "TWELVE",
    write: "",
    stress: "",
    vi: "12",
    audio: "/assets/audio/numbers1120/02.mp3" },

  { en: "thirTEEN",
    write: "",
    stress: "",
    vi: "13",
    audio: "/assets/audio/numbers1120/03.mp3" },

  { en: "fourTEEN",
    write: "",
    stress: "",
    vi: "14",
    audio: "/assets/audio/numbers1120/04.mp3" },

  { en: "fifTEEN",
    write: "",
    stress: "",
    vi: "15",
    audio: "/assets/audio/numbers1120/05.mp3" },

  { en: "sixTEEN",
    write: "",
    stress: "",
    vi: "16",
    audio: "/assets/audio/numbers1120/06.mp3" },

  { en: "sevenTEEN",
    write: "",
    stress: "",
    vi: "17",
    audio: "/assets/audio/numbers1120/07.mp3" },

  { en: "eighTEEN",
    write: "",
    stress: "",
    vi: "18",
    audio: "/assets/audio/numbers1120/08.mp3" },

  { en: "nineTEEN",
    write: "",
    stress: "",
    vi: "19",
    audio: "/assets/audio/numbers1120/09.mp3" },

  { en: "TWENty",
    write: "",
    stress: "",
    vi: "20",
    audio: "/assets/audio/numbers1120/00.mp3" },
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
		
			<h4><HashLink smooth to="/dictation#numbers-exercise"><mark className="highlight-tertiary-padding-4-8">Numbers</mark></HashLink></h4>
            
      <h1 className="margin-y-50 text-center">Numbers: 11, 12, 12, ... 20</h1>

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
					<span>noVEMber 20, 2026 · by Claude and GEM ·</span>
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
		
			<h4><HashLink smooth to="/dictation#numbers-exercise"><mark className="highlight-tertiary-padding-4-8">Numbers</mark></HashLink></h4>
            
      <h1 className="margin-y-50 text-center">Numbers: 11, 12, 12, ... 20</h1>

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
						<p className="dictation__muted">Answer</p>
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
					<span>noVEMber 20, 2026 · by Claude and GEM·</span>
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