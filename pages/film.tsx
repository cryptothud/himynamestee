import { Layout } from '@/components/layout'

export default function Film() {
  return (
    <Layout className="pt-0 md:pt-24">
      <div className="max-w-full w-full" data-aos="fade" data-aos-duration="500">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe src="https://player.vimeo.com/video/295473128?h=bb633240d2" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }} width="1700" height="956" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
        </div>
      </div>
    </Layout >
  )
}
