import React from "react";
import SIdebar from "../components/sidebar/Sidebar";

async function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    <SIdebar>
      <div className="h-full">{children}</div>
    </SIdebar>
  );
}

export default UsersLayout;
