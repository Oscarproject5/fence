import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import ProjectGallery from '@/components/ProjectGallery'
import Testimonials from '@/components/Testimonials'
import QuoteSection from '@/components/QuoteSection'
import SEOContent from '@/components/SEOContent'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectGallery />
      <Testimonials />
      <SEOContent />
      <QuoteSection />
      <Footer />
    </main>
  )
}