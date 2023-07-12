import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import DazkoHero from '../components/Theme/DazkoHero';
import DazkoAbout from '../components/Theme/DazkoAbout';
import DazkoJoinUs from '../components/Theme/DazkoJoinUs';
import DazkoWorkOut from '../components/Theme/DazkoWorkOut';
import DazkoPricing from '../components/Theme/DazkoPricing';
import DazkoTrainer from '../components/Theme/DazkoTrainer';
import DazkoTestimonial from '../components/Theme/DazkoTestimonial';
import DazkoForm from '../components/Theme/DazkoForm';
import DazkoFooter from '../components/Theme/DazkoFooter';
import DazkoStories from '../components/Theme/DazkoStories';


import styles from './index.module.css';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main>
        <div>
          <DazkoHero />
          <DazkoAbout />
          <DazkoJoinUs />
          <DazkoWorkOut />
          <DazkoPricing />
          <DazkoStories />
          <DazkoTrainer />
          <DazkoTestimonial />
          <DazkoForm />
          <DazkoFooter />

        </div>
      </main>
    </Layout>
  );
}
