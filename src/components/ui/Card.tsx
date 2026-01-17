import styles from './Card.module.css';

interface Props {
    title: string;
    subtitle?: string;
    role?: string;
    description?: string[];
    children?: React.ReactNode;
}

export default function Card({ title, subtitle, role, description, children }: Props) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h3 className={styles.title}>{title}</h3>
                {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            </div>
            <div className={styles.cardBody}>
                {role && <p className={styles.role}>{role}</p>}
                {description && (
                    <ul className={styles.descList}>
                        {description.map((desc, i) => (
                            <li key={i} className={styles.descItem}>{desc}</li>
                        ))}
                    </ul>
                )}
                {children}
            </div>
        </div>
    );
}
