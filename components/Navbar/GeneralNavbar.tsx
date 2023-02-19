import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import ThemeIcon from "../ThemeIcon";
import NavLinkContainer from "./NavLinkContainer";

const SocialLink = ({ icon, url }: { icon: React.ReactNode; url: string }) => {
  return (
    <Link href={url} target='_blank'>
      {icon}
    </Link>
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
      <nav className="flex flex-wrap space-x-20  lg:space-x-60  items-center  justify-center p-3">
        {/* LOGO */}
        <div className="">
          <Link href={"/"}>
            <Image
              width={57}
              height={57}
              src={"../assets/images/logo-dark.svg"}
              alt="Jan Humphrey Logo"
            />
          </Link>
        </div>

        <NavLinkContainer
          className="hidden lg:flex flex-row lg:space-x-20 font-hero2 uppercase text-xl"
          currentLink={currentLink}
        />




        <ul className=" flex  flex-row content-evenly space-x-3">
          <SocialLink
            icon={
              <AiFillInstagram
                size={35}
              />
            }
            url="https://www.instagram.com/jnhmphry/"
          />
          <SocialLink
            icon={
              <AiFillGithub
                size={35}
              />
            }
            url="https://github.com/JanHumphrey"
          />
          <SocialLink
            icon={
              <AiFillFacebook
                size={35}
              />
            }
            url="https://www.facebook.com/JnHmphry/"
          />
          <SocialLink
            icon={
              <AiFillLinkedin
                size={35}
              />
            }
            url="https://www.linkedin.com/in/janhumphrey/"
          />
        </ul>

        <div>
          <ThemeIcon />
        </div>


      </nav>
    </>
  )
}

export default Navbar