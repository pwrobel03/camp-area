import Hero from '@/components/Hero'
import Image from 'next/image'
import Camp from '@/components/Camp'
import Guide from '@/components/Guide'
import Features from '@/components/Features'
import Cta from '@/components/Cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <Cta />
    </>
  )
}
