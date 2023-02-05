import Image from "next/image"

function Projects() {
  return (
    <>
      <section>
        <h1>Projects</h1>
        <article>
          <h2>Building websites that are both functional and visually appealing is an art form. Let's dive into my collection of web development masterpieces.
          </h2>
          <Image
          width={400}
          height={550}
          src={"/assets/images/hero-projects.png"}
          alt="Jan Humphrey Salangsang"></Image>
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