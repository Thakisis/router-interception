"use client";
import { RiCloseLine } from "@remixicon/react";
import { useRouter } from "next/navigation";
import { Button } from "./button";

function ServerDialog({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <>
      <div className="animate-in fade-in-0 fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs"></div>
      <div
        role="dialog"
        className=" animate-infade-in-0 data-closed:zoom-out-95zoom-in-95 ring-foreground/10 fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl  text-sm ring-1 duration-100 outline-none sm:max-w-sm"
      >
        <Button
          variant="ghost"
          className="absolute top-2 right-2"
          size="icon-sm"
          onClick={() => router.back()}
        >
          <RiCloseLine />
          <span className="sr-only">Close</span>
        </Button>
        {children}
      </div>
    </>
  );
}

export default ServerDialog;
