import Banner from "@/components/Banner";
import Aboutme from "@/components/Aboutme";
import Experience from "@/components/Experience";
export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
       <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <Aboutme />
        <Experience />
       </div>
    </main>
  );
}
