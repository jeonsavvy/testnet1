import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import styles from './Profile.module.css';

const profileData = [
    {
        title: "EDUCATION",
        subtitle: "2019.03 ~ 2026.02 졸업 예정",
        role: "충남대학교 경영학부",
    }
];

import FadeIn from '@/components/ui/FadeIn';



export default function Profile() {
    return (
        <section id="profile" className={styles.section}>
            <div className="container">
                <FadeIn>
                    <SectionHeader title="Profile" />

                    <div className={styles.summary} style={{ marginBottom: '40px', lineHeight: '1.8' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'var(--color-primary)' }}>SUMMARY</h3>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--color-text-secondary)' }}>
                            <li><strong>AI 및 자동화 툴 활용:</strong> 업무 보조 도구를 구현하거나 프로세스 개선 가능</li>
                            <li><strong>실무 경험:</strong> 이커머스 데이터 관리 및 가이드라인 준수 업무를 수행</li>
                        </ul>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.cardGrid}>
                            {profileData.map((item, index) => (
                                <Card
                                    key={`edu-${index}`}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    role={item.role}
                                />
                            ))}
                            <Card title="WORK EXPERIENCE">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div style={{
                                        fontSize: '1rem',
                                        marginBottom: '6px',
                                        lineHeight: '1.5',
                                        color: 'var(--color-text-primary)'
                                    }}>
                                        <strong>쿠팡 주식회사 | Catalog Operation | Associate |</strong> <em style={{ color: 'var(--color-text-secondary)' }}>2025.04 – 2025.07</em>
                                    </div>
                                    <ul style={{
                                        listStyleType: 'disc',
                                        paddingLeft: '20px',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: '1.6',
                                        fontSize: '0.95rem'
                                    }}>
                                        <li style={{ marginBottom: '4px' }}>
                                            <strong>데이터 정합성 확보:</strong> Raw Data를 분석하여, 일 평균 <strong>400건</strong> 이상의 상품 정보를 표준화된 기준으로 정제
                                        </li>
                                        <li>
                                            <strong>이슈 리포팅:</strong> 업무 중 발견된 시스템 오류나 SOP 미비 사항을 식별 및 공유하여 운영 프로세스 효율 제고
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
