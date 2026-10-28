
"use client"

import * as React from "react"
import {
    Mic,
    Camera,
    CheckCircle2,
    Eye,
    ShieldCheck,
    Heart,
    ShoppingCart,
    Lightbulb,
    ArrowUpRight,
    Volume2,
} from "lucide-react"

import "@/styles/slides/slide-7.css"

const shotAngles = [
    {
        number: "01",
        name: "Close Up",
        purpose: "Menonjolkan detail produk.",
        example: "Tekstur, warna, kemasan, atau hasil akhir.",
        visual: "close",
    },
    {
        number: "02",
        name: "Top View",
        purpose: "Menampilkan produk dari atas.",
        example: "Cocok untuk makanan, susunan barang, dan proses meracik.",
        visual: "top",
    },
    {
        number: "03",
        name: "Medium Shot",
        purpose: "Memperlihatkan orang dan aktivitasnya.",
        example: "Cocok saat pemilik usaha menjelaskan produk.",
        visual: "medium",
    },
    {
        number: "04",
        name: "Wide Shot",
        purpose: "Memberi konteks suasana.",
        example: "Menampilkan tempat usaha, proses kerja, atau pelayanan.",
        visual: "wide",
    },
]

const voiceTips = [
    "Gunakan bahasa sehari-hari.",
    "Bicara jelas, tidak perlu dibuat-buat.",
    "Rekam di tempat yang minim gangguan.",
    "Sesuaikan nada suara dengan isi video.",
]

export default function Slide7() {
    return (
        <main className="slide7">
            <div className="slide7__texture" aria-hidden="true" />

            <header className="slide7__topline">
                <div className="slide7__brand">
                    <span className="slide7__brand-dot" />
                    TALENT & INNOVATION HUB
                </div>
                <div className="slide7__topline-right">
                    TEKNIK PRODUKSI <span>/</span> 2026
                </div>
            </header>

            <div className="slide7__main">
                <section className="slide7__intro">
                    <p className="slide7__eyebrow">
                        SUARA DAN SUDUT PANDANG
                    </p>

                    <h1 className="slide7__title">
                        Dua Hal Kecil,
                        <br />
                        <span>Dampak Besar.</span>
                    </h1>

                    <p className="slide7__intro-copy">
                        Bukan hanya apa yang terlihat, tetapi juga
                        bagaimana kita menyampaikannya agar video terasa
                        hidup, jelas, dan meyakinkan.
                    </p>

                    <div className="slide7__voice">
                        <div className="slide7__voice-heading">
                            <div className="slide7__voice-icon">
                                <Mic size={25} strokeWidth={1.8} />
                            </div>
                            <div>
                                <p className="slide7__number">01</p>
                                <h2>Voice Over</h2>
                                <p className="slide7__subheading">
                                    Suara yang Mengarahkan Cerita
                                </p>
                            </div>
                        </div>

                        <p className="slide7__voice-description">
                            Voice over adalah narasi suara yang membantu
                            penonton memahami apa yang mereka lihat,
                            meskipun pembicara tidak selalu tampil di layar.
                        </p>

                        <div className="slide7__script">
                            <div className="slide7__script-label">
                                <Volume2 size={15} />
                                CONTOH NARASI PRODUK
                            </div>
                            <p>
                                “Dibuat setiap hari dengan bahan pilihan,
                                camilan ini cocok menemani waktu santai
                                bersama keluarga.”
                            </p>
                            <span className="slide7__script-note">
                                Singkat, alami, dan sesuai kondisi sebenarnya.
                            </span>
                        </div>

                        <div className="slide7__tips">
                            <p className="slide7__tips-title">
                                <CheckCircle2 size={16} />
                                Agar suara lebih nyaman didengar
                            </p>
                            {voiceTips.map((tip) => (
                                <div className="slide7__tip" key={tip}>
                                    <span />
                                    {tip}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="slide7__angles">
                    <div className="slide7__angles-heading">
                        <div className="slide7__angles-icon">
                            <Camera size={25} strokeWidth={1.8} />
                        </div>
                        <div>
                            <p className="slide7__number">02</p>
                            <h2>Shot Angle</h2>
                            <p className="slide7__subheading">
                                Sudut Pandang yang Menghidupkan Visual
                            </p>
                        </div>
                    </div>

                    <p className="slide7__angles-intro">
                        Pilihan sudut kamera memengaruhi bagian yang
                        diperhatikan penonton. Gunakan sudut sesuai cerita,
                        bukan sekadar agar videonya terlihat ramai.
                    </p>

                    <div className="slide7__shot-list">
                        {shotAngles.map((shot) => (
                            <article
                                className="slide7__shot"
                                key={shot.number}
                            >
                                <div
                                    className={`slide7__shot-visual slide7__shot-visual--${shot.visual}`}
                                    aria-hidden="true"
                                >
                                    {shot.visual === "close" && (
                                        <div className="slide7__sample-product slide7__sample-product--close">
                                            <span />
                                        </div>
                                    )}

                                    {shot.visual === "top" && (
                                        <div className="slide7__sample-plate">
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    )}

                                    {shot.visual === "medium" && (
                                        <div className="slide7__sample-person">
                                            <span className="slide7__person-head" />
                                            <span className="slide7__person-body" />
                                            <span className="slide7__person-table" />
                                        </div>
                                    )}

                                    {shot.visual === "wide" && (
                                        <div className="slide7__sample-shop">
                                            <span />
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    )}

                                    <span className="slide7__frame-label">
                                        {shot.number}
                                    </span>
                                </div>

                                <div className="slide7__shot-copy">
                                    <h3>{shot.name}</h3>
                                    <p className="slide7__shot-purpose">
                                        {shot.purpose}
                                    </p>
                                    <p className="slide7__shot-example">
                                        {shot.example}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="slide7__angle-note">
                        <ArrowUpRight size={17} />
                        <p>
                            Satu produk bisa direkam dari beberapa sudut
                            untuk menghasilkan cerita yang lebih lengkap.
                        </p>
                    </div>
                </section>
            </div>

            <section className="slide7__insight">
                <div className="slide7__insight-lead">
                    <div className="slide7__insight-icon">
                        <Lightbulb size={27} />
                    </div>
                    <div>
                        <p>INSIGHT UNTUK AUDIENCE</p>
                        <h2>Dari Validasi, Muncul Kepercayaan</h2>
                    </div>
                </div>

                <p className="slide7__insight-copy">
                    Tunjukkan bukti yang nyata, lalu jelaskan dengan jujur.
                    Penonton bukan hanya tertarik, tetapi punya alasan
                    untuk mempercayai produk yang ditawarkan.
                </p>

                <div className="slide7__outcomes">
                    <div>
                        <ShieldCheck size={22} />
                        <span>Terlihat lebih nyata</span>
                    </div>
                    <div>
                        <Heart size={22} />
                        <span>Membangun kepercayaan</span>
                    </div>
                    <div>
                        <ShoppingCart size={22} />
                        <span>Membantu keputusan</span>
                    </div>
                </div>
            </section>

            <footer className="slide7__footer">
                <span>KABUPATEN BIMA</span>
                <i />
                <span>MEMBUAT VIDEO KONTEN YANG MENARIK</span>
                <i />
                <span>29 / 10 / 2026</span>
            </footer>
        </main>
    )
}
