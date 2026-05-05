import Header from '../../reusable_sections/Header'
import Footer from '../../reusable_sections/Footer'
import Hero from './sections/Hero'
import PerformanceMetrics from './sections/PerformanceMetrics'
import OurServices from './sections/OurServices'
import Process from './sections/Process'
import CustomerFeedback from './sections/CustomerFeedback'
import FrequentlyAskedQuestions from './sections/FrequentlyAskedQuestions'
import GetStartedCta from './sections/GetStartedCta'

export default function HomePage2() {
  return (
    <div style={{ background: '#F5F2EA' }}>
      <Header />
      <Hero />
      <PerformanceMetrics />
      <OurServices />
      <Process />
      <CustomerFeedback />
      <FrequentlyAskedQuestions />
      <GetStartedCta />
      <Footer />
    </div>
  )
}
