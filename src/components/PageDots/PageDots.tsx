import { useEffect, useState } from "react";

interface PageDotsProps {
  scrollContainerRef: React.RefObject<HTMLElement | null>;
  sectionRefs: React.RefObject<HTMLDivElement | null>[];
  labels: string[];
  showOnFirstPage?: boolean;
}

const PageDots: React.FC<PageDotsProps> = ({ scrollContainerRef, sectionRefs, labels, showOnFirstPage = false }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const compute = () => {
      const horizontal = el.scrollLeft > 0 || el.scrollWidth > el.clientWidth + 1;
      const pos = horizontal ? el.scrollLeft + el.clientWidth / 2 : el.scrollTop + el.clientHeight / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      sectionRefs.forEach((ref, i) => {
        const node = ref.current;
        if (!node) return;
        const center = horizontal
          ? node.offsetLeft + node.clientWidth / 2
          : node.offsetTop + node.clientHeight / 2;
        const dist = Math.abs(center - pos);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      setActive(bestIdx);
    };

    compute();
    el.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      el.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [scrollContainerRef, sectionRefs]);

  const handleClick = (i: number) => {
    sectionRefs[i].current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  };

  return (
    <div
      className={`${!showOnFirstPage && (active <= 0) ? "max-md:hidden" : ""} fixed z-20 flex gap-2.5 sm:gap-3 bottom-20 left-1/2 -translate-x-1/2 flex-row md:bottom-auto md:left-auto md:translate-x-0 md:right-6 md:top-1/2 md:-translate-y-1/2 md:flex-col`}
    >
      {sectionRefs.map((_, i) => {
        const isActive = i === active;
        return (
          <button
            key={labels[i] ?? i}
            type="button"
            onClick={() => handleClick(i)}
            aria-label={labels[i] ?? `Section ${i + 1}`}
            aria-current={isActive ? "true" : undefined}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-white/60 transition-all duration-300 cursor-pointer ${
              isActive ? "bg-white scale-125" : "hover:bg-white/40"
            }`}
          />
        );
      })}
    </div>
  );
};

export default PageDots;
