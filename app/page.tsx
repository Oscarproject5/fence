import AppHeroSection from '@/components/AppHeroSection'
import AppServicesSection from '@/components/AppServicesSection'
import AppGallery from '@/components/AppGallery'
import AppTestimonials from '@/components/AppTestimonials'
import AppWhyChooseUs from '@/components/AppWhyChooseUs'
import AppOurProcess from '@/components/AppOurProcess'
import AppQuoteSection from '@/components/AppQuoteSection'
import AppFooter from '@/components/AppFooter'
import BottomNav from '@/components/BottomNav'
import AppHeader from '@/components/AppHeader'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 max-w-[430px] mx-auto relative shadow-2xl">
      {/* Phone Frame Effect */}
      <div className="relative bg-white">
        <AppHeader />
        
        {/* Scrollable Content Area */}
        <main className="pb-20 overflow-y-auto h-[calc(100vh-120px)] md:h-auto scroll-smooth">
          <div id="home" className="app-section">
            <AppHeroSection />
          </div>

          <div id="services" className="app-section">
            <AppServicesSection />
          </div>
          <div id="gallery" className="app-section">
            <AppGallery />
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
          <AppQuoteSection />
          <AppFooter />
        </main>
        
        <BottomNav />
      </div>
    </div>
  )
}