import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.info}>
                    <div className={styles.row}>
                        <span className={styles.label}>Address</span>
                        <span className={styles.value}>서울 성동구 성수동2가</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Email</span>
                        <a href="mailto:jeonsavvy@gmail.com" className={styles.value}>
                            jeonsavvy@gmail.com
                        </a>
                    </div>
                </div>
                <div className={styles.bottomArea}>
                    <div className={styles.copyright}>
                        © {new Date().getFullYear()} JEON CHAN HYUK. All Rights Reserved.
                    </div>
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
                </div>
            </div>
        </footer>
    );
}
