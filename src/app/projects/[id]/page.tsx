import { projects } from '@/data/projects';
import styles from './ProjectDetail.module.css';
import FadeIn from '@/components/ui/FadeIn';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className={styles.container}>
            <FadeIn>
                <div className={styles.hero}>
                    <h1 className={styles.title}>{project.title}</h1>
                    <p className={styles.subtitle}>{project.subtitle}</p>
                    <div className={styles.tags}>
                        {project.tags.map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>

                    {project.links && (
                        <div className={styles.links}>
                            {project.links.demo && (
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                                    Live Demo ↗
                                </a>
                            )}
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.linkButtonSecondary}>
                                    GitHub
                                </a>
                            )}
                        </div>
                    )}

                    {project.content.intro && <p className={styles.intro}>{project.content.intro}</p>}

                    {project.content.images?.demo && (
                        <div className={styles.imageWrapper}>
                            <div className={styles.demoImageContainer}>
                                <Image
                                    src={project.content.images.demo}
                                    alt={`${project.title} Demo`}
                                    fill
                                    className={styles.projectImage}
                                    priority
                                />
                            </div>
                            <p className={styles.caption}>Service Demo</p>
                        </div>
                    )}
                </div>

                <div className={styles.contentGrid}>
                    {/* Problem & Solution Split Section */}
                    <section className={styles.cardSection}>
                        <div className={styles.half}>
                            <h2 className={styles.sectionTitle}>Problem</h2>
                            <h3 className={styles.subTitle}>{project.content.problem.title}</h3>
                            <p className={styles.text}>{project.content.problem.desc}</p>
                        </div>
                        <div className={styles.half}>
                            <h2 className={styles.sectionTitle}>Solution</h2>
                            <h3 className={styles.subTitle}>{project.content.solution.title}</h3>
                            <p className={styles.text}>{project.content.solution.desc}</p>
                        </div>
                    </section>

                    {/* Features Grid */}
                    {project.content.features?.length > 0 && (
                        <section>
                            <h2 className={styles.sectionTitle}>Key Features</h2>
                            <div className={styles.featureGrid}>
                                {project.content.features?.map((feature, i) => (
                                    <div key={i} className={styles.featureCard}>
                                        <h4 className={styles.featureTitle}>{feature.title}</h4>
                                        <p className={styles.text} style={{ fontSize: '0.95rem' }}>{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Architecture Section */}
                    {project.content.architecture?.desc && (
                        <section>
                            <h2 className={styles.sectionTitle}>System Architecture</h2>
                            <div className={styles.architectureBox}>
                                {project.content.images?.architecture && (
                                    <div className={styles.archImageContainer}>
                                        <Image
                                            src={project.content.images.architecture}
                                            alt={`${project.title} Architecture`}
                                            fill
                                            className={styles.projectImage}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                )}
                                <p className={styles.text} style={{ marginTop: '20px', textAlign: 'center' }}>{project.content.architecture.desc}</p>
                            </div>
                        </section>
                    )}

                    {/* Troubleshooting Section */}
                    {project.content.troubleshooting?.length && (
                        <section>
                            <h2 className={styles.sectionTitle}>Troubleshooting & Logic</h2>
                            <div className={styles.troubleGrid}>
                                {project.content.troubleshooting.map((t, i) => (
                                    <div key={i} className={styles.troubleItem}>
                                        <span className={styles.troubleLabel}>Issue</span>
                                        <p className={styles.troubleText} style={{ marginBottom: '10px', fontWeight: '500' }}>{t.issue}</p>
                                        <span className={styles.troubleLabel} style={{ color: 'var(--color-accent)' }}>Solution</span>
                                        <p className={styles.troubleText}>{t.solution}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Retrospective Section */}
                    {project.content.retrospective && (
                        <section className={styles.retroSection}>
                            <h2 className={styles.sectionTitle} style={{ color: 'white', borderLeftColor: 'white' }}>Retrospective</h2>
                            <p className={styles.text} style={{ color: 'rgba(255,255,255,0.9)' }}>{project.content.retrospective}</p>
                        </section>
                    )}
                </div>


            </FadeIn>
        </main>
    );
}
