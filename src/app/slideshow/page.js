
"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Maximize, Minimize, Presentation } from "lucide-react"

import "@/styles/pages/slideshow-page.css"

// ==================================================
// IMPORT KOMPONEN PRESENTASI
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
    },
]

export default function SlideshowPage() {
    const [activePresentation, setActivePresentation] = useState(
        presentations[0]?.id ?? ""
    )

    const [isFullscreen, setIsFullscreen] = useState(false)

    // Pastikan nilai atribut tombol konsisten pada SSR dan hydration.
    const [hasMounted, setHasMounted] = useState(false)

    const presentationRef = useRef(null)

    const currentIndex = presentations.findIndex(
        (item) => item.id === activePresentation
    )

    const currentPresentation = presentations[currentIndex]
    const ActiveComponent = currentPresentation?.Component

    const isFirstSlide = currentIndex <= 0
    const isLastSlide =
        currentIndex < 0 || currentIndex >= presentations.length - 1

    useEffect(() => {
        setHasMounted(true)
    }, [])

    // Sinkronkan status saat fullscreen dibuka atau ditutup,
    // termasuk saat pengguna menekan Escape.
    useEffect(() => {
        function handleFullscreenChange() {
            setIsFullscreen(Boolean(document.fullscreenElement))
        }

        document.addEventListener(
            "fullscreenchange",
            handleFullscreenChange
        )

        return () => {
            document.removeEventListener(
                "fullscreenchange",
                handleFullscreenChange
            )
        }
    }, [])

    const goToPreviousSlide = useCallback(() => {
        setActivePresentation((currentId) => {
            const index = presentations.findIndex(
                (item) => item.id === currentId
            )

            if (index <= 0) return currentId

            return presentations[index - 1].id
        })
    }, [])

    const goToNextSlide = useCallback(() => {
        setActivePresentation((currentId) => {
            const index = presentations.findIndex(
                (item) => item.id === currentId
            )

            if (index < 0 || index >= presentations.length - 1) {
                return currentId
            }

            return presentations[index + 1].id
        })
    }, [])

    // Keyboard: panah kiri dan kanan saat mode fullscreen.
    // Abaikan tombol ketika pengguna sedang mengetik atau
    // ketika fokus berada pada kontrol formulir.
    useEffect(() => {
        if (!isFullscreen) return

        function handleKeyDown(event) {
            if (
                event.altKey ||
                event.ctrlKey ||
                event.metaKey ||
                event.shiftKey
            ) {
                return
            }

            const target = event.target

            if (
                target instanceof HTMLElement &&
                (
                    target.isContentEditable ||
                    ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(
                        target.tagName
                    )
                )
            ) {
                return
            }

            if (event.key === "ArrowRight") {
                event.preventDefault()
                goToNextSlide()
            }

            if (event.key === "ArrowLeft") {
                event.preventDefault()
                goToPreviousSlide()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [isFullscreen, goToNextSlide, goToPreviousSlide])

    async function toggleFullscreen() {
        const element = presentationRef.current

        if (!element) return

        try {
            if (!document.fullscreenElement) {
                await element.requestFullscreen()
            } else {
                await document.exitFullscreen()
            }
        } catch (error) {
            console.error(
                "Tidak dapat mengubah mode fullscreen:",
                error
            )
        }
    }

    // Klik area kiri/kanan slide untuk berpindah.
    // Area tengah tidak melakukan navigasi.
    function handleStageClick(event) {
        const target = event.target

        // Jangan mengambil alih klik pada elemen interaktif.
        if (
            target instanceof Element &&
            target.closest(
                "button, a, input, textarea, select, [role='button']"
            )
        ) {
            return
        }

        const stage = presentationRef.current
        if (!stage) return

        const rect = stage.getBoundingClientRect()
        if (!rect.width) return

        const relativeX = event.clientX - rect.left
        const leftBoundary = rect.width * 0.35
        const rightBoundary = rect.width * 0.65

        if (relativeX < leftBoundary) {
            goToPreviousSlide()
        } else if (relativeX > rightBoundary) {
            goToNextSlide()
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
                            {presentations.map((item) => (
                                <option key={item.id} value={item.id}>
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
                    isFullscreen ? "slideshow-stage--fullscreen" : ""
                }`}
                aria-label="Area presentasi"
                onClick={handleStageClick}
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
                            Belum ada komponen presentasi yang tersedia.
                        </span>
                    </div>
                )}
            </section>

            <nav
                className="slideshow-navigation"
                aria-label="Navigasi slide"
            >
                <button
                    type="button"
                    onClick={goToPreviousSlide}
                    disabled={!hasMounted || isFirstSlide}
                    aria-label="Ke slide sebelumnya"
                >
                    Sebelumnya
                </button>

                <span aria-live="polite">
                    {currentIndex >= 0 ? currentIndex + 1 : 0}
                    {" / "}
                    {presentations.length}
                </span>

                <button
                    type="button"
                    onClick={goToNextSlide}
                    disabled={!hasMounted || isLastSlide}
                    aria-label="Ke slide berikutnya"
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
