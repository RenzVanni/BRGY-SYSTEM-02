import React from "react";
type Prop = {
  color: string;
  width: string;
  height: string;
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
};
const BlurCircle = ({
  color,
  width,
  height,
  top,
  left,
  bottom,
  right,
}: Prop) => {
  return (
    <div
      className={`opacity-30 rounded-full blur-[300px] absolute z-[-10]`}
      style={{
        backgroundColor: color,
        width,
        height,
        top,
        bottom,
        left,
        right,
      }}
    ></div>
  );
};

export default BlurCircle;
