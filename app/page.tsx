'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import ValueProp from '@/components/ValueProp'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import WhoItsFor from '@/components/WhoItsFor'
import Pricing from '@/components/Pricing'
import CTASection from '@/components/CTASection'
import FAQ from '@/components/FAQ'
import FormModal from '@/components/FormModal'
import Footer from '@/components/Footer'
import { trackEvent } from '@/lib/analytics'

export default function Home() {
  useEffect(() => {
    trackEvent('page_view')
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor) {
        const href = anchor.getAttribute('href')
        if (href && href !== '#') {
          e.preventDefault()
          const targetElement = document.querySelector(href)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Problem />
      <ValueProp />
      <Features />
      <HowItWorks />
      <WhoItsFor />
      <Pricing />
      <CTASection />
      <FAQ />
      <FormModal />
      <Footer />
    </>
  )
}