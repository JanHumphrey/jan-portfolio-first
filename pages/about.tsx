import NavbarMobile from "@/components/Navbar/NavbarMobile"
import Head from "next/head"
import Image from "next/image"

function About() {
  return (
    <>
      <Head>
        <title>Jan Humphrey - About</title>
      </Head>

      {/* HERO ABOUT */}
      <section>

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
                src={"/assets/images/hero-about.png"}
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
              <h1 className="font-hero2 text-6xl lg:text-[150px]">About</h1>
              <h2 className="font-main font-bold text-xs pt-2 px-3 lg:text-2xl lg:w-[500px]">Hi! I'm a full-stack developer with a specialty in design and user experience solutions. Let's work together and elevate your project.
              </h2>
            </article>

            <div className='relative hidden md:hidden lg:block lg:items-start mt-16'>
              <div className='bg-gradient-to-tl from-zinc-400 to-black p-4 w-[350px]'>
                <span className="block h-[420px] bg-white"></span>
              </div>
              <Image
                width={800}
                height={700}
                src={"/assets/images/hero-about.png"}
                alt="Jan Humphrey Salangsang"
                className='-mt-[517px] max-w-xl -ml-[100px]'
                draggable="false"
              />
            </div>
          </div>



          {/* INTRODUCTORY  */}

          <div className="flex flex-col lg:flex-row">
            <div className="order-1 font-main font-bold text-xs mt-32 lg:order-2 lg:mt-0">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus adipisci quaerat excepturi cupiditate dolor dignissimos saepe provident, labore iusto beatae, porro sint aspernatur accusamus. Voluptas recusandae harum quam ratione.</p><br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti cupiditate adipisci vero quas laborum vel, ratione neque possimus id quaerat repellendus facere eius error aspernatur, asperiores recusandae magni placeat?</p><br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit rem placeat veritatis neque ipsam repellendus, aut eius. Quibusdam consequuntur natus ipsam sit illo obcaecati officiis quisquam fugiat. Iure, dicta.</p>

              <div className="hidden md:block order-2 mt-6 lg:order-3">
              <h1 className='font-main2 text-4xl font-bold 2xl:ml-10 lg:text-6xl'>Technology Stack <span className='inline-block w-3 h-3 bg-violet-500 rounded-full'></span></h1>
              {/* STACK COMPONENTS HERE */}
              <div>

              </div>
            </div>
            <div className="hidden md:block order-3 lg:order-4">
              <h1 className='font-main2 text-4xl font-bold 2xl:ml-10 lg:text-6xl'>Recommendations <span className='inline-block w-3 h-3 bg-violet-500 rounded-full'></span></h1>
              {/* RECOMMENDATIONS COMPONENTS HERE */}
              <div>
              </div>
            </div>
            </div>
           
            

            <div className="order-4 flex flex-col mt-6 space-y-8 lg:order-1">
              {/* CTA'S */}
              <div>

                <h1 className='font-main2 text-4xl font-bold 2xl:ml-10 lg:text-6xl mb-2'>Contact <span className='inline-block w-3 h-3 bg-violet-500 rounded-full'></span></h1>
                <p className="font-main2">For assistance or questions, please don't hesitate to reach out to me via <a href="mailto:sjanhumphrey@gmail.com">email</a> and I'll respond promptly.</p>
              </div>
              <div>
                <h1 className='font-main2 text-4xl font-bold 2xl:ml-10 lg:text-6xl mb-2'>Hire Me <span className='inline-block w-3 h-3 bg-violet-500 rounded-full'></span></h1>
                <p className="font-main2">Book a zero-cost <a>consultation</a> with me and let's have a conversation about your project.</p>
              </div>
              <div>
                <h1 className='font-main2 text-4xl font-bold 2xl:ml-10 lg:text-6xl mb-2 '>Social Links <span className='inline-block w-3 h-3 bg-violet-500 rounded-full'></span></h1>
                <div className="font-main2 space-y-3">
                  <div>
                    <a href="https://www.facebook.com/JnHmphry/">
                      <p>→ Facebook</p>
                    </a>
                  </div>
                  <div>
                    <a href="https://twitter.com/JnHmphry/">
                      <p>→ Twitter</p>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/JanHumphrey">
                      <p>→ Github</p>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/janhumphrey/">
                      <p>→ LinkedIn</p>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.instagram.com/jnhmphry/">
                      <p>→ Instagram</p>
                    </a>
                  </div>
                </div>
              </div>

            </div>
            </div>
            
            <div className="block md:hidden order-2 mt-6 lg:order-3">
              <h1 className='font-main2 text-4xl font-bold 2xl:ml-10 lg:text-6xl'>Technology Stack <span className='inline-block w-3 h-3 bg-violet-500 rounded-full'></span></h1>
              {/* STACK COMPONENTS HERE */}
              <div>

              </div>
            </div>
            <div className="block md:hidden order-3 lg:order-4">
              <h1 className='font-main2 text-4xl font-bold 2xl:ml-10 lg:text-6xl'>Recommendations <span className='inline-block w-3 h-3 bg-violet-500 rounded-full'></span></h1>
              {/* RECOMMENDATIONS COMPONENTS HERE */}
              <div>
              </div>
            </div>
            
          
        </div>
      </section>
    </>
  )
}

export default About