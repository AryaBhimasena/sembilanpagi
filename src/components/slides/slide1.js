
import React from "react"
import {
    MapPin,
    CalendarDays,
    MessageCircle,
    ArrowUpRight,
} from "lucide-react"

import "@/styles/slides/slide-1.css"

export default function Slide1() {
    return (
        <section
            className="slide1"
            aria-label="Talent and Innovation Hub"
        >
            {/* Background details */}
            <div className="slide1__background-mark" aria-hidden="true">
                <span>TIH</span>
            </div>

            <div className="slide1__topline">
                <span className="slide1__topline-brand">
                    <span className="slide1__topline-dot" />
                    TALENT & INNOVATION
                </span>

                <span className="slide1__topline-number">
                    EVENT PRESENTATION / 2026
                </span>
            </div>

            <div className="slide1__body">
                {/* Event identity */}
                <header className="slide1__event">
                    <div className="slide1__identity">
                        <div
                            className="slide1__logo"
                            aria-label="Placeholder logo Talent and Innovation Hub"
                        >
                            <svg
                                viewBox="0 0 100 100"
                                className="slide1__logo-mark"
                                fill="none"
                                aria-hidden="true"
                            >
                                <circle
                                    cx="50"
                                    cy="18"
                                    r="9"
                                    fill="currentColor"
                                />

                                <path
                                    d="M44 33C24 34 13 49 16 69C32 67 43 53 44 33Z"
                                    fill="#D9A72E"
                                />

                                <path
                                    d="M56 33C76 34 87 49 84 69C68 67 57 53 56 33Z"
                                    fill="#294A70"
                                />

                                <path
                                    d="M50 38V85"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M50 59L33 48M50 68L68 52"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        <div className="slide1__identity-caption">
                            <span>IDENTITY</span>
                            <span>CREATIVITY</span>
                            <span>FUTURE</span>
                        </div>
                    </div>

                    <div className="slide1__event-copy">
                        <p className="slide1__eyebrow">
                            A SPACE FOR IDEAS & POSSIBILITY
                        </p>

                        <h1 className="slide1__event-title">
                            <span>TALENT AND</span>
                            <span className="slide1__event-title-second">
                                INNOVATION
                                <span className="slide1__title-period">.</span>
                            </span>
                            <span>HUB</span>
                        </h1>

                        <div className="slide1__event-meta">
                            <div className="slide1__meta-item">
                                <MapPin
                                    size={16}
                                    strokeWidth={1.7}
                                    aria-hidden="true"
                                />
                                <span>
                                    Kab. Bima, Nusa Tenggara Barat
                                </span>
                            </div>

                            <span className="slide1__meta-divider" />

                            <div className="slide1__meta-item">
                                <CalendarDays
                                    size={16}
                                    strokeWidth={1.7}
                                    aria-hidden="true"
                                />
                                <span>29 Oktober 2026</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Topic */}
                <section className="slide1__topic">
                    <div className="slide1__topic-label">
                        <span className="slide1__topic-line" />
                        <span>TOPIK PRESENTASI</span>
                    </div>

                    <h2 className="slide1__topic-title">
                        Membuat Video Konten
                        <br />
                        <span>yang Menarik.</span>
                    </h2>

                    <p className="slide1__topic-description">
                        Strategi menciptakan konten video yang
                        menarik perhatian dan relevan bagi audiens.
                    </p>
                </section>

{/* Presenter */}
<footer className="slide1__presenter">
    <div className="slide1__presenter-main">
        <p className="slide1__presenter-label">
            PRESENTER
        </p>

        <div className="slide1__presenter-identity">
            <h3 className="slide1__presenter-name">
                Siradzamunir Rahman
            </h3>

            <p className="slide1__presenter-credential">
                S. Mb
            </p>
        </div>
    </div>

    <div className="slide1__presenter-contact">
        <a
            className="slide1__contact"
            href="https://www.facebook.com/mumaiyaz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook @mumaiyaz"
        >
            <span className="slide1__contact-icon slide1__contact-icon--facebook">
                <svg
                    viewBox="0 0 24 24"
                    width="17"
                    height="17"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
                </svg>
            </span>

            <span className="slide1__contact-copy">
                <span className="slide1__contact-label">
                    FACEBOOK
                </span>
                <span className="slide1__contact-value">
                    @mumaiyaz
                </span>
            </span>

            <ArrowUpRight
                className="slide1__contact-arrow"
                size={15}
                strokeWidth={1.7}
                aria-hidden="true"
            />
        </a>

        <a
            className="slide1__contact"
            href="https://wa.me/6282341888802"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp 0823 41 8888 02"
        >
            <span className="slide1__contact-icon">
                <MessageCircle
                    size={18}
                    strokeWidth={1.7}
                    aria-hidden="true"
                />
            </span>

            <span className="slide1__contact-copy">
                <span className="slide1__contact-label">
                    WHATSAPP
                </span>
                <span className="slide1__contact-value">
                    0823 41 8888 02
                </span>
            </span>

            <ArrowUpRight
                className="slide1__contact-arrow"
                size={15}
                strokeWidth={1.7}
                aria-hidden="true"
            />
        </a>
    </div>
</footer>
            </div>

            {/* Bottom signature */}
            <div className="slide1__bottomline">
                <span>KABUPATEN BIMA</span>
                <span className="slide1__bottomline-center">
                    <span />
                    NUSA TENGGARA BARAT
                </span>
                <span>29 / 10 / 2026</span>
            </div>
        </section>
    )
}
