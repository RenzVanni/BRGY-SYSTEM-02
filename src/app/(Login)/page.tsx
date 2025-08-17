// "use client";
import React from "react";
import { LoginForm } from "@/components/login-form";

const page = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-col item justify-between w-[50%] p-10 h-full bg-primary">
        <div>
          <h1 className="text-lg font-semibold">BRGY CORE</h1>
        </div>
        <div>
          <p className="text-lg">
            "Efficient governance, empowered communities—streamlining barangay
            management for a better tomorrow."
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-[50%] h-full">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
