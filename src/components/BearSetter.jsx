import { useState } from "react";
import { useBear } from "@/store/useBear";

export default function BearSetter(){
    const [value, setValue] = useState(0);
    const setBear = useBear((state) => state.setBear);
    return (
        <>
        <label className="pb-2 text-2xl">Enter bear population</label>
        <input value={value} onChange={a => setValue(Number(a.target.value))} type="number" className="border bg-gray-800 rounded-md cursor-text px-4 py-6"></input>
        <button onClick={() => setBear(value)} className="border bg-gray-800 rounded-md px-4 py-6 cursor-pointer">Submit</button>

        </>
    )
}