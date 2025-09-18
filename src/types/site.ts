export interface SiteData {
    site: {
        name: string;
        tagline: string;
        themeColor: string;
        resumeUrl: string;
        avatar: string;
    };
    about: {
        heading: string;
        paragraphs: string[];
        cta: {
            label: string;
            href: string;
        };
    };
    featured: {
        label: string;
        youtubeId: string;
        title: string;
    };
    projects: {
        label: string;
        groups: ProjectGroup[];
    };
    experiences: {
        label: string;
        groups: ExperienceGroup[];
    };
    education: {
        label: string;
        groups: EducationGroup[];
    };
    publications: {
        label: string;
        groups: PublicationGroup[];
    };
    skills: {
        legend: SkillLegend[];
        categories: SkillCategory[];
    };
    contact: {
        label: string;
        actions: ContactAction[];
    };
}

export interface ProjectGroup {
    year: string;
    items: ProjectItem[];
}

export interface ProjectItem {
    title: string;
    role: string;
    meta: {
        team: number;
        time: string;
        tech: string;
    };
    summary: string;
    link?: string;
    youtubeId?: string;
}

export interface ExperienceGroup {
    year: string;
    items: ExperienceItem[];
}

export interface ExperienceItem {
    org: string;
    title: string;
    summary: string;
}

export interface EducationGroup {
    year: string;
    items: EducationItem[];
}

export interface EducationItem {
    org: string;
    title: string;
    summary: string;
}

export interface PublicationGroup {
    year: string;
    items: PublicationItem[];
}

export interface PublicationItem {
    title: string;
    venue: string;
    date: string;
    link: string;
    summary: string;
}

export interface SkillLegend {
    label: string;
    bar: string;
}

export interface SkillCategory {
    name: string;
    items?: SkillItem[];
    groups?: SkillGroup[];
}

export interface SkillGroup {
    name: string;
    items: SkillItem[];
}

export interface SkillItem {
    name: string;
    level: string;
}

export interface ContactAction {
    label: string;
    href: string;
    external: boolean;
}