import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.info}>
                    <div className={styles.row}>
                        <span className={styles.label}>Email</span>
                        <a href="mailto:jeonsavvy@gmail.com" className={styles.value}>
                            jeonsavvy@gmail.com
                        </a>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Phone</span>
                        <a href="tel:01064312951" className={styles.value}>
                            010-6431-2951
                        </a>
                    </div>
                </div>
                <div className={styles.bottomArea}>
                    <div className={styles.copyright}>
                        <p className={styles.copyright}>Copyright &copy; 2026 JEON CHAN HYUK</p>
                    </div>
                    <div className={styles.socialGroup} style={{ display: 'flex', gap: '8px' }}>
                        <a
                            href="https://www.instagram.com/jeonchanhyuk_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a
                            href="https://x.com/jeonchanhyuk_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
