import Head from 'next/head';

import '../styles/main.css';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Features from '../components/features';
import HowItWorks from '../components/how-it-works';

export default () => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />

            <title>Naao App</title>
        </Head>
        <Hero />
        <Features />
        <HowItWorks />
        <Footer />
    </div>
);