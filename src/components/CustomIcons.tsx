import { LucideProps } from "lucide-react";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

interface CustomIconsProps {
  CustomIcon: React.ComponentType<LucideProps>;
}
const CustomIcons: React.FC<CustomIconsProps> = ({ CustomIcon }) => {
  return <CustomIcon color="#f8f9fa" size={16} />;
};

export default CustomIcons;
