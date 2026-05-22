import WeekTimesheetView from "@/components/table/WeekTimesheetView";
import Footer from "@/components/front/Footer"
import Header from "@/components/front/Header"
async function getTimesheet(
  id: string
) {
 const res = await fetch(
  `${process.env.NEXTAUTH_URL}/api/timesheets/${id}`,
  {
    cache: "no-store",
  }
);

  if (!res.ok) {
    throw new Error(
      "Failed to fetch timesheet"
    );
  }

  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } =
    await params;

  const response = await getTimesheet(id);
  return (
    <>
      <Header />
      <WeekTimesheetView data={response.data} />
      <Footer />
    </>
  );
}