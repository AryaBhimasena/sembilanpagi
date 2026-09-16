"use client";

import Link from "next/link";
import "@/styles/pages/homepage.css";

const services = [
  {
    number: "01",
    title: "Administrasi tenaga kerja",
    description:
      "Kami membantu mengelola data, absensi, dokumen, dan kebutuhan administrasi tenaga kerja agar lebih tertata.",
    tag: "People operations",
  },
  {
    number: "02",
    title: "Payroll & administrasi gaji",
    description:
      "Mulai dari rekap absensi sampai perhitungan gaji dan slip gaji, prosesnya dikelola secara terstruktur.",
    tag: "Payroll support",
  },
  {
    number: "03",
    title: "Invoice & monitoring",
    description:
      "Pembuatan invoice, pengiriman, pencatatan, dan monitoring pembayaran client dilakukan dalam satu alur kerja.",
    tag: "Finance admin",
  },
];

const benefits = [
  "Tidak perlu menambah staff internal untuk pekerjaan administratif tertentu.",
  "Mengurangi beban pengelolaan ruang kerja dan perlengkapan operasional.",
  "Proses kerja lebih terdokumentasi dan mudah dipantau.",
  "Pekerjaan tetap berjalan meskipun ada anggota tim yang cuti atau berhalangan.",
  "Ruang lingkup layanan dapat disesuaikan dengan kebutuhan dan kontrak.",
];

const workflow = [
  {
    step: "01",
    title: "Ceritakan kebutuhan",
    description:
      "Sampaikan pekerjaan operasional yang ingin dibantu atau dikelola.",
  },
  {
    step: "02",
    title: "Tentukan ruang lingkup",
    description:
      "Kami menyusun alur kerja, tanggung jawab, dan kebutuhan layanan.",
  },
  {
    step: "03",
    title: "Pekerjaan mulai berjalan",
    description:
      "Proses dikelola secara rutin dengan laporan dan komunikasi yang jelas.",
  },
];

