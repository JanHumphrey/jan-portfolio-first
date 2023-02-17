import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const NavlinkDesktop = ({
  name,
  url,
  isActive,
}: {
  name: string;
  url: string;
  isActive: boolean;
}) => {
  return (
    <li
      className={`py-12 transition-all px-7 ${isActive ? "font-bold" : "font-medium"
        }`}
    >
      <Link href={url}>
        {name}
      </Link>
    </li>
  );
};


function Navbar() {
  const [currentLink, setCurrentLink] = useState("");
  const router = useRouter();
  useEffect(() => {
    setCurrentLink(router.pathname);
    console.log(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <nav>
        {/* LOGO */}
        <div>
          <Link href={"/"}>
          <Image
            width={57}
            height={57}
            src={"/assets/images/logo.svg"}
            alt="Jan Humphrey Logo"
          />
          </Link>
        </div>

        {/* NAVIGATIONS */}
        <div>
          <ul>
            <NavlinkDesktop
              name="Home"
              url="/"
              isActive={currentLink === "/"}
            />
            <NavlinkDesktop
              name="About"
              url="/about"
              isActive={currentLink === "/about"}
            />
            <NavlinkDesktop
              name="Projects"
              url="/projects"
              isActive={currentLink === "/projects"}
            />
            <NavlinkDesktop
              name="Experience"
              url="/experience"
              isActive={currentLink === "/experience"}
            />
            <NavlinkDesktop
              name="Contact"
              url="/contact"
              isActive={currentLink === "/contact"}
            />
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar