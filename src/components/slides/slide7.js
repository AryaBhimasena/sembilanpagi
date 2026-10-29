
"use client"

import * as React from "react"
import {
    Mic,
    Camera,
    CheckCircle2,
    ShieldCheck,
    Heart,
    ShoppingCart,
    Lightbulb,
    ArrowUpRight,
    Volume2,
    Play,
    Pause,
    RotateCcw,
} from "lucide-react"

import "@/styles/slides/slide-7.css"

const shotAngles = [
    {
        number: "01",
        name: "Close Up",
        purpose: "Menonjolkan detail produk madu.",
        example:
            "Rekam madu saat dituang perlahan agar warna dan teksturnya terlihat jelas.",
        visual: "close",
    },
    {
        number: "02",
        name: "Top View",
        purpose: "Menampilkan produk dari atas.",
        example:
            "Tata botol madu, gelas, dan sendok kayu di atas meja dengan rapi.",
        visual: "top",
    },
    {
        number: "03",
        name: "Medium Shot",
        purpose: "Memperlihatkan penjual dan produk.",
        example:
            "Tampilkan pemilik usaha saat memperkenalkan madu kepada calon pembeli.",
        visual: "medium",
    },
    {
        number: "04",
        name: "Wide Shot",
        purpose: "Memberi konteks asal produk.",
        example:
            "Tampilkan tempat usaha, proses pengemasan, atau lingkungan produksi yang sebenarnya.",
        visual: "wide",
    },
]

const voiceTips = [
    "Gunakan bahasa sehari-hari yang mudah dipahami.",
    "Sampaikan asal produk sesuai informasi yang benar.",
    "Rekam di tempat yang minim gangguan suara.",
    "Hindari klaim khasiat yang belum terbukti.",
]

const voiceScript =
    "Mencari madu dari Kabupaten Bima, Nusa Tenggara Barat? Kenali produk madu dari usaha lokal ini. Dikemas dalam botol praktis, cocok untuk persediaan di rumah atau sebagai buah tangan. Yuk, kenali produknya lebih dekat dan tanyakan langsung kepada penjual mengenai asal serta proses pengolahannya."

