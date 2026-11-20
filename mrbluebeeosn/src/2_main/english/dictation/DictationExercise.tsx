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
  { en: "Hello, Oyster Bay Sailing Club.",
    vi: "Greetings, Oyster Bay Sailing Club!",
    audio: "/assets/audio/dictation/01.mp3" },

  { en: "How can I help you?",
    vi: "What can I do to help you?",
    audio: "/assets/audio/dictation/02.mp3" },

  { en: "I'd like to book a table for two at seven.",
    vi: "I'd like to make reservations for two people at 7:00 p.m.",
    audio: "/assets/audio/dictation/03.mp3" },

  { en: "Could you tell me where the nearest station is?",
    vi: "Could you tell me where I can find the closest train station?",
    audio: "/assets/audio/dictation/04.mp3" },

  { en: "The meeting has been moved to Thursday afternoon.",
    vi: "The meeting has been rescheduled to Thursday afternoon.",
    audio: "/assets/audio/dictation/05.mp3" },

  { en: "She hasn't replied to my email yet.",
    vi: "I've sent her an email, but she hasn't replied yet.",
    audio: "/assets/audio/dictation/06.mp3" },

  { en: "We're running out of time, so let's start.",
    vi: "We don't have much time, so let's begin.",
    audio: "/assets/audio/dictation/07.mp3" },

  { en: "Do you mind if I open the window?",
    vi: "Do you mind if the window is opened?",
    audio: "/assets/audio/dictation/08.mp3" },

  { en: "He told me that the flight was delayed.",
    vi: "He said the flight was delayed.",
    audio: "/assets/audio/dictation/09.mp3" },

  { en: "I've been learning English for three years.",
    vi: "I've been studying English for the last three years.",
    audio: "/assets/audio/dictation/10.mp3" },

  { en: "Thank you for waiting.",
    vi: "Thank you for your patience.",
    audio: "/assets/audio/dictation/11.mp3" },

  { en: "Your order is ready.",
    vi: "Your order is ready to be picked up.",
    audio: "/assets/audio/dictation/12.mp3" },
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

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/dictation#dictation-exercise"><mark className="highlight-tertiary-padding-4-8">Dictation</mark></HashLink></h4>
			
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
					
					<div>
						<p className="dictation__muted">Answer</p>
						<p className="dictation__text">{item.en}</p>
						<p className="dictation__muted">{item.vi}</p>
					</div>
        
        </p>
				
      )}
 
      {status === "correct" && (
        <div>
          <p className="dictation__correct">✓ Correct!</p>
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