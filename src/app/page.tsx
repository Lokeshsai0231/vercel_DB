import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import ProjectSection from "@/components/ui/ProjectSection";
import SearchSection from "@/components/ui/SearchSection";



export default function Home() {
  return (
   <div className="min-h-screen w-full flex gap-7 flex-col">
    <Header/>
    <section className="max-w-8xl px-8  flex flex-col gap-7 mx-auto w-full">
    <SearchSection/>
    <ProjectSection/>
    </section>
    <Footer/>
   </div>
  );
}
