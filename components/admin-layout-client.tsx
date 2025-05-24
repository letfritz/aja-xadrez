"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ALLOWED_EMAILS = ["admin@email.com", "fritz.leticia@gmail.com"];

export default function AdminAccessCheck({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (isLoaded && user) {
      const email = user.primaryEmailAddress?.emailAddress ?? "";
      if (ALLOWED_EMAILS.includes(email)) {
        setIsAuthorized(true);
      } else {
        toast.error("Acesso negado. Este e-mail não tem permissão.");
        router.push("/");
      }
    }
  }, [isLoaded, user, router]);

  if (!isLoaded || !isAuthorized) {
    return null; // Evita mostrar qualquer conteúdo enquanto valida
  }

  return <>{children}</>;
}
