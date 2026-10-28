
import React from "react"
import {
    ArrowUpRight,
    MessageCircle,
    UserRound,
} from "lucide-react"

import "@/styles/slides/slide-2.css"

export default function Slide2() {
    return (
        <section
            className="slide2"
            aria-label="Profil singkat presenter"
        >
            {/* Background detail */}
            <div
                className="slide2__background-mark"
                aria-hidden="true"
            >
                <span>02</span>
            </div>

            {/* Topline */}
            <div className="slide2__topline">
                <span className="slide2__topline-brand">
                    <span className="slide2__topline-dot" />
                    TALENT & INNOVATION
                </span>

                <span className="slide2__topline-number">
                    PRESENTER PROFILE / 2026
                </span>
            </div>

            {/* Main content */}
            <main className="slide2__body">
                {/* Section heading */}
                <header className="slide2__heading">
                    <p className="slide2__eyebrow">
                        MENGENAL PEMBICARA
                    </p>

                    <h1 className="slide2__title">
                        Profil Singkat
                        <br />
                        <span>Presenter.</span>
                    </h1>

                    <p className="slide2__intro">
                        Mengenal sosok di balik materi
                        <br />
                        “Membuat Video Konten yang Menarik”.
                    </p>
                </header>

                {/* Profile card */}
                <section className="slide2__profile">
                    <div className="slide2__profile-visual">
                        <div
                            className="slide2__avatar"
                            aria-hidden="true"
                        >
                            <UserRound
                                size={54}
                                strokeWidth={1.1}
                            />
                        </div>

                        <span className="slide2__profile-index">
                            PRESENTER / 01
                        </span>
                    </div>

                    <div className="slide2__profile-content">
                        <p className="slide2__profile-label">
                            NARASUMBER
                        </p>

                        <h2 className="slide2__name">
                            Siradzamunir
                            <br />
                            Rahman<span>.</span>
                        </h2>

                        <p className="slide2__credential">
                            S. Mb
                        </p>

                        <div className="slide2__rule">
                            <span />
                        </div>

                        <p className="slide2__bio">
                            Berfokus pada pengembangan ide dan
                            penyampaian pesan melalui konten
                            digital yang menarik dan relevan.
                        </p>

                        <div className="slide2__expertise">
                            <span>IDE KREATIF</span>
                            <span>KONTEN DIGITAL</span>
                            <span>KOMUNIKASI</span>
                        </div>
                    </div>
                </section>

                {/* Contact information */}
                <section
                    className="slide2__contact"
                    aria-label="Informasi kontak presenter"
                >
                    <div className="slide2__contact-heading">
                        <p className="slide2__contact-label">
                            TERHUBUNG
                        </p>

                        <p className="slide2__contact-caption">
                            Temukan dan hubungi presenter.
                        </p>
                    </div>

                    <div className="slide2__contact-links">
                        <a
                            className="slide2__contact-link"
                            href="https://www.facebook.com/mumaiyaz"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Kunjungi Facebook Mumaiyaz"
                        >
<span
    className="slide2__contact-icon slide2__contact-icon--facebook"
    aria-hidden="true"
>
    <span className="slide2__facebook-letter">f</span>
</span>

                            <span className="slide2__contact-copy">
                                <span className="slide2__contact-platform">
                                    FACEBOOK
                                </span>

                                <span className="slide2__contact-value">
                                    @mumaiyaz
                                </span>
                            </span>

                            <ArrowUpRight
                                className="slide2__contact-arrow"
                                size={17}
                                strokeWidth={1.7}
                            />
                        </a>

                        <a
                            className="slide2__contact-link"
                            href="https://wa.me/6282341888802"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Hubungi presenter melalui WhatsApp"
                        >
                            <span className="slide2__contact-icon">
                                <MessageCircle
                                    size={19}
                                    strokeWidth={1.7}
                                />
                            </span>

                            <span className="slide2__contact-copy">
                                <span className="slide2__contact-platform">
                                    WHATSAPP
                                </span>

                                <span className="slide2__contact-value">
                                    0823 41 8888 02
                                </span>
                            </span>

                            <ArrowUpRight
                                className="slide2__contact-arrow"
                                size={17}
                                strokeWidth={1.7}
                            />
                        </a>
                    </div>
                </section>
            </main>

            {/* Bottom signature */}
            <div className="slide2__bottomline">
                <span>KABUPATEN BIMA</span>

                <span className="slide2__bottomline-center">
                    <span />
                    NUSA TENGGARA BARAT
                </span>

                <span>29 / 10 / 2026</span>
            </div>
        </section>
    )
}
