import BlogCards from '@/components/BlogCards';
import Glasscard from '@/components/Glasscard';
import NavbarMobile from '@/components/Navbar/NavbarMobile';
import ProjectCards from '@/components/ProjectCards';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';



function Home() {
  return <>
    <Head>
      <title>Jan Humphrey - Software Developer</title>
    </Head>
    {/* HERO SECTION */}
    <section className='flex flex-col'>
      <article className="order-3">
        <div>
          <span className="font-hero">Jan</span>
        </div>
        <div>
          <span className="font-hero2">Humphrey</span>
        </div>
        <div>
          <span className='font-main'>FULL-STACK DEVELOPER | UI/UX DESIGNER | FREELANCER</span>
        </div>
        <div>
          <h1 className='font-main'>A passionate designer and programmer who promotes efficiency in every interactive design for your web identity.</h1>
        </div>
        <div className='font-main2'>
          <Link href="/contact" >
            Contact Me
          </Link>
          <Link href="/contact">
            Book a Meeting
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
      <div>
        <h2>Recent Projects</h2>
        <Link href="/projects">

          View All

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
      <div>
        <h2>Blog Post</h2>
        <Link href="/blogs">

          View All

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