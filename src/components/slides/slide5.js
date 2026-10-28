
import React from "react"
import {
    ClipboardList,
    Clapperboard,
    CircleCheck,
    ArrowRight,
    PencilLine,
    Camera,
} from "lucide-react"

import "@/styles/slides/slide-5.css"

const workflow = [
    {
        number: "01",
        title: "PLAN",
        subtitle: "Susun rencana",
        description: "Tentukan tujuan, pesan utama, dan siapa penontonnya.",
        Icon: ClipboardList,
    },
    {
        number: "02",
        title: "PROGRESS",
        subtitle: "Kerjakan rencana",
        description: "Siapkan adegan, rekam video, lalu periksa hasilnya.",
        Icon: Clapperboard,
    },
    {
        number: "03",
        title: "OUTPUT",
        subtitle: "Hasilkan video",
        description: "Sunting, periksa, dan publikasikan video sesuai tujuan.",
        Icon: CircleCheck,
    },
]

const storyboard = [
    {
        scene: "01",
        time: "0–3 DETIK",
        title: "Pancing perhatian",
        visual: "Tampilkan produk dari dekat.",
        note: "“Lagi cari camilan renyah?”",
        type: "hook",
    },
    {
        scene: "02",
        time: "3–8 DETIK",
        title: "Tunjukkan produk",
        visual: "Perlihatkan bentuk dan teksturnya.",
        note: "“Dibuat segar setiap hari.”",
        type: "product",
    },
    {
        scene: "03",
        time: "8–13 DETIK",
        title: "Bangun kepercayaan",
        visual: "Tampilkan proses pengemasan.",
        note: "“Dikemas rapi, siap dibawa.”",
        type: "process",
    },
    {
        scene: "04",
        time: "13–18 DETIK",
        title: "Arahkan tindakan",
        visual: "Tampilkan produk dan kontak.",
        note: "“Pesan melalui WhatsApp.”",
        type: "action",
    },
]

export default function Slide5() {
    return (
        <section
            className="slide5"
            aria-label="Plan, Progress, Output dan storyboard video"
        >
            <div className="slide5__background-mark" aria-hidden="true">
                05
            </div>

            <header className="slide5__topline">
                <span className="slide5__brand">
                    <span className="slide5__brand-dot" />
                    TALENT & INNOVATION
                </span>

                <span className="slide5__chapter">
                    DARI IDE MENJADI VIDEO / 2026
                </span>
            </header>

            <main className="slide5__body">
                <div className="slide5__heading">
                    <div>
                        <p className="slide5__eyebrow">
                            JANGAN LANGSUNG TEKAN REKAM
                        </p>

                        <h1 className="slide5__title">
                            Rencanakan.
                            <br />
                            <span>Baru Produksi.</span>
                        </h1>
                    </div>

                    <p className="slide5__intro">
                        Video yang terarah dimulai dari master plan:
                        apa yang ingin disampaikan dan bagaimana
                        cara menyampaikannya.
                    </p>
                </div>

                <section
                    className="slide5__workflow"
                    aria-label="Tahapan produksi video"
                >
                    {workflow.map(({ number, title, subtitle, description, Icon }, index) => (
                        <React.Fragment key={number}>
                            <article className={`slide5__phase slide5__phase--${title.toLowerCase()}`}>
                                <div className="slide5__phase-top">
                                    <span>{number}</span>
                                    <Icon size={22} strokeWidth={1.6} />
                                </div>

                                <h2>{title}</h2>
                                <h3>{subtitle}</h3>
                                <p>{description}</p>
                            </article>

                            {index < workflow.length - 1 && (
                                <div className="slide5__phase-arrow" aria-hidden="true">
                                    <ArrowRight size={18} />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </section>

                <section
                    className="slide5__storyboard"
                    aria-label="Contoh storyboard video promosi"
                >
                    <div className="slide5__storyboard-heading">
                        <div className="slide5__storyboard-title">
                            <span className="slide5__storyboard-icon">
                                <PencilLine size={18} />
                            </span>

                            <div>
                                <p>ALAT BANTU PERENCANAAN</p>
                                <h2>Buat storyboard sebelum merekam</h2>
                            </div>
                        </div>

                        <span className="slide5__storyboard-tag">
                            CONTOH VIDEO UMKM
                        </span>
                    </div>

                    <div className="slide5__frames">
                        {storyboard.map((item) => (
                            <article
                                className={`slide5__frame slide5__frame--${item.type}`}
                                key={item.scene}
                            >
                                <div className="slide5__frame-visual">
                                    <span className="slide5__frame-scene">
                                        {item.scene}
                                    </span>

                                    <div className="slide5__sketch" aria-hidden="true">
                                        {item.type === "hook" && (
                                            <>
                                                <span className="slide5__sketch-spark">✳</span>
                                                <div className="slide5__sketch-product" />
                                                <span className="slide5__sketch-line" />
                                            </>
                                        )}

                                        {item.type === "product" && (
                                            <>
                                                <div className="slide5__sketch-product slide5__sketch-product--large" />
                                                <span className="slide5__sketch-circle" />
                                            </>
                                        )}

                                        {item.type === "process" && (
                                            <>
                                                <div className="slide5__sketch-hand" />
                                                <div className="slide5__sketch-box" />
                                                <span className="slide5__sketch-line" />
                                            </>
                                        )}

                                        {item.type === "action" && (
                                            <>
                                                <div className="slide5__sketch-product" />
                                                <span className="slide5__sketch-button">
                                                    PESAN
                                                </span>
                                            </>
                                        )}
                                    </div>

                                    <span className="slide5__frame-time">
                                        {item.time}
                                    </span>
                                </div>

                                <div className="slide5__frame-copy">
                                    <h3>{item.title}</h3>
                                    <p>{item.visual}</p>
                                    <span>{item.note}</span>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="slide5__storyboard-footer">
                        <Camera size={15} />
                        <p>
                            Storyboard tidak harus berupa gambar bagus.
                            Sketsa sederhana dan catatan singkat sudah cukup.
                        </p>
                    </div>
                </section>
            </main>

            <footer className="slide5__bottomline">
                <span>KABUPATEN BIMA</span>

                <span className="slide5__footer-center">
                    <span />
                    MEMBUAT VIDEO KONTEN YANG MENARIK
                </span>

                <span>29 / 10 / 2026</span>
            </footer>
        </section>
    )
}
