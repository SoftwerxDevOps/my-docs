import React from 'react';

import Link from '@docusaurus/Link';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';

import styles from './index.module.css';
 
const features = [

  {

    icon: '🛡️',

    title: 'Threat Detection & Response',

    description:

      'Criminals operate 24x7 — and so do we. Our security operations provide continuous monitoring to detect and respond to threats before they cause damage.',

  },

  {

    icon: '☁️',

    title: 'Microsoft Security Specialists',

    description:

      'As a leading Microsoft Security Practice, we help mid-market organisations get the most out of Microsoft Sentinel, Defender, and the full Microsoft security stack.',

  },

  {

    icon: '📋',

    title: 'Product Documentation',

    description:

      'Everything you need to understand our products, onboarding processes, and service expectations — all in one place.',

  },

];
 
function HomepageHeader() {

  const {siteConfig} = useDocusaurusContext();

  return (
<header className={styles.heroBanner}>
<div className={styles.heroInner}>
<h1 className={styles.heroTitle}>{siteConfig.title}</h1>
<p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
<Link className={styles.heroButton} to="/docs/secure365">

          View Documentation
</Link>
</div>
</header>

  );

}
 
function FeatureCard({icon, title, description}) {

  return (
<div className={styles.card}>
<div className={styles.cardIcon}>{icon}</div>
<h3 className={styles.cardTitle}>{title}</h3>
<p className={styles.cardDescription}>{description}</p>
</div>

  );

}
 
export default function Home() {

  return (
<Layout description="Softwerx product documentation and guides">
<HomepageHeader />
<main>
<section className={styles.featuresSection}>
<div className={styles.featuresGrid}>

            {features.map((f, i) => (
<FeatureCard key={i} {...f} />

            ))}
</div>
</section>
</main>
</Layout>

  );

}
 
