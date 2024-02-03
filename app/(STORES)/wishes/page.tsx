import WishesTable from "@/app/(STORES)/_components/WISHES/wishes-table";

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Wish List"
}

const WishPage = () => <WishesTable />;

export default WishPage;
