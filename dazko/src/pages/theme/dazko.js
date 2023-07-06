import React from 'react';
import Layout from '@theme/Layout';
import styles from '../theme/dazko.module.css'
import DazkoHero from '../../components/Theme/DazkoHero';
import DazkoAbout from '../../components/Theme/DazkoAbout';
import DazkoJoinUs from '../../components/Theme/DazkoJoinUs';
import DazkoWorkOut from '../../components/Theme/DazkoWorkOut';
import DazkoPricing from '../../components/Theme/DazkoPricing';
import DazkoTrainer from '../../components/Theme/DazkoTrainer';
import DazkoTestimonial from '../../components/Theme/DazkoTestimonial';
import DazkoForm from '../../components/Theme/DazkoForm';
import DazkoFooter from '../../components/Theme/DazkoFooter';
import DazkoStories from '../../components/Theme/DazkoStories';

export default function Hello() {
    return (
        <Layout title="Hello" description="Hello React Page">
            <div
            >
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
        </Layout>
    );
}