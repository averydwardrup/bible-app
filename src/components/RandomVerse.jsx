import { useState, useEffect } from "react";
import {
  IconRefresh,
  IconBrandFacebookFilled,
  IconShare2,
} from "@tabler/icons-react";

/**
 * A React component that displays a random Bible verse from the King James Version.
 * When the user clicks the refresh button, it fetches a new random verse.
 *
 * Props:
 *   - None
 *
 * State:
 *   - verse: The current random verse, or null if there's an error.
 *   - error: The error message if there's an error, or null if there's not.
 *
 * Hooks:
 *   - useEffect: Calls the fetchRandomVerse function when the component mounts.
 *
 * Functions:
 *   - fetchRandomVerse: Fetches a new random verse from the Bible API.
 *   - handleButtonClick: Calls fetchRandomVerse when the button is clicked.
 */
export default function RandomVerse() {
  const [verse, setVerse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRandomVerse();
  }, []);

  /**
   * Fetches a new random verse from the Bible API.
   * Updates the verse state with the fetched verse data.
   * Sets the error state if there's an error.
   */
  const fetchRandomVerse = async () => {
    try {
      const response = await fetch("https://bible-api.com/data/kjv/random");
      const data = await response.json();
      setVerse(data.random_verse);
    } catch (error) {
      setError(error.message);
    }
  };

  /**
   * Handles the click event for the refresh button.
   * Calls fetchRandomVerse to update the verse.
   */
  const handleButtonClick = () => {
    fetchRandomVerse();
  };

  /**
   * Toggles the visibility of the share button wrapper.
   * Adds or removes the "is-hidden" class to/from the element with the class
   * "show-button-wrapper", effectively showing or hiding the share buttons.
   */
  const showShare = () => {
    document
      .querySelector(".show-button-wrapper")
      .classList.toggle("is-hidden");
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  // TODO: Adjust loading state to include Bulm Skeloton component
  if (!verse) {
    return <div>Loading...</div>;
  }

  // TODO: Setup ability to share the randomly generated verse
  return (
    <div className="pt-5">
      <div className="share-buttons" onClick={showShare}>
        <IconShare2
          color="rgba(00,00,00,0.75)"
          size={18}
          className="is-clickable"
        />
        <div className="show-button-wrapper is-hidden">
          <a href="#" className="share-button">
            <IconBrandFacebookFilled color="rgba(00,00,00,0.75)" size={18} />
          </a>
        </div>
      </div>
      <p className="subtitle verse mb-3">
        <em>{verse.text}</em>
      </p>
      <p className="title book-chapter">
        {verse.book} {verse.chapter}:{verse.verse}
      </p>
      <button title="New Verse" onClick={handleButtonClick}>
        <IconRefresh />
      </button>
    </div>
  );
}
