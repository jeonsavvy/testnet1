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
                    <div className={styles.content}>
                        <div className={styles.cardGrid}>
                            {profileData.map((item, index) => (
                                <Card
                                    key={index}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    role={item.role}
                                />
                            ))}
                        </div>
                        <div className={styles.additionalInfo} style={{ marginTop: '20px', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                            <p>Born in 1999</p>
                            <p>Military Service: Army Sergeant (2020)</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
