import Image from "next/image";
import "@/styles/pages/profil-iyaz.css";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/USERNAME",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/USERNAME",
    icon: "facebook",
  },
  {
    name: "Lynk.id",
    href: "https://lynk.id/USERNAME",
    icon: "lynk",
  },
];

const projects = [
  {
    number: "01",
    name: "Cashbook",
    category: "WEB APPLICATION",
    description:
      "Aplikasi cash management online untuk mencatat transaksi dan memantau saldo kas maupun bank dengan lebih praktis.",
    href: "https://cashbook.software.web.id",
    visual: "cashbook",
    tags: ["Web App", "Cash Management"],
  },
  {
    number: "02",
    name: "Excel Templates",
    category: "WORK PRODUCTIVITY",
    description:
      "Template kerja dan solusi spreadsheet untuk membantu pengelolaan data, administrasi, serta pekerjaan rutin.",
    href: null,
    visual: "excel",
    tags: ["Excel", "Spreadsheet"],
  },
  {
    number: "03",
    name: "Web & Digital Solutions",
    category: "WEB DEVELOPMENT",
    description:
      "Pengembangan website dan aplikasi digital yang disesuaikan dengan kebutuhan, alur kerja, dan tujuan bisnis.",
    href: null,
    visual: "web",
    tags: ["Website", "Digital Product"],
  },
];

const services = [
  {
    number: "01",
    title: "Excel & Spreadsheet",
    description:
      "Pembuatan template kerja, laporan otomatis, dashboard, dan solusi spreadsheet sesuai kebutuhan.",
    icon: "spreadsheet",
  },
  {
    number: "02",
    title: "Web Application",
    description:
      "Aplikasi web untuk membantu pencatatan, administrasi, pengolahan data, dan proses kerja bisnis.",
    icon: "application",
  },
  {
    number: "03",
    title: "Website & Landing Page",
    description:
      "Website company profile, halaman promosi, dan landing page dengan tampilan profesional.",
    icon: "website",
  },
];

