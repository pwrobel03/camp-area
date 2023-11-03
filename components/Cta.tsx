import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Cta = () => {
    return (
        <section className="max-container relative flex justify-center items-start py-10 lg:py-20">
            <div className="2xl:rounded-[2em] get-app gap-6">
                <div className="flex flex-1 flex-col justify-between">
                    <h2 className='headings'>Get for free now!</h2>
                    <div>
                        <p className='regular-menu'>Available on IOS and Android</p>
                        <div className='sm:flex-row flex-col mt-6 flex gap-8'>
                            <Button
                                type='button'
                                title='App Store'
                                icon='/apple.svg'
                                variant='btn_white'
                                full
                            />
                            <Button
                                type='button'
                                title='Google Play'
                                icon='/android.svg'
                                variant='btn_dark_green_outline'
                                full
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-end ">
                    <Image
                        src="/phones.png"
                        alt='phones'
                        width={550}
                        height={870}
                        className='h-auto w-auto'
                    />
                </div>
            </div>
        </section>
    )
}

export default Cta
