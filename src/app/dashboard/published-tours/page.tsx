import { columns } from "./columns";
import { DataTable } from "./data-table";
import testTours from "@/components/appData/testTours";

export default async function DemoPage() {
  const data = testTours;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
