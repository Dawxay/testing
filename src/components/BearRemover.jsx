import { useBear } from "@/store/useBear";


export default function BearRemover(){
    const removeBear = useBear((state) => state.removeBear)

    return (
        <button onClick={removeBear} className="border bg-red-500 rounded-md cursor-pointer px-4 py-6 text-2xl">Bear died...</button>
    )
}