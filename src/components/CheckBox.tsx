import React from "react";
import { Checkbox } from "@nextui-org/react";

const CheckBox: React.FC = () => {
  return (
    <div className="w-[133px] h-[24px]">
      <Checkbox defaultChecked color="primary">
        <div className="font-Rubik font-normal text-xs leading-[1.71]">
          Remember Me
        </div>
      </Checkbox>
    </div>
  );
};

export default CheckBox;
