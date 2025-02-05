import React, { useState, useEffect } from "react";
import { IconVolume, IconVolumeOff } from "@tabler/icons-react";

function TextToSpeech({ text }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [utterance, setUtterance] = useState(null);

  const handlePlay = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      const newUtterance = new SpeechSynthesisUtterance(text);
      newUtterance.voice = window.speechSynthesis
        .getVoices()
        .find((voice) => voice.name === "Google US English Male");
      newUtterance.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(newUtterance);
      setUtterance(newUtterance);
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <button onClick={handlePlay} disabled={false}>
        {isPlaying ? <IconVolumeOff /> : <IconVolume />}
      </button>
    </div>
  );
}

export default TextToSpeech;
