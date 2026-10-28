
import React from "react"
import {
    Eye,
    MessageCircle,
    Package,
    BadgeCheck,
    Star,
    Sparkles,
    ArrowDown,
    Lightbulb,
    Sun,
    Smartphone,
    Volume2,
} from "lucide-react"

import "@/styles/slides/slide-6.css"

const components = [
    {
        number: "01",
        title: "Pancing Perhatian",
        term: "HOOK",
        question: "Kenapa harus menonton?",
        example: "“Camilan renyah, tapi tidak bikin repot?”",
        Icon: Eye,
        type: "hook",
    },
    {
        number: "02",
        title: "Buka Cerita",
        term: "OPENER",
        question: "Apa yang akan dibahas?",
        example: "Kenalkan camilan dan situasi yang cocok menikmatinya.",
        Icon: MessageCircle,
        type: "opener",
    },
    {
        number: "03",
        title: "Jelaskan Produk",
        term: "DESCRIPTION",
        question: "Apa yang ditawarkan?",
        example: "Tunjukkan bentuk, bahan, ukuran, atau cara penyajian.",
        Icon: Package,
        type: "description",
    },
    {
        number: "04",
        title: "Berikan Bukti",
        term: "VALIDATION",
        question: "Mengapa bisa dipercaya?",
        example: "Perlihatkan proses nyata, ulasan pelanggan, atau demonstrasi.",
        Icon: BadgeCheck,
        type: "validation",
    },
    {
        number: "05",
        title: "Tegaskan Keunggulan",
        term: "VALUE PROPOSITION",
        question: "Mengapa memilih produk ini?",
        example: "Sebutkan kelebihan yang nyata dan relevan bagi pembeli.",
        Icon: Star,
        type: "value",
    },
    {
        number: "06",
        title: "Ajak Bertindak",
        term: "CTA",
        question: "Apa langkah selanjutnya?",
        example: "“Hubungi kami melalui WhatsApp untuk memesan.”",
        Icon: Sparkles,
        type: "cta",
    },
]

export default function Slide6() {
    return (
        <section
            className="slide6"
            aria-label="Komponen video promosi dan tips produksi hemat biaya"
        >
            <div className="slide6__background-mark" aria-hidden="true">
                06
            </div>

            <header className="slide6__topline">
                <span className="slide6__brand">
                    <span className="slide6__brand-dot" />
                    TALENT & INNOVATION
                </span>

                <span className="slide6__chapter">
                    MERANGKAI CERITA / 2026
                </span>
            </header>

            <main className="slide6__body">
                <div className="slide6__heading">
                    <div>
                        <p className="slide6__eyebrow">
                            DARI PERHATIAN MENJADI TINDAKAN
                        </p>

                        <h1 className="slide6__title">
                            Susun Cerita,
                            <br />
                            <span>Bukan Sekadar Video.</span>
                        </h1>
                    </div>

                    <p className="slide6__intro">
                        Video promosi yang terarah membantu penonton
                        memahami produk, mempercayainya, lalu mengetahui
                        apa yang harus dilakukan.
                    </p>
                </div>

                <div className="slide6__content">
                    <section
                        className="slide6__story"
                        aria-label="Enam komponen video promosi"
                    >
                        <div className="slide6__story-heading">
                            <span>RANGKAIAN CERITA</span>
                            <span>01 — 06</span>
                        </div>

                        <div className="slide6__steps">
                            {components.map(
                                ({ number, title, term, question, example, Icon, type }, index) => (
                                    <React.Fragment key={number}>
                                        <article className={`slide6__step slide6__step--${type}`}>
                                            <span className="slide6__step-number">
                                                {number}
                                            </span>

                                            <span className="slide6__step-icon">
                                                <Icon size={17} strokeWidth={1.7} />
                                            </span>

                                            <div className="slide6__step-copy">
                                                <span className="slide6__step-term">
                                                    {term}
                                                </span>
                                                <h2>{title}</h2>
                                                <p>{question}</p>
                                            </div>

                                            <span className="slide6__step-example">
                                                {example}
                                            </span>
                                        </article>

                                        {index < components.length - 1 && (
                                            <div
                                                className="slide6__step-connector"
                                                aria-hidden="true"
                                            >
                                                <ArrowDown size={13} />
                                            </div>
                                        )}
                                    </React.Fragment>
                                )
                            )}
                        </div>

                        <p className="slide6__story-note">
                            Urutan ini adalah panduan, bukan aturan kaku.
                            Sesuaikan dengan tujuan dan jenis konten.
                        </p>
                    </section>

                    <aside className="slide6__budget">
                        <div className="slide6__budget-header">
                            <span className="slide6__budget-icon">
                                <Lightbulb size={20} strokeWidth={1.6} />
                            </span>

                            <div>
                                <p>TIPS UNTUK PEMULA</p>
                                <h2>Modal sederhana, hasil tetap bermakna.</h2>
                            </div>
                        </div>

                        <div className="slide6__budget-feature">
                            <Smartphone size={18} strokeWidth={1.7} />
                            <div>
                                <strong>Gunakan HP yang ada</strong>
                                <p>Bersihkan lensa dan rekam dengan stabil.</p>
                            </div>
                        </div>

                        <div className="slide6__budget-feature">
                            <Sun size={18} strokeWidth={1.7} />
                            <div>
                                <strong>Manfaatkan cahaya alami</strong>
                                <p>Rekam dekat jendela atau di tempat terang.</p>
                            </div>
                        </div>

                        <div className="slide6__budget-feature">
                            <Volume2 size={18} strokeWidth={1.7} />
                            <div>
                                <strong>Utamakan suara yang jelas</strong>
                                <p>Cari tempat tenang; dekatkan HP saat berbicara.</p>
                            </div>
                        </div>

                        <div className="slide6__budget-example">
                            <span>CONTOH SEDERHANA</span>
                            <p>
                                Produk + cahaya jendela + latar rapi
                                + penjelasan singkat = konten yang layak dimulai.
                            </p>
                        </div>

                        <div className="slide6__budget-footer">
                            <span className="slide6__budget-dot" />
                            <span>Mulai dari yang tersedia. Tingkatkan bertahap.</span>
                        </div>
                    </aside>
                </div>
            </main>

            <footer className="slide6__bottomline">
                <span>KABUPATEN BIMA</span>

                <span className="slide6__footer-center">
                    <span />
                    MEMBUAT VIDEO KONTEN YANG MENARIK
                </span>

                <span>29 / 10 / 2026</span>
            </footer>
        </section>
    )
}
