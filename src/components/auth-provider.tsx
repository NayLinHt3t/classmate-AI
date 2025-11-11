"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const publicRoutes = ["/login", "/signup", "/forgot-password"];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if route is public
    if (publicRoutes.includes(pathname)) {
      setIsChecking(false);
      return;
    }

    // Check authentication
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      router.push("/login");
    } else {
      setIsChecking(false);
    }
  }, [pathname, router]);

  // Show loading while checking auth
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
