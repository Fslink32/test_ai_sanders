const services = [
  {
    title: "Engineering & Design",
    description:
      "Perancangan terintegrasi untuk fasilitas industri, dari studi kelayakan hingga detail engineering yang presisi.",
  },
  {
    title: "Procurement & Fabrication",
    description:
      "Manajemen pengadaan global, inspeksi kualitas, dan fabrikasi untuk memastikan keandalan aset.",
  },
  {
    title: "Construction & Commissioning",
    description:
      "Tim konstruksi berpengalaman yang fokus pada keselamatan, ketepatan waktu, dan operasional yang siap jalan.",
  },
  {
    title: "Operations Support",
    description:
      "Dukungan pasca-serah terima, optimasi energi, dan pemeliharaan preventif untuk keberlanjutan.",
  },
];

const highlights = [
  {
    title: "Project Execution",
    description: "Metodologi EPC modern dengan visibilitas progres real-time.",
  },
  {
    title: "HSE Excellence",
    description: "Budaya keselamatan dan kepatuhan regulasi di setiap tahap proyek.",
  },
  {
    title: "Digital Engineering",
    description: "Integrasi BIM, digital twin, dan analitik untuk efisiensi desain.",
  },
];

const projects = [
  "Revamping fasilitas petrochemical di Jawa Timur",
  "Pembangunan pabrik CPO berkapasitas tinggi",
  "Instalasi utilitas dan pipeline untuk smelter",
  "Pengembangan terminal energi bersih",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <nav className="nav">
            <div className="logo">Sanders</div>
            <div className="nav-links">
              <a href="#services">Layanan</a>
              <a href="#projects">Proyek</a>
              <a href="#about">Tentang</a>
              <a href="#contact">Kontak</a>
            </div>
            <button className="button">Konsultasi</button>
          </nav>

          <div className="hero-grid">
            <div>
              <span className="badge">EPC Modern & Terintegrasi</span>
              <h1>Transformasi infrastruktur industri Indonesia dengan solusi EPC end-to-end.</h1>
              <p>
                Terinspirasi dari keunggulan Sanders, kami menghadirkan layanan engineering, procurement,
                construction, hingga commissioning yang adaptif dan berorientasi pada keberlanjutan.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <button className="button">Mulai Proyek Anda</button>
                <button className="button secondary">Lihat Portofolio</button>
              </div>
            </div>
            <div className="hero-card">
              <h2>Trusted by Industry Leaders</h2>
              <p>
                Portofolio kami mencakup energi, petrochemical, pertambangan, hingga manufaktur. Setiap
                proyek dijalankan dengan fokus pada kualitas, ketepatan waktu, dan inovasi teknologi.
              </p>
              <div className="stats" style={{ marginTop: 24 }}>
                <div className="stat">
                  <strong>120+</strong>
                  <span>Proyek terselesaikan</span>
                </div>
                <div className="stat">
                  <strong>98%</strong>
                  <span>On-time delivery</span>
                </div>
                <div className="stat">
                  <strong>40+</strong>
                  <span>Partner global</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="container">
        <h2 className="section-title">Layanan unggulan Sanders</h2>
        <p className="section-subtitle">
          Mengadopsi pendekatan one-stop service untuk memastikan integrasi antar tim desain, pengadaan,
          dan konstruksi berjalan mulus.
        </p>
        <div className="grid">
          {services.map((service) => (
            <div key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="grid">
          {highlights.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="container">
        <h2 className="section-title">Portofolio proyek terbaru</h2>
        <p className="section-subtitle">
          Kami membangun proyek yang selaras dengan visi jangka panjang klien, dari optimalisasi fasilitas
          hingga ekspansi industri baru.
        </p>
        <div className="projects">
          {projects.map((project) => (
            <div key={project} className="project">
              <strong>{project}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="container">
        <div className="testimonial">
          <h2>“Sanders menghadirkan eksekusi proyek yang transparan dan dapat diandalkan.”</h2>
          <span>Direktur Operasional, Mitra Energi Nasional</span>
        </div>
      </section>

      <section className="container">
        <div className="cta">
          <div>
            <h2>Siap mempercepat proyek strategis Anda?</h2>
            <p>
              Jadwalkan sesi konsultasi bersama tim kami untuk merancang roadmap proyek yang sesuai dengan
              target bisnis dan regulasi.
            </p>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button className="button">Jadwalkan Meeting</button>
            <button className="button secondary">Unduh Company Profile</button>
          </div>
        </div>
      </section>

      <section id="contact" className="container">
        <h2 className="section-title">Hubungi kami</h2>
        <p className="section-subtitle">
          Tim kami siap berdiskusi tentang kebutuhan proyek Anda. Kami beroperasi di Jakarta dan berbagai
          site industri di Indonesia.
        </p>
        <div className="grid">
          <div className="card">
            <h3>Kantor Pusat</h3>
            <p>Jl. Jendral Sudirman Kav. 52-53, Jakarta Selatan</p>
          </div>
          <div className="card">
            <h3>Email</h3>
            <p>hello@sanders.co.id</p>
          </div>
          <div className="card">
            <h3>Telepon</h3>
            <p>+62 21 555 8900</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3>Sanders</h3>
            <small>Engineering & Construction Partner</small>
          </div>
          <div>
            <strong>Layanan</strong>
            <ul style={{ listStyle: "none", marginTop: 12, display: "grid", gap: 8 }}>
              <li>Engineering</li>
              <li>Procurement</li>
              <li>Construction</li>
              <li>Commissioning</li>
            </ul>
          </div>
          <div>
            <strong>Industri</strong>
            <ul style={{ listStyle: "none", marginTop: 12, display: "grid", gap: 8 }}>
              <li>Energi</li>
              <li>Petrochemical</li>
              <li>Mineral Processing</li>
              <li>Manufaktur</li>
            </ul>
          </div>
          <div>
            <strong>Kontak</strong>
            <ul style={{ listStyle: "none", marginTop: 12, display: "grid", gap: 8 }}>
              <li>hello@sanders.co.id</li>
              <li>+62 21 555 8900</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="container" style={{ marginTop: 32 }}>
          <small>© 2024 Sanders. All rights reserved.</small>
        </div>
      </footer>
    </main>
  );
}
