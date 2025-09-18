import { SkillItem, SkillLegend } from '@/types/site';

interface SkillMeterProps {
    skill: SkillItem;
    legend: SkillLegend[];
}

export default function SkillMeter({ skill, legend }: SkillMeterProps) {
    const getLevelIndex = (level: string) => {
        const levelMap: { [key: string]: number } = {
            'Professional': 4,
            'Advanced': 3,
            'Intermediate': 2,
            'Beginner': 1
        };
        return levelMap[level] || 0;
    };

    const levelIndex = getLevelIndex(skill.level);
    const maxLevel = 4;

    return (
        <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text">{skill.name}</span>
            <div className="skill-meter">
                {Array.from({ length: maxLevel }, (_, i) => (
                    <div
                        key={i}
                        className={`skill-bar ${i < levelIndex ? 'filled' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}
