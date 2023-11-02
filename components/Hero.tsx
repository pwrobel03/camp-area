import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <div>
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="float-left mr-5 w-10 lg:w-[80px]"
          />
          <h1 className="headings">Putuk Truno Camp Area</h1>
        </div>
        <p className="regular mt-6 text-gray-30 xl:max-w-[720px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>

        <div className="my-10 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="regular font-bold text-blue-70 flex items-center">
            198k
            <span className="regular-menu ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 2xl:items-end 2xl:justify-end justify-start items-start md:m-10 m-0">
        <div className="relative z-20 flex flex-col gap-8 rounded-3xl bg-black opacity-70 px-7 py-8">

          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-menu text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="regular text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween gap-6">
            <div className="flex flex-col">
              <p className="regular-menu block text-gray-20">Distance</p>
              <p className="regular text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-menu block text-gray-20">Elevation</p>
              <p className="regular text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero