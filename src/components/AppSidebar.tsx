"use client";
import { SIDEBAR_DATA, sidebar_navigation_data } from "@/data/sidebar";
import { ChevronDown, ChevronUp, LogOut, User2 } from "lucide-react";
import Image from "next/image";
import React, { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import { DARK_GREEN } from "@/constants/colors";
import CustomIcons from "./CustomIcons";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import Link from "next/link";
import { logout_auth } from "@/actions/auth";
import { redirect } from "next/navigation";
import { LOGIN } from "@/constants/navigation";
import { ModeToggle } from "./mode-btn";
import NavMain from "./SidebarComponents/NavMain";
import NavDocuments from "./SidebarComponents/NavDocuments";
import NavSecondary from "./SidebarComponents/NavSecondary";

const AppSidebar = () => {
  const [isOptions, setIsOptions] = useState<null | number>(null);
  const router = useRouter();
  const handleNavigation = ({ id, slug }: { id: number; slug: string }) => {
    if (slug) return router.push(slug);
    setIsOptions((prev) => (prev == id ? null : id));
    console.log(slug);
  };

  return (
    <Sidebar className="border-none">
      <SidebarHeader className="pt-6 pl-6">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/brgy-logo.png"
                alt="logo"
                width={35}
                height={35}
              />
              <p>Barangay Zone 4</p>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <NavMain items={SIDEBAR_DATA.navMain} />
              <NavDocuments items={SIDEBAR_DATA.navDocuments} />
              <NavSecondary items={SIDEBAR_DATA.navSecondary} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    logout_auth(), router.push(LOGIN);
                  }}
                >
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
