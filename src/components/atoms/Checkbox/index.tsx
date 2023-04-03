import React from "react";
import Checkbox from "@mui/material/Checkbox";
interface CustomCheckBoxProps {
  label?: string;
  checked?: boolean;
}

const CustomCheckBox = (props: CustomCheckBoxProps) => {
  const { label, checked } = props;

  return (
    <div>
      <Checkbox id="checkbox" checked={checked} />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
};

export default CustomCheckBox;
