
import React from "react"
import {
    Eye,
    ShieldCheck,
    MousePointerClick,
    ArrowRight,
} from "lucide-react"

import "@/styles/slides/slide-3.css"

const outcomes = [
    {
        number: "01",
        title: "Menarik Perhatian",
        description:
            "Membuat orang berhenti sejenak, tertarik melihat, dan ingin tahu lebih banyak tentang usaha kita.",
        example: "Tampilkan produk atau masalah yang ingin diselesaikan.",
        Icon: Eye,
    },
    {
        number: "02",
        title: "Membangun Kepercayaan",
        description:
            "Membantu calon pelanggan mengenal produk, melihat prosesnya, dan memahami manfaat yang ditawarkan.",
        example: "Tunjukkan proses, kualitas, atau pengalaman pelanggan.",
        Icon: ShieldCheck,
    },
    {
        number: "03",
        title: "Mendorong Tindakan",
        description:
            "Mengarahkan penonton untuk bertanya, menghubungi penjual, datang ke lokasi, atau membeli.",
        example: "Berikan informasi pemesanan dan ajakan yang jelas.",
        Icon: MousePointerClick,
    },
]

export default function Slide3() {
    return (
        <section
            className="slide3"
            aria-label="Mengapa perlu membuat video konten yang menarik"
        >
            <div className="slide3__background-mark" aria-hidden="true">
                <span>03</span>
            </div>

            <div className="slide3__topline">
                <span className="slide3__topline-brand">
                    <span className="slide3__topline-dot" />
                    TALENT & INNOVATION
                </span>

                <span className="slide3__topline-number">
                    MEMAHAMI TUJUAN / 2026
                </span>
            </div>

            <main className="slide3__body">
                <header className="slide3__heading">
                    <p className="slide3__eyebrow">
                        SEBELUM MULAI MEREKAM
                    </p>

                    <h1 className="slide3__title">
                        Kenapa Perlu Membuat
                        <br />
                        Video Konten yang <span>Menarik?</span>
                    </h1>

                    <p className="slide3__intro">
                        Bukan hanya supaya ditonton, tetapi agar video
                        membantu orang mengenal usaha dan mengambil tindakan.
                    </p>
                </header>

                <section
                    className="slide3__outcomes"
                    aria-label="Tiga tujuan video konten"
                >
                    {outcomes.map(({ number, title, description, example, Icon }) => (
                        <article className="slide3__card" key={number}>
                            <div className="slide3__card-top">
                                <span className="slide3__card-number">
                                    {number}
                                </span>

                                <span className="slide3__card-icon">
                                    <Icon size={23} strokeWidth={1.6} />
                                </span>
                            </div>

                            <h2 className="slide3__card-title">{title}</h2>

                            <p className="slide3__card-description">
                                {description}
                            </p>

                            <div className="slide3__card-example">
                                <ArrowRight size={14} strokeWidth={1.8} />
                                <span>{example}</span>
                            </div>
                        </article>
                    ))}
                </section>

                <aside className="slide3__takeaway">
                    <div className="slide3__takeaway-label">
                        <span className="slide3__takeaway-dot" />
                        CONTOH UNTUK UMKM
                    </div>

                    <p className="slide3__takeaway-text">
                        Jangan hanya memperlihatkan botol madu.
                        Tunjukkan juga asal produk, proses pengemasan,
                        dan cara pelanggan memesannya.
                    </p>

                    <span className="slide3__takeaway-note">
                        Setiap video perlu tujuan yang jelas.
                    </span>
                </aside>
            </main>

            <div className="slide3__bottomline">
                <span>KABUPATEN BIMA</span>

                <span className="slide3__bottomline-center">
                    <span />
                    NUSA TENGGARA BARAT
                </span>

                <span>29 / 10 / 2026</span>
            </div>
        </section>
    )
}
