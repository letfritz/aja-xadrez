import { SquareTerminal } from "lucide-react";

import { currentUser } from "@clerk/nextjs/server";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";


export default async function AppSidebar() {
  
  const user = await currentUser();

  const data = {
  user: {
    name: user?.fullName || "Usuário",
    email: user?.emailAddresses[0]?.emailAddress || "sem-email@example.com",
    avatar: user?.imageUrl || "/default-avatar.png",
  },
  navMain: [
    {
      title: "Conteúdos",
      url: "#",
      icon: "square-terminal",
      isActive: true,
      items: [
        {
          title: "Artigos",
          url: "/admin/articles",
        },
        {
          title: "Depoimentos",
          url: "/admin/testimonials",
        },
      ],
    },
  ],
  projects: [],
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
