"use server";

import React from "react";
import { type Metadata } from 'next'
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminAccessCheck from "@/components/admin-layout-client";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import  AppSidebar from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/providers/theme-provider";

const ALLOWED_EMAILS = ["felipeeldebs@gmail.com", "diegoberardino@gmail.com", 
  "alvinik79@gmail.com", "fritz.leticia@gmail.com", "leticia.fritz@estudante.ufjf.br"];

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  return (
    <ClerkProvider>
      <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
        <SignedIn>
          <AdminAccessCheck>
            <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <p className="text-lg md:text-xl text-[#C6AF78] font-bold">
                    Acesso Administrador
                  </p>
                </div>
              </header>
                {children}
            </SidebarInset>
          </SidebarProvider>
          </AdminAccessCheck>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ThemeProvider>
    </ClerkProvider>
  );
}
