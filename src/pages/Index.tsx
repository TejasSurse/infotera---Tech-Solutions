import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import USPSection from "@/components/home/USPSection";
import ServicesSection from "@/components/home/ServicesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProductsSection from "@/components/home/ProductsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <USPSection />
      <ServicesSection />
      <IndustriesSection />
      <ProductsSection />
      <WhyChooseUsSection />
    </Layout>
  );
};

export default Index;
