import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import FeaturedJobs from "../components/FeaturedJobs";
import LatestJobs from "../components/LatestJobs";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedJobs />
      <LatestJobs />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;