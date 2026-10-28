
"use client"

import * as React from "react"
import {
    Type,
    Gauge,
    Music2,
    Volume2,
    Scissors,
    Sparkles,
    Target,
    Eye,
    MessageCircle,
    Check,
    ArrowRight,
} from "lucide-react"

import "@/styles/slides/slide-8.css"

const editingTools = [
    {
        number: "01",
        title: "Teks Pendukung",
        tag: "MEMPERJELAS",
        description:
            "Tampilkan kata penting, harga, manfaat, atau informasi yang perlu diingat.",
        example: "Contoh: “Dibuat setiap hari”",
        icon: Type,
        className: "text",
    },
    {
        number: "02",
        title: "Slow Motion",
        tag: "MENONJOLKAN",
        description:
            "Perlambat momen tertentu agar detail atau gerakan penting lebih terasa.",
        example: "Contoh: saus dituangkan ke makanan",
        icon: Gauge,
        className: "slow",
    },
    {
        number: "03",
        title: "Musik & Efek Suara",
        tag: "MEMBANGUN SUASANA",
        description:
            "Pilih suara yang sesuai dengan karakter produk dan suasana cerita.",
        example: "Contoh: bunyi renyah saat makanan digigit",
        icon: Music2,
        className: "sound",
    },
    {
        number: "04",
        title: "Potong & Susun",
        tag: "MENJAGA ALUR",
        description:
            "Buang bagian yang tidak perlu dan susun gambar agar pesan cepat dipahami.",
        example: "Contoh: proses → hasil → cara pesan",
        icon: Scissors,
        className: "cut",
    },
]

export default function Slide8() {
    return (
        <main className="slide8">
            <header className="slide8__header">
                <div className="slide8__brand">
                    <span className="slide8__brand-mark">T</span>
                    <span>TALENT & INNOVATION HUB</span>
                </div>
                <div className="slide8__header-note">
                    WORKSHOP VIDEO <span>—</span> 08
                </div>
            </header>

            <section className="slide8__hero">
                <div className="slide8__hero-copy">
                    <p className="slide8__eyebrow">
                        TAHAP 04 / PENYUNTINGAN
                    </p>
                    <h1>
                        Editing:
                        <br />
                        <span>Bukan Sekadar Efek.</span>
                    </h1>
                    <p className="slide8__lead">
                        Editing membantu kita memilih apa yang perlu dilihat,
                        didengar, dan diingat oleh penonton.
                    </p>
                </div>

                <div className="slide8__timeline" aria-label="Ilustrasi timeline editing">
                    <div className="slide8__timeline-top">
                        <span>
                            <Scissors size={14} /> TIMELINE CERITA
                        </span>
                        <span>00:00 — 00:15</span>
                    </div>

                    <div className="slide8__track">
                        <span className="slide8__track-label">VIDEO</span>
                        <div className="slide8__clip slide8__clip--one">
                            <span>PRODUK</span>
                        </div>
                        <div className="slide8__clip slide8__clip--two">
                            <span>DETAIL</span>
                        </div>
                        <div className="slide8__clip slide8__clip--three">
                            <span>HASIL</span>
                        </div>
                    </div>

                    <div className="slide8__track slide8__track--text">
                        <span className="slide8__track-label">TEKS</span>
                        <div className="slide8__text-clip">
                            Bahan pilihan
                        </div>
                        <div className="slide8__text-clip">
                            Dibuat harian
                        </div>
                    </div>

                    <div className="slide8__track slide8__track--audio">
                        <span className="slide8__track-label">AUDIO</span>
                        <div className="slide8__audio-clip">
                            {Array.from({ length: 34 }, (_, i) => (
                                <span
                                    key={i}
                                    style={{
                                        height: `${20 + ((i * 17 + 13) % 70)}%`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="slide8__playhead" />
                    <div className="slide8__timeline-foot">
                        <span>Gambar</span>
                        <span>Teks pendukung</span>
                        <span>Suara</span>
                    </div>
                </div>
            </section>

            <section className="slide8__tools">
                <div className="slide8__section-heading">
                    <div>
                        <p className="slide8__eyebrow">PILIH SESUAI TUJUAN</p>
                        <h2>Setiap efek punya tugas.</h2>
                    </div>
                    <p>
                        Gunakan seperlunya. Jangan sampai efeknya lebih
                        menonjol daripada produk yang ditawarkan.
                    </p>
                </div>

                <div className="slide8__tool-list">
                    {editingTools.map((tool) => {
                        const Icon = tool.icon

                        return (
                            <article
                                className={`slide8__tool slide8__tool--${tool.className}`}
                                key={tool.number}
                            >
                                <div className="slide8__tool-top">
                                    <span>{tool.number}</span>
                                    <Icon size={23} strokeWidth={1.8} />
                                </div>
                                <p className="slide8__tool-tag">{tool.tag}</p>
                                <h3>{tool.title}</h3>
                                <p className="slide8__tool-description">
                                    {tool.description}
                                </p>
                                <div className="slide8__example">
                                    <ArrowRight size={13} />
                                    {tool.example}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>

            <section className="slide8__insight">
                <div className="slide8__insight-title">
                    <div className="slide8__insight-icon">
                        <Target size={26} />
                    </div>
                    <div>
                        <p>INSIGHT / VALUE PROPOSITION</p>
                        <h2>Efek menarik perhatian. Nilai membuat orang tertarik.</h2>
                    </div>
                </div>

                <div className="slide8__insight-body">
                    <p>
                        Tunjukkan alasan nyata mengapa produk Anda berguna,
                        berbeda, atau cocok untuk kebutuhan pelanggan.
                    </p>
                    <div className="slide8__value-points">
                        <span><Eye size={15} /> Apa manfaatnya?</span>
                        <span><MessageCircle size={15} /> Apa yang membedakannya?</span>
                        <span><Check size={15} /> Apa buktinya?</span>
                    </div>
                </div>
            </section>

            <footer className="slide8__footer">
                <span>KABUPATEN BIMA</span>
                <span className="slide8__footer-line" />
                <span>MEMBUAT VIDEO KONTEN YANG MENARIK</span>
                <span className="slide8__footer-line" />
                <span>29 / 10 / 2026</span>
            </footer>
        </main>
    )
}
