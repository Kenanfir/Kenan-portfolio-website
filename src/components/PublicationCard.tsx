import Link from 'next/link';
import { PublicationItem } from '@/types/site';

interface PublicationCardProps {
    publication: PublicationItem;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
    return (
        <div className="bg-surface rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
            <div className="mb-3">
                <h3 className="text-lg font-heading font-semibold text-text mb-2">
                    <Link
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent-purple)] transition-colors"
                    >
                        {publication.title}
                    </Link>
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
                    <span className="font-medium">{publication.venue}</span>
                    <span>•</span>
                    <span>{publication.date}</span>
                </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
                {publication.summary}
            </p>
        </div>
    );
}
