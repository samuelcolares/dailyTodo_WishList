import TasksTable from "@/app/(STORES)/_components/TODO/tasks-table";

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "TODO List"
}

const TODOPage = () => <TasksTable />;

export default TODOPage;