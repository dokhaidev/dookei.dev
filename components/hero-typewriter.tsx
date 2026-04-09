"use client";

import { useEffect, useState } from "react";

const words = ["Hello", "Richard Huynh"];

export function HeroTypewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const doneTyping = text === currentWord;
    const doneDeleting = text.length === 0;

    let delay = isDeleting ? 55 : 95;
    if (doneTyping && !isDeleting) delay = 1250;
    if (doneDeleting && isDeleting) delay = 320;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (doneTyping) {
          setIsDeleting(true);
        } else {
          setText(currentWord.slice(0, text.length + 1));
        }
      } else if (doneDeleting) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(currentWord.slice(0, text.length - 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, text, wordIndex]);

  return (
    <p className="hero-script">
      {text}
      <span className="hero-caret">|</span>
    </p>
  );
}

