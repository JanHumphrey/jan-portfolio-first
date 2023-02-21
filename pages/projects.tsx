import NavbarMobile from "@/components/Navbar/NavbarMobile"
import Head from "next/head"
import Image from "next/image"

function Projects() {
  return (
    <>
      <Head>
        <title>Jan Humphrey - Projects</title>
      </Head>
      <section className="mb-9">

        <div className='flex items-center mt-2 lg:hidden'>
          <div className='flex order-1 w-1/2 text-xl justify-center space-x-5 '>
            <NavbarMobile />
          </div>

          <div className='order-2 w-1/2'>

            <div className='mt-5'>
              <div className='bg-gradient-to-tl from-zinc-400 to-black p-2 w-40 -ml-2'>
                <span className="block h-[150px] bg-white "></span>
              </div>
              <Image
                width={400}
                height={550}
                src={"/assets/images/hero-projects.png"}
                alt="Jan Humphrey Salangsang"
                className='w-52 mb-3 -mt-[189px] -ml-10'
                draggable="false"
              />
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-[179px]">
        <div className="flex flex-row xl:space-x-[364px] lg:mr-[325px]">
          <article className="pt-12 lg:w-1/2">
          <h1 className="font-hero2 text-6xl lg:text-[150px]">Projects</h1>
            <h2 className="font-main font-bold text-xs pt-2 px-3 lg:text-2xl lg:w-[500px]">Building websites that are both functional and visually appealing is an art form. Let's dive into my collection of web development masterpieces.
            </h2>
          </article>
          <div className='relative hidden md:hidden lg:block lg:items-start mt-16'>
              <div className='bg-gradient-to-tl from-zinc-400 to-black p-4 w-[350px]'>
                <span className="block h-[420px] bg-white"></span>
              </div>
              <Image
                width={800}
                height={700}
                src={"/assets/images/hero-projects.png"}
                alt="Jan Humphrey Salangsang"
                className='-mt-[517px] max-w-xl -ml-[100px]'
                draggable="false"
              />
            </div>
          </div>

          <div>
            <div>
              {/* PROJECTS COMPONENTS */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects