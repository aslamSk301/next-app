import react from "react";
import { Headers } from "../component/Headers";
const DashboardPage = () => {
  return (
    <main>
      <Headers title={"Dashboard"} />
      <div className="p-4 flex justify-center">
        <h1>protected routed</h1>
      </div>
    </main>
  );
};
export default DashboardPage;
