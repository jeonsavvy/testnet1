import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import styles from './Career.module.css';

const careerData = [
    {
        company: "쿠팡 주식회사",
        period: "2025.04 ~ 2025.07",
        role: "Catalog Operation",
        description: [
            "일 평균 400+ SKU 정합성 검증 수행",
            "예외 케이스를 분류·처리해 카탈로그 무결성 유지"
        ]
    }
];

export default function Career() {
    return (
        <section id="career" className={styles.section}>
            <div className="container">
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
            </div>
        </section>
    );
}
