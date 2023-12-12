import TasksTable from "./_components/tasks-table";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="w-2/3">
          <TasksTable />
        </div>
      </main>
      <Footer />
    </>
  );
}