export default function HomePage() {
  return (
    <main className="sp-site">
      <nav className="sp-navbar">
        <div className="sp-container sp-navbar-inner">
          <Link href="/" className="sp-brand">
            <span className="sp-brand-mark">9</span>
            <span className="sp-brand-name">sembilan<span>pagi</span></span>
          </Link>

          <div className="sp-nav-links">
            <a href="#layanan">Layanan</a>
            <a href="#cara-kerja">Cara kerja</a>
            <a href="#tentang">Tentang</a>
          </div>

          <a href="#kontak" className="sp-nav-cta">
            Mulai ngobrol
            <span>↗</span>
          </a>
        </div>
      </nav>

      <section className="sp-hero">
        <div className="sp-container sp-hero-grid">
          <div className="sp-hero-copy">
            <div className="sp-eyebrow">
              <span className="sp-eyebrow-dot" />
              Operational services partner
            </div>

            <h1>
              Biar kami yang
              <span>mengurus</span>
              pekerjaan operasional.
            </h1>

            <p className="sp-hero-description">
              Sembilan Pagi membantu bisnis mengelola pekerjaan administratif
              yang rutin, detail, dan penting—mulai dari tenaga kerja, payroll,
              sampai invoice.
            </p>

            <div className="sp-hero-actions">
              <a href="#kontak" className="sp-button sp-button-dark">
                Ceritakan kebutuhan
                <span>↗</span>
              </a>

              <a href="#layanan" className="sp-text-link">
                Lihat layanan
                <span>↓</span>
              </a>
            </div>

            <div className="sp-hero-note">
              <span className="sp-note-icon">✳</span>
              <span>
                Dikelola dengan proses yang rapi, komunikasi yang jelas, dan
                sistem kerja yang praktis.
              </span>
            </div>
          </div>

          <div className="sp-hero-visual">
            <div className="sp-floating-label sp-floating-label-top">
              <span className="sp-label-dot sp-label-dot-green" />
              Work in progress
            </div>

            <div className="sp-orbit orbit-one" />
            <div className="sp-orbit orbit-two" />

            <div className="sp-dashboard-card">
              <div className="sp-dashboard-top">
                <div>
                  <span className="sp-mini-label">OPERATIONS / 09</span>
                  <h2>Good morning<span>.</span></h2>
                </div>

                <div className="sp-dashboard-avatar">SP</div>
              </div>

              <div className="sp-dashboard-status">
                <div className="sp-status-icon">✓</div>
                <div>
                  <strong>Semua proses berjalan</strong>
                  <span>Update terakhir beberapa saat lalu</span>
                </div>
              </div>

              <div className="sp-dashboard-stats">
                <div className="sp-stat-box">
                  <span>Data tenaga kerja</span>
                  <strong>128</strong>
                  <small>terkelola</small>
                </div>

                <div className="sp-stat-box">
                  <span>Payroll</span>
                  <strong>96%</strong>
                  <small>siap diproses</small>
                </div>
              </div>

              <div className="sp-dashboard-list">
                <div className="sp-list-heading">
                  <span>Aktivitas hari ini</span>
                  <span>•••</span>
                </div>

                <div className="sp-activity-item">
                  <div className="sp-activity-symbol symbol-blue">↗</div>
                  <div className="sp-activity-content">
                    <strong>Rekap absensi diperbarui</strong>
                    <span>Administrasi tenaga kerja</span>
                  </div>
                  <span className="sp-activity-time">09:12</span>
                </div>

                <div className="sp-activity-item">
                  <div className="sp-activity-symbol symbol-orange">Rp</div>
                  <div className="sp-activity-content">
                    <strong>Payroll sedang diperiksa</strong>
                    <span>Payroll & administrasi gaji</span>
                  </div>
                  <span className="sp-activity-time">09:36</span>
                </div>

                <div className="sp-activity-item">
                  <div className="sp-activity-symbol symbol-green">✓</div>
                  <div className="sp-activity-content">
                    <strong>Invoice berhasil dicatat</strong>
                    <span>Invoice & monitoring</span>
                  </div>
                  <span className="sp-activity-time">10:04</span>
                </div>
              </div>

              <div className="sp-dashboard-bottom">
                <span>One less thing to worry about.</span>
                <span className="sp-bottom-arrow">↗</span>
              </div>
            </div>

            <div className="sp-floating-card sp-floating-card-left">
              <span className="sp-floating-icon">✦</span>
              <div>
                <strong>Less admin</strong>
                <span>More focus</span>
              </div>
            </div>

            <div className="sp-floating-card sp-floating-card-right">
              <span className="sp-floating-number">09</span>
              <div>
                <strong>Simple process</strong>
                <span>Clear communication</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sp-container sp-hero-bottom">
          <span>Untuk bisnis yang ingin pekerjaan tetap berjalan</span>
          <div className="sp-hero-bottom-line" />
          <span>Tanpa harus mengurus semuanya sendiri</span>
        </div>
      </section>

      <section className="sp-intro-section">
        <div className="sp-container">
          <div className="sp-section-kicker">
            <span>01</span>
            <span>Kenapa Sembilan Pagi?</span>
          </div>

          <div className="sp-intro-layout">
            <h2>
              Pekerjaan kecil yang
              <span>menghabiskan banyak waktu.</span>
            </h2>

            <div className="sp-intro-content">
              <p>
                Administrasi tenaga kerja, payroll, dan invoice sering kali
                terlihat sederhana. Namun ketika dilakukan setiap hari, detail
                kecilnya bisa menyita banyak waktu dan perhatian.
              </p>

              <p>
                Kami hadir untuk membantu pekerjaan tersebut berjalan lebih
                teratur, sehingga tim Anda dapat fokus pada pekerjaan yang
                lebih utama.
              </p>

              <a href="#layanan" className="sp-round-link">
                <span>Kenali layanan</span>
                <strong>↘</strong>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-services-section" id="layanan">
        <div className="sp-container">
          <div className="sp-section-heading">
            <div>
              <div className="sp-section-kicker">
                <span>02</span>
                <span>Apa yang kami bantu?</span>
              </div>

              <h2>
                Operasional yang
                <span>lebih ringan.</span>
              </h2>
            </div>

            <p>
              Layanan dapat disesuaikan dengan kebutuhan, jumlah pekerjaan, dan
              ruang lingkup kerja sama.
            </p>
          </div>

          <div className="sp-services-grid">
            {services.map((service) => (
              <article className="sp-service-card" key={service.number}>
                <div className="sp-service-card-top">
                  <span className="sp-service-number">{service.number}</span>
                  <span className="sp-service-arrow">↗</span>
                </div>

                <div className="sp-service-card-body">
                  <span className="sp-service-tag">{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="sp-service-card-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-marquee-section" aria-label="Sembilan Pagi">
        <div className="sp-marquee">
          <span>LESS ADMIN</span>
          <i>✳</i>
          <span>MORE FOCUS</span>
          <i>✳</i>
          <span>LESS ADMIN</span>
          <i>✳</i>
          <span>MORE FOCUS</span>
        </div>
      </section>

      <section className="sp-benefit-section">
        <div className="sp-container sp-benefit-layout">
          <div className="sp-benefit-intro">
            <div className="sp-section-kicker">
              <span>03</span>
              <span>Manfaat untuk bisnis</span>
            </div>

            <h2>
              Anda fokus
              <span>pada bisnis.</span>
            </h2>

            <p>
              Kami membantu menjaga pekerjaan administratif tetap berjalan
              tanpa menambah beban pengelolaan di internal.
            </p>

            <div className="sp-benefit-sticker">
              <span>✦</span>
              <strong>One less thing<br />to worry about.</strong>
            </div>
          </div>

          <div className="sp-benefit-list">
            {benefits.map((benefit, index) => (
              <div className="sp-benefit-item" key={benefit}>
                <span className="sp-benefit-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{benefit}</p>

                <span className="sp-benefit-check">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sp-workflow-section" id="cara-kerja">
        <div className="sp-container">
          <div className="sp-section-heading sp-workflow-heading">
            <div>
              <div className="sp-section-kicker">
                <span>04</span>
                <span>Cara kerja</span>
              </div>

              <h2>
                Tidak perlu
                <span>rumit.</span>
              </h2>
            </div>

            <p>
              Kami mulai dari memahami kebutuhan Anda, lalu menyusun proses
              kerja yang mudah dijalankan bersama.
            </p>
          </div>

          <div className="sp-workflow-grid">
            {workflow.map((item, index) => (
              <div className="sp-workflow-item" key={item.step}>
                <div className="sp-workflow-number">{item.step}</div>

                <div className="sp-workflow-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                {index < workflow.length - 1 && (
                  <div className="sp-workflow-connector">→</div>
                )}
              </div>
            ))}
          </div>

          <div className="sp-contract-note">
            <span className="sp-contract-icon">✳</span>
            <div>
              <strong>Fleksibel sesuai kebutuhan</strong>
              <p>
                Kerja sama dapat menggunakan kontrak bulanan atau paket layanan
                berdasarkan ruang lingkup pekerjaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sp-about-section" id="tentang">
        <div className="sp-container sp-about-layout">
          <div className="sp-about-symbol">
            <span>9</span>
          </div>

          <div className="sp-about-content">
            <div className="sp-section-kicker">
              <span>05</span>
              <span>Tentang Sembilan Pagi</span>
            </div>

            <h2>
              Kami percaya,
              <span>pekerjaan yang rapi</span>
              membuat bisnis bergerak lebih tenang.
            </h2>

            <p>
              Sembilan Pagi dibangun dari pengalaman mengelola pekerjaan
              operasional sehari-hari—mulai dari data tenaga kerja, absensi,
              payroll, sampai invoice.
            </p>

            <p>
              Dengan proses yang terstruktur dan dukungan sistem digital, kami
              membantu bisnis mengelola pekerjaan rutin secara lebih praktis,
              konsisten, dan mudah dipantau.
            </p>
          </div>
        </div>
      </section>

      <section className="sp-contact-section" id="kontak">
        <div className="sp-container">
          <div className="sp-contact-card">
            <div className="sp-contact-top">
              <span className="sp-contact-label">LET'S WORK TOGETHER</span>
              <span className="sp-contact-symbol">✳</span>
            </div>

            <h2>
              Ada pekerjaan
              <span>yang ingin diringankan?</span>
            </h2>

            <p>
              Ceritakan kebutuhan operasional Anda. Kami akan membantu
              memetakan ruang lingkup pekerjaan yang dapat dikelola bersama.
            </p>

            <a
              href="mailto:hello@sembilanpagi.com"
              className="sp-contact-email"
            >
              hello@sembilanpagi.com
              <span>↗</span>
            </a>

            <div className="sp-contact-footer">
              <span>Sembilan Pagi</span>
              <span>Operational services, made simple.</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="sp-footer">
        <div className="sp-container sp-footer-inner">
          <div className="sp-footer-brand">
            <span className="sp-brand-mark">9</span>
            <span className="sp-brand-name">
              sembilan<span>pagi</span>
            </span>
          </div>

          <p>
            © {new Date().getFullYear()} Sembilan Pagi. All rights reserved.
          </p>

          <a href="mailto:hello@sembilanpagi.com">
            hello@sembilanpagi.com
          </a>
        </div>
      </footer>
    </main>
  );
}