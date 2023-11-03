import React from 'react'
import Image from 'next/image'
import { FEATURES } from '@/constants'


const Features = () => {
    return (
        <section className="max-container padding-container relative bg-feature-bg bg-no-repeat bg-center flex flex-row py-10 lg:py-20">
            <div className="flex flex-1">
                <Image
                    src="/phone.png"
                    alt='phone'
                    width={440}
                    height={1000}
                    className='feature-phone z-[1]' />
            </div>
            <div className="flex w-full flex-col z-[2] gap-6 lg:w-2/3">
                <div>
                    <Image
                        src="/camp.svg"
                        alt="camp"
                        width={50}
                        height={50}
                        className="float-left mr-5 w-10 lg:w-[80px]"
                    />
                    <h1 className="headings capitalize">our features</h1>
                </div>
                <ul className='grid md:grid-cols-2 gap-10'>
                    {FEATURES.map(feature => (
                        <li className='flex flex-col '>
                            <div className='flex md:flex-col flex-row md:items-start items-center gap-2 '>
                                <div className='flex max-w-[64px] bg-green-50 p-5 rounded-full'>
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={28}
                                        height={28}
                                        className='h-auto w-auto'
                                    />
                                </div>
                                <h2 className="regular bold">
                                    {feature.title}
                                </h2>
                            </div>
                            <p className="regular-menu mt-2 text-gray-30">
                                {feature.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Features
