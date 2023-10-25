import Image from 'next/image'
import { Layout } from '@/components/layout'
import { ImageWithProxyFallback } from '@/components/helpers'
import Zoom from 'react-medium-image-zoom'

export default function Photos() {
  const images = new Array(25).fill(1).map((o, index) => `/images/${index + 1}.jpg`).sort(() => Math.random() - 0.5)

  return (
    <Layout className="gap-5 pt-0 md:pt-24">
      <ImageWithProxyFallback src="/images/header.png" width="1655" height="931" alt="HIMYNAMESTEE" className="w-full h-full object-cover" data-aos="fade" data-aos-duration="500" />
      <div className="flex flex-wrap justify-between gap-5">
        {images.map((o, index) => (
          <div key={"photo" + index} className="max-w-full w-[calc(50%-10px)] md:w-[calc(20%-20px)]" data-aos="fade" data-aos-delay={(Math.floor(Math.random() * (6 - 2 + 1)) + 2) * 100} data-aos-duration={500} >
            <Zoom zoomMargin={10}>
              <ImageWithProxyFallback key={index} width="600" height="800" src={o} alt="HIMYNAMESTEE" className="object-cover w-full h-full" />
            </Zoom>
          </div>
        ))}
      </div>
    </Layout >
  )
}
