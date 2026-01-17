import styles from './SectionHeader.module.css';

interface Props {
    title: string;
    description?: string;
}

export default function SectionHeader({ title, description }: Props) {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
            <div className={styles.line} />
        </div>
    );
}
