import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function EnglishTeacher(): React.JSX.Element {

  const postId = "EnglishTeacher";

  return (<>

  <main className="image image2">

    <article>

      <h4><HashLink smooth to="/english#english-learning-terms"><mark className="highlight-tertiary-padding-4-8">English</mark></HashLink></h4>
      
      <h2 className="margin-y-50 text-center">What is an English Teacher?</h2>

      {/* This is the content of English Learning Term. */}
      
      <p>An <strong>English teacher</strong> is your personal guide on the incredible journey of learning English! They're there to support you every step of the way as you develop your skills in all areas of the language.</p>
        
      <h4 className="margin-y-50 text-center">Reading Mentors:</h4>
      
      <p>Think of them as your partner in exploring the wonderful world of literature. They'll introduce you to captivating stories and poems, helping you unlock their meaning and hidden treasures. They'll also be your personal library advisors, recommending books that match your interests and help you become a more confident reader.</p>

      <h4 className="margin-y-50 text-center">Writing Coaches:</h4>
      
      <p><strong>English teachers</strong> are like writing wizards, ready to share the magic tricks of spelling and grammar. They'll teach you the power of punctuation and how to use it effectively to craft clear and engaging messages.  With their guidance, you'll be writing awesome stories and messages that impress everyone!</p>

      <h4 className="margin-y-50 text-center">Speaking Cheerleaders:</h4>
      
      <p>Feeling a little nervous about speaking up in class? Don't worry, <strong>English teachers</strong> are your biggest cheerleaders! They'll provide you with a safe and supportive environment to practice conversations and presentations. Through fun activities and role-playing exercises, they'll help you build your confidence and empower you to share your ideas with the world in a clear and engaging way.</p>

      <h4 className="margin-y-50 text-center">Listening Detectives:</h4>
      
      <p><strong>English teachers</strong> are like listening detectives, helping you develop the skills to become a super listener. They'll train your ears to pick up the nuances of spoken English, whether it's a teacher explaining a concept or a friend telling a funny joke.  With their help, you'll be able to understand what others are saying and actively participate in conversations.</p>

      <h4 className="margin-y-50 text-center">Language Explorers:</h4>
      
      <p>But <strong>English teachers</strong> are more than just skill instructors; they're also language explorers! They'll take you on a fascinating journey to uncover the secrets of the English language. You'll learn how English is used in different situations, from writing a formal letter to telling a captivating story. They might even share some fun facts about the history of the English language and how it has evolved over time.</p>

      <p><strong>English teachers</strong> are there for you every step of the way. They're there to answer your questions, celebrate your achievements, and make learning English an engaging and enriching experience. They want to see you become a master of words, confident in using English to communicate, explore, and express yourself creatively!</p>

      {/* =============================
            🌻 Think simply!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">🌻 Think simply!</h3>

      <p>An <strong>English teacher</strong> is like a superhero for your words! They help you become strong in using English to talk, write, and understand others.</p>

        <ul className="list-square">

          <li><strong>Do you love listening to stories about princesses and dragons</strong>? English teachers help you understand those stories even better!</li>

          <li><strong>Do you want to write a cool message to your friend about your favorite toy</strong>? They show you the magic tricks of spelling and grammar to make your message super clear.</li>

          <li><strong>Feeling shy to talk in class</strong>? <strong>English teachers</strong> help you practice talking so you can roar like a lion and share your ideas with confidence!</li>

          <li>They give you special listening superpowers to understand what your friends and teachers are saying.</li>

          <li><strong>English teachers</strong> are like explorers who take you on adventures in the world of words! They show you all the fun ways to use English and how it's changed over time.</li>

        </ul>

      <p className="margin-top-20">So whenever you're learning English, remember your friendly <strong>English teacher</strong> is there to cheer you on and help you become a word superhero!</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>April 14, 2024 · by 💎Gem ·</span>
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