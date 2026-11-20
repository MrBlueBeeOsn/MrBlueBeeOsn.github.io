import BookkeepingPosts from './bookkeeping/BookkeepingPosts';

import EnglishPosts from './english/EnglishPosts';
import DictationPosts from './english/DictationPosts';
import GrammarPosts from './english/GrammarPosts';
import PronunciationPosts from './english/PronunciationPosts';

import TiengAnhPosts from './tienganh/TiengAnhPosts';
import VocabularyPosts from './tienganh/VocabularyPosts';

export default function Posts() {
  return [
    ...BookkeepingPosts (),
    ...EnglishPosts (),
    ...DictationPosts (),
    ...GrammarPosts (),
    ...PronunciationPosts (),
    ...TiengAnhPosts (),
    ...VocabularyPosts ()
  ];
}