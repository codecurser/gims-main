import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Facilities from "@/components/Facilities";
import Startups from "@/components/Startups";
import Testimonial from "@/components/Testimonial";
import Collaborate from "@/components/Collaborate";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
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
