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
      <p className="subtitle"><em>&quot;{verse.text}&quot;</em></p>
      <p className="title">
        {verse.book} {verse.chapter}:{verse.verse}
      </p>
      <button title="New Verse" onClick={handleButtonClick}>
        <IconRefresh />
      </button>
    </div>
  );
};

export default RandomVerse;
