"use client"
import BearAdder from "@/components/BearAdder";
import BearRemover from "@/components/BearRemover";
import BearSetter from "@/components/BearSetter";
import { useBear } from "@/store/useBear";

export default function Home() {
  const bearPopulation = useBear((state) => state.bears)

  return (
    <main className="flex flex-col  items-center">
      <div className="text-2xl">Current bear population: {bearPopulation}</div>
      <div className="flex-row justify-evenly">
        <BearAdder />
        <BearRemover />
      </div>
      <BearSetter />
    </main>
  );
}
