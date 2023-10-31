"use client"
import { Layout } from '@/components/layout'

export default function Film() {
  return (
    <Layout className="pt-0 md:pt-24">
      <div className="w-[860px] max-w-full flex flex-col gap-8" data-aos="fade" data-aos-duration="500">
        <div className="flex flex-col gap-2">
          <h1>2023 Reel</h1>
          <video className="w-full h-full object-fill aspect-[16/8]" src="https://res.cloudinary.com/de7ukpiqr/video/upload/v1698718439/MOV_7148_auxqvx.mp4" controls poster="/images/2023reel.png" />
        </div>
        <div className="flex flex-col gap-2">
          <h1>2022 Reel</h1>
          <video className="w-full h-full object-cover" src="https://res.cloudinary.com/de7ukpiqr/video/upload/v1697781822/Tamera%20Kissen%20Acting%20Reel%202.mov" controls poster="/images/actingreel1.png" />
        </div>
        <div className="flex flex-col gap-2">
          <h1>{`You're Not Alone Horror Film`}</h1>
          <video className="w-full h-full object-fill aspect-[18/8]" src="https://res.cloudinary.com/de7ukpiqr/video/upload/v1697783727/You%27re%20Not%20Alone.mp4" controls poster="/images/horror.png" />
        </div>
        <div className="flex flex-col gap-2">
          <h1>2021 Reel</h1>
          <video className="w-full h-full object-cover" src="https://res.cloudinary.com/de7ukpiqr/video/upload/v1697781822/Tamera%20Kissen%20Acting%20Reel%201.mov" controls poster="/images/actingreel2.png" />
        </div>
        <div className="flex flex-col gap-2">
          <h1>Saints Row Live Action Launch Trailer</h1>
          <video className="w-full h-full object-cover" src="https://res.cloudinary.com/de7ukpiqr/video/upload/v1697781816/Saints%20Row%20Live%20Action%20Launch%20Trailer.mov" controls poster="/images/saintsrow.png" />
        </div>
      </div>
    </Layout >
  )
}
