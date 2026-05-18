import "./globals.css"
import Navbar from "./component/navbar";
import { FacultyComponent } from "./component/layout/faculty";
import { HeroSection } from "./component/layout/heroHome";
import { MainContent } from "./component/layout/mainContent";
import { Footer } from "./component/layout/footer";
export default function Home() {
  
  return (
    <main className="min-h-screen bg-(--color-primary-light) font-sans">
      <Navbar />

      {/* Hero Section */}
      <HeroSection/>
      
      {/* Main Content Container */}
        <MainContent/>

      {/* Faculty Spotlight & Leadership Message Section */}
        <FacultyComponent/>

      {/* Footer */}
      <Footer/>
    </main>
  );
}
