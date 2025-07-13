import AboutSection from "../../components/AboutSection";
import EmailSection from "../../components/EmailSection";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import MyProjectSection from "../../components/MyProjectSection";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full relative ">
      {/* Ocean Abyss Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
        }}
      />

      {/* Your Content/Components */}
      <main className="flex min-h-screen flex-col bg-transparent relative z-10">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <div id="about">
            <AboutSection />
          </div>
          <div id="project">
            <MyProjectSection />
          </div>
          <div id="contact">
            <EmailSection />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
