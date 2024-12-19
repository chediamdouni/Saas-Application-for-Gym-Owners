import { AppSidebar } from "@/components/pages/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarSeparator,
  // SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar className="bg-slate-100" />
      <SidebarInset className="min-h-screen w-full flex flex-col py-2 bg-slate-200">
        <main className="flex-1 w-full rounded-l-lg bg-white border-gray-300 border-y-2 border-l-2">
          {/* <SidebarTrigger /> */}
          <div className="flex flex-col justify-start items-start ps-3 pb-2 pt-2">
            <h1 className="text-xl">Hello, Chedi Amdouni !</h1>
            <p className="text-sm text-gray-500">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long", // Full day name (e.g., Tuesday)
                day: "2-digit", // Day number (e.g., 19)
                month: "long", // Full month name (e.g., December)
                year: "numeric", // Full year (e.g., 2024)
              })}
            </p>
          </div>
          <SidebarSeparator />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
