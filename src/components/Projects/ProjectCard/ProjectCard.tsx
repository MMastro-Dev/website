import { useState } from "react";
import NavigationButton from "../../Navigation/NavigationButton/NavigationButton";
import Badge from "../../Badge/Badge";

export interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  status: "live" | "in-dev";
  href?: string;
  repoHref?: string;
  blogHref?: string;
  featured?: boolean;
}

const LINK_CLASS = "text-xs sm:text-sm 2xl:text-base py-1 px-3 sm:py-2 sm:px-4";

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  stack,
  status,
  href,
  repoHref,
  blogHref,
  featured = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const borderClass = featured
    ? "border-yellow/60 hover:border-yellow"
    : "border-white/20 hover:border-white/60";

  const hasFooter = Boolean(href || repoHref || blogHref);

  const openIfMobile = () => {
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 63.999rem)").matches) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={openIfMobile}
        onKeyDown={(e) => {
          if (e.key === "Enter") openIfMobile();
        }}
        className={`@container/card rounded-xl border-2 ${borderClass} p-3 xs:p-4 sm:p-6 2xl:p-10 bg-sea-blue/30 backdrop-blur-sm flex flex-col gap-2 sm:gap-4 2xl:gap-6 transition-colors duration-300 cursor-pointer md:cursor-default`}
      >
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h3 className="text-base @sm:text-xl @tb:text-2xl @2xl:text-4xl font-bold">{title}</h3>
          <Badge
            variant={status === "live" ? "live" : "in-dev"}
            label={status === "live" ? "Live" : "In development"}
          />
        </div>
        <p className="text-sm @sm:text-base max-md:hidden @2xl:text-xl text-white/70 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 @sm:gap-2">
          {stack.map((tech) => (
            <Badge key={tech} variant="neutral" label={tech} />
          ))}
        </div>
        {hasFooter && (
          <div
            className="hidden md:flex flex-wrap gap-2 @sm:gap-3 mt-auto pt-2"
            onClick={(e) => e.stopPropagation()}
          >
            {href && (
              <NavigationButton href={href} label={<span>Live</span>} additionalClassName={LINK_CLASS} />
            )}
            {repoHref && (
              <NavigationButton href={repoHref} label={<span>Code</span>} additionalClassName={LINK_CLASS} />
            )}
            {blogHref && (
              <NavigationButton href={blogHref} label={<span>Read on blog</span>} additionalClassName={LINK_CLASS} />
            )}
          </div>
        )}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-sea-blue border-2 border-white/20 rounded-xl p-6 max-w-lg w-full flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-bold">{title}</h3>
                <Badge
                  variant={status === "live" ? "live" : "in-dev"}
                  label={status === "live" ? "Live" : "In development"}
                />
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white text-2xl leading-none flex-shrink-0 transition-colors"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-1.5">
              {stack.map((tech) => (
                <Badge key={tech} variant="neutral" label={tech} />
              ))}
            </div>
            {hasFooter && (
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {href && (
                  <NavigationButton href={href} label={<span>Live</span>} additionalClassName={LINK_CLASS} />
                )}
                {repoHref && (
                  <NavigationButton href={repoHref} label={<span>Code</span>} additionalClassName={LINK_CLASS} />
                )}
                {blogHref && (
                  <NavigationButton href={blogHref} label={<span>Read on blog</span>} additionalClassName={LINK_CLASS} />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
