import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-3 flex flex-col">
        <SidebarTrigger />
        <div className="flex flex-col flex-1 items-start justify-start space-y-6">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
};

export default layout;