function ArrowIcon({ diagonal = false, className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {diagonal ? (
        <path
          d="M7 17L17 7M7 7H17V17"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M5 12H19M12 5L19 12L12 19"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function SocialIcon({ type }) {
  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="21"
        height="21"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="17.5" cy="6.8" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="21"
        height="21"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.1H7v3.2h2.7V21h3.7Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="21"
      height="21"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M7 7H17V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceIcon({ type }) {
  if (type === "spreadsheet") {
    return (
      <svg viewBox="0 0 24 24" width="25" height="25" fill="none" aria-hidden="true">
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3.5 9H20.5M9 9V20.5M14.5 9V20.5M3.5 14.5H20.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  if (type === "application") {
    return (
      <svg viewBox="0 0 24 24" width="25" height="25" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="4"
          width="18"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 8.5H21M7 6.2H7.1M10 6.2H10.1M8 12H16M8 15.5H13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="25" height="25" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 8H21M7 6H7.1M10 6H10.1M8 12H16M8 15.5H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function IyazPage() {
  return (
    <main className="iyaz-site" id="top">
      {/* Header */}
      <header className="iyaz-header">
        <a className="iyaz-logo" href="#top" aria-label="Iyaz — Beranda">
          iyaz<span>.</span>
        </a>

        <nav className="iyaz-header-nav" aria-label="Navigasi utama">
          <a href="#about">Tentang</a>
          <a href="#work">Portofolio</a>
          <a href="#services">Layanan</a>
        </nav>

        <a className="iyaz-header-contact" href="#contact">
          Mari terhubung <ArrowIcon diagonal />
        </a>
      </header>

      {/* Hero */}
      <section className="iyaz-hero">
        <div className="iyaz-hero-copy">
          <div className="iyaz-availability">
            <span />
            PERSONAL PROFILE & DIGITAL WORK
          </div>

          <h1>
            Halo, saya
            <br />
            <span>Iyaz.</span>
          </h1>

          <p className="iyaz-hero-lead">
            Saya membantu mengubah pekerjaan yang rumit menjadi solusi digital
            yang lebih sederhana, rapi, dan efisien.
          </p>

          <p className="iyaz-hero-description">
            Mulai dari template Excel dan otomasi kerja, hingga aplikasi web,
            website, serta landing page untuk kebutuhan bisnis.
          </p>

          <div className="iyaz-hero-actions">
            <a className="iyaz-btn iyaz-btn-primary" href="#work">
              Lihat portofolio <ArrowIcon />
            </a>

            <a className="iyaz-btn iyaz-btn-text" href="#contact">
              Diskusikan kebutuhan Anda
            </a>
          </div>

          <div className="iyaz-hero-social">
            <span className="iyaz-social-caption">FIND ME ON</span>

            <div className="iyaz-social-icons">
              {socialLinks.map((social) => (
                <a
                  className="iyaz-social-icon-link"
                  href={social.href}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka ${social.name}`}
                  title={social.name}
                >
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </div>

            <span className="iyaz-social-hint">Ikuti dan terhubung ↗</span>
          </div>
        </div>

        <div className="iyaz-hero-photo-column">
          <div className="iyaz-photo-frame">
            <Image
              src="/images/iyaz-profile1.jpg"
              alt="Foto profil Iyaz"
              fill
              priority
              sizes="(max-width: 760px) 90vw, 42vw"
              className="iyaz-profile-photo"
            />

            <div className="iyaz-photo-overlay">
              <span>HELLO, NICE TO MEET YOU.</span>
              <span>IR / PERSONAL PROFILE</span>
            </div>
          </div>

          <div className="iyaz-photo-note">
            <span className="iyaz-photo-note-symbol">✳</span>
            <div>
              <strong>Ideas into solutions.</strong>
              <span>Technology · Productivity · Digital</span>
            </div>
          </div>

          <span className="iyaz-photo-index">PROFILE — 001</span>
        </div>

        <span className="iyaz-hero-decoration" aria-hidden="true">
          ✳
        </span>
      </section>

      {/* About */}
      <section className="iyaz-about section-shell" id="about">
        <div className="iyaz-section-kicker">
          <span>01 / A LITTLE ABOUT ME</span>
          <span className="iyaz-kicker-line" />
        </div>

        <div className="iyaz-about-grid">
          <h2>
            Saya percaya teknologi harus membuat pekerjaan lebih mudah,
            <span> bukan lebih rumit.</span>
          </h2>

          <div className="iyaz-about-copy">
            <p>
              Saya tertarik pada pertemuan antara proses bisnis, pengolahan
              data, dan teknologi. Saya menikmati proses memahami masalah,
              menyusun alur kerja, lalu membangun sesuatu yang benar-benar
              membantu orang menyelesaikan pekerjaannya.
            </p>

            <p>
              Dari spreadsheet dan otomasi hingga aplikasi web, saya berusaha
              mengutamakan solusi yang fungsional, mudah digunakan, dan sesuai
              dengan kebutuhan nyata.
            </p>

            <div className="iyaz-about-signature">
              <span className="iyaz-signature-mark">I.</span>
              <span>Practical thinking. Useful solutions.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="iyaz-work section-shell" id="work">
        <div className="iyaz-section-heading">
          <div>
            <div className="iyaz-section-kicker">
              <span>02 / SELECTED WORK</span>
              <span className="iyaz-kicker-line" />
            </div>

            <h2>Beberapa hal yang saya bangun.</h2>
          </div>

          <p>
            Eksplorasi dan proyek seputar produktivitas, sistem kerja, serta
            solusi digital.
          </p>
        </div>

        <div className="iyaz-project-grid">
          {projects.map((project) => (
            <article
              className={`iyaz-project-card iyaz-project-${project.visual}`}
              key={project.number}
            >
              <div className="iyaz-project-art">
                {project.visual === "cashbook" && (
                  <div className="iyaz-cashbook-preview">
                    <div className="iyaz-preview-header">
                      <span className="iyaz-preview-brand">
                        <i>C</i> Cashbook
                      </span>
                      <span className="iyaz-preview-menu">•••</span>
                    </div>

                    <div className="iyaz-preview-label">CASH & BANK OVERVIEW</div>

                    <div className="iyaz-preview-balance">
                      <span>Total saldo</span>
                      <strong>Cash management</strong>
                    </div>

                    <div className="iyaz-preview-chart">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="iyaz-preview-footer">
                      <span>INCOME</span>
                      <span>EXPENSE</span>
                      <span>BALANCE</span>
                    </div>
                  </div>
                )}

                {project.visual === "excel" && (
                  <div className="iyaz-spreadsheet-preview">
                    <div className="iyaz-sheet-toolbar">
                      <span>WORKBOOK</span>
                      <span>↗</span>
                    </div>

                    <div className="iyaz-sheet-grid">
                      {Array.from({ length: 24 }, (_, index) => (
                        <span
                          className={index % 7 === 0 ? "iyaz-cell-highlight" : ""}
                          key={index}
                        />
                      ))}
                    </div>

                    <div className="iyaz-sheet-label">DATA → INSIGHT</div>
                  </div>
                )}

                {project.visual === "web" && (
                  <div className="iyaz-browser-preview">
                    <div className="iyaz-browser-bar">
                      <span />
                      <span />
                      <span />
                      <div />
                    </div>

                    <div className="iyaz-browser-content">
                      <div className="iyaz-browser-nav" />
                      <div className="iyaz-browser-heading" />
                      <div className="iyaz-browser-heading iyaz-browser-heading-short" />
                      <div className="iyaz-browser-copy" />
                      <div className="iyaz-browser-button" />
                      <div className="iyaz-browser-blocks">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                )}

                <span className="iyaz-art-index">{project.number}</span>
              </div>

              <div className="iyaz-project-content">
                <div className="iyaz-project-meta">
                  <span>{project.category}</span>
                  <span>0{project.number}</span>
                </div>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="iyaz-project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.href && (
                  <a
                    className="iyaz-project-link"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lihat proyek <ArrowIcon diagonal />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="iyaz-services section-shell" id="services">
        <div className="iyaz-section-kicker">
          <span>03 / WHAT I CAN HELP WITH</span>
          <span className="iyaz-kicker-line" />
        </div>

        <div className="iyaz-services-heading">
          <h2>
            Punya pekerjaan yang bisa dibuat lebih sederhana?
          </h2>

          <p>
            Saya terbuka untuk membantu kebutuhan digital dan operasional yang
            sesuai dengan bidang yang saya kerjakan.
          </p>
        </div>

        <div className="iyaz-service-list">
          {services.map((service) => (
            <article className="iyaz-service-card" key={service.number}>
              <div className="iyaz-service-icon">
                <ServiceIcon type={service.icon} />
              </div>

              <div className="iyaz-service-main">
                <span>{service.number} / SERVICE</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <a
                href="#contact"
                className="iyaz-service-arrow"
                aria-label={`Diskusikan layanan ${service.title}`}
                title={`Diskusikan ${service.title}`}
              >
                <ArrowIcon diagonal />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="iyaz-footer" id="contact">
        <div className="iyaz-footer-inner">
          <div className="iyaz-footer-topline">
            <span>HAVE A PROJECT IN MIND?</span>
            <span>LET'S MAKE IT WORK.</span>
          </div>

          <div className="iyaz-footer-main">
            <div className="iyaz-footer-copy">
              <span className="iyaz-footer-eyebrow">
                OPEN TO THE RIGHT OPPORTUNITIES
              </span>

              <h2>
                Mari buat sesuatu
                <br />
                yang <span>bermanfaat.</span>
              </h2>

              <p>
                Punya ide, kebutuhan pekerjaan, atau proyek yang ingin
                diwujudkan? Mari mulai dengan membicarakannya.
              </p>
            </div>

            <div className="iyaz-footer-action">
              <a
                className="iyaz-footer-cta"
                href="https://lynk.id/USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubungi saya <ArrowIcon diagonal />
              </a>

              <span>
                Excel · Web Application · Website
              </span>
            </div>
          </div>

          <div className="iyaz-footer-bottom">
            <a className="iyaz-footer-logo" href="#top">
              iyaz<span>.</span>
            </a>

            <div className="iyaz-footer-socials">
              {socialLinks.map((social) => (
                <a
                  href={social.href}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka ${social.name}`}
                  title={social.name}
                >
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </div>

            <span className="iyaz-footer-copyright">
              © {new Date().getFullYear()} Iyaz
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}