
"use client"

import * as React from "react"
import {
    ArrowDownRight,
    ArrowRight,
    Eye,
    Heart,
    MessageCircle,
    ShoppingBag,
    CheckCircle2,
    MousePointerClick,
    Phone,
    Search,
    Send,
    Tag,
    ClipboardList,
    PackageCheck,
} from "lucide-react"

import "@/styles/slides/slide-9.css"

const journey = [
    {
        number: "01",
        title: "Kenal",
        label: "LEADS",
        description: "Buat orang berhenti dan tertarik.",
        example: "“Sedang mencari oleh-oleh khas Bima?”",
        icon: Eye,
    },
    {
        number: "02",
        title: "Tertarik",
        label: "FUNNELING",
        description: "Beri informasi yang mereka butuhkan.",
        example: "Tampilkan produk, harga, dan manfaat.",
        icon: Heart,
    },
    {
        number: "03",
        title: "Percaya",
        label: "PERTIMBANGAN",
        description: "Bantu mereka yakin sebelum memilih.",
        example: "Tampilkan ulasan asli dan detail produk.",
        icon: MessageCircle,
    },
    {
        number: "04",
        title: "Bertindak",
        label: "CLOSING",
        description: "Arahkan ke langkah berikutnya.",
        example: "“Klik WhatsApp untuk pesan.”",
        icon: ShoppingBag,
    },
]

const customerSteps = [
    {
        number: "1",
        title: "Lihat",
        description: "Foto atau video jelas",
        icon: Eye,
    },
    {
        number: "2",
        title: "Pilih",
        description: "Varian dan ukuran",
        icon: Tag,
    },
    {
        number: "3",
        title: "Baca",
        description: "Harga dan ketentuan",
        icon: ClipboardList,
    },
    {
        number: "4",
        title: "Pesan",
        description: "Chat WhatsApp",
        icon: PackageCheck,
    },
]

