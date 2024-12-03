import { Sidebar } from "@/components/admin-panel/sidebar";
import { Navbar } from "@/components/admin-panel/navbar";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar/>
      <Navbar />
    </div>
  );
}
