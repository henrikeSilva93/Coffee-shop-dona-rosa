
import About from '../components/about';
import MainSection from "@/components/main-section";
import MenuSection from "@/components/menu-section";
import AdressSection from "@/components/addressSection";
import ContactSection from "@/components/contactSection";
import Footer from "@/components/footer";
export default function Index() {

  return (
    <>
        <MainSection/>
        <About/>
        <MenuSection/>
        <AdressSection/>
        <ContactSection/>
        <Footer/>

    </>
  );
}

