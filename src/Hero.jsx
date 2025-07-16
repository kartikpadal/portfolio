import { useEffect, useState } from 'react';
import './index.css';

function Hero() {
  const lines = [
    "I’m a passionate web developer who loves turning ideas into interactive digital experiences.",
    "Explore my work below and see how I bring design and functionality together.",
    "I enjoy solving real-world problems and constantly pushing my boundaries as a developer.",
    "Whether it's frontend polish or backend logic, I focus on writing clean and efficient code."
  ];

  const [displayedText, setDisplayedText] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      if (charIndex < lines[currentLine].length) {
        const timeout = setTimeout(() => {
          const updatedLine = (displayedText[currentLine] || '') + lines[currentLine][charIndex];
          const newText = [...displayedText];
          newText[currentLine] = updatedLine;
          setDisplayedText(newText);
          setCharIndex(charIndex + 1);
        }, 5); // typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentLine(currentLine + 1);
          setCharIndex(0);
        }, 100); // delay before next line
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, currentLine, displayedText]);

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image"></div>
        <div className="hero-text">
          <h1>Kartik Padal</h1>
          <p className="typewriter">
            {lines.map((line, idx) => {
              const typedLine = displayedText[idx] || '';
              const isActiveLine = idx === currentLine;

              return (
                <span key={idx}>
                  {typedLine}
                  {isActiveLine && charIndex < line.length ? <span className="cursor">_</span> : null}
                  <br />
                </span>
              );
            })}
          </p>

        </div>
      </div>
    </section>
  );
}

export default Hero;
