"use client";

import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import styles from './Activity.module.css'; // Reusing styles for consistency
import FadeIn from '@/components/ui/FadeIn';

const projectData = [
    {
        title: "V-MATE",
        subtitle: "AI Interaction & Workflow Platform",
        role: "PDF",
        link: "/documents/V-Mate.pdf"
    },
    {
        title: "Match Cut",
        subtitle: "Video Editing Automation Solution",
        role: "PDF",
        link: "/documents/MatchCut.pdf"
    },
    {
        title: "VoC-Radar",
        subtitle: "Customer Voice Analysis Dashboard",
        role: "PDF",
        link: "/documents/VoC-Radar.pdf"
    }
];

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <FadeIn>
                    <SectionHeader title="PROJECTS" />
                    <div className={styles.cardGrid}>
                        {projectData.map((item, index) => (
                            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                                <Card
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    role={item.role}
                                />
                            </a>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
