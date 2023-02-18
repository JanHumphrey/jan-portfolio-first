import NavbarMobile from "@/components/Navbar/NavbarMobile"
import Head from "next/head"

function Contact() {
  return (
    <>
    
    <Head>
      <title>Jan Humphrey - Contact</title>
    </Head>
      <section>
      <NavbarMobile/>
        <div>
          <h1>Contact</h1>
        </div> 
        <div>
          <div>
            <header>
              <h1>Get in touch, let's talk.</h1>
              <p>Feel free to send me an <a href="mailto:sjanhumphrey@gmail.com">email</a>  or schedule a <a href="https://calendly.com/janhumphrey/consultation">free consultation</a>  with me</p>
              <p>sjanhumphrey@gmail.com</p>
            </header>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact