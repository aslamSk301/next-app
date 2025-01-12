import { AuthProvider } from "@/lib/contexts/AuthContext";
import { Headers } from "../component/Headers";
import { SignInButton } from "./components/SigInButton";

const login = () => {
  return (
    <main className="flex flex-col w-screen">
      <Headers title={"login"} />
      <div className="p-10 flex justify-center h-full">
        <AuthProvider>
        <SignInButton/>
        </AuthProvider>
      </div>
    </main>
  );
};
export default login;
