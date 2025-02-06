import React, { useState, useEffect } from "react";
import TextToSpeech from "./textToSpeech";
import { booksArray } from "../data/books";

function GetBook() {
  const [books, setBooks] = useState(booksArray);
  const [selectedBook, setSelectedBook] = useState("");
  const [chapters, setChapters] = useState(null);
  const [chapterText, setChapterText] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchChapters = async (selectedBook) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://bible-api.com/data/kjv/${selectedBook}`
      );
      const data = await response.json();
      setChapters(data.chapters);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchChapterText = async (selectedBook, selectedChapter) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://bible-api.com/${selectedBook}+${selectedChapter}?translation=kjv`
      );
      const data = await response.json();
      setChapterText(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBookChange = (event) => {
    const selectedBook = event.target.value;
    setSelectedBook(selectedBook);
    setSelectedChapter("");
    setChapterText(null);
    fetchChapters(selectedBook);
  };

  const handleChapterChange = (event) => {
    const selectedChapter = event.target.value;
    setSelectedChapter(selectedChapter);
    fetchChapterText(selectedBook, selectedChapter);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="columns is-8">
      <div className="column is-one-third has-text-left">
        <div className="select is-rounded is-primary mb-4">
          <select value={selectedBook} onChange={handleBookChange}>
            <option value="">Select a book</option>
            {books.map((book) => (
              <option key={book.id} value={book.id}>
                {book.name}
              </option>
            ))}
          </select>
        </div>
        {chapters && (
          <div className="select is-rounded is-primary">
            <select value={selectedChapter} onChange={handleChapterChange}>
              <option value="">Select a chapter</option>
              {chapters.map((chapter) => (
                <option
                  key={`${selectedBook}-${chapter.chapter}-${Math.random()
                    .toString(36)
                    .substr(2, 9)}`}
                  value={chapter.chapter}
                >
                  {chapter.chapter}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className="column is-two-thirds has-text-left block">
        {chapterText ? (
          <div className="mb-4">
            <div className="is-flex is-flex-direction-row is-align-items-center">
              <div className="flexitem pr-2">
                <h3 className="is-size-3">{chapterText.reference}</h3>
              </div>
              <div className="flexitem pt-2">
                <TextToSpeech
                  text={chapterText.verses.map((verse) => verse.text).join(" ")}
                />
              </div>
            </div>
            {chapterText.verses.map((verse) => (
              <div key={verse.verse} className="mb-2">
                <sup>{verse.verse}</sup>
                {verse.text}
              </div>
            ))}
          </div>
        ) : (
          <div className="skeleton-lines">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GetBook;
