import SideBar from "@/Components/SideBar";
import { LayoutProps } from "@/types";


export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen flex flex-col items-stretch">
      <header className="bg-stone-400 shadow-lg p-2 w-full text-white flex justify-center font-medium text-2xl">
        <h1>PSP-EXPRESS</h1>
      </header>
      <main className="flex h-[100%]">
        <SideBar />
        <div className="flex-1 bg-violet-600 px-3 py-6 text-white">
          {children}
        </div>
      </main>
    </div>
  );
}
