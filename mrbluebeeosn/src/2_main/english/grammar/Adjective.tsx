import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Adjective(): React.JSX.Element {

  const postId = "Adjective";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/grammar#grammar-terms"><mark className="highlight-tertiary-padding-4-8">Grammar</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is an adjective?</h1>

      {/* This is the content of English Learning Term. */}

      <p>An <strong>adjective</strong> in English is a describing word! It helps you tell more about the nouns (people, places, things) in your sentence. <strong>Adjectives</strong> are like fancy paintbrushes that add color and details to your words. Here's how <strong>adjectives</strong> work:</p>

        <ul className="list-square">

          <li><strong>Painting a Picture</strong>: <strong>Adjectives</strong> can describe how something looks (color, size, shape), like "red," "big," or "round."</li>

          <li><strong>Feeling the Feels</strong>: They can describe how something feels (texture, temperature), like "soft," "cold," or "bumpy."</li>

          <li><strong>Being More Specific</strong>: They can describe how something is (condition, quality), like "happy," "clean," or "new."</li>

        </ul>

      <p className="margin-top-20">Here are some clues to help you identify <strong>adjectives</strong>:</p>

        <ul className="list-square">

          <li><strong>Describing Words</strong>: <strong>Adjectives</strong> usually come before the noun they describe (red car, big house, happy dog).</li>

          <li><strong>Answering the Question</strong>: They can sometimes answer the question "what kind of?" For example, "What kind of car?" (Red is the <strong>adjective</strong>).</li>

        </ul>

      <p className="margin-top-20">Here's why <strong>adjectives</strong> are important in English:</p>

        <ul className="list-square">

          <li><strong>Colorful Sentences</strong>!: <strong>Adjectives</strong> make your sentences more interesting and colorful. They help the listener paint a picture in their mind.</li>

          <li><strong>Details Make the Story</strong>: By using <strong>adjectives</strong>, you can add details to your stories and descriptions, making them more fun and engaging.</li>

        </ul>

      <p className="margin-top-20">Learning <strong>adjectives</strong> is a fun way to build your English vocabulary and become a descriptive master! Here are some ways to practice:</p>

        <ul className="list-square">

          <li><strong>I Spy! Colors</strong>: Play "I Spy" with a friend, but instead of just the object, describe its color! For example, "I spy with my little eye something big and red" (red ball).</li>

          <li><strong>Feeling Game</strong>: Blindfold a friend and have them feel different objects. Then, take turns describing those objects using <strong>adjectives</strong> (soft, smooth, cold).</li>

          <li><strong>Silly Story Time</strong>: Start a story with a friend. Take turns adding sentences, each with an <strong>adjective</strong> describing a person, place, or thing, to build a funny story together!</li>

        </ul>

      <p className="margin-top-20">There are all sorts of <strong>adjectives</strong> in English, so the more you practice, the easier it will be to find them and use them in your own speaking and writing!</p>

      {/* =============================
            🌻 Think simply!
      ============================= */}

      <hr className="hr-short"/>

      <h2 className="margin-bottom-50 text-center">🌻 Think simply!</h2>

      <p>An <strong>adjective</strong> in English is like a glitter word! It adds sparkle and details to the things you talk about, like your toys, friends, or even the weather. Here's how glitter words work:</p>

        <ul className="list-square">

          <li><strong>Sparkly Colors</strong>!: Glitter words can describe how something looks, like its color (sparkly, blue, yellow), size (big, small, giant), or shape (round, square, funny).</li>

          <li><strong>Touchy-Feely Words</strong>: They can describe how something feels, like soft (like your teddy bear), cold (like ice cream), or bumpy (like the sidewalk).</li>

          <li><strong>Special Words Too</strong>: Glitter words can also describe how something is, like happy (like you at playtime), clean (like your room after picking up), or new (like your favorite shoes).</li>

        </ul>

      <p className="margin-top-20">Here are some tricks to find glitter words:</p>

        <ul className="list-square">

          <li><strong>Before the Noun</strong>: Glitter words usually love to cuddle up right before the noun they describe (sparkly dress, big truck, happy dog).</li>

          <li><strong>What Kind</strong>? <strong>Game</strong>: If you can answer the question "what kind of?" with the word, it's probably a glitter word! For example, "What kind of dress?" (Sparkly is the glitter word).</li>

        </ul>

      <p className="margin-top-20">Glitter words are important because:</p>

        <ul className="list-square">

          <li><strong>Shiny Sentences</strong>!: They make your sentences sparkle and shine! They help you tell more about what you're talking about.</li>

          <li><strong>Storytelling Fun</strong>!: Glitter words add details to your stories, making them more exciting and fun to listen to!</li>

        </ul>

      <p className="margin-top-20">Learning glitter words is like adding sparkle to your English! Here are some ways to play and learn:</p>

        <ul className="list-square">

          <li><strong>I Spy</strong>! <strong>Glitter Edition</strong>: Play "I Spy" with a friend, but instead of just the object, describe it with glitter words! For example, "I spy with my little eye something big and blue" (big blue truck).</li>

          <li><strong>Feeling Box</strong>!: Put different objects in a box (a sock, a ball, a toy car). Close your eyes and feel each object. Then, take turns describing those objects using glitter words (soft, round, smooth).</li>

          <li><strong>Silly Story Time</strong>!: Start a story with a friend. Take turns adding sentences, each with a glitter word describing a person, place, or thing, to build a super silly story together!</li>

        </ul>
      
      <p className="margin-top-20">Remember, there are all sorts of glitter words in English. The more you practice, the easier it will be to find them and use them to make your English sparkle!</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>July 9, 2024 · by 💎Gem ·</span>
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