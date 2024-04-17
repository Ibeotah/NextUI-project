import React from "react";
import { Input } from "@nextui-org/react";

export default function Email() {
  const placement = "outside";
  return (
    // <div className="flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      {/* <h3 className="text-default-500 text-small">Without placeholder</h3> */}
      <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
        {/* Render only one Input with labelPlacement set to "outside" */}
        <Input
          key={placement}
          type="email"
          label="Email"
          labelPlacement={placement}
          placeholder="Enter email address"
          // description={placement}
        />
      </div>
    </div>
  );
}
