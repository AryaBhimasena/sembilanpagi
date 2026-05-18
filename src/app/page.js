"use client";

import "@/style/home.css";

const services = [
  "Rekap absensi dan administrasi karyawan",
  "Payroll dan penggajian operasional",
  "Pembuatan invoice dan tagihan client",
  "Laporan pemasukan dan pengeluaran",
  "Pengelolaan spreadsheet operasional",
  "Dokumentasi dan laporan administrasi",
];

const process = [
  {
    step: "01",
    title: "Diskusi Kebutuhan",
    desc: "Kami memahami alur administrasi dan pekerjaan operasional di perusahaan Anda.",
  },
  {
    step: "02",
    title: "Menyiapkan Sistem Kerja",
    desc: "Format kerja dan laporan dirapikan agar lebih mudah dijalankan dan dipantau.",
  },
  {
    step: "03",
    title: "Administrasi Dijalankan",
    desc: "Pekerjaan administrasi dijalankan secara rutin, rapi, dan konsisten setiap hari.",
  },
  {
    step: "04",
    title: "Laporan & Monitoring",
    desc: "Anda menerima laporan berkala agar operasional tetap terkontrol dengan baik.",
  },
];

export default function HomePage() {
  return (
    <main className="home">
      {/* NAVBAR */}

      <header className="navbar">
        <div className="container navbar-content">
          <div className="brand">
            SEMBILAN PAGI
          </div>

          <nav className="desktop-nav">
            <a href="#tentang">Tentang</a>
            <a href="#layanan">Layanan</a>
            <a href="#cara-kerja">Cara Kerja</a>
            <a href="#kontak">Kontak</a>
          </nav>

          <button className="primary-btn">
            Konsultasi
          </button>
        </div>
      </header>

      {/* HERO */}

      <section
        className="hero"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(246,245,242,0.84), rgba(246,245,242,0.96)), url('/images/hero-bg.png')",
        }}
      >
        <div className="container hero-content">
          <div className="hero-badge">
            Partner Administrasi Bisnis
          </div>

          <h1>
            Administrasi lebih rapi,
            bisnis lebih fokus berjalan.
          </h1>

          <p>
            Sembilan Pagi membantu perusahaan
            menjalankan pekerjaan administrasi
            harian tanpa harus repot mengelola
            admin internal sendiri.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">
              Konsultasi Gratis
            </button>

            <button className="secondary-btn">
              Pelajari Layanan
            </button>
          </div>

          <div className="hero-points">
            <div>Laporan lebih rapi</div>
            <div>Data lebih tertata</div>
            <div>Operasional lebih stabil</div>
            <div>Monitoring lebih mudah</div>
          </div>
        </div>
      </section>

		{/* ABOUT */}

		<section
		  className="section section-border"
		  id="tentang"
		>
		  <div className="container about-grid">
			<div className="about-content">
			  <div className="section-label">
				TENTANG SEMBILAN PAGI
			  </div>

			  <h2 className="section-title">
				Bisnis tetap berjalan,
				administrasi tetap beres.
			  </h2>

			  <p className="section-description second-paragraph">
				Banyak perusahaan membutuhkan admin,
				tetapi tidak ingin repot mengurus
				rekrutmen, payroll, BPJS, cuti,
				dan operasional tim admin setiap hari.
			  </p>

			  <p className="section-description second-paragraph">
				Sembilan Pagi membantu pekerjaan
				administrasi tetap rapi, teratur,
				dan mudah dipantau tanpa menambah
				beban operasional perusahaan.
			  </p>

			  <div className="about-benefits">
				<div className="about-benefit-item">
				  <span />
				  Laporan lebih rapi dan tepat waktu
				</div>

				<div className="about-benefit-item">
				  <span />
				  Data lebih terstruktur dan mudah dicari
				</div>

				<div className="about-benefit-item">
				  <span />
				  Tidak perlu mengelola admin internal
				</div>

				<div className="about-benefit-item">
				  <span />
				  Operasional lebih ringan dan efisien
				</div>
			  </div>
			</div>

			<div className="about-image">
			  <img
				src="/images/about.png"
				alt="Administrasi bisnis yang lebih rapi dan teratur"
			  />
			</div>
		  </div>
		</section>

      {/* SERVICES */}

      <section
        className="section services-section"
        id="layanan"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.96)), url('/images/service-bg.png')",
        }}
      >
        <div className="container">
          <div className="section-label">
            LAYANAN
          </div>

          <div className="service-layout">
            <div>
              <h2 className="section-title">
                Pekerjaan administrasi yang
                membantu bisnis berjalan
                lebih teratur.
              </h2>

              <p className="section-description">
                Seluruh pekerjaan administrasi
                dijalankan secara rutin agar
                data, laporan, dan operasional
                bisnis lebih mudah dipantau.
              </p>
            </div>

            <div className="service-list">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="service-item"
                >
                  <span>
                    0{index + 1}
                  </span>

                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}

      <section className="section soft-section">
        <div className="container">
          <div className="whyus-card">
            <div>
              <div className="section-label">
                KENAPA SEMBILAN PAGI?
              </div>

              <h2 className="section-title">
                Bukan sekadar input data.
              </h2>
            </div>

            <div className="whyus-content">
              <p>
                Kami membantu administrasi bisnis
                berjalan lebih rapi, konsisten,
                dan mudah dipantau setiap hari.
              </p>

              <p>
                Fokus kami bukan hanya mengerjakan
                tugas admin, tetapi membantu
                operasional bisnis berjalan
                lebih ringan dan teratur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section
        className="section"
        id="cara-kerja"
      >
        <div className="container">
          <div className="section-label">
            CARA KERJA
          </div>

          <h2 className="section-title process-title">
            Proses kerja yang sederhana
            dan mudah dijalankan.
          </h2>

          <div className="process-grid">
            {process.map((item) => (
              <div
                key={item.step}
                className="process-card"
              >
                <div className="process-step">
                  {item.step}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="section">
        <div className="container">
          <div
            className="cta-box"
            style={{
              backgroundImage:
                "linear-gradient(rgba(19,31,48,0.84), rgba(19,31,48,0.92)), url('/images/cta-bg.png')",
            }}
          >
            <div className="section-label light">
              SEMBILAN PAGI
            </div>

            <h2>
              Administrasi tetap berjalan.
              <br />
              Bisnis bisa fokus terus berkembang.
            </h2>

            <p>
              Kurangi beban administrasi harian
              dan bangun operasional bisnis yang
              lebih teratur bersama Sembilan Pagi.
            </p>

            <button className="white-btn">
              Diskusikan Kebutuhan Anda
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        className="footer"
        id="kontak"
      >
        <div className="container footer-content">
          <div>
            <div className="brand footer-brand">
              SEMBILAN PAGI
            </div>

            <p>
              Partner administrasi bisnis untuk
              membantu operasional perusahaan
              tetap rapi dan teratur.
            </p>
          </div>

          <div className="footer-links">
            <a href="#">
              hello@sembilanpagi.com
            </a>

            <a href="#">
              WhatsApp
            </a>

            <a href="#">
              Instagram
            </a>
          </div>
        </div>
      </footer>

      {/* MOBILE NAV */}

      <div className="mobile-nav">
        <a href="#tentang">Tentang</a>
        <a href="#layanan">Layanan</a>
        <a href="#cara-kerja">Cara Kerja</a>
        <a href="#kontak">Kontak</a>
      </div>
    </main>
  );
}