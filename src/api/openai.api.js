import client from "../axios-config";

export const chatCompletion = async ({ messages, model }) => {
  return await client.post("/completions", {
    messages: messages,
    model: model,
    stream: false,
  });
};
export const titleCompletion = async ({ messages, model }) => {
  return await client.post("/completions", {
    messages: messages,
    model: model,
    stream: false,
  });
};

export const IsAPIKeyValid = async () => {
  
    
  
  const response = await client.post("/completions", {
    messages: [
      {
        role: "user",
        content: "Hello",
      },
    ],
    model: "gpt-3.5-turbo",
    stream: false,
  });
  return response?.choices[0].message?.content ? true : false;

};
