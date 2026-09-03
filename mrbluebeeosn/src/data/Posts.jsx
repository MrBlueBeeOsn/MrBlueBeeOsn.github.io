import BookkeepingPosts from './bookkeeping/BookkeepingPosts';

import EnglishPosts from './english/EnglishPosts';
import GrammarPosts from './english/GrammarPosts';
import PronunciationPosts from './english/PronunciationPosts';

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