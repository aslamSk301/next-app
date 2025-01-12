"use client";
import Image from "next/image";
import { useAuth } from "@/lib/contexts/AuthContext";
import Link from "next/link";
export const SignInButton = () => {
  const { user, isLoading, isError, handelLogout, handelSignInWithGoogle } =
    useAuth();
  if (user) {
    return (
      <div>
        <h1>Logged In</h1>
        <h1>{user?.displayName}</h1>
        <h1>{user?.email}</h1>
        <Link href={"/dashboard"}>
          <button className="undeline text-blue-600">Go To Dashboard</button>
        </Link>
      </div>
    );
  }
  return (
    <>
    {isError ?? <p className="text-red-400">{isError}</p>}
    <button
      onClick={handelSignInWithGoogle}
      disabled={isLoading}
      className="flex gap-2 items-center bg-black text-white rounded-full px-3 py-2"
    >
      <Image src={"/google.png"} width={40} height={40} alt="logo" />
      <h1>{isLoading ? "Loading" : "SignIn with Google"}</h1>
    </button>
    
    </>
  );
};
