"use client"
import { useState, useEffect } from "react";
import { ThreeDot } from "react-loading-indicators";

export default function Home() {
  const [value, setValue] = useState("");
  const [clicked, setClicked] = useState(false)
  const [success, setSuccess] = useState(false);
  const [hint, setHint] = useState("");
  const [newWord, setNewWord] = useState("")

  const sendfWord = async (word) => {
    const response = await fetch("/api/word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ fWord: word })
    })
    const data = await response.json()
    setSuccess(data.success);
    setHint(data.hint || "no hint cuz the answer was correct, how are you even seing this");
  }

  const setbWord = async (word) => {
    const response = await fetch("/api/word", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ bWord: word })
    })
  }
  const resetState = () => {
  if(value !== ""){setValue("")};
  if(clicked == true){setClicked(false)};
  if(success == true){setSuccess(false)};
};



  return (
    <div className="px-4 py-2">


      <div className="flex w-full items-center flex-col pt-20">
        <div className="border-2 border-gray-300 rounded-xl py-2 px-3">
          <input value={value} onChange={a => {setValue(a.target.value); setHint(""); setClicked(false)}} className="rounded-md text-2xl pt-2" placeholder="Enter a word"></input>
          <button onClick={() => { setClicked(true); sendfWord(value);}} className="cursor-pointer text-2xl p-2">Send</button>
          {clicked && !success && <div>Wrong word! Hint: {hint ? hint : <ThreeDot variant="bounce" color="#d1d5db"
          size="small" text="" textColor="" />}</div>}
          {clicked && success && <div>
            <div>Omg you did it!</div>
            <div>As a prize you get to choose a new word that everyone will have to guess.</div>
            <div>What will it be?</div>
            <input value={newWord} onChange={a => {setNewWord(a.target.value);}} placeholder="Enter any word!"></input>
            <button onClick={() => { setbWord(newWord); resetState();}} className="cursor-pointer text-2xl p-2">Submit</button>
          </div>}
        </div>
      </div>
    </div>

  );
}

