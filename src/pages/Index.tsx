import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import ROICalculator from '@/components/ROICalculator';
import CTA from '@/components/CTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Testimonials />
      <ROICalculator />
      <Pricing />
      <CTA />
    </Layout>
  );
};

export default Index;
