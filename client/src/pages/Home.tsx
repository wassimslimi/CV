import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <MainContent isMobile={isMobile} />
    </div>
  );
}
