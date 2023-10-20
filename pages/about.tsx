import Image from 'next/image'
import { Layout } from '@/components/layout'

export default function About() {
  return (
    <Layout className="w-[400px] md:w-[750px] pt-0 md:pt-24">
      {/* <Image src="/images/about.png" width="650" height="650" alt="HIMYNAMESTEE" className="object-cover max-w-full" data-aos="fade" data-aos-duration="500" />
      <Image src="/images/HMNT.gif" width="922" height="285" alt="HIMYNAMESTEE" className="object-cover max-w-full" />
      <div className="flex flex-col gap-4">
        <p className="text-[16.5px] font-thin tracking-wide leading-[1.8em]">{`In order to succeed in the entertainment industry it's important to be multi-talented both on and off screen. Bold, vibrant, striking and beautiful, Tee has proven just that. As a comedian, artist, actress, influencer, model, and entrepreneur Tee is a multiple threat.`}</p>
        <p className="text-[16.5px] font-thin tracking-wide leading-[1.8em]">{`Widely known for comical skits on Instagram, Tee continues to amaze with unforgettable performances, stand-up comedy, and a fierce commitment to master her craft. Her infectious personality and presence coupled with an eye-catching look, has secured her top roles in commercial modeling campaigns and TV shows. Her latest role to date depicts her vivacious persona as a comedian on MTV's hit show, Wild N' Out, opposite of veteran actor and musician Nick Cannon.`}</p>
        <p className="text-[16.5px] font-thin tracking-wide leading-[1.8em]">{`Furthermore, Tee has made appearances on major networks. She was appearing alongside Morris Chestnut as "Kitty" on the Fox's Rosewood, and also the Real Husbands of Hollywood. In addition, Tee has also been the online host for BET Music as well as secured the leads as "Lupe" for All Def Digital series "WorldStar HipHop HeadQuarters".`}</p>
        <p className="text-[16.5px] font-thin tracking-wide leading-[1.8em]">{`In addition to her talents on-screen, she has secured major commercial campaigns with Ebay, Finish Line, Adidas, Google, Honda and Fiat. The young Los Angeles native, has also most recently joined the CoverGirl family for the brand's 2018 "By the Infinity" campaign.`}</p>
        <p className="text-[16.5px] font-thin tracking-wide leading-[1.8em]">{`As a comedian and socialite in her own right, she has used her creativity to craft comedy skits on Instagram to hit her biggest milestone yet; gaining her 1 million followers in just six months!`}</p>
        <p className="text-[16.5px] font-thin tracking-wide leading-[1.8em]">{`As Himynamestee continues to pave the way for other talented women, she also strives to break through the norms of this industry and fights to succeed by staying "unapologetically herself."`}</p>
      </div> */}
      <Image src="/images/bio.jpeg" width="1275" height="1650" className="max-w-full" alt="Bio" />
    </Layout >
  )
}
