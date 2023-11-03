import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_LINKS } from '@/constants'
import { FOOTER_CONTACT_INFO } from '@/constants'
import { SOCIALS } from '@/constants'

interface FooterLinksInterface {
    title: string;
    children: React.ReactNode;
}

const FooterLinks = ({ title, children }: FooterLinksInterface) => {
    return (
        <div className="flex flex-col sm:gap-5 gap-2">
            <h4 className="regular-menu bold">{title}</h4>
            {children}
        </div>
    )
}

const Footer = () => {
    return (
        <section className='flex flex-col my-10 max-container'>
            <div className="flex 2xl:p-0 padding-container sm:flex-row flex-col">
                <div className="flex">
                    <Image src="/hilink-logo.svg" alt="logo" width={94} height={52} className="h-full" />
                </div>
                <div className='flex sm:flex-row flex-col gap-2 justify-evenly w-full'>
                    {FOOTER_LINKS.map((columns) => (
                        <FooterLinks title={columns.title}>
                            <ul className="regular-14 flex flex-col sm:gap-4 gap-2 text-gray-30">
                                {columns.links.map((link) => (
                                    <Link href="/" key={link}>
                                        {link}
                                    </Link>
                                ))}
                            </ul>
                        </FooterLinks>
                    ))}

                    <FooterLinks title={FOOTER_CONTACT_INFO.title}>
                        {FOOTER_CONTACT_INFO.links.map((link) => (
                            <Link
                                href="/"
                                key={link.label}
                                className="flex flex-col"
                            >
                                <p className="regular-quotes">
                                    {link.label}:
                                </p>
                                <p className="regular-quotes text-blue-70">
                                    {link.value}
                                </p>
                            </Link>
                        ))}
                    </FooterLinks>

                    <FooterLinks title={SOCIALS.title}>
                        <ul className="regular-menu flex gap-4 sm:flex-col sm:items-center flex-row text-gray-30">
                            {SOCIALS.links.map((link) => (
                                <Link href="/" key={link}>
                                    <Image src={link} alt="logo" width={24} height={24} />
                                </Link>
                            ))}
                        </ul>
                    </FooterLinks>
                </div>
            </div>
            <div className="flex flex-row gap-4 justify-center items-center mt-10 pt-10 border-t-2">
                <p className='regular-menu'>2023 Hilink | All rights reserved</p>
            </div>
        </section>
    )
}

export default Footer
