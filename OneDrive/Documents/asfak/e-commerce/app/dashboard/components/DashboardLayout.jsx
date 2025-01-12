"use client";

import { Headers } from "@/app/component/Headers";
import { useAuth } from "@/lib/contexts/AuthContext";
import Link from "next/link";

export const DashboardLayout = ({ children }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return (
      <>
      <Headers title={"Dashboard"}/>
      <div className="p-4 flex justify-center gap-2">
        <h1>Your are not logged in !</h1>
        <Link href={"/login"}>
        <button className="text-blue-600 hover:underline" >Login</button>
        </Link>
      </div>
      </>
    );
  }

  return( <div>{children}</div>);
};
