"use client";

import { useAuth } from "@/lib/contexts/AuthContext";
import Link from "next/link";

export const HeaderBtn = () => {
  const { user, handelLogout } = useAuth();

  return (
    <div className="flex gap-4 items-center">
      {!user && (
        <Link href={"/login"}>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Login
          </button>
        </Link>
      )}
     
      {user && (<Link href={'/dashboard'}>{user.displayName}</Link>)}
      {user && (
        
          <button onClick={handelLogout} className="bg-black text-white px-4 py-2 rounded-full">
            LogOut
          </button>
      )}
    </div>
  );
};