export default function Slide9() {
    return (
        <main className="slide9">
            <header className="slide9__header">
                <div className="slide9__brand">
                    <span className="slide9__brand-mark">T</span>
                    <span>TALENT & INNOVATION HUB</span>
                </div>
                <div className="slide9__header-meta">
                    STRATEGI KONTEN <span> / </span> 09
                </div>
            </header>

            <section className="slide9__intro">
                <div className="slide9__intro-copy">
                    <p className="slide9__eyebrow">
                        CALL TO ACTION / CTA
                    </p>
                    <h1>
                        Jangan biarkan
                        <br />
                        penonton <span>menebak.</span>
                    </h1>
                    <p className="slide9__intro-description">
                        Setelah menonton, orang perlu tahu harus melakukan
                        apa, ke mana harus pergi, dan bagaimana memulainya.
                    </p>
                </div>

                <div className="slide9__cta-quote">
                    <span className="slide9__quote-mark">“</span>
                    <p>Tak kenal maka tak sayang.</p>
                    <span>
                        Kenalkan dulu. Bangun kepercayaan. Ajak bertindak.
                    </span>
                </div>
            </section>

            <section className="slide9__journey">
                <div className="slide9__journey-heading">
                    <div>
                        <p className="slide9__eyebrow">ALUR MENUJU PEMBELIAN</p>
                        <h2>Dari penonton menjadi pelanggan</h2>
                    </div>
                    <p>
                        Tidak semua orang langsung membeli. Bantu mereka
                        maju satu langkah demi satu langkah.
                    </p>
                </div>

                <div className="slide9__journey-track">
                    {journey.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <React.Fragment key={item.number}>
                                <article
                                    className={`slide9__stage slide9__stage--${index + 1}`}
                                >
                                    <div className="slide9__stage-top">
                                        <span>{item.number}</span>
                                        <Icon size={22} strokeWidth={1.8} />
                                    </div>
                                    <p className="slide9__stage-label">
                                        {item.label}
                                    </p>
                                    <h3>{item.title}</h3>
                                    <p className="slide9__stage-description">
                                        {item.description}
                                    </p>
                                    <div className="slide9__stage-example">
                                        {item.example}
                                    </div>
                                </article>

                                {index < journey.length - 1 && (
                                    <div className="slide9__journey-arrow">
                                        <ArrowRight size={17} />
                                    </div>
                                )}
                            </React.Fragment>
                        )
                    })}
                </div>
            </section>

            <section className="slide9__selling">
                <div className="slide9__selling-title">
                    <p className="slide9__eyebrow">DUA PENDEKATAN</p>
                    <h2>
                        Jualan boleh langsung.
                        <br />
                        Jualan juga bisa bertahap.
                    </h2>
                </div>

                <div className="slide9__selling-method slide9__selling-method--soft">
                    <span className="slide9__selling-number">A</span>
                    <div>
                        <h3>Soft selling</h3>
                        <p>
                            Bangun ketertarikan lewat edukasi, cerita,
                            manfaat, proses, dan pengalaman pelanggan.
                        </p>
                        <span className="slide9__selling-example">
                            “Begini cara memilih produk yang sesuai.”
                        </span>
                    </div>
                </div>

                <div className="slide9__selling-method slide9__selling-method--hard">
                    <span className="slide9__selling-number">B</span>
                    <div>
                        <h3>Hard selling</h3>
                        <p>
                            Sampaikan penawaran dan ajakan membeli dengan
                            jelas, termasuk harga atau promo yang benar.
                        </p>
                        <span className="slide9__selling-example">
                            “Pesan hari ini melalui WhatsApp.”
                        </span>
                    </div>
                </div>
            </section>

            <section className="slide9__whatsapp">
                <div className="slide9__wa-heading">
                    <div className="slide9__wa-icon">
                        <MessageCircle size={24} />
                    </div>
                    <div>
                        <p className="slide9__eyebrow">CONTOH PENERAPAN</p>
                        <h2>Permudah pelanggan lewat WhatsApp Business</h2>
                        <p>
                            Jangan hanya menulis “Hubungi kami”. Siapkan
                            informasi agar pelanggan tidak bingung.
                        </p>
                    </div>
                </div>

                <div className="slide9__customer-path">
                    {customerSteps.map((step) => {
                        const Icon = step.icon

                        return (
                            <div className="slide9__customer-step" key={step.number}>
                                <div className="slide9__customer-icon">
                                    <Icon size={17} />
                                </div>
                                <div>
                                    <span>0{step.number}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="slide9__wa-demo">
                    <div className="slide9__wa-window">
                        <div className="slide9__wa-bar">
                            <div className="slide9__wa-avatar">UM</div>
                            <div className="slide9__wa-business">
                                <strong>Usaha Anda</strong>
                                <span>WhatsApp Business</span>
                            </div>
                            <Phone size={16} />
                        </div>

                        <div className="slide9__wa-chat">
                            <div className="slide9__wa-bubble slide9__wa-bubble--incoming">
                                Halo, selamat datang! Ada yang bisa kami bantu?
                            </div>
                            <div className="slide9__wa-bubble slide9__wa-bubble--outgoing">
                                Saya ingin melihat produk dan harganya.
                            </div>
                            <div className="slide9__wa-bubble slide9__wa-bubble--incoming">
                                Tentu. Silakan lihat katalog kami. Jika sudah
                                memilih, kirim nama produk dan jumlahnya di sini.
                            </div>
                            <span className="slide9__wa-time">Contoh percakapan</span>
                        </div>
                    </div>

                    <div className="slide9__wa-features">
                        <div>
                            <Search size={17} />
                            <span>Katalog produk</span>
                        </div>
                        <div>
                            <MessageCircle size={17} />
                            <span>Pesan sambutan</span>
                        </div>
                        <div>
                            <CheckCircle2 size={17} />
                            <span>Balasan cepat</span>
                        </div>
                        <div>
                            <Send size={17} />
                            <span>Tautan chat langsung</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="slide9__takeaway">
                <div className="slide9__takeaway-icon">
                    <MousePointerClick size={25} />
                </div>
                <div className="slide9__takeaway-copy">
                    <p>CTA YANG BAIK</p>
                    <h2>Jelas ajakannya. Mudah langkahnya. Nyata informasinya.</h2>
                </div>
                <div className="slide9__takeaway-example">
                    <span>CONTOH</span>
                    “Lihat katalog dan pesan lewat WhatsApp.”
                    <ArrowDownRight size={18} />
                </div>
            </section>

            <footer className="slide9__footer">
                <span>KABUPATEN BIMA</span>
                <i />
                <span>MEMBUAT VIDEO KONTEN YANG MENARIK</span>
                <i />
                <span>29 / 10 / 2026</span>
            </footer>
        </main>
    )
}
