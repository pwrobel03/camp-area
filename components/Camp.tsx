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
                    <p className="regular-menu bold text-white">{title}</p>
                    <p className="regular-quotes text-white">{subtitle}</p>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-row items-center -space-x-4 overflow-hidden'>
                    {PEOPLE_URL.map((url) => (
                        <Image
                            src={url}
                            key={url}
                            alt='person'
                            width={52}
                            height={52}
                            className='h-fit'
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
        <section className='max-container flex flex-col py-10 lg:py-20'>
            <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-10 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
                <CampSite
                    image="bg-bg-img-1"
                    title="Putuk Truno Camp"
                    subtitle="Prigen, Pasuruan"
                    people="50+ Joined"
                />
                <CampSite
                    image="bg-bg-img-2"
                    title="Mountain View Camp"
                    subtitle="Somewhere in the Wildness"
                    people="100+ Joined"
                />
            </div>
            <div className="padding-container flex justify-end mt-10 lg:-mt-60 lg:mr-6">
                <div className='bg-green-50 p-10 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
                    <h2 className="regular text-white mb-4 capitalize"><strong className='bold'>Feeling Lost</strong> And Not Knowing The Way?</h2>
                    <p className="regular-menu text-white">Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
                    <Image
                        src="/quote.svg"
                        alt="camp-2"
                        width={186}
                        height={219}
                        className='camp-quote'
                    />
                </div>
            </div>
        </section >
    )
}

export default Camp
