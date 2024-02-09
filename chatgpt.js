import OpenAI from "openai";
import dotenv from "dotenv"
dotenv.config ();

const openai = new OpenAI();

async function query_gpt(query) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: query }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

export default query_gpt
// query_gpt(query);