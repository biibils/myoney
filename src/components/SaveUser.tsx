'use client'

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function SaveUser() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.email) {
      fetch("/api/save-user", { method: "POST" });
    }
  }, [session]);

  return null;
}