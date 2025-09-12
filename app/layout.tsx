import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuração das fontes personalizadas
const calistoga = localFont({
  src: "../public/fonts/Calistoga/Calistoga-Regular.ttf",
  variable: "--font-calistoga",
  display: "swap",
});

const sora = localFont({
  src: [
    {
      path: "../public/fonts/Sora/Sora-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Sora/Sora-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Sora/Sora-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Sora/Sora-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Sora/Sora-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Sora/Sora-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Sora/Sora-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Sora/Sora-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AIRE Cardiopulmonar - Fisioterapia Especializada | Dra. Camila Adam",
    template: "%s | AIRE Cardiopulmonar"
  },
  description: "Fisioterapia cardiovascular, pulmonar e oncológica com protocolos baseados em evidência. Atendimento domiciliar especializado pela Dra. Camila Adam, PhD. Reabilitação cardíaca, pulmonar e tratamento oncológico no conforto da sua casa.",
  keywords: [
    "fisioterapia cardiopulmonar",
    "fisioterapia cardiovascular",
    "fisioterapia pulmonar",
    "fisioterapia oncológica",
    "reabilitação cardíaca",
    "reabilitação pulmonar",
    "fisioterapia domiciliar",
    "Dra. Camila Adam",
    "fisioterapeuta PhD",
    "atendimento domiciliar",
    "fisioterapia respiratória",
    "reabilitação autonômica",
    "distúrbios do sono",
    "fisioterapia pediátrica",
    "CPAP",
    "BiPAP",
    "apneia do sono",
    "DPOC",
    "asma",
    "fibrose pulmonar",
    "insuficiência cardíaca",
    "infarto",
    "câncer de pulmão",
    "fisioterapia em oncologia",
    "Santa Catarina",
    "Florianópolis"
  ],
  authors: [{ name: "Dra. Camila Thaís Adam, PhD" }],
  creator: "AIRE Cardiopulmonar",
  publisher: "AIRE Cardiopulmonar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://airecardiopulmonar.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://airecardiopulmonar.com.br',
    siteName: 'AIRE Cardiopulmonar',
    title: 'AIRE Cardiopulmonar - Fisioterapia Especializada | Dra. Camila Adam',
    description: 'Fisioterapia cardiovascular, pulmonar e oncológica com protocolos baseados em evidência. Atendimento domiciliar especializado pela Dra. Camila Adam, PhD.',
    images: [
      {
        url: '/logoSmall.png',
        width: 1200,
        height: 630,
        alt: 'AIRE Cardiopulmonar - Fisioterapia Especializada',
      },
      {
        url: '/camila.jpg',
        width: 800,
        height: 600,
        alt: 'Dra. Camila Adam - Fisioterapeuta PhD especializada em cardiopulmonar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIRE Cardiopulmonar - Fisioterapia Especializada',
    description: 'Fisioterapia cardiovascular, pulmonar e oncológica com protocolos baseados em evidência. Atendimento domiciliar especializado.',
    images: ['/logoSmall.png'],
    creator: '@airecardiopulmonar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/logoSmall.png', type: 'image/png' },
      { url: '/logoLung.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/logoSmall.png',
    apple: '/logoSmall.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/logoLung.svg',
        color: '#77355B',
      },
    ],
  },
  category: 'healthcare',
  classification: 'Fisioterapia Cardiopulmonar',
  other: {
    'geo.region': 'BR-SC',
    'geo.placename': 'Santa Catarina',
    'geo.position': '-27.5954;-48.5480',
    'ICBM': '-27.5954, -48.5480',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#77355B" />
        <meta name="msapplication-TileColor" content="#77355B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AIRE Cardiopulmonar" />
        <meta name="application-name" content="AIRE Cardiopulmonar" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tooltip" content="AIRE Cardiopulmonar - Fisioterapia Especializada" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-navbutton-color" content="#77355B" />
        <meta name="msapplication-TileImage" content="/logoSmall.png" />
        {/* Meta tags específicas para WhatsApp e redes sociais */}
        <meta property="og:image" content="https://airecardiopulmonar.com.br/logoSmall.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="AIRE Cardiopulmonar - Fisioterapia Especializada" />
        <meta name="twitter:image" content="https://airecardiopulmonar.com.br/logoSmall.png" />
        <meta name="twitter:image:alt" content="AIRE Cardiopulmonar - Fisioterapia Especializada" />
        <link rel="icon" href="/logoSmall.png" type="image/png" />
        <link rel="icon" href="/logoLung.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/logoSmall.png" />
        <link rel="apple-touch-icon" href="/logoSmall.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logoSmall.png" />
        <link rel="mask-icon" href="/logoLung.svg" color="#77355B" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "AIRE Cardiopulmonar",
              "description": "Fisioterapia cardiovascular, pulmonar e oncológica com protocolos baseados em evidência. Atendimento domiciliar especializado.",
              "url": "https://airecardiopulmonar.com.br",
              "logo": "https://airecardiopulmonar.com.br/logoLung.svg",
              "image": "https://airecardiopulmonar.com.br/camila.jpg",
              "telephone": "+55-48-99999-9999",
              "email": "contato@airecardiopulmonar.com.br",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "SC",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-27.5954",
                "longitude": "-48.5480"
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "$$",
              "medicalSpecialty": [
                "Fisioterapia Cardiopulmonar",
                "Fisioterapia Cardiovascular", 
                "Fisioterapia Pulmonar",
                "Fisioterapia Oncológica",
                "Fisioterapia Pediátrica"
              ],
              "founder": {
                "@type": "Person",
                "name": "Dra. Camila Thaís Adam",
                "jobTitle": "Fisioterapeuta PhD",
                "description": "Doutora em Ciências Médicas pela UFSC e UCL, especialista em fisioterapia cardiopulmonar",
                "image": "https://airecardiopulmonar.com.br/camila.jpg",
                "alumniOf": [
                  "Universidade Federal de Santa Catarina",
                  "University College London"
                ],
                "hasCredential": [
                  "CREFITO 325911-F",
                  "PhD em Ciências Médicas"
                ]
              },
              "serviceType": [
                "Reabilitação Cardíaca",
                "Reabilitação Pulmonar", 
                "Fisioterapia Oncológica",
                "Fisioterapia Pediátrica",
                "Tratamento de Distúrbios do Sono",
                "Reabilitação Autonômica",
                "Atendimento Domiciliar"
              ],
              "areaServed": {
                "@type": "State",
                "name": "Santa Catarina"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Fisioterapia",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Fisioterapia Cardiopulmonar",
                      "description": "Programa de exercícios físicos supervisionados para adultos e idosos com disfunções cardiorrespiratórias"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Fisioterapia Pulmonar Pediátrica",
                      "description": "Tratamento e prevenção de problemas respiratórios em bebês e crianças"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure", 
                      "name": "Fisioterapia em Oncologia",
                      "description": "Suporte essencial no cuidado do paciente com câncer, minimizando efeitos colaterais dos tratamentos"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "50"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${calistoga.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
