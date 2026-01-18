"use client";

import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import styles from './Activity.module.css'; // Reusing styles
import FadeIn from '@/components/ui/FadeIn';

const activityData = [
    {
        title: "Hugging Face",
        subtitle: "Fundamentals of MCP",
        role: "Certificate",
    },
    {
        title: "Hugging Face",
        subtitle: "AI Agents Fundamentals",
        role: "Certificate",
    },
    {
        title: "두나무",
        subtitle: "업비트×아발란체 AMA 참가",
        role: "Conference",
    },
    {
        title: "한국사능력검정시험 2급",
        subtitle: "National Institute of Korean History",
        role: "Certification",
    },
    {
        title: "2종보통운전면허",
        subtitle: "Driver's License",
        role: "License",
    }
];

export default function Certificate() {
    return (
        <section id="certificate" className={styles.section}>
            <div className="container">
                <FadeIn delay={0.2}>
                    <SectionHeader title="CERTIFICATE" />
                    <div className={styles.cardGrid}>
                        {activityData.map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                role={item.role}
                            />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
