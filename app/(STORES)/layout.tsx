"use client";

import { store } from "@/providers/store";
import { Provider } from "react-redux";

const StoresLayout = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <div className="w-2/3 p-1">{children}</div>
  </Provider>
);

export default StoresLayout;

// Stores = TODO store and Wishes store
