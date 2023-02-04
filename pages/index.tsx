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
    </section>
    {/* END HERO SECTION */}
  </>;
};

export default Home