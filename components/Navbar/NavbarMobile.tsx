import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavLinkContainer from "./NavLinkContainer"



const NavbarMobile = () => {
  const [currentLink, setCurrentLink] = useState("");
  const router = useRouter();
  useEffect(() => {
    setCurrentLink(router.pathname);
    console.log(router.pathname);
  }, [router.pathname]);
  return (
    <>
    <NavLinkContainer
          className="flex lg:hidden flex-col font-hero2 uppercase gap-y-3 "
          currentLink={currentLink}
        />
    </>
  )
};

export default NavbarMobile