import Image from 'next/image'
import { Socials } from '@/components/socials'
import { Layout } from '@/components/layout'

export default function Home() {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
  ]

  return (
    <Layout className="w-[650px] gap-8 pt-0 md:pt-24">
      <Image src="/images/header.png" width="1655" height="931" alt="HIMYNAMESTEE" className="w-full h-full object-cover" />
      <div className="flex flex-wrap justify-between gap-[20px] md:gap-5">
        {images.map((o, index) => (
          <img key={index} src={o} alt="HIMYNAMESTEE" className="object-cover max-w-full w-[calc(50%-10px)] md:w-[calc(25%-15px)]" />
        ))}
      </div>
    </Layout >
  )
}
