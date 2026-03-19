import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


let bWord = "rose";

export async function POST(request) {
    let { fWord } = await request.json();
    if (fWord.trim().toLowerCase() === bWord.toLowerCase()) {
        return Response.json({
            success: true,
        })
    }
    const response = await openai.responses.create({
        model: "gpt-5-nano-2025-08-07",
        instructions: `The user is playing a game, they are trying to guess a word, the word is "${bWord}" Reply with a short clue about what the word might be. If the user is close let them know and guide them to be closer. Respond on russian. Rules:
- DO NOT say the word
- DO NOT include the word
- the clue should NOT reveal the word, it should not be obvious or close, it should be generic.
- HINT NO LONGER THAN 6 WORDS`,
        input: [
            { role: "user", content: fWord }
        ]
    })
    console.log("output text: ", response.output_text);
    return Response.json({
        success: false,
        hint: response.output_text
    })
}
export async function PUT(req) {
    const newWord = await req.json();
    bWord = newWord.bWord.trim()
    
    console.log(bWord)
    return Response.json({
        success: true
    });
}