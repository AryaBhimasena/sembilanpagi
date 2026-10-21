
export const metadata = {
  metadataBase: new URL('https://iyaz.sembilanpagi.com'),

  title: {
    default: 'Iyaz | Personal Profile',
    template: '%s | Iyaz',
  },

  description:
    'Profil profesional, layanan digital, dan portofolio Iyaz.',

  applicationName: 'Iyaz',

  alternates: {
    canonical: 'https://iyaz.sembilanpagi.com',
  },

  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://iyaz.sembilanpagi.com',
    siteName: 'Iyaz',
    title: 'Iyaz | Personal Profile',
    description:
      'Profil profesional, layanan digital, dan portofolio Iyaz.',
    images: [
      {
        url: '/iyaz/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Iyaz — Personal Profile',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Iyaz | Personal Profile',
    description:
      'Profil profesional, layanan digital, dan portofolio Iyaz.',
    images: ['/iyaz/opengraph-image.png'],
  },

  icons: {
    icon: '/iyaz/icon.png',
  },
};

export default function IyazLayout({ children }) {
  return children;
}
