import bible from '../../scriptures/danicic-karadzic-ijekavski.json';

export default class Display {
  static verse(bookName, chapterNum, verseNum) {
    const book = bible.books.find(
      (b) => b.name.toLowerCase() === bookName.toLowerCase()
    );
    if (!book) return null;

    const chapter = book.chapters.find((c) => c.chapter === chapterNum);
    if (!chapter) return null;

    const verse = chapter.verses.find((v) => v.verse === verseNum);
    return verse?.text || null;
  }
}
