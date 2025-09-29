import Bookkeeping_Posts from './bookkeeping/Bookkeeping_Posts';
import English_Posts from './english_/English_Posts';
import Grammar_Posts from './english_/Grammar_Posts';
import Pronunciation_Posts from './english_/Pronunciation_Posts';
import Tienganh_Posts from './tienganh/Tienganh_Posts';
import Vocabulary_Posts from './english_/Vocabulary_Posts';

export default function Posts() {
  return [
    ...Bookkeeping_Posts (),
    ...English_Posts (),
    ...Grammar_Posts (),
    ...Pronunciation_Posts (),
    ...Tienganh_Posts (),
    ...Vocabulary_Posts ()
  ];
}