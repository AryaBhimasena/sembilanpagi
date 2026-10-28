
"use client"

import { useState, useRef } from "react"
import { Maximize, Minimize, Presentation } from "lucide-react"

import "@/styles/pages/slideshow-page.css"

// ==================================================
// IMPORT KOMPONEN PRESENTASI DI SINI
// ==================================================

import Slide1 from "@/components/slides/slide1"
import Slide2 from "@/components/slides/slide2"
import Slide3 from "@/components/slides/slide3"
import Slide4 from "@/components/slides/slide4"
import Slide5 from "@/components/slides/slide5"
import Slide6 from "@/components/slides/slide6"
import Slide7 from "@/components/slides/slide7"
import Slide8 from "@/components/slides/slide8"
import Slide9 from "@/components/slides/slide9"
import Slide10 from "@/components/slides/slide10"

const presentations = [
    {
        id: "talent-innovation-hub",
        title: "Talent and Innovation Hub — Pembukaan",
        Component: Slide1,
    },
    {
        id: "profil-presenter",
        title: "Profil Singkat Presenter",
        Component: Slide2,
    },
	{
		id: "tujuan-video-konten",
		title: "Kenapa Perlu Membuat Video Konten yang Menarik?",
		Component: Slide3,
	},
	{
		id: "ciri-video-menarik",
		title: "Bagaimana Cara Membuat Video Konten yang Menarik?",
		Component: Slide4,
	},
	{
		id: "plan-progress-output",
		title: "Plan, Progress, Output — Storyboard",
		Component: Slide5,
	},
	{
		id: "komponen-video",
		title: "Komponen Video dan Tips Pemula",
		Component: Slide6,
	},
	{
		id: "voice-over-shot-angle",
		title: "Voice Over, Shot Angle, dan Validasi",
		Component: Slide7,
	},
	{
		id: "editing-value-proposition",
		title: "Editing dan Value Proposition",
		Component: Slide8,
	},
	{
		id: "cta-whatsapp-business",
		title: "CTA, Leads, Funneling, dan Closing",
		Component: Slide9,
	},
	{
		id: "closing-presentation",
		title: "Closing — Saatnya Mulai",
		Component: Slide10,
	}
]

export default function SlideshowPage() {
    
const [activePresentation, setActivePresentation] =
    useState(presentations[0]?.id ?? "")

    const [isFullscreen, setIsFullscreen] = useState(false)

    const presentationRef = useRef(null)

    const currentPresentation = presentations.find(
        (item) => item.id === activePresentation
    )

const currentIndex = presentations.findIndex(
    (item) => item.id === activePresentation
)

function goToPreviousSlide() {
    if (currentIndex > 0) {
        setActivePresentation(
            presentations[currentIndex - 1].id
        )
    }
}

function goToNextSlide() {
    if (currentIndex < presentations.length - 1) {
        setActivePresentation(
            presentations[currentIndex + 1].id
        )
    }
}

    const ActiveComponent = currentPresentation?.Component

    async function toggleFullscreen() {
        const element = presentationRef.current

        if (!element) return

        try {
            if (!document.fullscreenElement) {
                await element.requestFullscreen()
                setIsFullscreen(true)
            } else {
                await document.exitFullscreen()
                setIsFullscreen(false)
            }
        } catch (error) {
            console.error(
                "Tidak dapat mengubah mode fullscreen:",
                error
            )
        }
    }

    return (
        <main className="slideshow-page">
            <header className="slideshow-header">
                <div className="slideshow-header__identity">
                    <div className="slideshow-header__icon">
                        <Presentation size={19} strokeWidth={1.7} />
                    </div>

                    <div className="slideshow-header__text">
                        <span className="slideshow-header__eyebrow">
                            PRESENTATION
                        </span>

                        <h1>Materi Presentasi</h1>
                    </div>
                </div>

                <div className="slideshow-header__actions">
                    {presentations.length > 1 && (
                        <select
                            className="slideshow-selector"
                            value={activePresentation}
                            onChange={(event) =>
                                setActivePresentation(event.target.value)
                            }
                            aria-label="Pilih materi presentasi"
                        >
                            <option value="" disabled>
                                Pilih presentasi
                            </option>

                            {presentations.map((item) => (
                                <option
                                    key={item.id}
                                    value={item.id}
                                >
                                    {item.title}
                                </option>
                            ))}
                        </select>
                    )}

                    <button
                        type="button"
                        className="slideshow-fullscreen"
                        onClick={toggleFullscreen}
                        disabled={!ActiveComponent}
                        aria-label={
                            isFullscreen
                                ? "Keluar dari layar penuh"
                                : "Tampilkan layar penuh"
                        }
                        title={
                            isFullscreen
                                ? "Keluar dari layar penuh"
                                : "Layar penuh"
                        }
                    >
                        {isFullscreen ? (
                            <Minimize size={17} strokeWidth={1.8} />
                        ) : (
                            <Maximize size={17} strokeWidth={1.8} />
                        )}

                        <span>
                            {isFullscreen ? "Keluar" : "Layar penuh"}
                        </span>
                    </button>
                </div>
            </header>

            <section
                ref={presentationRef}
                className={`slideshow-stage ${
                    isFullscreen
                        ? "slideshow-stage--fullscreen"
                        : ""
                }`}
                aria-label="Area presentasi"
            >
                {ActiveComponent ? (
                    <div className="slideshow-content">
                        <ActiveComponent />
                    </div>
                ) : (
                    <div className="slideshow-empty">
                        <div className="slideshow-empty__icon">
                            <Presentation
                                size={25}
                                strokeWidth={1.5}
                            />
                        </div>

                        <h2>Presentasi belum dipilih</h2>

                        <p>
                            Impor komponen presentasi yang ingin
                            ditampilkan, lalu daftarkan di konfigurasi
                            halaman ini.
                        </p>

                        <span className="slideshow-empty__note">
                            {presentations.length === 0
                                ? "Belum ada komponen presentasi yang terdaftar."
                                : "Pilih materi melalui menu di bagian atas."}
                        </span>
                    </div>
                )}
            </section>
<nav className="slideshow-navigation" aria-label="Navigasi slide">
    <button
        type="button"
        onClick={goToPreviousSlide}
        disabled={currentIndex <= 0}
    >
        Sebelumnya
    </button>

    <span>
        {currentIndex + 1} / {presentations.length}
    </span>

    <button
        type="button"
        onClick={goToNextSlide}
        disabled={currentIndex >= presentations.length - 1}
    >
        Berikutnya
    </button>
</nav>
            <footer className="slideshow-footer">
                <span>Ruang Presentasi</span>

                <span className="slideshow-footer__separator">
                    /
                </span>

                <span>
                    {currentPresentation
                        ? currentPresentation.title
                        : "Siap menampilkan materi"}
                </span>
            </footer>
        </main>
    )
}
