import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const projects = [
    {
      id: "01",
      title: "LyraAi",
      category: "AI Chatbot",
      tools: "React, Nextjs, Tailwindcss, Typescript, Javascript, PostgreSQL",
      image: "/src/assets/Chat AI.png",
    },
    {
      id: "02",
      title: "Dashboard Admin",
      category: "Admin Dashboard AI",
      tools: "React, Nextjs, Tailwindcss, Typescript, Javascript, PostgreSQL",
      image: "/src/assets/Dashboard.png",
    },
    {
      id: "03",
      title: "Fuel",
      category: "Fuel Station Management System",
      tools: "React, Solidjs, Tailwindcss, Typescript, Javascript, Rust",
      image: "/src/assets/Fuel.png",
    },
    {
      id: "04",
      title: "VerroCafe",
      category: "Cafe",
      tools: "Laravel, PHP, MySQL, Tailwindcss",
      image: "/src/assets/VerroCaffe.png",
    },
    {
      id: "05",
      title: "Pertamina",
      category: "Fuel Station Management System",
      tools: "React, Solidjs, Tailwindcss, Typescript, Javascript, Rust",
      image: "/src/assets/Pertamina.png",
    },
    {
      id: "06",
      title: "Klinik Kecantikan",
      category: "Klinik Kecantikan",
      tools: "React, Nextjs, Tailwindcss, Typescript, Javascript",
      image: "/src/assets/KlinikKecantikan.png",
    },
    {
      id: "07",
      title: "Valentine",
      category: "Landing Page",
      tools: "React, Nextjs, Tailwindcss, Typescript, Javascript",
      image: "/src/assets/Valentine.png",
    },
  ];

  useGSAP(() => {
    const getTranslateX = () => {
      const workFlex = document.querySelector(".work-flex") as HTMLElement;
      if (!workFlex) return 0;
      const scrollable = workFlex.scrollWidth - window.innerWidth;
      return Math.max(0, scrollable + 120);
    };

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        scroller: "#smooth-wrapper",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    const refreshWork = () => ScrollTrigger.refresh(true);
    requestAnimationFrame(() => requestAnimationFrame(refreshWork));
    window.addEventListener("load", refreshWork);

    const section = document.querySelector(".work-section");
    const onImg = () => refreshWork();
    section?.querySelectorAll("img").forEach((img) => {
      const el = img as HTMLImageElement;
      if (el.complete) return;
      el.addEventListener("load", onImg, { once: true });
    });

    return () => {
      window.removeEventListener("load", refreshWork);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
