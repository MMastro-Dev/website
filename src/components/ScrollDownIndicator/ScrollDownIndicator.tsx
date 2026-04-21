import { useEffect, useState } from "react";

interface ScrollDownIndicatorProps {
  label?: React.ReactNode;
  scrollContainerRef: React.RefObject<HTMLElement | null>;
  onClick: () => void;
}

const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({ label = "scroll", scrollContainerRef, onClick }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const handleScroll = () => {
      setVisible(el.scrollTop < 60);
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll down"
      className={`
        fixed bottom-8 left-1/2 -translate-x-1/2
        md:hidden
        flex flex-col items-center
        text-white cursor-pointer
        transition-opacity duration-500
        ${visible ? "opacity-70 hover:opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="flex flex-col items-center gap-3 animate-float">
        <span className="text-[0.6rem] tb:text-[0.7rem] font-semibold tracking-[0.2em] uppercase">{label}</span>
        <svg
          className="w-5 h-5 tb:w-7 tb:h-7 rotate-90"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </div>
    </button>
  );
};

export default ScrollDownIndicator;
