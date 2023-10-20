import { Layout } from '@/components/layout'
import Image from 'next/image'

export default function Film() {
  return (
    <Layout className="pt-0 md:pt-24">
      <div className="max-w-full w-full flex flex-col items-center gap-8" data-aos="fade" data-aos-duration="500">
        <div className="flex gap-2 justify-center my-3">
          <a href="https://music.apple.com/us/artist/tee/1458672658" target="_blank">
            <Image src="/images/music.png" alt="Apple Music" width="611" height="193" className="w-40 max-w-[30vw] cursor-pointer hover:opacity-40 duration-300" />
          </a>
          <a href="https://open.spotify.com/artist/5cdrxr9s52oZCf78xOLa4R?utm_medium=share&utm_source=linktree" target="_blank">
            <Image src="/images/spotify.png" alt="Spotify" width="611" height="193" className="w-40 max-w-[30vw] cursor-pointer hover:opacity-40 duration-300" />
          </a>
          <a href="https://audiomack.com/himynamestee" target="_blank">
            <Image src="/images/audiomack.png" alt="Spotify" width="611" height="193" className="w-40 max-w-[30vw] cursor-pointer hover:opacity-40 duration-300" />
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Rap</h1>
          <iframe className="aspect-video w-[860px] max-w-full" src="https://www.youtube.com/embed/m-AKIJ8ZLsc?si=h8smRWQpKHj2bXQ7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
        <div className="flex flex-col gap-2">
          <h1>RnB</h1>
          <video className="w-[860px] object-cover" src="https://res.cloudinary.com/de7ukpiqr/video/upload/v1697784469/Fake_Mad_-_Tee_z1afcb.mp4" controls />
        </div>
        <a href="https://www.youtube.com/playlist?list=PLSk_5DV97tLR8hf59O0pSVCN93Aly2rJO" target="_blank">
          <button className="px-12 py-3 border border-[#00000010] hover:bg-[#00000010]">View more</button>
        </a>
      </div>
    </Layout >
  )
}
