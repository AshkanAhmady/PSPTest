import SideBar from "@/Components/SideBar";
import { LayoutPropsType } from "@/types";


export default function Layout({ children }: LayoutPropsType) {
  return (
    <div className="h-screen flex flex-col items-stretch">
      <header className="bg-stone-400 shadow-lg h-[60px] items-center w-full text-white flex justify-center font-medium text-2xl">
        <h1>PSP-EXPRESS</h1>
      </header>
      <main className="flex bg-red-700 min-h-[calc(100%_-_60px)]">
        <SideBar />
        <div className="flex-1 bg-violet-600 px-3 py-6 text-white">
          {children}
        </div>
      </main>
    </div>
  );
}
