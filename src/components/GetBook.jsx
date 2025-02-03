import React, { useState, useEffect } from "react";

function GetBook() {
  const [books, setBooks] = useState(null);
  const [selectedBook, setSelectedBook] = useState("");
  const [chapters, setChapters] = useState(null);
  const [chapterText, setChapterText] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://bible-api.com/data/kjv");
      const data = await response.json();
      setBooks(data.books);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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
    fetchChapters(selectedBook);
  };

  const handleChapterChange = (event) => {
    const selectedChapter = event.target.value;
    setSelectedChapter(selectedChapter);
    fetchChapterText(selectedBook, selectedChapter);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="columns is-8">
      <div className="column is-one-third has-text-left is-sticky">
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
        {chapterText && (
          <div className="mb-4">
            <h3>{chapterText.reference}</h3>
            {chapterText.verses.map((verse) => (
              <div key={verse.verse} className="mb-2">
                <sup>{verse.verse}</sup>
                {verse.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GetBook;
