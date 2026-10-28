
import * as React from "react"
import {
    ArrowUpRight,
    Check,
    Play,
    RotateCw,
    Smartphone,
    Sparkles,
} from "lucide-react"
import "@/styles/slides/slide-10.css"

export default function Slide10() {
    const commitments = [
        "Tentukan satu pesan yang ingin disampaikan.",
        "Buat video sederhana dengan alat yang tersedia.",
        "Unggah, amati respons, lalu perbaiki.",
    ]

    return (
        <section className="slide10">
            <div className="slide10__topline">
                <span className="slide10__brand">
                    TALENT & INNOVATION HUB
                </span>
                <span className="slide10__chapter">
                    PENUTUP / 10
                </span>
            </div>

            <main className="slide10__main">
                <div className="slide10__left">
                    <div className="slide10__eyebrow">
                        <span className="slide10__eyebrow-line" />
                        SAATNYA MULAI
                    </div>

                    <h1 className="slide10__headline">
                        Ide yang baik
                        <br />
                        perlu <em>ditayangkan.</em>
                    </h1>

                    <p className="slide10__description">
                        Video yang menarik bukan selalu video
                        dengan alat paling mahal. Mulailah dengan
                        cerita yang jelas, manfaat yang nyata,
                        dan ajakan yang memudahkan.
                    </p>

                    <div className="slide10__mantra">
                        <span className="slide10__quote-mark">“</span>
                        <p>
                            Tidak harus sempurna
                            <br />
                            untuk memulai.
                        </p>
                        <span className="slide10__mantra-caption">
                            MULAI · AMATI · PERBAIKI
                        </span>
                    </div>
                </div>

                <div className="slide10__right">
                    <div className="slide10__orbit" aria-hidden="true">
                        <span className="slide10__orbit-ring slide10__orbit-ring--outer" />
                        <span className="slide10__orbit-ring slide10__orbit-ring--inner" />
                        <span className="slide10__orbit-dot slide10__orbit-dot--one" />
                        <span className="slide10__orbit-dot slide10__orbit-dot--two" />

                        <div className="slide10__phone">
                            <div className="slide10__phone-speaker" />
                            <div className="slide10__phone-screen">
                                <span className="slide10__screen-label">
                                    VIDEO PERTAMA
                                </span>
                                <div className="slide10__play">
                                    <Play size={23} fill="currentColor" />
                                </div>
                                <div className="slide10__screen-lines">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                <span className="slide10__screen-tag">
                                    CERITA ANDA DIMULAI DI SINI
                                </span>
                            </div>
                        </div>

                        <div className="slide10__floating slide10__floating--top">
                            <Sparkles size={15} />
                            <span>Berani mencoba</span>
                        </div>

                        <div className="slide10__floating slide10__floating--bottom">
                            <RotateCw size={15} />
                            <span>Terus berkembang</span>
                        </div>
                    </div>

                    <div className="slide10__right-note">
                        <span className="slide10__right-note-number">
                            01—03
                        </span>
                        <p>
                            Bukan tentang langsung hebat,
                            tetapi tentang terus bertumbuh.
                        </p>
                    </div>
                </div>
            </main>

            <div className="slide10__bottom">
                <div className="slide10__checklist">
                    {commitments.map((item, index) => (
                        <div className="slide10__check-item" key={item}>
                            <span className="slide10__check-icon">
                                <Check size={13} strokeWidth={2.5} />
                            </span>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

                <div className="slide10__footer">
                    <div className="slide10__footer-message">
                        <span>TERIMA KASIH</span>
                        <span className="slide10__footer-separator">/</span>
                        <span>SAMPAI JUMPA DI KARYA BERIKUTNYA</span>
                    </div>

                    <div className="slide10__footer-icon">
                        <Smartphone size={15} />
                        <ArrowUpRight size={14} />
                    </div>
                </div>
            </div>
        </section>
    )
}
