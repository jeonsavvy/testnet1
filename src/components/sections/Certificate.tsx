"use client";

import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import styles from './Activity.module.css'; // Reusing styles
import FadeIn from '@/components/ui/FadeIn';

const activityData = [
    {
        title: "Hugging Face",
        subtitle: "Fundamentals of AI Agents & MCP 수료",
        role: "Education",
    },
    {
        title: "두나무",
        subtitle: "AVAX AMA 참가, UDC 2025 참가, 업비트 투자 메이저리그 참가",
        role: "Activity",
    },
    {
        title: "대한민국 육군",
        subtitle: "육군 병장 만기 전역",
        role: "Military",
    },
    {
        title: "자격증",
        subtitle: "한국사능력검정시험 2급, 2종보통 운전면허",
        role: "Certificate",
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
