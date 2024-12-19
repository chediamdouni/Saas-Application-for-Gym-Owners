"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import {
  AudioWaveform,
  Calendar,
  Clock,
  CreditCard,
  Command,
  GalleryVerticalEnd,
  Home,
  Inbox,
  BarChart,
  LifeBuoy,
  Send,
} from "lucide-react";

import { NavUser } from "./nav-user";
import { GymSwitcher } from "./gym-switcher";
import { NavSecondary } from "./nav-secondary";

const items = [
  {
    title: "Dashboard",
    url: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Members",
    url: "/admin/members",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Attendance",
    url: "#",
    icon: Clock,
  },
  {
    title: "Payments",
    url: "#",
    icon: CreditCard,
  },
  {
    title: "Reports",
    url: "#",
    icon: BarChart,
  },
];

const data = {
  user: {
    username: "chedi amdouni",
    email: "chedi@example.com",
    profileImage: "/avatars/shadcn.jpg",
  },
  gyms: [
    {
      name: "Power Fitness",
      logo: GalleryVerticalEnd,
      plan: "Basic",
    },
    {
      name: "Power Gym",
      logo: AudioWaveform,
      plan: "Pro",
    },
    {
      name: "Corona Fitness",
      logo: Command,
      plan: "Free",
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ className }: { className?: string }) {
  return (
    <Sidebar collapsible="icon" className={className}>
      <SidebarHeader>
        <GymSwitcher gyms={data.gyms} />
      </SidebarHeader>
      <SidebarSeparator className="bg-slate-400 mt-2" />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
