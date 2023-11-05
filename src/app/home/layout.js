import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SearchBar from "@/components/searchbar";


export default function RootLayout({ children }) {
    return (
      <div lang="en">
        <Navbar/>
        <SearchBar/>
        <div >{children}</div>
        <Footer/>
      </div>
    )
  }