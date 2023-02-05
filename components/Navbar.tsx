import Image from "next/image"

function Navbar() {
  return (
    <>
      <nav>
        <div>
          {/* LOGO */}
          <Image
            width={57}
            height={57}
            src={"/assets/images/logo.svg"}
            alt="Jan Humphrey Logo"
          />
        </div>
      </nav>
    </>
  )
}

export default Navbar