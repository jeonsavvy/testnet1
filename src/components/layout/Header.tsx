import Link from 'next/link';
import styles from './Header.module.css';

const navItems = [
    { label: 'Profile', href: '#profile' },
    { label: 'Career', href: '#career' },
    { label: 'Projects', href: '#activity' }, // Mapping 'Projects' to Activity/Highlights for now as per user req
    { label: 'Contact', href: '#footer' },
];

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.logo}>
                    JEON CHAN HYUK
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.label} className={styles.navItem}>
                                <Link href={item.href} className={styles.navLink}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
