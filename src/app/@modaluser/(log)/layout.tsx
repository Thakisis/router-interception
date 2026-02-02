import type React from "react";
import ServerDialog from "@/components/ui/server-dialog";

function ModalLayout({ children }: { children: React.ReactNode }) {
  return <ServerDialog>{children}</ServerDialog>;
}

export default ModalLayout;
