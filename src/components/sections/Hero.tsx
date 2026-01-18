"use client";

import styles from './Hero.module.css';
import dynamic from 'next/dynamic';

const DataCube = dynamic(() => import('@/components/visual/DataCube'), { ssr: false });

import FadeIn from '@/components/ui/FadeIn';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.canvasWrapper}>
                <DataCube />
            </div>
            <div className={`container ${styles.content}`}>
                <FadeIn delay={0.5}>
                    <h1 className={styles.title}>
                        CLARITY
                    </h1>
                </FadeIn>
            </div>
        </section>
    );
}
