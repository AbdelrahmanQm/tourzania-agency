import { columns } from "./columns";
import { DataTable } from "./data-table";
import testTours from "@/components/appData/testTours";

export default async function DemoPage() {
  const data = testTours;

  return (
    <div className="container mx-auto pt-4 pb-10">
      <h2 className="text-section text-3xl">Published Tours</h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
