"use client";
import * as React from "react";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import SideBarImage from "./SideBarImage";
import { sideBarLinks } from "../appData/sideBarLinks";
import { testUser } from "../appData/sideBarLinks";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SideBarImage />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sideBarLinks} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={testUser} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
