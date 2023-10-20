"use client"
import { Layout } from '@/components/layout'

export default function Film() {
  return (
    <Layout className="pt-0 md:pt-24">
      <div className="w-[860px] max-w-full flex flex-col gap-8" data-aos="fade" data-aos-duration="500">
        <div className="flex flex-col gap-2">
          <h1>Acting Reel 1</h1>
          <video className="w-full h-full object-cover" src="https://res.cloudinary.com/de7ukpiqr/video/upload/v1697781822/Tamera%20Kissen%20Acting%20Reel%202.mov" controls />
        </div>
        <div className="flex flex-col gap-2">
          <h1>{`You're Not Alone Horror Film`}</h1>
          <video className="w-full h-full object-fill aspect-[18/8]" src="https://res.cloudinary.com/de7ukpiqr/video/upload/v1697783727/You%27re%20Not%20Alone.mp4" controls />
        </div>
        <div className="flex flex-col gap-2">
          <h1>Acting Reel 2</h1>
          <video className="w-full h-full object-cover" src="https://res.cloudinary.com/de7ukpiqr/video/upload/v1697781822/Tamera%20Kissen%20Acting%20Reel%201.mov" controls poster="/images/video.png" />
        </div>
        <div className="flex flex-col gap-2">
          <h1>Saints Row Live Action Launch Trailer</h1>
          <video className="w-full h-full object-cover" src="https://res.cloudinary.com/de7ukpiqr/video/upload/v1697781816/Saints%20Row%20Live%20Action%20Launch%20Trailer.mov" controls />
        </div>
      </div>
    </Layout >
  )
}
