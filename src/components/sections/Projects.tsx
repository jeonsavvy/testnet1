import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import styles from './Activity.module.css'; // Reusing styles for consistency
import FadeIn from '@/components/ui/FadeIn';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <FadeIn>
                    <SectionHeader title="PROJECTS" />
                    <div className={styles.cardGrid}>
                        {projects.map((item) => (
                            <Link key={item.id} href={`/projects/${item.id}`} style={{ display: 'block' }}>
                                <Card
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    role={item.role}
                                    cta="More Details ↗"
                                />
                            </Link>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
