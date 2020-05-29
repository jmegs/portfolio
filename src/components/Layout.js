import Navbar from "./Navbar"
import Footer from "./Footer"

export default ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)
