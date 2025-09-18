interface SectionHeadingProps {
    children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <div className="section-divider">
            <span className="section-divider-label">{children}</span>
        </div>
    );
}
