import Head from "next/head"
import Image from "next/image"

function Experience() {
  return (
    <>
      <Head>
        <title>Jan Humphrey - Experience</title>
      </Head>
      <section>
        <h1>Experience</h1>
        <article>
          <h2>
            "Where every project, every challenge, and every success has shaped who I am today."
          </h2>
          <Image
            width={400}
            height={550}
            src={"/assets/images/hero-exp.png"}
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

export default Experience