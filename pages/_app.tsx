import { Navbar } from '@/components/navbar'
import '@/styles/globals.css'
import '@/styles/fonts.css'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import { Socials } from '@/components/socials'
import Head from 'next/head'
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Aos from 'aos'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    Aos.init({
      once: true
    })
  }, [])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="512x512" href="/favicon.ico" />

        {/* Misc. */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="fortmatic-site-verification" content="j93LgcVZk79qcgyo" />

        {/* Primary Meta Tags */}
        <title>{"himynamestee"}</title>
        <meta name="title" content={"himynamestee"} />
        <meta name="description" content={"himynamestee"} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:title" content={"himynamestee"} />
        <meta property="og:description" content={"himynamestee"} />
        <meta property="og:image" content={"https://i.ibb.co/9tST9cG/New-Project-12-1.png"} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="/" />
        <meta property="twitter:title" content={"himynamestee"} />
        <meta property="twitter:description" content={"himynamestee"} />
        <meta property="twitter:image" content={"https://i.ibb.co/9tST9cG/New-Project-12-1.png"} />
      </Head>
      <div className="flex flex-col w-screen min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
        <div className="flex flex-col gap-5 py-32 items-center">
          <h1 className="font-medium text-sm tracking-[0.25em]">FOLLOW HIMYNAMESTEE</h1>
          <Socials size={50} gap={0} color={"#000000"} />
        </div>
      </div>
    </>
  )
}
