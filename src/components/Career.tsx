import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Pendidikan <span>&</span>
          <br /> pengalaman
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sekolah menengah pertama</h4>
                <h5>MTsN 31 Jakarta</h5>
              </div>
              <h3>2020 - 2023</h3>
            </div>
            <p>
              Menyelesaikan pendidikan di MTsN 31 Jakarta dengan fokus pada
              fondasi akademik dan partisipasi aktif di berbagai kegiatan organisasi
              sekolah.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sekolah menengah kejuruan</h4>
                <h5>SMK Telkom Purwokerto</h5>
              </div>
              <h3>2023 - 2026</h3>
            </div>
            <p>
              Sedang menempuh Rekayasa Perangkat Lunak (Pengembangan Perangkat Lunak
              & Gim) di SMK Telkom Purwokerto. Mempelajari teknologi web modern,
              logika perangkat lunak, dan dasar UI/UX untuk membangun solusi digital
              yang relevan.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Magang Fullstack Developer</h4>
                <h5>PT. SMARTELCO SOLUSI TEKNOLOGI</h5>
              </div>
              <h3>JUN - OKT 2025</h3>
            </div>
            <p>
              Mengembangkan dan memelihara aplikasi web sebagai pengembang fullstack,
              termasuk front-end dan back-end, integrasi basis data, serta fitur baru,
              berkolaborasi dengan tim untuk debugging dan optimasi performa.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Magang desainer UI/UX</h4>
                <h5>PT. SMARTELCO SOLUSI TEKNOLOGI</h5>
              </div>
              <h3>JUN - OKT 2025</h3>
            </div>
            <p>
              Mendesain antarmuka aplikasi web dengan Figma dan alat Adobe,
              membuat wireframe dan prototipe, serta berkoordinasi dengan pengembang
              agar desain mudah dipakai dan siap diimplementasikan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
