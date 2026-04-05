import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior High School</h4>
                <h5>MTsN 31 Jakarta</h5>
              </div>
              <h3>2020 - 2023</h3>
            </div>
            <p>
              I completed my junior high school education at MTsN 31 Jakarta,
              focusing on academic fundamentals and active participation in
              various school organizations.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Vocational High School</h4>
                <h5>SMK Telkom Purwokerto</h5>
              </div>
              <h3>2023 - 2026</h3>
            </div>
            <p>
              Currently studying Software Engineering (Pengembangan Perangkat
              Lunak & Gim) at SMK Telkom Purwokerto. I am learning modern web
              technologies, software logic, and UI/UX fundamentals to build
              future-ready digital solutions.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fullstack Developer Intern</h4>
                <h5>PT. SMARTELCO SOLUSI TEKNOLOGI</h5>
              </div>
              <h3>JUN - OCT 2025</h3>
            </div>
            <p>
              Developed and maintained web applications as a Fullstack
              Developer. Involved in front-end and back-end development,
              database integration, and feature implementation while
              collaborating with the team for debugging and performance
              optimization.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX Design Intern</h4>
                <h5>PT. SMARTELCO SOLUSI TEKNOLOGI</h5>
              </div>
              <h3>JUN - OCT 2025</h3>
            </div>
            <p>
              Designed web application interfaces using Figma and Adobe tools.
              Created wireframes and prototypes, and collaborated with
              developers to ensure user-friendly, ready-to-implement designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
