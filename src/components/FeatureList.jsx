import { useEffect, useRef } from "react";
import { animate, stagger } from "motion";

export default function FeatureList() {
  const listRef = useRef(null);

  useEffect(() => {
    const ul = listRef.current;
    if (!ul) return;

    // Start hidden
    const lis = Array.from(ul.querySelectorAll("li"));
    lis.forEach((li) => {
      li.style.opacity = "0";
      li.style.transform = "translateY(12px)";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate(
              lis,
              { transform: "translateY(0)", opacity: 1 },
              { delay: stagger(0.08), duration: 0.5, easing: "ease-out" }
            );
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    io.observe(ul);
    return () => io.disconnect();
  }, []);

  const items = [
    "Effortlessly log your mood",
    "Instant insights on your well-being",
    "Personalized music and art activities",
    "Designed for your peace of mind",
  ];

  return (
    <div className="flex md:justify-center justify-start md:ml-1 ml-3 md:text-[19px] text-sm mt-20">
      <ul
        ref={listRef}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-disc list-inside"
      >
        {items.map((text, idx) => (
          <li
            key={idx}
            className="flex gap-3 items-start group motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out hover:translate-x-0.5"
          >
            <span className="shrink-0 inline-flex items-center justify-center rounded-md">
              <img
                src="/images/Link - call-block.png"
                alt="Check"
                width={32}
                height={32}
                className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:scale-110 group-hover:rotate-3"
              />
            </span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
