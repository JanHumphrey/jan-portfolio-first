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
        <h1>About</h1>
        <article>
          <h2>Hi! I'm a full-stack developer with a specialty in design and user experience solutions. Let's work together and elevate your project.
          </h2>
          <NavbarMobile/>
          <Image
          width={400}
          height={550}
          src={"/assets/images/hero-about.png"}
          alt="Jan Humphrey Salangsang"/>
        </article>
        
        <div>
          {/* CTA'S */}
          <div>
            <h1>Contact</h1>
            <p>For assistance or questions, please don't hesitate to reach out to me via <a href="mailto:sjanhumphrey@gmail.com">email</a> and I'll respond promptly.</p>
          </div>
          <div>
            <h1>Hire Me</h1>
            <p>Book a zero-cost <a>consultation</a> with me and let's have a conversation about your project.</p>
          </div>
          <div>
            <h1>Social Links</h1>
            <div>
              <div>
                <a href="https://www.facebook.com/JnHmphry/">
                  <div>→</div>
                  <p>Facebook</p>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/JnHmphry/">
                  <div>→</div>
                  <p>Twitter</p>
                </a>
              </div>
              <div>
                <a href="https://github.com/JanHumphrey">
                  <div>→</div>
                  <p>Github</p>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/janhumphrey/">
                  <div>→</div>
                  <p>LinkedIn</p>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/jnhmphry/">
                  <div>→</div>
                  <p>Instagram</p>
                </a>
              </div>
            </div>
          </div>

          {/* INTRODUCTORY  */}
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus adipisci quaerat excepturi cupiditate dolor dignissimos saepe provident, labore iusto beatae, porro sint aspernatur accusamus. Voluptas recusandae harum quam ratione.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti cupiditate adipisci vero quas laborum vel, ratione neque possimus id quaerat repellendus facere eius error aspernatur, asperiores recusandae magni placeat?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit rem placeat veritatis neque ipsam repellendus, aut eius. Quibusdam consequuntur natus ipsam sit illo obcaecati officiis quisquam fugiat. Iure, dicta.</p>
            <h1>Technology Stack</h1>
            {/* STACK COMPONENTS HERE */}
            <div>

            </div>
            <h1>Recommendations</h1>
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