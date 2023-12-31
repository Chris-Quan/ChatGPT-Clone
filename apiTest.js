require("dotenv").config();


const { Configuration, OpenAIApi} = require("openai");
const configuration = new Configuration({
    organization: process.env.OPENAI_ORG_KEY,
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();


async function callApi(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "how would you describe canadian culture?",
        max_tokens: 7,
        temperature: 0,
      });
    console.log(response.data.choices[0].text)
}

callApi()