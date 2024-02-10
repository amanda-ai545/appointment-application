"use client";

import {IconAge} from "@/components/common/IconAge";
import {Logo} from "@/components/common/Logo";
import {useStore} from "@/store/useStore";

export default function Appointments() {
  const increasePopulation = useStore((state: any) => state.increasePopulation);
  const bears = useStore((state: any) => state.bears);

  return (
    <>
      <h1>{bears} around here...</h1>
      <button onClick={increasePopulation}>one up</button>
      <IconAge />
      <Logo />
    </>
  );
}
