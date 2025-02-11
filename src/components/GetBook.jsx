import { useState, useEffect } from "react";
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

  /**
   * Fetches the chapters of a selected book from the Bible API.
   * Updates the chapters state with the fetched chapters data.
   * Sets the loading state during the fetch process and handles any errors.
   *
   * @param {string} selectedBook - The ID of the book to fetch chapters for.
   * @returns {Promise<void>}
   */
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

  /**
   * Fetches the text of a specific chapter of a book of the Bible.
   * Updates the chapterText state with the fetched text.
   * @param {string} selectedBook - The book of the Bible to fetch from.
   * @param {string} selectedChapter - The chapter of the book to fetch.
   * @returns {Promise<void>}
   */
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

  /**
   * Handles the change event for the book selection dropdown.
   * Updates the selected book, resets the selected chapter and chapter text,
   * and fetches chapters for the newly selected book.
   *
   * @param {Event} event - The event triggered by changing the book selection.
   */
  const handleBookChange = (event) => {
    const selectedBook = event.target.value;
    setSelectedBook(selectedBook);
    setSelectedChapter("");
    setChapterText(null);
    fetchChapters(selectedBook);
  };

  /**
   * Handles the change of the chapter select element by fetching the
   * verses of the selected chapter and setting the selected chapter
   * state.
   * @param {Event} event The event that triggered this function.
   */
  const handleChapterChange = (event) => {
    const selectedChapter = event.target.value;
    setSelectedChapter(selectedChapter);
    fetchChapterText(selectedBook, selectedChapter);
  };

  /**
   * Returns a Bulma skeleton element with two paragraphs of text to
   * represent loading state.
   * @return {JSX.Element} A Bulma skeleton element with two paragraphs of text.
   */
  const loadingLines = () => {
    return (
      <>
        <div className="is-rounded skeleton-lines">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="is-rounded skeleton-lines mt-5">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
  };

  /**
   * A React component that renders a loading skeleton for a select dropdown.
   * Used as a placeholder while data is being fetched.
   *
   * Returns:
   *   A JSX element representing a loading select dropdown.
   */
  const loadingSelect = () => {
    return (
      <div className="is-rounded is-primary select is-primary">
        <select className="is-skeleton">
          <option value="">Loading...</option>
        </select>
      </div>
    );
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div>
        <div className="columns is-8">
          <div className="column is-one-third has-text-left">
            <div className="is-block mb-4">{loadingSelect()}</div>
            <div className="is-block">{loadingSelect()}</div>
          </div>
          <div className="column is-two-thirds has-text-left block">
            {loadingLines()}
          </div>
        </div>
      </div>
    );
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
          loadingLines()
        )}
      </div>
    </div>
  );
}

export default GetBook;
