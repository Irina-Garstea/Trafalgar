import type { NextPage } from 'next';
import Head from 'next/head';
import Menu from '../src/components/Navbar';
import Log from '../src/components/Logo';
import Header from '../src/components/Header';
import OurServices from '../src/components/Services';
import FooterPage from '../src/components/Footer';
import LeadingPage from '../src/components/Leading';
import DownloadPage from '../src/components/Download';
import TestimonialsPage from '../src/components/Testimonials';

const Home: NextPage = () => {
  return (
    <section className="id-main">
      <Menu />
      <Log />
      <Header />
      <Head>
        <title>Trafalgar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;900&family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"></link>
      </Head>
      <OurServices />
      <LeadingPage />
      <DownloadPage />
      <TestimonialsPage />
      <FooterPage />
    </section>
  );
};

export default Home;
