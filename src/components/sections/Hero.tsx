"use client";

import styles from './Hero.module.css';
import dynamic from 'next/dynamic';

const DataCube = dynamic(() => import('@/components/visual/DataCube'), { ssr: false });

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.canvasWrapper}>
                <DataCube />
            </div>
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>
                    TO CLARITY
                </h1>
            </div>
        </section>
    );
}
