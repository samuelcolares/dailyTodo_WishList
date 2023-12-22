"use client";

import { store } from "@/providers/store";
import { Provider } from "react-redux";

const TODOLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <>{children}</>
    </Provider>
  );
};
export default TODOLayout;