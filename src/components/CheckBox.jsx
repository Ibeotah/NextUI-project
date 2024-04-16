import React from "react";
import { Checkbox } from "@nextui-org/react";

export default function CheckBox() {
  return (
    <div className="w-[133px] h-[24px] mb-7">
      <Checkbox defaultSelected color="default">
        <div className="font-Rubik font-normal text-xs leading-[1.71]">
          Remember Me
        </div>
      </Checkbox>
    </div>
  );
}
