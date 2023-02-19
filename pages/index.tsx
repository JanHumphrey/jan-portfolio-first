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

      <article className="flex-col order-3 px-7">
        <div className='relative flex flex-col '>
          <span className="absolute font-hero text-9xl uppercase ">Jan</span>
          <span className=" font-hero2 text-7xl uppercase mt-28">Humphrey</span>
        </div>

        <div>
          <span className='font-main font-bold text-xs leading-tight'>FULL-STACK DEVELOPER | UI/UX DESIGNER | FREELANCER</span>
        </div>

        <div>
          <h1 className='font-main font-bold text-sm py-6'>A passionate designer and programmer who promotes efficiency in every interactive design for your web identity.</h1>
        </div>

        <div className='font-main2 flex flex-row space-x-5 justify-center '>
          <Link href="/contact" className='flex flex-row items-center  justify-center bg-slate-800 hover:bg-black text-white py-2 px-4 rounded-lg md:py-3 md:px-6 h-11 w-48 drop-shadow-md'>
            <CiMail /><span className='ml-2'>Contact Me</span>
          </Link>
          <Link href="/contact" className='flex flex-row items-center justify-center  bg-slate-200 hover:bg-slate-400 text-black py-2 px-4 rounded-lg md:py-3 md:px-6 h-11 w-56 drop-shadow-md'>
            <BiCalendar /><span className='ml-2'>Book a Meeting</span>
          </Link>
        </div>
      </article>  

      <div className='flex items-center mt-2'>
        <div className='flex order-1 w-1/2 text-xl justify-center space-x-5 '>
          <NavbarMobile />
        </div>
        <div className='order-2 w-1/2'>
          <Image
            width={400}
            height={550}
            src={"/assets/images/hero-image.png"}
            alt="Jan Humphrey Salangsang"
            className='w-36 mb-3'
          />
        </div>
      </div>

    </section>
    {/* END HERO SECTION */}

    {/* RECENT PROJECTS */}
    <section>
      <div className='flex flex-row mt-28 px-7 justify-between font-main2 items-center'>
        <h2 className='text-5xl font-bold '>Recent Projects</h2>
        <Link href="/projects" className='flex flex-row items-center  justify-center bg-slate-800 hover:bg-black text-white py-2 px-4 rounded-lg md:py-3 md:px-6 h-11 w-48 drop-shadow-md'>
        <BsBoxArrowUpRight/>  <span className='ml-2'>View All</span>
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

      <div className='flex flex-row mt-28 px-7 justify-between font-main2'>
        <h2 className='text-5xl font-bold pr-24'>Blog Post</h2>
        <Link href="/blogs" className='flex flex-row items-center  justify-center bg-slate-800 hover:bg-black text-white py-2 px-4 rounded-lg md:py-3 md:px-6 h-11 w-48 drop-shadow-md'>
       <BsBoxArrowUpRight/> <span className='ml-2'>View All</span>
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