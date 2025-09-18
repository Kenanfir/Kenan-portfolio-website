import Link from 'next/link';
import Image from 'next/image';
import { SiteData } from '@/types/site';

interface HeaderProps {
    siteData: SiteData;
}

export default function Header({ siteData }: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Image
                            src={siteData.site.avatar}
                            alt={siteData.site.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <div>
                            <h1 className="text-xl font-heading font-bold text-text">
                                {siteData.site.name}
                            </h1>
                            <p className="text-sm text-muted">{siteData.site.tagline}</p>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            href="#projects"
                            className="text-sm font-medium text-muted hover:text-text transition-colors"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#education"
                            className="text-sm font-medium text-muted hover:text-text transition-colors"
                        >
                            Education
                        </Link>
                        <Link
                            href="#experiences"
                            className="text-sm font-medium text-muted hover:text-text transition-colors"
                        >
                            Experiences
                        </Link>
                        <Link
                            href="#skills"
                            className="text-sm font-medium text-muted hover:text-text transition-colors"
                        >
                            Skills
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium text-muted hover:text-text transition-colors"
                        >
                            Contact
                        </Link>
                        <Link
                            href={siteData.site.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-green)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                            Resume
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
