import Image from 'next/image'
import { Layout } from '@/components/layout'

export default function Photos() {
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
    <Layout className="gap-5 pt-0 md:pt-24">
      <Image src="/images/header.png" width="1655" height="931" alt="HIMYNAMESTEE" className="w-full h-full object-cover" data-aos="fade" data-aos-duration="500" />
      <div className="flex flex-wrap justify-between gap-5">
        {images.map((o, index) => (
          <div className="max-w-full w-[calc(50%-10px)] md:w-[calc(25%-15px)]" data-aos="fade" data-aos-delay={(Math.floor(Math.random() * (6 - 2 + 1)) + 2) * 100} data-aos-duration={500} >
            <Image key={index} width="500" height="619" src={o} alt="HIMYNAMESTEE" className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </Layout >
  )
}
