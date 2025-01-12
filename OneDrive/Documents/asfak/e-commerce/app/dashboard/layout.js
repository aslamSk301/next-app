import { AuthProvider } from "@/lib/contexts/AuthContext";
import { DashboardLayout } from "./components/DashboardLayout";

export default function Layout ({ children }){
  return (
   <AuthProvider>
    <DashboardLayout>
      {children}
    </DashboardLayout>

   </AuthProvider>

  );
};