const voiceOptions = [
    {
        id: "adam",
        name: "VO Adam",
        description: "Contoh suara narator pria",
        src: "/sounds/VO_Adam.mp3",
    },
    {
        id: "putri",
        name: "VO Putri",
        description: "Contoh suara narator wanita",
        src: "/sounds/VO_Putri.mp3",
    },
]

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
        return "0:00"
    }

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`
}

function VoicePlayer({
    id,
    name,
    description,
    src,
    activeVoice,
    setActiveVoice,
    activeAudioRef,
}) {
    const audioRef = React.useRef(null)

    const [currentTime, setCurrentTime] = React.useState(0)
    const [duration, setDuration] = React.useState(0)
    const [isSeeking, setIsSeeking] = React.useState(false)
    const [audioError, setAudioError] = React.useState(false)

    const isPlaying = activeVoice === id

    const progress =
        duration > 0 ? (currentTime / duration) * 100 : 0

    const handlePlay = async () => {
        const audio = audioRef.current

        if (!audio) return

        if (isPlaying && !audio.paused) {
            audio.pause()
            return
        }

        if (
            activeAudioRef.current &&
            activeAudioRef.current !== audio
        ) {
            activeAudioRef.current.pause()
        }

        activeAudioRef.current = audio
        setActiveVoice(id)
        setAudioError(false)

        try {
            await audio.play()
        } catch {
            setActiveVoice(null)
            setAudioError(true)
        }
    }

    const handlePause = () => {
        if (activeAudioRef.current === audioRef.current) {
            activeAudioRef.current = null
        }

        setActiveVoice((current) =>
            current === id ? null : current
        )
    }

    const handleEnded = () => {
        setCurrentTime(0)

        if (activeAudioRef.current === audioRef.current) {
            activeAudioRef.current = null
        }

        setActiveVoice((current) =>
            current === id ? null : current
        )
    }

    const handleSeek = (value) => {
        const audio = audioRef.current

        if (!audio || !Number.isFinite(audio.duration)) return

        audio.currentTime = value
        setCurrentTime(value)
    }

    const handleRestart = () => {
        const audio = audioRef.current

        if (!audio) return

        audio.currentTime = 0
        setCurrentTime(0)
    }

    return (
        <article className="slide7__audio-player">
            <audio
                ref={audioRef}
                src={src}
                preload="metadata"
                onLoadedMetadata={(event) => {
                    setDuration(event.currentTarget.duration)
                    setAudioError(false)
                }}
                onDurationChange={(event) => {
                    setDuration(event.currentTarget.duration)
                }}
                onTimeUpdate={(event) => {
                    if (!isSeeking) {
                        setCurrentTime(
                            event.currentTarget.currentTime
                        )
                    }
                }}
                onPlay={() => {
                    setAudioError(false)
                }}
                onPause={handlePause}
                onEnded={handleEnded}
                onError={() => {
                    setAudioError(true)
                }}
            />

            <button
                type="button"
                className="slide7__audio-play"
                onClick={handlePlay}
                aria-label={`${isPlaying ? "Jeda" : "Putar"} ${name}`}
            >
                {isPlaying ? (
                    <Pause size={21} fill="currentColor" />
                ) : (
                    <Play size={21} fill="currentColor" />
                )}
            </button>

            <div className="slide7__audio-details">
                <div className="slide7__audio-heading">
                    <div>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>

                    <button
                        type="button"
                        className="slide7__audio-restart"
                        onClick={handleRestart}
                        aria-label={`Ulangi ${name} dari awal`}
                        title="Mulai dari awal"
                    >
                        <RotateCcw size={16} />
                    </button>
                </div>

                <input
                    className="slide7__audio-progress"
                    type="range"
                    min={0}
                    max={duration || 0}
                    step={0.1}
                    value={Math.min(
                        currentTime,
                        duration || 0
                    )}
                    style={{
                        "--audio-progress": `${progress}%`,
                    }}
                    onPointerDown={() => setIsSeeking(true)}
                    onPointerUp={() => setIsSeeking(false)}
                    onChange={(event) => {
                        handleSeek(Number(event.target.value))
                    }}
                    aria-label={`Posisi audio ${name}`}
                    disabled={!duration || audioError}
                />

                <div className="slide7__audio-time">
                    <span>{formatTime(currentTime)}</span>
                    <span>
                        {duration ? formatTime(duration) : "--:--"}
                    </span>
                </div>

                {audioError && (
                    <p
                        className="slide7__audio-error"
                        role="status"
                    >
                        Audio tidak dapat dimuat. Periksa file dan path audio.
                    </p>
                )}
            </div>
        </article>
    )
}

export default function Slide7() {
    const [activeVoice, setActiveVoice] = React.useState(null)
    const activeAudioRef = React.useRef(null)

    React.useEffect(() => {
        return () => {
            if (activeAudioRef.current) {
                activeAudioRef.current.pause()
                activeAudioRef.current = null
            }
        }
    }, [])

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
                            penonton memahami produk melalui gambar dan
                            penjelasan yang singkat, jelas, serta sesuai
                            dengan kondisi sebenarnya.
                        </p>

                        <div className="slide7__script">
                            <div className="slide7__script-label">
                                <Volume2 size={15} />
                                CONTOH NARASI PRODUK
                            </div>

                            <p>“{voiceScript}”</p>

                            <span className="slide7__script-note">
                                Simak dua contoh suara berikut untuk
                                membandingkan karakter penyampaian narasi.
                            </span>

                            <div className="slide7__audio-list">
                                {voiceOptions.map((voice) => (
                                    <VoicePlayer
                                        key={voice.id}
                                        {...voice}
                                        activeVoice={activeVoice}
                                        setActiveVoice={setActiveVoice}
                                        activeAudioRef={activeAudioRef}
                                    />
                                ))}
                            </div>

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
                        Gunakan produk madu lokal sebagai contoh.
                        Setiap sudut kamera memiliki fungsi berbeda,
                        mulai dari memperlihatkan detail kemasan
                        hingga memperkenalkan penjual dan tempat usaha.
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
                            Contoh urutan video: tampilkan botol madu,
                            rekam madu saat dituang, perkenalkan penjual,
                            lalu tutup dengan informasi pemesanan.
                        </p>
                    </div>
                </section>
            </div>

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
