import  BlogCards from '@/components/BlogCards';
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
    <section className=''>
      <article className="">
        <div>
          <span>Jan</span>
        </div>
        <div>
          <span>Humphrey</span>
        </div>
        <div>
          <span>FULL-STACK DEVELOPER | UI/UX DESIGNER | FREELANCER</span>
        </div>
        <div>
          <h1>A passionate designer and programmer who promotes efficiency in every interactive design for your web identity.</h1>
        </div>
        <div>
          <Link href="/contact">
            Contact Me
          </Link>
          <Link href="/contact">
            Book a Meeting
          </Link>
        </div>
      </article>
      <div>
        <Image
          width={400}
          height={550}
          src={"/assets/images/hero-image.png"}
          alt="Jan Humphrey Salangsang"/>
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
    </section>
  </>;
};

export default Home