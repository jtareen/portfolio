import profile from '../assets/profile.png'
import Dots from '../assets/icons/Dots.svg'
import OutlinedLogo from '../assets/LogoOutline.png'

const Home = () => {
    return <>
        <section className="flex flex-col sm:flex-row my-15">
            <div className="sm:flex-1 flex flex-col justify-center">
                <h1 className="text-[32px] font-semibold text-white">
                    Jawad Tareen is a <span className="text-primary">full-Stack developer</span> and <span className="text-primary">ML engineering</span>
                </h1>
                <p className="text-[16px] font-regular text-gray py-5">He crafts responsive websites where technologies meet creativity</p>
                <button className="w-fit btn btn-primary flex-none">Contact Me !!</button>
            </div>
            <div className="relative flex flex-col py-4 items-center sm:flex-1 justify-center">
                <img src={profile} alt="profile" className='w-92 z-10' />
                <p className='text-gray z-30 font-6 border border-white w-78 sm:w-84 py-1 px-1'>
                    <span className='inline-block align-middle h-[16px] w-[16px] mr-1 bg-primary'></span>
                    Currently working on <span className='text-white font-semibold'>XYZ</span>
                </p>
                <img src={Dots} alt="Dots" className='absolute z-20 bottom-18 right-8 md:bottom-25 md:right-18 xl:right-24 w-16 h-16 md:w-18 md:h-18' />
                <img src={OutlinedLogo} alt="Dots" className='absolute z-0 top-14 left-6 w-32 h-32 lg:w-44 lg:h-44 2xl:left-22' />
            </div>
        </section>
    </>
}

export default Home