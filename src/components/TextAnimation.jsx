import { useEffect } from "react";
import "../styles/TextAnimation.css";

export default function TextAnimation() {
  const items = [
    "Too Many Apps",
    "Too Many Promises",
    "Too Much Pressure",
    "Too Little Peace",
    "Too Much Overthinking",
  ];

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");
    });
  }, []);

  return (
    <div className="scroller mx-auto">
      <ul className="tag-list scroller__inner">
        {[...items, ...items].map((text, idx) => (
          <li
            key={idx}
            className="flex text-center px-6 py-3 rounded-[2rem] border border-[#9737ff]/60 max-w-xs"
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
