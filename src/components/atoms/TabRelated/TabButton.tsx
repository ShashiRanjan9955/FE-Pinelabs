import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Buttons/Button";

interface TabButtonProps {
  icon: string;
  label: string;
  description: string;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, description, active, onClick }) => {
  return (
    <Button onClick={onClick} active={active}>
      <span>
        <Image src={icon} width={24} height={24} alt={label} />
        {label}
      </span>
      <p>{description}</p>
    </Button>
  );
};

export default TabButton;
