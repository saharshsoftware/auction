import React from "react";

interface ICustomBadge {
  label: string;
  onclick?: (data?: any) => void;
}

const CustomBadge: React.FC<ICustomBadge> = (props) => {
  const { label, onclick } = props;
  return (
    <div className="custom-badge-class" onClick={onclick}>
      {label}
    </div>
  );
};

export default CustomBadge;
