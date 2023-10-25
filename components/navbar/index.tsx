import Image from "next/image"
import Link from "next/link"
import { Socials } from "../socials"
import { useRouter } from "next/router"
import Hamburger from "hamburger-react"
import { useState } from "react"
import { ImageWithProxyFallback } from "../helpers"

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
            link: "/music"
        },
        {
            name: "FILM",
            link: "/film"
        },
        {
            name: "SHOP",
            link: "https://shophimynamestee.com/"
        },
        {
            name: "MORE",
            link: ""
        }
    ]

    const LinkWithHover = ({ o }: { o: { name: string, link: string } }) => {
        const [hover, setHover] = useState(false)
        return (
            <div
                className="relative flex flex-col items-center gap-1 z-99"
                key={o.name}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <Link
                    href={o?.name === "MORE" ? "" : o.link}
                    target={o?.name === "MORE" ? "" : o.link.includes("https://") ? "_blank" : "_self"}
                    className="hover:opacity-40 duration-300 tracking-[0.15em] font-semibold text-base py-2 mx-2 flex justify-center items-center"
                >
                    {o.name}
                    {o.name === "MORE" && (
                        <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                            <rect x="0" fill="none" width="24" height="24" />
                            <g>
                                <path d="M7 10l5 5 5-5" />
                            </g>
                        </svg>
                    )}
                </Link>
                <div className={`flex flex-col gap-2 p-2 bg-white duration-150 absolute z-99 top-full border border-[#00000010] origin-top ${hover && o.name === "MORE" ? "opacity-100" : " opacity-0 scale-0 overflow-hidden whitespace-nowrap pointer-events-none"}`}>
                    <Link
                        href={"https://www.youtube.com/playlist?list=PLSk_5DV97tLSauZENgkUysa5c827v2ybw"}
                        target={"_blank"}
                        className="hover:opacity-40 duration-300 tracking-[0.15em] font-semibold text-base py-2 mx-2 whitespace-nowrap text-center"
                    >
                        HOT TEE
                    </Link>
                    <Link
                        href={"https://www.youtube.com/watch?v=IzvdRartlKM&list=PLSk_5DV97tLTjEBsR6zkqfeDvIU2QcgSj"}
                        target={"_blank"}
                        className="hover:opacity-40 duration-300 tracking-[0.15em] font-semibold text-base py-2 mx-2 whitespace-nowrap text-center"
                    >
                        ANIMATION
                    </Link>
                    <Link
                        href={"https://linktr.ee/himynamesteee"}
                        target={"_blank"}
                        className="hover:opacity-40 duration-300 tracking-[0.15em] font-semibold text-base py-2 mx-2 whitespace-nowrap text-center"
                    >
                        EXCLUSIVE CONTENT
                    </Link>
                </div>
            </div>
        )

    }

    return (
        <div className="h-[112px] flex items-center justify-between w-[1700px] max-w-[90vw] mx-auto relative z-[999]">

            {/* DESKTOP */}
            <ImageWithProxyFallback src="/images/logo.png" alt="HIMYNAMESTEE" width="1164" height="149" className=" h-5 md:h-6 w-auto cursor-pointer hover:opacity-40 duration-300 relative z-[1001]" onClick={() => {
                setDropdown(false)
                router.push("/")
            }} />
            <div className="hidden md:flex items-center gap-3 relative z-10">
                {links?.map((o, index) => (
                    <LinkWithHover key={o.name + index} o={o} />
                ))}
            </div>

            {/* MOBILE */}
            <div className="md:hidden flex items-center justify-center relative z-[1001] duration-300 hover:opacity-40">
                <Hamburger toggled={dropdown} toggle={setDropdown} size={25} color={"black"} />
            </div>
            <div className="md:hidden flex flex-col justify-center items-center gap-2 duration-300 w-screen h-screen bg-white fixed top-0 left-0 z-[1000]" style={dropdown ? { opacity: 1, pointerEvents: "all" } : { opacity: 0, pointerEvents: "none" }}>
                {links?.map((o) => {
                    if (o.name === "MORE") {
                        return (
                            <>
                                <Link
                                    href={"https://www.youtube.com/playlist?list=PLSk_5DV97tLSauZENgkUysa5c827v2ybw"}
                                    target={"_blank"}
                                    className="hover:opacity-40 duration-300 tracking-[0.15em] font-semibold text-base py-2 mx-2 whitespace-nowrap text-center"
                                >
                                    HOT TEE
                                </Link>
                                <Link
                                    href={"https://www.youtube.com/watch?v=IzvdRartlKM&list=PLSk_5DV97tLTjEBsR6zkqfeDvIU2QcgSj"}
                                    target={"_blank"}
                                    className="hover:opacity-40 duration-300 tracking-[0.15em] font-semibold text-base py-2 mx-2 whitespace-nowrap text-center"
                                >
                                    ANIMATION
                                </Link>
                                <Link
                                    href={"https://linktr.ee/himynamesteee"}
                                    target={"_blank"}
                                    className="hover:opacity-40 duration-300 tracking-[0.15em] font-semibold text-base py-2 mx-2 whitespace-nowrap text-center"
                                >
                                    EXCLUSIVE CONTENT
                                </Link>
                            </>
                        )
                    } else {
                        return (
                            <Link
                                key={o.name}
                                href={o.link}
                                target={o.link.includes("https://") ? "_blank" : "_self"}
                                className="hover:opacity-40 duration-300 tracking-[0.15em] font-semibold text-base w-full text-center py-2"
                                onClick={() => setDropdown(false)}
                            >
                                {o.name}
                            </Link>
                        )
                    }
                })}
            </div>

            <div className="hidden md:block absolute top-full right-0 pt-[50px]">
                <Socials size={32} gap={0} color={router.asPath === "/" ? "#ffffff" : "#000000"} />
            </div>
        </div>
    )
}