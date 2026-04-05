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
        <h3 className="title">About Me</h3>
        <p className="about-me-content">
          <b>Hi, I'm Muhammad Zelvan Islamic Faaza</b>
          <br />
          I am a passionate Front-End Developer specializing in building modern,
          responsive, and user-friendly web applications using React and
          TailwindCSS. With experience in API integration and basic fullstack
          knowledge, I focus on creating efficient, scalable interfaces while
          continuously improving through real-world projects.
        </p>
      </div>
    </div>
  );
};

export default About;
