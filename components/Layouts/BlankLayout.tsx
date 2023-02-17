
import Footer from "../Footer"
import Navbar from "../Navbar"

export const BlankLayout= ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default BlankLayout