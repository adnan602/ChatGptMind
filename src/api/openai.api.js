import client from "../axios-config";

export const chatCompletion = async({messages,model}) => {
  return await client.post("/completions",{
    messages:messages,
    model:model,
    stream:false




  })

};
export const titleCompletion = async({messages,model}) => {
  return await client.post("/completions",{
    messages:messages,
    model:model,
    stream:false
})
}
