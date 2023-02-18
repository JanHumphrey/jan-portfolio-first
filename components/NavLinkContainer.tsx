import Navlink from "./NavLink"

const NavLinkContainer = ({ className, currentLink }: { className: string, currentLink: string }) => {
  return (
    <>
      {/* DESKTOP NAVIGATIONS */}
        <ul className={`${className} flex`}>
          <Navlink
            name="Home"
            url="/"
            isActive={currentLink === "/"}
          />
          <Navlink
            name="About"
            url="/about"
            isActive={currentLink === "/about"}
          />
          <Navlink
            name="Projects"
            url="/projects"
            isActive={currentLink === "/projects"}
          />
          <Navlink
            name="Experience"
            url="/experience"
            isActive={currentLink === "/experience"}
          />
          <Navlink
            name="Contact"
            url="/contact"
            isActive={currentLink === "/contact"}
          />
        </ul>
    </>
  )
}

export default NavLinkContainer