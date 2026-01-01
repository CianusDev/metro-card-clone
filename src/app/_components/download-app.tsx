import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export function DownloadApp() {
  return (
    <div className="mt-24 w-full space-y-8">
      <div className="rounded-3xl grid grid-cols-1 space-y-4 gap-4 md:grid-cols-2 bg-secondary">
        <div className="space-y-4  p-8">
          <h1 className=" text-4xl md:text-5xl font-semibold">
            Want to try? <br /> Download our app now.
          </h1>
          <p className="text-muted-foreground">
            Traditional credit cards have high fees <br /> and confusing rewards
            programs.
          </p>
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Image
              src={"/assets/app_store.png"}
              alt="google play"
              className="cursor-pointer border-2 rounded-xl w-full h-20"
              width={170}
              height={40}
            />
            <Image
              src={"/assets/play-store.png"}
              alt="google play"
              className="cursor-pointer border-2 rounded-xl w-full h-20"
              width={200}
              height={40}
            />
          </div>
        </div>
        <div className="relative w-full flex justify-center">
          <Image
            src={"/assets/phone.webp"}
            alt="phone"
            className="md:absolute bottom-0 m-auto"
            width={380}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
