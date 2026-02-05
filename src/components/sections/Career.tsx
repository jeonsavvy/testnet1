import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import styles from './Career.module.css';

const careerData = [
    {
        company: "쿠팡 주식회사",
        period: "2025.04 ~ 2025.07",
        role: "Catalog Operation - Associate",
        description: [
            "데이터 정합성 확보: Raw Data를 분석하여, 일 평균 400건 이상의 상품 정보를 표준화된 기준으로 정제",
            "이슈 리포팅: 업무 중 발견된 시스템 오류나 SOP 미비 사항을 식별 및 공유하여 운영 프로세스 효율 제고"
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
