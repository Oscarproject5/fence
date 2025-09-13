// Mobile App Components
import AppHeroSection from '@/components/AppHeroSection'
import AppServicesSection from '@/components/AppServicesSection'
import AppTestimonials from '@/components/AppTestimonials'
import AppWhyChooseUs from '@/components/AppWhyChooseUs'
import AppOurProcess from '@/components/AppOurProcess'
import AppQuoteSection from '@/components/AppQuoteSection'
import AppSEOContent from '@/components/AppSEOContent'
import AppFooter from '@/components/AppFooter'
import BottomNav from '@/components/BottomNav'
import AppHeader from '@/components/AppHeader'

// Desktop Components
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectGallery from '@/components/ProjectGallery'
import WhyChooseUs from '@/components/WhyChooseUs'
import OurProcess from '@/components/OurProcess'
import Testimonials from '@/components/Testimonials'
import QuoteSection from '@/components/QuoteSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Mobile Version - Shows on small screens */}
      <div className="min-h-screen bg-gray-50 max-w-[430px] mx-auto relative shadow-2xl md:hidden">
        {/* Phone Frame Effect */}
        <div className="relative bg-white">
          <AppHeader />

          {/* Scrollable Content Area */}
          <main className="pb-20 overflow-y-auto h-[calc(100vh-120px)] scroll-smooth">
            <div id="home" className="app-section">
              <AppHeroSection />
            </div>

            <div id="services" className="app-section">
              <AppServicesSection />
            </div>
            <div id="why-choose" className="app-section">
              <AppWhyChooseUs />
            </div>
            <div id="process" className="app-section">
              <AppOurProcess />
            </div>
            <div id="testimonials" className="app-section">
              <AppTestimonials />
            </div>
            <div id="seo-content" className="app-section">
              <AppSEOContent />
            </div>
            <AppQuoteSection />
            <AppFooter />
          </main>

          <BottomNav />
        </div>
      </div>

      {/* Desktop Version - Shows on larger screens */}
      <div className="hidden md:block min-h-screen bg-white">
        <main>
          <HeroSection />
          <ServicesSection />
          <ProjectGallery />
          <WhyChooseUs />
          <OurProcess />
          <Testimonials />
          <QuoteSection />
          <Footer />
        </main>
      </div>
    </>
  )
}