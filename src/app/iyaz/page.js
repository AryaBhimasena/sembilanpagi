
import Image from "next/image";
import "@/styles/pages/profil-iyaz.css";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/mumaiyaz",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/iiyyaazz",
    icon: "instagram",
  },
  {
    name: "Lynk.id",
    href: "https://lynk.id/kelasexceldasar",
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

const websiteOffers = [
  {
    number: "01",
    type: "PERSONAL PROFILE",
    title: "Personal Profile",
    subtitle: "Tampilkan diri secara profesional.",
    description:
      "Website personal untuk memperkenalkan diri, menampilkan keahlian, portofolio, dan memudahkan orang menghubungi Anda.",
    price: "299.000",
    visual: "personal",
    template: "Clean & Personal",
    templateDescription:
      "Tampilan minimalis dengan profil utama, bio singkat, portofolio, dan tautan kontak.",
    features: [
      "Profil dan deskripsi diri",
      "Portofolio atau pengalaman",
      "Tautan media sosial",
      "Tombol kontak WhatsApp",
      "Tampilan responsif",
    ],
    whatsappMessage:
      "Halo Iyaz, saya tertarik dengan penawaran Website Personal Profile seharga Rp299.000. Bisa dijelaskan detail template dan proses pembuatannya?",
    featured: true,
  },
  {
    number: "02",
    type: "BUSINESS PROFILE",
    title: "Business Profile",
    subtitle: "Buat bisnis lebih mudah ditemukan.",
    description:
      "Landing page untuk memperkenalkan usaha, menampilkan produk atau layanan, dan mengarahkan calon pelanggan untuk menghubungi Anda.",
    price: "499.000",
    visual: "business",
    template: "Modern & Conversion",
    templateDescription:
      "Tampilan bisnis dengan headline promosi, daftar layanan, keunggulan, dan CTA yang jelas.",
    features: [
      "Profil dan informasi bisnis",
      "Highlight produk atau layanan",
      "Keunggulan usaha",
      "CTA WhatsApp untuk pelanggan",
      "Tampilan responsif",
    ],
    whatsappMessage:
      "Halo Iyaz, saya tertarik dengan penawaran Website Business Profile seharga Rp499.000. Bisa dijelaskan detail template dan proses pembuatannya?",
    featured: false,
  },
  {
    number: "03",
    type: "COMPANY PROFILE",
    title: "Company Profile",
    subtitle: "Bangun citra perusahaan yang meyakinkan.",
    description:
      "Website profil perusahaan untuk menyampaikan identitas, layanan, informasi perusahaan, serta membangun kepercayaan calon klien.",
    price: "799.000",
    visual: "company",
    template: "Corporate & Professional",
    templateDescription:
      "Tampilan korporat dengan bagian tentang perusahaan, layanan, keunggulan, dan informasi kontak.",
    features: [
      "Profil dan gambaran perusahaan",
      "Visi, misi, atau nilai perusahaan",
      "Informasi layanan",
      "Informasi kontak perusahaan",
      "Tampilan responsif",
    ],
    whatsappMessage:
      "Halo Iyaz, saya tertarik dengan penawaran Website Company Profile seharga Rp799.000. Bisa dijelaskan detail template dan proses pembuatannya?",
    featured: false,
  },
];

// Urutan visual: Business — Personal — Company.
// Personal Profile berada di tengah dan aktif secara default.
const orderedWebsiteOffers = [
  websiteOffers[1],
  websiteOffers[0],
  websiteOffers[2],
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
      <svg
        viewBox="0 0 24 24"
        width="25"
        height="25"
        fill="none"
        aria-hidden="true"
      >
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
      <svg
        viewBox="0 0 24 24"
        width="25"
        height="25"
        fill="none"
        aria-hidden="true"
      >
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
    <svg
      viewBox="0 0 24 24"
      width="25"
      height="25"
      fill="none"
      aria-hidden="true"
    >
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

function WebsiteTemplatePreview({ visual }) {
  return (
    <div className={`iyaz-offer-preview iyaz-offer-preview-${visual}`}>
      <div className="iyaz-template-browser">
        <div className="iyaz-template-browser-dots">
          <i />
          <i />
          <i />
        </div>
        <span>website-preview</span>
        <span className="iyaz-template-browser-menu">•••</span>
      </div>

      {visual === "personal" && (
        <div className="iyaz-template-canvas iyaz-template-personal">
          <div className="iyaz-template-personal-nav">
            <span>
              your.name<span>.</span>
            </span>
            <i />
          </div>
          <div className="iyaz-template-personal-hero">
            <div className="iyaz-template-avatar">Y</div>
            <span className="iyaz-template-eyebrow">HELLO, I'M</span>
            <strong>Your Name.</strong>
            <div className="iyaz-template-lines">
              <i />
              <i />
            </div>
            <div className="iyaz-template-mini-button">
              Let's connect ↗
            </div>
          </div>
          <div className="iyaz-template-personal-bottom">
            <span>ABOUT</span>
            <span>PORTFOLIO</span>
            <span>CONTACT</span>
          </div>
        </div>
      )}

      {visual === "business" && (
        <div className="iyaz-template-canvas iyaz-template-business">
          <div className="iyaz-template-business-nav">
            <span>
              BRAND<span>.</span>
            </span>
            <div>
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="iyaz-template-business-hero">
            <span className="iyaz-template-eyebrow">
              YOUR BUSINESS PARTNER
            </span>
            <strong>
              Grow your
              <br />
              business.
            </strong>
            <div className="iyaz-template-lines">
              <i />
              <i />
            </div>
            <div className="iyaz-template-mini-button">
              Explore our service ↗
            </div>
          </div>
          <div className="iyaz-template-business-bottom">
            <div>
              <i />
              <span />
            </div>
            <div>
              <i />
              <span />
            </div>
            <div>
              <i />
              <span />
            </div>
          </div>
        </div>
      )}

      {visual === "company" && (
        <div className="iyaz-template-canvas iyaz-template-company">
          <div className="iyaz-template-company-nav">
            <span>
              <i /> COMPANY
            </span>
            <div>
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="iyaz-template-company-hero">
            <div className="iyaz-template-company-copy">
              <span className="iyaz-template-eyebrow">WHO WE ARE</span>
              <strong>
                Building
                <br />
                trust through
                <br />
                quality.
              </strong>
              <div className="iyaz-template-lines">
                <i />
                <i />
              </div>
              <div className="iyaz-template-mini-button">
                Discover more ↗
              </div>
            </div>
            <div className="iyaz-template-company-art">
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="iyaz-template-company-bottom">
            <span>ABOUT US</span>
            <span>OUR SERVICES</span>
            <span>CONTACT</span>
          </div>
        </div>
      )}
    </div>
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
          <a href="#website-offers">Penawaran Website</a>
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

                    <div className="iyaz-preview-label">
                      CASH & BANK OVERVIEW
                    </div>

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
                          className={
                            index % 7 === 0 ? "iyaz-cell-highlight" : ""
                          }
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
                  <span>{project.number}</span>
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
          <h2>Punya pekerjaan yang bisa dibuat lebih sederhana?</h2>

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
                href="#website-offers"
                className="iyaz-service-arrow"
                aria-label={`Lihat penawaran untuk ${service.title}`}
                title={`Lihat penawaran ${service.title}`}
              >
                <ArrowIcon diagonal />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Website Landing Page Offers */}
      <section
        className="iyaz-offers iyaz-offers-contrast section-shell"
        id="website-offers"
      >
        <div className="iyaz-section-kicker">
          <span>04 / SPECIAL WEBSITE OFFERS</span>
          <span className="iyaz-kicker-line" />
        </div>

        <div className="iyaz-offers-heading">
          <div className="iyaz-offers-heading-copy">
            <span className="iyaz-offers-eyebrow">
              YOUR ONLINE PRESENCE STARTS HERE
            </span>
            <h2>
              Website profesional,
              <span> tanpa mulai dari nol.</span>
            </h2>
          </div>

          <p>
            Pilih template yang paling sesuai dengan kebutuhan Anda.
            Setiap penawaran dirancang untuk membantu Anda tampil lebih
            profesional dan mudah dihubungi secara online.
          </p>
        </div>

        <div className="iyaz-offer-grid">
          {orderedWebsiteOffers.map((offer) => (
            <article
              className={`iyaz-offer-card${
                offer.featured
                  ? " iyaz-offer-card-featured iyaz-offer-card-default-active"
                  : ""
              }`}
              key={offer.number}
            >
              {offer.featured && (
                <div className="iyaz-offer-ribbon">
                  <span>✳</span> RECOMMENDED
                </div>
              )}

              <div className="iyaz-offer-card-top">
                <span className="iyaz-offer-number">{offer.number}</span>
                <span className="iyaz-offer-type">{offer.type}</span>
              </div>

              <WebsiteTemplatePreview visual={offer.visual} />

              <div className="iyaz-offer-content">
                <span className="iyaz-offer-template-label">
                  TEMPLATE DESIGN
                </span>

                <h3>{offer.title}</h3>
                <p className="iyaz-offer-subtitle">{offer.subtitle}</p>
                <p className="iyaz-offer-description">
                  {offer.description}
                </p>

                <div className="iyaz-offer-template-info">
                  <span className="iyaz-offer-template-icon">✳</span>
                  <div>
                    <strong>{offer.template}</strong>
                    <p>{offer.templateDescription}</p>
                  </div>
                </div>

                <div className="iyaz-offer-features">
                  <span className="iyaz-offer-features-title">
                    YANG TERMASUK
                  </span>

                  <ul>
                    {offer.features.map((feature) => (
                      <li key={feature}>
                        <span aria-hidden="true">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="iyaz-offer-price">
                  <span>HARGA PENAWARAN</span>
                  <div>
                    <span className="iyaz-offer-currency">Rp</span>
                    <strong>{offer.price}</strong>
                  </div>
                  <p>Harga awal · Detail disepakati sebelum pengerjaan</p>
                </div>

                <a
                  className={`iyaz-offer-cta${
                    offer.featured ? " iyaz-offer-cta-featured" : ""
                  }`}
                  href={`https://wa.me/6285745407653?text=${encodeURIComponent(
                    offer.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pilih penawaran ini <ArrowIcon diagonal />
                </a>

                <span className="iyaz-offer-contact-note">
                  Diskusikan kebutuhan Anda melalui WhatsApp
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="iyaz-offers-footnote">
          <span className="iyaz-offers-footnote-mark">i</span>
          <p>
            Setiap website menggunakan template sebagai dasar desain.
            Ruang lingkup, materi, domain, hosting, dan kebutuhan tambahan
            akan dikonfirmasi terlebih dahulu sebelum pengerjaan.
          </p>
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
                href="https://wa.me/6285745407653"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubungi saya <ArrowIcon diagonal />
              </a>

              <span>Excel · Web Application · Website</span>
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
