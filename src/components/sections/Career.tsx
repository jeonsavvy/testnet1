import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import styles from './Career.module.css';

const careerData = [
    {
        company: "쿠팡 주식회사",
        period: "2025.04 ~ 2025.07",
        role: "Catalog Operation",
        description: [
            "사내 데이터 관리 시스템 기반의 일 400건 이상 상품 DB 검수를 통해 카탈로그 품질 데이터 정합성 유지"
        ]
    }
];

import FadeIn from '@/components/ui/FadeIn';

export default function Career() {
    return (
        <section id="career" className={styles.section}>
            <div className="container">
                <FadeIn>
                    <SectionHeader title="Career" />
                    <div className={styles.grid}>
                        {careerData.map((item, index) => (
                            <Card
                                key={index}
                                title={item.company}
                                subtitle={item.period}
                                role={item.role}
                                description={item.description}
                            />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
