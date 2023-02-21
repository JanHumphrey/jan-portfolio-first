
import Footer from "../Footer"
import Navbar from "../Navbar/GeneralNavbar"

export const BlankLayout= ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col max-w-screen-2xl mx-auto pb-52 lg:pb-0">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default BlankLayout