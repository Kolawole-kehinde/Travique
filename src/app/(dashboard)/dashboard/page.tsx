import DashboardHeader from "@/src/features/dashboard/DashboardHeader";
import DashbordComponents from "@/src/features/dashboard/DashbordComponents";

export default function DashboardPage({ }) {
  return (
     <main className="">
         <DashboardHeader
      title="Welcome,Khennycool 👋"
      description="Track activity, trends, and popular destinations in real time"
      showButton
      buttonLabel="Create a trip"
      // onButtonClick={() => console.log("Create trip clicked")}
    />
    <DashbordComponents/>
     </main>

  );
}
