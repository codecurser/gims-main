import Navbar from "@/components/Navbar";
import ImageCarousel from "@/components/ImageCarousel";
import Mission from "@/components/Mission";
import Facilities from "@/components/Facilities";
import Startups from "@/components/Startups";
import Testimonial from "@/components/Testimonial";
import Collaborate from "@/components/Collaborate";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles count={50} />
      <Navbar />
      <ImageCarousel />
      <Mission />
      <Facilities />
      <Startups />
      <Testimonial />
      <Collaborate />
      <Footer />
    </div>
  );
};

export default Index;
