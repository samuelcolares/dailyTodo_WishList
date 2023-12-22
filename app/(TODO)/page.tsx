import TasksTable from "./_components/TODO/tasks-table";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { silk } from "@/fonts";
import { cn } from "@/lib/utils";
import WishesTable from "./_components/WISHES/wishes-table";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center flex-col">
        <div className="w-2/3 p-1">
          <TasksTable />
        </div>
        <Accordion type="single" collapsible className="w-2/3">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h2 className={cn("text-2xl", silk.className)}>Wish list</h2>
            </AccordionTrigger>
            <AccordionContent className="p-1">
              <WishesTable />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
      <Footer />
    </>
  );
}
