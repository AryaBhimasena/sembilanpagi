
import React from "react"
import {
    Play,
    Eye,
    MessageSquareText,
    AudioLines,
    Scissors,
    ArrowUpRight,
    Check,
} from "lucide-react"

import "@/styles/slides/slide-4.css"

const characteristics = [
    {
        number: "01",
        title: "Pembuka yang memancing rasa ingin tahu",
        detail: "Mulai dengan pertanyaan, masalah, atau visual yang kuat.",
        Icon: Eye,
    },
    {
        number: "02",
        title: "Isi yang jelas dan tidak melebar",
        detail: "Fokus pada satu pesan utama dalam satu video.",
        Icon: MessageSquareText,
    },
    {
        number: "03",
        title: "Gambar dan suara yang nyaman",
        detail: "Tampilkan objek dengan jelas dan pastikan suara terdengar.",
        Icon: AudioLines,
    },
    {
        number: "04",
        title: "Tempo yang tidak membosankan",
        detail: "Variasikan gambar dan potong bagian yang tidak diperlukan.",
        Icon: Scissors,
    },
]

export default function Slide4() {
    return (
        <section
            className="slide4"
            aria-label="Ciri video konten yang menarik"
        >
            <div className="slide4__background-mark" aria-hidden="true">
                04
            </div>

            <header className="slide4__topline">
                <div className="slide4__brand">
                    <span className="slide4__brand-dot" />
                    TALENT & INNOVATION
                </div>

                <span className="slide4__chapter">
                    PANDUAN PRAKTIS / 2026
                </span>
            </header>

            <main className="slide4__body">
                <div className="slide4__left">
                    <p className="slide4__eyebrow">
                        BUKAN SEKADAR MEREKAM
                    </p>

                    <h1 className="slide4__title">
                        Bagaimana Cara Membuat Video Konten yang{" "}
                        <span>Menarik?</span>
                    </h1>

                    <p className="slide4__intro">
                        Perhatikan cara membuka cerita, menyampaikan isi,
                        dan menjaga penonton tetap tertarik.
                    </p>

                    <div className="slide4__visual">
                        <div className="slide4__visual-top">
                            <span>STRUKTUR VIDEO</span>
                            <span>3 BAGIAN</span>
                        </div>

                        <div className="slide4__video-frame">
                            <div className="slide4__frame-grid" />

                            <div className="slide4__frame-label">
                                CONTOH ALUR
                            </div>

                            <div className="slide4__play">
                                <Play size={22} fill="currentColor" />
                            </div>

                            <div className="slide4__frame-caption">
                                Cerita yang jelas
                                <br />
                                lebih mudah diikuti.
                            </div>

                            <div className="slide4__frame-index">
                                00:15
                            </div>
                        </div>

                        <div className="slide4__timeline">
                            <div className="slide4__timeline-item slide4__timeline-item--hook">
                                <span className="slide4__timeline-line" />
                                <span className="slide4__timeline-number">01</span>
                                <div>
                                    <strong>PANCING</strong>
                                    <small>Awal</small>
                                </div>
                            </div>

                            <div className="slide4__timeline-item slide4__timeline-item--story">
                                <span className="slide4__timeline-line" />
                                <span className="slide4__timeline-number">02</span>
                                <div>
                                    <strong>JELASKAN</strong>
                                    <small>Isi</small>
                                </div>
                            </div>

                            <div className="slide4__timeline-item slide4__timeline-item--action">
                                <span className="slide4__timeline-line" />
                                <span className="slide4__timeline-number">03</span>
                                <div>
                                    <strong>ARAHKAN</strong>
                                    <small>Penutup</small>
                                </div>
                            </div>
                        </div>

                        <p className="slide4__visual-note">
                            <ArrowUpRight size={15} />
                            <span>
                                Setiap bagian punya fungsi, bukan sekadar durasi.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="slide4__right">
                    <div className="slide4__list-heading">
                        <span className="slide4__list-index">A / D</span>
                        <h2>Ciri-ciri yang perlu diperhatikan</h2>
                    </div>

                    <div className="slide4__list">
                        {characteristics.map(
                            ({ number, title, detail, Icon }) => (
                                <article
                                    className="slide4__item"
                                    key={number}
                                >
                                    <div className="slide4__item-icon">
                                        <Icon
                                            size={19}
                                            strokeWidth={1.6}
                                        />
                                    </div>

                                    <div className="slide4__item-copy">
                                        <div className="slide4__item-title-row">
                                            <span className="slide4__item-number">
                                                {number}
                                            </span>
                                            <h3>{title}</h3>
                                        </div>

                                        <p>{detail}</p>
                                    </div>
                                </article>
                            )
                        )}
                    </div>

                    <aside className="slide4__tip">
                        <span className="slide4__tip-icon">
                            <Check size={17} strokeWidth={2} />
                        </span>

                        <div>
                            <strong>Ingat prinsip ini</strong>
                            <p>
                                Efek boleh sederhana. Yang penting,
                                pesan mudah dipahami dan manfaatnya terasa.
                            </p>
                        </div>
                    </aside>
                </div>
            </main>

            <footer className="slide4__bottomline">
                <span>KABUPATEN BIMA</span>

                <span className="slide4__footer-center">
                    <span />
                    MEMBUAT VIDEO KONTEN YANG MENARIK
                </span>

                <span>29 / 10 / 2026</span>
            </footer>
        </section>
    )
}
