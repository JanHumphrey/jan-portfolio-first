import BlogCards from '@/components/BlogCards';
import Glasscard from '@/components/Glasscard';
import NavbarMobile from '@/components/Navbar/NavbarMobile';
import ProjectCards from '@/components/ProjectCards';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { CiMail } from "react-icons/ci";
import { BiCalendar } from "react-icons/bi";
import { BsBoxArrowUpRight } from "react-icons/bs";


function Home() {
  return <>
    <Head>
      <title>Jan Humphrey - Software Developer</title>
    </Head>
    {/* HERO SECTION */}
    <section className='flex flex-col'>

      <article className="flex-col order-3 px-7 lg:px-24">
        <div className='flex flex-col lg:flex-row lg:justify-center lg:space-x-1 lg:gap-40'>
          <div className='lg:w-1/2 '>


            <div className='relative flex flex-col '>
              <span className="absolute font-hero text-9xl uppercase lg:text-[225px]">Jan</span>
              <span className=" font-hero2 text-7xl uppercase mt-28 lg:mt-56 lg:text-[125px]">Humphrey</span>
            </div>

            <div>
              <span className='font-main font-bold text-xs leading-tight lg:text-lg lg:mt-3'>FULL-STACK DEVELOPER | UI/UX DESIGNER | FREELANCER</span>
            </div>

            <div className='lg:w-auto'>
              <h1 className='font-main font-bold text-sm py-6 lg:text-xl lg:text-wrap lg:w-[500px]'>A passionate designer and programmer who promotes efficiency in every interactive design for your web identity.</h1>
            </div>

            <div className='font-main2 flex flex-row space-x-5 justify-center lg:w-[500px] lg:justify-start '>
              <Link href="/contact" className='transition flex flex-row items-center  justify-center bg-black hover:bg-slate-800 text-white py-2 px-4 rounded-lg md:py-3 md:px-6 h-11 w-48 drop-shadow-md'>
                <CiMail /><span className='ml-2'>Contact Me</span>
              </Link>
              <Link href="/contact" className='transition flex flex-row items-center justify-center  bg-slate-200 hover:bg-slate-300 text-black py-2 px-4 rounded-lg md:py-3 md:px-6 h-11 w-56 drop-shadow-md'>
                <BiCalendar /><span className='ml-2'>Book a Meeting</span>
              </Link>
            </div>
          </div>

          <div className='relative hidden md:hidden lg:block lg:items-start mt-16'>
            <div className='bg-gradient-to-tl from-black to-white p-4 w-[350px]'>
              <span className="block h-[420px] bg-white"></span>
            </div>
            <Image
              width={300}
              height={550}
              src={"/assets/images/hero-image.png"}
              alt="Jan Humphrey Salangsang"
              className=' lg:w-auto -mt-[494px] ml-3 '
            />
          </div>

        </div>
      </article>

      <div className='flex items-center mt-2 lg:hidden'>
        <div className='flex order-1 w-1/2 text-xl justify-center space-x-5 '>
          <NavbarMobile />
        </div>

        <div className='order-2 w-1/2'>
          
          <div className='mt-5'>
            <div className='bg-gradient-to-tl from-black to-white p-2 w-40 -ml-2'>
              <span className="block h-[150px] bg-white "></span>
            </div>
            <Image
              width={400}
              height={550}
              src={"/assets/images/hero-image.png"}
              alt="Jan Humphrey Salangsang"
              className='w-36 mb-3 -mt-[195px]'
            />
          </div>

        </div>
      </div>

    </section>
    {/* END HERO SECTION */}

    {/* RECENT PROJECTS */}
    <section className=''>
      <div className='flex flex-row mt-32 px-7 justify-between font-main2 items-center lg:mx-auto lg:px-40'>
        <h2 className='text-4xl font-bold 2xl:ml-10'>Recent Projects <span className='inline-block w-3 h-3 bg-violet-500 rounded-full'></span></h2>
        <Link href="/projects" className='flex flex-row items-center  justify-center bg-black hover:bg-slate-800 text-white py-2 px-4 
        rounded-lg md:py-3 md:px-6 h-11 w-48 drop-shadow-md lg:mr-24 2xl:mr-36'>
          <BsBoxArrowUpRight />  <span className='transition ml-2'>View All</span>
        </Link>
      </div>

      <div>
        <ProjectCards
          imageURL="/assets/images/projects/jokesapimockup.png"
          title="JokesAPI Mobile App"
          description="A mobile app that allows you to get random jokes from the internet."
          url="https://github.com/edmer664/JokesAPI"
        />
        <ProjectCards
          imageURL="/assets/images/projects/jokesapimockup.png"
          title="JokesAPI Mobile App"
          description="A mobile app that allows you to get random jokes from the internet."
          url="https://github.com/edmer664/JokesAPI"
        />
        <ProjectCards
          imageURL="/assets/images/projects/jokesapimockup.png"
          title="JokesAPI Mobile App"
          description="A mobile app that allows you to get random jokes from the internet."
          url="https://github.com/edmer664/JokesAPI"
        />
      </div>

    </section>
    <section>

      <div className='flex flex-row mt-28 px-7 justify-between font-main2 items-center lg:mx-auto lg:px-40'>
        <h2 className='text-4xl font-bold pr-20 2xl:ml-10'>Blog Post <span className='inline-block w-3 h-3 bg-violet-500 rounded-full'></span></h2>
        <Link href="/blogs" className='flex flex-row items-center  justify-center bg-black hover:bg-slate-800 text-white py-2 px-4 
        rounded-lg md:py-3 md:px-6 h-11 w-48 drop-shadow-md lg:mr-24 2xl:mr-36'>
          <BsBoxArrowUpRight /> <span className='transition ml-2'>View All</span>
        </Link>
      </div>

      <div>
        <BlogCards
          imageURL="/assets/images/projects/jokesapimockup.png"
          title="JokesAPI Mobile App"
          description="A mobile app that allows you to get random jokes from the internet."
          url="https://github.com/edmer664/JokesAPI"
        />
        <BlogCards
          imageURL="/assets/images/projects/jokesapimockup.png"
          title="JokesAPI Mobile App"
          description="A mobile app that allows you to get random jokes from the internet."
          url="https://github.com/edmer664/JokesAPI"
        />
        <BlogCards
          imageURL="/assets/images/projects/jokesapimockup.png"
          title="JokesAPI Mobile App"
          description="A mobile app that allows you to get random jokes from the internet."
          url="https://github.com/edmer664/JokesAPI"
        />
      </div>
      <Glasscard
        padding="72">
        hatdog
      </Glasscard>
    </section>
  </>;
};

export default Home