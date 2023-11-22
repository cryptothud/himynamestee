import { ImageWithProxyFallback } from '@/components/helpers'
import { Layout } from '@/components/layout'
import Image from 'next/image'

export default function Film() {
  return (
    <>
      <ImageWithProxyFallback src="/images/19.jpg" alt="Cameo" width="1920" height="1080" className="fixed top-0 left-0 w-screen h-screen object-cover pointer-events-none opacity-30" />
      <Layout className="pt-0 md:pt-24">
        <div className="max-w-full w-full flex flex-col items-center justify-center gap-8 h-[calc(100vh-110px)] md:h-[calc(100vh-302px)]" data-aos="fade" data-aos-duration="500">
          <div className="flex flex-col gap-10 justify-center items-center my-3">
            <ImageWithProxyFallback src="/images/cameo.png" alt="Cameo" width="500" height="" className="w-[500px] max-w-[50vw]" />
            <div className="hidden text-lg lg:text-xl font-bold tracking-[0.25em] uppercase md:flex flex-col gap-1 justify-center items-center text-center">
              <h1>{`Special Requests  •  Personalized Videos  •  Questions & Advice`}</h1>
              <h1>{`Shoutouts  •  Text Me  •  Talk to Me`}</h1>
            </div>
            <ol className="md:hidden text-md font-bold tracking-[0.25em] uppercase flex flex-col gap-1 justify-center items-center text-center">
              <li>{`Special Requests`}</li>
              <li>{`Personalized Videos`}</li>
              <li>{`Questions & Advice`}</li>
              <li>{`Shoutouts`}</li>
              <li>{`Text Me`}</li>
              <li>{`Talk to Me`}</li>
            </ol>
            <a href="https://www.youtube.com/playlist?list=PLSk_5DV97tLR8hf59O0pSVCN93Aly2rJO" target="_blank">
              <button className="px-12 sm:px-16 py-3 rounded-2xl bg-[#F8005B] hover:bg-[#F8005B99] text-white font-semibold tracking-[0.25em] uppercase">Get Yours Now</button>
            </a>
          </div>
        </div>
      </Layout>
    </>
  )
}
