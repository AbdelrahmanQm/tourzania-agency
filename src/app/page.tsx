"use client";
import { RadioGroup, Radio } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <RadioGroup label="Unit">
        <Radio value="days">Days</Radio>
        <Radio value="Hours">Hours</Radio>
      </RadioGroup>
    </div>
  );
}
