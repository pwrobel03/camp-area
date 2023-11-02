import React from 'react'
import Image from 'next/image';
import { PEOPLE_URL } from '@/constants';

interface CampProps {
    image: string;
    title: string;
    subtitle: string;
    people: string;
}

const CampSite = ({ image, title, subtitle, people }: CampProps) => (
    <div className={`w-full h-full min-w-[1100px] ${image} bg-cover bg-no-repeat 2xl:rounded-[4em]`}>
        <div className="flex h-full flex-col p-6 items-start justify-between">
            <div className='flex flex-center flex-row gap-4 m-4'>
                <div className="rounded-full bg-green-50 p-4">
                    <Image
                        src="/folded-map.svg"
                        alt="map"
                        width={32}
                        height={32}
                        className='md:w-[26px] w-20px'
                    />
                </div>
                <div className='flex flex-col justify-center'>
                    <p className="regular-menu text-white">{title}</p>
                    <p className="regular-quotes text-white">{subtitle}</p>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-row -space-x-4 overflow-hidden'>
                    {PEOPLE_URL.map((url) => (
                        <Image
                            src={url}
                            key={url}
                            alt='person'
                            width={52}
                            height={52}
                            className='w-14'
                        />
                    ))}
                </div>
                <p className='regular-menu text-white m-4'>{people}</p>
            </div>
        </div>
    </div>
)

const Camp = () => {
    return (
        <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
            <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-10 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
                <CampSite
                    image="bg-bg-img-1"
                    title="Putuk Truno Camp"
                    subtitle="Prigen, Pasuruan"
                    people="50+ Joined"
                />
                <CampSite
                    image="bg-bg-img-1"
                    title="Putuk Truno Camp"
                    subtitle="Prigen, Pasuruan"
                    people="50+ Joined"
                />
            </div>
        </section>
    )
}

export default Camp
