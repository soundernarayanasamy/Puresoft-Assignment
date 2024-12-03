import { Sidebar } from "@/components/admin-panel/sidebar";
import { Navbar } from "@/components/admin-panel/navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar title="nav" />
      <Sidebar />
      <div className="flex flex-1 justify-center h-[100vh] items-center">
        <h1>Go to Reports in left Side bar for Beautiful UI</h1>
      </div>
    </div>
  );
}
