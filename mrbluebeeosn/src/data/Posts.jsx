import BookkeepingPosts from './bookkeeping/BookkeepingPosts.json';

import EnglishPosts from './english/EnglishPosts.json';
import GrammarPosts from './english/GrammarPosts.json';
import PronunciationPosts from './english/PronunciationPosts.json';

import TiengAnhPosts from './tienganh/TiengAnhPosts.json';
import VocabularyPosts from './tienganh/VocabularyPosts.json';

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