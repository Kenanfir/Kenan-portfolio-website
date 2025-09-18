import type { Metadata } from 'next';
import { Montserrat, Raleway, Fira_Code } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
});

const raleway = Raleway({
    subsets: ['latin'],
    variable: '--font-raleway',
    display: 'swap',
});

const firaCode = Fira_Code({
    subsets: ['latin'],
    variable: '--font-fira-code',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Kenan Firmansyah - Game Programmer & iOS Developer',
    description: 'Game Programmer with a strong focus on Artificial Intelligence and Gameplay Programming. Portfolio showcasing projects in Unreal Engine, Unity, and iOS development.',
    keywords: [
        'Kenan Firmansyah',
        'Game Programmer',
        'iOS Developer',
        'Unreal Engine',
        'Unity',
        'Game Development',
        'Artificial Intelligence',
        'Portfolio'
    ],
    authors: [{ name: 'Kenan Firmansyah' }],
    creator: 'Kenan Firmansyah',
    publisher: 'Kenan Firmansyah',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://kenan.serverkn.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Kenan Firmansyah - Game Programmer & iOS Developer',
        description: 'Game Programmer with a strong focus on Artificial Intelligence and Gameplay Programming. Portfolio showcasing projects in Unreal Engine, Unity, and iOS development.',
        url: 'https://kenan.serverkn.com',
        siteName: 'Kenan Firmansyah Portfolio',
        images: [
            {
                url: 'https://kenan.serverkn.com/wp-content/uploads/2024/01/CV_ProfilePic-297x300.jpg',
                width: 297,
                height: 300,
                alt: 'Kenan Firmansyah Profile Picture',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kenan Firmansyah - Game Programmer & iOS Developer',
        description: 'Game Programmer with a strong focus on Artificial Intelligence and Gameplay Programming. Portfolio showcasing projects in Unreal Engine, Unity, and iOS development.',
        images: ['https://kenan.serverkn.com/wp-content/uploads/2024/01/CV_ProfilePic-297x300.jpg'],
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
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${montserrat.variable} ${raleway.variable} ${firaCode.variable}`}>
            <head>
                <meta name="theme-color" content="#1A1A1A" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/favicon.svg" />
            </head>
            <body className="font-body">
                <a href="#main" className="skip-link">
                    Skip to main content
                </a>
                {children}
            </body>
        </html>
    );
}