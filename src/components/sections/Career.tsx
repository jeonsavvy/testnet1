import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import styles from './Career.module.css';

const careerData = [
    {
        company: "쿠팡 주식회사",
        period: "2025.04 ~ 2025.07",
        role: "Catalog Operation",
        description: [
            "사내 데이터 툴과 엑셀을 활용하여 일 400+ SKU 데이터 무결성 검증",
            "예외 케이스 패턴화를 통해 처리 효율 증대"
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
