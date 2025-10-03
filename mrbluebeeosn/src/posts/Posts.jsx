import BookkeepingPosts from './bookkeeping/BookkeepingPosts';

import EnglishPosts from './english_/EnglishPosts';
import GrammarPosts from './english_/GrammarPosts';
import PronunciationPosts from './english_/PronunciationPosts';

import TiengAnhPosts from './tienganh/TiengAnhPosts';
import VocabularyPosts from './tienganh/VocabularyPosts';

export default function Posts() {
  return [
    ...BookkeepingPosts (),
    ...EnglishPosts (),
    ...GrammarPosts (),
    ...PronunciationPosts (),
    ...TiengAnhPosts (),
    ...VocabularyPosts ()
  ];
}