import React, { useState, useEffect } from "react";
import { IconRefresh } from "@tabler/icons-react";

const RandomVerse = () => {
  const [verse, setVerse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRandomVerse();
  }, []);

  const fetchRandomVerse = async () => {
    try {
      const response = await fetch("https://bible-api.com/data/kjv/random");
      const data = await response.json();
      setVerse(data.random_verse);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleButtonClick = () => {
    fetchRandomVerse();
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!verse) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{verse.text}</p>
      <p>
        {verse.book} {verse.chapter}:{verse.verse}
      </p>
      <button onClick={handleButtonClick}>
        <IconRefresh /> New Verse
      </button>
    </div>
  );
};

export default RandomVerse;
