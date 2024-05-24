import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">

        {/* Aceternity Floating Navbar */}
        <FloatingNav
          navItems={navItems}
        />

        {/* Hero Section with Aceternity Grid */}
        <Hero />

        {/* Aceternity Bento Grid */}
        <Grid />

        {/* Aceternity 3D Pin Card */}
        <RecentProjects />

        {/* Testimonials */}
        <Clients />
      </div>
    </main>
  );
}
