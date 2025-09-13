import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import OurProcess from '@/components/OurProcess'
import Testimonials from '@/components/Testimonials'
import QuoteSection from '@/components/QuoteSection'
import SEOContent from '@/components/SEOContent'
import Footer from '@/components/Footer'
import BottomNav from '@/components/BottomNav'

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <div id="home">
          <HeroSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="why-choose">
          <WhyChooseUs />
        </div>
        <div id="process">
          <OurProcess />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <SEOContent />
        <QuoteSection />
        <Footer />
      </main>
      <BottomNav />
    </>
  )
}