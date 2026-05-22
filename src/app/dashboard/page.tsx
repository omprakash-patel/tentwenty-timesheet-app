import TimesheetTable from "@/components/table/TimesheetTable";
import Footer from  "@/components/front/Footer";
import Header from  "@/components/front/Header";
export default function DashboardPage() {
  return (
    <>
     <Header/>
      <TimesheetTable />
       <Footer />
      {/* <h1 className="mb-6 text-3xl font-bold">Dashboard</h1> */}

    </>
  );
}