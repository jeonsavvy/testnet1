import Link from 'next/link';
import styles from './Header.module.css';

const navItems = [
    { label: 'Profile', href: '#profile' },
    { label: 'Capability', href: '#capability' },
    { label: 'Others', href: '#others' },
    { label: 'Projects', href: '#projects' },
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
