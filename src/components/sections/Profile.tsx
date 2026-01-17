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

export default function Profile() {
    return (
        <section id="profile" className={styles.section}>
            <div className="container">
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
                </div>
            </div>
        </section>
    );
}
