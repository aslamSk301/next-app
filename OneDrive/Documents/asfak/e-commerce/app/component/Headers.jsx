import Image from "next/image";
import fire from "@/public/fire.webp";
import Link from "next/link";
import { HeaderBtn } from "./HeaderButton";
import { AuthProvider } from "@/lib/contexts/AuthContext";
export const Headers = ({title}) => {
  return (
    <>
      

      <nav className="flex justify-between p-4 border-b">
        <div className="flex gap-2 items-center">
          <Image src={fire} width={50} height={50} alt="logo" />
          <h1 className="font-bold" >{title}</h1>
        </div>
        <div>
        <AuthProvider>
        <HeaderBtn />
        </AuthProvider>
        </div>
      </nav>
    </>
  );
};
