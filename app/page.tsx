import Image from 'next/image';
import Link from 'next/link';
import { loadSiteData } from '@/lib/content';
import Header from '@/components/Header';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import ExperienceItem from '@/components/ExperienceItem';
import PublicationCard from '@/components/PublicationCard';
import SkillMeter from '@/components/SkillMeter';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export default async function HomePage() {
    const siteData = loadSiteData();

    return (
        <div id="top" className="min-h-screen bg-bg">
            <Header siteData={siteData} />

            <main id="main" className="container mx-auto px-4 py-8">
                {/* About Section */}
                <section className="py-14">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-heading font-bold text-text mb-6">
                                    {siteData.about.heading}
                                </h1>
                                <div className="space-y-4 text-lg text-muted leading-relaxed">
                                    {siteData.about.paragraphs.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    <Link
                                        href={siteData.about.cta.href}
                                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-green)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                                    >
                                        {siteData.about.cta.label}
                                    </Link>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src={siteData.site.avatar}
                                    alt={siteData.site.name}
                                    width={300}
                                    height={300}
                                    className="rounded-2xl shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Section */}
                <section className="py-14">
                    <SectionHeading>{siteData.featured.label}</SectionHeading>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-surface rounded-2xl p-8 border border-white/5">
                            <h2 className="text-2xl font-heading font-bold text-text mb-6 text-center">
                                {siteData.featured.title}
                            </h2>
                            <YouTubeEmbed
                                youtubeId={siteData.featured.youtubeId}
                                title={siteData.featured.title}
                                className="max-w-3xl mx-auto"
                            />
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-14">
                    <SectionHeading>{siteData.projects.label}</SectionHeading>
                    <div className="space-y-12">
                        {siteData.projects.groups.map((group) => (
                            <div key={group.year}>
                                <h3 className="text-xl font-heading font-semibold text-text mb-6">
                                    {group.year}
                                </h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {group.items.map((project, index) => (
                                        <ProjectCard key={index} project={project} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="py-14">
                    <SectionHeading>{siteData.education.label}</SectionHeading>
                    <div className="max-w-4xl mx-auto">
                        {siteData.education.groups.map((group) => (
                            <div key={group.year}>
                                <h3 className="text-xl font-heading font-semibold text-text mb-6">
                                    {group.year}
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {group.items.map((education, index) => (
                                        <div key={index} className="bg-surface rounded-xl p-6 border border-white/5">
                                            <h4 className="text-lg font-heading font-semibold text-text mb-2">
                                                {education.title}
                                            </h4>
                                            <p className="text-sm text-[var(--accent-purple)] font-medium mb-3">
                                                {education.org}
                                            </p>
                                            <p className="text-sm text-muted leading-relaxed">
                                                {education.summary}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experiences Section */}
                <section id="experiences" className="py-14">
                    <SectionHeading>{siteData.experiences.label}</SectionHeading>
                    <div className="space-y-12">
                        {siteData.experiences.groups.map((group) => (
                            <div key={group.year}>
                                <h3 className="text-xl font-heading font-semibold text-text mb-6">
                                    {group.year}
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {group.items.map((experience, index) => (
                                        <ExperienceItem key={index} experience={experience} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Publications Section */}
                <section id="publications" className="py-14">
                    <SectionHeading>{siteData.publications.label}</SectionHeading>
                    <div className="max-w-4xl mx-auto">
                        {siteData.publications.groups.map((group) => (
                            <div key={group.year}>
                                <h3 className="text-xl font-heading font-semibold text-text mb-6">
                                    {group.year}
                                </h3>
                                <div className="space-y-6">
                                    {group.items.map((publication, index) => (
                                        <PublicationCard key={index} publication={publication} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-14">
                    <SectionHeading>{siteData.skills.legend[0]?.label || 'SKILLS'}</SectionHeading>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {siteData.skills.categories.map((category, categoryIndex) => (
                                <div key={categoryIndex} className="bg-surface rounded-xl p-6 border border-white/5">
                                    <h3 className="text-lg font-heading font-semibold text-text mb-4">
                                        {category.name}
                                    </h3>

                                    {category.items && (
                                        <div className="space-y-3">
                                            {category.items.map((skill, skillIndex) => (
                                                <SkillMeter
                                                    key={skillIndex}
                                                    skill={skill}
                                                    legend={siteData.skills.legend}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    {category.groups && (
                                        <div className="space-y-6">
                                            {category.groups.map((group, groupIndex) => (
                                                <div key={groupIndex}>
                                                    <h4 className="text-sm font-medium text-muted mb-3">
                                                        {group.name}
                                                    </h4>
                                                    <div className="space-y-3">
                                                        {group.items.map((skill, skillIndex) => (
                                                            <SkillMeter
                                                                key={skillIndex}
                                                                skill={skill}
                                                                legend={siteData.skills.legend}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Skills Legend */}
                        <div className="mt-8 bg-surface rounded-xl p-6 border border-white/5">
                            <h3 className="text-lg font-heading font-semibold text-text mb-4">
                                Skill Levels
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {siteData.skills.legend.map((legend, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <span className="text-sm font-mono">{legend.bar}</span>
                                        <span className="text-sm text-muted">{legend.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-14">
                    <SectionHeading>{siteData.contact.label}</SectionHeading>
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-surface rounded-2xl p-8 border border-white/5">
                            <h2 className="text-2xl font-heading font-bold text-text mb-6">
                                Let's Connect!
                            </h2>
                            <p className="text-muted mb-8">
                                I'm always open to new opportunities and collaborations.
                                Feel free to reach out if you'd like to work together.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                {siteData.contact.actions.map((action, index) => (
                                    <Link
                                        key={index}
                                        href={action.href}
                                        target={action.external ? '_blank' : undefined}
                                        rel={action.external ? 'noopener noreferrer' : undefined}
                                        className="px-6 py-3 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-green)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                                    >
                                        {action.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 py-8">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-muted text-sm">
                        © 2024 Kenan Firmansyah. Built with Next.js, TypeScript, and Tailwind CSS.
                    </p>
                </div>
            </footer>
        </div>
    );
}