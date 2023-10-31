import Link from "next/link"
import Image from "next/image"

import { NAV_LINKS } from "@/constants"
import Button from "@/components/Button"

const Navbar = () => {
    return (
        <nav className="flex flex-1 py-5 justify-between padding-container items-center max-container">
            <Link href="/">
                <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}></Image>
            </Link>
            <ul className="lg:flex hidden h-full gap-12">
                {NAV_LINKS.map(link => {
                    console.log(link);
                    return (
                        // <li key={link.key} className="regular-16 tex-gray-50 items-center justify-center pb-2 transition-all hover:font-bold">
                        //     <a href={link.href}></a>{link.label}
                        // </li>
                        <li>
                            <Link key={link.key} href={link.href} className="regular-16 tex-gray-50 items-center justify-center pb-2 transition-all hover:font-bold">
                                {link.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className="lg:flex hidden">
                <Button title="zapisz" type="button" variant="btn_dark_green" icon="/user.svg"></Button>
            </div>
        </nav>
    )
}

export default Navbar
