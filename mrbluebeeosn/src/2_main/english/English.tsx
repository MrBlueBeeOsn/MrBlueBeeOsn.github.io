import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function English(): React.JSX.Element {

  const postId = "English";

  return (<>

  <main className="image image2">

    <article>

      <h4><HashLink smooth to="/english#english-learning-terms"><mark className="highlight-tertiary-padding-4-8">English</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is English?</h1>

      {/* This is the content of English Learning Term. */}
      
      <p><strong>English</strong> is a West Germanic language that originated from the Anglo-Frisian dialects brought to Britain by Germanic invaders from what is now northwestern Germany, southern Denmark and the Netherlands. The language has evolved over more than 1,400 years, and its development is generally divided into three major periods: Old <strong>English</strong>, Middle <strong>English</strong>, and Modern <strong>English</strong>.</p>

      <p><strong>English</strong> is now the global lingua franca, a common language used by people who speak different native languages. It's the official language in nearly 60 sovereign states and is used widely in international communication, science, business, aviation, entertainment, and diplomacy.</p>

      <p className="margin-top-20">Key Characteristics of <strong>English</strong></p>

        <ul className="list-square">

          <li><strong>Vast Vocabulary</strong>: <strong>English</strong> has one of the largest vocabularies of any language, with words borrowed from many other languages, particularly French, Latin, and Greek. This makes it a very flexible and expressive language.</li>

          <li><strong>Simple Inflection</strong>: Unlike many other languages, <strong>English</strong> has relatively simple grammar. For example, nouns have very little inflection (changes in form to show grammar), and verbs have fewer conjugations (changes to show tense, person, etc.) than in languages like Spanish or French.</li>

          <li><strong>Flexible Word Order</strong>: While the basic word order is Subject-Verb-Object (SVO), <strong>English</strong> is a very flexible language, and the word order can be changed for emphasis or style.</li>

          <li><strong>Sound and Pronunciation</strong>: <strong>English</strong> has a complex sound system with many different vowel and consonant sounds. Some sounds, like the "th" sound, are not found in many other languages.</li>

        </ul>

      <h4 className="margin-y-50 text-center">Why English is so widely used</h4>

        <ul className="list-square">

          <li><strong>Historical Influence</strong>: The British Empire played a significant role in spreading <strong>English</strong> around the world.</li>

          <li><strong>Economic Influence</strong>: The rise of the United States as a global economic power further cemented <strong>English</strong>'s status as a dominant language in business, technology, and finance.</li>

          <li><strong>Cultural Influence</strong>: <strong>English</strong> is the language of many popular movies, music, and literature, which contributes to its global appeal.</li>

        </ul>

      <p className="margin-top-20"><strong>English</strong> continues to evolve and is constantly influenced by other languages and cultures.</p>

      {/* =============================
            🌻 Think simply!
      ============================= */}

      <hr className="hr-short"/>

      <h2 className="margin-bottom-50 text-center">🌻 Think simply!</h2>

      <p><strong>English</strong> is like a special language that people all over the world use to talk to each other.</p>

      <p>Imagine a big playground with kids from many different countries. They all have their own language, but when they want to play a game together, they use a special language so everyone can understand. That special language is <strong>English</strong>!</p>

      <p className="margin-top-20">It's used for:</p>

        <ul className="list-square">

          <li><strong>Making friends</strong>: You can talk to new friends from different countries.</li>
        
          <li><strong>Watching cartoons and movies</strong>: Many cartoons and movies are made in <strong>English</strong>.</li>

          <li><strong>Singing songs</strong>: Many of the songs you hear are in <strong>English</strong>.</li>

          <li><strong>Learning about the world</strong>: You can read books and websites in <strong>English</strong> to learn about everything!</li>

        </ul>

      <p className="margin-top-20">So, <strong>English</strong> is a very important language that helps people all around the world to be friends and learn new things together!</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>August 30, 2025 · by 💎Gem ·</span>
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