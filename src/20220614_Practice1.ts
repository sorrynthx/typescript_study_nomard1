type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;

  // 수동으로 초기화
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(
    public term: string, // 단어
    public def: string // 뜻
  ) {}
}

const kimchi = new Word("kimchi", "김치");
const dict = new Dict();
dict.add(kimchi);

console.log(dict.def("kimchi"));
