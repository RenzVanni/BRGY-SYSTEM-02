import React from "react";

const CustomTitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="font-bold text-3xl">{children}</p>;
};

export default CustomTitle;
