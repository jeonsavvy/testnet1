"use client";

import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import styles from './Activity.module.css'; // Reusing Activity styles as requested for similar layout
import FadeIn from '@/components/ui/FadeIn';

const othersData = [
    {
        title: "대한민국 육군",
        subtitle: "2019.03 ~ 2020.10",
        role: "육군 병장 만기 전역",
    },
    {
        title: "Hugging Face",
        subtitle: "Fundamentals of AI Agents & MCP 수료",
        role: "Activity",
    },
    {
        title: "두나무",
        subtitle: "AVAX AMA 참가, UDC 2025 참가, 업비트 투자 메이저리그 참가",
        role: "Activity",
    },
    {
        title: "자격증",
        subtitle: "한국사능력검정시험 2급, 2종보통 운전면허",
        role: "Certificate",
    }
];

export default function Others() {
    return (
        <section id="others" className={styles.section}>
            <div className="container">
                <FadeIn delay={0.2}>
                    <SectionHeader title="OTHERS" />
                    <div className={styles.cardGrid}>
                        {othersData.map((item, index) => (
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
