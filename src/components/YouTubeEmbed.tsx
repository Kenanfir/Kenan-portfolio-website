'use client';

import { useState } from 'react';

interface YouTubeEmbedProps {
    youtubeId: string;
    title: string;
    className?: string;
}

export default function YouTubeEmbed({ youtubeId, title, className = '' }: YouTubeEmbedProps) {
    const [showVideo, setShowVideo] = useState(false);

    const handleVideoClick = () => {
        setShowVideo(true);
    };

    if (showVideo) {
        return (
            <div className={`aspect-video ${className}`}>
                <iframe
                    src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}`}
                    title={title}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        );
    }

    return (
        <div className={`youtube-poster ${className}`} onClick={handleVideoClick}>
            <div className="play-button" />
        </div>
    );
}
