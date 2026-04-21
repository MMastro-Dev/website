import ProjectCard, { ProjectCardProps } from "../ProjectCard/ProjectCard";

const PROJECTS: ProjectCardProps[] = [
  {
    title: "CV Matching Tool",
    description:
      "A React form that submits a job posting to a FastAPI + LLM backend, generates a tailored CV, and publishes it to cv.mmastro.dev.",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "LLM APIs", "RAG"],
    status: "in-dev",
    featured: true,
  },
  {
    title: "mmastro.dev",
    description:
      "This site. React + TypeScript frontend, Tailwind v4, deployed via Gitea CI/CD with strict TypeScript and zero any.",
    stack: ["React", "TypeScript", "Tailwind v4", "Vite"],
    status: "live",
    repoHref: "https://github.com/MMastro-Dev/website",
  },
  {
    title: "FastAPI AI Service",
    description:
      "Backend agent service powering the CV matching tool. FastAPI with SQLAlchemy, background tasks, and a structured LLM workflow.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "LLM APIs"],
    status: "in-dev",
  },
  {
    title: "Homelab & Infrastructure",
    description:
      "Self-hosted stack: Caddy reverse proxy, oauth2-proxy + Pocket ID (passkeys), Gitea, Hugo sites, and monitoring. Details on the blog.",
    stack: ["Caddy", "Docker", "Gitea CI/CD", "Hugo", "oauth2-proxy", "Linux"],
    status: "live",
    blogHref: "https://blog.mmastro.dev",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center text-white bg-[url('/assets/Images/cartographer.png')] max-md:overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-10 sm:py-12 flex flex-col gap-4 sm:gap-10 2xl:gap-14 w-full">
        <div className="flex flex-col items-center text-center gap-1 sm:gap-2">
          <h2 className="text-3xl sm:text-5xl 2xl:text-8xl font-bold">Projects</h2>
          <p className="text-sm sm:text-xl 2xl:text-3xl text-white/60">Things I'm building</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 2xl:gap-10">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
