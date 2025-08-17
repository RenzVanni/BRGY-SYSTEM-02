"use client";
import AppSidebar from "@/components/AppSidebar";
import { ModeToggle } from "@/components/mode-btn";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ContextProvider } from "@/config/config_context";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname().split("/").join("");
  return (
    <ContextProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 flex flex-col pt-3 bg-sidebar overflow-hidden h-screen">
          <div className="flex items-center p-3 justify-between bg-background rounded-t-lg">
            <div className="flex items-center space-x-3">
              <SidebarTrigger />
              <Separator
                orientation="vertical"
                className="data-[orientation=vertical]:h-4"
              />
              <h1 className="text-base font-medium">{pathname}</h1>
            </div>
            <ModeToggle />
          </div>
          <Separator orientation="horizontal" />
          <div className=" p-3 space-y-3 bg-background overflow-y-auto flex-1">
            {children}
          </div>
        </main>
      </SidebarProvider>
    </ContextProvider>
  );
};

export default layout;
