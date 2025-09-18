import { ExperienceItem as ExperienceItemType } from '@/types/site';

interface ExperienceItemProps {
    experience: ExperienceItemType;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
    return (
        <div className="bg-surface rounded-xl p-6 border border-white/5 hover:border-white/10 transition-colors">
            <div className="mb-3">
                <h3 className="text-lg font-heading font-semibold text-text mb-1">
                    {experience.title}
                </h3>
                <p className="text-sm text-[var(--accent-purple)] font-medium">
                    {experience.org}
                </p>
            </div>
            <p className="text-sm text-muted leading-relaxed">
                {experience.summary}
            </p>
        </div>
    );
}
