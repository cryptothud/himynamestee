import Image from "next/image"
import Link from "next/link"
import { Socials } from "../socials"
import { useRouter } from "next/router"
import Hamburger from "hamburger-react"
import { useState } from "react"

export const Navbar = () => {

    const router = useRouter()
    const [dropdown, setDropdown] = useState(false)

    const links = [
        {
            name: "ABOUT",
            link: "/about"
        },
        {
            name: "PHOTOS",
            link: "/photos"
        },
        {
            name: "MUSIC",
            link: "https://linktr.ee/himynamesteee"
        },
        {
            name: "FILM",
            link: "/film"
        },
        {
            name: "STORE",
            link: "https://shophimynamestee.com/"
        },
    ]

    return (
        <div className="h-[112px] flex items-center justify-between w-[1700px] max-w-[90vw] mx-auto relative z-[999]">

            {/* DESKTOP */}
            <Image src="/images/logo.png" alt="HIMYNAMESTEE" width="1164" height="149" className=" h-5 md:h-6 w-auto cursor-pointer hover:opacity-40 duration-300 relative z-[1001]" onClick={() => router.push("/")} />
            <div className="hidden md:flex items-center gap-1">
                {links?.map((o) => (
                    <Link
                        key={o.name}
                        href={o.link}
                        target={o.link.includes("https://") ? "_blank" : "_self"}
                        className="hover:opacity-40 duration-300 tracking-[0.25em] font-semibold text-base py-2 mx-2"
                    >
                        {o.name}
                    </Link>
                ))}
            </div>

            {/* MOBILE */}
            <div className="md:hidden flex items-center justify-center relative z-[1001] duration-300 hover:opacity-40">
                <Hamburger toggled={dropdown} toggle={setDropdown} size={25} color={"black"} />
            </div>
            <div className="md:hidden flex flex-col justify-center items-center gap-4 duration-300 w-screen h-screen bg-white fixed top-0 left-0 z-[1000]" style={dropdown ? { opacity: 1, pointerEvents: "all" } : { opacity: 0, pointerEvents: "none" }}>
                {links?.map((o) => (
                    <Link
                        key={o.name}
                        href={o.link}
                        target={o.link.includes("https://") ? "_blank" : "_self"}
                        className="hover:opacity-40 duration-300 tracking-[0.25em] font-semibold text-base w-full text-center py-2"
                        onClick={() => setDropdown(false)}
                    >
                        {o.name}
                    </Link>
                ))}
            </div>

            <div className="hidden md:block absolute top-full right-0 pt-[50px]">
                <Socials size={32} gap={0} color={router.asPath === "/" ? "#ffffff" : "#000000"} />
            </div>
        </div>
    )
}