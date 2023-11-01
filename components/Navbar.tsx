"use client";
import Link from "next/link"
import Image from "next/image"

import { NAV_LINKS } from "@/constants"
import Button from "@/components/Button"
import { useState } from "react";


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="flex flex-1 flex-col py-5 relative max-container">
            <div className="flex justify-between items-center">

                <Link href="/" >
                    <Image
                        loading={"lazy"}
                        src="/hilink-logo.svg"
                        alt="logo"
                        width={74}
                        height={29}
                        className="w-full h-auto"
                    />
                </Link >
                <ul className="lg:flex hidden h-full gap-12">
                    {NAV_LINKS.map(link => (
                        <li key={link.key}>
                            <Link key={link.key} href={link.href} className="regular-16 tex-gray-50 items-center justify-center pb-2 transition-all hover:font-bold">
                                {link.label}
                            </Link>
                        </li>
                    )
                    )}
                </ul>

                <div className="lg:flex hidden">
                    <Button
                        title="login"
                        type="button"
                        variant="btn_dark_green"
                        icon="/user.svg"
                    />
                </div>

                <Image
                    loading={"lazy"}
                    src="menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                    className="lg:hidden flex cursor-pointer"
                    onClick={() => setToggle(prev => !prev)}
                />
            </div>
            {toggle
                ?
                <ul className="sidebar lg:hidden flex flex-col items-center w-full h-full">
                    <div className="h-[2px] w-full bg-black my-3"></div>
                    {NAV_LINKS.map(link => (
                        <li key={link.key} className="py-4">
                            <Link key={link.key} href={link.href} className="regular-16 tex-gray-50 items-center justify-center pb-2 transition-all hover:font-bold">
                                {link.label}
                            </Link>
                        </li>
                    )
                    )}
                    <div className="h-[2px] w-full bg-black my-3"></div>
                </ul>
                : false
            }
            {/* {toggle
                    ? <Image
                        loading={"lazy"}
                        src="menu.svg"
                        alt="menu"
                        width={32}
                        height={32}
                        className="lg:hidden flex cursor-pointer"
                        onClick={() => setToggle(prev => !prev)}
                    />
                    : <div className="flex flex-1  absolute top-0 left-0 overflow-hidden w-[100vw] h-[100%] bg-black">
                        <div className="flex h-[100vh]">
                            dfgdfgfd
                        </div>
                    </div>
                } */}
        </nav >
    )
}

export default Navbar
