import NavbarMobile from "@/components/Navbar/NavbarMobile"
import Head from "next/head"
import Image from "next/image"

function Projects() {
  return (
    <>
    <Head>
      <title>Jan Humphrey - Projects</title>
    </Head>
      <section>
        <h1>Projects</h1>
        <article>
          <h2>Building websites that are both functional and visually appealing is an art form. Let's dive into my collection of web development masterpieces.
          </h2>
          <NavbarMobile/>
          <Image
          width={400}
          height={550}
          src={"/assets/images/hero-projects.png"}
          alt="Jan Humphrey Salangsang"/>
        </article>
        <div>
          <div>
            {/* PROJECTS COMPONENTS */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects