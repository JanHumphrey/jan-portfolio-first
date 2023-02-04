import Head from "next/head"

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
                <a href="https://www.facebook.com/JnHmphry/">
                  <div>→</div>
                  <p>Twitter</p>
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/JnHmphry/">
                  <div>→</div>
                  <p>Github</p>
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/JnHmphry/">
                  <div>→</div>
                  <p>LinkedIn</p>
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/JnHmphry/">
                  <div>→</div>
                  <p>Instagram</p>
                </a>
              </div>
            </div>
          </div>
          {/* INTRODUCTORY  */}
          <div>

          </div>
        </div>
      </section>
    </>
  )
}

export default About