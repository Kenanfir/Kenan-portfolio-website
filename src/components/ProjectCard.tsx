'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/types/site';

interface ProjectCardProps {
    project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [showVideo, setShowVideo] = useState(false);

    const handleVideoClick = () => {
        setShowVideo(true);
    };

    return (
        <div className="card-hover rounded-2xl overflow-hidden bg-surface border border-white/5 shadow-lg">
            {project.youtubeId && (
                <div className="relative">
                    {!showVideo ? (
                        <div className="youtube-poster" onClick={handleVideoClick}>
                            <div className="play-button" />
                        </div>
                    ) : (
                        <div className="aspect-video">
                            <iframe
                                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}`}
                                title={project.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    )}
                </div>
            )}

            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <div>
                        <h3 className="text-lg font-heading font-semibold text-text mb-1">
                            {project.link ? (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[var(--accent-purple)] transition-colors"
                                >
                                    {project.title}
                                </Link>
                            ) : (
                                project.title
                            )}
                        </h3>
                        <p className="text-sm text-muted font-medium">{project.role}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted mb-4">
                    <span className="flex items-center gap-1">
                        👥 {project.meta.team}
                    </span>
                    <span className="flex items-center gap-1">
                        🕒 {project.meta.time}
                    </span>
                    <span className="flex items-center gap-1">
                        🛠️ {project.meta.tech}
                    </span>
                </div>

                <p className="text-sm text-muted leading-relaxed">
                    {project.summary}
                </p>
            </div>
        </div>
    );
}
