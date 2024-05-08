import { useEffect } from "react";
import { useState } from "react";

export default function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button onClick={scrollUp} className="fixed bottom-8 right-8 text-4xl">
          ⬆️
        </button>
      )}
    </div>
  );
}
