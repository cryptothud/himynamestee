import Image from 'next/image'
import { Socials } from '@/components/socials'
import { Layout } from '@/components/layout'
import { ImageWithProxyFallback } from '@/components/helpers'

export default function Home() {
  return (
    <Layout>
      <div className="h-[calc(100vh-112px)] w-screen">
        <ImageWithProxyFallback src="/images/header.png" width="1655" height="931" alt="HIMYNAMESTEE" className="w-full h-full object-cover" />
      </div>
    </Layout>
  )
}
