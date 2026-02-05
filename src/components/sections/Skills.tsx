"use client";

import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import styles from './Skills.module.css';
import FadeIn from '@/components/ui/FadeIn';

const skillsData = [
    {
        category: "AI & Production",
        items: ["Cursor", "Antigravity", "Stable Diffusion", "Figma Make"]
    },
    {
        category: "Deployment & Database",
        items: ["Vercel", "Netlify", "Supabase", "Docker", "Cloudflare"]
    },
    {
        category: "Automation",
        items: ["n8n", "Telegram", "Discord", "Slack"]
    },
    {
        category: "Collaboration",
        items: ["Notion", "Google Workspace", "MS Office"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <div className="container">
                <FadeIn delay={0.2}>
                    <SectionHeader title="SKILLS" />
                    <div className={styles.grid}>
                        {skillsData.map((group, index) => (
                            <Card key={index} title={group.category}>
                                <div className={styles.tagContainer}>
                                    {group.items.map((item, i) => (
                                        <span key={i} className={styles.tag}>{item}</span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
