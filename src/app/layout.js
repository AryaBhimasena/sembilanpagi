import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://sembilanpagi.com"),

  title: {
    default: "Sembilan Pagi — Jasa Admin Remote untuk Operasional Bisnis",
    template: "%s | Sembilan Pagi",
  },

  description:
    "Sembilan Pagi membantu perusahaan menjalankan administrasi operasional seperti payroll, invoice, laporan, dan dokumentasi bisnis tanpa perlu membangun tim admin internal.",

  keywords: [
    "jasa admin remote",
    "admin operasional",
    "jasa administrasi perusahaan",
    "outsourcing admin",
    "payroll perusahaan",
    "jasa invoice",
    "laporan operasional bisnis",
    "admin bisnis",
    "virtual admin indonesia",
    "sembilan pagi",
  ],

  authors: [
    {
      name: "Sembilan Pagi",
      url: "https://sembilanpagi.com",
    },
  ],

  creator: "Sembilan Pagi",
  publisher: "Sembilan Pagi",

  applicationName: "Sembilan Pagi",

  category: "business",

  alternates: {
    canonical: "https://sembilanpagi.com",
  },

  openGraph: {
    title:
      "Sembilan Pagi — Jasa Admin Remote untuk Operasional Bisnis",

    description:
      "Administrasi bisnis lebih rapi tanpa perlu membangun tim admin internal. Payroll, invoice, laporan, dan dokumentasi operasional dikelola lebih terstruktur bersama Sembilan Pagi.",

    url: "https://sembilanpagi.com",

    siteName: "Sembilan Pagi",

    locale: "id_ID",

    type: "website",

    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Sembilan Pagi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Sembilan Pagi — Jasa Admin Remote untuk Operasional Bisnis",

    description:
      "Partner administrasi bisnis untuk membantu operasional perusahaan lebih rapi, stabil, dan mudah dipantau.",

    images: ["/images/og-cover.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* STRUCTURED DATA */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "Organization",

              name: "Sembilan Pagi",

              url: "https://sembilanpagi.com",

              logo: "https://sembilanpagi.com/logo.png",

              description:
                "Sembilan Pagi adalah layanan administrasi operasional bisnis yang membantu perusahaan menangani payroll, invoice, laporan, dan dokumentasi bisnis tanpa perlu membangun tim admin internal.",

              sameAs: [
                "https://instagram.com/sembilanpagi",
              ],

              contactPoint: {
                "@type": "ContactPoint",

                contactType: "customer service",

                availableLanguage: ["Indonesian"],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}