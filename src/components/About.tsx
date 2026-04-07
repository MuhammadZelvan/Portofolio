import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./styles/About.css";

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-me-content",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">Tentang saya</h3>
        <p className="about-me-content">
          <b>Halo, saya Muhammad Zelvan Islamic Faaza</b>
          <br />
          Saya pengembang front-end yang fokus membangun aplikasi web modern,
          responsif, dan ramah pengguna dengan React dan Tailwind CSS. Berpengalaman
          mengintegrasikan API serta memahami dasar fullstack; saya mengutamakan
          antarmuka yang efisien dan skalabel, sambil terus berkembang lewat proyek nyata.
        </p>
      </div>
    </div>
  );
};

export default About;
