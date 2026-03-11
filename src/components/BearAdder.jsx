import { useBear } from "@/store/useBear";

export default function BearAdder(){
    const addBear = useBear((state) => state.addBear)
    return (
        <button onClick={addBear} className="border bg-green-400 cursor-pointer rounded-md px-4 py-6 text-2xl">Bear born!</button>
    )
}