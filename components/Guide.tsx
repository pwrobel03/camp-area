import React from 'react'
import Image from 'next/image'

const Guide = () => {
    return (
        <section className="max-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20">
            <div className="padding-container relative z-20 flex flex-col">
                <div>
                    <Image
                        src="/camp.svg"
                        alt="camp"
                        width={50}
                        height={50}
                        className="float-left mr-5 w-10 lg:w-[80px]"
                    />
                    <h1 className="headings capitalize">guide you to easy path</h1>
                </div>
                <p className='flex flex-1 mt-2 regular text-gray-30'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
            </div>
            <div className='flex items-center justify-center max-container relative w-full'>
                <Image
                    src="/boat.png"
                    alt="boat"
                    width={1440}
                    height={580}
                    className='2xl:rounded-[2em]'
                />
                <div className="absolute flex flex-row bg-white py-8 px-7 border shadow-md gap-3 rounded-[1em] md:left-20 lg:top-20">
                    <Image
                        src="meter.svg"
                        alt='meter'
                        width={16}
                        height={158}
                        className='h-full w-auto'
                    />
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4 flex-row">
                                <p className="regular-menu">Destination</p>
                                <p className="regular-menu">48 min</p>
                            </div>
                            <p className='regular-menu bold'>Aguas Calientes</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4 flex-row">
                                <p className="regular-menu">Start track</p>
                            </div>
                            <p className='regular-menu bold'>Wonorejo Pasuruan</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Guide
